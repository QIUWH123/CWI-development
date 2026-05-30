ServerEvents.recipes(event => {

  event.shaped(
    Item.of('create_new_age:electrical_connector'),
    [
      ' A ',
      'DBD',
      'CEC'
    ],
    {
      A: 'vintageimprovements:constantan_sheet',
      B: 'create_new_age:overcharged_diamond_wire',
      C: 'tfmg:heavy_plate',
      D: 'vintageimprovements:constantan_rod',
      E: 'kubejs:steel_ring'
    }
  )

})