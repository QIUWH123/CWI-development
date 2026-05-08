LootJS.modifiers((event) => {

//entity

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
    .addLoot("miners_delight:tentacles");
    event.addLootTableModifier("minecraft:entities/squid")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.9, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("miners_delight:tentacles");

    event.addLootTableModifier("minecraft:entities/glow_squid")
    .randomChanceWithLooting(0.9, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("miners_delight:tentacles");
    event.addLootTableModifier("minecraft:entities/glow_squid")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.9, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("miners_delight:tentacles")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("miners_delight:tentacles");

    event.addLootTableModifier("minecraft:entities/silverfish")
    .removeLoot("miners_delight:silverfish_eggs")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("miners_delight:silverfish_eggs");
    event.addLootTableModifier("minecraft:entities/silverfish")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:silverfish_eggs");

    event.addLootTableModifier("minecraft:entities/spider")
    .removeLoot("miners_delight:arthropod")
    .removeLoot("vital_herbs:silken_husk")
    .removeLoot("minecraft:spider_eye")
    .removeLoot("minecraft:string")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("minecraft:spider_eye");
    event.addLootTableModifier("minecraft:entities/spider")
    .addLoot("minecraft:string")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string");
    event.addLootTableModifier("minecraft:entities/spider")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string");

    event.addLootTableModifier("minecraft:entities/cave_spider")
    .removeLoot("miners_delight:arthropod")
    .removeLoot("vital_herbs:silken_husk")
    .removeLoot("minecraft:spider_eye")
    .removeLoot("minecraft:string")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("minecraft:spider_eye");
    event.addLootTableModifier("minecraft:entities/cave_spider")
    .addLoot("minecraft:string")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string");
    event.addLootTableModifier("minecraft:entities/cave_spider")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:string");

    event.addLootTableModifier("minecraft:entities/bat")
    .removeLoot("miners_delight:bat_wing")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:bat_wing");
    event.addLootTableModifier("minecraft:entities/bat")
    .matchMainHand("#farmersdelight:tools/knives")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("miners_delight:bat_wing");

//blocks
  
    event.addBlockLootModifier('kubejs:dead_leaves')
    .replaceLoot('kubejs:dead_leaves', 'minecraft:stick')
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:stick")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:stick")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("minecraft:stick");

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
    .addLoot("kubejs:crystallum_coccus");

    event.addBlockLootModifier('darkerdepths:arid_deepslate')
    .replaceLoot('minecraft:deepslate', 'minecraft:cobbled_deepslate')
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:quartzite_dust");
    
    event.addBlockLootModifier('kubejs:ashen_depleted_dirt')
    .replaceLoot('kubejs:ashen_depleted_dirt', 'kubejs:depleted_dirt')
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:dark_ash_dust")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:dark_ash_dust");

    event.addBlockLootModifier('kubejs:ash_dirt')
    .replaceLoot('kubejs:ash_dirt', 'kubejs:dark_ash_dust')
    .randomChanceWithLooting(0.9, 1)
    .addLoot("kubejs:dark_ash_dust")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:dark_ash_dust")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:dark_ash_dust");

    event.addBlockLootModifier('kubejs:ash_stone')
    .replaceLoot('kubejs:ash_stone', 'kubejs:ash_dust')
    .randomChanceWithLooting(0.9, 1)
    .addLoot("kubejs:ash_dust")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:ash_dust")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:ash_dust");

    event.addBlockLootModifier('kubejs:scrap_block')
    .removeLoot("kubejs:scrap_block");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.6, 1)
    .addLoot("tfmg:screw")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("tfmg:screw");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.6, 1)
    .addLoot("kubejs:rusted_iron")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:rusted_iron");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.3, 1)
    .addLoot("tfmg:rebar")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("tfmg:rebar")
    .randomChanceWithLooting(0.2, 1)
    .addLoot("tfmg:rebar");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:dark_ash_dust")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:dark_ash_dust")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:dark_ash_dust");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:ash_dust")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:ash_dust")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:ash_dust");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.8, 1)
    .addLoot("kubejs:rubber")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("kubejs:rubber")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("kubejs:rubber");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.6, 1)
    .addLoot("minecraft:gray_wool")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("minecraft:gray_wool")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("minecraft:black_wool");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.8, 1)
    .addLoot("tfmg:synthetic_string")
    .randomChanceWithLooting(0.7, 1)
    .addLoot("tfmg:synthetic_string")
    .randomChanceWithLooting(0.5, 1)
    .addLoot("tfmg:synthetic_string");
    event.addBlockLootModifier('kubejs:scrap_block')
    .randomChanceWithLooting(0.6, 1)
    .addLoot("tfmg:synthetic_leather")
    .randomChanceWithLooting(0.3, 1)
    .addLoot("tfmg:synthetic_leather");

//ores

  function oreLoot(ore,drop,original) {
    event.addBlockLootModifier(ore)
    .dropExperience(5)
    .removeLoot(original)
    .addLoot(drop)
    .addLoot(drop)
    .randomChanceWithLooting(0.5, 1)
    .addLoot(drop);
    event.addBlockLootModifier(ore)
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:stone_dust");
  }

  function oreLootMore(ore,drop,original) {
    event.addBlockLootModifier(ore)
    .dropExperience(5)
    .removeLoot(original)
    .addLoot(drop)
    .addLoot(drop)
    .addLoot(drop)
    .randomChanceWithLooting(0.5, 1)
    .addLoot(drop);
    event.addBlockLootModifier(ore)
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:stone_dust");
  }

  function deepslateOreLoot(ore,drop,original) {
    event.addBlockLootModifier(ore)
    .dropExperience(8)
    .removeLoot(original)
    .addLoot(drop)
    .addLoot(drop)
    .randomChanceWithLooting(0.75, 1)
    .addLoot(drop);
    event.addBlockLootModifier(ore)
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:deepslate_dust");
  }

  function deepslateOreLootMore(ore,drop,original) {
    event.addBlockLootModifier(ore)
    .dropExperience(8)
    .removeLoot(original)
    .addLoot(drop)
    .addLoot(drop)
    .addLoot(drop)
    .randomChanceWithLooting(0.75, 1)
    .addLoot(drop);
    event.addBlockLootModifier(ore)
    .randomChanceWithLooting(0.3, 1)
    .addLoot("kubejs:deepslate_dust");
  }

//more

  oreLootMore('kubejs:sulfur_ore','kubejs:sulfur','kubejs:sulfur_ore');
  deepslateOreLootMore('kubejs:deepslate_sulfur_ore','kubejs:sulfur','kubejs:deepslate_sulfur_ore');

  oreLootMore('kubejs:fluorite_ore','kubejs:fluorite','kubejs:fluorite_ore');
  deepslateOreLootMore('kubejs:deepslate_fluorite_ore','kubejs:fluorite','kubejs:deepslate_fluorite_ore');

  oreLootMore('minecraft:redstone_ore','kubejs:redstone','minecraft:redstone');
  deepslateOreLootMore('minecraft:deepslate_redstone_ore','kubejs:redstone','minecraft:redstone');

  oreLootMore('kubejs:quartz_ore','minecraft:quartz','kubejs:quartz_ore');
  deepslateOreLootMore('kubejs:deepslate_quartz_ore','minecraft:quartz','kubejs:deepslate_quartz_ore');

  oreLootMore('minecraft:copper_ore','minecraft:raw_copper','minecraft:raw_copper');
  deepslateOreLootMore('minecraft:deepslate_copper_ore','minecraft:raw_copper','minecraft:raw_copper');

  oreLootMore('minecraft:coal_ore','minecraft:coal','minecraft:coal');
  deepslateOreLootMore('minecraft:deepslate_coal_ore','minecraft:coal','minecraft:coal');

  oreLootMore('minecraft:iron_ore','minecraft:raw_iron','minecraft:raw_iron');
  deepslateOreLootMore('minecraft:deepslate_iron_ore','minecraft:raw_iron','minecraft:raw_iron');

//normal

  oreLoot('kubejs:silver_ore','kubejs:raw_silver','kubejs:silver_ore');
  deepslateOreLoot('kubejs:deepslate_silver_ore','kubejs:raw_silver','kubejs:deepslate_silver_ore');

  oreLoot('kubejs:cobalt_ore','kubejs:raw_cobalt','kubejs:cobalt_ore');
  deepslateOreLoot('kubejs:deepslate_cobalt_ore','kubejs:raw_cobalt','kubejs:deepslate_cobalt_ore');

  oreLoot('kubejs:tin_ore','kubejs:raw_tin','kubejs:tin_ore');
  deepslateOreLoot('kubejs:deepslate_tin_ore','kubejs:raw_tin','kubejs:deepslate_tin_ore');

  oreLoot('minecraft:gold_ore','minecraft:raw_gold','minecraft:raw_gold');
  deepslateOreLoot('minecraft:deepslate_gold_ore','minecraft:raw_gold','minecraft:raw_gold');

  oreLoot('minecraft:diamond_ore','minecraft:diamond','minecraft:diamond');
  deepslateOreLoot('minecraft:deepslate_diamond_ore','minecraft:diamond','minecraft:diamond');

  oreLoot('minecraft:emerald_ore','minecraft:emerald','minecraft:emerald');
  deepslateOreLoot('minecraft:deepslate_emerald_ore','minecraft:emerald','minecraft:emerald');

  oreLoot('minecraft:lapis_ore','minecraft:lapis_lazuli','minecraft:lapis_lazuli');
  deepslateOreLoot('minecraft:deepslate_lapis_ore','minecraft:lapis_lazuli','minecraft:lapis_lazuli');

  oreLoot('create:zinc_ore','create:raw_zinc','create:raw_zinc');
  deepslateOreLoot('create:deepslate_zinc_ore','create:raw_zinc','create:raw_zinc');

  oreLoot('tfmg:lead_ore','tfmg:raw_lead','tfmg:raw_lead');
  deepslateOreLoot('tfmg:deepslate_lead_ore','tfmg:raw_lead','tfmg:raw_lead');

  oreLoot('tfmg:nickel_ore','tfmg:raw_nickel','tfmg:raw_nickel');
  deepslateOreLoot('tfmg:deepslate_nickel_ore','tfmg:raw_nickel','tfmg:raw_nickel');

  oreLoot('tfmg:lithium_ore','tfmg:raw_lithium','tfmg:raw_lithium');
  deepslateOreLoot('tfmg:deepslate_lithium_ore','tfmg:raw_lithium','tfmg:raw_lithium');

})

BlockEvents.broken(event => {
  if ((event.block.id == 'kubejs:steel_armor_block' || event.block.id == 'kubejs:steel_armor_penetrated' || event.block.id == 'kubejs:steel_armor_safe') && !(event.player.isCreative() || event.player.getMainHandItem().id == 'create_sa:portable_drill')) {
    event.cancel();
  }
})