JEIEvents.hideItems(event => {
 
  const itemToHide = [
    'create_sa:copper_helmet',
    'create_sa:copper_chestplate',
    'create_sa:copper_leggings',
    'create_sa:copper_boots',
    'create_sa:copper_sword',
    'create_sa:copper_axe',
    'create_sa:copper_pickaxe',
    'create_sa:copper_shovel',
    'create_sa:copper_hoe',
    'create_sa:rose_quartz_sword',
    'create_sa:rose_quartz_axe',
    'create_sa:rose_quartz_pickaxe',
    'create_sa:rose_quartz_shovel',
    'create_sa:blazing_cleaver',
    'create_sa:blazing_axe',
    'create_sa:blazing_pickaxe',
    'create_sa:blazing_shovel',
    'create_sa:experience_sword',
    'create_sa:experience_axe',
    'create_sa:experience_pickaxe',
    'create_sa:experience_shovel',
    'create_sa:brass_drill_head',
    'create_sa:fan_component',
    'create_sa:small_filling_tank',
    'create_sa:medium_filling_tank',
    'create_sa:large_filling_tank',
    'create_sa:small_fueling_tank',
    'create_sa:medium_fueling_tank',
    'create_sa:large_fueling_tank',
    'create_sa:vault_component',
    'create_sa:brass_cube',
    'create_sa:flamethrower',

    'minecraft:enchanted_book',
    'minecraft:enchanting_table',
    'create:blaze_burner',
    'create:brass_hand',
    'fluid:fluid_atomizer',
    'fluid:copper_sink',
    'fluid:redstone_valve',
    'fluid:redstone_triple_valve',
    'createaddition:electric_motor',
    'create_connected:cross_connector',
    'create_connected:cross_connector',
    'create_connected:charged_kinetic_battery',

    'createdeco:andesite_sheet',
    'createdeco:netherite_sheet',
    'createdeco:zinc_sheet',
    'vintageimprovements:nickel_sheet',
    'vintageimprovements:lead_sheet',
    'vintageimprovements:cast_iron_sheet',
    'vintageimprovements:zinc_sheet',
    'vintageimprovements:aluminum_sheet',

    'fluid:smoking_fluid_bucket',
    'fluid:haunting_fluid_bucket',
    'fluid:slime_fluid_bucket',
    'createaddition:seed_oil_bucket'
  ]

  itemToHide.forEach(id => event.hide(id))

})

JEIEvents.hideFluids(event => {
 
  const fluidToHide = [
    'fluid:smoking_fluid',
    'fluid:haunting_fluid',
    'fluid:slime_fluid',
    'createaddition:seed_oil'
  ]

  fluidToHide.forEach(id => event.hide(id))

})