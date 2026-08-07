ServerEvents.recipes(event => {

// Backpacks Extension Recipes

    event.shaped(
        'kubejs:backpack_extension',
        [
            'BA',
            'CB'
        ],
        {
            A: '#cwi:string',
            B: '#cwi:leathers',
            C: '#cwi:rubbers'
        }
    )

// Backpacks Recipes

    event.shaped(
        'sophisticatedbackpacks:backpack',
        [
            'ABA',
            'BCB',
            'DED'
        ],
        {
            A: '#cwi:string',
            B: '#cwi:leathers',
            C: 'minecraft:chest',
            D: 'kubejs:andesite_alloy_sheet',
            E: 'create:andesite_alloy'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:copper_backpack',
        [
            'AFA',
            'BCB',
            'DED'
        ],
        {
            A: '#cwi:string',
            B: 'kubejs:backpack_extension',
            C: 'sophisticatedbackpacks:backpack',
            D: 'create:brass_sheet',
            E: 'create:brass_ingot',
            F: '#cwi:leathers'
        }
    )

// Upgrades Recipes

    event.shaped(
        'sophisticatedbackpacks:upgrade_base',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#cwi:string',
            B: 'create:andesite_alloy',
            C: '#cwi:leathers'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:filter_upgrade',
        [
            'CDC',
            'BAB',
            'CDC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:filter',
            C: 'minecraft:iron_nugget',
            D: 'create:iron_sheet'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_filter_upgrade',
        [
            'CDC',
            'BAB',
            'CDC'
        ],
        {
            A: 'sophisticatedbackpacks:filter_upgrade',
            B: 'create:attribute_filter',
            C: 'create:brass_nugget',
            D: 'create:brass_sheet'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:stack_upgrade_starter_tier',
        [
            'CBC',
            'DAD',
            'CBC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:copper_sheet',
            C: '#cwi:rubbers',
            D: 'create:fluid_pipe'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:stack_upgrade_tier_1',
        [
            'CBC',
            'DAD',
            'CBC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'kubejs:andesite_alloy_sheet',
            C: 'create:andesite_alloy',
            D: 'kubejs:andesite_machine'
        }
    )

    event.recipes.create.mechanical_crafting(
        'sophisticatedbackpacks:stack_upgrade_tier_2',
        [
            'CBC',
            'DAD',
            'CBC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:brass_sheet',
            C: 'create:electron_tube',
            D: 'kubejs:precise_machine'
        }
    )

    event.recipes.create.mechanical_crafting(
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        [
            'CBC',
            'DAD',
            'CBC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'tfmg:heavy_plate',
            C: 'tfmg:steel_mechanism',
            D: 'kubejs:heavy_machine'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:jukebox_upgrade',
        [
            'CDC',
            'BAB',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:iron_ingot',
            C: 'create:iron_sheet',
            D: 'minecraft:jukebox',
            E: 'sophisticatedbackpacks:filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_jukebox_upgrade',
        [
            'CDC',
            'BAB',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:electron_tube',
            C: 'create:brass_sheet',
            D: 'minecraft:jukebox',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:restock_upgrade',
        [
            'CDC',
            'BAB',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:iron_ingot',
            C: 'create:iron_sheet',
            D: 'create:chute',
            E: 'sophisticatedbackpacks:filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_restock_upgrade',
        [
            'CDC',
            'BAB',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:electron_tube',
            C: 'create:brass_sheet',
            D: 'create:smart_chute',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:deposit_upgrade',
        [
            'CEC',
            'BAB',
            'CDC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'minecraft:iron_ingot',
            C: 'create:iron_sheet',
            D: 'create:chute',
            E: 'sophisticatedbackpacks:filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_deposit_upgrade',
        [
            'CEC',
            'BAB',
            'CDC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'create:electron_tube',
            C: 'create:brass_sheet',
            D: 'create:smart_chute',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        [
            'CBC',
            'DAD',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'kubejs:integrated_electron_tube',
            C: 'create:brass_sheet',
            D: 'create:deployer',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        [
            'CBC',
            'DAD',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'kubejs:integrated_electron_tube',
            C: 'create:brass_sheet',
            D: 'create:mechanical_arm',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

    event.shaped(
        'sophisticatedbackpacks:advanced_alchemy_upgrade',
        [
            'CBC',
            'DAD',
            'CEC'
        ],
        {
            A: 'sophisticatedbackpacks:upgrade_base',
            B: 'kubejs:integrated_electron_tube',
            C: 'create:brass_sheet',
            D: 'fluid:pipette',
            E: 'sophisticatedbackpacks:advanced_filter_upgrade'
        }
    )

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