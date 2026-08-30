// OreProcessingRecipes

ServerEvents.recipes(event => {
// OreTypeCrushing

    function processCrushing(oreId, settings, dropOreId, output, isMore) {
        const dropCount = isMore ? 3 : 2
        const dropChance = settings.dropChance
        const dustId = settings.dust
        const processingTime = settings.processingTime

        event.recipes.create.crushing([
            `${dropCount}x ${output}`,
            Item.of(output).withChance(dropChance),
            Item.of(dustId).withChance(0.35),
            Item.of(dustId).withChance(0.25)
        ], oreId).processingTime(processingTime)
    }

    global.oreTypes.forEach(([oreVariants, dropOreId, crushedOreId, powderOreId, isMore]) => {
        const output = crushedOreId? crushedOreId : powderOreId? powderOreId : dropOreId
        for (let key in global.variantSettings) {
            if (oreVariants[key]) {
                processCrushing(oreVariants[key], global.variantSettings[key], dropOreId, output, isMore)
            }
        }
        if (powderOreId !== '') {
            event.recipes.create.crushing(output, dropOreId)
            event.recipes.create.milling(powderOreId, dropOreId)
            if (crushedOreId !== '') {
                event.recipes.create.milling(powderOreId, crushedOreId)
            }
        }
    })

// PowderCrushingPairs

    const orePowders = [
        ['minecraft:iron_ingot', 'kubejs:raw_iron_powder'],
        ['minecraft:gold_ingot', 'kubejs:raw_gold_powder'],
        ['minecraft:copper_ingot', 'kubejs:raw_copper_powder'],
        ['tfmg:lithium_ingot', 'kubejs:raw_lithium_powder'],
        ['tfmg:lead_ingot', 'kubejs:raw_lead_powder'],
        ['tfmg:nickel_ingot', 'kubejs:raw_nickel_powder'],
        ['create:zinc_ingot', 'kubejs:raw_zinc_powder'],
        ['kubejs:tin_ingot', 'kubejs:raw_tin_powder'],
        ['kubejs:silver_ingot', 'kubejs:raw_silver_powder']
    ]

    orePowders.forEach(([outputItem, inputItem]) => {
        event.smelting(outputItem, inputItem)
        event.blasting(outputItem, inputItem)
    })

    const ores = [
        ['kubejs:flint_powder', 'minecraft:flint'],
        ['kubejs:amethyst_powder', 'minecraft:amethyst_shard'],
        ['kubejs:halite_powder', 'kubejs:halite_item'],
        ['kubejs:lignite_powder', 'kubejs:lignite_item'],
        ['kubejs:charcoal_powder', 'minecraft:charcoal']
    ]

    ores.forEach(([crushedOreId, oreId]) => {
        event.recipes.create.milling(crushedOreId, oreId)
    })
})

// RecipeRemoval

ServerEvents.recipes(event => {

// VanillaSmeltingRemoval

    const vanillaSmeltingIds = [
        'minecraft:gold_ingot_from_smelting_gold_ore',
        'minecraft:gold_ingot_from_blasting_gold_ore',
        'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_blasting_deepslate_gold_ore',
        'minecraft:coal_from_smelting_coal_ore',
        'minecraft:coal_from_blasting_coal_ore',
        'minecraft:coal_from_smelting_deepslate_coal_ore',
        'minecraft:coal_from_blasting_deepslate_coal_ore',
        'minecraft:iron_ingot_from_smelting_iron_ore',
        'minecraft:iron_ingot_from_blasting_iron_ore',
        'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
        'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',
        'minecraft:copper_ingot_from_smelting_copper_ore',
        'minecraft:copper_ingot_from_blasting_copper_ore',
        'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
        'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
        'minecraft:redstone_from_smelting_redstone_ore',
        'minecraft:redstone_from_blasting_redstone_ore',
        'minecraft:redstone_from_smelting_deepslate_redstone_ore',
        'minecraft:redstone_from_blasting_deepslate_redstone_ore',
        'minecraft:emerald_from_smelting_emerald_ore',
        'minecraft:emerald_from_blasting_emerald_ore',
        'minecraft:emerald_from_smelting_deepslate_emerald_ore',
        'minecraft:emerald_from_blasting_deepslate_emerald_ore',
        'minecraft:diamond_from_smelting_diamond_ore',
        'minecraft:diamond_from_blasting_diamond_ore',
        'minecraft:diamond_from_smelting_deepslate_diamond_ore',
        'minecraft:diamond_from_blasting_deepslate_diamond_ore',
        'minecraft:lapis_lazuli_from_smelting_lapis_ore',
        'minecraft:lapis_lazuli_from_blasting_lapis_ore',
        'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore',
        'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore',
        'minecraft:gold_ingot_from_blasting_nether_gold_ore',
        'minecraft:gold_ingot_from_smelting_nether_gold_ore',
        'minecraft:quartz_from_blasting',
        'minecraft:quartz'
    ]
    vanillaSmeltingIds.forEach(id => event.remove({id: id}))

// CreateOreCrushingRemoval

    const createOreCrushingIds = [
        'create:crushing/veridium_recycling',
        'create:crushing/veridium',
        'create:crushing/ochrum_recycling',
        'create:crushing/ochrum',
        'create:crushing/asurine_recycling',
        'create:crushing/asurine',
        'create:crushing/crimsite_recycling',
        'create:crushing/crimsite',
        'tfmg:crushing/bauxite',
        'tfmg:crushing/galena',
        'create:crushing/coal_ore',
        'create:crushing/deepslate_coal_ore',
        'create:crushing/iron_ore',
        'create:crushing/deepslate_iron_ore',
        'create:crushing/copper_ore',
        'create:crushing/deepslate_copper_ore',
        'create:crushing/gold_ore',
        'create:crushing/deepslate_gold_ore',
        'create:crushing/redstone_ore',
        'create:crushing/deepslate_redstone_ore',
        'create:crushing/emerald_ore',
        'create:crushing/deepslate_emerald_ore',
        'create:crushing/diamond_ore',
        'create:crushing/deepslate_diamond_ore',
        'create:crushing/lapis_ore',
        'create:crushing/deepslate_lapis_ore',
        'create:crushing/nether_gold_ore',
        'create:crushing/nether_quartz_ore',
        'create:crushing/zinc_ore',
        'create:crushing/deepslate_zinc_ore',
        'create:crushing/lead_ore',
        'create:crushing/nickel_ore',
        'tfmg:crushing/lithium_ore',
        'tfmg:crushing/deepslate_lithium_ore'
    ]
    createOreCrushingIds.forEach(id => event.remove({id: id}))

// RawBlockCrushingRemoval

    const rawBlockCrushingIds = [
        'create:crushing/raw_iron_block',
        'create:crushing/raw_gold_block',
        'create:crushing/raw_copper_block',
        'create:crushing/raw_zinc_block',
        'create:crushing/raw_lead_block',
        'create:crushing/raw_nickel_block',
        'tfmg:crushing/raw_lithium_block'
    ]
    rawBlockCrushingIds.forEach(id => event.remove({id: id}))

// RawItemCrushingRemoval

    const rawItemCrushingIds = [
        'create:crushing/raw_iron',
        'create:crushing/raw_gold',
        'create:crushing/raw_copper',
        'create:crushing/raw_zinc',
        'create:crushing/raw_lead',
        'create:crushing/raw_nickel',
        'tfmg:crushing/raw_lithium'
    ]
    rawItemCrushingIds.forEach(id => event.remove({id: id}))

// RawSmeltingRemoval

    const rawSmeltingIds = [
        'minecraft:iron_ingot_from_blasting_raw_iron',
        'minecraft:gold_ingot_from_blasting_raw_gold',
        'minecraft:copper_ingot_from_blasting_raw_copper',
        'minecraft:iron_ingot_from_smelting_raw_iron',
        'minecraft:gold_ingot_from_smelting_raw_gold',
        'minecraft:copper_ingot_from_smelting_raw_copper',
        'create:smelting/zinc_ingot_from_ore',
        'create:smelting/zinc_ingot_from_raw_ore',
        'create:blasting/zinc_ingot_from_ore',
        'create:blasting/zinc_ingot_from_raw_ore',
        'tfmg:smelting/lithium_ingot_blasting',
        'tfmg:smelting/lithium_ingot',
        'tfmg:smelting/nickel_ingot_blasting',
        'tfmg:smelting/nickel_ingot',
        'tfmg:smelting/lead_ingot_blasting',
        'tfmg:smelting/lead_ingot'
    ]
    rawSmeltingIds.forEach(id => event.remove({id: id}))

})