StartupEvents.registry('item', event => {
    global.hammers.forEach(([name, tier, requiredCharge, maxStage, attackDamageBaseline]) => {
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
            .releaseUsing((itemStack, level, player, durationLeft) => {
                return global.releaseHammer(itemStack, level, player, durationLeft, requiredCharge, maxStage)
            })
            .finishUsing(itemStack => itemStack)
    })  
    event.create('minecraft:hammer_1')
    event.create('minecraft:hammer_2')
    event.create('minecraft:hammer_3')

    event.create('steel_pipe', 'sword')
            .tier('steel')
            .attackDamageBaseline(3)
            .unstackable()
            .tag('forge:tools')
            .tag('minecraft:breaks_decorated_pots')
            .useAnimation('spear')
            .useDuration(() => 100000)
            .use((_, player) => {
                player.persistentData.chargedHammer_charging = true
                return true
            })
            .releaseUsing((itemStack, level, player, durationLeft) => {
                return global.releaseHammer(itemStack, level, player, durationLeft, 40, 3)
            })
            .finishUsing(itemStack => itemStack)
})