global.buddingGrowRecipes = [
    {
        id: "kubejs:amethyst_evolution",
        fluidInput: [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
        ],
        blockInput: "minecraft:budding_amethyst",
        outputs: [
            "minecraft:small_amethyst_bud",
            "minecraft:medium_amethyst_bud",
            "minecraft:large_amethyst_bud",
            "minecraft:amethyst_cluster"
        ]
    },
    {
        id: "kubejs:quartz_evolution",
        fluidInput: [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
        ],
        blockInput: "geode_plus:budding_nether_quartz",
        outputs: [
            "geode_plus:small_nether_quartz_bud",
            "geode_plus:medium_nether_quartz_bud",
            "geode_plus:large_nether_quartz_bud",
            "geode_plus:nether_quartz_crystal"
        ]
    },
    {
        id: "kubejs:infected_amethyst_evolution",
        fluidInput: [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
        ],
        blockInput: "kubejs:infected_budding_amethyst",
        outputs: [
            "minecraft:small_amethyst_bud",
            "minecraft:medium_amethyst_bud",
            "minecraft:large_amethyst_bud",
            "minecraft:amethyst_cluster"
        ]
    },
    {
        id: "kubejs:infected_quartz_evolution",
        fluidInput: [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
        ],
        blockInput: "kubejs:infected_budding_quartz",
        outputs: [
            "geode_plus:small_nether_quartz_bud",
            "geode_plus:medium_nether_quartz_bud",
            "geode_plus:large_nether_quartz_bud",
            "geode_plus:nether_quartz_crystal"
        ]
    },
    {
        id: "kubejs:amber_evolution",
        fluidInput: [
            { id: "minecraft:water", amount: 200, chance: 0.1, multiplier: 1 },
            { id: "tfmg:sulfuric_acid",  amount: 50,  chance: 0.5, multiplier: 1 },
            { id: "tfmg:ethylene", amount: 50, chance: 0.75, multiplier: 1 }
        ],
        blockInput: "darkerdepths:porous_petrified_log",
        outputs: [
            "darkerdepths:amber_cluster"
        ]
    }
];

CreateEvents.spoutHandler(function(event) {
    var DIRECTIONS = ["up", "north", "west", "south", "east", "down"];
    var FACING = "facing";

    function buddingGrow(id, fluidInput, blockInput, outputs) {
        event.add(id, blockInput, function(block, fluid, simulate) {
            // 匹配流体
            var matched = null;
            for (var i = 0; i < fluidInput.length; i++) {
                var cfg = fluidInput[i];
                if (fluid.id === cfg.id && fluid.amount >= cfg.amount) {
                    matched = cfg;
                    break;
                }
            }
            if (!matched) return 0;

            var multiplier = matched.multiplier || 1;

            function getNextStageForDir(dirBlock, dir) {
                var id = dirBlock.id;
                if (id === "minecraft:air") {
                    return outputs[0] + "[" + FACING + "=" + dir + "]";
                }
                for (var stage = 0; stage < outputs.length; stage++) {
                    if (id === outputs[stage]) {
                        if (stage + 1 >= outputs.length) return null;
                        var face = dirBlock.properties.facing;
                        return outputs[stage + 1] + "[" + FACING + "=" + face + "]";
                    }
                }
                return null;
            }

            function findUpgradableDirections() {
                var upgradable = [];
                for (var i = 0; i < DIRECTIONS.length; i++) {
                    var dir = DIRECTIONS[i];
                    var tBlock = block[dir];
                    var nextCmd = getNextStageForDir(tBlock, dir);
                    if (nextCmd !== null) {
                        upgradable.push({
                            dir: dir,
                            block: tBlock,
                            nextCmd: nextCmd,
                            pos: tBlock.pos
                        });
                    }
                }
                return upgradable;
            }

            // 模拟检查
            if (simulate) {
                return findUpgradableDirections().length > 0 ? matched.amount : 0;
            }

            // 实际执行
            var upgradable = findUpgradableDirections();
            if (upgradable.length === 0) return 0;

            var pos = block.pos;
            var server = block.level.server;
            server.runCommandSilent("/playsound create:spout block @a " + pos.x + " " + pos.y + " " + pos.z);

            var attempt = 0;
            while (attempt < multiplier && upgradable.length > 0) {
                var randomIndex = Math.floor(Math.random() * upgradable.length);
                var selected = upgradable[randomIndex];
                var success = Math.random() < matched.chance;
                if (success) {
                    server.runCommandSilent(
                        "/setblock " + selected.pos.x + " " + selected.pos.y + " " + selected.pos.z + " " + selected.nextCmd
                    );
                    var freshBlock = block.level.getBlock(selected.pos);
                    var newNextCmd = getNextStageForDir(freshBlock, selected.dir);
                    if (newNextCmd !== null) {
                        selected.nextCmd = newNextCmd;
                        selected.block = freshBlock;
                    } else {
                        upgradable.splice(randomIndex, 1);
                    }
                }
                attempt++;
            }
            return matched.amount;
        });
    }

    var recipes = global.buddingGrowRecipes;
    if (recipes && Array.isArray(recipes)) {
        recipes.forEach(function(recipe) {
            buddingGrow(recipe.id, recipe.fluidInput, recipe.blockInput, recipe.outputs);
        })
    }
})