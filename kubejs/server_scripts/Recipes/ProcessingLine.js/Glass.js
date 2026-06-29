ServerEvents.recipes(event => {

    event.recipes.create.mixing('kubejs:glass_batch', ['2x minecraft:sand', 'kubejs:soda_powder', 'tfmg:limesand'])

    event.smelting('kubejs:sintered_glass_blank', 'kubejs:glass_batch')
    event.blasting('kubejs:sintered_glass_blank', 'kubejs:glass_batch')

    event.smelting('kubejs:heated_glass', 'minecraft:glass')
    event.blasting('kubejs:heated_glass', 'minecraft:glass')

    event.recipes.create.compacting('kubejs:pressed_glass_blank', 'kubejs:sintered_glass_blank')

    event.recipes.create.sequenced_assembly(
        [
            Item.of('minecraft:glass').withChance(0.63),
            Item.of('kubejs:devitrified_glass').withChance(0.24),
            Item.of('kubejs:cracked_glass').withChance(0.13)
        ],
        'kubejs:pressed_glass_blank', 
        [
            event.recipes.create.filling('kubejs:quenched_glass_blank', ['kubejs:quenched_glass_blank', {fluidTag: "cwi:water", amount: 1000}])
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
            event.recipes.create.filling('kubejs:quenched_tempered_glass_blank', ['kubejs:quenched_tempered_glass_blank', {fluidTag: "cwi:water", amount: 1000}])
        ]
    )
    .transitionalItem('kubejs:quenched_tempered_glass_blank')
    .loops(1)

    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [
            "tfmg:cast_iron_vat",
            "tfmg:steel_vat",
            "tfmg:firebrick_lined_vat"
        ],
        "ingredients": [
            {"item": "kubejs:heated_glass"},
            {"fluid": "kubejs:molten_saltpeter", "amount": 100}
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 1200,
        "results": [
            {"item": "kubejs:ion_exchanged_glass_blank"},
            {"fluid": "kubejs:molten_potassium_sodium_nitrate", "amount": 100}
        ]
    })

    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'minecraft:glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:tempered_glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:cracked_glass')
    event.recipes.create.milling(['2x kubejs:glass_powder', Item.of('kubejs:glass_powder').withChance(0.75), Item.of('kubejs:glass_powder').withChance(0.25)], 'kubejs:devitrified_glass')

})