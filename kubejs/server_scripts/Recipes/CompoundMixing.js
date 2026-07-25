ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('kubejs:brass_powder', 3),
        [
            '2x kubejs:copper_powder',
            '2x kubejs:zinc_powder'
        ]
    ).id('cwi:crafting_table/brass_powder_mixing_manual_only')

    event.recipes.create.mixing('4x kubejs:brass_powder', ['2x kubejs:copper_powder', '2x kubejs:zinc_powder'])

    event.shapeless(
        Item.of('kubejs:bronze_powder', 3),
        [
            '3x kubejs:copper_powder',
            'kubejs:tin_powder'
        ]
    ).id('cwi:crafting_table/bronze_powder_mixing_manual_only')

    event.recipes.create.mixing('4x kubejs:bronze_powder', ['3x kubejs:copper_powder',  'kubejs:tin_powder'])

    event.shapeless(
        Item.of('kubejs:constantan_powder', 3),
        [
            '3x kubejs:copper_powder',
            'kubejs:nickel_powder'
        ]
    ).id('cwi:crafting_table/constantan_powder_mixing_manual_only')

    event.recipes.create.mixing('4x kubejs:constantan_powder', ['3x kubejs:copper_powder', 'kubejs:nickel_powder'])

    event.shapeless(
        Item.of('kubejs:electrum_powder', 3),
        [
            '3x kubejs:gold_powder',
            'kubejs:silver_powder'
        ]
    ).id('cwi:crafting_table/electrum_powder_mixing_manual_only')

    event.recipes.create.mixing('4x kubejs:electrum_powder', ['3x kubejs:gold_powder', 'kubejs:silver_powder'])

})