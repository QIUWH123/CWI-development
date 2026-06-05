let HAMMER_REQUIREMENTS = {}
let HAMMER_MAX_STAGE = {}
global.hammers.forEach(function(arr) {
    HAMMER_REQUIREMENTS['minecraft:' + arr[0]] = arr[2]
    HAMMER_MAX_STAGE['minecraft:' + arr[0]] = arr[3] || 3
})

PlayerEvents.tick(function(event) {
    let player = event.player
    let data = player.persistentData
    let mainHand = player.getItemInHand('main_hand')

    if (!data.chargedHammer_charging || mainHand.id === 'minecraft:air' || !(mainHand.id in HAMMER_REQUIREMENTS)) {
        if (data.chargedHammer_charging) data.chargedHammer_charging = false
        if (mainHand.id in HAMMER_REQUIREMENTS && mainHand.nbt && mainHand.nbt.CustomModelData !== 0) {
            mainHand.nbt = Object.assign({}, mainHand.nbt, { CustomModelData: 0 })
            player.setItemInHand('main_hand', mainHand)
        }
        return
    }

    let remaining = player.getUseItemRemainingTicks()
    if (remaining <= 0) {
        data.chargedHammer_charging = false
        if (mainHand.nbt && mainHand.nbt.CustomModelData !== 0) {
            mainHand.nbt = Object.assign({}, mainHand.nbt, { CustomModelData: 0 })
            player.setItemInHand('main_hand', mainHand)
        }
        return
    }

    let stage = Math.min(Math.floor((100000 - remaining) / HAMMER_REQUIREMENTS[mainHand.id]), HAMMER_MAX_STAGE[mainHand.id])
    let targetModel = stage > 0 ? stage : 0
    let currentModel = mainHand.nbt ? (mainHand.nbt.CustomModelData || 0) : 0

    if (targetModel !== currentModel) {
        mainHand.nbt = Object.assign({}, mainHand.nbt || {}, { CustomModelData: targetModel })
        player.setItemInHand('main_hand', mainHand)
        if (targetModel > currentModel && !event.level.isClientSide()) {
            event.level.playSound(null, player.x, player.y, player.z, 'minecraft:item.trident.return', 'players', 1, 1.5)
        }
    }
})