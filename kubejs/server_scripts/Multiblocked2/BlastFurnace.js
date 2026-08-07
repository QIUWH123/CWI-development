MBDMachineEvents.onStructureFormed("cwi:blast_furnace", event => {
    const machine = event.getEvent().getMachine()
    const level = machine.getLevel()

    let fireproofBricks = 0
    let reinforcementTotal = 0

    machine.getMultiblockState().getCache().forEach(pos => {
        const block = level.getBlockState(pos).getBlock()

        function equals(target) {
            return block.equals(Block.getBlock(target))
        }

        if (equals('tfmg:fireproof_bricks') || equals('cwi:furnace_hatch')) {
            fireproofBricks++
        } else if (equals('tfmg:blast_furnace_reinforcement') || equals('tfmg:blast_furnace_reinforcement_wall')) {
            reinforcementTotal++
        }
    })

    const parallel = Math.floor(fireproofBricks / 4)
    const processingTime = 20 / (reinforcementTotal + 20)

    machine.customData.putInt('parallel', parallel)
    machine.customData.putFloat('processingTime', processingTime)
})

MBDMachineEvents.onBeforeRecipeModify("cwi:blast_furnace", event => {

    const { machine, recipe } = event.getEvent()

    const parallelCount = machine.customData.getInt('parallel')
    const processingTime = machine.customData.getFloat('processingTime')
    const parallelRecipe = machine.applyParallel(recipe, parallelCount)
    const copyRecipe = parallelRecipe.copy()

    copyRecipe.duration = recipe.duration * processingTime
    event.getEvent().setRecipe(copyRecipe)
})

MBDMachineEvents.onRecipeWorking('cwi:blast_furnace', event => {

    if (globalTickCounter % 2) return

    const machine = event.getEvent().getMachine()
    const level = machine.getLevel()
    const pos = machine.getPos()
    const direction = machine.getFrontFacing().get()
    
    const directionOffsets = {}
    directionOffsets[Direction.NORTH] = [0, 1]
    directionOffsets[Direction.EAST]  = [1, 0]
    directionOffsets[Direction.SOUTH] = [0, -1]
    directionOffsets[Direction.WEST]  = [-1, 0]

    const y = pos.y + machine.customData.getInt('parallel') - 2
    const x = pos.x + 0.5 + directionOffsets[direction][0]
    const z = pos.z + 0.5 + directionOffsets[direction][1]

    if (globalTickCounter % 40 === 0) level.playSound(null, x, y, z, 'ad_astra:rocket', 'blocks', 2, 0.5)
    level.spawnParticles('clanginghowl:flamethrower_burst', true, x + random(-0.3, 0.3), y, z + random(-0.3, 0.3), random(-0.1, 0.1), random(0.1, 0.6), random(-0.1, 0.1), 0, 0.3)
    level.spawnParticles('clanginghowl:flamethrower_burst', true, x + random(-0.3, 0.3), y, z + random(-0.3, 0.3), random(-0.1, 0.1), random(0.1, 0.6), random(-0.1, 0.1), 0, 0.3)
    level.spawnParticles('minecraft:campfire_cosy_smoke', true, x + random(-0.2, 0.2), y, z + random(-0.2, 0.2), random(-0.05, 0.05), random(0.1, 0.15), random(-0.05, 0.05), 0, 0.3)
})

// Blast Furnace Recipes

global.blastFurnaceRecipes = [
    {
        id: 'cwi:industrial_blasting/quartz_to_silicon',
        duration: 30,
        inputItems: [{ "item": "minecraft:quartz" }],
        inputFluids: [],
        outputFluids: [{ "fluid": "tfmg:liquid_silicon", "amount": 90 }]
    },
    {
        id: 'cwi:industrial_blasting/quartz_powder_to_silicon',
        duration: 20,
        inputItems: [{ "item": "kubejs:quartz_powder" }],
        inputFluids: [],
        outputFluids: [{ "fluid": "tfmg:liquid_silicon", "amount": 90 }]
    },
    {
        id: 'cwi:industrial_blasting/magnetite_to_pig_iron',
        duration: 50,
        inputItems: [
            { "item": "kubejs:magnetite" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 180 },
            { "fluid": "tfmg:molten_slag", "amount": 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_powder_to_pig_iron',
        duration: 30,
        inputItems: [
            { "item": "kubejs:iron_powder" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 90 },
            { "fluid": "tfmg:molten_slag", "amount": 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_ingot_to_pig_iron',
        duration: 30,
        inputItems: [
            { "item": "minecraft:iron_ingot" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 90 },
            { "fluid": "tfmg:molten_slag", "amount": 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/crushed_iron_to_pig_iron',
        duration: 30,
        inputItems: [
            { "item": "create:crushed_raw_iron" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 90 },
            { "fluid": "tfmg:molten_slag", "amount": 100 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/raw_iron_to_pig_iron',
        duration: 30,
        inputItems: [
            { "item": "minecraft:raw_iron" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 180 },
            { "fluid": "tfmg:molten_slag", "amount": 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/hematite_to_pig_iron',
        duration: 40,
        inputItems: [
            { "item": "kubejs:hematite" },
            { "item": "kubejs:limestone_powder" }
        ],
        inputFluids: [],
        outputFluids: [
            { "fluid": "kubejs:molten_pig_iron", "amount": 180 },
            { "fluid": "tfmg:molten_slag", "amount": 200 }
        ]
    }
]

// Blast Furnace Recipe Registration

ServerEvents.recipes(event => {
    global.blastFurnaceRecipes.forEach(recipe => {
        let builder = event.recipes.cwi.blast_furnace_processing()
            .id(recipe.id)
            .duration(recipe.duration)

        if (recipe.inputItems) {
            recipe.inputItems.forEach(inp => {
                let str = inp.item
                if (inp.count && inp.count > 1) str = `${inp.count}x ${str}`
                builder.inputItems(str)
            })
        }

        if (recipe.inputFluids && recipe.inputFluids.length > 0) {
            recipe.inputFluids.forEach(f => {
                builder.inputFluids(`${f.fluid} ${f.amount}`)
            })
        }

        if (recipe.outputFluids) {
            recipe.outputFluids.forEach(f => {
                builder.outputFluids(`${f.fluid} ${f.amount}`)
            })
        }
    })
})