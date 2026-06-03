function transformBlockOnce(level, entity, itemStack, hand) {
    if (level.isClientSide() || !entity.isPlayer()) return false
    const hit = entity.rayTrace(5)
    if (!hit || hit.type !== 'block') return false
    const block = hit.block
    if (!block) return false
    const map = global.conversionMap
    if (!map) return false
    const currentId = String(block.id)
    const conversion = map[currentId]
    if (!conversion) return false
    const targetId = typeof conversion === 'string' ? conversion : conversion.target
    const drops = typeof conversion === 'object' ? conversion.drops : []
    const pos = hit.block.pos

    level.runCommandSilent(`particle minecraft:block ${currentId} ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.5 0.5 0.5 0.05 60`)
    level.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.6 0.6 0.6 0.05 16`)
    level.runCommandSilent(`playsound block.anvil.place block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)

    drops.forEach(drop => {
        if (Math.random() < (drop.chance ?? 1.0)) {
            block.popItem(`${drop.count ?? 1}x ${drop.item}`)
        }
    })
    block.set(targetId)
    return true
}

StartupEvents.registry('item', event => {
    global.hammers.forEach(([name, tier, requiredCharge]) => {
        const id = 'minecraft:' + name
        event.create(id, 'sword')
            .tier(tier)
            .attackDamageBaseline(3)
            .unstackable()
            .modelJson({
                "parent": "item/handheld",
                "textures": {"layer0": `kubejs:item/tools/${tier}_hammer`},
                "overrides": [
                    {"predicate": {"custom_model_data": 1}, "model": `minecraft:item/charged_${tier}_hammer_1`},
                    {"predicate": {"custom_model_data": 2}, "model": `minecraft:item/charged_${tier}_hammer_2`},
                    {"predicate": {"custom_model_data": 3}, "model": `minecraft:item/charged_${tier}_hammer_3`}
                ]
            })
            .useAnimation('spear')
            .useDuration(() => 100000)
            .use((level, player, hand) => {
                player.persistentData.chargedHammer_charging = true
                player.persistentData.chargedHammer_notified = false
                return true
            })
            .releaseUsing((itemStack, level, entity, durationLeft) => {
                if (!entity.persistentData.chargedHammer_charging) return itemStack
                entity.persistentData.chargedHammer_charging = false
                const hand = entity.getUsedItemHand()
                const chargedTicks = 100000 - durationLeft
                const stage = Math.min(Math.floor(chargedTicks / requiredCharge), 3)
                let successCount = 0
                if (stage >= 1) {
                    for (let i = 0; i < stage; i++) {
                        if (transformBlockOnce(level, entity, itemStack, hand)) {
                            successCount++
                        } else {
                            break
                        }
                    }
                    if (successCount > 0) {
                        entity.addItemCooldown(itemStack.item, Math.floor(20 * Math.sqrt(successCount)))
                        if (!entity.isCreative()) {
                            itemStack.hurtAndBreak(successCount, entity, (e) => e.broadcastBreakEvent(hand))
                        }
                    }
                    if (!level.isClientSide()) {
                        level.playSound(null, entity.x, entity.y, entity.z,
                            'minecraft:item.trident.throw', 'players', 1.0, 1.0)
                    }
                }
                const item = entity.getItemInHand(hand)
                if (item.nbt?.CustomModelData !== 0) {
                    item.nbt = Object.assign({}, item.nbt, { CustomModelData: 0 })
                    entity.setItemInHand(hand, item)
                }
                return itemStack
            })
            .finishUsing(itemStack => itemStack)
    })
})