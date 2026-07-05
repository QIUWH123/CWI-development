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
            B: 'createdeco:industrial_iron_ingot'
        }
    )

})