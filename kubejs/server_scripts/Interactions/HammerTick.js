let HAMMER_REQUIREMENTS = {}
global.hammers.forEach(([name, material, ticks]) => {
    HAMMER_REQUIREMENTS['minecraft:' + name] = ticks
})

PlayerEvents.tick(event => {
    const player = event.player
    const level = player.level
    if (!player.persistentData.chargedHammer_charging) {
        let mainHand = player.getItemInHand('main_hand')
        if (mainHand && mainHand.id in HAMMER_REQUIREMENTS) {
            if (mainHand.nbt?.CustomModelData !== 0) {
                mainHand.nbt = Object.assign({}, mainHand.nbt || {}, { CustomModelData: 0 })
                player.setItemInHand('main_hand', mainHand)
            }
        }
        return
    }
    let item = player.getItemInHand('main_hand')
    if (!item || item.id === 'minecraft:air' || !(item.id in HAMMER_REQUIREMENTS)) {
        player.persistentData.chargedHammer_charging = false
        return
    }
    let remainingTicks = player.getUseItemRemainingTicks()
    if (remainingTicks <= 0) {
        player.persistentData.chargedHammer_charging = false
        if (item.nbt?.CustomModelData !== 0) {
            item.nbt = Object.assign({}, item.nbt || {}, { CustomModelData: 0 })
            player.setItemInHand('main_hand', item)
        }
        return
    }
    let requiredCharge = HAMMER_REQUIREMENTS[item.id]
    let chargedTicks = 100000 - remainingTicks
    let stage = Math.min(Math.floor(chargedTicks / requiredCharge), 3)
    let targetModel = stage >= 1 ? stage : 0
    let currentModel = item.nbt?.CustomModelData ?? 0
    if (targetModel !== currentModel) {
        item.nbt = Object.assign({}, item.nbt || {}, { CustomModelData: targetModel })
        player.setItemInHand('main_hand', item)
        if (targetModel > currentModel && targetModel > 0) {
            if (!level.isClientSide()) {
                level.playSound(null, player.x, player.y, player.z,
                    'minecraft:item.trident.return', 'players', 1.0, 1.5)
            }
        }
    }
})