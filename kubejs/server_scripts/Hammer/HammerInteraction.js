global.releaseHammer = function(itemStack, level, entity, durationLeft, requiredCharge, effectiveMax) {
    if (!entity.persistentData.chargedHammer_charging) return itemStack
    entity.persistentData.chargedHammer_charging = false
    let hand = entity.getUsedItemHand()
    let stage = Math.min(Math.floor((100000 - durationLeft) / requiredCharge), effectiveMax)
    let success = 0
    if (stage < 1) {
        let it = entity.getItemInHand(hand)
        if (it.nbt && it.nbt.CustomModelData !== 0) {
            it.nbt = Object.assign({}, it.nbt, { CustomModelData: 0 })
            entity.setItemInHand(hand, it)
        }
        return itemStack
    }

    if (!level.isClientSide()) {
        let hit = entity.rayTrace(5)
        if (hit && hit.type === 'block') {
            let pos = hit.block.pos
            let block = level.getBlock(pos)

            if (block.id === 'create:depot' && hit.facing && hit.facing.getName() === 'up') {
                let entityData = block.entityData
                if (entityData && entityData.HeldItem && entityData.HeldItem.Item) {
                    let conv = global.depotConversions[entityData.HeldItem.Item.id]
                    if (conv && stage >= (conv.requireStage || 1)) {
                        level.server.runCommandSilent(`execute in ${level.dimension} run data modify block ${pos.x} ${pos.y} ${pos.z} HeldItem.Item set value {id:"${conv.target}",Count:1b}`)
                        level.runCommandSilent(`particle minecraft:item ${conv.target} ${pos.x + 0.5} ${pos.y + 0.9} ${pos.z + 0.5} 0.1 0.15 0.1 0.15 8`)
                        level.runCommandSilent(`playsound block.anvil.place block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
                        success = 1
                    }
                }
            } else {
                for (let i = 0; i < stage; i++) {
                    block = level.getBlock(pos)
                    if (!block || block.id === 'minecraft:air') break
                    let conv = global.blockConversions[String(block.id)]
                    if (!conv || stage < (conv.requireStage || 1)) break
                    let target = typeof conv === 'string' ? conv : conv.target
                    let drops = typeof conv === 'object' ? conv.drops : []
                    level.runCommandSilent(`particle minecraft:block ${block.id} ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.5 0.5 0.5 0.05 60`)
                    level.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.6 0.6 0.6 0.05 16`)
                    level.runCommandSilent(`playsound block.anvil.place block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
                    drops.forEach(function(d) {
                        if (Math.random() < (d.chance || 1)) block.popItem(d.item)
                    })
                    block.set(target)
                    success++
                }
            }

            if (success > 0) {
                entity.addItemCooldown(itemStack.item, Math.floor(20 * Math.sqrt(success)))
                if (!entity.isCreative()) itemStack.hurtAndBreak(success, entity, function() {})
                level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:item.trident.throw', 'players', 1, 1)
            }
        }
    }

    let item = entity.getItemInHand(hand)
    if (item.nbt && item.nbt.CustomModelData !== 0) {
        item.nbt = Object.assign({}, item.nbt, { CustomModelData: 0 })
        entity.setItemInHand(hand, item)
    }
    return itemStack
}