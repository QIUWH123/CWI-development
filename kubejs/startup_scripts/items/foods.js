StartupEvents.registry('item', event => {

  event.create('dry_beetroot_seeds')
    .texture('kubejs:item/plants/dry_beetroot_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_melon_seeds')
    .texture('kubejs:item/plants/dry_melon_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_pumpkin_seeds')
    .texture('kubejs:item/plants/dry_pumpkin_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_tomato_seeds')
    .texture('kubejs:item/plants/dry_tomato_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_cabbage_seeds')
    .texture('kubejs:item/plants/dry_cabbage_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_wheat_seeds')
    .texture('kubejs:item/plants/dry_wheat_seeds')
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('spider_meat')
    .texture('kubejs:item/foods/spider_meat')
    .food(food => {food
      .hunger(3)
      .saturation(1)})

  event.create('cooked_spider_meat')
    .texture('kubejs:item/foods/cooked_spider_meat')
    .food(food => {food
      .hunger(6)
      .saturation(1)})

})