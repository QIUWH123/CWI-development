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

ServerEvents.recipes(event => {
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

//oreCrushing

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

    const ores = [
        ['kubejs:halite_powder', 'kubejs:halite'],
        ['kubejs:magnesite_powder', 'kubejs:magnesite'],
        ['tfmg:bauxite_powder', 'kubejs:bauxite'],
        ['kubejs:flint_powder', 'minecraft:flint'],
        ['kubejs:charcoal_powder', 'minecraft:charcoal'],
    ]
    
    ores.forEach(([crushedOreId, oreId]) => {
        event.recipes.create.crushing([crushedOreId, Item.of(crushedOreId).withChance(0.75)], oreId)
    })

//dusts

//ores

  event.recipes.create.milling('kubejs:magnesium_powder', 'kubejs:magnesium_ingot')
  event.recipes.create.milling('kubejs:silicon_powder', 'tfmg:silicon_ingot')
  event.recipes.create.milling('kubejs:copper_powder', 'minecraft:copper_ingot')
  event.recipes.create.milling('kubejs:iron_powder', 'minecraft:iron_ingot')
  event.recipes.create.milling('kubejs:gold_powder', 'minecraft:gold_ingot')
  event.recipes.create.milling('kubejs:brass_powder', 'create:brass_ingot')
  event.recipes.create.milling('kubejs:andesite_alloy_powder', 'create:andesite_alloy')
  event.recipes.create.milling('kubejs:zinc_powder', 'create:zinc_ingot')
  event.recipes.create.milling('kubejs:industrial_iron_powder', 'createdeco:industrial_iron_ingot')
  event.recipes.create.milling('kubejs:lead_powder', 'tfmg:lead_ingot')
  event.recipes.create.milling('kubejs:nickel_powder', 'tfmg:nickel_ingot')
  event.recipes.create.milling('kubejs:lithium_powder', 'tfmg:lithium_ingot')
  event.recipes.create.milling('kubejs:aluminum_powder', 'tfmg:aluminum_ingot')
  event.recipes.create.milling('kubejs:steel_powder', 'tfmg:steel_ingot')
  event.recipes.create.milling('kubejs:cast_iron_powder', 'tfmg:cast_iron_ingot')
  event.recipes.create.milling('kubejs:silver_powder', 'kubejs:silver_ingot')
  event.recipes.create.milling('kubejs:bronze_powder', 'kubejs:bronze_ingot')
  event.recipes.create.milling('kubejs:tin_powder', 'kubejs:tin_ingot')
  event.recipes.create.milling('kubejs:cobalt_powder', 'kubejs:cobalt_ingot')

})

ServerEvents.recipes(event => {

//delete

  event.remove({ id: 'minecraft:gold_ingot_from_smelting_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore' })
  event.remove({ id: 'minecraft:coal_from_smelting_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_blasting_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_smelting_deepslate_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_blasting_deepslate_coal_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_blasting_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore' })
  event.remove({ id: 'minecraft:redstone_from_smelting_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_blasting_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore' })
  event.remove({ id: 'minecraft:emerald_from_smelting_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_blasting_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_smelting_deepslate_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_blasting_deepslate_emerald_ore' })
  event.remove({ id: 'minecraft:diamond_from_smelting_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_smelting_deepslate_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore' })
  event.remove({ id: 'minecraft:quartz_from_blasting' })
  event.remove({ id: 'minecraft:quartz' })

  event.remove({ id: 'create:crushing/veridium_recycling' })
  event.remove({ id: 'create:crushing/veridium' })
  event.remove({ id: 'create:crushing/ochrum_recycling' })
  event.remove({ id: 'create:crushing/ochrum' })
  event.remove({ id: 'create:crushing/asurine_recycling' })
  event.remove({ id: 'create:crushing/asurine' })
  event.remove({ id: 'create:crushing/crimsite_recycling' })
  event.remove({ id: 'create:crushing/crimsite' })
  event.remove({ id: 'tfmg:crushing/bauxite' })
  event.remove({ id: 'tfmg:crushing/galena' })

  event.remove({ id: 'create:crushing/coal_ore' })
  event.remove({ id: 'create:crushing/deepslate_coal_ore' })
  event.remove({ id: 'create:crushing/iron_ore' })
  event.remove({ id: 'create:crushing/deepslate_iron_ore' })
  event.remove({ id: 'create:crushing/copper_ore' })
  event.remove({ id: 'create:crushing/deepslate_copper_ore' })
  event.remove({ id: 'create:crushing/gold_ore' })
  event.remove({ id: 'create:crushing/deepslate_gold_ore' })
  event.remove({ id: 'create:crushing/redstone_ore' })
  event.remove({ id: 'create:crushing/deepslate_redstone_ore' })
  event.remove({ id: 'create:crushing/emerald_ore' })
  event.remove({ id: 'create:crushing/deepslate_emerald_ore' })
  event.remove({ id: 'create:crushing/diamond_ore' })
  event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
  event.remove({ id: 'create:crushing/lapis_ore' })
  event.remove({ id: 'create:crushing/deepslate_lapis_ore' })
  event.remove({ id: 'create:crushing/nether_gold_ore' })
  event.remove({ id: 'create:crushing/nether_quartz_ore' })
  event.remove({ id: 'create:crushing/zinc_ore' })
  event.remove({ id: 'create:crushing/deepslate_zinc_ore' })
  event.remove({ id: 'create:crushing/lead_ore' })
  event.remove({ id: 'create:crushing/nickel_ore' })
  event.remove({ id: 'tfmg:crushing/lithium_ore' })
  event.remove({ id: 'tfmg:crushing/deepslate_lithium_ore' })

  event.remove({ id: 'create:crushing/raw_iron_block' })
  event.remove({ id: 'create:crushing/raw_gold_block' })
  event.remove({ id: 'create:crushing/raw_copper_block' })
  event.remove({ id: 'create:crushing/raw_zinc_block' })
  event.remove({ id: 'create:crushing/raw_lead_block' })
  event.remove({ id: 'create:crushing/raw_nickel_block' })
  event.remove({ id: 'tfmg:crushing/raw_lithium_block' })

  event.remove({ id: 'create:crushing/raw_iron' })
  event.remove({ id: 'create:crushing/raw_gold' })
  event.remove({ id: 'create:crushing/raw_copper' })
  event.remove({ id: 'create:crushing/raw_zinc' })
  event.remove({ id: 'create:crushing/raw_lead' })
  event.remove({ id: 'create:crushing/raw_nickel' })
  event.remove({ id: 'tfmg:crushing/raw_lithium' })

  event.remove({ id: 'minecraft:iron_ingot_from_blasting_raw_iron' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_raw_gold' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_raw_copper' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_raw_iron' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_raw_gold' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_raw_copper' })
  event.remove({ id: 'create:smelting/zinc_ingot_from_ore' })
  event.remove({ id: 'create:smelting/zinc_ingot_from_raw_ore' })
  event.remove({ id: 'create:blasting/zinc_ingot_from_ore' })
  event.remove({ id: 'create:blasting/zinc_ingot_from_raw_ore' })
  event.remove({ id: 'tfmg:smelting/lithium_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/lithium_ingot' })
  event.remove({ id: 'tfmg:smelting/nickel_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/nickel_ingot' })
  event.remove({ id: 'tfmg:smelting/lead_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/lead_ingot' })

})