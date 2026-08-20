// Priority: -10

ItemEvents.modification(event => {

// Fire Resistance

    let fire_resistance = function (id) {
        event.modify(id, item => {
            item.fireResistant = true
        })
    }

// Food Properties Helper

    let food_fastToEat = function (food) {
        event.modify(food, item => {
            item.setFoodProperties(food => {
                food.fastToEat()
            })
        })
    }

    let food_hungers = function (food, hunger, saturation) {
        hunger = hunger || 3
        saturation = saturation || 0.5
        event.modify(food, item => {
            item.setFoodProperties(food => {
                food.hunger(hunger)
                food.saturation(saturation / hunger)
            })
        })
    }

    let food_effects = function (food, effect, duration, strength, probability) {
        duration = duration || 10
        strength = strength || 0
        probability = probability || 1
        event.modify(food, item => {
            item.setFoodProperties(food => {
                food.effect(effect, 20 * duration, strength, probability)
            })
        })
    }

    let remove_effects = function (food, effect) {
        event.modify(food, item => {
            item.setFoodProperties(food => {
                food.removeEffect(effect)
            })
        })
    }

// Item Property Changes

    let burnTime_change = (item, burnTime) => {
        event.modify(item, item => {
            item.burnTime = burnTime
        })
    }

    let maxStackSize_change = function (item, maxStackSize) {
        event.modify(item, item => {
            item.maxStackSize = maxStackSize
        })
    }

    let maxDamage_change = function (item, maxDamage) {
        event.modify(item, item => {
            item.maxDamage = maxDamage
        })
    }

    let maxDamage_multiply = (item, factor) => {
        event.modify(item, item => {
            item.maxDamage = item.maxDamage * factor
        })
    }

    let attackSpeed_change = (item, attackSpeed) => {
        event.modify(item, item => {
            item.attackSpeed = attackSpeed - 4
        })
    }

// Food Values

    food_hungers('minecraft:wheat_seeds', 2, 1.0)
    food_fastToEat('minecraft:wheat_seeds')

    food_hungers('minecraft:melon_seeds', 1, 0.5)
    food_fastToEat('minecraft:melon_seeds')

    food_hungers('minecraft:pumpkin_seeds', 3, 1.5)
    food_fastToEat('minecraft:pumpkin_seeds')

    food_hungers('minecraft:beetroot_seeds', 3, 1.5)
    food_fastToEat('minecraft:beetroot_seeds')

    food_hungers('farmersdelight:cabbage_seeds', 2, 1.0)
    food_fastToEat('farmersdelight:cabbage_seeds')

    food_hungers('farmersdelight:tomato_seeds', 2, 1.0)
    food_fastToEat('farmersdelight:tomato_seeds')

    food_hungers('vital_herbs:lichen_mite_carcass', 1, 1)
    food_fastToEat('vital_herbs:lichen_mite_carcass')

    food_hungers('ratatouille:compost_mass', 4, 2.0)
    food_effects('ratatouille:compost_mass', 'minecraft:nausea', 5, 1, 0.3)

    food_hungers('minecraft:sugar_cane', 4, 1.2)
    food_hungers('minecraft:bamboo', 2, 0.6)

    food_hungers('ratatouille:compost_residue', 6, 3.0)
    food_effects('ratatouille:compost_residue', 'minecraft:nausea', 5, 1, 0.8)
    food_effects('ratatouille:compost_residue', 'minecraft:hunger', 5, 1, 0.3)

// Non Fuel Items

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

// Space Suits

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

// Zero Burn Time For Non Fuel Items

    nonFuelItems.forEach(id => burnTime_change(id, 0))

// Multiply Space Suit Durability

    space_suits.forEach(id => maxDamage_multiply(id, 4))

// Potion Stack Size

    maxStackSize_change('minecraft:potion', 16)

// Burn Time Values

    burnTime_change('kubejs:ash_log', 200)
    burnTime_change('kubejs:broken_ash_log', 100)
    burnTime_change('kubejs:stripped_ash_log', 200)
    burnTime_change('kubejs:stripped_broken_ash_log', 100)

    burnTime_change('kubejs:burnt_log', 100)
    burnTime_change('kubejs:broken_burnt_log', 50)
    burnTime_change('kubejs:stripped_burnt_log', 100)
    burnTime_change('kubejs:stripped_broken_burnt_log', 50)

    burnTime_change('ratatouille:compost_residue', 100)

    burnTime_change('kubejs:peat', 200)
    burnTime_change('kubejs:lignite_item', 400)
    burnTime_change('kubejs:bituminous_coal', 800)

    burnTime_change('kubejs:coal_powder', 1600)
    burnTime_change('kubejs:charcoal_powder', 1600)
    burnTime_change('kubejs:charcoal_block', 16000)

// Max Damage Changes

    maxDamage_change('minecraft:iron_sword', 683)
    maxDamage_change('minecraft:iron_axe', 683)
    maxDamage_change('minecraft:iron_pickaxe', 683)
    maxDamage_change('minecraft:iron_shovel', 683)
    maxDamage_change('minecraft:iron_hoe', 683)
    maxDamage_change('minecraft:iron_hammer', 683)
    maxDamage_change('farmersdelight:iron_knife', 687)

    maxDamage_change('minecraft:golden_sword', 173)
    maxDamage_change('minecraft:golden_axe', 173)
    maxDamage_change('minecraft:golden_pickaxe', 173)
    maxDamage_change('minecraft:golden_shovel', 173)
    maxDamage_change('minecraft:golden_hoe', 173)
    maxDamage_change('minecraft:golden_hammer', 173)
    maxDamage_change('farmersdelight:goldeb_knife', 173)

    maxDamage_change('minecraft:netherite_sword', 3627)
    maxDamage_change('minecraft:netherite_axe', 3627)
    maxDamage_change('minecraft:netherite_pickaxe', 3627)
    maxDamage_change('minecraft:netherite_shovel', 3627)
    maxDamage_change('minecraft:netherite_hoe', 3627)
    maxDamage_change('minecraft:netherite_hammer', 3627)
    maxDamage_change('farmersdelight:netherite_knife', 3627)

    maxDamage_change('create:sand_paper', 24)
    maxDamage_change('create:red_sand_paper', 24)

    maxDamage_multiply('minecraft:leather_helmet', 2)
    maxDamage_multiply('minecraft:leather_chestplate', 2)
    maxDamage_multiply('minecraft:leather_leggings', 2)
    maxDamage_multiply('minecraft:leather_boots', 2)

    maxDamage_multiply('minecraft:chainmail_helmet', 1.5)
    maxDamage_multiply('minecraft:chainmail_chestplate', 1.5)
    maxDamage_multiply('minecraft:chainmail_leggings', 1.5)
    maxDamage_multiply('minecraft:chainmail_boots', 1.5)

    maxDamage_multiply('minecraft:golden_helmet', 1.5)
    maxDamage_multiply('minecraft:golden_chestplate', 1.5)
    maxDamage_multiply('minecraft:golden_leggings', 1.5)
    maxDamage_multiply('minecraft:golden_boots', 1.5)

    maxDamage_multiply('minecraft:iron_helmet', 2.4)
    maxDamage_multiply('minecraft:iron_chestplate', 2.4)
    maxDamage_multiply('minecraft:iron_leggings', 2.4)
    maxDamage_multiply('minecraft:iron_boots', 2.4)

    maxDamage_multiply('minecraft:netherite_helmet', 5)
    maxDamage_multiply('minecraft:netherite_chestplate', 5)
    maxDamage_multiply('minecraft:netherite_leggings', 5)
    maxDamage_multiply('minecraft:netherite_boots', 5)

// Attack Speed Changes

    global.hammers.forEach(([name]) => {
        attackSpeed_change(`minecraft:${name}`, 1)
    })  

    attackSpeed_change('kubejs:lead_sword', 0.8)
    attackSpeed_change('kubejs:lead_axe', 0.45)
    attackSpeed_change('kubejs:lead_pickaxe', 0.6)
    attackSpeed_change('kubejs:lead_shovel', 0.5)
    attackSpeed_change('kubejs:lead_hoe', 1.5)
    attackSpeed_change('minecraft:lead_hammer', 0.3)

})