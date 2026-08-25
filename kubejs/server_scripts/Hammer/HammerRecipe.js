// Block Conversion Helpers

function addBlockConversion(input, target, stage, drops) {
    global.blockConversions[input] = {
        target: target,
        requireStage: stage || 1,
        drops: drops || []
    }
}

function addDepotConversion(input, target, stage) {
    global.depotConversions[input] = {
        target: target,
        requireStage: stage || 1
    }
}

// Initialize Conversion Maps

global.blockConversions = {}
global.depotConversions = {}

// Basic Block Conversions

addBlockConversion('minecraft:smooth_basalt', 'kubejs:cobbled_basalt')
addBlockConversion('minecraft:obsidian', 'minecraft:obsidian')

// Stone Type Conversions

global.stoneTypes.forEach(function(stone) {
    const types = stone.types
    addBlockConversion(types[0], types[1])
    addBlockConversion(types[1], types[2])
    addBlockConversion(types[2], 'air', 1, [
        { item: types[3], chance: 0.75, count: 4 }
    ])
})

// Ore Type Conversions

global.oreTypes.forEach(([oreVariants, dropOreId, crushedOreId, isMore]) => {
    const dropCounts = isMore ? 3 : 2

    if (oreVariants.normal) {
        const settings = global.variantSettings.normal
        addBlockConversion(oreVariants.normal, settings.cobble, 1, [
            { item: dropOreId, chance: 1, count: dropCounts },
            { item: dropOreId, chance: settings.dropChance, count: 1 }
        ])
    }

    if (oreVariants.deepslate) {
        const settings = global.variantSettings.deepslate
        addBlockConversion(oreVariants.deepslate, settings.cobble, 1, [
            { item: dropOreId, chance: 1, count: dropCounts },
            { item: dropOreId, chance: settings.dropChance, count: 1 }
        ])
    }
})

// Special Block Conversions

addBlockConversion('kubejs:dark_ash_stone', 'air', 1, [
    { item: 'kubejs:dark_ash', chance: 0.75, count: 4 }
])

addBlockConversion('kubejs:ash_stone', 'air', 1, [
    { item: 'kubejs:ash', chance: 0.75, count: 4 }
])

addBlockConversion('kubejs:dark_ash_stone_quartz', 'air', 1, [
    { item: 'kubejs:dark_ash', chance: 0.75, count: 3 },
    { item: 'minecraft:quartz', chance: 0.65, count: 2 },
    { item: 'kubejs:quartz_powder', chance: 0.35, count: 2 }
])

addBlockConversion('kubejs:dark_ash_stone_coal', 'air', 1, [
    { item: 'kubejs:dark_ash', chance: 0.75, count: 3 },
    { item: 'minecraft:coal', chance: 0.65, count: 2 },
    { item: 'kubejs:coal_powder', chance: 0.35, count: 2 }
])

addBlockConversion('kubejs:scrap_block', 'kubejs:small_scrap_block', 1, [
    { item: 'tfmg:screw', chance: 0.45, count: 2 },
    { item: 'kubejs:ash', chance: 0.5, count: 3 },
    { item: 'kubejs:rubber', chance: 0.75, count: 3 },
    { item: 'tfmg:synthetic_string', chance: 0.75, count: 3 },
    { item: 'tfmg:synthetic_leather', chance: 0.45, count: 2 }
])

addBlockConversion('kubejs:small_scrap_block', 'air', 1, [
    { item: 'kubejs:rusted_iron_rod', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_wire', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_ingot', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_sheet', chance: 0.3, count: 1 },
    { item: 'tfmg:rebar', chance: 0.25, count: 3 },
    { item: 'kubejs:ash', chance: 0.5, count: 2 }
])

// Depot Conversions

addDepotConversion('minecraft:raw_iron', 'create:crushed_raw_iron', 3)
addDepotConversion('minecraft:raw_gold', 'create:crushed_raw_gold', 3)
addDepotConversion('tfmg:raw_nickel', 'create:crushed_raw_nickel', 3)
addDepotConversion('minecraft:raw_copper', 'create:crushed_raw_copper', 2)
addDepotConversion('kubejs:raw_silver', 'kubejs:crushed_raw_silver', 2)
addDepotConversion('tfmg:raw_lead', 'create:crushed_raw_lead', 2)
addDepotConversion('tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', 1)
addDepotConversion('create:raw_zinc', 'create:crushed_raw_zinc', 1)
addDepotConversion('kubejs:raw_tin', 'kubejs:crushed_raw_tin', 1)