// Priority: 5

// AddItem Helper
function AddItem(input, chance) {
    if (typeof input === 'string') {
        var parts = input.trim().split(/\s+/)
        var count = 1
        var id
        if (parts.length === 1) {
            id = parts[0]
        } else if (parts.length === 2) {
            var num = parseInt(parts[0], 10)
            if (!isNaN(num)) {
                count = num
                id = parts[1]
            } else {
                id = input
            }
        } else {
            id = input
        }

        var obj
        if (id.startsWith('#')) {
            obj = { tag: id.substring(1) }
        } else {
            obj = { item: id }
        }

        if (count > 1) obj.count = count
        if (chance !== undefined) obj.chance = chance
        return obj
    }
    return input
}

// AddFluid Helper
function AddFluid(input, chance) {
    if (typeof input === 'string') {
        var parts = input.trim().split(/\s+/)
        var amount = undefined
        var id
        if (parts.length === 1) {
            id = parts[0]
        } else if (parts.length === 2) {
            var num = parseInt(parts[0], 10)
            if (!isNaN(num)) {
                amount = num
                id = parts[1]
            } else {
                id = input
            }
        } else {
            id = input
        }

        var obj;
        if (id.startsWith('#')) {
            obj = { fluidTag: id.substring(1) }
        } else if (id.startsWith('fluidTag:')) {
            obj = { fluidTag: id.substring(9) }
        } else if (id.startsWith('fluid:')) {
            obj = { fluid: id.substring(6) }
        } else {
            obj = { fluid: id }
        }

        if (amount !== undefined) obj.amount = amount
        if (chance !== undefined) obj.chance = chance
        return obj
    }
    return input
}

// Custom Recipe Functions

function chiseling(event, ingredients, results) {
    return event.custom({
        "type": "createdieselgenerators:hammering",
        "ingredients": [ingredients],
        "results": [results]
    })
}

function cutting(event, ingredients, results) {
    return event.custom({
        "type": "createdieselgenerators:wire_cutting",
        "ingredients": [ingredients],
        "results": [results]
    })
}

function rolling(event, ingredients, results) {
    return event.custom({
        "type": "createaddition:rolling",
        "input": ingredients,
        "result": results
    })
}

function centrifuging(event, ingredients, results, processingTime) {
    return event.custom({
        "type": "vintageimprovements:centrifugation",
        "ingredients": ingredients,
        "results": results,
        "processingTime": processingTime
    })
}

function polishing(event, speedLimits, ingredients, results, processingTime) {
    return event.custom({
        "type": "vintageimprovements:polishing",
        "speedLimits": speedLimits,
        "ingredients": [ ingredients ],
        "results": results,
        "processingTime": processingTime
    })
}

function hammering(event, hammerBlows, ingredients, results) {
    return event.custom({ 
        "type": "vintageimprovements:hammering", 
        "hammerBlows": hammerBlows, 
        "ingredients": ingredients, 
        "results": results 
    })
}

function liquidBurning(event, ingredients, processingTime, superheated) {
    return event.custom({
        "type": "createaddition:liquid_burning",
        "input": ingredients,
        "burnTime": processingTime,
        "superheated": superheated
    })
}

function charging(event, energy, maxChargeRate, ingredients, results) {
    return event.custom({
        "type": "createaddition:charging",
        "input": ingredients,
        "result": results,
        "energy": energy,
        "maxChargeRate": maxChargeRate
    })
}

function turning(event, ingredients, results) {
    return event.custom({
        "type": "vintageimprovements:turning",
        "ingredients": [ingredients],
        "results": [results]
    })
}

function demolding(event, ingredients, results) {
    return event.custom({
        "type": "ratatouille:demolding",
        "ingredients": [ingredients],
        "results": results
    })
}

function curving(event, head, ingredients, results) {
    return event.custom({
        "type": "vintageimprovements:curving",
        "itemAsHead": head,
        "ingredients": [ingredients],
        "results": results
    })
}

function vibrating(event, ingredients, results, processingTime) {
    return event.custom({ 
        "type": "vintageimprovements:vibrating", 
        "ingredients": [ingredients], 
        "results": results, 
        "processingTime": processingTime 
    })
}

function coiling(event, ingredients, results, processingTime) {
    return event.custom({ 
        "type":"vintageimprovements:coiling", 
        "springColor": "000000", 
        "ingredients": [ingredients], 
        "results": [results], 
        "processingTime": processingTime
    })
}

function itemApplication(event, ingredients, results) {
    return event.custom({
        "type": "create:item_application",
        "ingredients": ingredients,
        "results": results
    })
}

function sandpaperPolishing(event, ingredients, results) {
    return event.custom({
        "type": "create:sandpaper_polishing",
        "ingredients": [ingredients],
        "results": [results]
    })
}

function threshing(event, ingredients, results, processingTime) {
    return event.custom({
        "type": "ratatouille:threshing",
        "ingredients": ingredients,
        "results": results,
        "processingTime": processingTime
    })
}

function tableCasting(event, mold, ingredients, processingTime, results) {
    return event.custom({
        "type": "createmetallurgy:casting_in_table",
        "ingredients": [ AddItem(mold), ingredients ],
        "processingTime": processingTime,
        "result": results
    })
}

function basinCasting(event, ingredients, processingTime, results) {
    return event.custom({
        "type": "createmetallurgy:casting_in_basin",
        "ingredients": ingredients,
        "processingTime": processingTime,
        "result": results
    })
}

function melting(event, heatRequirement, ingredients, processingTime, results) {
    return event.custom({
        "type": "createmetallurgy:melting",
        "heatRequirement": heatRequirement,
        "ingredients": [ ingredients ],
        "processingTime": processingTime,
        "results": [ results ]
    })
}

function bulkMelting(event, minHeat, maxHeat, ingredients, processingTime, results) {
    return event.custom({
        "type": "createmetallurgy:bulk_melting",
        "ingredients": [ ingredients ],
        "maxHeatRequirement": maxHeat,
        "minHeatRequirement": minHeat,
        "processingTime": processingTime,
        "results": [ results ]
    })
}

function alloying(event, heatRequirement, ingredients, processingTime, results) {
    var recipe = {
        "type": "createmetallurgy:alloying",
        "ingredients": ingredients,
        "processingTime": processingTime,
        "results": [ results ]
    }
    if (heatRequirement) recipe.heatRequirement = heatRequirement
    return event.custom(recipe)
}

function addStoragePair(event, bigItem, smallItem, count) {
    var smallStack = count + 'x ' + smallItem
    event.shapeless(Item.of(bigItem), [smallStack])
    event.shapeless(Item.of(smallStack), [bigItem])
}

function slabPair(event, type, block, slab) {
    event.shaped(`6x ${slab}`, ['AAA'], { A: block })
    if (type == 'stone') event.stonecutting(`2x ${slab}`, block)
    if (type == 'wood') event.recipes.create.cutting(`2x ${slab}`, block)
}

function stoneSlabPair(event, block, slab) {
    event.shaped(`6x ${slab}`, ['AAA'], { A: block })
    event.stonecutting(`2x ${slab}`, block)
}

ServerEvents.recipes(event => {

    // Deploying
    event.recipes.create.deploying('create:schedule', [AddItem('minecraft:paper'), AddItem('create:sturdy_sheet')])
    event.recipes.create.deploying('vintageimprovements:recipe_card', [AddItem('minecraft:paper'), AddItem('#cwi:leathers')])

    // Curving
    curving(event, 'minecraft:iron_ingot', AddItem('kubejs:clay_disk'), [AddItem('kubejs:clay_ingot_mold')])
    curving(event, 'minecraft:iron_nugget', AddItem('kubejs:clay_disk'), [AddItem('kubejs:clay_nugget_mold')])
    curving(event, 'create:iron_sheet', AddItem('kubejs:clay_disk'), [AddItem('kubejs:clay_sheet_mold')])
    curving(event, 'createaddition:iron_rod', AddItem('kubejs:clay_disk'), [AddItem('kubejs:clay_rod_mold')])

    // Turning
    turning(event, AddItem('create:industrial_iron_block'), AddItem('vintageimprovements:w_shaped_curving_head'))
    turning(event, AddItem('create:industrial_iron_block'), AddItem('vintageimprovements:v_shaped_curving_head'))
    turning(event, AddItem('create:industrial_iron_block'), AddItem('vintageimprovements:concave_curving_head'))
    turning(event, AddItem('create:industrial_iron_block'), AddItem('vintageimprovements:convex_curving_head'))
    turning(event, AddItem('kubejs:industrial_iron_ingot'), AddItem('createdieselgenerators:engine_piston'))
    turning(event, AddItem('kubejs:industrial_iron_ingot'), AddItem('kubejs:industrial_iron_blade'))
    turning(event, AddItem('kubejs:industrial_iron_ingot'), AddItem('kubejs:industrial_iron_drill_head'))
    turning(event, AddItem('create:sturdy_sheet'), AddItem('createmetallurgy:sturdy_whisk'))
    turning(event, AddItem('minecraft:iron_ingot'), AddItem('create:whisk'))
    turning(event, AddItem('minecraft:iron_ingot'), AddItem('create:propeller'))
    turning(event, AddItem('create:andesite_alloy'), AddItem('kubejs:andesite_bearing'))
    turning(event, AddItem('kubejs:fireproof_brick_disk'), AddItem('kubejs:fireproof_brick_ingot_mold'))
    turning(event, AddItem('kubejs:fireproof_brick_disk'), AddItem('kubejs:fireproof_brick_nugget_mold'))
    turning(event, AddItem('kubejs:fireproof_brick_disk'), AddItem('kubejs:fireproof_brick_sheet_mold'))
    turning(event, AddItem('kubejs:fireproof_brick_disk'), AddItem('kubejs:fireproof_brick_rod_mold'))
    turning(event, AddItem('kubejs:terracotta_disk'), AddItem('kubejs:terracotta_ingot_mold'))
    turning(event, AddItem('kubejs:terracotta_disk'), AddItem('kubejs:terracotta_nugget_mold'))
    turning(event, AddItem('kubejs:terracotta_disk'), AddItem('kubejs:terracotta_sheet_mold'))
    turning(event, AddItem('kubejs:terracotta_disk'), AddItem('kubejs:terracotta_rod_mold'))

    // Cutting
    cutting(event, AddItem('minecraft:dead_bush'), AddItem('2 minecraft:stick', 1))
    cutting(event, AddItem('stick'), AddItem('2 createdieselgenerators:wood_chip', 0.75))

    // Chiseling
    chiseling(event, AddItem('create:brass_sheet'), AddItem('kubejs:brass_circuit_board'))
    chiseling(event, AddItem('minecraft:glass'), AddItem('minecraft:glass_pane'))

    // Pressing
    event.recipes.create.pressing('2x kubejs:broken_burnt_log', 'kubejs:burnt_log')
    event.recipes.create.pressing('2x kubejs:stripped_broken_burnt_log', 'kubejs:stripped_burnt_log')
    event.recipes.create.pressing('2x kubejs:broken_ash_log', 'kubejs:ash_log')
    event.recipes.create.pressing('2x kubejs:stripped_broken_ash_log', 'kubejs:stripped_ash_log')

    // Item Application
    itemApplication(event, [AddItem('createdieselgenerators:chip_wood_block'), AddItem('kubejs:andesite_alloy_sheet')], [AddItem('create:andesite_casing')])
    itemApplication(event, [AddItem('createdieselgenerators:chip_wood_block'), AddItem('#cwi:rubbers')], [AddItem('kubejs:sealed_wood')])
    itemApplication(event, [AddItem('kubejs:sealed_wood'), AddItem('create:copper_sheet')], [AddItem('create:copper_casing')])
    itemApplication(event, [AddItem('kubejs:quality_sealed_wood'), AddItem('create:brass_sheet')], [AddItem('create:brass_casing')])
    itemApplication(event, [AddItem('create:brass_casing'), AddItem('kubejs:industrial_iron_sheet')], [AddItem('kubejs:industrial_casing')])
    itemApplication(event, [AddItem('kubejs:harden_wood'), AddItem('tfmg:heavy_plate')], [AddItem('tfmg:steel_casing')])
    itemApplication(event, [AddItem('kubejs:mechanical_arm_base'), AddItem('kubejs:robot_hand')], [AddItem('create:mechanical_arm')])
    itemApplication(event, [AddItem('kubejs:mechanical_arm_base'), AddItem('kubejs:robot_pipette')], [AddItem('fluid:pipette')])
    itemApplication(event, [AddItem('kubejs:mechanical_arm_base'), AddItem('#cwi:chemical_sprayer')], [AddItem('createdieselgenerators:chemical_turret')])

    // Sandpaper Polishing
    sandpaperPolishing(event, AddItem('kubejs:sealed_wood'), AddItem('kubejs:polished_sealed_wood'))
    sandpaperPolishing(event, AddItem('geode_plus:nether_quartz_crystal_block'), AddItem('minecraft:quartz_block'))

    // Liquid Burning
    liquidBurning(event, AddFluid('1 tfmg:gasoline'), 48, true)
    liquidBurning(event, AddFluid('1 tfmg:diesel'), 32, true)
    liquidBurning(event, AddFluid('1 tfmg:kerosene'), 32, false)
    liquidBurning(event, AddFluid('1 kubejs:methane'), 16, false)
    liquidBurning(event, AddFluid('1 createdieselgenerators:plant_oil'), 4, false)

    // Conversion
    addStoragePair(event, 'kubejs:industrial_rubber_block', 'tfmg:rubber_sheet', 9)
    addStoragePair(event, 'kubejs:rubber_block', 'kubejs:rubber', 9)
    addStoragePair(event, 'kubejs:raw_tin_block', 'kubejs:raw_tin', 9)
    addStoragePair(event, 'kubejs:raw_silver_block', 'kubejs:raw_silver', 9)
    addStoragePair(event, 'createmetallurgy:refractory_mortar', 'createmetallurgy:refractory_mortar_ball', 4)
    addStoragePair(event, 'darkerdepths:amber_block', 'darkerdepths:amber', 4)

    // Slab
    slabPair(event, 'normal', 'kubejs:depleted_dirt', 'kubejs:depleted_dirt_slab')

    // Special Melting And Casting
    melting(event, 'heated', AddItem('darkerdepths:amber'), 55, AddFluid('150 kubejs:molten_sticky_resin'))
    bulkMelting(event, 4, 50, AddItem('darkerdepths:amber'), 55, AddFluid('150 kubejs:molten_sticky_resin'))

    alloying(event, 'superheated', [
        AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'),
        AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder')
    ], 360, AddFluid('300 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'), AddItem('kubejs:andesite_powder'),
        AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball')
    ], 360, AddFluid('300 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('kubejs:andesite_gravel'),
        AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder')
    ], 360, AddFluid('350 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('kubejs:andesite_gravel'),
        AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball')
    ], 360, AddFluid('350 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('kubejs:cobbled_andesite'),
        AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder')
    ], 360, AddFluid('400 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('kubejs:cobbled_andesite'),
        AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball')
    ], 360, AddFluid('400 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('minecraft:andesite'),
        AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder'), AddItem('kubejs:clay_powder')
    ], 360, AddFluid('400 kubejs:molten_andesite_alloy'))

    alloying(event, 'superheated', [
        AddItem('minecraft:andesite'),
        AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball'), AddItem('minecraft:clay_ball')
    ], 360, AddFluid('400 kubejs:molten_andesite_alloy'))

    basinCasting(event, [AddFluid('1000 kubejs:molten_slime')], 43, AddItem('minecraft:slime_block'))
    basinCasting(event, [AddFluid('1000 tfmg:molten_slag')], 1482, AddItem('tfmg:slag_block'))

    // Alloying Recipes
    alloying(event, null, [AddFluid('30 kubejs:molten_gold'), AddFluid('10 kubejs:molten_silver')], 4, AddFluid('40 kubejs:molten_electrum'))
    alloying(event, null, [AddFluid('30 kubejs:molten_copper'), AddFluid('10 kubejs:molten_nickel')], 4, AddFluid('40 kubejs:molten_constantan'))
    alloying(event, null, [AddFluid('40 kubejs:molten_copper'), AddFluid('10 kubejs:molten_tin')], 5, AddFluid('50 kubejs:molten_bronze'))
    alloying(event, null, [AddFluid('10 kubejs:molten_copper'), AddFluid('10 kubejs:molten_zinc')], 2, AddFluid('20 kubejs:molten_brass'))

    alloying(event, 'heated', [AddFluid('30 kubejs:molten_gold'), AddFluid('10 kubejs:molten_silver')], 4, AddFluid('40 kubejs:molten_electrum'))
    alloying(event, 'heated', [AddFluid('30 kubejs:molten_copper'), AddFluid('10 kubejs:molten_nickel')], 4, AddFluid('40 kubejs:molten_constantan'))
    alloying(event, 'heated', [AddFluid('40 kubejs:molten_copper'), AddFluid('10 kubejs:molten_tin')], 5, AddFluid('50 kubejs:molten_bronze'))
    alloying(event, 'heated', [AddFluid('10 kubejs:molten_copper'), AddFluid('10 kubejs:molten_zinc')], 2, AddFluid('20 kubejs:molten_brass'))

    alloying(event, 'superheated', [AddFluid('30 kubejs:molten_gold'), AddFluid('10 kubejs:molten_silver')], 4, AddFluid('40 kubejs:molten_electrum'))
    alloying(event, 'superheated', [AddFluid('30 kubejs:molten_copper'), AddFluid('10 kubejs:molten_nickel')], 4, AddFluid('40 kubejs:molten_constantan'))
    alloying(event, 'superheated', [AddFluid('40 kubejs:molten_copper'), AddFluid('10 kubejs:molten_tin')], 5, AddFluid('50 kubejs:molten_bronze'))
    alloying(event, 'superheated', [AddFluid('10 kubejs:molten_copper'), AddFluid('10 kubejs:molten_zinc')], 2, AddFluid('20 kubejs:molten_brass'))
})