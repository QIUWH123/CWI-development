StartupEvents.registry('item', event => {
    global.hammers.forEach(([name, tier, requiredCharge, maxStage]) => {
        const effectiveMax = maxStage || 3
        event.create('minecraft:' + name, 'sword')
            .tier(tier)
            .attackDamageBaseline(3)
            .unstackable()
            .modelJson({
                parent: 'item/handheld',
                textures: { layer0: `kubejs:item/tools/${tier}_hammer` },
                overrides: [
                    { predicate: { custom_model_data: 1 }, model: `minecraft:item/charged_${tier}_hammer_1` },
                    { predicate: { custom_model_data: 2 }, model: `minecraft:item/charged_${tier}_hammer_2` },
                    { predicate: { custom_model_data: 3 }, model: `minecraft:item/charged_${tier}_hammer_3` }
                ]
            })
            .useAnimation('spear')
            .useDuration(() => 100000)
            .use((_, player) => {
                player.persistentData.chargedHammer_charging = true
                return true
            })
            .releaseUsing((itemStack, level, entity, durationLeft) => {
                return global.releaseHammer(itemStack, level, entity, durationLeft, requiredCharge, effectiveMax)
            })
            .finishUsing(itemStack => itemStack)
    })
})