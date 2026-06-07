// priority: 2

//foods

StartupEvents.registry('item', event => {

//armors

  event.create('bronze_helmet', 'helmet')
    .texture('kubejs:item/armors/bronze_helmet')
    .tier('bronze')
    .unstackable()

  event.create('bronze_chestplate', 'chestplate')
    .texture('kubejs:item/armors/bronze_chestplate')
    .tier('bronze')
    .unstackable()

  event.create('bronze_leggings', 'leggings')
    .texture('kubejs:item/armors/bronze_leggings')
    .tier('bronze')
    .unstackable()

  event.create('bronze_boots', 'boots')
    .texture('kubejs:item/armors/bronze_boots')
    .tier('bronze')
    .unstackable()

//tools

//bronze

  event.create('bronze_sword', 'sword')
    .texture('kubejs:item/tools/bronze_sword')
    .tier('bronze')
    .attackDamageBaseline(11)
    .unstackable()
    .tag('minecraft:swords')

  event.create('bronze_axe', 'axe')
    .texture('kubejs:item/tools/bronze_axe')
    .tier('bronze')
    .attackDamageBaseline(13)
    .unstackable()
    .tag('minecraft:axes')

  event.create('bronze_pickaxe', 'pickaxe')
    .texture('kubejs:item/tools/bronze_pickaxe')
    .tier('bronze')
    .attackDamageBaseline(8)
    .unstackable()
    .tag('minecraft:pickaxes')

  event.create('bronze_shovel', 'shovel')
    .texture('kubejs:item/tools/bronze_shovel')
    .tier('bronze')
    .attackDamageBaseline(8.5)
    .unstackable()
    .tag('minecraft:shovels')

  event.create('bronze_hoe', 'hoe')
    .texture('kubejs:item/tools/bronze_hoe')
    .tier('bronze')
    .attackDamageBaseline(1)
    .unstackable()
    .tag('minecraft:hoes')

//rusted iron

  event.create('rusted_iron_sword', 'sword')
    .texture('kubejs:item/tools/rusted_iron_sword')
    .tier('rusted_iron')
    .attackDamageBaseline(4)
    .unstackable()
    .tag('minecraft:swords')

  event.create('rusted_iron_axe', 'axe')
    .texture('kubejs:item/tools/rusted_iron_axe')
    .tier('rusted_iron')
    .attackDamageBaseline(8)
    .unstackable()
    .tag('minecraft:axes')

  event.create('rusted_iron_pickaxe', 'pickaxe')
    .texture('kubejs:item/tools/rusted_iron_pickaxe')
    .tier('rusted_iron')
    .attackDamageBaseline(3)
    .unstackable()
    .tag('minecraft:pickaxes')

  event.create('rusted_iron_shovel', 'shovel')
    .texture('kubejs:item/tools/rusted_iron_shovel')
    .tier('rusted_iron')
    .attackDamageBaseline(3)
    .unstackable()
    .tag('minecraft:shovels')

  event.create('rusted_iron_hoe', 'hoe')
    .texture('kubejs:item/tools/rusted_iron_hoe')
    .tier('rusted_iron')
    .attackDamageBaseline(0)
    .unstackable()
    .tag('minecraft:hoes')

})

ItemEvents.toolTierRegistry(event => {
  
  event.add('bronze', tier => {
    tier.uses = 1361
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
    tier.repairIngredient = 'kubejs:bronze_ingot'
    tier.toughness = 1
    tier.knockbackResistance = 0.1
  })

})