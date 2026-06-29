// priority: 10

//basic materials

StartupEvents.registry('item', event => {

  event.create('glass_batch')
  event.create('sintered_glass_blank')

  event.create('vintageimprovements:industrial_iron_spring')
  event.create('vintageimprovements:industrial_iron_rod')
  event.create('vintageimprovements:industrial_iron_wire')

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
  event.create('andesite_compound')
  event.create('nylon_salt')
  event.create('nylon_salt_crystal')
  event.create('carborundum')

  event.create('rusted_iron_wire')
    .texture('kubejs:item/materials/rusted_iron_wire')

  event.create('magnesium_wire')
    .texture('kubejs:item/materials/magnesium_wire')

  event.create('cobalt_wire')
    .texture('kubejs:item/materials/cobalt_wire')
    
  event.create('tin_wire')
    .texture('kubejs:item/materials/tin_wire')
    
  event.create('silver_wire')
    .texture('kubejs:item/materials/silver_wire')
    
  event.create('molybdenum_wire')
    .texture('kubejs:item/materials/molybdenum_wire')
    
  event.create('bronze_wire')
    .texture('kubejs:item/materials/bronze_wire')
    
  event.create('magnet_wire')
    .texture('kubejs:item/materials/magnet_wire')
    
  event.create('magnetic_alloy_wire')
    .texture('kubejs:item/materials/magnetic_alloy_wire')

  event.create('rusted_iron_sheet')
    .texture('kubejs:item/materials/rusted_iron_sheet')

  event.create('magnesium_sheet')
    .texture('kubejs:item/materials/magnesium_sheet')
    
  event.create('cobalt_sheet')
    .texture('kubejs:item/materials/cobalt_sheet')
    
  event.create('tin_sheet')
    .texture('kubejs:item/materials/tin_sheet')
    
  event.create('silver_sheet')
    .texture('kubejs:item/materials/silver_sheet')
    
  event.create('molybdenum_sheet')
    .texture('kubejs:item/materials/molybdenum_sheet')
    
  event.create('bronze_sheet')
    .texture('alloyed:item/bronze_sheet')
    
  event.create('magnet_sheet')
    .texture('kubejs:item/materials/magnet_sheet')
    
  event.create('magnetic_alloy_sheet')
    .texture('kubejs:item/materials/magnetic_alloy_sheet')
  
  event.create('rusted_iron_rod')
    .texture('kubejs:item/materials/rusted_iron_rod')
  
  event.create('magnesium_rod')
    .texture('kubejs:item/materials/magnesium_rod')
  
  event.create('cobalt_rod')
    .texture('kubejs:item/materials/cobalt_rod')
    
  event.create('tin_rod')
    .texture('kubejs:item/materials/tin_rod')
    
  event.create('silver_rod')
    .texture('kubejs:item/materials/silver_rod')
    
  event.create('molybdenum_rod')
    .texture('kubejs:item/materials/molybdenum_rod')
    
  event.create('bronze_rod')
    .texture('kubejs:item/materials/bronze_rod')
    
  event.create('rusted_iron_ingot')
    .texture('kubejs:item/materials/rusted_iron_ingot')
    
  event.create('rusted_iron_nugget')
    .texture('kubejs:item/materials/rusted_iron_nugget')
    
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
    .texture('alloyed:item/bronze_ingot')
    
  event.create('bronze_nugget')
    .texture('alloyed:item/bronze_nugget')
    
  event.create('silver_ingot')
    .texture('kubejs:item/materials/silver_ingot')
    
  event.create('silver_nugget')
    .texture('kubejs:item/materials/silver_nugget')
    
  event.create('molybdenum_ingot')
    .texture('kubejs:item/materials/molybdenum_ingot')
    
  event.create('molybdenum_nugget')
    .texture('kubejs:item/materials/molybdenum_nugget')

  event.create('cellulase_enzyme')

  event.create('urea')

  event.create('silica_gel')

  event.create('gold_nanoparticle')

})

//dust

StartupEvents.registry('item', event => {

    event.create('heated_powdered_obsidian')
    event.create('ash')
    event.create('dark_ash')

    const liteColorPowders = [
    ]

    const middleColorPowders = [
      ['pyrite_powder', 0xE5C100],
      ['sodium_bisulfate_powder', 0xFFFACD],
      ['caustic_soda_powder', 0xF0F8FF],
      ['lignin_powder', 0xE8C396],
      ['soda_powder', 0xE0FEFF],
      ['calcium_chloride_powder', 0xFFFFFF]
    ]

    const darkColorPowders = [
    ]

    const powders = [
        'bone_powder', 'quartz_powder', 'fluorite_powder', 'diamond_powder', 'coal_powder',
        'gold_powder', 'iron_powder', 'lapis_powder', 'copper_powder', 'brass_powder',
        'cobalt_powder', 'magnesium_powder', 'zinc_powder', 'vanadium_powder', 'silicon_powder',
        'charcoal_powder', 'andesite_alloy_powder', 'nickel_powder', 'lead_powder',
        'cast_iron_powder', 'lithium_powder', 'bronze_powder', 'electrum_powder', 'rusted_iron_powder',
        'constantan_powder', 'silver_powder', 'tin_powder', 'aluminum_powder', 'molybdenum_powder',
        'industrial_iron_powder', 'steel_powder', 'halite_powder', 'magnesite_powder',
        'lignite_powder', 'flint_powder', 'conglomerate_powder', 'phyllite_powder', 'darkslate_powder',
        'clay_powder', 'stone_powder', 'deepslate_powder', 'tuff_powder', 'claystone_powder',
        'granite_powder', 'diorite_powder', 'andesite_powder', 'basalt_powder', 'schist_powder',
        'gneiss_powder', 'rhyolite_powder', 'shale_powder', 'quartzite_powder', 'glass_powder', 'borax_powder'
    ]

    powders.forEach(powder => {event.create(powder).texture(`kubejs:item/powders/${powder}`).tag('cwi:powders')})
    liteColorPowders.forEach(([powder, color]) => {event.create(powder).texture(`kubejs:item/powders/powder_lite`).color(color).tag('cwi:powders')})
    middleColorPowders.forEach(([powder, color]) => {event.create(powder).texture(`kubejs:item/powders/powder_middle`).color(color).tag('cwi:powders')})
    darkColorPowders.forEach(([powder, color]) => {event.create(powder).texture(`kubejs:item/powders/powder_dark`).color(color).tag('cwi:powders')})

})

StartupEvents.registry('item', event => {

//normal ores

  event.create('sulfur')
    .texture('kubejs:item/ores/sulfur')

  event.create('redstone')
    .texture('kubejs:item/ores/redstone')

  event.create('fluorite')
    .texture('kubejs:item/ores/fluorite')

  event.create('raw_silver')
    .texture('kubejs:item/ores/raw_silver')

  event.create('raw_tin')
    .texture('kubejs:item/ores/raw_tin')

  event.create('crushed_raw_silver')
    .texture('kubejs:item/ores/crushed_raw_silver')

  event.create('crushed_raw_tin')
    .texture('kubejs:item/ores/crushed_raw_tin')

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
    .texture('tfc:item/ore/rich_sphalerite')

  event.create('sphalerite')
    .texture('kubejs:item/ores/sphalerite')

  event.create('chalcocite')
    .texture('mekanism:item/raw_lead')

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
    .texture('mekanism:item/crystal_nitro')

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

  event.create('polyethylene').texture('kubejs:item/materials/polyethylene')
  event.create('polyethylene_powder').texture('kubejs:item/materials/polyethylene_powder')
  event.create('polyethylene_sheet').texture('kubejs:item/materials/polyethylene_sheet')

  event.create('polypropylene').texture('kubejs:item/materials/polypropylene')
  event.create('polypropylene_powder').texture('kubejs:item/materials/polypropylene_powder')
  event.create('polypropylene_sheet').texture('kubejs:item/materials/polypropylene_sheet')

  event.create('polyvinyl_chloride').texture('kubejs:item/materials/polyvinyl_chloride')
  event.create('polyvinyl_chloride_powder').texture('kubejs:item/materials/polyvinyl_chloride_powder')
  event.create('polyvinyl_chloride_sheet').texture('kubejs:item/materials/polyvinyl_chloride_sheet')

  event.create('polybenzimidazole').texture('kubejs:item/materials/polybenzimidazole')
  event.create('polybenzimidazole_powder').texture('kubejs:item/materials/polybenzimidazole_powder')
  event.create('polybenzimidazole_sheet').texture('kubejs:item/materials/polybenzimidazole_sheet')

  event.create('heated_iron_ingot')

  event.create('heated_industrial_iron_ingot')

  event.create('carbon_fiber_composite_sheet').texture('kubejs:item/carbon_fibers/carbon_fiber_composite_sheet')

  event.create('carbon_fiber_strands').texture('kubejs:item/carbon_fibers/carbon_fiber_strands')

  event.create('stabilized_fibers').texture('kubejs:item/carbon_fibers/stabilized_fibers')

  event.create('pan_fibers').texture('kubejs:item/carbon_fibers/pan_fibers')

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
    .rarity('uncommon')

  event.create('steel_drill_head')
    .texture('kubejs:item/machine_parts/steel_drill_head')
    .maxStackSize(16)
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