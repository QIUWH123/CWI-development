    const ash = "kubejs:ash"
    const darkAsh = LootEntry.of("kubejs:dark_ash")
        .when((c) => { 
            c.or((or) => {
                or.biome("cwi:smoldering_barren").biome("cwi:molten_caves")
            })
        })

    const BANNER_PATTERNS = [
        Item.of("minecraft:flower_banner_pattern").withChance(1),
        Item.of("minecraft:creeper_banner_pattern").withChance(1),
        Item.of("minecraft:skull_banner_pattern").withChance(1),
        Item.of("minecraft:mojang_banner_pattern").withChance(1),
        Item.of("minecraft:globe_banner_pattern").withChance(1),
        Item.of("minecraft:piglin_banner_pattern").withChance(1)
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
        Item.of("minecraft:host_armor_trim_smithing_template").withChance(1)
    ]
    
//give @s chest{BlockEntityTag:{LootTable:"cwi:chests/"}}

LootJS.modifiers((event) => {

    // ======================= 空箱子 =======================
    event.addLootTableModifier("cwi:chests/empty")
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 1])
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

    // ======================= 焚烧废土特殊变种 =======================
    event.addLootTableModifier("cwi:chests/smoldering/incinerated")
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
            pool.rolls(1)
            pool.addLoot("minecraft:charcoal")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:charcoal_powder")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:coal_powder")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:glass_powder")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:bone_meal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:sulfur_item")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:redstone")
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
            pool.randomChance(0.003)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/smoldering/food_burnt")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("miners_delight:cooked_arthropod")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("miners_delight:baked_spider_leg")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("miners_delight:baked_tentacles")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("miners_delight:smoked_bat_wing")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("miners_delight:baked_cave_carrot")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:rotten_flesh")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("minecraft:bone")
            pool.limitCount([1, 2])
        })

    event.addLootTableModifier("cwi:chests/smoldering/fireproof")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("minecraft:brick")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("tfmg:fire_extinguisher")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("create_new_age:copper_wire")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:glass_bottle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("kubejs:sulfur_item")
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
            pool.randomChance(0.003)
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
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:stick")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("kubejs:rusted_iron_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.75)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([2, 5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("tfmg:screw")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot("kubejs:fine_whetstone")
            pool.limitCount([1, 1])
            pool.damage([0.05, 0.2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addLoot("kubejs:whetstone")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("create:sand_paper")
            pool.limitCount([1, 2])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
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
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("kubejs:rusted_iron_wire")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("tfmg:screw")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.002)
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
            pool.rolls(1)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.05, 0.5])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.001)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    // ======================= 垃圾堆/废品 =======================
    event.addLootTableModifier("cwi:chests/junk/mixed")
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
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("kubejs:rusted_iron_wire")
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
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:feather")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:rotten_flesh")
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
            pool.randomChance(0.2)
            pool.addLoot("minecraft:clay_ball")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:brick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:paper")
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
            pool.randomChance(0.003)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/junk/tools")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rusted_iron_sword")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rusted_iron_pickaxe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rusted_iron_axe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:rusted_iron_shovel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:stone_axe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:stone_pickaxe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:stone_shovel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })

    event.addLootTableModifier("cwi:chests/junk/rare")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addWeightedLoot(BANNER_PATTERNS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.04)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("minecraft:flower_pot")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("minecraft:candle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.03)
            pool.addLoot("minecraft:painting")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.02)
            pool.addLoot("minecraft:bell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.02)
            pool.addLoot("minecraft:nautilus_shell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addLoot("minecraft:skeleton_skull")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addLoot("minecraft:fishing_rod")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addLoot("minecraft:bucket")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.01)
            pool.addLoot("minecraft:emerald")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.02)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 1])
        })

    // ======================= 矿井 =======================
    event.addLootTableModifier("cwi:chests/mine/tools")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.8)
            pool.addLoot("kubejs:rusted_iron_pickaxe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_axe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_shovel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("minecraft:stone_pickaxe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("minecraft:stone_axe")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:torch")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:lantern")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:flint_and_steel")
            pool.limitCount([1, 1])
            pool.damage([0.1, 0.8])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.6)
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/repair")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rusted_iron_ingot")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("kubejs:rusted_iron_nugget")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_rod")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rusted_iron_wire")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("tfmg:screw")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.6)
            pool.addLoot("kubejs:rubber")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:rail")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:powered_rail")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("minecraft:detector_rail")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("minecraft:activator_rail")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.1)
            pool.addLoot("create:controller_rail")
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/ore/poor")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:raw_iron")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.7)
            pool.addLoot("minecraft:raw_copper")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 2])
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
            pool.addLoot("minecraft:stick")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("minecraft:raw_gold")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("create:raw_zinc")
            pool.limitCount([1, 2])
        })

    event.addLootTableModifier("cwi:chests/mine/ore/rich")
        .pool(pool => {
            pool.rolls(3)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:raw_iron")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.8)
            pool.addLoot("minecraft:raw_copper")
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:raw_gold")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("create:raw_zinc")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("tfmg:raw_nickel")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("tfmg:raw_lead")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("tfmg:raw_lithium")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.4)
            pool.addLoot("kubejs:raw_tin")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("kubejs:raw_silver")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.6)
            pool.addLoot("create:crushed_raw_iron")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(2)
            pool.randomChance(0.6)
            pool.addLoot("create:crushed_raw_copper")
            pool.limitCount([1, 3])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("create:crushed_raw_gold")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.3)
            pool.addLoot("create:crushed_raw_zinc")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("create:crushed_raw_nickel")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addLoot("create:crushed_raw_lead")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.5)
            pool.addLoot("minecraft:coal")
            pool.limitCount([1, 2])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.005)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })

    event.addLootTableModifier("cwi:chests/mine/food")
        .pool(pool => {
            pool.rolls(2)
            pool.addAlternativesLoot(darkAsh, ash)
            pool.limitCount([1, 4])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.addLoot("createdieselgenerators:wood_chip")
            pool.limitCount([1, 2])
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
            pool.randomChance(0.1)
            pool.addWeightedLoot(SMITHING_TEMPLATES)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.2)
            pool.addWeightedLoot(POTTERY_SHERDS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.15)
            pool.addWeightedLoot(BANNER_PATTERNS)
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:name_tag")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:bell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.08)
            pool.addLoot("minecraft:nautilus_shell")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.06)
            pool.addLoot("minecraft:painting")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.06)
            pool.addLoot("minecraft:flower_pot")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.06)
            pool.addLoot("minecraft:candle")
            pool.limitCount([1, 1])
        })
        .pool(pool => {
            pool.rolls(1)
            pool.randomChance(0.05)
            pool.addLoot("minecraft:paper")
            pool.limitCount([1, 1])
        })

})