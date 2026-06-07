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
        { item: types[3], chance: 0.75 },
        { item: types[3], chance: 0.75 },
        { item: types[3], chance: 0.75 },
        { item: types[3], chance: 0.75 }
    ])
})

global.oreTypes.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
    const cobbleTarget = isDeepslate ? 'minecraft:cobbled_deepslate' : 'minecraft:cobblestone'
    const mainChance = isDeepslate ? 0.75 : 0.5
    const drops = []
    const dropCounts = isMore ? 3 : 2
    for (let i = 0; i < dropCounts; i++) {
        if (crushedOreId === '') {
            drops.push({ item: dropOreId, chance: 0.75 })
        } else {
            drops.push({ item: crushedOreId, chance: 1 })
        }
    }
    drops.push({ item: dropOreId, chance: mainChance })
    addBlockConversion(oreId, cobbleTarget, 1, drops)
})

addBlockConversion('kubejs:scrap_block', 'air', 2, [
    { item: 'tfmg:screw', chance: 0.6 },
    { item: 'tfmg:screw', chance: 0.18 },
    { item: 'kubejs:rusted_iron_ingot', chance: 0.3 },
    { item: 'kubejs:rusted_iron_rod', chance: 0.09 },
    { item: 'kubejs:rusted_iron_sheet', chance: 0.3 },
    { item: 'kubejs:rusted_iron_wire', chance: 0.09 },
    { item: 'tfmg:rebar', chance: 0.3 },
    { item: 'tfmg:rebar', chance: 0.09 },
    { item: 'tfmg:rebar', chance: 0.018 },
    { item: 'kubejs:dark_ash_dust', chance: 0.7 },
    { item: 'kubejs:dark_ash_dust', chance: 0.35 },
    { item: 'kubejs:dark_ash_dust', chance: 0.11 },
    { item: 'kubejs:ash_dust', chance: 0.7 },
    { item: 'kubejs:ash_dust', chance: 0.35 },
    { item: 'kubejs:ash_dust', chance: 0.11 },
    { item: 'kubejs:rubber', chance: 0.8 },
    { item: 'kubejs:rubber', chance: 0.56 },
    { item: 'kubejs:rubber', chance: 0.28 },
    { item: 'minecraft:gray_wool', chance: 0.6 },
    { item: 'minecraft:gray_wool', chance: 0.42 },
    { item: 'minecraft:black_wool', chance: 0.21 },
    { item: 'tfmg:synthetic_string', chance: 0.8 },
    { item: 'tfmg:synthetic_string', chance: 0.56 },
    { item: 'tfmg:synthetic_string', chance: 0.28 },
    { item: 'tfmg:synthetic_leather', chance: 0.6 },
    { item: 'tfmg:synthetic_leather', chance: 0.18 }
])

addDepotConversion('createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_sheet', 3)
addDepotConversion('create:andesite_alloy', 'vintageimprovements:andesite_sheet', 1)
addDepotConversion('kubejs:bronze_ingot', 'kubejs:bronze_sheet', 2)
addDepotConversion('minecraft:iron_ingot', 'create:iron_sheet', 2)
addDepotConversion('tfmg:nickel_ingot', 'tfmg:nickel_sheet', 2)
addDepotConversion('minecraft:copper_ingot', 'create:copper_sheet', 2)
addDepotConversion('minecraft:gold_ingot', 'create:golden_sheet', 1)
addDepotConversion('kubejs:silver_ingot', 'kubejs:silver_sheet', 1)
addDepotConversion('tfmg:lead_ingot', 'tfmg:lead_sheet', 1)
addDepotConversion('tfmg:aluminum_ingot', 'tfmg:aluminum_sheet', 1)
addDepotConversion('kubejs:rusted_iron_ingot', 'kubejs:rusted_iron_sheet', 1)