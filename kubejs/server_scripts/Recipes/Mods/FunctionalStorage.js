ServerEvents.recipes(event => {

// Functional Storage Tier 4 Fluid Drawer

    event.shaped(
        'functionalstorage:fluid_4',
        [
            'ABA',
            'BBB',
            'ABA'
        ],
        {
            A: 'create:fluid_tank',
            B: 'kubejs:industrial_iron_ingot'
        }
    )

// Functional Storage Tier 2 Fluid Drawer

    event.shaped(
        'functionalstorage:fluid_2',
        [
            'BAB',
            'BBB',
            'BAB'
        ],
        {
            A: 'create:fluid_tank',
            B: 'kubejs:industrial_iron_ingot'
        }
    )

// Functional Storage Tier 1 Fluid Drawer

    event.shaped(
        'functionalstorage:fluid_1',
        [
            'BBB',
            'BAB',
            'BBB'
        ],
        {
            A: 'create:fluid_tank',
            B: 'kubejs:industrial_iron_ingot'
        }
    )

// Functional Storage Controller

    event.recipes.create.mechanical_crafting(
        'functionalstorage:storage_controller',
        [
            'BCB',
            'DAD',
            'BEB'
        ],
        {
            A: 'kubejs:precise_machine',
            B: 'create:brass_sheet',
            C: 'create_connected:control_chip',
            D: 'create_connected:inventory_access_port',
            E: 'create:brass_casing'
        }
    )

// Functional Storage Controller Extension

    event.recipes.create.mechanical_crafting(
        '3x functionalstorage:controller_extension',
        [
            'BCB',
            'DAD',
            'BEB'
        ],
        {
            A: 'create:brass_casing',
            B: 'create:brass_sheet',
            C: 'create_connected:control_chip',
            D: 'create_connected:inventory_access_port',
            E: 'create:brass_ingot'
        }
    )

})

// Functional Storage Drawers Auto Generated

ServerEvents.recipes(event => {

    const types = [
        ['oak', 'createdieselgenerators:chip_wood_block'],
        ['oak', 'minecraft:oak_planks'],
        ['spruce', 'minecraft:spruce_planks'],
        ['birch', 'minecraft:birch_planks'],
        ['jungle', 'minecraft:jungle_planks'],
        ['acacia', 'minecraft:acacia_planks'],
        ['dark_oak', 'minecraft:dark_oak_planks'],
        ['crimson', 'minecraft:crimson_planks'],
        ['warped', 'minecraft:warped_planks'],
        ['mangrove', 'minecraft:mangrove_planks'],
        ['cherry', 'minecraft:cherry_planks'],
        ['framed', 'kubejs:industrial_iron_wire']
    ]

    const cores = ['create:item_vault', 'create_connected:item_silo']

    types.forEach(([wood, material]) => {
        cores.forEach(core => {
            event.shaped(`functionalstorage:${wood}_1`, ['AAA','ABA','AAA'], { A: material, B: core })
            event.shaped(`functionalstorage:${wood}_2`, ['AAA','BAB','AAA'], { A: material, B: core })
            event.shaped(`functionalstorage:${wood}_4`, ['BAB','AAA','BAB'], { A: material, B: core })
        })
    })
})