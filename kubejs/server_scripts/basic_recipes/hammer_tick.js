const HAMMER_REQUIREMENTS = {
    'kubejs:bronze_hammer': 18,
    'kubejs:iron_hammer': 20,
    'kubejs:stone_hammer': 25,
    'kubejs:gold_hammer': 12,
    'kubejs:netherite_hammer': 15
}

PlayerEvents.tick(event => {
    const { player, level } = event
    if (!player.persistentData.chargedHammer_charging) {
        let mainHand = player.getItemInHand('main_hand')
        if (mainHand && mainHand.id in HAMMER_REQUIREMENTS) {
            let tag = mainHand.nbt
            if (tag && tag.CustomModelData === 1) {
                mainHand.nbt = { CustomModelData: 0 }
                player.setItemInHand('main_hand', mainHand)
            }
        }
        return
    }
    let item = player.getItemInHand('main_hand')
    let itemId = item.id
    if (!(itemId in HAMMER_REQUIREMENTS)) return
    let requiredCharge = HAMMER_REQUIREMENTS[itemId]
    let remainingTicks = player.getUseItemRemainingTicks()
    if (remainingTicks < 0) return
    let chargedTicks = 100000 - remainingTicks
    let isCharged = chargedTicks >= requiredCharge
    let currentModelData = (item.nbt && item.nbt.CustomModelData) || 0;
    if (isCharged && currentModelData !== 1) {
        item.nbt = { CustomModelData: 1 }
        player.setItemInHand('main_hand', item)
    } else if (!isCharged && currentModelData !== 0) {
        item.nbt = { CustomModelData: 0 }
        player.setItemInHand('main_hand', item)
    }
})