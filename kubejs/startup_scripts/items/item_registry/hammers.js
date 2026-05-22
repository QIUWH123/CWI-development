function transformBlock(level, entity, itemStack, hand) {
    if (level.isClientSide()) return
    if (!entity.isPlayer()) return
    entity.addItemCooldown(itemStack.item, 20)
    let hit = entity.rayTrace(5)
    if (!hit || hit.type !== 'block') return
    let block = hit.block
    if (!block) return
    let currentBlockId = String(block.id)
    let map = global.conversionMap
    if (!map) return
    let conversion = map[currentBlockId]
    if (!conversion) return
    let targetBlockId = typeof conversion === 'string' ? conversion : conversion.target
    let drops = typeof conversion === 'object' ? conversion.drops : []
    let pos = hit.block.pos
    level.runCommandSilent(`particle minecraft:block ${currentBlockId} ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.5 0.5 0.5 0.05 60`)
    level.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.6 0.6 0.6 0.05 16`)
    level.runCommandSilent(`playsound block.anvil.place block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
    drops.forEach(drop => {
        if (Math.random() < (drop.chance || 1.0)) {
            let count = drop.count || 1
            block.popItem(`${count}x ${drop.item}`)
        }
    })
    block.set(targetBlockId)
    if (!entity.isCreative()) {itemStack.hurtAndBreak(1, entity, (e) => e.broadcastBreakEvent(hand))}
    entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:item.flintandsteel.use', 'players', 0.5, 0.4)
}

StartupEvents.registry('item', event => {
    const hammers = [
        ['bronze_hammer', 'bronze', 18],
        ['iron_hammer', 'iron', 20],
        ['brass_hammer', 'create_sa:brass', 18],
        ['stone_hammer', 'stone', 25],
        ['gold_hammer', 'gold', 12],
        ['netherite_hammer', 'netherite', 15]
    ]
    hammers.forEach(([name, tier, requiredCharge]) => {
        event.create(name, 'sword')
            .texture(`kubejs:item/tools/${name}`)
            .tier(tier)
            .attackDamageBaseline(3)
            .unstackable()
            .useAnimation('spear')
            .useDuration(itemStack => {
                return 100000
            })
            .use((level, player, hand) => {
                player.persistentData.chargedHammer_charging = true
                player.persistentData.chargedHammer_notified = false
                return true
            })
            .releaseUsing((itemStack, level, entity, durationLeft) => {
                if (entity.persistentData.chargedHammer_charging) {
                    entity.persistentData.chargedHammer_charging = false
                    let hand = entity.getUsedItemHand()
                    let chargedTicks = 100000 - durationLeft
                    if (chargedTicks >= requiredCharge) {
                        transformBlock(level, entity, itemStack, hand)
                    }
                    let item = entity.getItemInHand(hand)
                    if (item.nbt && item.nbt.CustomModelData === 1) {
                        item.nbt = { CustomModelData: 0 }
                        entity.setItemInHand(hand, item)
                    }
                }
                return itemStack
            })
            .finishUsing(itemStack => itemStack)
    })
})