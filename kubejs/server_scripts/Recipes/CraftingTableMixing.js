ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('kubejs:brass_powder', 3),
        [
            '2x kubejs:copper_powder',
            '2x kubejs:zinc_powder'
        ]
    )

    event.shapeless(
        Item.of('kubejs:bronze_powder', 3),
        [
            '3x kubejs:copper_powder',
            'kubejs:tin_powder'
        ]
    )

    event.shapeless(
        Item.of('kubejs:constantan_powder', 3),
        [
            '3x kubejs:copper_powder',
            'kubejs:nickel_powder'
        ]
    )

    event.shapeless(
        Item.of('kubejs:electrum_powder', 3),
        [
            '3x kubejs:gold_powder',
            'kubejs:silver_powder'
        ]
    )

})