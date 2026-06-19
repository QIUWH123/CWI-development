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

global.blockConversions = {}
global.depotConversions = {}

addBlockConversion('minecraft:smooth_basalt', 'kubejs:cobbled_basalt')
addBlockConversion('minecraft:obsidian', 'minecraft:obsidian')

global.stoneTypes.forEach(function(stone) {
    const types = stone.types
    addBlockConversion(types[0], types[1])
    addBlockConversion(types[1], types[2])
    addBlockConversion(types[2], 'air', 1, [
        { item: types[3], chance: 0.75, count: 4 }
    ])
})

global.oreTypes.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
    const cobbleTarget = isDeepslate ? 'minecraft:cobbled_deepslate' : 'minecraft:cobblestone'
    const mainChance = isDeepslate ? 0.75 : 0.5
    const dropCounts = isMore ? 3 : 2
    const totalEntries = dropCounts + 1
    const totalExpectation = dropCounts * 0.75 + mainChance
    const mergedChance = totalExpectation / totalEntries
    addBlockConversion(oreId, cobbleTarget, 1, [
        { item: dropOreId, chance: mergedChance, count: totalEntries }
    ])
})

addBlockConversion('kubejs:dark_ash_stone', 'air', 1, [
    { item: 'kubejs:dark_ash', chance: 0.75, count: 4 }
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

addBlockConversion('kubejs:scrap_block', 'air', 2, [
    { item: 'tfmg:screw', chance: 0.45, count: 2 },
    { item: 'kubejs:rusted_iron_ingot', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_rod', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_sheet', chance: 0.3, count: 1 },
    { item: 'kubejs:rusted_iron_wire', chance: 0.3, count: 1 },
    { item: 'tfmg:rebar', chance: 0.25, count: 3 },
    { item: 'kubejs:rubber', chance: 0.75, count: 3 },
    { item: 'tfmg:synthetic_string', chance: 0.75, count: 3 },
    { item: 'tfmg:synthetic_leather', chance: 0.45, count: 2 }
])

addDepotConversion('createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_sheet', 3)
addDepotConversion('create:andesite_alloy', 'vintageimprovements:andesite_sheet', 1)
addDepotConversion('kubejs:bronze_ingot', 'kubejs:bronze_sheet', 2)
addDepotConversion('minecraft:iron_ingot', 'create:iron_sheet', 2)
addDepotConversion('tfmg:cast_iron_ingot', 'tfmg:cast_iron_sheet', 2)
addDepotConversion('tfmg:nickel_ingot', 'tfmg:nickel_sheet', 2)
addDepotConversion('minecraft:copper_ingot', 'create:copper_sheet', 2)
addDepotConversion('minecraft:gold_ingot', 'create:golden_sheet', 1)
addDepotConversion('kubejs:silver_ingot', 'kubejs:silver_sheet', 1)
addDepotConversion('tfmg:lead_ingot', 'tfmg:lead_sheet', 1)
addDepotConversion('tfmg:aluminum_ingot', 'tfmg:aluminum_sheet', 1)
addDepotConversion('kubejs:rusted_iron_ingot', 'kubejs:rusted_iron_sheet', 1)

addDepotConversion('minecraft:raw_iron', 'create:crushed_raw_iron', 2)
addDepotConversion('minecraft:raw_gold', 'create:crushed_raw_gold', 3)
addDepotConversion('minecraft:raw_copper', 'create:crushed_raw_copper', 3)
addDepotConversion('create:raw_zinc', 'create:crushed_raw_zinc', 1)
addDepotConversion('kubejs:raw_tin', 'kubejs:crushed_raw_tin', 1)
addDepotConversion('kubejs:raw_silver', 'kubejs:crushed_raw_silver', 1)
addDepotConversion('tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', 1)
addDepotConversion('tfmg:raw_lead', 'create:crushed_raw_lead', 1)
addDepotConversion('tfmg:raw_nickel', 'create:crushed_raw_nickel', 3)