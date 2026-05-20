// priority: 10

//basic materials

StartupEvents.registry('item', event => {

  event.create('dust-covered_seeds').displayName('Dust-Covered Seeds')
    .texture('kubejs:item/plants/dust-covered_seeds')

  event.create('muddy_bamboo')
    .texture('kubejs:item/plants/muddy_bamboo')
    
  event.create('muddy_sugar_cane')
    .texture('kubejs:item/plants/muddy_sugar_cane')
    
  event.create('net')
  event.create('sponge_gemmule')
  event.create('polished_diamond')
  event.create('synthetic_feather')
  event.create('sticky_resin')
  event.create('rubber')
  event.create('polybenzimidazole')
  event.create('andesite_compound')
  event.create('rusted_iron_ingot')
  event.create('nylon_ingot')
  event.create('nylon_salt')
  event.create('nylon_salt_crystal')
  event.create('carborundum')

  event.create('cobalt_wire')
    .texture('kubejs:item/materials/cobalt_wire')
    
  event.create('tin_wire')
    .texture('kubejs:item/materials/tin_wire')
    
  event.create('silver_wire')
    .texture('kubejs:item/materials/silver_wire')
    
  event.create('bronze_wire')
    .texture('kubejs:item/materials/bronze_wire')
    
  event.create('magnet_wire')
    .texture('kubejs:item/materials/magnet_wire')
    
  event.create('magnetic_alloy_wire')
    .texture('kubejs:item/materials/magnetic_alloy_wire')

  event.create('magnesium_sheet')
    .texture('kubejs:item/materials/magnesium_sheet')
    
  event.create('cobalt_sheet')
    .texture('kubejs:item/materials/cobalt_sheet')
    
  event.create('tin_sheet')
    .texture('kubejs:item/materials/tin_sheet')
    
  event.create('silver_sheet')
    .texture('kubejs:item/materials/silver_sheet')
    
  event.create('bronze_sheet')
    .texture('kubejs:item/materials/bronze_sheet')
    
  event.create('magnet_sheet')
    .texture('kubejs:item/materials/magnet_sheet')
    
  event.create('magnetic_alloy_sheet')
    .texture('kubejs:item/materials/magnetic_alloy_sheet')
  
  event.create('cobalt_rod')
    .texture('kubejs:item/materials/cobalt_rod')
    
  event.create('tin_rod')
    .texture('kubejs:item/materials/tin_rod')
    
  event.create('silver_rod')
    .texture('kubejs:item/materials/silver_rod')
    
  event.create('bronze_rod')
    .texture('kubejs:item/materials/bronze_rod')
    
  event.create('magnesium_ingot')
    .texture('kubejs:item/materials/magnesium_ingot')
    
  event.create('magnesium_nugget')
    .texture('kubejs:item/materials/magnesium_nugget')
    
  event.create('cobalt_ingot')
    .texture('kubejs:item/materials/cobalt_ingot')
    
  event.create('cobalt_nugget')
    .texture('kubejs:item/materials/cobalt_nugget')
    
  event.create('tin_ingot')
    .texture('kubejs:item/materials/tin_ingot')
    
  event.create('tin_nugget')
    .texture('kubejs:item/materials/tin_nugget')
    
  event.create('bronze_ingot')
    .texture('kubejs:item/materials/bronze_ingot')
    
  event.create('bronze_nugget')
    .texture('kubejs:item/materials/bronze_nugget')
    
  event.create('silver_ingot')
    .texture('kubejs:item/materials/silver_ingot')
    
  event.create('silver_nugget')
    .texture('kubejs:item/materials/silver_nugget')


})

//dust

StartupEvents.registry('item', event => {

  event.create('heated_powdered_obsidian')
  event.create('caustic_soda_powder')
  event.create('sodium_bisulfate_powder')

  const dusts = [
    'bone_dust', 'quartz_dust', 'fluorite_dust', 'diamond_dust', 'coal_dust',
    'gold_dust', 'iron_dust', 'lapis_dust', 'copper_dust', 'brass_dust',
    'cobalt_dust', 'magnesium_dust', 'zinc_dust', 'vanadium_dust', 'silicon_dust',
    'charcoal_dust', 'andesite_alloy_dust', 'nickel_dust', 'lead_dust',
    'cast_iron_dust', 'lithium_dust', 'bronze_dust', 'electrum_dust',
    'constantan_dust', 'silver_dust', 'tin_dust', 'aluminum_dust',
    'industrial_iron_dust', 'steel_dust', 'halite_dust', 'magnesite_dust',
    'lignite_dust', 'flint_dust', 'kelp_dust', 'ash_dust', 'dark_ash_dust',
    'clay_dust', 'stone_dust', 'deepslate_dust', 'tuff_dust', 'claystone_dust',
    'granite_dust', 'diorite_dust', 'andesite_dust', 'basalt_dust', 'schist_dust',
    'gneiss_dust', 'rhyolite_dust', 'shale_dust', 'quartzite_dust',
    'conglomerate_dust', 'phyllite_dust', 'darkslate_dust'
  ]

  dusts.forEach(dust => {event.create(dust).texture(`kubejs:item/dusts/${dust}`).tag('cwi:dusts')})

})

StartupEvents.registry('item', event => {

//catalyst

  event.create('cobalt_catalyst')
    .texture('kubejs:item/catalysts/cobalt_catalyst')

  event.create('sulfur_copper_catalyst')
    .texture('kubejs:item/catalysts/sulfur_copper_catalyst')

  event.create('chloride_copper_catalyst')
    .texture('kubejs:item/catalysts/chloride_copper_catalyst')

  event.create('iron_catalyst')
    .texture('kubejs:item/catalysts/iron_catalyst')

  event.create('nickel_catalyst')
    .texture('kubejs:item/catalysts/nickel_catalyst')

  event.create('vanadium_catalyst')
    .texture('kubejs:item/catalysts/vanadium_catalyst')

  event.create('platinum_catalyst')
    .texture('kubejs:item/catalysts/platinum_catalyst')

//normal ores

  event.create('sulfur')
    .texture('kubejs:item/ores/sulfur')

  event.create('redstone')
    .texture('kubejs:item/ores/redstone')

  event.create('fluorite')
    .texture('kubejs:item/ores/fluorite')

  event.create('raw_cobalt')
    .texture('kubejs:item/ores/raw_cobalt')

  event.create('raw_silver')
    .texture('kubejs:item/ores/raw_silver')

  event.create('raw_tin')
    .texture('kubejs:item/ores/raw_tin')

  event.create('crushed_raw_cobalt')
    .texture('kubejs:item/materials/crushed_raw_cobalt')

  event.create('crushed_raw_silver')
    .texture('kubejs:item/materials/crushed_raw_silver')

  event.create('crushed_raw_tin')
    .texture('kubejs:item/materials/crushed_raw_tin')

//mineral compounds

  event.create('azurite')
    .texture('kubejs:item/ores/azurite')

  event.create('bauxite')
    .texture('kubejs:item/ores/bauxite')

  event.create('chromite')
    .texture('kubejs:item/ores/chromite')

  event.create('galena')
    .texture('kubejs:item/ores/galena')

  event.create('pentlandite')
    .texture('kubejs:item/ores/pentlandite')

  event.create('cassiterite')
    .texture('kubejs:item/ores/cassiterite')

  event.create('sphalerite')
    .texture('kubejs:item/ores/sphalerite')

  event.create('chalcocite')
    .texture('kubejs:item/ores/chalcocite')

  event.create('hematite')
    .texture('kubejs:item/ores/hematite')

  event.create('cooperite')
    .texture('kubejs:item/ores/cooperite')

  event.create('peat')
    .texture('kubejs:item/ores/peat')

  event.create('lignite')
    .texture('tfc:item/ore/lignite')

  event.create('bituminous_coal')
    .texture('kubejs:item/ores/bituminous_coal')

  event.create('borax')
    .texture('kubejs:item/ores/Borax Ore')

  event.create('malachite')
    .texture('kubejs:item/ores/malachite')

  event.create('magnetite')
    .texture('kubejs:item/ores/magnetite')

  event.create('magnesite')
    .texture('kubejs:item/ores/magnesite')

  event.create('halite')
    .texture('tfc:item/ore/halite')

  event.create('petzite')
    .texture('kubejs:item/ores/petzite')

  event.create('rutile')
    .texture('kubejs:item/ores/rutile')

  event.create('uraninite')
    .texture('kubejs:item/ores/uraninite')
  
})

//mold

StartupEvents.registry('item', event => {

  event.create('fireclay_disk')
    .texture('kubejs:item/molds/fireclay_disk')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('fireproof_brick_disk')
    .texture('kubejs:item/molds/fireproof_brick_disk')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('terracotta_disk')
    .texture('kubejs:item/molds/terracotta_disk')
    .maxStackSize(16)

  event.create('clay_disk')
    .texture('kubejs:item/molds/clay_disk')
    .maxStackSize(16)

  event.create('fireproof_brick_ingot_mold')
    .texture('kubejs:item/molds/fireproof_brick_ingot_mold')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('fireproof_brick_nugget_mold')
    .texture('kubejs:item/molds/fireproof_brick_nugget_mold')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('fireproof_brick_rod_mold')
    .texture('kubejs:item/molds/fireproof_brick_rod_mold')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('fireproof_brick_sheet_mold')
    .texture('kubejs:item/molds/fireproof_brick_sheet_mold')
    .maxStackSize(16)
    .fireResistant(true)

  event.create('terracotta_ingot_mold')
    .texture('kubejs:item/molds/terracotta_ingot_mold')
    .maxStackSize(16)

  event.create('terracotta_nugget_mold')
    .texture('kubejs:item/molds/terracotta_nugget_mold')
    .maxStackSize(16)

  event.create('terracotta_rod_mold')
    .texture('kubejs:item/molds/terracotta_rod_mold')
    .maxStackSize(16)

  event.create('terracotta_sheet_mold')
    .texture('kubejs:item/molds/terracotta_sheet_mold')
    .maxStackSize(16)

  event.create('clay_ingot_mold')
    .texture('kubejs:item/molds/clay_ingot_mold')
    .maxStackSize(16)

  event.create('clay_nugget_mold')
    .texture('kubejs:item/molds/clay_nugget_mold')
    .maxStackSize(16)

  event.create('clay_rod_mold')
    .texture('kubejs:item/molds/clay_rod_mold')
    .maxStackSize(16)

  event.create('clay_sheet_mold')
    .texture('kubejs:item/molds/clay_sheet_mold')
    .maxStackSize(16)
  
})

//industry

StartupEvents.registry('item', event => {
    
//normal

  event.create('polyvinyl_chloride_plastic_sheet')

  event.create('heated_iron_ingot')

  event.create('heated_cast_iron_ingot')

  event.create('carbon_fiber_composite_sheet')

  event.create('carbon_fiber_strands')

  event.create('stabilized_fibers')

  event.create('pan_fibers')

//incomplete items

  event.create('incomplete_voltaic_pile')
    .texture('kubejs:item/incomplete_items/incomplete_voltaic_pile')

  event.create('incomplete_control_chip')
    .texture('kubejs:item/incomplete_items/incomplete_control_chip')

  event.create('incomplete_generator_coil')
    .texture('kubejs:item/incomplete_items/incomplete_generator_coil')

  event.create('incomplete_distillation_controller')
    .texture('kubejs:item/incomplete_items/incomplete_distillation_controller')
    .rarity('epic')

  event.create('incomplete_steel_drill_head')
    .texture('kubejs:item/incomplete_items/incomplete_steel_drill_head')
    .maxStackSize(16)
    .fireResistant(true)
    .rarity('uncommon')

  event.create('incomplete_fluid_combustion_module')
    .texture('kubejs:item/incomplete_items/incomplete_fluid_combustion_module')
    .rarity('uncommon')

  event.create('incomplete_industrial_pump')
    .texture('kubejs:item/incomplete_items/incomplete_industrial_pump')

  event.create('incomplete_steel_fuel_injector')
    .texture('kubejs:item/incomplete_items/incomplete_steel_fuel_injector')

  event.create('incomplete_integrated_electron_tube')
    .texture('kubejs:item/incomplete_items/incomplete_integrated_electron_tube')

  event.create('incomplete_engine_cylinder')
    .texture('kubejs:item/incomplete_items/incomplete_engine_cylinder')

  event.create('incomplete_steel_ring')
    .texture('kubejs:item/incomplete_items/incomplete_steel_ring')

  event.create('incomplete_steam_mechanism')
    .texture('kubejs:item/incomplete_items/incomplete_steam_mechanism')

  event.create('incomplete_steel_bearing')
    .texture('kubejs:item/incomplete_items/incomplete_steel_bearing')

  event.create('incomplete_industrial_iron_ingot')
    .texture('kubejs:item/incomplete_items/incomplete_industrial_iron_ingot')

  event.create('incomplete_cast_iron_ingot')
    .texture('kubejs:item/incomplete_items/incomplete_cast_iron_ingot')

  event.create('incomplete_industrial_iron_blade')
    .texture('kubejs:item/incomplete_items/incomplete_industrial_iron_blade')

//machine parts

  event.create('steel_ring')
    .texture('kubejs:item/machine_parts/steel_ring')

  event.create('handle')
    .texture('kubejs:item/machine_parts/handle')

  event.create('uncharged_voltaic_pile')
    .texture('kubejs:item/machine_parts/uncharged_voltaic_pile')

  event.create('voltaic_pile')
    .texture('kubejs:item/machine_parts/voltaic_pile')
  event.create('brass_circuit_board')
    .texture('kubejs:item/machine_parts/brass_circuit_board')

  event.create('generator_coil')
    .texture('kubejs:item/machine_parts/generator_coil')
    .rarity('rare')

  event.create('industrial_iron_drill_head')
    .texture('kubejs:item/machine_parts/industrial_iron_drill_head')
    .maxStackSize(16)
    .fireResistant(true)
    .rarity('uncommon')

  event.create('steel_drill_head')
    .texture('kubejs:item/machine_parts/steel_drill_head')
    .maxStackSize(16)
    .fireResistant(true)
    .rarity('uncommon')

  event.create('industrial_pump')
    .texture('kubejs:item/machine_parts/industrial_pump')
    .rarity('uncommon')

  event.create('steel_fuel_injector')
    .texture('kubejs:item/machine_parts/steel_fuel_injector')
    .rarity('uncommon')

  event.create('integrated_electron_tube')
    .texture('kubejs:item/machine_parts/integrated_electron_tube')
    .rarity('uncommon')

  event.create('manifold')
    .texture('kubejs:item/machine_parts/manifold')
    .rarity('uncommon')

  event.create('engine_cylinder')
    .texture('kubejs:item/machine_parts/engine_cylinder')

  event.create('precise_optical_lens')
    .texture('kubejs:item/machine_parts/precise_optical_lens')
    .rarity('epic')

  event.create('robot_arm')
    .texture('kubejs:item/machine_parts/robot_arm')

  event.create('robot_hand')
    .texture('kubejs:item/machine_parts/robot_hand')

  event.create('robot_pipette')
    .texture('kubejs:item/machine_parts/robot_pipette')

  event.create('rubber_hand')
    .texture('kubejs:item/machine_parts/rubber_hand')

  event.create('steam_mechanism')
    .texture('kubejs:item/machine_parts/steam_mechanism')
    .rarity('uncommon')

  event.create('andesite_bearing')
    .texture('kubejs:item/machine_parts/andesite_bearing')

  event.create('steel_bearing')
    .texture('kubejs:item/machine_parts/steel_bearing')
    .rarity('uncommon')

  event.create('hydrogen_fuel_cell')
    .texture('kubejs:item/machine_parts/hydrogen_fuel_cell')
    .rarity('epic')

  event.create('industrial_iron_blade')
    .texture('kubejs:item/machine_parts/industrial_iron_blade')

//damaged

  event.create('damaged_polished_rose_quartz')
    .texture('kubejs:item/damaged/damaged_polished_rose_quartz')

  event.create('damaged_electron_tube')
    .texture('kubejs:item/damaged/damaged_electron_tube')

  event.create('damaged_control_chip')
    .texture('kubejs:item/damaged/damaged_control_chip')

  event.create('damaged_natures_compass')
    .texture('kubejs:item/damaged/damaged_natures_compass')

  event.create('damaged_precision_mechanism')
    .texture('kubejs:item/damaged/damaged_precision_mechanism')

})