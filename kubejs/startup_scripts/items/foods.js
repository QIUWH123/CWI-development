StartupEvents.registry('item', event => {

  event.create('dry_beetroot_seeds')
    .texture('minecraft:item/beetroot_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_melon_seeds')
    .texture('minecraft:item/melon_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_pumpkin_seeds')
    .texture('minecraft:item/pumpkin_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_tomato_seeds')
    .texture('farmersdelight:item/tomato_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_cabbage_seeds')
    .texture('farmersdelight:item/cabbage_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)})

  event.create('dry_wheat_seeds')
    .texture('minecraft:item/wheat_seeds')
    .color(0xB8AE93)
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