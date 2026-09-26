// Hammers

global.hammers = [
    ['bronze_hammer', 'bronze', 12, 3, 4],
    ['industrial_iron_hammer', 'industrial_iron', 13, 3, 4],
    ['brass_hammer', 'brass', 13, 2, 3],
    ['steel_hammer', 'steel', 11, 3, 5],
    ['stainless_steel_hammer', 'stainless_steel', 10, 3, 6],
    ['iron_hammer', 'iron', 14, 3, 2],
    ['rusted_iron_hammer', 'rusted_iron', 16, 2, 1],
    ['stone_hammer', 'stone', 18, 1, 0],
    ['golden_hammer', 'gold', 8, 1, 0],
    ['zinc_hammer', 'zinc', 9, 1, 2],
    ['copper_hammer', 'copper', 15, 2, 1],
    ['lead_hammer', 'lead', 21, 1, 5],
    ['netherite_hammer', 'netherite', 9, 3, 0]
]

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