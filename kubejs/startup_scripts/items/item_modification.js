// priority: -10

ItemEvents.modification(event => {

  event.modify('minecraft:wheat_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('minecraft:melon_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(1)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('minecraft:pumpkin_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(3)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('minecraft:beetroot_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(3)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('farmersdelight:cabbage_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('farmersdelight:tomato_seeds', item => {
    item.setFoodProperties(food => {
        food.hunger(2)
        food.saturation(0.5)
        food.fastToEat()
    })
  })

  event.modify('ratatouille:compost_mass', item => {
    item.setFoodProperties(food => {
        food.hunger(4)
        food.saturation(0.5)
        food.effect('minecraft:nausea', 100, 1, 0.3)
    })
  })

  event.modify('minecraft:sugar_cane', item => {
    item.setFoodProperties(food => {
        food.hunger(4)
        food.saturation(0.3)
    })
  })

  event.modify('minecraft:bamboo', item => {
    item.setFoodProperties(food => {
        food.hunger(2)
        food.saturation(0.3)
    })
  })

  event.modify('ratatouille:compost_residue', item => {
    item.setFoodProperties(food => {
        food.hunger(6)
        food.saturation(0.5)
        food.effect('minecraft:nausea', 100, 1, 0.8)
        food.effect('minecraft:hunger', 100, 1, 0.3)
    })
  })



  event.modify('kubejs:ash_log', item => {item.burnTime = 200})
  event.modify('kubejs:broken_ash_log', item => {item.burnTime = 100})
  event.modify('kubejs:stripped_ash_log', item => {item.burnTime = 200})
  event.modify('kubejs:stripped_broken_ash_log', item => {item.burnTime = 100})

  event.modify('kubejs:burnt_log', item => {item.burnTime = 100})
  event.modify('kubejs:broken_burnt_log', item => {item.burnTime = 50})
  event.modify('kubejs:stripped_burnt_log', item => {item.burnTime = 100})
  event.modify('kubejs:stripped_broken_burnt_log', item => {item.burnTime = 50})

  event.modify('kubejs:coal_dust', item => {item.burnTime = 1600})
  event.modify('kubejs:charcoal_dust', item => {item.burnTime = 1600})
  event.modify('kubejs:charcoal_block', item => {item.burnTime = 16000})



  event.modify('material_note', item => {item.craftingRemainder = Item.of('material_note').item})
  event.modify('geological_note', item => {item.craftingRemainder = Item.of('geological_note').item})
  event.modify('environmental_note', item => {item.craftingRemainder = Item.of('environmental_note').item})
  event.modify('chemical_note', item => {item.craftingRemainder = Item.of('chemical_note').item})
  event.modify('mechanic_manual', item => {item.craftingRemainder = Item.of('mechanic_manual').item})
  event.modify('fluid_manual', item => {item.craftingRemainder = Item.of('fluid_manual').item})
  event.modify('precision_manual', item => {item.craftingRemainder = Item.of('precision_manual').item})
  event.modify('industrial_manual', item => {item.craftingRemainder = Item.of('industrial_manual').item})
  event.modify('galvanic_manual', item => {item.craftingRemainder = Item.of('galvanic_manual').item})
  event.modify('petroleum_manual', item => {item.craftingRemainder = Item.of('petroleum_manual').item})
  event.modify('bioengineering_manual', item => {item.craftingRemainder = Item.of('bioengineering_manual').item})



  event.modify('minecraft:iron_sword', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_axe', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_pickaxe', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_shovel', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_hoe', item => { item.maxDamage = 983 })



  event.modify('minecraft:dried_kelp', item => {item.burnTime = 0})
  event.modify('minecraft:smithing_table', item => {item.burnTime = 0})
  event.modify('minecraft:jukebox', item => {item.burnTime = 0})
  event.modify('minecraft:note_box', item => {item.burnTime = 0})
  event.modify('minecraft:chest', item => {item.burnTime = 0})
  event.modify('minecraft:crafting_table', item => {item.burnTime = 0})
  event.modify('minecraft:trapped_chest', item => {item.burnTime = 0})
  event.modify('minecraft:daylight_detector', item => {item.burnTime = 0})
  event.modify('minecraft:barrel', item => {item.burnTime = 0})
  event.modify('minecraft:blaze_rod', item => {item.burnTime = 0})
  event.modify('minecraft:lava', item => {item.burnTime = 0})
  event.modify('darkerdepths:stripped_petrified_log', item => {item.burnTime = 0})
  event.modify('darkerdepths:petrified_planks', item => {item.burnTime = 0})
  event.modify('darkerdepths:petrified_wood', item => {item.burnTime = 0})
  event.modify('darkerdepths:petrified_log', item => {item.burnTime = 0})
  event.modify('darkerdepths:stripped_petrified_wood', item => {item.burnTime = 0})
  event.modify('clanginghowl:blaze_fuel', item => {item.burnTime = 0})
  event.modify('create:blaze_cake', item => {item.burnTime = 0})
  event.modify('create:creative_blaze_cake', item => {item.burnTime = 0})
  event.modify('createmetallurgy:coke', item => {item.burnTime = 0})
  event.modify('ratatouille:bio_gas_bucket', item => {item.burnTime = 0})

})