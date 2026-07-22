StartupEvents.registry('item', event => {
    global.hammers.forEach(([name, tier, requiredCharge, maxStage, attackDamageBaseline]) => {
        const effectiveMax = maxStage || 3
        event.create('minecraft:' + name, 'sword')
            .tier(tier)
            .attackDamageBaseline(3 + attackDamageBaseline)
            .unstackable()
            .tag('minecraft:hammers')
            .tag('forge:tools')
            .tag('minecraft:breaks_decorated_pots')
            .modelJson({
                parent: 'item/handheld',
                textures: { layer0: `kubejs:item/tools/${name}` },
                overrides: [
                    { predicate: { custom_model_data: 1 }, model: `minecraft:item/charged_${name}_1` },
                    { predicate: { custom_model_data: 2 }, model: `minecraft:item/charged_${name}_2` },
                    { predicate: { custom_model_data: 3 }, model: `minecraft:item/charged_${name}_3` }
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
    event.create('minecraft:hammer_1')
    event.create('minecraft:hammer_2')
    event.create('minecraft:hammer_3')
})