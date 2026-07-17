LootJS.modifiers((event) => {

// Entity: Squid

    event.addLootTableModifier("minecraft:entities/squid")
        .removeLoot("miners_delight:squid")
        .addLoot("miners_delight:squid")
        .randomChanceWithLooting(0.9, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("miners_delight:tentacles")

    event.addLootTableModifier("minecraft:entities/squid")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.9, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("miners_delight:tentacles")

// Entity: Glow Squid

    event.addLootTableModifier("minecraft:entities/glow_squid")
        .randomChanceWithLooting(0.9, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("miners_delight:tentacles")

    event.addLootTableModifier("minecraft:entities/glow_squid")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.9, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("miners_delight:tentacles")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("miners_delight:tentacles")

// Entity: Silverfish

    event.addLootTableModifier("minecraft:entities/silverfish")
        .removeLoot("miners_delight:silverfish_eggs")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("miners_delight:silverfish_eggs")

    event.addLootTableModifier("minecraft:entities/silverfish")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:silverfish_eggs")

// Entity: Spider

    event.addLootTableModifier("minecraft:entities/spider")
        .removeLoot("miners_delight:arthropod")
        .removeLoot("vital_herbs:silken_husk")
        .removeLoot("minecraft:spider_eye")
        .removeLoot("minecraft:string")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("minecraft:spider_eye")

    event.addLootTableModifier("minecraft:entities/spider")
        .addLoot("minecraft:string")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")

    event.addLootTableModifier("minecraft:entities/spider")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")

// Entity: Cave Spider

    event.addLootTableModifier("minecraft:entities/cave_spider")
        .removeLoot("miners_delight:arthropod")
        .removeLoot("vital_herbs:silken_husk")
        .removeLoot("minecraft:spider_eye")
        .removeLoot("minecraft:string")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("minecraft:spider_eye")

    event.addLootTableModifier("minecraft:entities/cave_spider")
        .addLoot("minecraft:string")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")

    event.addLootTableModifier("minecraft:entities/cave_spider")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:string")

// Entity: Bat

    event.addLootTableModifier("minecraft:entities/bat")
        .removeLoot("miners_delight:bat_wing")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:bat_wing")

    event.addLootTableModifier("minecraft:entities/bat")
        .matchMainHand("#farmersdelight:tools/knives")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("miners_delight:bat_wing")

// Blocks: Dead Leaves

    event.addBlockLootModifier('kubejs:dead_leaves')
        .replaceLoot('kubejs:dead_leaves', 'minecraft:stick')
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:stick")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("minecraft:stick")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("minecraft:stick")

// Blocks: Stone Variants (Replace With Cobbled)

    event.addBlockLootModifier('minecraft:granite')
        .replaceLoot('minecraft:granite', 'kubejs:cobbled_granite')

    event.addBlockLootModifier('minecraft:granite')
        .replaceLoot('minecraft:granite', 'kubejs:cobbled_granite')

    event.addBlockLootModifier('minecraft:diorite')
        .replaceLoot('minecraft:diorite', 'kubejs:cobbled_diorite')

    event.addBlockLootModifier('minecraft:andesite')
        .replaceLoot('minecraft:andesite', 'kubejs:cobbled_andesite')

    event.addBlockLootModifier('minecraft:basalt')
        .replaceLoot('minecraft:basalt', 'kubejs:cobbled_basalt')

    event.addBlockLootModifier('kubejs:claystone')
        .replaceLoot('kubejs:claystone', 'kubejs:cobbled_claystone')

    event.addBlockLootModifier('kubejs:schist')
        .replaceLoot('kubejs:schist', 'kubejs:cobbled_schist')

    event.addBlockLootModifier('kubejs:gneiss')
        .replaceLoot('kubejs:gneiss', 'kubejs:cobbled_gneiss')

    event.addBlockLootModifier('kubejs:rhyolite')
        .replaceLoot('kubejs:rhyolite', 'kubejs:cobbled_rhyolite')

    event.addBlockLootModifier('kubejs:shale')
        .replaceLoot('kubejs:shale', 'kubejs:cobbled_shale')

    event.addBlockLootModifier('darkerdepths:duskrock')
        .replaceLoot('darkerdepths:duskrock', 'kubejs:cobbled_conglomerate')

    event.addBlockLootModifier('darkerdepths:grimestone')
        .replaceLoot('darkerdepths:grimestone', 'kubejs:cobbled_phyllite')

    event.addBlockLootModifier('darkerdepths:aridrock')
        .replaceLoot('darkerdepths:aridrock', 'kubejs:cobbled_quartzite')

    event.addBlockLootModifier('kubejs:crystalized_phyllite')
        .replaceLoot('kubejs:crystalized_phyllite', 'kubejs:cobbled_phyllite')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:crystallum_coccus")

    event.addBlockLootModifier('darkerdepths:scorched_remains')
        .replaceLoot('minecraft:charcoal', 'kubejs:charcoal_powder')

    event.addBlockLootModifier('darkerdepths:arid_deepslate')
        .replaceLoot('minecraft:deepslate', 'minecraft:cobbled_deepslate')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:quartzite_powder")

// Blocks: Ashen Depleted Dirt

    event.addBlockLootModifier('kubejs:ashen_depleted_dirt')
        .replaceLoot('kubejs:ashen_depleted_dirt', 'kubejs:depleted_dirt')
        .randomChanceWithLooting(0.7, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:dark_ash")

// Blocks: Ash Dirt

    event.addBlockLootModifier('kubejs:ash_dirt')
        .replaceLoot('kubejs:ash_dirt', 'kubejs:dark_ash')
        .randomChanceWithLooting(0.9, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:dark_ash")

// Blocks: Ash Stone

    event.addBlockLootModifier('kubejs:ash_stone')
        .replaceLoot('kubejs:ash_stone', 'kubejs:ash')
        .randomChanceWithLooting(0.9, 1)
        .addLoot("kubejs:ash")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("kubejs:ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

// Blocks: Dark Ash Stone

    event.addBlockLootModifier('kubejs:dark_ash_stone')
        .replaceLoot('kubejs:dark_ash_stone', 'kubejs:dark_ash')
        .randomChanceWithLooting(0.9, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.7, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:dark_ash")

// Blocks: Scrap Block (Multiple Modifiers)

    event.addBlockLootModifier('kubejs:scrap_block')
        .removeLoot("kubejs:scrap_block")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.45, 1)
        .addLoot("tfmg:screw")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.45, 1)
        .addLoot("tfmg:screw")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_sheet")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_rod")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_ingot")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_wire")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("kubejs:rubber")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("kubejs:rubber")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("kubejs:rubber")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("tfmg:synthetic_string")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("tfmg:synthetic_string")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.75, 1)
        .addLoot("tfmg:synthetic_string")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.45, 1)
        .addLoot("tfmg:synthetic_leather")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.45, 1)
        .addLoot("tfmg:synthetic_leather")

// Repeated block (original duplication)

    event.addBlockLootModifier('kubejs:scrap_block')
        .removeLoot("kubejs:scrap_block")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_sheet")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_rod")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_ingot")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:rusted_iron_wire")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.25, 1)
        .addLoot("tfmg:rebar")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

    event.addBlockLootModifier('kubejs:scrap_block')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:ash")

// Blocks: Dark Ash Stone Quartz

    event.addBlockLootModifier('kubejs:dark_ash_stone_quartz')
        .replaceLoot('kubejs:dark_ash_stone_quartz', 'kubejs:dark_ash')
        .randomChanceWithLooting(0.9, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:dark_ash")

    event.addBlockLootModifier('kubejs:dark_ash_stone_quartz')
        .addLoot("minecraft:quartz")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("minecraft:quartz")

    event.addBlockLootModifier('kubejs:dark_ash_stone_quartz')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:quartz_powder")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:quartz_powder")

// Blocks: Dark Ash Stone Coal

    event.addBlockLootModifier('kubejs:dark_ash_stone_coal')
        .replaceLoot('kubejs:dark_ash_stone_coal', 'kubejs:dark_ash')
        .randomChanceWithLooting(0.9, 1)
        .addLoot("kubejs:dark_ash")
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:dark_ash")

    event.addBlockLootModifier('kubejs:dark_ash_stone_coal')
        .addLoot("minecraft:coal")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("minecraft:coal")

    event.addBlockLootModifier('kubejs:dark_ash_stone_coal')
        .randomChanceWithLooting(0.5, 1)
        .addLoot("kubejs:coal_powder")
        .randomChanceWithLooting(0.3, 1)
        .addLoot("kubejs:coal_powder")

})

LootJS.modifiers((event) => {

    global.pipePileDefinitions.forEach(([pipeId, texturePath, hardness, resistance, soundType, miningType, toolLevel, pipes]) => {
        
        event.addBlockLootModifier(`kubejs:small_pile_of_${pipeId}_pipes`)
        .replaceLoot(`kubejs:small_pile_of_${pipeId}_pipes`, pipes)
        .addLoot(pipes)
        event.addBlockLootModifier(`kubejs:pile_of_${pipeId}_pipes`)
        .replaceLoot(`kubejs:pile_of_${pipeId}_pipes`, pipes)
        .addLoot(pipes)
        .addLoot(pipes)
        event.addBlockLootModifier(`kubejs:large_pile_of_${pipeId}_pipes`)
        .replaceLoot(`kubejs:large_pile_of_${pipeId}_pipes`, pipes)
        .addLoot(pipes)
        .addLoot(pipes)
        .addLoot(pipes)

    })
})