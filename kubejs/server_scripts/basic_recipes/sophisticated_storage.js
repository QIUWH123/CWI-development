ServerEvents.recipes(event => {

  event.shaped(
    Item.of('sophisticatedbackpacks:upgrade_base'),
    [
      'ABA',
      'BCB',
      'ABA'
    ],
    {
      A: '#modpack:string',
      B: 'create:andesite_alloy',
      C: '#modpack:leather'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:filter_upgrade',
    [
      'CDC',
      'BAB',
      'CDC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:filter',
      C: 'minecraft:iron_nugget',
      D: 'create:iron_sheet'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_filter_upgrade',
    [
      'CDC',
      'BAB',
      'CDC'
    ],
    {
      A: 'sophisticatedbackpacks:filter_upgrade',
      B: 'create:attribute_filter',
      C: 'create:brass_nugget',
      D: 'create:brass_sheet'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:stack_upgrade_starter_tier',
    [
      'CBC',
      'DAD',
      'CBC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:copper_sheet',
      C: '#modpack:rubber',
      D: 'create:fluid_pipe'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:stack_upgrade_tier_1',
    [
      'CBC',
      'DAD',
      'CBC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'vintageimprovements:andesite_sheet',
      C: 'create:andesite_alloy',
      D: 'kubejs:andesite_machine'
    }
  )

  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:stack_upgrade_tier_2',
    [
      'CBC',
      'DAD',
      'CBC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:brass_sheet',
      C: 'create:electron_tube',
      D: 'kubejs:precise_machine'
    }
  )

  event.recipes.create.mechanical_crafting(
    'sophisticatedbackpacks:stack_upgrade_tier_3',
    [
      'CBC',
      'DAD',
      'CBC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'tfmg:heavy_plate',
      C: 'tfmg:steel_mechanism',
      D: 'kubejs:heavy_machine'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:jukebox_upgrade',
    [
      'CDC',
      'BAB',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'minecraft:iron_ingot',
      C: 'create:iron_sheet',
      D: 'minecraft:jukebox',
      E: 'sophisticatedbackpacks:filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_jukebox_upgrade',
    [
      'CDC',
      'BAB',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:electron_tube',
      C: 'create:brass_sheet',
      D: 'minecraft:jukebox',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:restock_upgrade',
    [
      'CDC',
      'BAB',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'minecraft:iron_ingot',
      C: 'create:iron_sheet',
      D: 'create:chute',
      E: 'sophisticatedbackpacks:filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_restock_upgrade',
    [
      'CDC',
      'BAB',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:electron_tube',
      C: 'create:brass_sheet',
      D: 'create:smart_chute',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:deposit_upgrade',
    [
      'CEC',
      'BAB',
      'CDC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'minecraft:iron_ingot',
      C: 'create:iron_sheet',
      D: 'create:chute',
      E: 'sophisticatedbackpacks:filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_deposit_upgrade',
    [
      'CEC',
      'BAB',
      'CDC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'create:electron_tube',
      C: 'create:brass_sheet',
      D: 'create:smart_chute',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_feeding_upgrade',
    [
      'CBC',
      'DAD',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'kubejs:integrated_electron_tube',
      C: 'create:brass_sheet',
      D: 'create:deployer',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
    [
      'CBC',
      'DAD',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'kubejs:integrated_electron_tube',
      C: 'create:brass_sheet',
      D: 'create:mechanical_arm',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

  event.shaped(
    'sophisticatedbackpacks:advanced_alchemy_upgrade',
    [
      'CBC',
      'DAD',
      'CEC'
    ],
    {
      A: 'sophisticatedbackpacks:upgrade_base',
      B: 'kubejs:integrated_electron_tube',
      C: 'create:brass_sheet',
      D: 'fluid:pipette',
      E: 'sophisticatedbackpacks:advanced_filter_upgrade'
    }
  )

})