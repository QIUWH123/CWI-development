ServerEvents.recipes(event => {

    event.shaped(
        'minecraft:anvil',
        [
            'AAA',
            ' B ',
            'BBB'
        ],
        {
            A: 'create:industrial_iron_block',
            B: 'kubejs:industrial_iron_ingot'
        }
    )

})