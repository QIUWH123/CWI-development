// OreLootModification
LootJS.modifiers(event => {
    global.oreTypes.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
        const exp = isDeepslate ? 3 : 2
        const dustId = isDeepslate ? 'kubejs:deepslate_powder' : 'kubejs:stone_powder'
        const dropChance = isDeepslate ? 0.75 : 0.25
        const modifier = event.addBlockLootModifier(oreId)
        const dropCount = isMore ? 3 : 2

        modifier.dropExperience(exp).removeLoot(oreId).removeLoot(dropOreId)
        for (let i = 0; i < dropCount; i++) modifier.addLoot(dropOreId)
        modifier.randomChanceWithLooting(dropChance, 1).addLoot(dropOreId)
        modifier.randomChanceWithLooting(0.3, 1).addLoot(dustId)
    })
})

// OreProcessingRecipes
ServerEvents.recipes(event => {

// OreTypeCrushingLoop
    global.oreTypes.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
        const dustId = isDeepslate ? 'kubejs:deepslate_powder' : 'kubejs:stone_powder'
        const dropChance = isDeepslate ? 0.75 : 0.25
        const dropCount = isMore ? 3 : 2
        const dropId = (crushedOreId === '') ? dropOreId : crushedOreId

        const main = `${dropCount}x ${dropId}`
        const chance = Item.of(dropId).withChance(dropChance)
        const dust = Item.of(dustId).withChance(0.3)

        if (crushedOreId === '') event.recipes.create.crushing([main, chance, dust, dust], oreId)
        else event.recipes.create.crushing([main, main, chance, chance, dust, dust], oreId)

        if (!crushedOreId === '') {
            event.recipes.create.crushing([crushedOreId, Item.of(crushedOreId).withChance(0.75)], dropOreId)
            event.recipes.create.milling([crushedOreId, Item.of(crushedOreId).withChance(0.75)], dropOreId)
        }
    })

// SpecialOreCrushing
    event.recipes.create.crushing(['2x kubejs:halite', Item.of('kubejs:halite').withChance(0.75)], 'kubejs:halite_ore')
    event.recipes.create.crushing(['2x kubejs:azurite', Item.of('kubejs:azurite').withChance(0.75)], 'create:asurine')
    event.recipes.create.crushing(['2x kubejs:petzite', Item.of('kubejs:petzite').withChance(0.75)], 'create:ochrum')
    event.recipes.create.crushing(['2x kubejs:hematite', Item.of('kubejs:hematite').withChance(0.75)], 'create:crimsite')
    event.recipes.create.crushing(['2x kubejs:malachite', Item.of('kubejs:malachite').withChance(0.75)], 'create:veridium')
    event.recipes.create.crushing(['2x kubejs:bauxite', Item.of('kubejs:bauxite').withChance(0.75)], 'tfmg:bauxite')
    event.recipes.create.crushing(['2x kubejs:lignite', Item.of('kubejs:lignite').withChance(0.75)], 'tfmg:lignite')
    event.recipes.create.crushing(['2x kubejs:galena', Item.of('kubejs:galena').withChance(0.75)], 'tfmg:galena')
    event.recipes.create.crushing(['2x kubejs:cassiterite', Item.of('kubejs:cassiterite').withChance(0.75)], 'kubejs:cassiterite_ore')
    event.recipes.create.crushing(['2x kubejs:magnetite', Item.of('kubejs:magnetite').withChance(0.75)], 'kubejs:magnetite_ore')
    event.recipes.create.crushing(['2x kubejs:chalcocite', Item.of('kubejs:chalcocite').withChance(0.75)], 'kubejs:chalcocite_ore')
    event.recipes.create.crushing(['2x kubejs:chromite', Item.of('kubejs:chromite').withChance(0.75)], 'kubejs:chromite_ore')
    event.recipes.create.crushing(['2x kubejs:cooperite', Item.of('kubejs:cooperite').withChance(0.75)], 'kubejs:cooperite_ore')
    event.recipes.create.crushing(['2x kubejs:magnesite', Item.of('kubejs:magnesite').withChance(0.75)], 'kubejs:magnesite_ore')
    event.recipes.create.crushing(['2x kubejs:pentlandite', Item.of('kubejs:pentlandite').withChance(0.75)], 'kubejs:pentlandite_ore')
    event.recipes.create.crushing(['2x kubejs:sphalerite', Item.of('kubejs:sphalerite').withChance(0.75)], 'kubejs:sphalerite_ore')
    event.recipes.create.crushing(['2x kubejs:uraninite', Item.of('kubejs:uraninite').withChance(0.75)], 'kubejs:uraninite_ore')
    event.recipes.create.crushing(['2x kubejs:rutile', Item.of('kubejs:rutile').withChance(0.75)], 'kubejs:rutile_ore')

// PowderCrushingPairs
    const ores = [
        ['kubejs:halite_powder', 'kubejs:halite'],
        ['kubejs:magnesite_powder', 'kubejs:magnesite'],
        ['tfmg:bauxite_powder', 'kubejs:bauxite'],
        ['kubejs:flint_powder', 'minecraft:flint'],
        ['kubejs:charcoal_powder', 'minecraft:charcoal']
    ]

    ores.forEach(([crushedOreId, oreId]) => {
        event.recipes.create.crushing([crushedOreId, Item.of(crushedOreId).withChance(0.75)], oreId)
        event.recipes.create.milling([crushedOreId, crushedOreId], oreId)
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