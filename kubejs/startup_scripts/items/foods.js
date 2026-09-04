StartupEvents.registry('item', event => {

  event.create('dry_beetroot_seeds')
    .texture('minecraft:item/beetroot_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('dry_melon_seeds')
    .texture('minecraft:item/melon_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('dry_pumpkin_seeds')
    .texture('minecraft:item/pumpkin_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('dry_tomato_seeds')
    .texture('farmersdelight:item/tomato_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('dry_cabbage_seeds')
    .texture('farmersdelight:item/cabbage_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('dry_wheat_seeds')
    .texture('minecraft:item/wheat_seeds')
    .color(0xB8AE93)
    .food(food => {food
      .hunger(1)
      .saturation(0.5)
    })

  event.create('spider_meat')
    .texture('kubejs:item/foods/spider_meat')
    .food(food => {food
      .hunger(3)
      .saturation(1)
    })

  event.create('cooked_spider_meat')
    .texture('kubejs:item/foods/cooked_spider_meat')
    .food(food => {food
      .hunger(6)
      .saturation(1)
    })

  event.create('gold_apple')
    .texture('kubejs:item/foods/gold_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:haste', 100, 2, 1)
      .effect('minecraft:haste', 200, 1, 1)
      .effect('minecraft:haste', 300, 0, 1)
      .effect('minecraft:speed', 100, 2, 1)
      .effect('minecraft:speed', 200, 1, 1)
      .effect('minecraft:speed', 300, 0, 1)
      .effect('minecraft:glowing', 300, 0, 1)
    })

  event.create('brass_apple')
    .texture('kubejs:item/foods/brass_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:regeneration', 600, 0, 1)
      .effect('minecraft:speed', 600, 0, 1)
    })

  event.create('bronze_apple')
    .texture('kubejs:item/foods/bronze_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:regeneration', 800, 0, 1)
      .effect('minecraft:speed', 800, 0, 1)
    })

  event.create('copper_apple')
    .texture('kubejs:item/foods/copper_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:absorption', 600, 1, 1)
      .effect('minecraft:resistance', 120, 0, 1)
      .effect('minecraft:slowness', 120, 0, 1)
    })

  event.create('iron_apple')
    .texture('kubejs:item/foods/iron_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:absorption', 800, 2, 1)
      .effect('minecraft:resistance', 160, 0, 1)
      .effect('minecraft:slowness', 160, 0, 1)
    })

  event.create('andesite_alloy_apple')
    .texture('kubejs:item/foods/andesite_alloy_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:resistance', 80, 1, 1)
      .effect('minecraft:slowness', 80, 1, 1)
    })

  event.create('lithium_apple')
    .texture('kubejs:item/foods/lithium_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('tfmg:hellfire', 400, 1, 1)
    })

  event.create('lead_apple')
    .texture('kubejs:item/foods/lead_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('clanginghowl:neurotoxin', 400, 2, 1)
    })

  event.create('steel_apple')
    .texture('kubejs:item/foods/steel_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:strength', 200, 1, 1)
      .effect('minecraft:resistance', 200, 1, 1)
      .effect('minecraft:fire_resistance', 200, 1, 1)
    })

  event.create('stainless_steel_apple')
    .texture('kubejs:item/foods/stainless_steel_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:strength', 200, 1, 1)
      .effect('minecraft:resistance', 200, 2, 1)
      .effect('minecraft:fire_resistance', 200, 1, 1)
      .effect('minecraft:regeneration', 200, 1, 1)
    })

  event.create('titanium_apple')
    .texture('kubejs:item/foods/titanium_apple')
    .food(food => {food
      .hunger(5)
      .saturation(0.5)
      .alwaysEdible()
      .effect('minecraft:resistance', 40, 4, 1)
    })

})