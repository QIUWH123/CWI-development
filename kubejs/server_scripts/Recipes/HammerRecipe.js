function addConversion(input, target, stage, drops) {
    global.conversionMap[input] = {
        target: target,
        requireStage: stage || 1,
        drops: drops || []
    }
}

function addStoneChain(stoneId, cobbleId, gravelId, dustId) {
    addConversion(stoneId, cobbleId)
    addConversion(cobbleId, gravelId)
    addConversion(gravelId, 'air', 1, [
        { item: dustId, chance: 0.75 },
        { item: dustId, chance: 0.75 },
        { item: dustId, chance: 0.75 },
        { item: dustId, chance: 0.75 }
    ])
}

global.conversionMap = {}

addConversion('minecraft:smooth_basalt', 'kubejs:cobbled_basalt')

addStoneChain('minecraft:stone', 'minecraft:cobblestone', 'minecraft:gravel', 'kubejs:stone_dust')
addStoneChain('minecraft:deepslate', 'minecraft:cobbled_deepslate', 'kubejs:deepslate_gravel', 'kubejs:deepslate_dust')
addStoneChain('minecraft:granite', 'kubejs:cobbled_granite', 'kubejs:granite_gravel', 'kubejs:granite_dust')
addStoneChain('minecraft:diorite', 'kubejs:cobbled_diorite', 'kubejs:diorite_gravel', 'kubejs:diorite_dust')
addStoneChain('minecraft:andesite', 'kubejs:cobbled_andesite', 'kubejs:andesite_gravel', 'kubejs:andesite_dust')
addStoneChain('minecraft:basalt', 'kubejs:cobbled_basalt', 'kubejs:basalt_gravel', 'kubejs:basalt_dust')
addStoneChain('kubejs:claystone', 'kubejs:cobbled_claystone', 'kubejs:claystone_gravel', 'kubejs:claystone_dust')
addStoneChain('kubejs:schist', 'kubejs:cobbled_schist', 'kubejs:schist_gravel', 'kubejs:schist_dust')
addStoneChain('kubejs:gneiss', 'kubejs:cobbled_gneiss', 'kubejs:gneiss_gravel', 'kubejs:gneiss_dust')
addStoneChain('kubejs:rhyolite', 'kubejs:cobbled_rhyolite', 'kubejs:rhyolite_gravel', 'kubejs:rhyolite_dust')
addStoneChain('kubejs:shale', 'kubejs:cobbled_shale', 'kubejs:shale_gravel', 'kubejs:shale_dust')
addStoneChain('darkerdepths:duskrock', 'kubejs:cobbled_conglomerate', 'kubejs:conglomerate_gravel', 'kubejs:conglomerate_dust')
addStoneChain('darkerdepths:grimestone', 'kubejs:cobbled_phyllite', 'kubejs:phyllite_gravel', 'kubejs:phyllite_dust')
addStoneChain('darkerdepths:aridrock', 'kubejs:cobbled_quartzite', 'kubejs:quartzite_gravel', 'kubejs:quartzite_dust')
addStoneChain('darkerdepths:darkslate', 'kubejs:cobbled_darkslate', 'kubejs:darkslate_gravel', 'kubejs:darkslate_dust')

global.ores.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
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
    addConversion(oreId, cobbleTarget, 1, drops)
})

addConversion('kubejs:scrap_block', 'air', 2, [
    { item: 'tfmg:screw', chance: 0.6 },
    { item: 'tfmg:screw', chance: 0.18 },
    { item: 'kubejs:rusted_iron', chance: 0.6 },
    { item: 'kubejs:rusted_iron', chance: 0.18 },
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