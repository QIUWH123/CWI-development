// priority: 2

//foods

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
    .texture('kubejs:item/spider_meat')
    .food(food => {food
      .hunger(3)
      .saturation(1)})

  event.create('cooked_spider_meat')
    .texture('kubejs:item/cooked_spider_meat')
    .food(food => {food
      .hunger(6)
      .saturation(1)})


//armors

  event.create('bronze_helmet', 'helmet')
    .texture('kubejs:item/tools/bronze_helmet')
    .tier('bronze')
    .unstackable()

  event.create('bronze_chestplate', 'chestplate')
    .texture('kubejs:item/tools/bronze_chestplate')
    .tier('bronze')
    .unstackable()

  event.create('bronze_leggings', 'leggings')
    .texture('kubejs:item/tools/bronze_leggings')
    .tier('bronze')
    .unstackable()

  event.create('bronze_boots', 'boots')
    .texture('kubejs:item/tools/bronze_boots')
    .tier('bronze')
    .unstackable()

//tools

//bronze

  event.create('bronze_sword', 'sword')
    .texture('kubejs:item/tools/bronze_sword')
    .tier('bronze')
    .attackDamageBaseline(11)
    .unstackable()

  event.create('bronze_axe', 'axe')
    .texture('kubejs:item/tools/bronze_axe')
    .tier('bronze')
    .attackDamageBaseline(13)
    .unstackable()

  event.create('bronze_pickaxe', 'pickaxe')
    .texture('kubejs:item/tools/bronze_pickaxe')
    .tier('bronze')
    .attackDamageBaseline(8)
    .unstackable()

  event.create('bronze_shovel', 'shovel')
    .texture('kubejs:item/tools/bronze_shovel')
    .tier('bronze')
    .attackDamageBaseline(8.5)
    .unstackable()

  event.create('bronze_hoe', 'hoe')
    .texture('kubejs:item/tools/bronze_hoe')
    .tier('bronze')
    .attackDamageBaseline(1)
    .unstackable()

//rusted iron

  event.create('rusted_iron_sword', 'sword')
    .texture('kubejs:item/tools/rusted_iron_sword')
    .tier('rusted_iron')
    .attackDamageBaseline(4)
    .unstackable()

  event.create('rusted_iron_axe', 'axe')
    .texture('kubejs:item/tools/rusted_iron_axe')
    .tier('rusted_iron')
    .attackDamageBaseline(8)
    .unstackable()

  event.create('rusted_iron_pickaxe', 'pickaxe')
    .texture('kubejs:item/tools/rusted_iron_pickaxe')
    .tier('rusted_iron')
    .attackDamageBaseline(3)
    .unstackable()

  event.create('rusted_iron_shovel', 'shovel')
    .texture('kubejs:item/tools/rusted_iron_shovel')
    .tier('rusted_iron')
    .attackDamageBaseline(3)
    .unstackable()

  event.create('rusted_iron_hoe', 'hoe')
    .texture('kubejs:item/tools/rusted_iron_hoe')
    .tier('rusted_iron')
    .attackDamageBaseline(0)
    .unstackable()

})

ItemEvents.toolTierRegistry(event => {
  
  event.add('bronze', tier => {
    tier.uses = 1561
    tier.speed = 8
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 0
    tier.repairIngredient = 'kubejs:bronze_ingot'
  })

  event.add('rusted_iron', tier => {
    tier.uses = 437
    tier.speed = 4
    tier.attackDamageBonus = 0
    tier.level = 2
    tier.enchantmentValue = 0
    tier.repairIngredient = 'kubejs:rusted_iron_ingot'
  })

})

ItemEvents.armorTierRegistry(event => {

  event.add('bronze', tier => {
    tier.durabilityMultiplier = 97
    tier.slotProtections = [3, 8, 6, 3]
    tier.enchantmentValue = 0
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'kubejs:bronze_ingot'
    tier.toughness = 1
    tier.knockbackResistance = 0.1
  })

})