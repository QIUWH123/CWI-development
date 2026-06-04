let HAMMER_REQUIREMENTS = {}
let HAMMER_MAX_STAGE = {}
global.hammers.forEach(([name, material, ticks, maxStage]) => {
    HAMMER_REQUIREMENTS['minecraft:' + name] = ticks
    HAMMER_MAX_STAGE['minecraft:' + name] = maxStage || 3
})

PlayerEvents.tick(event => {
    const player = event.player
    const level = player.level
    const data = player.persistentData

    if (!data.chargedHammer_charging) {
        const mainHand = player.getItemInHand('main_hand')
        if (mainHand && mainHand.id in HAMMER_REQUIREMENTS && mainHand.nbt?.CustomModelData !== 0) {
            mainHand.nbt = Object.assign({}, mainHand.nbt || {}, { CustomModelData: 0 })
            player.setItemInHand('main_hand', mainHand)
        }
        return
    }

    const item = player.getItemInHand('main_hand')
    if (!item || item.id === 'minecraft:air' || !(item.id in HAMMER_REQUIREMENTS)) {
        data.chargedHammer_charging = false
        return
    }

    const remaining = player.getUseItemRemainingTicks()
    if (remaining <= 0) {
        data.chargedHammer_charging = false
        if (item.nbt?.CustomModelData !== 0) {
            item.nbt = Object.assign({}, item.nbt || {}, { CustomModelData: 0 })
            player.setItemInHand('main_hand', item)
        }
        return
    }

    const requiredCharge = HAMMER_REQUIREMENTS[item.id]
    const maxStage = HAMMER_MAX_STAGE[item.id]
    const stage = Math.min(Math.floor((100000 - remaining) / requiredCharge), maxStage)
    const targetModel = stage > 0 ? stage : 0
    const currentModel = item.nbt?.CustomModelData ?? 0

    if (targetModel !== currentModel) {
        item.nbt = Object.assign({}, item.nbt || {}, { CustomModelData: targetModel })
        player.setItemInHand('main_hand', item)
        if (targetModel > currentModel && !level.isClientSide()) {
            level.playSound(null, player.x, player.y, player.z,
                'minecraft:item.trident.return', 'players', 1.0, 1.5)
        }
    }
})