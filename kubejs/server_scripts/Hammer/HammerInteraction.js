global.releaseHammer = function(itemStack, level, entity, durationLeft, requiredCharge, effectiveMax) {
    if (!entity.persistentData.chargedHammer_charging) return itemStack
    entity.persistentData.chargedHammer_charging = false
    let hand = entity.getUsedItemHand()
    let stage = Math.min(Math.floor((100000 - durationLeft) / requiredCharge), effectiveMax)
    let success = false
    if (stage < 1) {
        let it = entity.getItemInHand(hand)
        if (it.nbt && it.nbt.CustomModelData !== 0) {
            it.nbt = Object.assign({}, it.nbt, { CustomModelData: 0 })
            entity.setItemInHand(hand, it)
        }
        return itemStack
    }

    if (!level.isClientSide()) {
        level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:item.trident.throw', 'players', 1, 1)
        let hit = entity.rayTrace(5)
        if (hit && hit.type === 'entity') {
            let damage = entity.getAttributeValue('minecraft:generic.attack_damage') * stage
            hit.entity.attack(entity.damageSources().playerAttack(entity), damage)
            let multiplier = Math.sqrt(stage)
            level.playSound(null, hit.entity.x, hit.entity.y + entity.getBbHeight() / 2, hit.entity.z, 'block.anvil.place', 'neutral', 1, 1)
            level.spawnParticles('minecraft:crit', true, hit.entity.x, hit.entity.y + entity.getBbHeight() / 2, hit.entity.z, 0.2, 0.2, 0.2, 16 * stage, 0.6 * multiplier)
            success = true
        } else if (hit && hit.type === 'block') {
            let pos = hit.block.pos
            let block = level.getBlock(pos)

            if (block.id === 'create:depot' && hit.facing && hit.facing.getName() === 'up') {
                let entityData = block.entityData
                if (entityData && entityData.HeldItem && entityData.HeldItem.Item) {
                    let heldItem = entityData.HeldItem.Item
                    let conv = global.depotConversions[heldItem.id]
                    if (conv && stage >= (conv.requireStage || 1)) {
                        let count = heldItem.Count || 1
                        if (count === 1) {
                            level.server.runCommandSilent(`data modify block ${pos.x} ${pos.y} ${pos.z} HeldItem.Item set value {id:"${conv.target}",Count:1b}`)
                        } else {
                            let outputItems = (entityData.OutputBuffer && entityData.OutputBuffer.Items) || []
                            let targetItem = outputItems.find(function(it) { return it.id === conv.target })
                            let targetCount = targetItem ? (targetItem.Count || 1) : 0
                            level.server.runCommandSilent(`data modify block ${pos.x} ${pos.y} ${pos.z} HeldItem.Item.Count set value ${count - 1}`)
                            level.server.runCommandSilent(`data modify block ${pos.x} ${pos.y} ${pos.z} OutputBuffer.Items append value {id:"${conv.target}",Count:${targetCount + 1}b}`)
                        }
                        level.playSound(null, pos.x + 0.5, pos.y + 0.9, pos.z + 0.5, 'block.anvil.place', 'neutral', 1, 1)
                        level.spawnParticles(`minecraft:item ${conv.target}`, true, pos.x + 0.5, pos.y + 0.9, pos.z + 0.5, 0.1, 0.3, 0.1, 12, 0.2)
                        success = true
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
                    level.spawnParticles(`minecraft:falling_dust minecraft:gravel`, true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.6, 0.6, 0.6, 16, 0.05)
                    level.spawnParticles(`minecraft:block ${block.id}`, true, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0.5, 0.5, 0.5, 60, 0.05)
                    level.playSound(null, pos.x, pos.y, pos.z, 'block.anvil.place', 'neutral', 1, 1)
                    drops.forEach(function(d) {
                        if (Math.random() < (d.chance || 1)) block.popItem(d.item)
                    })
                    block.set(target)
                    success = true
                }
            }
        }
        if (success) {
            entity.addItemCooldown(itemStack.item, Math.floor(20 * Math.sqrt(stage)))
            itemStack.hurtAndBreak(stage, entity, function() {})
        }
    }

    let item = entity.getItemInHand(hand)
    if (item.nbt && item.nbt.CustomModelData !== 0) {
        item.nbt = Object.assign({}, item.nbt, { CustomModelData: 0 })
        entity.setItemInHand(hand, item)
    }
    return itemStack
}