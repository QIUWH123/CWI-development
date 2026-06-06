ServerEvents.recipes(event => {

  event.shapeless(
    Item.of('kubejs:brass_dust', 3),
    [
      '2x kubejs:copper_dust',
      '2x kubejs:zinc_dust'
    ]
  )

  event.shapeless(
    Item.of('kubejs:bronze_dust', 3),
    [
      '3x kubejs:copper_dust',
      'kubejs:tin_dust'
    ]
  )

  event.shapeless(
    Item.of('kubejs:constantan_dust', 3),
    [
      '3x kubejs:copper_dust',
      'kubejs:nickel_dust'
    ]
  )

  event.shapeless(
    Item.of('kubejs:electrum_dust', 3),
    [
      '3x kubejs:gold_dust',
      'kubejs:silver_dust'
    ]
  )

})