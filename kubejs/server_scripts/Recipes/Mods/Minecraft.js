ServerEvents.recipes(event => {

    event.shaped(
        'minecraft:cobblestone',
        [
            'AA',
            'AA',
        ],
        {
            A: 'kubejs:pebbles'
        }
    )

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

    event.shaped(
        'minecraft:lightning_rod',
        [
            'A',
            'B',
            'B'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: 'createaddition:copper_rod'
        }
    )

})