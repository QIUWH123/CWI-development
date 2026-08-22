    const ash = "kubejs:ash"
    const darkAsh = LootEntry.of("kubejs:dark_ash")
        .when((c) => { 
            c.or((or) => {
                or.biome("cwi:smoldering_barren").biome("cwi:molten_caves")
            })
        })

    const GRENADE = [
        Item.of("tfmg:copper_grenade").withChance(1),
        Item.of("tfmg:zinc_grenade").withChance(1),
        Item.of("tfmg:thermite_grenade").withChance(1)
    ]

    const BANNER_PATTERNS = [
        Item.of("minecraft:flower_banner_pattern").withChance(1),
        Item.of("minecraft:creeper_banner_pattern").withChance(1),
        Item.of("minecraft:skull_banner_pattern").withChance(1),
        Item.of("minecraft:mojang_banner_pattern").withChance(1),
        Item.of("minecraft:globe_banner_pattern").withChance(1),
        Item.of("minecraft:piglin_banner_pattern").withChance(1)
    ]

    const POLISH_EQUIPMENTS = [
        Item.of("kubejs:fine_whetstone").withChance(0.1),
        Item.of("kubejs:small_hammer").withChance(0.1),
        Item.of("kubejs:whetstone").withChance(0.3),
        Item.of("create:sandpaper").withChance(0.5)
    ]

    const BOWS = [
        Item.of("minecraft:bow").withChance(0.6),
        Item.of("minecraft:crossbow").withChance(0.4)
    ]

    const SWORDS_RICH = [
        Item.of("kubejs:zinc_sword").withChance(0.1),
        Item.of("kubejs:rusted_iron_sword").withChance(0.4),
        Item.of("kubejs:copper_sword").withChance(0.2),
        Item.of("kubejs:lead_sword").withChance(0.1),
        Item.of("minecraft:iron_sword").withChance(0.2)
    ]

    const SWORDS_NORMAL = [
        Item.of("minecraft:stone_sword").withChance(0.3),
        Item.of("kubejs:zinc_sword").withChance(0.1),
        Item.of("kubejs:rusted_iron_sword").withChance(0.5),
        Item.of("kubejs:copper_sword").withChance(0.1)
    ]

    const SWORDS_POOR = [
        Item.of("minecraft:wooden_sword").withChance(0.25),
        Item.of("minecraft:stone_sword").withChance(0.75)
    ]

    const AXES_RICH = [
        Item.of("kubejs:zinc_axe").withChance(0.1),
        Item.of("kubejs:rusted_iron_axe").withChance(0.4),
        Item.of("kubejs:copper_axe").withChance(0.2),
        Item.of("kubejs:lead_axe").withChance(0.1),
        Item.of("minecraft:iron_axe").withChance(0.2)
    ]

    const AXES_NORMAL = [
        Item.of("minecraft:stone_axe").withChance(0.3),
        Item.of("kubejs:zinc_axe").withChance(0.1),
        Item.of("kubejs:rusted_iron_axe").withChance(0.5),
        Item.of("kubejs:copper_axe").withChance(0.1)
    ]

    const AXES_POOR = [
        Item.of("minecraft:wooden_axe").withChance(0.25),
        Item.of("minecraft:stone_axe").withChance(0.75)
    ]

    const PICKAXES_RICH = [
        Item.of("kubejs:zinc_pickaxe").withChance(0.1),
        Item.of("kubejs:rusted_iron_pickaxe").withChance(0.4),
        Item.of("kubejs:copper_pickaxe").withChance(0.2),
        Item.of("kubejs:lead_pickaxe").withChance(0.1),
        Item.of("minecraft:iron_pickaxe").withChance(0.2)
    ]

    const PICKAXES_NORMAL = [
        Item.of("minecraft:stone_pickaxe").withChance(0.3),
        Item.of("kubejs:zinc_pickaxe").withChance(0.1),
        Item.of("kubejs:rusted_iron_pickaxe").withChance(0.5),
        Item.of("kubejs:copper_pickaxe").withChance(0.1)
    ]

    const PICKAXES_POOR = [
        Item.of("minecraft:wooden_pickaxe").withChance(0.25),
        Item.of("minecraft:stone_pickaxe").withChance(0.75)
    ]

    const SHOVELS_RICH = [
        Item.of("kubejs:zinc_shovel").withChance(0.1),
        Item.of("kubejs:rusted_iron_shovel").withChance(0.4),
        Item.of("kubejs:copper_shovel").withChance(0.2),
        Item.of("kubejs:lead_shovel").withChance(0.1),
        Item.of("minecraft:iron_shovel").withChance(0.2)
    ]

    const SHOVELS_NORMAL = [
        Item.of("minecraft:stone_shovel").withChance(0.3),
        Item.of("kubejs:zinc_shovel").withChance(0.1),
        Item.of("kubejs:rusted_iron_shovel").withChance(0.5),
        Item.of("kubejs:copper_shovel").withChance(0.1)
    ]

    const SHOVELS_POOR = [
        Item.of("minecraft:wooden_shovel").withChance(0.25),
        Item.of("minecraft:stone_shovel").withChance(0.75)
    ]

    const HOES_RICH = [
        Item.of("kubejs:zinc_hoe").withChance(0.1),
        Item.of("kubejs:rusted_iron_hoe").withChance(0.4),
        Item.of("kubejs:copper_hoe").withChance(0.2),
        Item.of("kubejs:lead_hoe").withChance(0.1),
        Item.of("minecraft:iron_hoe").withChance(0.2)
    ]

    const HOES_NORMAL = [
        Item.of("minecraft:stone_hoe").withChance(0.3),
        Item.of("kubejs:zinc_hoe").withChance(0.1),
        Item.of("kubejs:rusted_iron_hoe").withChance(0.5),
        Item.of("kubejs:copper_hoe").withChance(0.1)
    ]

    const HOES_POOR = [
        Item.of("minecraft:wooden_hoe").withChance(0.25),
        Item.of("minecraft:stone_hoe").withChance(0.75)
    ]

    const POTTERY_SHERDS = [
        Item.of("minecraft:blade_pottery_sherd").withChance(1),
        Item.of("minecraft:explorer_pottery_sherd").withChance(1),
        Item.of("minecraft:heartbreak_pottery_sherd").withChance(1),
        Item.of("minecraft:snort_pottery_sherd").withChance(1),
        Item.of("minecraft:friend_pottery_sherd").withChance(1),
        Item.of("minecraft:mourner_pottery_sherd").withChance(1),
        Item.of("minecraft:arms_up_pottery_sherd").withChance(1),
        Item.of("minecraft:prize_pottery_sherd").withChance(1),
        Item.of("minecraft:brewer_pottery_sherd").withChance(1),
        Item.of("minecraft:skull_pottery_sherd").withChance(1),
        Item.of("minecraft:heart_pottery_sherd").withChance(1),
        Item.of("minecraft:danger_pottery_sherd").withChance(1),
        Item.of("minecraft:burn_pottery_sherd").withChance(1),
        Item.of("minecraft:shelter_pottery_sherd").withChance(1),
        Item.of("minecraft:angler_pottery_sherd").withChance(1),
        Item.of("minecraft:howl_pottery_sherd").withChance(1),
        Item.of("minecraft:miner_pottery_sherd").withChance(1),
        Item.of("minecraft:archer_pottery_sherd").withChance(1),
        Item.of("minecraft:sheaf_pottery_sherd").withChance(1),
        Item.of("minecraft:plenty_pottery_sherd").withChance(1)
    ]

    const SMITHING_TEMPLATES = [
        Item.of("minecraft:sentry_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:vex_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:coast_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:ward_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:snout_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:wayfinder_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:shaper_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:raiser_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:host_armor_trim_smithing_template").withChance(1),
        Item.of("minecraft:netherite_upgrade_smithing_template").withChance(0)
    ]
    
//give @s chest{BlockEntityTag:{LootTable:"cwi:chests/"}}

LootJS.modifiers((event) => {

    // ======================= 食物 =======================
    event.addLootTableModifier("cwi:chests/food/rich")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("miners_delight:cave_carrot")
            pool.limitCount([4, 9])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("miners_delight:baked_cave_carrot")
            pool.limitCount([3, 7])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("miners_delight:nutritional_bar")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:crunchy_bar")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:insect_stew_cup")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:cooked_arthropod")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:honey_bottle")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:dried_kelp")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.002)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/food/normal")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("miners_delight:cave_carrot")
            pool.limitCount([3, 7])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("miners_delight:baked_cave_carrot")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:arthropod")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("miners_delight:cooked_arthropod")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("miners_delight:silverfish_eggs")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bone")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:dried_kelp")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:spider_eye")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:leather")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:feather")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/food/poor")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:cave_carrot")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:baked_cave_carrot")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("miners_delight:arthropod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:cooked_arthropod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:silverfish_eggs")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:spider_eye")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 1])
        })

    // ======================= 材料 =======================
    event.addLootTableModifier("cwi:chests/material/rich")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.8)
            pool.addLoot('tfmg:rebar')
            pool.limitCount([4, 8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.8)
            pool.addLoot('tfmg:synthetic_string')
            pool.limitCount([3, 7])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot('kubejs:rubber')
            pool.limitCount([3, 7])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot('create:shaft')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot('darkerdepths:rope')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot('kubejs:synthetic_feather')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('create:belt_connector')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('tfmg:steel_pipe')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot('tfmg:slag')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot('tfmg:cinderblock')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addWeightedLoot(GRENADE)
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.003)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/material/normal")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot('tfmg:rebar')
            pool.limitCount([3, 6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('tfmg:synthetic_string')
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('kubejs:rubber')
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot('create:shaft')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot('darkerdepths:rope')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot('kubejs:net')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot('kubejs:synthetic_feather')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot('create:belt_connector')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot('tfmg:steel_pipe')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot('tfmg:slag')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot('tfmg:cinderblock')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.003)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/material/poor")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('tfmg:rebar')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot('tfmg:synthetic_string')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot('kubejs:rubber')
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot('create:shaft')
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot('darkerdepths:rope')
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot('tfmg:cinderblock')
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot('tfmg:slag')
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot('miners_delight:silverfish_eggs')
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.003)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.001)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    // ======================= 工具与材料 =======================
    event.addLootTableModifier("cwi:chests/tool/rich")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([3, 7])
        })
        .pool(pool => {
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rusted_iron_wire")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(POLISH_EQUIPMENTS)
            pool.limitCount([1, 1])
            pool.damage([0.3, 0.7])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(BOWS)
            pool.damage([0.2, 0.8])
            pool.addLoot('minecraft:arrow')
                .limitCount([13, 37])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.4)
            pool.addWeightedLoot(SWORDS_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(AXES_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addWeightedLoot(PICKAXES_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SHOVELS_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addWeightedLoot(HOES_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.4, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:shield")
            pool.limitCount([1, 1])
            pool.damage([0.4, 0.8])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bucket")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/tool/normal")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rusted_iron_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.2)
            pool.addWeightedLoot(POLISH_EQUIPMENTS)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(BOWS)
                .damage([0.1, 0.7])
            pool.addLoot('minecraft:arrow')
                .limitCount([3, 23])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SWORDS_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.2)
            pool.addWeightedLoot(AXES_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(PICKAXES_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SHOVELS_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addWeightedLoot(HOES_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bucket")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/tool/poor")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SWORDS_POOR)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.2)
            pool.addWeightedLoot(AXES_POOR)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(PICKAXES_POOR)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SHOVELS_POOR)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addWeightedLoot(HOES_POOR)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.05, 0.2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.001)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])

        })    // ======================= 空箱子 =======================
    event.addLootTableModifier("cwi:chests/empty")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("biomancy:bone_fragments")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot("minecraft:flint")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.04)
            pool.addLoot("minecraft:clay_ball")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("kubejs:glass_powder")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.002)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    // ======================= 矿井 =======================
    event.addLootTableModifier("cwi:chests/mine/tools")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.5)
            pool.addWeightedLoot(PICKAXES_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(PICKAXES_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.3)
            pool.addWeightedLoot(SHOVELS_RICH)
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.2)
            pool.addWeightedLoot(SHOVELS_NORMAL)
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:torch")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:lantern")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.2, 0.6])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/repair")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.addLoot("tfmg:synthetic_string")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("tfmg:rebar")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("tfmg:screw")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("minecraft:rail")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:powered_rail")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:activator_rail")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:detector_rail")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("create:controller_rail")
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/ore")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:raw_iron")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:raw_copper")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:raw_gold")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("create:raw_zinc")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("tfmg:raw_nickel")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("tfmg:raw_lead")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("tfmg:raw_lithium")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:raw_tin")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("kubejs:raw_silver")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.randomChance(0.8)
            pool.addLoot("create:crushed_raw_iron")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.randomChance(0.3)
            pool.addLoot("create:crushed_raw_gold")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.randomChance(0.8)
            pool.addLoot("create:crushed_raw_copper")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("create:crushed_raw_zinc")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("create:crushed_raw_nickel")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("create:crushed_raw_lead")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.randomChance(0.7)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:redstone")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:sulfur_item")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/food")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("miners_delight:nutritional_bar")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("miners_delight:crunchy_bar")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:dried_kelp")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:charcoal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 2])
        })

    // ======================= 地下密封箱（洁净） =======================
    event.addLootTableModifier("cwi:chests/sealed/food")
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("miners_delight:nutritional_bar")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("miners_delight:crunchy_bar")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:honey_bottle")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:dried_kelp")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:egg")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:insect_stew_cup")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("miners_delight:cooked_arthropod")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("miners_delight:cave_carrot")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/sealed/electronics")
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("create_new_age:copper_wire")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("create_new_age:overcharged_golden_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("create_new_age:overcharged_iron_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("create_new_age:overcharged_diamond_wire")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("tfmg:synthetic_string")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("create:cogwheel")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("tfmg:steel_cogwheel")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("create:shaft")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:redstone")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("tfmg:screw")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("create:empty_schematic")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("create:schematic_and_quill")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 2])
        })

    event.addLootTableModifier("cwi:chests/sealed/collectibles")
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.25)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addWeightedLoot(BANNER_PATTERNS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:bell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:nautilus_shell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:painting")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:flower_pot")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:candle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 1])
        })

    // ======================= 杂物箱 =======================
    event.addLootTableModifier("cwi:chests/misc/rich")
        .pool(pool => {
            pool.rolls(3)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:glass_powder")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:bone_meal")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:coal_powder")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:charcoal_powder")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rustic_iron_nugget")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rustic_iron_rod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rustic_iron_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:leather")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:feather")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:clay_ball")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:brick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:candle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:flower_pot")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:painting")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.02)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.008)
            pool.addWeightedLoot(BANNER_PATTERNS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.003)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/misc/normal")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:glass_powder")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bone_meal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:coal_powder")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:charcoal_powder")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rustic_iron_nugget")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rustic_iron_rod")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rustic_iron_wire")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:leather")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:feather")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:clay_ball")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:brick")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:candle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/misc/poor")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:glass_powder")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:bone_meal")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:coal_powder")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:charcoal_powder")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rustic_iron_nugget")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("kubejs:rustic_iron_rod")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("kubejs:rustic_iron_wire")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:leather")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:feather")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:string")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("kubejs:net")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:clay_ball")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:brick")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.001)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
})