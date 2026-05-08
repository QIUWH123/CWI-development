ServerEvents.tags('item', event => {

  //tools
  event.removeAll('forge:tools/swords')
  event.removeAll('minecraft:swords')
  event.add('minecraft:swords', [
    'minecraft:wooden_sword',
    'minecraft:stone_sword',
    'minecraft:iron_sword',
    'tfmg:lead_sword',
    'tfmg:steel_sword',
    'tfmg:aluminum_sword',
    'kubejs:rusted_iron_sword',
    'kubejs:bronze_sword'
  ])

  event.removeAll('forge:tools/axes')
  event.removeAll('minecraft:axes')
  event.add('minecraft:axes', [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'tfmg:lead_axe',
    'tfmg:steel_axe',
    'tfmg:aluminum_axe',
    'kubejs:rusted_iron_axe',
    'kubejs:bronze_axe'
  ])

  event.removeAll('forge:tools/pickaxes')
  event.removeAll('minecraft:pickaxes')
  event.add('minecraft:pickaxes', [
    'minecraft:wooden_pickaxe',
    'minecraft:stone_pickaxe',
    'minecraft:iron_pickaxe',
    'tfmg:lead_pickaxe',
    'tfmg:steel_pickaxe',
    'tfmg:aluminum_pickaxe',
    'kubejs:rusted_iron_pickaxe',
    'kubejs:bronze_pickaxe'
  ])

  event.removeAll('forge:tools/shovels')
  event.removeAll('minecraft:shovels')
  event.add('minecraft:shovels', [
    'minecraft:wooden_shovel',
    'minecraft:stone_shovel',
    'minecraft:iron_shovel',
    'tfmg:lead_shovel',
    'tfmg:steel_shovel',
    'tfmg:aluminum_shovel',
    'kubejs:rusted_iron_shovel',
    'kubejs:bronze_shovel'
  ])

  event.removeAll('forge:tools/axes')
  event.removeAll('minecraft:axes')
  event.add('minecraft:axes', [
    'minecraft:wooden_axe',
    'minecraft:stone_axe',
    'minecraft:iron_axe',
    'tfmg:lead_axe',
    'tfmg:steel_axe',
    'tfmg:aluminum_axe',
    'kubejs:rusted_iron_axe',
    'kubejs:bronze_axe'
  ])

  //chemical_spray
  event.add('modpack:chemical_sprayer', ['modpack:chemical_sprayer', 'createdieselgenerators:chemical_sprayer_lighter'])

  //type
  event.add('modpack:iron2', ['minecraft:iron_sword', 'minecraft:iron_hoe'])
  event.add('modpack:iron3', ['minecraft:iron_axe', 'minecraft:iron_pickaxe'])
  event.add('modpack:iron1', 'minecraft:iron_shovel')
  event.add('modpack:iron5', 'minecraft:iron_helmet')
  event.add('modpack:iron8', 'minecraft:iron_chestplate')
  event.add('modpack:iron7', 'minecraft:iron_leggings')
  event.add('modpack:iron4', 'minecraft:iron_boots')

  event.add('modpack:bronze2', ['kubejs:bronze_sword', 'kubejs:bronze_hoe'])
  event.add('modpack:bronze3', ['kubejs:bronze_axe', 'kubejs:bronze_pickaxe'])
  event.add('modpack:bronze1', 'kubejs:bronze_shovel')
  event.add('modpack:bronze5', 'kubejs:bronze_helmet')
  event.add('modpack:bronze8', 'kubejs:bronze_chestplate')
  event.add('modpack:bronze7', 'kubejs:bronze_leggings')
  event.add('modpack:bronze4', 'kubejs:bronze_boots')

  //wrench
  event.add('forge:tools/wrench', 'clanginghowl:industrial_adjustable_wrench')
  event.add('create:chain_rideable', 'clanginghowl:industrial_adjustable_wrench')

  //knives
  event.add('forge:tools', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('forge:tools/knives', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('farmersdelight:tools/knives', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('farmersdelight:straw_harvesters', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('minecraft:breaks_decorated_pots', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])

  //ingots
  event.add('forge:ingots', [
    'kubejs:rusted_iron_ingot',
    'kubejs:nylon_ingot',
    'kubejs:magnesium_ingot',
    'kubejs:cobalt_ingot',
    'kubejs:tin_ingot',
    'kubejs:bronze_ingot',
    'kubejs:silver_ingot'
  ])

  //sheets
  event.add('forge:plates', [
    'createdeco:industrial_iron_sheet',
    'kubejs:magnetic_alloy_sheet',
    'kubejs:magnet_sheet',
    'kubejs:bronze_sheet',
    'kubejs:silver_sheet',
    'kubejs:tin_sheet',
    'kubejs:cobalt_sheet',
    'kubejs:magnesium_sheet',
    'create_new_age:overcharged_iron_sheet',
    'create_new_age:overcharged_golden_sheet'
  ])

  //rods
  event.add('forge:rods', [
    'kubejs:magnet_rod',
    'kubejs:bronze_rod',
    'kubejs:silver_rod',
    'kubejs:tin_rod'
  ])

  //curving_head
  event.add('vintageimprovements:curving_heads', [
    'minecraft:iron_ingot',
    'minecraft:iron_nugget',
    'create:iron_sheet',
    'createaddition:iron_rod',
    'tfmg:steel_block'
  ])

  //string
  event.add('modpack:string', [
    'tfmg:synthetic_string',
    'minecraft:string',
    'biomancy:sinew'
  ])

  //rubber
  event.add('modpack:rubber', ['tfmg:rubber_sheet', 'kubejs:rubber'])

  //clay
  event.add('modpack:clay', ['minecraft:clay', 'kubejs:clay_dust'])

  //feather
  event.add('modpack:feather', ['kubejs:synthetic_leather', 'minecraft:feather'])

  //leather
  event.add('modpack:leather', ['tfmg:synthetic_leather', 'minecraft:leather'])

  //basicMaterials
  event.add('modpack:basic_materials', ['tfmg:sulfur_dust', 'tfmg:limesand'])

  //deoxidizer
  event.add('modpack:deoxidizer', [
    'kubejs:silicon_dust',
    'kubejs:aluminum_dust',
    'kubejs:magnesium_dust'
  ])

  //stickyMaterials
  event.add('modpack:sticky_materials', ['kubejs:sticky_resin', 'minecraft:slime_ball'])

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
  event.add('modpack:cobbled_stones', [
    'minecraft:cobblestone',
    'minecraft:cobbled_deepslate',
    'kubejs:cobbled_andesite',
    'kubejs:cobbled_diorite',
    'kubejs:cobbled_granite',
    'kubejs:cobbled_schist',
    'kubejs:cobbled_gneiss',
    'kubejs:cobbled_rhyolite',
    'kubejs:cobbled_shale',
    'ad_astra:moon_cobblestone',
    'ad_astra:glacio_cobblestone',
    'ad_astra:mars_cobblestone',
    'ad_astra:mercury_cobblestone'
  ])

  //glass
  event.add('modpack:glass1', ['minecraft:glass', 'kubejs:reinforced_glass', 'kubejs:annealed_glass'])
  event.add('modpack:glass2', ['kubejs:reinforced_glass', 'kubejs:annealed_glass'])
  event.add('modpack:glass3', 'kubejs:annealed_glass')

  //logs
  const itemLogs = event.get('minecraft:logs').getObjectIds()
  const itemLogsToRemove = [
    'darkerdepths:petrified_log',
    'darkerdepths:petrified_wood',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:stripped_petrified_wood'
  ]
  event.add('modpack:normal_logs', itemLogs.filter(log => !itemLogsToRemove.includes(log.toString())))

})

ServerEvents.tags('block', event => {

  //logs
  const blockLogs = event.get('minecraft:logs').getObjectIds()
  const blockLogsToRemove = [
    'darkerdepths:petrified_log',
    'darkerdepths:petrified_wood',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:stripped_petrified_wood'
  ]
  event.add('modpack:normal_logs', blockLogs.filter(log => !blockLogsToRemove.includes(log.toString())))

//soul_fire_base_block

  event.add('minecraft:soul_fire_base_blocks', [
    'minecraft:reinforced_deepslate',
    'minecraft:sculk',
    'minecraft:sculk_catalyst'
  ])

//mineable

  event.remove('minecraft:mineable/axe', 'minecraft:crafting_table')
  event.add('minecraft:mineable/pickaxe', [
    'minecraft:crafting_table',
    'tfmg:rebar_block',
    'tfmg:rebar_floor',
    'tfmg:rebar_wall',
    'tfmg:rebar_pile',
    'tfmg:rebar_stairs',
    'tfmg:rebar_pillar'
  ])
  event.add('minecraft:mineable/axe', 'kubejs:dead_leaves')

//create

  event.removeAll('create:windmill_sails')
  event.add('create:windmill_sails', 'create:white_sail')

//wrench pickup

  event.add('create:wrench_pickup', [
    'kubejs:rusted_heavy_machinery_casing',
    'kubejs:rusted_industrial_aluminum_casing',
    'kubejs:computer_heat_vent',
    'kubejs:sealed_wood',
    'kubejs:polished_sealed_wood',
    'kubejs:quality_sealed_wood',
    'kubejs:incomplete_quality_sealed_wood',
    'kubejs:andesite_machine',
    'kubejs:precise_machine',
    'kubejs:incomplete_precise_machine',
    'kubejs:incomplete_mechanical_arm',
    'kubejs:incomplete_mechanical_pipette',
    'kubejs:incomplete_diesel_engine',
    'kubejs:incomplete_large_diesel_engine',
    'kubejs:incomplete_huge_diesel_engine',
    'kubejs:incomplete_heavy_machinery_casing',
    'kubejs:incomplete_blast_furnace_reinforcement',
    'modpack:steel_energy_input',
    'modpack:graphite_electrode',
    'modpack:steel_item_input',
    'modpack:steel_item_output',
    'modpack:steel_fluid_input',
    'modpack:steel_fluid_output',
    'modpack:arc_furnace_stress_output',
    'modpack:arc_furnace',
    'modpack:heavy_machinery_top_item_input',
    'modpack:heavy_machinery_top_fluid_input',
    'modpack:steel_gas_output'
  ])

//stones

  event.add('minecraft:deepslate_ore_replaceables', [
    'kubejs:gneiss',
    'kubejs:schist',
    'minecraft:cobbled_deepslate',
    'kubejs:cobbled_schist',
    'kubejs:cobbled_gneiss'
  ])
  event.add('minecraft:stone_ore_replaceables', [
    'kubejs:shale',
    'kubejs:rhyolite',
    'minecraft:andesite',
    'minecraft:granite',
    'minecraft:diorite',
    'minecraft:cobblestone',
    'kubejs:cobbled_rhyolite',
    'kubejs:cobbled_andesite',
    'kubejs:cobbled_diorite',
    'kubejs:cobbled_granite',
    'kubejs:cobbled_shale'
  ])

//carver_replace

  event.add('overworld_carver_replaceables', [
    '#minecraft:base_stone_overworld',
    '#minecraft:terracotta',
    '#minecraft:iron_ores',
    '#minecraft:copper_ores',
    'minecraft:water',
    'minecraft:sandstone',
    'minecraft:red_sandstone',
    'minecraft:calcite',
    'minecraft:packed_ice',
    'minecraft:raw_iron_block',
    'minecraft:raw_copper_block',
    'kubejs:depleted_dirt',
    'kubejs:ashen_depleted_dirt'
  ])

//arid_ground

  event.add('darkerdepths:arid_ground', ['#minecraft:stone_ore_replaceables', '#minecraft:deepslate_ore_replaceables'])

//grime_ground

  event.add('darkerdepths:grime_ground', ['#minecraft:stone_ore_replaceables', '#minecraft:deepslate_ore_replaceables'])

//cobbled_stones

  event.add('modpack:cobbled_stones', [
    'minecraft:cobblestone',
    'minecraft:cobbled_deepslate',
    'kubejs:cobbled_andesite',
    'kubejs:cobbled_diorite',
    'kubejs:cobbled_granite',
    'kubejs:cobbled_schist',
    'kubejs:cobbled_gneiss',
    'kubejs:cobbled_rhyolite',
    'kubejs:cobbled_shale',
    'ad_astra:moon_cobblestone',
    'ad_astra:glacio_cobblestone',
    'ad_astra:mars_cobblestone',
    'ad_astra:mercury_cobblestone'
  ])

//dirt

  event.add('minecraft:dead_bush_may_place_on', ['kubejs:depleted_dirt', 'kubejs:ashen_depleted_dirt'])
  event.add('minecraft:sculk_replaceable_world_gen', ['kubejs:depleted_dirt', 'kubejs:ashen_depleted_dirt'])
  event.add('minecraft:moss_replaceable', ['kubejs:depleted_dirt', 'kubejs:ashen_depleted_dirt'])
  event.add('minecraft:depleted_dirt', ['kubejs:depleted_dirt', 'kubejs:ashen_depleted_dirt'])

//steelArmor

  event.add('minecraft:wither_immune', [
    'kubejs:steel_armor_safe',
    'kubejs:steel_armor_block',
    'kubejs:steel_armor_penetrated'
  ])
  event.add('minecraft:dragon_immune', [
    'kubejs:steel_armor_safe',
    'kubejs:steel_armor_block',
    'kubejs:steel_armor_penetrated'
  ])
  event.add('create:non_movable', [
    'kubejs:steel_armor_safe',
    'kubejs:steel_armor_block',
    'kubejs:steel_armor_penetrated'
  ])
  event.add('forge:relocation_not_supported', [
    'kubejs:steel_armor_safe',
    'kubejs:steel_armor_block',
    'kubejs:steel_armor_penetrated'
  ])
  event.add('minecraft:geode_invalid_blocks', [
    'kubejs:steel_armor_safe',
    'kubejs:steel_armor_block',
    'kubejs:steel_armor_penetrated'
  ])

//mixing_vessel

  event.add('modpack:fluid_container', [
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
  ])

})

ServerEvents.tags('fluid', event => {

//fluids

  event.add('modpack:water', [
    'minecraft:water',
    'kubejs:distilled_water'
  ])

  event.removeAll('c:water')
  event.removeAll('minecraft:water')

  event.add('c:water', [
    'minecraft:water', 
    'minecraft:flowing_water'
  ])

  event.add('minecraft:water', [
    'minecraft:water', 
    'minecraft:flowing_water'
  ])

//fuel

  event.add('create_sa:fuel_fluid', [
    "minecraft:lava",
    "createdieselgenerators:gasoline",
    "createdieselgenerators:plant_oil",
    "createdieselgenerators:diesel",
    "createdieselgenerators:biodiesel"
  ])

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