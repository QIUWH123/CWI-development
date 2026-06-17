ServerEvents.recipes(event => {

//shapeless

  event.shapeless(
    Item.of('create_sa:zinc_handle'),
    [
      '2x farmersdelight:canvas',
      'createaddition:iron_rod'
    ]
  )

  event.shapeless(
    Item.of('create:nixie_tube'),
    [
      '2x create:electron_tube'
    ]
  )

  event.shapeless(
    Item.of('kubejs:handle', 1),
    [
      '2x #cwi:rubber',
      '1x create_sa:zinc_handle'
    ]
  )

  event.shapeless(
    'createmetallurgy:foundry_basin',
    [
      'createmetallurgy:refractory_mortar',
      'create:basin'
    ]
  )

//shaped

  event.shaped(
    Item.of('tfmg:brass_mechanical_pump'),
    [
      'ABC'
    ],
    {
      A: 'kubejs:andesite_bearing',
      B: 'tfmg:brass_pipe',
      C: 'create:propeller'
    }
  )

  event.shaped(
    Item.of('create:crafter_slot_cover'),
    [
      'ABA'
    ],
    {
      A: 'create:brass_nugget',
      B: 'create:brass_sheet'
    }
  )

  event.shaped(
    Item.of('vintageimprovements:helve_hammer_slot_cover'),
    [
      '  A',
      ' B ',
      'A  '
    ],
    {
      A: 'create:brass_nugget',
      B: 'create:brass_sheet'
    }
  )

  event.shaped(
    Item.of('create_connected:inventory_access_port'),
    [
      'AB',
      'CD'
    ],
    {
      A: 'kubejs:integrated_electron_tube',
      B: 'create:brass_sheet',
      C: 'kubejs:precise_machine',
      D: 'create:brass_funnel'
    }
  )

  event.shaped(
    Item.of('kubejs:incomplete_control_chip'),
    [
      'DEF',
      'ABC'
    ],
    {
      A: 'kubejs:sticky_resin',
      B: 'kubejs:brass_circuit_board',
      C: 'create:electron_tube',
      D: 'tfmg:screwdriver',
      E: 'createdieselgenerators:hammer',
      F: 'farmersdelight:iron_knife'
    }
  )

  event.shaped(
    Item.of('kubejs:rubber_hand'),
    [
      'A',
      'B'
    ],
    {
      A: '#cwi:rubber',
      B: 'create:andesite_alloy'
    }
  )

  event.shaped(
    Item.of('create:deployer'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create_connected:control_chip',
      B: 'create:brass_casing',
      C: 'kubejs:rubber_hand'
    }
  )

  event.shaped(
    Item.of('create:brass_funnel'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create_connected:control_chip',
      B: 'create:brass_sheet',
      C: '#cwi:rubber'
    }
  )

  event.shaped(
    Item.of('create:brass_tunnel', 2),
    [
      'AD',
      'BB',
      'CC'
    ],
    {
      A: 'create_connected:control_chip',
      B: 'create:brass_sheet',
      C: '#cwi:rubber',
      D: 'create:electron_tube'
    }
  )

  event.shaped(
    Item.of('fluid:smart_gutter_outlet'),
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
    Item.of('minecraft:anvil'),
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

  event.shaped(
    Item.of('fluid:fluid_interface'),
    [
      'ABC'
    ],
    {
      A: 'minecraft:copper_ingot',
      B: '#cwi:rubber',
      C: 'create:copper_sheet'
    }
  )

  event.shaped(
    Item.of('fluid:smart_fluid_interface'),
    [
      ' D ',
      'ABC',
      ' E '
    ],
    {
      A: 'minecraft:copper_ingot',
      B: '#cwi:rubber',
      C: 'create:copper_sheet',
      D: 'create:brass_sheet',
      E: 'create_connected:control_chip'
    }
  )

  event.shaped(
    Item.of('fluid:smart_fluid_interface'),
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
    Item.of('create:elevator_pulley'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'kubejs:precise_machine',
      B: 'kubejs:rubber_block',
      C: 'create:sturdy_sheet'
    }
  )

  event.shaped(
    Item.of('create:smart_chute'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create:brass_sheet',
      B: 'create:chute',
      C: 'create_connected:control_chip'
    }
  )

  event.shaped(
    Item.of('create:mechanical_crafter', 3),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create_connected:control_chip',
      B: 'kubejs:precise_machine',
      C: 'create:brass_casing'
    }
  )

  event.shaped(
    'vintageimprovements:vibrating_table',
    [
      'ABA',
      'ACA'
    ],
    {
      A: 'vintageimprovements:iron_spring',
      B: 'kubejs:andesite_bearing',
      C: 'kubejs:andesite_machine'
    }
  )

  event.shaped(
    'create:mechanical_drill',
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'kubejs:industrial_iron_drill_head',
      B: 'kubejs:andesite_machine',
      C: 'kubejs:industrial_casing'
    }
  )

  event.shaped(
    'createdieselgenerators:canister',
    [
      'CAC',
      'CBC',
      'CAC'
    ],
    {
      A: 'create:andesite_alloy',
      B: 'create:fluid_tank',
      C: 'create:iron_sheet'
    }
  )

  event.shaped(
    'createdieselgenerators:oil_barrel',
    [
      'A',
      'B',
      'A'
    ],
    {
      A: 'create:iron_sheet',
      B: 'create:fluid_tank'
    }
  )

  event.shaped(
    'ratatouille:oven',
    [
      'A',
      'B',
      'A'
    ],
    {
      A: 'createdeco:industrial_iron_sheet',
      B: 'create:fluid_tank'
    }
  )

  event.shaped(
    'vintageimprovements:spring_coiling_machine_wheel',
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'kubejs:bronze_sheet',
      B: 'create:gearshift'
    }
  )

  event.shaped(
    'create:electron_tube',
    [
      'A',
      'B'
    ],
    {
      A: 'create:polished_rose_quartz',
      B: 'create:brass_sheet'
    }
  )

  event.shaped(
    'naturescompass:naturescompass',
    [
      'ABA',
      'CDC',
      'AEA'
    ],
    {
      A: 'create:brass_sheet',
      B: 'create_connected:control_chip',
      C: 'kubejs:integrated_electron_tube',
      D: 'create:precision_mechanism',
      E: 'create:brass_ingot'
    }
  )

  event.shaped(
    'createmetallurgy:casting_table',
    [
      'AAA',
      'A A'
    ],
    {
      A: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    'createmetallurgy:foundry_basin',
    [
      'ABA',
      'AAA'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'createmetallurgy:refractory_mortar'
    }
  )

  event.shaped(
    'create:content_observer',
    [
      'ABC'
    ],
    {
      A: 'kubejs:integrated_electron_tube',
      B: 'kubejs:precise_machine',
      C: 'create:attribute_filter'
    }
  )
  
  event.shaped(
    'rubberworks:compressor',
    [
      'A  ',
      'BDC',
      'AEA'
    ],
    {
      A: 'createdeco:industrial_iron_sheet',
      B: 'create:fluid_pipe',
      C: 'createdeco:industrial_iron_ingot',
      D: 'create:crushing_wheel',
      E: 'kubejs:industrial_casing'
    }
  )

  event.shaped(
    'createmetallurgy:faucet',
    [
      'ABA',
      ' A '
    ],
    {
      A: 'createdeco:industrial_iron_sheet',
      B: 'createdeco:industrial_iron_ingot'
    }
  )

//filling

  event.recipes.create.filling('create:rose_quartz', [Fluid.of('kubejs:redstone_acid', 500), 'minecraft:quartz']).heated()
  event.recipes.create.filling('create_connected:control_chip', [Fluid.of('kubejs:redstone_acid', 125), 'kubejs:incomplete_control_chip']).heated()

//mixing

  event.recipes.create.mixing(Fluid.of('kubejs:redstone_acid', 500), [{fluidTag: "cwi:water", amount: 500}, '4x minecraft:redstone'])
  event.recipes.create.mixing('kubejs:heated_powdered_obsidian', [Fluid.of('minecraft:lava', 500), 'create:powdered_obsidian']).superheated()
  event.recipes.create.mixing('3x createmetallurgy:refractory_mortar_ball', [{fluidTag: "cwi:water", amount: 100}, 'minecraft:sand', 'tfmg:limesand', 'minecraft:clay_ball']).heated()

//compacting

  event.recipes.create.compacting('kubejs:clay_disk', 'minecraft:clay_ball')
  event.recipes.create.compacting('kubejs:heated_iron_ingot', 'minecraft:iron_ingot').superheated()

//smelting/blasting

  event.smelting('create:brass_ingot', 'kubejs:brass_powder')
  event.blasting('create:brass_ingot', 'kubejs:brass_powder')

//mechanicalCrafting

  event.recipes.create.mechanical_crafting(
    Item.of('create_power_loader:brass_chunk_loader'),
    [
      'EAE',
      'ABA',
      'CDC'
    ],
    {
      A: '#cwi:glass1',
      B: 'naturescompass:naturescompass',
      C: 'create:brass_casing',
      D: 'kubejs:precise_machine',
      E: 'create:brass_sheet'
    }
  )

  event.recipes.create.mechanical_crafting('createmetallurgy:foundry_mixer', [
      'A',
      'B',
      'C'
    ], {
      A: 'kubejs:precise_machine',
      B: 'kubejs:industrial_casing',
      C: 'createmetallurgy:sturdy_whisk'
    }
  )
  
  event.recipes.create.mechanical_crafting('vintageimprovements:lathe', [
      ' GAF ',
      'DECBD',
      '  AF '
    ], {
      A: 'vintageimprovements:industrial_iron_spring',
      B: 'kubejs:industrial_casing',
      C: 'kubejs:precise_machine',
      D: 'create:brass_sheet',
      E: 'kubejs:industrial_iron_blade',
      F: 'createdeco:industrial_iron_sheet',
      G: 'create_connected:control_chip'
    }
  )

  event.recipes.create.mechanical_crafting(Item.of('create_sa:portable_drill').enchant('minecraft:efficiency', 3), [
      'AA   ',
      'DEFCB'
    ], {
      A: 'kubejs:handle',
      B: 'kubejs:industrial_iron_drill_head',
      C: 'kubejs:steam_mechanism',
      D: 'kubejs:industrial_casing',
      E: 'kubejs:precise_machine',
      F: 'createdieselgenerators:engine_piston'
    }
  )

  event.recipes.create.mechanical_crafting('create_sa:block_picker', [
      'AA   ',
      'DEDCB'
    ], {
      A: 'kubejs:handle',
      B: 'create_sa:copper_magnet',
      C: 'minecraft:copper_block',
      D: 'create:copper_casing',
      E: 'kubejs:precise_machine'
    }
  )

  event.recipes.create.mechanical_crafting('create_sa:grapplin_whisk', [
      ' A ',
      'BCB',
      'DDD',
      'DDD',
      ' E '
    ], {
      A: 'kubejs:handle',
      B: 'createaddition:zinc_sheet',
      C: 'create:precision_mechanism',
      D: 'create:minecart_coupling',
      E: 'create:whisk'
    }
  )

  event.recipes.create.mechanical_crafting('create_sa:brass_jetpack_chestplate', [
      'ABCBA',
      'DEFED',
      ' BGB '
    ], {
      A: 'kubejs:steam_mechanism',
      B: 'kubejs:bronze_ingot',
      C: 'create_connected:control_chip',
      D: 'create:encased_fan',
      E: 'createdieselgenerators:engine_piston',
      F: 'kubejs:precise_machine',
      G: 'kubejs:andesite_machine'
    }
  )

  event.recipes.create.mechanical_crafting('create_sa:brass_exoskeleton_chestplate', [
      'DABAD',
      'CAEAC',
      'GAFAG'
    ], {
      A: 'kubejs:bronze_ingot',
      B: 'create:flywheel',
      C: 'createdeco:industrial_iron_ingot',
      D: 'kubejs:steam_mechanism',
      E: 'kubejs:precise_machine',
      F: 'kubejs:andesite_machine',
      G: 'createdieselgenerators:engine_piston'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('create_sa:creative_filling_tank'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: 'create:sturdy_sheet',
      B: 'createdeco:industrial_iron_ingot',
      C: 'create:fluid_tank'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('vintageimprovements:spring_coiling_machine'),
    [
      'GBC',
      'ADA',
      'FEF'
    ],
    {
      A: 'createdeco:industrial_iron_ingot',
      B: 'kubejs:industrial_iron_blade',
      C: 'vintageimprovements:spring_coiling_machine_wheel',
      D: 'kubejs:precise_machine',
      E: 'kubejs:industrial_casing',
      F: 'create:brass_sheet',
      G: 'create_connected:control_chip'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('kubejs:robot_arm'),
    [
      'ABA',
      ' CB',
      ' A '
    ],
    {
      A: 'createdeco:industrial_iron_ingot',
      B: 'createaddition:brass_rod',
      C: 'create_connected:control_chip'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('kubejs:robot_hand'),
    [
      '  A',
      'BC ',
      'DB '
    ],
    {
      A: 'createdeco:industrial_iron_sheet',
      B: 'create:brass_ingot',
      C: 'createdeco:industrial_iron_ingot',
      D: 'create_connected:control_chip'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('kubejs:robot_pipette'),
    [
      ' BA',
      ' CB',
      'B  '
    ],
    {
      A: 'create_connected:control_chip',
      B: 'create:copper_sheet',
      C: '#cwi:rubber'
    }
  )

//sequenced_assembly

  event.recipes.create.sequenced_assembly(
    '3x create:track',
    'createdeco:industrial_iron_sheet', 
    [
      event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', 'kubejs:bronze_rod']),
      event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track'),
      event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track')
    ]
  )
  .transitionalItem('create:incomplete_track')
  .loops(2)


  event.recipes.create.sequenced_assembly(
    '3x create:track',
    'create:sturdy_sheet', 
    [
      event.recipes.create.deploying('create:incomplete_track', ['create:incomplete_track', 'kubejs:bronze_rod']),
      event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track'),
      event.recipes.create.pressing('create:incomplete_track', 'create:incomplete_track')
    ]
  )
  .transitionalItem('create:incomplete_track')
  .loops(2)

  event.recipes.create.sequenced_assembly(
    'create:sturdy_sheet',
    'kubejs:heated_powdered_obsidian', 
    [
      event.custom({"type":"createaddition:rolling","input": {"item": 'create:unprocessed_obsidian_sheet'},"result": {"item": 'create:unprocessed_obsidian_sheet'}}),
      event.recipes.create.pressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
      event.recipes.create.filling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', {fluidTag: "cwi:water", amount: 500}])
    ]
  )
  .transitionalItem('create:unprocessed_obsidian_sheet')
  .loops(3)
  
  event.recipes.create.sequenced_assembly(
    'kubejs:quality_sealed_wood',
    'kubejs:polished_sealed_wood', 
    [
      event.recipes.create.pressing('kubejs:incomplete_quality_sealed_wood', 'kubejs:incomplete_quality_sealed_wood'),
      event.recipes.create.pressing('kubejs:incomplete_quality_sealed_wood', 'kubejs:incomplete_quality_sealed_wood'),
      event.recipes.create.pressing('kubejs:incomplete_quality_sealed_wood', 'kubejs:incomplete_quality_sealed_wood')
    ]
  )
  .transitionalItem('kubejs:incomplete_quality_sealed_wood')
  .loops(1)

  event.recipes.create.sequenced_assembly(
    'create_connected:control_chip',
    'create:brass_sheet',
    [
      event.recipes.create.cutting('kubejs:incomplete_control_chip', 'kubejs:incomplete_control_chip'),
      event.recipes.create.deploying('kubejs:incomplete_control_chip', ['kubejs:incomplete_control_chip', 'create:electron_tube']),
      event.recipes.create.filling('kubejs:incomplete_control_chip', ['kubejs:incomplete_control_chip', Fluid.of('kubejs:molten_sticky_resin', 25)]),
      event.recipes.create.filling('kubejs:incomplete_control_chip', ['kubejs:incomplete_control_chip', Fluid.of('kubejs:redstone_acid', 100)])
    ]
  )
  .transitionalItem('kubejs:incomplete_control_chip')
  .loops(1)

  event.recipes.create.sequenced_assembly(
    [
      Item.of('create:precision_mechanism').withChance(0.9),
      Item.of('create:brass_ingot').withChance(0.05),
      Item.of('kubejs:brass_powder').withChance(0.02),
      Item.of('create:brass_nugget').withChance(0.03)
    ],
    'create:brass_sheet',
    [
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'vintageimprovements:brass_wire']),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:brass_nugget']),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:screwdriver'])
    ]
  )
  .transitionalItem('create:incomplete_precision_mechanism')
  .loops(3)

  event.recipes.create.sequenced_assembly(
    [
      Item.of('kubejs:steam_mechanism').withChance(0.9),
      Item.of('kubejs:bronze_ingot').withChance(0.05),
      Item.of('kubejs:bronze_powder').withChance(0.02),
      Item.of('kubejs:bronze_nugget').withChance(0.03)
    ],
    'kubejs:bronze_sheet',
    [
      event.recipes.create.deploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'kubejs:bronze_wire']),
      event.recipes.create.deploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'kubejs:bronze_rod']),
      event.recipes.create.deploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'createdieselgenerators:engine_piston']),
      event.recipes.create.deploying('kubejs:incomplete_steam_mechanism', ['kubejs:incomplete_steam_mechanism', 'tfmg:screwdriver'])
    ]
  )
  .transitionalItem('kubejs:incomplete_steam_mechanism')
  .loops(2)

  event.recipes.create.sequenced_assembly(
    'kubejs:precise_machine',
    'create:brass_casing',
    [
      event.recipes.create.deploying('kubejs:incomplete_precise_machine', ['kubejs:incomplete_precise_machine', 'create:precision_mechanism']),
      event.recipes.create.filling('kubejs:incomplete_precise_machine', ['kubejs:incomplete_precise_machine', Fluid.of('kubejs:redstone_acid', 250)]),
      event.recipes.create.deploying('kubejs:incomplete_precise_machine', ['kubejs:incomplete_precise_machine', 'create:electron_tube']),
      event.recipes.create.deploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'tfmg:screwdriver'])
    ]
  )
  .transitionalItem('kubejs:incomplete_precise_machine')
  .loops(1)

  event.recipes.create.sequenced_assembly(
    'createdeco:industrial_iron_ingot',
    'kubejs:heated_iron_ingot', 
    [
      event.recipes.create.pressing('kubejs:incomplete_industrial_iron_ingot', 'kubejs:incomplete_industrial_iron_ingot'),
      event.recipes.create.pressing('kubejs:incomplete_industrial_iron_ingot', 'kubejs:incomplete_industrial_iron_ingot'),
      event.recipes.create.filling('kubejs:incomplete_industrial_iron_ingot', ['kubejs:incomplete_industrial_iron_ingot', {fluidTag: "cwi:water", amount: 500}])
    ]
  )
  .transitionalItem('kubejs:incomplete_industrial_iron_ingot')
  .loops(3)

  event.recipes.create.sequenced_assembly(
    'kubejs:industrial_iron_blade',
    'kubejs:heated_iron_ingot', 
    [
      event.custom({"type":"createaddition:rolling","input": {"item": 'kubejs:incomplete_industrial_iron_blade'},"result": {"item": 'kubejs:incomplete_industrial_iron_blade'}}),
      event.recipes.create.cutting('kubejs:incomplete_industrial_iron_blade', 'kubejs:incomplete_industrial_iron_blade'),
      event.recipes.create.pressing('kubejs:incomplete_industrial_iron_blade', 'kubejs:incomplete_industrial_iron_blade'),
      event.recipes.create.filling('kubejs:incomplete_industrial_iron_blade', ['kubejs:incomplete_industrial_iron_blade', {fluidTag: "cwi:water", amount: 500}]),
      event.custom({"type":"vintageimprovements:polishing","speedLimits": 3,"ingredients": [{"item": 'kubejs:incomplete_industrial_iron_blade'}],"results": [{"item": 'kubejs:incomplete_industrial_iron_blade'}],"processingTime": 50})
    ]
  )
  .transitionalItem('kubejs:incomplete_industrial_iron_blade')
  .loops(3)

  event.recipes.create.sequenced_assembly(
    'kubejs:mechanical_arm_base',
    'kubejs:precise_machine',
    [
      event.recipes.create.deploying('kubejs:incomplete_mechanical_arm_base', ['kubejs:incomplete_mechanical_arm_base', 'create_connected:control_chip']),
      event.recipes.create.deploying('kubejs:incomplete_mechanical_arm_base', ['kubejs:incomplete_mechanical_arm_base', 'kubejs:integrated_electron_tube']),
      event.recipes.create.deploying('kubejs:incomplete_mechanical_arm_base', ['kubejs:incomplete_mechanical_arm_base', 'kubejs:robot_arm']),
      event.recipes.create.deploying('kubejs:incomplete_mechanical_arm_base', ['kubejs:incomplete_mechanical_arm_base', 'tfmg:screwdriver']),
      event.recipes.create.filling('kubejs:incomplete_mechanical_arm_base', ['kubejs:incomplete_mechanical_arm_base', Fluid.of('kubejs:molten_sticky_resin', 100)])
    ]
  )
  .transitionalItem('kubejs:incomplete_mechanical_arm_base')
  .loops(1)

  event.recipes.create.sequenced_assembly(
    'kubejs:integrated_electron_tube',
    'create:brass_sheet',
    [
      event.recipes.create.deploying('kubejs:incomplete_integrated_electron_tube', ['kubejs:incomplete_integrated_electron_tube', 'create:electron_tube']),
      event.recipes.create.deploying('kubejs:incomplete_integrated_electron_tube', ['kubejs:incomplete_integrated_electron_tube', 'create:electron_tube']),
      event.recipes.create.deploying('kubejs:incomplete_integrated_electron_tube', ['kubejs:incomplete_integrated_electron_tube', 'tfmg:screwdriver']),
      event.recipes.create.filling('kubejs:incomplete_integrated_electron_tube', ['kubejs:incomplete_integrated_electron_tube', Fluid.of('kubejs:molten_sticky_resin', 100)])
    ]
  )
  .transitionalItem('kubejs:incomplete_integrated_electron_tube')
  .loops(2)

  event.recipes.create.sequenced_assembly(
    '6x createdieselgenerators:distillation_controller',
    'createaddition:straw',
    [
      event.recipes.create.deploying('kubejs:incomplete_distillation_controller', ['kubejs:incomplete_distillation_controller', 'kubejs:integrated_electron_tube']),
      event.recipes.create.deploying('kubejs:incomplete_distillation_controller', ['kubejs:incomplete_distillation_controller', 'minecraft:clock']),
      event.recipes.create.deploying('kubejs:incomplete_distillation_controller', ['kubejs:incomplete_distillation_controller', 'tfmg:screwdriver']),
      event.recipes.create.filling('kubejs:incomplete_distillation_controller', ['kubejs:incomplete_distillation_controller', Fluid.of('kubejs:molten_sticky_resin', 100)])
    ]
  )
  .transitionalItem('kubejs:incomplete_distillation_controller')
  .loops(1)

  event.recipes.create.sequenced_assembly(
    'createaddition:straw',
    'tfmg:brass_pipe',
    [
      event.recipes.create.deploying('kubejs:incomplete_fluid_combustion_module', ['kubejs:incomplete_fluid_combustion_module', 'create:brass_sheet']),
      event.recipes.create.deploying('kubejs:incomplete_fluid_combustion_module', ['kubejs:incomplete_fluid_combustion_module', 'create_connected:control_chip']),
      event.recipes.create.deploying('kubejs:incomplete_fluid_combustion_module', ['kubejs:incomplete_fluid_combustion_module', 'create:precision_mechanism']),
      event.recipes.create.deploying('kubejs:incomplete_fluid_combustion_module', ['kubejs:incomplete_fluid_combustion_module', 'tfmg:screwdriver']),
      event.recipes.create.filling('kubejs:incomplete_fluid_combustion_module', ['kubejs:incomplete_fluid_combustion_module', Fluid.of('kubejs:molten_sticky_resin', 100)])
    ]
  )
  .transitionalItem('kubejs:incomplete_fluid_combustion_module')
  .loops(1)

})