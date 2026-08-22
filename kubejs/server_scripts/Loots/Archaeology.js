
//give @s minecraft:suspicious_gravel{BlockEntityTag:{LootTable:"cwi:archaeology/g"}}
//give @s kubejs:suspicious_ash_dirt{BlockEntityTag:{LootTable:"cwi:archaeology/ad"}}
//give @s kubejs:suspicious_depleted_dirt{BlockEntityTag:{LootTable:"cwi:archaeology/dd"}}

LootJS.modifiers((event) => {
    
    event.addLootTableModifier("cwi:archaeology/g")
        .pool(pool => {
            pool.addWeightedLoot([
                Item.of("kubejs:net").withChance(100),
                Item.of("tfmg:rebar").withChance(200),
                Item.of("kubejs:rubber").withChance(200),
                Item.of("kubejs:bottle").withChance(100),
                Item.of("minecraft:name_tag").withChance(50),
                Item.of("tfmg:copper_grenade").withChance(20),
                Item.of("tfmg:zinc_grenade").withChance(20),
                Item.of("tfmg:thermite_grenade").withChance(20),
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
                Item.of("minecraft:plenty_pottery_sherd").withChance(1),
                Item.of("minecraft:sentry_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:vex_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:coast_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:ward_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:snout_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:wayfinder_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:shaper_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:raiser_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:host_armor_trim_smithing_template").withChance(1)
            ])
        })

    event.addLootTableModifier("cwi:archaeology/dd")
        .pool(pool => {
            pool.addWeightedLoot([
                Item.of("kubejs:net").withChance(100),
                Item.of("tfmg:rebar").withChance(200),
                Item.of("kubejs:rubber").withChance(200),
                Item.of("kubejs:bottle").withChance(100),
                Item.of("minecraft:name_tag").withChance(50),
                Item.of("tfmg:copper_grenade").withChance(20),
                Item.of("tfmg:zinc_grenade").withChance(20),
                Item.of("tfmg:thermite_grenade").withChance(20),
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
                Item.of("minecraft:plenty_pottery_sherd").withChance(1),
                Item.of("minecraft:sentry_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:vex_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:coast_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:ward_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:snout_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:wayfinder_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:shaper_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:raiser_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:host_armor_trim_smithing_template").withChance(1)
            ])
        })

    event.addLootTableModifier("cwi:archaeology/ad")
        .pool(pool => {
            pool.addWeightedLoot([
                Item.of("kubejs:net").withChance(100),
                Item.of("tfmg:rebar").withChance(200),
                Item.of("kubejs:rubber").withChance(200),
                Item.of("kubejs:bottle").withChance(100),
                Item.of("minecraft:name_tag").withChance(50),
                Item.of("tfmg:copper_grenade").withChance(20),
                Item.of("tfmg:zinc_grenade").withChance(20),
                Item.of("tfmg:thermite_grenade").withChance(20),
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
                Item.of("minecraft:plenty_pottery_sherd").withChance(1),
                Item.of("minecraft:sentry_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:vex_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:coast_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:ward_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:snout_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:wayfinder_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:shaper_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:raiser_armor_trim_smithing_template").withChance(1),
                Item.of("minecraft:host_armor_trim_smithing_template").withChance(1)
            ])
        })


})