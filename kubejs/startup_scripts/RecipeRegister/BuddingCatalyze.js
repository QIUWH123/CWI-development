CreateEvents.spoutHandler(function(event) {

    var DIRECTIONS = ["up", "north", "west", "south", "east", "down"]
    var FACING = "facing"
    function buddingGrow(id, fluidInput, blockInput) {
        var outputs = Array.prototype.slice.call(arguments, 3)
        event.add(id, blockInput, function(block, fluid, simulate) {
            var matched = null
            for (var i = 0; i < fluidInput.length; i++) {
                var cfg = fluidInput[i]
                if (fluid.id === cfg.id && fluid.amount >= cfg.amount) {
                    matched = cfg
                    break
                }
            }
            if (!matched) return 0
            var multiplier = matched.multiplier || 1
            function getNextStageForDir(dirBlock, dir) {
                var id = dirBlock.id
                if (id === "minecraft:air") {
                    return outputs[0] + "[" + FACING + "=" + dir + "]"
                }
                for (var stage = 0; stage < outputs.length; stage++) {
                    if (id === outputs[stage]) {
                        if (stage + 1 >= outputs.length) return null
                        var face = dirBlock.properties.facing
                        return outputs[stage + 1] + "[" + FACING + "=" + face + "]"
                    }
                }
                return null
            }
            function findUpgradableDirections() {
                var upgradable = []
                for (var i = 0; i < DIRECTIONS.length; i++) {
                    var dir = DIRECTIONS[i]
                    var tBlock = block[dir]
                    var nextCmd = getNextStageForDir(tBlock, dir)
                    if (nextCmd !== null) {
                        upgradable.push({ dir: dir, block: tBlock, nextCmd: nextCmd, pos: tBlock.pos })
                    }
                }
                return upgradable
            }
            if (simulate) {
                return findUpgradableDirections().length > 0 ? matched.amount : 0
            }
            var upgradable = findUpgradableDirections()
            if (upgradable.length === 0) return 0
            var pos = block.pos
            var server = block.level.server
            server.runCommandSilent("/playsound create:spout block @a " + pos.x + " " + pos.y + " " + pos.z)
            var attempt = 0
            while (attempt < multiplier && upgradable.length > 0) {
                var randomIndex = Math.floor(Math.random() * upgradable.length)
                var selected = upgradable[randomIndex]
                var success = Math.random() < matched.chance
                if (success) {
                    server.runCommandSilent("/setblock " + selected.pos.x + " " + selected.pos.y + " " + selected.pos.z + " " + selected.nextCmd)
                    var freshBlock = block.level.getBlock(selected.pos)
                    var newNextCmd = getNextStageForDir(freshBlock, selected.dir)
                    if (newNextCmd !== null) {
                        selected.nextCmd = newNextCmd
                        selected.block = freshBlock
                    } else {
                        upgradable.splice(randomIndex, 1)
                    }
                }
                attempt++
            }
            return matched.amount
        })
    }
    
//recipe

    buddingGrow(
        "kubejs:amethyst_evolution",
        [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
        ],
        "minecraft:budding_amethyst",
        "minecraft:small_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:large_amethyst_bud",
        "minecraft:amethyst_cluster"
    )
    
    buddingGrow(
        "kubejs:quartz_evolution",
        [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 1 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 2 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 3 }
        ],
        "geode_plus:budding_nether_quartz",
        "geode_plus:small_nether_quartz_bud",
        "geode_plus:medium_nether_quartz_bud",
        "geode_plus:large_nether_quartz_bud",
        "geode_plus:nether_quartz_crystal"
    )

    buddingGrow(
        "kubejs:infected_amethyst_evolution",
        [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
        ],
        "kubejs:infected_budding_amethyst",
        "minecraft:small_amethyst_bud",
        "minecraft:medium_amethyst_bud",
        "minecraft:large_amethyst_bud",
        "minecraft:amethyst_cluster"
    )
    
    buddingGrow(
        "kubejs:infected_quartz_evolution",
        [
            { id: "minecraft:water", amount: 200, chance: 0.5, multiplier: 2 },
            { id: "minecraft:lava",  amount: 50,  chance: 0.75, multiplier: 4 },
            { id: "kubejs:caustic_soda", amount: 50, chance: 1, multiplier: 6 }
        ],
        "kubejs:infected_budding_quartz",
        "geode_plus:small_nether_quartz_bud",
        "geode_plus:medium_nether_quartz_bud",
        "geode_plus:large_nether_quartz_bud",
        "geode_plus:nether_quartz_crystal"
    )

    buddingGrow(
        "kubejs:amber_evolution",
        [
            { id: "minecraft:water", amount: 200, chance: 0.1, multiplier: 1 },
            { id: "tfmg:sulfuric_acid",  amount: 50,  chance: 0.5, multiplier: 1 },
            { id: "tfmg:ethylene", amount: 50, chance: 0.75, multiplier: 1 }
        ],
        "darkerdepths:porous_petrified_log",
        "darkerdepths:amber_cluster"
    )

})