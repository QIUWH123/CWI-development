ServerEvents.tags('item', event => {

//tools

  event.removeAll('forge:tools/swords')
  event.removeAll('minecraft:swords')
  event.add('minecraft:swords', 'minecraft:wooden_sword')
  event.add('minecraft:swords', 'minecraft:stone_sword')
  event.add('minecraft:swords', 'minecraft:iron_sword')
  event.add('minecraft:swords', 'tfmg:lead_sword')
  event.add('minecraft:swords', 'tfmg:steel_sword')
  event.add('minecraft:swords', 'tfmg:aluminum_sword')
  event.add('minecraft:swords', 'kubejs:rusted_iron_sword')
  event.add('minecraft:swords', 'kubejs:bronze_sword')

  event.removeAll('forge:tools/axes')
  event.removeAll('minecraft:axes')
  event.add('minecraft:axes', 'minecraft:wooden_axe')
  event.add('minecraft:axes', 'minecraft:stone_axe')
  event.add('minecraft:axes', 'minecraft:iron_axe')
  event.add('minecraft:axes', 'tfmg:lead_axe')
  event.add('minecraft:axes', 'tfmg:steel_axe')
  event.add('minecraft:axes', 'tfmg:aluminum_axe')
  event.add('minecraft:axes', 'kubejs:rusted_iron_axe')
  event.add('minecraft:axes', 'kubejs:bronze_axe')

  event.removeAll('forge:tools/pickaxes')
  event.removeAll('minecraft:pickaxes')
  event.add('minecraft:pickaxes', 'minecraft:wooden_pickaxe')
  event.add('minecraft:pickaxes', 'minecraft:stone_pickaxe')
  event.add('minecraft:pickaxes', 'minecraft:iron_pickaxe')
  event.add('minecraft:pickaxes', 'tfmg:lead_pickaxe')
  event.add('minecraft:pickaxes', 'tfmg:steel_pickaxe')
  event.add('minecraft:pickaxes', 'tfmg:aluminum_pickaxe')
  event.add('minecraft:pickaxes', 'kubejs:rusted_iron_pickaxe')
  event.add('minecraft:pickaxes', 'kubejs:bronze_pickaxe')

  event.removeAll('forge:tools/shovels')
  event.removeAll('minecraft:shovels')
  event.add('minecraft:shovels', 'minecraft:wooden_shovel')
  event.add('minecraft:shovels', 'minecraft:stone_shovel')
  event.add('minecraft:shovels', 'minecraft:iron_shovel')
  event.add('minecraft:shovels', 'tfmg:lead_shovel')
  event.add('minecraft:shovels', 'tfmg:steel_shovel')
  event.add('minecraft:shovels', 'tfmg:aluminum_shovel')
  event.add('minecraft:shovels', 'kubejs:rusted_iron_shovel')
  event.add('minecraft:shovels', 'kubejs:bronze_shovel')

  event.removeAll('forge:tools/axes')
  event.removeAll('minecraft:axes')
  event.add('minecraft:axes', 'minecraft:wooden_axe')
  event.add('minecraft:axes', 'minecraft:stone_axe')
  event.add('minecraft:axes', 'minecraft:iron_axe')
  event.add('minecraft:axes', 'tfmg:lead_axe')
  event.add('minecraft:axes', 'tfmg:steel_axe')
  event.add('minecraft:axes', 'tfmg:aluminum_axe')
  event.add('minecraft:axes', 'kubejs:rusted_iron_axe')
  event.add('minecraft:axes', 'kubejs:bronze_axe')

//type

  event.add('modpack:iron2', 'minecraft:iron_sword')
  event.add('modpack:iron3', 'minecraft:iron_axe')
  event.add('modpack:iron3', 'minecraft:iron_pickaxe')
  event.add('modpack:iron1', 'minecraft:iron_shovel')
  event.add('modpack:iron2', 'minecraft:iron_hoe')
  event.add('modpack:iron5', 'minecraft:iron_helmet')
  event.add('modpack:iron8', 'minecraft:iron_chestplate')
  event.add('modpack:iron7', 'minecraft:iron_leggings')
  event.add('modpack:iron4', 'minecraft:iron_boots')

  event.add('modpack:bronze2', 'kubejs:bronze_sword')
  event.add('modpack:bronze3', 'kubejs:bronze_axe')
  event.add('modpack:bronze3', 'kubejs:bronze_pickaxe')
  event.add('modpack:bronze1', 'kubejs:bronze_shovel')
  event.add('modpack:bronze2', 'kubejs:bronze_hoe')
  event.add('modpack:bronze5', 'kubejs:bronze_helmet')
  event.add('modpack:bronze8', 'kubejs:bronze_chestplate')
  event.add('modpack:bronze7', 'kubejs:bronze_leggings')
  event.add('modpack:bronze4', 'kubejs:bronze_boots')

//wrench

  event.add('forge:tools/wrench', 'clanginghowl:industrial_adjustable_wrench')
  event.add('create:chain_rideable', 'clanginghowl:industrial_adjustable_wrench')

//knives

  event.add('forge:tools', 'ae2:nether_quartz_cutting_knife')
  event.add('forge:tools', 'ae2:certus_quartz_cutting_knife')
  event.add('forge:tools/knives', 'ae2:nether_quartz_cutting_knife')
  event.add('forge:tools/knives', 'ae2:certus_quartz_cutting_knife')
  event.add('farmersdelight:tools/knives', 'ae2:nether_quartz_cutting_knife')
  event.add('farmersdelight:tools/knives', 'ae2:certus_quartz_cutting_knife')
  event.add('farmersdelight:straw_harvesters', 'ae2:nether_quartz_cutting_knife')
  event.add('farmersdelight:straw_harvesters', 'ae2:certus_quartz_cutting_knife')
  event.add('minecraft:breaks_decorated_pots', 'ae2:nether_quartz_cutting_knife')
  event.add('minecraft:breaks_decorated_pots', 'ae2:certus_quartz_cutting_knife')

//ingots

  event.add('forge:ingots', 'kubejs:rusted_iron_ingot')
  event.add('forge:ingots', 'kubejs:nylon_ingot')
  event.add('forge:ingots', 'kubejs:magnesium_ingot')
  event.add('forge:ingots', 'kubejs:cobalt_ingot')
  event.add('forge:ingots', 'kubejs:tin_ingot')
  event.add('forge:ingots', 'kubejs:bronze_ingot')
  event.add('forge:ingots', 'kubejs:silver_ingot')

//sheets

  event.add('forge:plates', 'createdeco:industrial_iron_sheet')
  event.add('forge:plates', 'kubejs:magnetic_alloy_sheet')
  event.add('forge:plates', 'kubejs:magnet_sheet')
  event.add('forge:plates', 'kubejs:bronze_sheet')
  event.add('forge:plates', 'kubejs:silver_sheet')
  event.add('forge:plates', 'kubejs:tin_sheet')
  event.add('forge:plates', 'kubejs:cobalt_sheet')
  event.add('forge:plates', 'kubejs:magnesium_sheet')
  event.add('forge:plates', 'create_new_age:overcharged_iron_sheet')
  event.add('forge:plates', 'create_new_age:overcharged_golden_sheet')

//rods

  event.add('forge:rods', 'kubejs:magnet_rod')
  event.add('forge:rods', 'kubejs:bronze_rod')
  event.add('forge:rods', 'kubejs:silver_rod')
  event.add('forge:rods', 'kubejs:tin_rod')

//curving_head

  event.add('vintageimprovements:curving_heads', 'minecraft:iron_ingot')
  event.add('vintageimprovements:curving_heads', 'minecraft:iron_nugget')
  event.add('vintageimprovements:curving_heads', 'create:iron_sheet')
  event.add('vintageimprovements:curving_heads', 'createaddition:iron_rod')
  event.add('vintageimprovements:curving_heads', 'tfmg:steel_block')

//string

  event.add('modpack:string', 'tfmg:synthetic_string')
  event.add('modpack:string', 'minecraft:string')
  event.add('modpack:string', 'biomancy:sinew')

//rubber

  event.add('modpack:rubber', 'tfmg:rubber_sheet')
  event.add('modpack:rubber', 'kubejs:rubber')

//clay

  event.add('modpack:clay', 'minecraft:clay')
  event.add('modpack:clay', 'kubejs:clay_dust')

//feather

  event.add('modpack:feather', 'kubejs:synthetic_leather')
  event.add('modpack:feather', 'minecraft:feather')

//leather

  event.add('modpack:leather', 'tfmg:synthetic_leather')
  event.add('modpack:leather', 'minecraft:leather')

//basicMaterials

  event.add('modpack:basic_materials', 'tfmg:sulfur_dust')
  event.add('modpack:basic_materials', 'tfmg:limesand')

//deoxidizer

  event.add('modpack:deoxidizer', 'kubejs:silicon_dust')
  event.add('modpack:deoxidizer', 'kubejs:aluminum_dust')
  event.add('modpack:deoxidizer', 'kubejs:magnesium_dust')

//stickyMaterials

  event.add('modpack:sticky_materials', 'kubejs:sticky_resin')
  event.add('modpack:sticky_materials', 'minecraft:slime_ball')

//iron

  event.remove('forge:plates/iron', 'ad_astra:iron_plate')

//steel

  event.remove('forge:rods/steel', 'ad_astra:steel_rod')
  event.remove('forge:plates/steel', 'ad_astra:steel_plate')
  event.remove('forge:nuggets/steel', 'ad_astra:steel_nugget')
  event.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
  event.remove('forge:ingots/steel', 'createmetallurgy:steel_ingot')
  event.remove('forge:storage_blocks/steel', 'createmetallurgy:steel_block')
  event.remove('forge:storage_blocks/steel', 'ad_astra:steel_block')

//cobbled_stones

  event.add('modpack:cobbled_stones', 'minecraft:cobblestone')
  event.add('modpack:cobbled_stones', 'minecraft:cobbled_deepslate')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_andesite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_diorite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_granite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_schist')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_gneiss')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_rhyolite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_shale')
  event.add('modpack:cobbled_stones', 'ad_astra:moon_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:glacio_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:mars_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:mercury_cobblestone')

//glass

  event.add('modpack:glass1', 'minecraft:glass')
  event.add('modpack:glass1', 'kubejs:reinforced_glass')
  event.add('modpack:glass1', 'kubejs:annealed_glass')

  event.add('modpack:glass2', 'kubejs:reinforced_glass')
  event.add('modpack:glass2', 'kubejs:annealed_glass')

  event.add('modpack:glass3', 'kubejs:annealed_glass')

//logs

  const allLogs = event.get('minecraft:logs').getObjectIds()
  const toRemove = [
    'darkerdepths:petrified_log',
    'darkerdepths:petrified_wood',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:stripped_petrified_wood'
  ]

  allLogs.forEach(log => {
    if (!toRemove.includes(log.toString())) {
      event.add('modpack:normal_logs', log)
    }
  })

})

ServerEvents.tags('block', event => {

//logs

  const allLogs = event.get('minecraft:logs').getObjectIds()
  const toRemove = [
    'darkerdepths:petrified_log',
    'darkerdepths:petrified_wood',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:stripped_petrified_wood'
  ]

  allLogs.forEach(log => {
    if (!toRemove.includes(log.toString())) {
      event.add('modpack:normal_logs', log)
    }
  })

//soul_fire_base_block

  event.add('minecraft:soul_fire_base_blocks', 'minecraft:reinforced_deepslate')
  event.add('minecraft:soul_fire_base_blocks', 'minecraft:sculk')
  event.add('minecraft:soul_fire_base_blocks', 'minecraft:sculk_catalyst')

//mineable

  event.remove('minecraft:mineable/axe', 'minecraft:crafting_table')
  event.add('minecraft:mineable/pickaxe', 'minecraft:crafting_table')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_block')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_floor')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_wall')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_pile')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_stairs')
  event.add('minecraft:mineable/pickaxe', 'tfmg:rebar_pillar')

  event.add('minecraft:mineable/axe', 'kubejs:dead_leaves')

//create

  event.removeAll('create:windmill_sails')
  event.add('create:windmill_sails', 'create:white_sail')

//wrench pickup

  event.add('create:wrench_pickup', 'kubejs:rusted_heavy_machinery_casing')
  event.add('create:wrench_pickup', 'kubejs:rusted_industrial_aluminum_casing')
  event.add('create:wrench_pickup', 'kubejs:computer_heat_vent')
  event.add('create:wrench_pickup', 'kubejs:sealed_wood')
  event.add('create:wrench_pickup', 'kubejs:polished_sealed_wood')
  event.add('create:wrench_pickup', 'kubejs:quality_sealed_wood')
  event.add('create:wrench_pickup', 'kubejs:incomplete_quality_sealed_wood')
  event.add('create:wrench_pickup', 'kubejs:andesite_machine')
  event.add('create:wrench_pickup', 'kubejs:precise_machine')
  event.add('create:wrench_pickup', 'kubejs:incomplete_precise_machine')
  event.add('create:wrench_pickup', 'kubejs:incomplete_mechanical_arm')
  event.add('create:wrench_pickup', 'kubejs:incomplete_mechanical_pipette')
  event.add('create:wrench_pickup', 'kubejs:incomplete_diesel_engine')
  event.add('create:wrench_pickup', 'kubejs:incomplete_large_diesel_engine')
  event.add('create:wrench_pickup', 'kubejs:incomplete_huge_diesel_engine')
  event.add('create:wrench_pickup', 'kubejs:incomplete_heavy_machinery_casing')
  event.add('create:wrench_pickup', 'kubejs:incomplete_blast_furnace_reinforcement')

  event.add('create:wrench_pickup', 'modpack:steel_energy_input')
  event.add('create:wrench_pickup', 'modpack:graphite_electrode')
  event.add('create:wrench_pickup', 'modpack:steel_item_input')
  event.add('create:wrench_pickup', 'modpack:steel_item_output')
  event.add('create:wrench_pickup', 'modpack:steel_fluid_input')
  event.add('create:wrench_pickup', 'modpack:steel_fluid_output')
  event.add('create:wrench_pickup', 'modpack:arc_furnace_stress_output')
  event.add('create:wrench_pickup', 'modpack:arc_furnace')
  event.add('create:wrench_pickup', 'modpack:heavy_machinery_top_item_input')
  event.add('create:wrench_pickup', 'modpack:heavy_machinery_top_fluid_input')
  event.add('create:wrench_pickup', 'modpack:steel_gas_output')

//stones

  event.add('minecraft:deepslate_ore_replaceables', 'kubejs:gneiss')
  event.add('minecraft:deepslate_ore_replaceables', 'kubejs:schist')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:shale')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:rhyolite')
  event.add('minecraft:stone_ore_replaceables', 'minecraft:andesite')
  event.add('minecraft:stone_ore_replaceables', 'minecraft:granite')
  event.add('minecraft:stone_ore_replaceables', 'minecraft:diorite')

  event.add('minecraft:deepslate_ore_replaceables', 'minecraft:cobbled_deepslate')
  event.add('minecraft:deepslate_ore_replaceables', 'kubejs:cobbled_schist')
  event.add('minecraft:deepslate_ore_replaceables', 'kubejs:cobbled_gneiss')
  event.add('minecraft:stone_ore_replaceables', 'minecraft:cobblestone')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:cobbled_rhyolite')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:cobbled_andesite')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:cobbled_diorite')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:cobbled_granite')
  event.add('minecraft:stone_ore_replaceables', 'kubejs:cobbled_shale')
  
//carver_replace

  event.add('overworld_carver_replaceables', '#minecraft:base_stone_overworld')
  event.add('overworld_carver_replaceables', '#minecraft:terracotta')
  event.add('overworld_carver_replaceables', '#minecraft:iron_ores')
  event.add('overworld_carver_replaceables', '#minecraft:copper_ores')
  event.add('overworld_carver_replaceables', 'minecraft:water')
  event.add('overworld_carver_replaceables', 'minecraft:sandstone')
  event.add('overworld_carver_replaceables', 'minecraft:red_sandstone')
  event.add('overworld_carver_replaceables', 'minecraft:calcite')
  event.add('overworld_carver_replaceables', 'minecraft:packed_ice')
  event.add('overworld_carver_replaceables', 'minecraft:raw_iron_block')
  event.add('overworld_carver_replaceables', 'minecraft:raw_copper_block')

//arid_ground

  event.add('darkerdepths:arid_ground', '#minecraft:stone_ore_replaceables')
  event.add('darkerdepths:arid_ground', '#minecraft:deepslate_ore_replaceables')

//grime_ground

  event.add('darkerdepths:grime_ground', '#minecraft:stone_ore_replaceables')
  event.add('darkerdepths:grime_ground', '#minecraft:deepslate_ore_replaceables')

//cobbled_stones

  event.add('modpack:cobbled_stones', 'minecraft:cobblestone')
  event.add('modpack:cobbled_stones', 'minecraft:cobbled_deepslate')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_andesite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_diorite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_granite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_schist')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_gneiss')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_rhyolite')
  event.add('modpack:cobbled_stones', 'kubejs:cobbled_shale')
  event.add('modpack:cobbled_stones', 'ad_astra:moon_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:glacio_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:mars_cobblestone')
  event.add('modpack:cobbled_stones', 'ad_astra:mercury_cobblestone')

//dirt

  event.add('minecraft:dead_bush_may_place_on', 'kubejs:depleted_dirt')
  event.add('minecraft:dead_bush_may_place_on', 'kubejs:ashen_depleted_dirt')
  event.add('minecraft:overworld_carver_replaceables', 'kubejs:depleted_dirt')
  event.add('minecraft:overworld_carver_replaceables', 'kubejs:ashen_depleted_dirt')
  event.add('minecraft:sculk_replaceable_world_gen', 'kubejs:depleted_dirt')
  event.add('minecraft:sculk_replaceable_world_gen', 'kubejs:ashen_depleted_dirt')
  event.add('minecraft:moss_replaceable', 'kubejs:depleted_dirt')
  event.add('minecraft:moss_replaceable', 'kubejs:ashen_depleted_dirt')
  event.add('minecraft:depleted_dirt', 'kubejs:depleted_dirt')
  event.add('minecraft:depleted_dirt', 'kubejs:ashen_depleted_dirt')

//steelArmor

  event.add('minecraft:wither_immune', 'kubejs:steel_armor_safe')
  event.add('minecraft:wither_immune', 'kubejs:steel_armor_block')
  event.add('minecraft:wither_immune', 'kubejs:steel_armor_penetrated')
  event.add('minecraft:dragon_immune', 'kubejs:steel_armor_safe')
  event.add('minecraft:dragon_immune', 'kubejs:steel_armor_block')
  event.add('minecraft:dragon_immune', 'kubejs:steel_armor_penetrated')
  event.add('create:non_movable', 'kubejs:steel_armor_safe')
  event.add('create:non_movable', 'kubejs:steel_armor_block')
  event.add('create:non_movable', 'kubejs:steel_armor_penetrated')
  event.add('forge:relocation_not_supported', 'kubejs:steel_armor_safe')
  event.add('forge:relocation_not_supported', 'kubejs:steel_armor_block')
  event.add('forge:relocation_not_supported', 'kubejs:steel_armor_penetrated')
  event.add('minecraft:geode_invalid_blocks', 'kubejs:steel_armor_safe')
  event.add('minecraft:geode_invalid_blocks', 'kubejs:steel_armor_block')
  event.add('minecraft:geode_invalid_blocks', 'kubejs:steel_armor_penetrated')

//mixing_vessel

  event.add('kubejs:mixing_vessel', 
    [
      'modpack:mixing_vessel',
      'create:fluid_tank',
      'tfmg:aluminum_fluid_tank',
      'tfmg:cast_iron_fluid_tank',
      'tfmg:steel_fluid_tank',
      'ratatouille:compost_tower',
      'createdieselgenerators:oil_barrel',
      'fluid:smart_gutter_outlet',
      'fluid:gutter_outlet',
      'fluid:fluid_atomizer',
      'create_connected:fluid_vessel'
    ]
  )

})

ServerEvents.tags('fluid', event => {

//fluids

  event.add('modpack:water', 
    [
      'minecraft:water',
      'kubejs:distilled_water'
    ]
  )

  event.removeAll('c:water')
  event.removeAll('minecraft:water')

  event.add('c:water', 
    [
      'minecraft:water', 
      'minecraft:flowing_water'
    ]
  )

  event.add('minecraft:water', 
    [
      'minecraft:water', 
      'minecraft:flowing_water'
    ]
  )

//fuel

  event.add('create_sa:fuel_fluid', 
    [
      "minecraft:lava",
      "createdieselgenerators:gasoline",
      "createdieselgenerators:plant_oil",
      "createdieselgenerators:diesel",
      "createdieselgenerators:biodiesel"
    ]
  )

  event.add('create_sa:water_fluid', 'kubejs:distilled_water')

})

ServerEvents.recipes(event => {

  event.replaceInput({ input: '#forge:plates/zinc' },'#forge:plates/zinc','createaddition:zinc_sheet')
  event.replaceInput({ input: '#forge:plates/nickel' },'#forge:plates/nickel','tfmg:nickel_sheet')
  event.replaceInput({ input: '#forge:plates/lead' },'#forge:plates/lead','tfmg:lead_sheet')
  event.replaceInput({ input: '#forge:plates/cast_iron' },'#forge:plates/cast_iron','tfmg:cast_iron_sheet')
  event.replaceInput({ input: '#forge:plates/aluminum' },'#forge:plates/aluminum','tfmg:aluminum_sheet')
  event.replaceInput({ input: 'createdeco:zinc_sheet' },'createdeco:zinc_sheet','createaddition:zinc_sheet')
  event.replaceInput({ input: 'minecraft:string' },'minecraft:string','#modpack:string')
  event.replaceInput({ input: 'minecraft:leather' },'minecraft:leather','#modpack:leather')

})