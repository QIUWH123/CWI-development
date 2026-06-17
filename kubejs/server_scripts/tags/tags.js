ServerEvents.tags('item', event => {

  //chemical_spray
  event.add('cwi:chemical_sprayer', ['cwi:chemical_sprayer', 'createdieselgenerators:chemical_sprayer_lighter'])

  //type
  event.add('cwi:iron2', ['minecraft:iron_sword', 'minecraft:iron_hoe'])
  event.add('cwi:iron3', ['minecraft:iron_axe', 'minecraft:iron_pickaxe'])
  event.add('cwi:iron1', 'minecraft:iron_shovel')
  event.add('cwi:iron5', 'minecraft:iron_helmet')
  event.add('cwi:iron8', 'minecraft:iron_chestplate')
  event.add('cwi:iron7', 'minecraft:iron_leggings')
  event.add('cwi:iron4', 'minecraft:iron_boots')

  event.add('cwi:bronze2', ['kubejs:bronze_sword', 'kubejs:bronze_hoe'])
  event.add('cwi:bronze3', ['kubejs:bronze_axe', 'kubejs:bronze_pickaxe'])
  event.add('cwi:bronze1', 'kubejs:bronze_shovel')
  event.add('cwi:bronze5', 'kubejs:bronze_helmet')
  event.add('cwi:bronze8', 'kubejs:bronze_chestplate')
  event.add('cwi:bronze7', 'kubejs:bronze_leggings')
  event.add('cwi:bronze4', 'kubejs:bronze_boots')

  //wrench
  event.add('forge:tools/wrench', 'clanginghowl:industrial_adjustable_wrench')
  event.add('create:chain_rideable', 'clanginghowl:industrial_adjustable_wrench')

  //knives
  event.add('forge:tools', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('forge:tools/knives', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('farmersdelight:tools/knives', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('farmersdelight:straw_harvesters', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])
  event.add('minecraft:breaks_decorated_pots', ['ae2:nether_quartz_cutting_knife', 'ae2:certus_quartz_cutting_knife'])

  //create_sa
  event.add('forge:tools', [
    'create_sa:brass_sword', 
    'create_sa:brass_axe', 
    'create_sa:brass_pickaxe', 
    'create_sa:brass_shovel', 
    'create_sa:brass_hoe', 
    'create_sa:zinc_sword', 
    'create_sa:zinc_axe', 
    'create_sa:zinc_pickaxe', 
    'create_sa:zinc_shovel', 
    'create_sa:zinc_hoe'
  ])

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
    'tfmg:steel_block',
    'kubejs:rubber_block',
    'kubejs:industrial_rubber_block',
    'kubejs:capping_head'
  ])

  //string
  event.add('cwi:string', [
    'tfmg:synthetic_string',
    'minecraft:string',
    'biomancy:sinew'
  ])

  //charcoal
  event.add('cwi:charcoals', ['minecrft:charcoal', 'kubejs:charcoal_powder'])

  //coal
  event.add('cwi:coals', ['minecraft:coal', 'kubejs:coal_powder'])

  //rubber
  event.add('cwi:rubbers', ['tfmg:rubber_sheet', 'kubejs:rubber'])

  //clay
  event.add('cwi:clays', ['minecraft:clay', 'kubejs:clay_powder'])

  //feather
  event.add('cwi:feathers', ['kubejs:synthetic_leather', 'minecraft:feather'])

  //leather
  event.add('cwi:leathers', ['tfmg:synthetic_leather', 'minecraft:leather'])

  //basicMaterials
  event.add('cwi:basic_materials', ['tfmg:sulfur_dust', 'tfmg:limesand'])

  //deoxidizer
  event.add('cwi:deoxidizer', [
    'kubejs:silicon_powder',
    'kubejs:aluminum_powder',
    'kubejs:magnesium_powder'
  ])

  //stickyMaterials
  event.add('cwi:sticky_materials', ['kubejs:sticky_resin', 'minecraft:slime_ball'])

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
  event.add('cwi:cobbled_stones', [
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

  //hot_items
  event.add('cwi:hot_items', [
    'minecraft:lava_bucket',
    'minecraft:magma_block',
    'minecraft:blaze_rod',
    'minecraft:blaze_powder',
    '#cwi:moltens',
    'kubejs:heated_powdered_obsidian',
    'kubejs:heated_iron_ingot',
    'kubejs:heated_industrial_iron_ingot'
  ])

  //glass
  event.add('cwi:glass1', ['minecraft:glass', 'kubejs:reinforced_glass', 'kubejs:annealed_glass'])
  event.add('cwi:glass2', ['kubejs:reinforced_glass', 'kubejs:annealed_glass'])
  event.add('cwi:glass3', 'kubejs:annealed_glass')

  //logs
  const itemLogs = event.get('minecraft:logs').getObjectIds()
  const itemLogsToRemove = [
    'darkerdepths:petrified_log',
    'darkerdepths:petrified_wood',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:stripped_petrified_wood'
  ]
  event.add('cwi:normal_logs', itemLogs.filter(log => !itemLogsToRemove.includes(log.toString())))

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
  event.add('cwi:normal_logs', blockLogs.filter(log => !blockLogsToRemove.includes(log.toString())))

//soul_fire

  event.add('minecraft:soul_fire_base_blocks', [
    'minecraft:reinforced_deepslate',
    'minecraft:sculk',
    'minecraft:sculk_catalyst'
  ])

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
    'cwi:steel_energy_input',
    'cwi:graphite_electrode',
    'cwi:steel_item_input',
    'cwi:steel_item_output',
    'cwi:steel_fluid_input',
    'cwi:steel_fluid_output',
    'cwi:arc_furnace_stress_output',
    'cwi:arc_furnace',
    'cwi:heavy_machinery_top_item_input',
    'cwi:heavy_machinery_top_fluid_input',
    'cwi:steel_gas_output'
  ])

//stones

  event.add('minecraft:deepslate_ore_replaceables', [
    'kubejs:gneiss',
    'kubejs:schist',
    'minecraft:cobbled_deepslate',
    'kubejs:cobbled_schist',
    'kubejs:cobbled_gneiss',
    'kubejs:gneiss_gravel',
    'kubejs:schist_gravel',
    'kubejs:deepslate_gravel'
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
    'kubejs:cobbled_shale',
    'kubejs:shale_gravel',
    'kubejs:rhyolite_gravel',
    'kubejs:granite_gravel',
    'kubejs:diorite_gravel',
    'kubejs:andesite_gravel'
  ])

//carver_replace

  event.add('minecraft:overworld_carver_replaceables', [
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

  event.add('cwi:cobbled_stones', [
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

//fluid_container
  event.add('cwi:fluid_container', [
    'cwi:mixing_vessel',
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

//Corrosive
  event.add('cwi:corrosive', [
    'tfmg:sulfuric_acid',
    'tfmg:concentrated_sulfuric_acid'
  ])

//Hot
  event.add('cwi:hot', [
    'kubejs:molten_aluminum',
    'kubejs:molten_vanadium',
    'kubejs:molten_tin',
    'kubejs:molten_silver',
    'kubejs:molten_andesite_alloy',
    'kubejs:molten_zinc',
    'kubejs:molten_gold',
    'kubejs:molten_iron',
    'kubejs:molten_pig_iron',
    'kubejs:molten_cast_iron',
    'kubejs:molten_copper',
    'kubejs:molten_brass',
    'kubejs:molten_lead',
    'kubejs:molten_cobalt',
    'kubejs:molten_nickel',
    'kubejs:molten_constantan',
    'kubejs:molten_bronze',
    'kubejs:molten_electrum',
    'kubejs:molten_glass'
  ])

})

ServerEvents.tags('block', event => {

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

  event.add('minecraft:needs_stone_tool', [
    'darkerdepths:stripped_petrified_log', 
    'darkerdepths:stripped_petrified_wood',
    'darkerdepths:petrified_log', 
    'darkerdepths:petrified_wood',
    'darkerdepths:petrified_planks',
    'darkerdepths:petrified_stairs',
    'darkerdepths:petrified_slab',
    'darkerdepths:petrified_fence',
    'darkerdepths:petrified_fence_gate',
    'darkerdepths:petrified_door',
    'darkerdepths:petrified_trapdoor',
    'darkerdepths:petrified_pressure_plate',
    'darkerdepths:petrified_button',
    'darkerdepths:petrified_sign',
    'darkerdepths:petrified_hanging_sign'
  ])

})

ServerEvents.tags('fluid', event => {

//fluids

  event.add('cwi:water', [
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
    "createdieselgenerators:plant_oil",
    "createdieselgenerators:biodiesel"
  ])

  event.add('create_sa:water_fluid', 'kubejs:distilled_water')

//Molten
  event.add('kubejs:molten_hot', [
    'kubejs:molten_aluminum', 'kubejs:molten_vanadium', 'kubejs:molten_tin',
    'kubejs:molten_silver', 'kubejs:molten_andesite_alloy', 'kubejs:molten_zinc',
    'kubejs:molten_gold', 'kubejs:molten_iron', 'kubejs:molten_pig_iron',
    'kubejs:molten_cast_iron', 'kubejs:molten_copper', 'kubejs:molten_brass',
    'kubejs:molten_lead', 'kubejs:molten_cobalt', 'kubejs:molten_nickel',
    'kubejs:molten_constantan', 'kubejs:molten_bronze', 'kubejs:molten_electrum',
    'kubejs:molten_glass'
  ])

//Acid
  event.add('kubejs:acid', [
    'kubejs:redstone_acid', 'tfmg:concentrated_sulfuric_acid', 'kubejs:nitric_acid',
    'kubejs:muriatic_acid', 'kubejs:acetic_acid', 'kubejs:propionic_acid',
    'kubejs:lactic_acid', 'kubejs:wood_vinegar', 'kubejs:humic_acid_slurry',
    'kubejs:chromatic_waste'
  ])

//Base
  event.add('kubejs:base', [
    'kubejs:caustic_soda', 'kubejs:ammonia_solution'
  ])

//Organic
  event.add('kubejs:organic_solvent', [
    'kubejs:methanol', 'kubejs:acetone', 'kubejs:benzene', 'kubejs:toluene',
    'kubejs:xylene', 'kubejs:acrylonitrile', 'kubejs:epichlorohydrin',
    'kubejs:phenol', 'kubejs:cyclohexane', 'kubejs:cyclohexanol',
    'kubejs:paraffin_oil', 'kubejs:cracked_paraffin_oil', 'kubejs:reformate',
    'kubejs:aromatic_mix', 'kubejs:platinum_catalyst_carrier',
    'kubejs:synthetic_ester_base_oil', 'kubejs:epoxy_resin',
    'kubejs:vinyl_chloride_monomer', 'kubejs:pan_precursor',
    'kubejs:hexamethylenediamine_solution', 'kubejs:adipic_acid_solution',
    'kubejs:condensed_natural_gas', 'kubejs:condensed_cracked_naphtha',
    'kubejs:condensed_cracked_ethane', 'kubejs:condensed_cracked_propane',
    'kubejs:molten_polyethylene',
    'kubejs:molten_polypropylene',
    'kubejs:molten_polyvinyl_chloride'
  ])

//normal_fluid
  event.add('kubejs:normal_fluids', [
    'kubejs:brine', 'kubejs:bittern', 'kubejs:nitrate_solution',
    'kubejs:silicate_solution', 'kubejs:distilled_water', 'kubejs:nitrogen_fertilizer',
    'kubejs:wheat_juice', 'kubejs:syrup', 'kubejs:origin_blood',
    'kubejs:molten_slime', 'kubejs:molten_rubber', 'kubejs:molten_sticky_resin'
  ])

//Gas
  event.add('kubejs:gas', [
    'kubejs:oxygen', 'kubejs:nitrogen', 'kubejs:nitrogen_dioxide',
    'kubejs:ammonia', 'kubejs:chlorine', 'kubejs:natural_gas',
    'kubejs:argon', 'kubejs:helium', 'kubejs:hydrogen_sulfide',
    'kubejs:sulfur_dioxide', 'kubejs:steam', 'kubejs:ethane',
    'kubejs:cracked_ethane', 'kubejs:cracked_propane', 'kubejs:cracked_naphtha',
    'kubejs:purified_natural_gas', 'kubejs:methane', 'kubejs:syngas',
    'kubejs:benzene', 'kubejs:toluene', 'kubejs:xylene'
  ])

})

ServerEvents.recipes(event => {

  event.replaceInput({ input: '#forge:plates/zinc' },'#forge:plates/zinc','createaddition:zinc_sheet')
  event.replaceInput({ input: '#forge:plates/nickel' },'#forge:plates/nickel','tfmg:nickel_sheet')
  event.replaceInput({ input: '#forge:plates/lead' },'#forge:plates/lead','tfmg:lead_sheet')
  event.replaceInput({ input: '#forge:plates/cast_iron' },'#forge:plates/cast_iron','tfmg:cast_iron_sheet')
  event.replaceInput({ input: '#forge:plates/aluminum' },'#forge:plates/aluminum','tfmg:aluminum_sheet')
  event.replaceInput({ input: 'createdeco:zinc_sheet' },'createdeco:zinc_sheet','createaddition:zinc_sheet')
  event.replaceInput({ input: 'minecraft:string' },'minecraft:string','#cwi:string')
  event.replaceInput({ input: 'minecraft:leather' },'minecraft:leather','#cwi:leathers')

})