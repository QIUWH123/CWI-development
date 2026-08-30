ServerEvents.recipes(event => {

// Shaped

    event.shaped(
        'tfmg:cast_iron_mechanical_pump',
        [
            'ABC'
        ],
        {
            A: 'kubejs:andesite_bearing',
            B: 'tfmg:cast_iron_pipe',
            C: 'create:propeller'
        }
    )

    event.shaped(
        'tfmg:steel_mechanical_pump',
        [
            'ABC'
        ],
        {
            A: 'kubejs:steel_bearing',
            B: 'tfmg:steel_pipe',
            C: 'create:propeller'
        }
    )

    event.shaped(
        'tfmg:aluminum_mechanical_pump',
        [
            'ABC'
        ],
        {
            A: 'kubejs:steel_bearing',
            B: 'tfmg:aluminum_pipe',
            C: 'create:propeller'
        }
    )

    event.shaped(
        'tfmg:plastic_mechanical_pump',
        [
            'ABC'
        ],
        {
            A: 'kubejs:steel_bearing',
            B: 'tfmg:plastic_pipe',
            C: 'create:propeller'
        }
    )

    event.shaped(
        '3x tfmg:coke_oven',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'kubejs:industrial_iron_sheet',
            B: 'kubejs:industrial_iron_ingot',
            C: 'kubejs:industrial_casing'
        }
    )

    event.shaped(
        'tfmg:blast_stove',
        [
            'ABA',
            'BCB',
            'ADA'
        ],
        {
            A: 'tfmg:cast_iron_sheet',
            B: 'tfmg:cast_iron_pipe',
            C: 'tfmg:cast_iron_fluid_tank',
            D: 'tfmg:fireproof_bricks'
        }
    )

    event.shaped(
        'tfmg:air_intake',
        [
            'AEA',
            'BCB',
            'ADA'
        ],
        {
            A: 'kubejs:industrial_iron_sheet',
            B: 'tfmg:cast_iron_pipe',
            C: 'kubejs:andesite_machine',
            D: 'kubejs:industrial_casing',
            E: 'create:propeller'
        }
    )

    event.shaped(
        'cwi:blast_furnace',
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            A: 'tfmg:fireproof_bricks',
            B: 'tfmg:cast_iron_sheet',
            C: 'tfmg:cast_iron_fluid_tank',
            D: 'tfmg:cast_iron_block'
        }
    )

    event.shaped(
        'cwi:furnace_hatch',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'tfmg:fireproof_bricks',
            B: 'tfmg:cast_iron_pipe',
            C: 'tfmg:cast_iron_fluid_tank'
        }
    )

    event.shaped(
        'tfmg:concrete_hose',
        [
            'AEA',
            'BCF',
            'GDG'
        ],
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:large_steel_cogwheel',
            C: 'kubejs:rubber_block',
            D: 'kubejs:steel_bearing',
            E: 'tfmg:heavy_machinery_casing',
            F: 'tfmg:steel_pipe',
            G: 'tfmg:rubber_sheet'
        }
    )

    event.shaped(
        'tfmg:steel_chemical_vat',
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:steel_mechanism',
            C: 'tfmg:steel_fluid_tank'
        }
    )

    event.shaped(
        'tfmg:cast_iron_chemical_vat',
        [
            'AAA',
            'BCB',
            'AAA'
        ],
        {
            A: 'tfmg:cast_iron_sheet',
            B: '#cwi:rubbers',
            C: 'tfmg:cast_iron_fluid_tank'
        }
    )

    event.shaped(
        'tfmg:steel_fluid_tank',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'tfmg:heavy_plate',
            B: '#cwi:glass2'
        }
    )

    event.shaped(
        'tfmg:aluminum_fluid_tank',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'tfmg:aluminum_sheet',
            B: '#cwi:glass2'
        }
    )

    event.shaped(
        'tfmg:cast_iron_fluid_tank',
        [
            'A',
            'B',
            'A'
        ],
        {
            A: 'tfmg:cast_iron_sheet',
            B: '#cwi:glass2'
        }
    )

    event.shaped(
        'createmetallurgy:casting_basin',
        [
            'ABA',
            'AAA'
        ],
        {
            A: 'create:andesite_alloy',
            B: 'tfmg:fireproof_bricks'
        }
    )

    event.shaped(
        'createmetallurgy:gauge_attachment',
        [
            'ABA',
            'CCC'
        ],
        {
            A: 'tfmg:industrial_pipe',
            B: 'kubejs:steel_bearing',
            C: 'tfmg:heavy_plate'
        }
    )

// Cutting

    event.recipes.create.cutting(['kubejs:galvanic_manual', 'kubejs:the_electrical_engineers_log'], 'kubejs:second_package')

// Smelting And Blasting

    event.smelting('kubejs:fireproof_brick_disk', 'kubejs:fireclay_disk')
    event.blasting('kubejs:fireproof_brick_disk', 'kubejs:fireclay_disk')

// Filling

    event.recipes.create.filling('tfmg:rusted_blast_furnace_reinforcement', ['tfmg:blast_furnace_reinforcement', AddFluid('250 #cwi:water')])

// Compacting

    event.recipes.create.compacting('kubejs:fireclay_disk', 'tfmg:fireclay_ball')
    event.recipes.create.compacting('kubejs:heated_industrial_iron_ingot', ['kubejs:heated_iron_ingot', '3x tfmg:coal_coke_dust', '2x kubejs:limestone_powder']).superheated()

// Mixing

    event.recipes.create.mixing('tfmg:cement', ['kubejs:limestone_powder', '3x minecraft:clay_ball'])
    event.recipes.create.mixing('4x tfmg:fireclay_ball', ['kubejs:silicon_powder', 'kubejs:magnesite_powder', '2x kubejs:bauxite_powder', '3x minecraft:clay_ball']).superheated()
    event.recipes.create.mixing('4x tfmg:fireclay_ball', ['kubejs:quartz_powder', 'kubejs:magnesite_powder', '2x kubejs:bauxite_powder', '3x minecraft:clay_ball']).superheated()
    event.recipes.create.mixing(['2x kubejs:silicon_powder', Item.of('kubejs:silicon_powder').withChance(0.37)], ['4x kubejs:quartz_powder', '1x tfmg:coal_coke_dust', '2x kubejs:limestone_powder']).superheated()

// Mechanical Crafting

   event.recipes.create.mechanical_crafting(
        'vintageimprovements:centrifuge',
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'kubejs:industrial_iron_spring',
            B: 'create:large_cogwheel',
            C: 'tfmg:hardened_planks',
            D: 'kubejs:andesite_machine',
            E: 'tfmg:steel_casing'
        }
    )

    event.recipes.create.mechanical_crafting(
        'tfmg:steel_distillation_controller', 
        [
            'CAC',
            'DFD',
            'BEB'
        ], 
        {
            A: 'kubejs:industrial_pump',
            B: 'tfmg:steel_chemical_vat',
            C: 'tfmg:steel_mechanism',
            D: 'kubejs:heavy_machine',
            E: 'tfmg:heavy_machinery_casing',
            F: 'tfmg:steel_distillation_output'
        }
    )

    event.recipes.create.mechanical_crafting(
        'tfmg:surface_scanner', 
        [
            'AAA',
            'BCB',
            'DED'
        ], 
        {
            A: 'kubejs:integrated_electron_tube',
            B: 'tfmg:steel_mechanism',
            C: 'kubejs:heavy_machine',
            D: 'tfmg:steel_ingot',
            E: 'tfmg:heavy_machinery_casing'
        }
    )

    event.recipes.create.mechanical_crafting(
        'tfmg:quad_potato_cannon', 
        [
            'AGIHG',
            'EFIHG',
            ' GA  '
        ], 
        {
            A: 'tfmg:heavy_plate',
            E: 'tfmg:steel_mechanism',
            F: 'kubejs:heavy_machine',
            H: 'kubejs:industrial_pump',
            G: 'tfmg:cast_iron_ingot',
            I: 'tfmg:steel_chemical_vat'
        }
    )

    event.recipes.create.mechanical_crafting(
        'vintageimprovements:helve_hammer', 
        [
            'ABA  ',
            'EFEHG',
            'ADA  '
        ], 
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:steel_ingot',
            D: 'tfmg:heavy_machinery_casing',
            E: 'tfmg:steel_mechanism',
            F: 'kubejs:heavy_machine',
            H: 'tfmg:steel_ingot',
            G: 'tfmg:pumpjack_hammer_head'
        }
    )

    event.recipes.create.mechanical_crafting(
        'tfmg:machine_input', 
        [
            'A',
            'B',
            'C'
        ], 
        {
            A: 'create:shaft',
            B: 'kubejs:heavy_machine',
            C: 'tfmg:heavy_machinery_casing'
        }
    )

    event.recipes.create.mechanical_crafting(
        'tfmg:pumpjack_crank', 
        [
            'A A',
            'EFE',
            'BDB'
        ], 
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:steel_ingot',
            D: 'tfmg:heavy_machinery_casing',
            E: 'kubejs:steel_bearing',
            F: 'kubejs:heavy_machine'
        }
    )

    event.recipes.create.mechanical_crafting(
        'vintageimprovements:vacuum_chamber', 
        [
            'BCB',
            'EFE',
            'ADA'
        ], 
        {
            A: 'tfmg:rubber_sheet',
            B: 'tfmg:heavy_plate',
            C: 'kubejs:steel_bearing',
            D: 'tfmg:plastic_pipe',
            E: 'tfmg:steel_mechanism',
            F: 'kubejs:heavy_machine'
        }
    )

    event.recipes.create.mechanical_crafting(
        Item.of('create_sa:portable_drill').enchant('minecraft:efficiency', 5), 
        [
            'AA   ',
            'DEFCB'
        ], 
        {
            A: 'kubejs:handle',
            B: 'kubejs:steel_drill_head',
            C: 'kubejs:steam_apparatus',
            D: 'tfmg:heavy_machinery_casing',
            E: 'kubejs:heavy_machine',
            F: 'createdieselgenerators:engine_piston'
        }
    )

// Sequenced Assembly

    event.recipes.create.sequenced_assembly(
        'tfmg:cast_iron_ingot',
        'kubejs:heated_industrial_iron_ingot',
        [
            rolling(event, AddItem('kubejs:incomplete_cast_iron_ingot'), AddItem('kubejs:incomplete_cast_iron_ingot')),
            event.recipes.create.pressing('kubejs:incomplete_cast_iron_ingot', 'kubejs:incomplete_cast_iron_ingot'),
            event.recipes.create.pressing('kubejs:incomplete_cast_iron_ingot', 'kubejs:incomplete_cast_iron_ingot'),
            event.recipes.create.filling('kubejs:incomplete_cast_iron_ingot', ['kubejs:incomplete_cast_iron_ingot', AddFluid('500 #cwi:water')]),
            polishing(event, 3, AddItem('kubejs:incomplete_cast_iron_ingot'), [AddItem('kubejs:incomplete_cast_iron_ingot')], 20)
        ]
    )
    .transitionalItem('kubejs:incomplete_cast_iron_ingot')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'kubejs:harden_wood',
        'kubejs:quality_sealed_wood',
        [
            event.recipes.create.filling('kubejs:incomplete_harden_wood', ['kubejs:incomplete_harden_wood', Fluid.of('tfmg:creosote', 250)]),
            event.recipes.create.pressing('kubejs:incomplete_harden_wood', 'kubejs:incomplete_harden_wood'),
            polishing(event, 3, AddItem('kubejs:incomplete_harden_wood'), [AddItem('kubejs:incomplete_harden_wood')], 20)
        ]
    )
    .transitionalItem('kubejs:incomplete_harden_wood')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'tfmg:heavy_machinery_casing',
        'tfmg:steel_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_heavy_machinery_casing', ['kubejs:incomplete_heavy_machinery_casing', 'tfmg:heavy_plate']),
            event.recipes.create.filling('kubejs:incomplete_heavy_machinery_casing', ['kubejs:incomplete_heavy_machinery_casing', Fluid.of('kubejs:molten_steel', 100)]),
            event.recipes.create.pressing('kubejs:incomplete_heavy_machinery_casing', 'kubejs:incomplete_heavy_machinery_casing'),
            event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:screwdriver']),
            polishing(event, 3, AddItem('kubejs:incomplete_heavy_machinery_casing'), [AddItem('kubejs:incomplete_heavy_machinery_casing')], 20)
        ]
    )
    .transitionalItem('kubejs:incomplete_heavy_machinery_casing')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'tfmg:heavy_machinery_casing',
        'tfmg:steel_casing',
        [
            event.recipes.create.filling('kubejs:incomplete_heavy_machinery_casing', ['kubejs:incomplete_heavy_machinery_casing', Fluid.of('kubejs:molten_steel', 500)]),
            hammering(event, 3, [AddItem('kubejs:incomplete_heavy_machinery_casing')], [AddItem('kubejs:incomplete_heavy_machinery_casing')]),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machinery_casing', ['kubejs:incomplete_heavy_machinery_casing', 'tfmg:screwdriver']),
            polishing(event, 3, AddItem('kubejs:incomplete_heavy_machinery_casing'), [AddItem('kubejs:incomplete_heavy_machinery_casing')], 20)
        ]
    )
    .transitionalItem('kubejs:incomplete_heavy_machinery_casing')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'kubejs:steel_drill_head',
        'kubejs:industrial_iron_drill_head',
        [
            event.recipes.create.filling('kubejs:incomplete_steel_drill_head', ['kubejs:incomplete_steel_drill_head', Fluid.of('kubejs:molten_steel', 100)]),
            event.recipes.create.deploying('kubejs:incomplete_steel_drill_head', ['kubejs:incomplete_steel_drill_head', 'tfmg:heavy_plate']),
            hammering(event, 3, [AddItem('kubejs:incomplete_steel_drill_head')], [AddItem('kubejs:incomplete_steel_drill_head')]),
            polishing(event, 3, AddItem('kubejs:incomplete_steel_drill_head'), [AddItem('kubejs:incomplete_steel_drill_head')], 60)
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_drill_head')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'tfmg:blast_furnace_reinforcement',
        'tfmg:fireproof_bricks',
        [
            event.recipes.create.deploying('kubejs:incomplete_blast_furnace_reinforcement', ['kubejs:incomplete_blast_furnace_reinforcement', 'tfmg:heavy_plate']),
            event.recipes.create.filling('kubejs:incomplete_blast_furnace_reinforcement', ['kubejs:incomplete_blast_furnace_reinforcement', Fluid.of('kubejs:molten_steel', 250)]),
            hammering(event, 3, [AddItem('kubejs:incomplete_blast_furnace_reinforcement')], [AddItem('kubejs:incomplete_blast_furnace_reinforcement')]),
            polishing(event, 3, AddItem('kubejs:incomplete_blast_furnace_reinforcement'), [AddItem('kubejs:incomplete_blast_furnace_reinforcement')], 60)
        ]
    )
    .transitionalItem('kubejs:incomplete_blast_furnace_reinforcement')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'tfmg:steel_mechanism',
        'tfmg:heavy_plate',
        [
            event.recipes.create.deploying('kubejs:incomplete_steel_mechanism', ['kubejs:incomplete_steel_mechanism', 'tfmg:steel_cogwheel']),
            event.recipes.create.deploying('kubejs:incomplete_steel_mechanism', ['kubejs:incomplete_steel_mechanism', 'tfmg:large_steel_cogwheel']),
            event.recipes.create.deploying('kubejs:incomplete_steel_mechanism', ['kubejs:incomplete_steel_mechanism', 'kubejs:steel_bearing']),
            event.recipes.create.deploying('kubejs:incomplete_steel_mechanism', ['kubejs:incomplete_steel_mechanism', 'tfmg:screw']),
            event.recipes.create.deploying('kubejs:incomplete_steel_mechanism', ['kubejs:incomplete_steel_mechanism', 'tfmg:screwdriver'])
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_mechanism')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        '4x kubejs:steel_ring',
        'tfmg:heavy_plate',
        [
            event.recipes.create.cutting('kubejs:incomplete_steel_ring', 'kubejs:incomplete_steel_ring'),
            curving(event, 'vintageimprovements:convex_curving_head', AddItem('kubejs:incomplete_steel_ring'), [AddItem('kubejs:incomplete_steel_ring')]),
            polishing(event, 3, AddItem('kubejs:incomplete_steel_ring'), [AddItem('kubejs:incomplete_steel_ring')], 20)
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_ring')
    .loops(2)

    event.recipes.create.sequenced_assembly(
        'kubejs:steel_bearing',
        'tfmg:heavy_plate',
        [
            curving(event, 'vintageimprovements:convex_curving_head', AddItem('kubejs:incomplete_steel_bearing'), [AddItem('kubejs:incomplete_steel_bearing')]),
            event.recipes.create.deploying('kubejs:incomplete_steel_bearing', ['kubejs:incomplete_steel_bearing', 'kubejs:steel_ring']),
            event.recipes.create.deploying('kubejs:incomplete_steel_bearing', ['kubejs:incomplete_steel_bearing', 'tfmg:steel_nugget']),
            event.recipes.create.deploying('kubejs:incomplete_steel_bearing', ['kubejs:incomplete_steel_bearing', 'tfmg:steel_nugget']),
            event.recipes.create.deploying('kubejs:incomplete_steel_bearing', ['kubejs:incomplete_steel_bearing', 'tfmg:steel_nugget']),
            event.recipes.create.deploying('kubejs:incomplete_steel_bearing', ['kubejs:incomplete_steel_bearing', 'tfmg:screwdriver'])
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_bearing')
    .loops(2)

    event.recipes.create.sequenced_assembly(
        'kubejs:industrial_pump',
        'tfmg:steel_pipe',
        [
            event.recipes.create.deploying('kubejs:incomplete_industrial_pump', ['kubejs:incomplete_industrial_pump', 'kubejs:steel_ring']),
            event.recipes.create.deploying('kubejs:incomplete_industrial_pump', ['kubejs:incomplete_industrial_pump', '#cwi:rubbers']),
            event.recipes.create.deploying('kubejs:incomplete_industrial_pump', ['kubejs:incomplete_industrial_pump', 'kubejs:steel_bearing']),
            event.recipes.create.filling('kubejs:incomplete_industrial_pump', ['kubejs:incomplete_industrial_pump', Fluid.of('kubejs:molten_sticky_resin', 100)])
        ]
    )
    .transitionalItem('kubejs:incomplete_industrial_pump')
    .loops(2)

    event.recipes.create.sequenced_assembly(
        'createmetallurgy:industrial_crucible',
        'tfmg:blast_furnace_reinforcement',
        [
            event.recipes.create.pressing('createmetallurgy:incomplete_industrial_crucible', 'createmetallurgy:incomplete_industrial_crucible'),
            turning(event, AddItem('createmetallurgy:incomplete_industrial_crucible'), AddItem('createmetallurgy:incomplete_industrial_crucible')),
            curving(event, 'tfmg:steel_block', AddItem('createmetallurgy:incomplete_industrial_crucible'), [AddItem('createmetallurgy:incomplete_industrial_crucible')]),
            event.recipes.create.filling('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', Fluid.of('kubejs:molten_steel', 200)]),
            polishing(event, 3, AddItem('createmetallurgy:incomplete_industrial_crucible'), [AddItem('createmetallurgy:incomplete_industrial_crucible')], 60)
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_industrial_crucible')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'createmetallurgy:industrial_crucible',
        'tfmg:blast_furnace_reinforcement',
        [
            hammering(event, 3, [AddItem('createmetallurgy:incomplete_industrial_crucible')], [AddItem('createmetallurgy:incomplete_industrial_crucible')]),
            turning(event, AddItem('createmetallurgy:incomplete_industrial_crucible'), AddItem('createmetallurgy:incomplete_industrial_crucible')),
            curving(event, 'tfmg:steel_block', AddItem('createmetallurgy:incomplete_industrial_crucible'), [AddItem('createmetallurgy:incomplete_industrial_crucible')]),
            event.recipes.create.filling('createmetallurgy:incomplete_industrial_crucible', ['createmetallurgy:incomplete_industrial_crucible', Fluid.of('kubejs:molten_steel', 200)]),
            polishing(event, 3, AddItem('createmetallurgy:incomplete_industrial_crucible'), [AddItem('createmetallurgy:incomplete_industrial_crucible')], 60)
        ]
    )
    .transitionalItem('createmetallurgy:incomplete_industrial_crucible')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'kubejs:heavy_machine',
        'tfmg:heavy_machinery_casing',
        [
            event.recipes.create.filling('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', Fluid.of('createdieselgenerators:plant_oil', 1000)]),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'tfmg:steel_mechanism']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'kubejs:steel_bearing']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'kubejs:industrial_pump']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'tfmg:heavy_plate'])
        ]
    )
    .transitionalItem('kubejs:incomplete_heavy_machine')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'kubejs:heavy_machine',
        'tfmg:heavy_machinery_casing',
        [
            event.recipes.create.filling('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', Fluid.of('tfmg:lubrication_oil', 100)]),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'tfmg:steel_mechanism']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'kubejs:steel_bearing']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'kubejs:industrial_pump']),
            event.recipes.create.deploying('kubejs:incomplete_heavy_machine', ['kubejs:incomplete_heavy_machine', 'tfmg:heavy_plate'])
        ]
    )
    .transitionalItem('kubejs:incomplete_heavy_machine')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:steel_armor_safe').withChance(0.5),
            Item.of('kubejs:second_package').withChance(0.5)
        ],
        'kubejs:steel_armor_safe',
        [
            hammering(event, 3, [AddItem('kubejs:steel_armor_safe')], [AddItem('kubejs:steel_armor_safe')]),
            hammering(event, 3, [AddItem('kubejs:steel_armor_safe')], [AddItem('kubejs:steel_armor_safe')]),
            hammering(event, 3, [AddItem('kubejs:steel_armor_safe')], [AddItem('kubejs:steel_armor_safe')])
        ]
    )
    .transitionalItem('kubejs:steel_armor_safe')
    .loops(2)

    event.recipes.create.sequenced_assembly(
        'kubejs:engine_cylinder',
        'minecraft:iron_ingot',
        [
            turning(event, AddItem('kubejs:incomplete_engine_cylinder'), AddItem('kubejs:incomplete_engine_cylinder')),
            event.recipes.create.filling('kubejs:incomplete_engine_cylinder', ['kubejs:incomplete_engine_cylinder', Fluid.of('tfmg:lubrication_oil', 25)]),
            event.recipes.create.deploying('kubejs:incomplete_engine_cylinder', ['kubejs:incomplete_engine_cylinder', 'create:iron_sheet']),
            event.recipes.create.deploying('kubejs:incomplete_engine_cylinder', ['kubejs:incomplete_engine_cylinder', 'tfmg:screwdriver'])
        ]
    )
    .transitionalItem('kubejs:incomplete_engine_cylinder')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'kubejs:steel_fuel_injector',
        'tfmg:steel_ingot',
        [
            turning(event, AddItem('kubejs:incomplete_steel_fuel_injector'), AddItem('kubejs:incomplete_steel_fuel_injector')),
            event.recipes.create.filling('kubejs:incomplete_steel_fuel_injector', ['kubejs:incomplete_steel_fuel_injector', Fluid.of('tfmg:lubrication_oil', 25)]),
            event.recipes.create.deploying('kubejs:incomplete_steel_fuel_injector', ['kubejs:incomplete_steel_fuel_injector', 'tfmg:steel_pipe']),
            event.recipes.create.deploying('kubejs:incomplete_steel_fuel_injector', ['kubejs:incomplete_steel_fuel_injector', 'kubejs:steel_ring']),
            event.recipes.create.deploying('kubejs:incomplete_steel_fuel_injector', ['kubejs:incomplete_steel_fuel_injector', 'tfmg:screwdriver'])
        ]
    )
    .transitionalItem('kubejs:incomplete_steel_fuel_injector')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'createdieselgenerators:diesel_engine',
        'kubejs:heavy_machine',
        [
            event.recipes.create.deploying('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', 'tfmg:heavy_plate']),
            event.recipes.create.deploying('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', 'kubejs:steel_fuel_injector']),
            event.recipes.create.deploying('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', 'kubejs:engine_cylinder']),
            event.recipes.create.deploying('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', 'kubejs:engine_cylinder']),
            event.recipes.create.filling('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', Fluid.of('tfmg:lubrication_oil', 50)]),
            event.recipes.create.deploying('kubejs:incomplete_diesel_engine', ['kubejs:incomplete_diesel_engine', 'tfmg:screwdriver'])
        ]
    )
    .transitionalItem('kubejs:incomplete_diesel_engine')
    .loops(2)

    event.recipes.create.sequenced_assembly(
        'createdieselgenerators:large_diesel_engine',
        'createdieselgenerators:diesel_engine',
        [
            event.recipes.create.deploying('kubejs:incomplete_large_diesel_engine', ['kubejs:incomplete_large_diesel_engine', 'tfmg:heavy_plate']),
            event.recipes.create.deploying('kubejs:incomplete_large_diesel_engine', ['kubejs:incomplete_large_diesel_engine', 'kubejs:industrial_pump'])
        ]
    )
    .transitionalItem('kubejs:incomplete_large_diesel_engine')
    .loops(2)

// Coking

    coking(event, AddItem('createdieselgenerators:chip_wood_block'), [AddItem('kubejs:dark_ash'), AddFluid('50 tfmg:creosote'), AddFluid('5 tfmg:carbon_dioxide')], 300)
    coking(event, AddItem('#minecraft:logs_that_burn'), [AddItem('minecraft:charcoal'), AddFluid('100 tfmg:creosote'), AddFluid('20 tfmg:carbon_dioxide')], 600)
    coking(event, AddItem('minecraft:coal'), [AddItem('tfmg:coal_coke'), AddFluid('25 tfmg:creosote'), AddFluid('30 tfmg:carbon_dioxide')], 900)

})