ServerEvents.recipes(event => {

    event.recipes.create.mixing('kubejs:wet_sand_batch', ['minecraft:sand', '2x minecraft:clay_ball'])
    event.recipes.create.mixing(Fluid.of('kubejs:molten_tempered_glass', 500), [Fluid.of('kubejs:molten_glass', 500), 'kubejs:soda_powder', '2x tfmg:limesand'])
    event.recipes.create.mixing(Fluid.of('kubejs:molten_borosilicate_glass', 500), [Fluid.of('kubejs:molten_tempered_glass', 500), 'kubejs:quartz_powder', '2x kubejs:borax_powder'])
    event.recipes.create.mixing(Fluid.of('kubejs:molten_borosilicate_glass', 500), [Fluid.of('kubejs:molten_glass', 500), 'kubejs:soda_powder', 'kubejs:quartz_powder', '2x tfmg:limesand', '2x kubejs:borax_powder'])

    event.blasting('kubejs:hot_glass', 'kubejs:wet_sand_batch')

    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:glass').withChance(0.63),
            Item.of('kubejs:devitrified_glass').withChance(0.24),
            Item.of('kubejs:cracked_glass').withChance(0.13)
        ],
        'kubejs:hot_glass', 
        [
            event.recipes.create.pressing('kubejs:cooling_glass', 'kubejs:cooling_glass'),
            event.recipes.create.pressing('kubejs:cooling_glass', 'kubejs:cooling_glass'),
            event.recipes.create.pressing('kubejs:cooling_glass', 'kubejs:cooling_glass')
        ]
    )
    .transitionalItem('kubejs:cooling_glass')
    .loops(1)

    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'minecraft:glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:cracked_glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:devitrified_glass')

    event.custom({
        "type": "createmetallurgy:melting",
        "heatRequirement": "superheated",
        "ingredients": [{ "item": "kubejs:glass_powder", "count": 2  }],
        "processingTime": 300,
        "results": [{ "amount": 500, "fluid": "kubejs:molten_glass" }]
    })

    event.custom({
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [{ "item": "kubejs:glass_powder", "count": 2 }],
            "maxHeatRequirement": 50,
        "minHeatRequirement": 9,
        "processingTime": 300,
        "results": [{ "amount": 500, "fluid": "kubejs:molten_glass" }]
    })

})