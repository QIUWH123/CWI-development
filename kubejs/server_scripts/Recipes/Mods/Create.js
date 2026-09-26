ServerEvents.recipes(event => {

    event.shapeless(
        'fluid:fluid_manifest',
        'fluid:fluid_manifest'
    )

    event.shapeless(
        '3x create:shaft',
        'kubejs:small_pile_of_shafts'
    )

    event.shapeless(
        '8x create:shaft',
        'kubejs:pile_of_shafts'
    )

    event.shapeless(
        '14x create:shaft',
        'kubejs:large_pile_of_shafts'
    )

    event.shapeless(
        'kubejs:small_pile_of_shafts',
        '3x create:shaft'
    )

    event.shapeless(
        'kubejs:pile_of_shafts',
        '8x create:shaft'
    )

    event.shapeless(
        'kubejs:pile_of_shafts',
        [
            'kubejs:small_pile_of_shafts',
            '5x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:pile_of_shafts',
        [
            '2x kubejs:small_pile_of_shafts',
            '2x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        '14x create:shaft'
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            'kubejs:small_pile_of_shafts',
            '12x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            'kubejs:pile_of_shafts',
            '6x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            'kubejs:pile_of_shafts',
            'kubejs:small_pile_of_shafts',
            '3x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            'kubejs:pile_of_shafts',
            '2x kubejs:small_pile_of_shafts',
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            '2x kubejs:small_pile_of_shafts',
            '8x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            '3x kubejs:small_pile_of_shafts',
            '5x create:shaft'
        ]
    )

    event.shapeless(
        'kubejs:large_pile_of_shafts',
        [
            '4x kubejs:small_pile_of_shafts',
            '2x create:shaft'
        ]
    )

    event.shaped(
        'tfmg:lithium_torch',
        [
            'A',
            'B'
        ],
        {
            A: 'kubejs:lithium_powder',
            B: 'kubejs:aluminum_rod'
        }
    )

    event.shaped(
        'create:filter',
        [
            'ABA'
        ],
        {
            A: 'kubejs:andesite_alloy_rod',
            B: 'kubejs:net'
        }
    )

    event.shaped(
        'create:attribute_filter',
        [
            'ABA'
        ],
        {
            A: 'createaddition:brass_rod',
            B: 'kubejs:net'
        }
    )

    event.shaped(
        'fluid:fluid_manifest',
        [
            'ABA'
        ],
        {
            A: 'createaddition:copper_rod',
            B: 'kubejs:net'
        }
    )

    event.shaped(
        'fluid:can_filler',
        [
            ' A ',
            'ABA',
            'DCD'
        ],
        {
            A: 'create:copper_sheet',
            B: '#cwi:rubber_blocks',
            C: 'kubejs:andesite_machine',
            D: 'minecraft:redstone'
        }
    )
    
    event.shaped(
        'fluid:smart_fluid_interface',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:brass_sheet',
            B: 'fluid:fluid_interface',
            C: 'create_connected:control_chip'
        }
    )

    event.shaped(
        'fluid:smart_gutter_outlet',
        [
            'A',
            'B',
            'C'
        ],
        {
            A: 'create:brass_sheet',
            B: 'fluid:gutter_outlet',
            C: 'create_connected:control_chip'
        }
    )

    event.shaped(
        'fluid:fluid_interface',
        [
            'ABC'
        ],
        {
            A: 'minecraft:copper_ingot',
            B: '#cwi:rubbers',
            C: 'create:copper_sheet'
        }
    )

    event.shaped(
        'fluid:communicating_vessel',
        [
            'BCB',
            'ADA',
            'BCB'
        ],
        {
            A: '#cwi:rubbers',
            B: 'createaddition:iron_rod',
            C: 'create:copper_sheet',
            D: 'create:fluid_pipe'
        }
    )

    event.shaped(
        'fluid:smart_fluid_interface',
        [
            ' D ',
            'ABC',
            ' E '
        ],
        {
            A: 'minecraft:copper_ingot',
            B: '#cwi:rubbers',
            C: 'create:copper_sheet',
            D: 'create:brass_sheet',
            E: 'create_connected:control_chip'
        }
    )

    event.shaped(
        'create:schematicannon',
        [
            'ABA',
            'FCF',
            'EDE'
        ],
        {
            A: 'kubejs:andesite_alloy_sheet',
            B: 'create:basin',
            C: 'kubejs:andesite_machine',
            D: 'kubejs:andesite_bearing',
            E: '#cwi:cobbled_stones',
            F: '#minecraft:logs'
        }
    )

    event.shaped(
        'create_connected:dashboard',
        [
            'A',
            'B'
        ],
        {
            A: 'create:display_board',
            B: 'kubejs:precise_machine'
        }
    )

    event.recipes.create.mechanical_crafting(
        'kubejs:steel_pipe', 
        [
            '   CB',
            '  ABC',
            ' ABA ',
            'CBA  ',
            'BC   '
        ], 
        {
            A: 'tfmg:rebar',
            B: 'tfmg:rebar_pile',
            C: '#cwi:rubbers'
        }
    )

    event.recipes.create.mechanical_crafting(
        'kubejs:steel_shield', 
        [
            'ABA',
            'ACA',
            'ABA'
        ], 
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:steel_casing',
            C: 'kubejs:quality_tool_handle'
        }
    )

    event.recipes.create.mechanical_crafting(
        'kubejs:stainless_steel_shield', 
        [
            'ABA',
            'ACA',
            'ABA'
        ], 
        {
            A: 'kubejs:stainless_steel_sheet',
            B: 'kubejs:stainless_steel_casing',
            C: 'kubejs:quality_tool_handle'
        }
    )

    // Ash Brick

    event.recipes.create.mixing('kubejs:ash_brick', ['kubejs:ash', 'minecraft:clay_ball'])

    event.shapeless(
        'kubejs:ash_brick',
        [
            '2x kubejs:ash',
            'minecraft:clay_ball'
        ]
    ).id('cwi:crafting_table/ash_brick_manual_only')

    event.shaped(
        'kubejs:ash_bricks',
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:ash_brick'
        }
    )
})