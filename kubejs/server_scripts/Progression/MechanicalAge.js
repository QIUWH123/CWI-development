ServerEvents.recipes(event => {

// Shapeless

    event.shapeless(
        'kubejs:filled_wood_sheet_mold',
        [
            'kubejs:andesite_compound',
            'kubejs:wood_sheet_mold'
        ]
    ).id('cwi:crafting_table/filled_wood_sheet_mold_manual_only')

    event.shapeless(
        'kubejs:mechanic_manual',
        [
            'kubejs:mechanic_manual_scrap_top',
            'kubejs:mechanic_manual_scrap_middle',
            'kubejs:mechanic_manual_scrap_bottom'
        ]
    ).id('cwi:crafting_table/fix_mechanic_manual_manual_only')

    event.shapeless(
        'darkerdepths:rope',
        [
            '3x farmersdelight:rope'
        ]
    ).id('cwi:crafting_table/crafting_rope_manual_only')

    event.shapeless(
        'kubejs:net',
        [
            '6x #cwi:string'
        ]
    ).id('cwi:crafting_table/weaving_net_manual_only')

    event.shapeless(
        'create:encased_chain_drive',
        [
            'create:andesite_casing',
            '#cwi:rubbers'
        ]
    ).id('cwi:crafting_table/encased_chain_drive_manual_only')

    event.shapeless(
        '2x kubejs:andesite_compound',
        [
            '3x minecraft:clay_ball',
            '3x kubejs:andesite_powder'
        ]
    ).id('cwi:crafting_table/andesite_compound_mixing_manual_only')

    event.shapeless(
        'create:white_sail',
        [
            'create:sail_frame',
            'kubejs:net'
        ]
    ).id('cwi:crafting_table/white_sail_manual_only')

    event.shapeless(
        'vintageimprovements:grinder_belt',
        [
            'create:belt_connector',
            '2x minecraft:sand'
        ]
    )

    event.shapeless(
        '4x createdieselgenerators:wood_chip',
        [
            'createdieselgenerators:chip_wood_block'
        ]
    )

    event.shapeless(
        'minecraft:slime_ball',
        [
            'kubejs:sticky_resin',
            'minecraft:lime_dye'
        ]
    )
    
    event.shapeless(
        'kubejs:claystone_clump',
        [
            '2x kubejs:cobbled_claystone',
            '2x minecraft:cobblestone'
        ]
    )

    event.shapeless(
        'kubejs:claystone_clump',
        [
            '2x kubejs:cobbled_claystone',
            '2x minecraft:cobbled_deepslate'
        ]
    )

    event.shapeless(
        'kubejs:claystone_clump',
        [
            '2x kubejs:cobbled_claystone',
            '2x kubejs:cobbled_diorite'
        ]
    )

    event.shapeless(
        'kubejs:claystone_clump',
        [
            '2x kubejs:cobbled_claystone',
            '2x kubejs:cobbled_andesite'
        ]
    )

    event.shapeless(
        'kubejs:claystone_clump',
        [
            '2x kubejs:cobbled_claystone',
            '2x kubejs:cobbled_granite'
        ]
    )

// Shaped

    event.shaped(
        'minecraft:blast_furnace',
        [
            'BDB',
            'DAD',
            'CCC'
        ],
        {
            A: 'minecraft:furnace',
            B: 'create:iron_sheet',
            C: 'create:andesite_alloy',
            D: 'kubejs:andesite_alloy_sheet'
        }
    )

    event.shaped(
        'kubejs:wood_sheet_mold',
        [
            'A A',
            'AAA'
        ],
        {
            A: 'createdieselgenerators:wood_chip'
        }
    )

    event.shaped(
        'kubejs:synthetic_feather',
        [
            ' A ',
            'AAA',
            'ABA'
        ],
        {
            A: 'tfmg:synthetic_string',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:minecart',
        [
            'A A',
            'AAA'
        ],
        {
            A: 'create:iron_sheet'
        }
    )

    event.shaped(
        'minecraft:hopper',
        [
            'A A',
            'ABA',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:filter'
        }
    )

    event.shaped(
        'minecraft:cauldron',
        [
            'B B',
            'B B',
            'ABA'
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'create:iron_sheet'
        }
    )

    event.shaped(
        'create:mechanical_pump',
        [
            'ABC'
        ],
        {
            A: 'kubejs:andesite_bearing',
            B: 'create:fluid_pipe',
            C: 'create:propeller'
        }
    )

    event.shaped(
        'create:portable_storage_interface',
        [
            'AB',
        ],
        {
            A: 'kubejs:andesite_machine',
            B: 'create:chute'
        }
    )

    event.shaped(
        'geode_plus:nether_quartz_crystal_block',
        [
            'AA',
            'AA'
        ],
        {
            A: 'minecraft:quartz'
        }
    )

    event.shaped(
        '2x minecraft:oak_trapdoor',
        [
            'AAA',
            'AAA'
        ],
        {
            A: 'createdieselgenerators:chip_wood_block'
        }
    )

    event.shaped(
        '3x minecraft:oak_sign',
        [
            'AAA',
            'AAA',
            ' B '
        ],
        {
            A: 'createdieselgenerators:chip_wood_block',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        'create_power_loader:andesite_chunk_loader',
        [
            'EAE',
            'ABA',
            'CDC'
        ],
        {
            A: '#cwi:glass1',
            B: 'kubejs:andesite_bearing',
            C: 'create:andesite_casing',
            D: 'kubejs:andesite_machine',
            E: 'kubejs:andesite_alloy_sheet'
        }
    )

    event.shaped(
        'createaddition:rolling_mill',
        [
            'ABA',
            'CBC',
            'CDC'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:shaft',
            C: 'create:andesite_alloy',
            D: 'create:andesite_casing'
        }
    )

    event.shaped(
        'create:crushing_wheel',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'minecraft:stick',
            B: 'create:andesite_alloy',
            C: 'create:andesite_alloy_block'
        }
    )

    event.shaped(
        'create:depot',
        [
            'A',
            'B'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:andesite_casing'
        }
    )

    event.shaped(
        'create:millstone',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:cogwheel',
            B: '#minecraft:planks',
            C: 'create:andesite_alloy_block'
        }
    )

    event.shaped(
        'createdieselgenerators:bulk_fermenter',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:fluid_tank'
        }
    )

    event.shaped(
        'createdieselgenerators:basin_lid',
        [
            ' B ',
            'AAA'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'minecraft:clock'
        }
    )

    event.shaped(
        'createmetallurgy:foundry_lid',
        [
            ' B ',
            'CCC',
            'A A'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'minecraft:clock',
            C: 'create:andesite_alloy'
        }
    )

    event.shaped(
        'create:basin',
        [
            'A A',
            'AAA'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet'
        }
    )

    event.shaped(
        'createdieselgenerators:hammer',
        [
            '  A',
            ' B ',
            'C  '
        ],
        {
            A: 'create:iron_sheet',
            B: 'createaddition:iron_rod',
            C: 'minecraft:stick'
        }
    )

    event.shaped(
        'create:propeller',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:iron_ingot'
        }
    )

    event.shaped(
        'create:whisk',
        [
            ' B ',
            'ABA',
            'AAA'
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:iron_ingot'
        }
    )

    event.shaped(
        'kubejs:andesite_machine',
        [
            'DCD',
            'EAE',
            'DBD'
        ],
        {
            A: 'kubejs:andesite_bearing',
            B: 'create:andesite_casing',
            C: 'create:large_cogwheel',
            D: 'create:cogwheel',
            E: 'kubejs:andesite_alloy_rod'
        }
    )

    event.shaped(
        'create:windmill_bearing',
        [
            'ECE',
            'ABA',
            'EDE'
        ],
        {
            A: 'createaddition:zinc_sheet',
            B: 'kubejs:andesite_machine',
            C: 'kubejs:andesite_bearing',
            D: 'create:shaft',
            E: 'kubejs:andesite_alloy_sheet'
        }
    )

    event.shaped(
        'create:sail_frame',
        [
            'BAB',
            'A A',
            'BAB'
        ],
        {
            A: 'minecraft:stick',
            B: '#cwi:string'
        }
    )

    event.shaped(
        'kubejs:andesite_bearing',
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:cogwheel'
        }
    )

    event.shaped(
        'minecraft:observer',
        [
            'ABC'
        ],
        {
            A: 'create:rose_quartz',
            B: 'kubejs:andesite_machine',
            C: 'create:filter'
        }
    )

    event.shaped(
        'bits_n_bobs:chain_pulley',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'kubejs:andesite_machine',
            B: 'minecraft:chain',
            C: 'create:iron_sheet'
        }
    )

    event.shaped(
        'create:rope_pulley',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'kubejs:andesite_machine',
            B: 'farmersdelight:rope',
            C: 'create:iron_sheet'
        }
    )

    event.shaped(
        'create:mechanical_press',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'kubejs:andesite_machine',
            C: 'minecraft:iron_block'
        }
    )

    event.shaped(
        'ratatouille:mechanical_demolder',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'kubejs:andesite_machine',
            C: 'minecraft:slime_ball'
        }
    )

    event.shaped(
        'vintageimprovements:curving_press',
        [
            'D',
            'C',
            'B'
        ],
        {
            B: 'kubejs:andesite_bearing',
            C: 'kubejs:andesite_machine',
            D: 'create:piston_extension_pole'
        }
    )

    event.shaped(
        'create:mechanical_mixer',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:piston_extension_pole',
            B: 'kubejs:andesite_machine',
            C: 'create:whisk'
        }
    )

    event.shaped(
        'create:package_frogport',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:item_vault',
            C: 'kubejs:andesite_machine'
        }
    )

    event.shaped(
        'create:fluid_tank',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'create:copper_sheet',
            B: '#cwi:glass1'
        }
    )

    event.shaped(
        'create_connected:fluid_vessel',
        [
            'ABA'
        ],
        {
            A: 'create:copper_sheet',
            B: '#cwi:glass1'
        }
    )

    event.shaped(
        'create:packager',
        [
            ' A ',
            'ABA',
            'DCD'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:cardboard_block',
            C: 'kubejs:andesite_machine',
            D: 'minecraft:redstone'
        }
    )

    event.shaped(
        'rubberworks:sapper',
        [
            'DDE',
            'ABC',
            'DDE'
        ],
        {
            A: 'create:cogwheel',
            B: 'kubejs:andesite_machine',
            C: 'create:fluid_pipe',
            D: 'kubejs:andesite_alloy_sheet',
            E: 'kubejs:andesite_alloy_rod'
        }
    )

    event.shaped(
        'create:steam_engine',
        [
            'EAE',
            'DBD',
            'DCD'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'kubejs:andesite_bearing',
            C: 'create:fluid_tank',
            D: 'create:copper_sheet',
            E: '#cwi:rubbers'
        }
    )

    event.shaped(
        'create:item_drain',
        [
            'A',
            'B'
        ],
        {
            A: 'createdeco:iron_catwalk',
            B: 'create:copper_casing'
        }
    )

    event.shaped(
        'minecraft:stonecutter',
        [
            'A',
            'B'
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:stone'
        }
    )

    event.shaped(
        'create:mechanical_saw',
        [
            'A',
            'B'
        ],
        {
            A: 'create:iron_sheet',
            B: 'kubejs:andesite_machine'
        }
    )

    event.shaped(
        'kubejs:capping_head',
        [
            'A',
            'B'
        ],
        {
            A: 'create:shaft',
            B: '#cwi:rubber_blocks'
        }
    )

    event.shaped(
        'vintageimprovements:belt_grinder',
        [
            'A',
            'B'
        ],
        {
            A: 'vintageimprovements:grinder_belt',
            B: 'kubejs:andesite_machine'
        }
    )

    event.shaped(
        'create:spout',
        [
            'A',
            'B'
        ],
        {
            A: 'create:copper_casing',
            B: '#cwi:rubbers'
        }
    )

    event.shaped(
        'create:hose_pulley',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:copper_casing',
            B: 'kubejs:rubber_block',
            C: 'create:copper_sheet'
        }
    )

    event.shaped(
        'create:belt_connector',
        [
            'AAA'
        ],
        {
            A: '#cwi:rubbers'
        }
    )

    event.shaped(
        '3x create:radial_chassis',
        [
            ' A ',
            'BAB',
            ' A '
        ],
        {
            A: 'createdieselgenerators:chip_wood_block',
            B: 'create:andesite_alloy'
        }
    )

    event.shaped(
        '3x create:linear_chassis',
        [
            ' B ',
            'AAA',
            ' B '
        ],
        {
            A: 'createdieselgenerators:chip_wood_block',
            B: 'create:andesite_alloy'
        }
    )

    event.shaped(
        'create:nozzle',
        [
            'C',
            'B',
            'A'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'kubejs:net',
            C: 'kubejs:andesite_alloy_wire'
        }
    )

    event.shaped(
        'create:super_glue',
        [
            'AB',
            'CA'
        ],
        {
            A: '#cwi:sticky_materials',
            B: 'create:iron_sheet',
            C: 'minecraft:iron_nugget'
        }
    )

    event.shaped(
        'create:blaze_burner',
        [
            'ABA',
            'CFC',
            'DED'
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:gunpowder',
            C: 'createaddition:iron_rod',
            D: 'create:iron_sheet',
            E: '#cwi:cobbled_stones',
            F: 'kubejs:andesite_alloy_sheet'
        }
    )

    event.shaped(
        'create:andesite_funnel',
        [
            'B',
            'C'
        ],
        {
            B: 'create:andesite_alloy',
            C: '#cwi:rubbers'
        }
    )

    event.shaped(
        '2x create:andesite_tunnel',
        [
            'BB',
            'CC'
        ],
        {
            B: 'create:andesite_alloy',
            C: '#cwi:rubbers'
        }
    )

// Mixing

    event.recipes.create.mixing('minecraft:wheat_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_wheat_seeds'])
    event.recipes.create.mixing('minecraft:melon_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_melon_seeds'])
    event.recipes.create.mixing('minecraft:pumpkin_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_pumpkin_seeds'])
    event.recipes.create.mixing('minecraft:beetroot_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_beetroot_seeds'])
    event.recipes.create.mixing('farmersdelight:tomato_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_tomato_seeds'])
    event.recipes.create.mixing('farmersdelight:cabbage_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_cabbage_seeds'])
    event.recipes.create.mixing('kubejs:andesite_compound', ['minecraft:clay_ball', 'kubejs:andesite_powder'])

// Cutting

    event.recipes.create.cutting(['kubejs:precision_manual', 'kubejs:the_precision_manufacturing_engineers_log'], 'kubejs:package')

// Smelting And Blasting

    event.smelting('kubejs:andesite_alloy_sheet', 'kubejs:filled_wood_sheet_mold')
    event.blasting('kubejs:andesite_alloy_sheet', 'kubejs:filled_wood_sheet_mold')

    event.smelting('create:andesite_alloy', 'kubejs:andesite_compound')
    event.blasting('create:andesite_alloy', 'kubejs:andesite_compound')

    event.smelting('kubejs:silver_ingot', 'kubejs:crushed_raw_silver')
    event.blasting('kubejs:silver_ingot', 'kubejs:crushed_raw_silver')

    event.smelting('kubejs:tin_ingot', 'kubejs:crushed_raw_tin')
    event.blasting('kubejs:tin_ingot', 'kubejs:crushed_raw_tin')

    event.smelting('kubejs:terracotta_disk', 'kubejs:clay_disk')
    event.blasting('kubejs:terracotta_disk', 'kubejs:clay_disk')

    event.smelting('kubejs:terracotta_ingot_mold', 'kubejs:clay_ingot_mold')
    event.blasting('kubejs:terracotta_ingot_mold', 'kubejs:clay_ingot_mold')
    
    event.smelting('kubejs:terracotta_nugget_mold', 'kubejs:clay_nugget_mold')
    event.blasting('kubejs:terracotta_nugget_mold', 'kubejs:clay_nugget_mold')

    event.smelting('kubejs:terracotta_rod_mold', 'kubejs:clay_rod_mold')
    event.blasting('kubejs:terracotta_rod_mold', 'kubejs:clay_rod_mold')
    
    event.smelting('kubejs:terracotta_sheet_mold', 'kubejs:clay_sheet_mold')
    event.blasting('kubejs:terracotta_sheet_mold', 'kubejs:clay_sheet_mold')

    event.smelting('minecraft:charcoal', 'createdieselgenerators:chip_wood_beam')

// Sequenced Assembly

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:brass_lockbox').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1),
            Item.of('kubejs:package').withChance(0.1)
        ],
        'kubejs:brass_lockbox',
        [
            event.recipes.create.pressing('kubejs:cracked_brass_lockbox', 'kubejs:cracked_brass_lockbox'),
            event.recipes.create.pressing('kubejs:cracked_brass_lockbox', 'kubejs:cracked_brass_lockbox'),
            event.recipes.create.pressing('kubejs:cracked_brass_lockbox', 'kubejs:cracked_brass_lockbox')
        ]
    )
    .transitionalItem('kubejs:cracked_brass_lockbox')
    .loops(2)

})