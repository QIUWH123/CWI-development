ServerEvents.recipes(event => {

//shapeless

  event.shapeless(
    Item.of('kubejs:mechanic_manual'),
    [
      'kubejs:mechanic_manual_scrap_top',
      'kubejs:mechanic_manual_scrap_middle',
      'kubejs:mechanic_manual_scrap_bottom'
    ]
  )

  event.shapeless(
    Item.of('darkerdepths:rope'),
    [
      '3x farmersdelight:rope'
    ]
  )

  event.shapeless(
    Item.of('kubejs:net'),
    [
      '6x #cwi:string'
    ]
  )

  event.shapeless(
    Item.of('create:encased_chain_drive'),
    [
      'create:andesite_casing',
      '#cwi:rubber'
    ]
  )

  event.shapeless(
    Item.of('minecraft:slime_ball'),
    [
      'kubejs:sticky_resin',
      'minecraft:lime_dye'
    ]
  )

  event.shapeless(
    Item.of('minecraft:paper'),
    [
      '3x createdieselgenerators:wood_chip'
    ]
  )

  event.shapeless(
    Item.of('kubejs:andesite_compound',2),
    [
      '3x minecraft:clay_ball',
      '3x kubejs:andesite_powder'
    ]
  )

  event.shapeless(
    Item.of('createdieselgenerators:wood_chip',4),
    [
      'createdieselgenerators:chip_wood_block'
    ]
  )

  event.shapeless(
    Item.of('create:white_sail'),
    [
      'create:sail_frame',
      'kubejs:net'
    ]
  )

  event.shapeless(
    'kubejs:claystone_clump',
    [
      '2x kubejs:cobbled_claystone',
      '2x minecraft:gravel'
    ]
  )

  event.shapeless(
    Item.of('create:portable_storage_interface'),
    [
      'kubejs:andesite_machine',
      'create:chute'
    ]
  )

//shaped

  event.shaped(
    Item.of('minecraft:blast_furnace'),
    [
      'BCB',
      'CAC',
      'BBB'
    ],
    {
      A: '#cwi:cobbled_stones',
      B: 'create:iron_sheet',
      C: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    Item.of('minecraft:feather'),
    [
      ' A ',
      'AAA',
      'ABA'
    ],
    {
      A: '#cwi:string',
      B: 'minecraft:stick'
    }
  )

  event.shaped(
    Item.of('minecraft:minecart'),
    [
      'A A',
      'AAA'
    ],
    {
      A: 'create:iron_sheet'
    }
  )

  event.shaped(
    Item.of('minecraft:hopper'),
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
    Item.of('minecraft:cauldron'),
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
    Item.of('create:mechanical_pump'),
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
    Item.of('geode_plus:nether_quartz_crystal_block'),
    [
      'AA',
      'AA'
    ],
    {
      A: 'minecraft:quartz'
    }
  )

  event.shaped(
    Item.of('minecraft:oak_trapdoor', 2),
    [
      'AAA',
      'AAA'
    ],
    {
      A: 'createdieselgenerators:chip_wood_block'
    }
  )

  event.shaped(
    Item.of('minecraft:oak_sign', 3),
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
    Item.of('create:filter'),
    [
      'ABA'
    ],
    {
      A: 'create:iron_sheet',
      B: 'kubejs:net'
    }
  )

  event.shaped(
    Item.of('create:attribute_filter'),
    [
      'ABA'
    ],
    {
      A: 'create:brass_sheet',
      B: 'kubejs:net'
    }
  )

  event.shaped(
    Item.of('create_power_loader:andesite_chunk_loader'),
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
      E: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    Item.of('createaddition:rolling_mill'),
    [
      'ABA',
      'CBC',
      'CDC'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:shaft',
      C: 'create:andesite_alloy',
      D: 'create:andesite_casing'
    }
  )

  event.shaped(
    Item.of('create:crushing_wheel'),
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
    Item.of('create:depot'),
    [
      'A',
      'B'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:andesite_casing'
    }
  )

  event.shaped(
    Item.of('create:millstone'),
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
    Item.of('createdieselgenerators:bulk_fermenter'),
    [
      'A',
      'B',
      'A'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:fluid_tank'
    }
  )

   event.shaped(
    Item.of('createdieselgenerators:basin_lid'),
    [
      ' B ',
      'AAA'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'minecraft:clock'
    }
  )

   event.shaped(
    Item.of('createmetallurgy:foundry_lid'),
    [
      ' B ',
      'AAA',
      'A A'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'minecraft:clock'
    }
  )

  event.shaped(
    Item.of('create:basin'),
    [
      'A A',
      'AAA'
    ],
    {
      A: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    Item.of('createdieselgenerators:hammer'),
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
    Item.of('create:propeller'),
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
    Item.of('create:whisk'),
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
    Item.of('kubejs:andesite_machine'),
    [
      'DAD',
      'CBC',
      'DAD'
    ],
    {
      A: 'kubejs:andesite_bearing',
      B: 'create:andesite_casing',
      C: 'create:large_cogwheel',
      D: 'create:cogwheel'
    }
  )

  event.shaped(
    Item.of('create:windmill_bearing'),
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
      E: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    Item.of('create:sail_frame'),
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
    Item.of('kubejs:andesite_bearing'),
    [
      ' A ',
      'ABA',
      ' A '
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:cogwheel'
    }
  )

  event.shaped(
    Item.of('minecraft:observer'),
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
    Item.of('bits_n_bobs:chain_pulley'),
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
    Item.of('create:rope_pulley'),
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
    Item.of('create:mechanical_press'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'create:piston_extension_pole',
      B: 'kubejs:andesite_machine',
      C: 'create:andesite_alloy_block'
    }
  )

  event.shaped(
    Item.of('ratatouille:mechanical_demolder'),
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
    Item.of('create:mechanical_mixer'),
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
    Item.of('create:package_frogport'),
    [
      'A',
      'B',
      'C'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:item_vault',
      C: 'kubejs:andesite_machine'
    }
  )

  event.shaped(
    Item.of('create:fluid_tank'),
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
    Item.of('create_connected:fluid_vessel'),
    [
      'ABA'
    ],
    {
      A: 'create:copper_sheet',
      B: '#cwi:glass1'
    }
  )

  event.shaped(
    Item.of('create:packager'),
    [
      ' A ',
      'ABA',
      'DCD'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:cardboard_block',
      C: 'kubejs:andesite_machine',
      D: 'minecraft:redstone'
    }
  )

  event.shaped(
    Item.of('fluid:can_filler'),
    [
      ' A ',
      'ABA',
      'DCD'
    ],
    {
      A: 'create:copper_sheet',
      B: 'kubejs:rubber_block',
      C: 'kubejs:andesite_machine',
      D: 'minecraft:redstone'
    }
  )

  event.shaped(
    Item.of('create:schematicannon'),
    [
      'ABA',
      'FCF',
      'EDE'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'create:basin',
      C: 'kubejs:andesite_machine',
      D: 'kubejs:andesite_bearing',
      E: '#cwi:cobbled_stones',
      F: '#minecraft:logs'
    }
  )


  event.shaped(
    Item.of('rubberworks:sapper'),
    [
      'DDE',
      'ABC',
      'DDE'
    ],
    {
      A: 'create:cogwheel',
      B: 'kubejs:andesite_machine',
      C: 'create:fluid_pipe',
      D: 'vintageimprovements:andesite_sheet',
      E: 'vintageimprovements:andesite_rod'
    }
  )

  event.shaped(
    Item.of('create:steam_engine'),
    [
      'EAE',
      'DBD',
      'DCD'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'kubejs:andesite_bearing',
      C: 'create:fluid_tank',
      D: 'create:copper_sheet',
      E: '#cwi:rubber'
    }
  )

  event.shaped(
    Item.of('create:item_drain'),
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
    Item.of('minecraft:stonecutter'),
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
    Item.of('create:mechanical_saw'),
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
    Item.of('vintageimprovements:belt_grinder'),
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
    Item.of('sophisticatedbackpacks:backpack'),
    [
      'ABA',
      'BCB',
      'DED'
    ],
    {
      A: '#cwi:string',
      B: '#cwi:leather',
      C: 'minecraft:chest',
      D: 'vintageimprovements:andesite_sheet',
      E: 'create:andesite_alloy'
    }
  )

  event.shaped(
    Item.of('create:spout'),
    [
      'A',
      'B'
    ],
    {
      A: 'create:copper_casing',
      B: '#cwi:rubber'
    }
  )

  event.shaped(
    Item.of('create:hose_pulley'),
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
    Item.of('create:belt_connector'),
    [
      'AAA'
    ],
    {
      A: '#cwi:rubber'
    }
  )

  event.shaped(
    Item.of('create:radial_chassis', 3),
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
    Item.of('create:linear_chassis', 3),
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
    Item.of('create:nozzle'),
    [
      'C',
      'B',
      'A'
    ],
    {
      A: 'vintageimprovements:andesite_sheet',
      B: 'kubejs:net',
      C: 'vintageimprovements:andesite_wire'
    }
  )

  event.shaped(
    Item.of('create:super_glue'),
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
    Item.of('create:blaze_burner'),
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
      F: 'vintageimprovements:andesite_sheet'
    }
  )

  event.shaped(
    Item.of('create:andesite_funnel'),
    [
      'B',
      'C'
    ],
    {
      B: 'create:andesite_alloy',
      C: '#cwi:rubber'
    }
  )

  event.shaped(
    Item.of('create:andesite_tunnel', 2),
    [
      'BB',
      'CC'
    ],
    {
      B: 'create:andesite_alloy',
      C: '#cwi:rubber'
    }
  )

  event.recipes.create.mixing('minecraft:wheat_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_wheat_seeds'])
  event.recipes.create.mixing('minecraft:melon_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_melon_seeds'])
  event.recipes.create.mixing('minecraft:pumpkin_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_pumpkin_seeds'])
  event.recipes.create.mixing('minecraft:beetroot_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_beetroot_seeds'])
  event.recipes.create.mixing('farmersdelight:tomato_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_tomato_seeds'])
  event.recipes.create.mixing('farmersdelight:cabbage_seeds', [{fluidTag: "cwi:water", amount: 50}, 'kubejs:dry_cabbage_seeds'])
  event.recipes.create.mixing('kubejs:andesite_compound', ['minecraft:clay_ball', 'kubejs:andesite_powder'])

  event.recipes.create.cutting(['kubejs:precision_manual', 'kubejs:the_precision_manufacturing_engineers_log'], 'kubejs:package')

  event.smelting('create:andesite_alloy', 'kubejs:andesite_compound')
  event.blasting('create:andesite_alloy', 'kubejs:andesite_compound')

  event.smelting('kubejs:silver_ingot', 'kubejs:crushed_raw_silver')
  event.blasting('kubejs:silver_ingot', 'kubejs:crushed_raw_silver')

  event.smelting('kubejs:tin_ingot', 'kubejs:crushed_raw_tin')
  event.blasting('kubejs:tin_ingot', 'kubejs:crushed_raw_tin')

  event.smelting('kubejs:terracotta_disk', 'kubejs:clay_disk')
  event.smelting('kubejs:terracotta_ingot_mold', 'kubejs:clay_ingot_mold')
  event.smelting('kubejs:terracotta_nugget_mold', 'kubejs:clay_nugget_mold')
  event.smelting('kubejs:terracotta_rod_mold', 'kubejs:clay_rod_mold')
  event.smelting('kubejs:terracotta_sheet_mold', 'kubejs:clay_sheet_mold')

  event.smelting('minecraft:charcoal', 'createdieselgenerators:chip_wood_beam')

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