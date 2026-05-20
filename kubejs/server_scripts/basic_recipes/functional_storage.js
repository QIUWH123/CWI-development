ServerEvents.recipes(event => {
  
  event.shaped(
    Item.of('functionalstorage:fluid_4'),
    [
      'ABA',
      'BBB',
      'ABA'
    ],
    {
      A: 'create:fluid_tank',
      B: 'createdeco:industrial_iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:fluid_2'),
    [
      'BAB',
      'BBB',
      'BAB'
    ],
    {
      A: 'create:fluid_tank',
      B: 'createdeco:industrial_iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:fluid_1'),
    [
      'BBB',
      'BAB',
      'BBB'
    ],
    {
      A: 'create:fluid_tank',
      B: 'createdeco:industrial_iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:oak_4'),
    [
      'ABA',
      'BBB',
      'ABA'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'createdieselgenerators:chip_wood_block'
    }
  )

  event.shaped(
    Item.of('functionalstorage:oak_2'),
    [
      'BAB',
      'BBB',
      'BAB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'createdieselgenerators:chip_wood_block'
    }
  )

  event.shaped(
    Item.of('functionalstorage:oak_1'),
    [
      'BBB',
      'BAB',
      'BBB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'createdieselgenerators:chip_wood_block'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('functionalstorage:storage_controller'),
    [
      'BCB',
      'DAD',
      'BEB'
    ],
    {
      A: 'kubejs:precise_machine',
      B: 'create:brass_sheet',
      C: 'create_connected:control_chip',
      D: 'create_connected:inventory_access_port',
      E: 'create:brass_casing'
    }
  )

  event.recipes.create.mechanical_crafting(
    Item.of('3x functionalstorage:controller_extension'),
    [
      'BCB',
      'DAD',
      'BEB'
    ],
    {
      A: 'create:brass_casing',
      B: 'create:brass_sheet',
      C: 'create_connected:control_chip',
      D: 'create_connected:inventory_access_port',
      E: 'create:brass_ingot'
    }
  )

})