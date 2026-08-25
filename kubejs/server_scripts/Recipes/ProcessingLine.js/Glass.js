ServerEvents.recipes(event => {

    event.recipes.create.mixing(['kubejs:glass_batch', 'kubejs:soda_powder', 'kubejs:limestone_powder'], ['2x minecraft:sand', 'kubejs:soda_powder', 'kubejs:limestone_powder'])
    event.recipes.create.mixing(['kubejs:ion_exchanged_glass_blank', Fluid.of('kubejs:molten_potassium_sodium_nitrate', 100)], ['kubejs:heated_glass', Fluid.of('kubejs:molten_saltpeter', 100)]).processingTime(800)
    event.recipes.create.mixing(Fluid.of('kubejs:molten_saltpeter', 100), Fluid.of('kubejs:molten_potassium_sodium_nitrate', 100)).processingTime(800).heatRequirement('superheated')

    event.smelting('kubejs:sintered_glass_blank', 'kubejs:glass_batch')
    event.blasting('kubejs:sintered_glass_blank', 'kubejs:glass_batch')

    event.smelting('kubejs:heated_glass', 'minecraft:glass')
    event.blasting('kubejs:heated_glass', 'minecraft:glass')

    event.recipes.create.compacting('kubejs:pressed_glass_blank', 'kubejs:sintered_glass_blank')

    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:glass').withChance(0.76),
            Item.of('kubejs:devitrified_glass').withChance(0.13),
            Item.of('kubejs:cracked_glass').withChance(0.11)
        ],
        'kubejs:pressed_glass_blank', 
        [
            event.recipes.create.filling('kubejs:quenched_glass_blank', ['kubejs:quenched_glass_blank', AddFluid('1000 #cwi:water')])
        ]
    )
    .transitionalItem('kubejs:quenched_glass_blank')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:tempered_glass').withChance(0.86),
            Item.of('kubejs:devitrified_glass').withChance(0.09),
            Item.of('kubejs:cracked_glass').withChance(0.05)
        ],
        'kubejs:ion_exchanged_glass_blank', 
        [
            event.recipes.create.filling('kubejs:quenched_tempered_glass_blank', ['kubejs:quenched_tempered_glass_blank', AddFluid('1000 #cwi:water')])
        ]
    )
    .transitionalItem('kubejs:quenched_tempered_glass_blank')
    .loops(1)

    vatRecipe(event, null, [], ["tfmg:cast_iron_vat", "tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:heated_glass'),
            AddFluid('100 kubejs:molten_saltpeter')
        ],
        [
            AddItem('kubejs:ion_exchanged_glass_blank'),
            AddFluid('100 kubejs:molten_potassium_sodium_nitrate')
        ],
        600
    )

    vatRecipe(event, 'superheated', [], ["tfmg:cast_iron_vat", "tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('100 kubejs:molten_potassium_sodium_nitrate')
        ],
        [
            AddFluid('100 kubejs:molten_saltpeter')
        ],
        600
    )

    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'minecraft:glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:tempered_glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:cracked_glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:devitrified_glass')

})