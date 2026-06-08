global.put("BuddingCatalystRecipes", [])

function addBuddingRecipe(id, fluidInput, blockInput, outputs) {
    global.get("BuddingCatalystRecipes").push({
        id: id,
        fluidInput: fluidInput,
        blockInput: blockInput,
        outputs: outputs
    })
}

addBuddingRecipe(
    "cwi:amethyst_catalyst",
    [
        { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
        { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
        { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
    ],
    "minecraft:budding_amethyst",
    [
        "minecraft:small_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:large_amethyst_bud",
        "minecraft:amethyst_cluster"
    ]
)

addBuddingRecipe(
    "cwi:quartz_catalyst",
    [
        { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
        { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
        { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
    ],
    "geode_plus:budding_nether_quartz",
    [
        "geode_plus:small_nether_quartz_bud",
        "geode_plus:medium_nether_quartz_bud",
        "geode_plus:large_nether_quartz_bud",
        "geode_plus:nether_quartz_crystal"
    ]
)

addBuddingRecipe(
    "cwi:infected_amethyst_catalyst",
    [
        { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
        { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
        { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
    ],
    "kubejs:infected_budding_amethyst",
    [
        "minecraft:small_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:large_amethyst_bud",
        "minecraft:amethyst_cluster"
    ]
)

addBuddingRecipe(
    "cwi:infected_quartz_catalyst",
    [
        { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
        { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
        { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
    ],
    "kubejs:infected_budding_quartz",
    [
        "geode_plus:small_nether_quartz_bud",
        "geode_plus:medium_nether_quartz_bud",
        "geode_plus:large_nether_quartz_bud",
        "geode_plus:nether_quartz_crystal"
    ]
)

addBuddingRecipe(
    "cwi:amber_catalyst",
    [
        { id: "minecraft:water", amount: 200, chance: 0.1, multiplier: 1 },
        { id: "tfmg:sulfuric_acid",  amount: 50,  chance: 0.5, multiplier: 1 },
        { id: "tfmg:ethylene", amount: 50, chance: 0.75, multiplier: 1 }
    ],
    "darkerdepths:porous_petrified_log",
    [
        "darkerdepths:amber_cluster"
    ]
)