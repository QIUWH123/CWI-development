// Priority: 10

// Basic Materials

StartupEvents.registry('item', event => {

    event.create('glass_batch')
    event.create('sintered_glass_blank')

    event.create('dust-covered_seeds').displayName('Dust-Covered Seeds')
        .texture('kubejs:item/plants/dust-covered_seeds')

    event.create('muddy_bamboo')
        .texture('kubejs:item/plants/muddy_bamboo')

    event.create('muddy_sugar_cane')
        .texture('kubejs:item/plants/muddy_sugar_cane')

    event.create('wood_sheet_mold')
    event.create('filled_wood_sheet_mold')
    event.create('net').texture('tfc:item/jute_net')
    event.create('sponge_gemmule')
    event.create('synthetic_feather')
    event.create('sticky_resin')
    event.create('rubber')
    event.create('andesite_compound')
    event.create('nylon_salt')
    event.create('nylon_salt_crystal')
    event.create('carborundum')
    event.create('fat')
    event.create('yeast_paste').texture('tfc:item/canola_paste')
    event.create('quality_tool_handle')
    event.create('backpack_extension')
})

// Normal Ores

StartupEvents.registry('item', event => {

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

})

// Mineral Compounds

StartupEvents.registry('item', event => {

    event.create('peat')
        .texture('kubejs:item/ores/peat')

    event.create('bituminous_coal')
        .texture('kubejs:item/ores/bituminous_coal')

})

// Mold

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

// Industry

StartupEvents.registry('item', event => {

// Curving Head

    event.create('capping_head')
    
// Normal

    event.create('heated_iron_ingot')

    event.create('heated_industrial_iron_ingot')

    event.create('carbon_fiber_composite_sheet').texture('kubejs:item/carbon_fibers/carbon_fiber_composite_sheet')

    event.create('carbon_fiber_strands').texture('kubejs:item/carbon_fibers/carbon_fiber_strands')

    event.create('stabilized_fibers').texture('kubejs:item/carbon_fibers/stabilized_fibers')

    event.create('pan_fibers').texture('kubejs:item/carbon_fibers/pan_fibers')

// Incomplete Items

    event.create('incomplete_steel_mechanism')
        .texture('kubejs:item/incomplete_items/incomplete_steel_mechanism')

    event.create('incomplete_voltaic_pile')
        .texture('kubejs:item/incomplete_items/incomplete_voltaic_pile')

    event.create('incomplete_control_chip')
        .texture('kubejs:item/incomplete_items/incomplete_control_chip')

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

// Machine Parts

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

    event.create('industrial_iron_blade')
        .texture('kubejs:item/machine_parts/industrial_iron_blade')

// Damaged

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