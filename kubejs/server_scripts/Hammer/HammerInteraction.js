// Release Hammer

global.releaseHammer = function(itemStack, level, player, durationLeft, requiredCharge, effectiveMax) {
    if (!player.persistentData.chargedHammer_charging) return itemStack
    player.persistentData.chargedHammer_charging = false
    let hand = player.getUsedItemHand()
    let stage = Math.min(Math.floor((100000 - durationLeft) / requiredCharge), effectiveMax)
    let success = false

    if (stage < 1) {
        let it = player.getItemInHand(hand)
        if (it.nbt && it.nbt.CustomModelData !== 0) {
            it.nbt = Object.assign({}, it.nbt, { CustomModelData: 0 })
            player.setItemInHand(hand, it)
        }
        return itemStack
    }

    if (!level.isClientSide()) {
        level.playSound(null, player.x, player.y, player.z, 'minecraft:item.trident.throw', 'players', 1, 1)
        let hit = player.rayTrace(5)

        if (hit && hit.type === 'entity') {
            let damage = player.getAttributeValue('minecraft:generic.attack_damage') * stage
            let target = hit.entity

            target.attack(player.damageSources().playerAttack(player), damage)
            target.potionEffects.add('minecraft:slowness', 5 * stage, 255, true, true)
            let multiplier = Math.sqrt(stage)
            if (player.getItemInHand(hand) === 'minecraft:lead_hammer') target.potionEffects.add('clanginghowl:neurotoxin', Math.round(multiplier * random(100, 200)), Math.round(random(0, 0.7)), true, true)
            if (player.getItemInHand(hand) === 'kubejs:steel_pipe') {
                target.addMotion(0, multiplier, 0)
                level.server.runCommandSilent(`playsound kubejs:steel_pipe neutral @a ${target.x} ${target.y + target.getBbHeight() / 2} ${target.z} ${0.8 * multiplier} 1`)
            } else {
                level.playSound(null, target.x, target.y + target.getBbHeight() / 2, target.z, 'block.anvil.place', 'neutral', 1, 1)
            }
            level.spawnParticles('minecraft:crit', true, target.x, target.y + target.getBbHeight() / 2, target.z, 0.2, 0.2, 0.2, 16 * stage, 0.6 * multiplier)
            success = true
        } else if (player.getItemInHand(hand) === 'kubejs:steel_pipe') {
            return
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
                        let count = d.count || 1
                        for (let c = 0; c < count; c++) {
                            if (Math.random() < (d.chance || 1)) {
                                block.popItem(d.item)
                            }
                        }
                    })

                    block.set(target)
                    success = true
                }
            }
        }

        if (success) {
            player.addItemCooldown(itemStack.item, Math.floor(requiredCharge * Math.sqrt(stage)))
            itemStack.hurtAndBreak(stage, player, function() {})
        }
    }

    let item = player.getItemInHand(hand)
    if (item.nbt && item.nbt.CustomModelData !== 0) {
        item.nbt = Object.assign({}, item.nbt, { CustomModelData: 0 })
        player.setItemInHand(hand, item)
    }

    return itemStack
}