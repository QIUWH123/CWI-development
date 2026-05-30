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

  const nonFuelItems = [
    'minecraft:dried_kelp_block',
    'minecraft:smithing_table',
    'minecraft:jukebox',
    'minecraft:note_box',
    'minecraft:chest',
    'minecraft:crafting_table',
    'minecraft:trapped_chest',
    'minecraft:daylight_detector',
    'minecraft:barrel',
    'minecraft:blaze_rod',
    'minecraft:lava',
    'darkerdepths:stripped_petrified_log',
    'darkerdepths:petrified_planks',
    'darkerdepths:petrified_wood',
    'darkerdepths:petrified_log',
    'darkerdepths:stripped_petrified_wood',
    'clanginghowl:blaze_fuel',
    'create:blaze_cake',
    'create:creative_blaze_cake',
    'createmetallurgy:coke',
    'ratatouille:bio_gas_bucket'
  ]

  nonFuelItems.forEach(id => {
    event.modify(id, item => {
      item.burnTime = 0
    })
  })

  const space_suits = [
      'ad_astra:space_helmet', 
      'ad_astra:space_suit',
      'ad_astra:space_pants', 
      'ad_astra:space_boots',
      'ad_astra:netherite_space_helmet', 
      'ad_astra:netherite_space_suit',
      'ad_astra:netherite_space_pants', 
      'ad_astra:netherite_space_boots'
  ]
  
  space_suits.forEach(id => {
      event.modify(id, item => {
          item.maxDamage = item.maxDamage * 4
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

  event.modify('ratatouille:compost_residue', item => {item.burnTime = 100})

  event.modify('kubejs:peat', item => {item.burnTime = 200})
  event.modify('kubejs:lignite', item => {item.burnTime = 400})
  event.modify('kubejs:bituminous_coal', item => {item.burnTime = 800})

  event.modify('kubejs:coal_dust', item => {item.burnTime = 1600})
  event.modify('kubejs:charcoal_dust', item => {item.burnTime = 1600})
  event.modify('kubejs:charcoal_block', item => {item.burnTime = 16000})

  event.modify('minecraft:iron_sword', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_axe', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_pickaxe', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_shovel', item => { item.maxDamage = 983 })
  event.modify('minecraft:iron_hoe', item => { item.maxDamage = 983 })

})