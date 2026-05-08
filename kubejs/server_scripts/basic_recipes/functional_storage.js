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

  event.shaped(
    Item.of('functionalstorage:compacting_drawer'),
    [
      'BCB',
      'DAD',
      'BCB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'minecraft:stone',
      C: 'minecraft:iron_ingot',
      D: 'create:mechanical_press'
    }
  )

  event.shaped(
    Item.of('functionalstorage:compacting_framed_drawer'),
    [
      'BCB',
      'DAD',
      'BCB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'minecraft:iron_nugget',
      C: 'minecraft:iron_ingot',
      D: 'create:mechanical_press'
    }
  )

  event.shaped(
    Item.of('functionalstorage:storage_controller'),
    [
      'BCB',
      'DAD',
      'BDB'
    ],
    {
      A: 'kubejs:precise_machine',
      B: 'minecraft:stone',
      C: 'create_connected:control_chip',
      D: 'minecraft:iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:framed_storage_controller'),
    [
      'BCB',
      'DAD',
      'BDB'
    ],
    {
      A: 'kubejs:precise_machine',
      B: 'minecraft:iron_nugget',
      C: 'create_connected:control_chip',
      D: 'minecraft:iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:controller_extension'),
    [
      'BDB',
      'DAD',
      'BDB'
    ],
    {
      A: 'create:chute',
      B: 'minecraft:stone',
      D: 'minecraft:iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:framed_controller_extension'),
    [
      'BDB',
      'DAD',
      'BDB'
    ],
    {
      A: 'create:chute',
      B: 'minecraft:iron_nugget',
      D: 'minecraft:iron_ingot'
    }
  )

  event.shaped(
    Item.of('functionalstorage:simple_compacting_drawer'),
    [
      'BCB',
      'CAD',
      'BCB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'minecraft:stone',
      C: 'minecraft:iron_ingot',
      D: 'create:mechanical_press'
    }
  )

  event.shaped(
    Item.of('functionalstorage:framed_simple_compacting_drawer'),
    [
      'BCB',
      'CAD',
      'BCB'
    ],
    {
      A: '#forge:chests/wooden',
      B: 'minecraft:iron_nugget',
      C: 'minecraft:iron_ingot',
      D: 'create:mechanical_press'
    }
  )

})
