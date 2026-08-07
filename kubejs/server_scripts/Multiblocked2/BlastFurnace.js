MBDMachineEvents.onStructureFormed("cwi:blast_furnace", event => {
    const { machine } = event.getEvent()
    const level = machine.getLevel()

    let fireproofBricks = 0
    let reinforcementTotal = 0

    machine.getMultiblockState().getCache().forEach(pos => {
        const block = level.getBlockState(pos).getBlock()
        function equals(target) { return block.equals(Block.getBlock(target)) }
        if (equals('tfmg:fireproof_bricks') || equals('cwi:furnace_hatch')) {
            fireproofBricks++
        } else if (equals('tfmg:blast_furnace_reinforcement') || equals('tfmg:blast_furnace_reinforcement_wall')) {
            reinforcementTotal += 2
        } else if (equals('tfmg:rusted_blast_furnace_reinforcement') || equals('tfmg:rusted_blast_furnace_reinforcement_wall')) {
            reinforcementTotal += 1
        }
    })

    const parallel = 2 * Math.floor(fireproofBricks / 4)
    machine.customData.putInt('parallel', parallel)
    machine.customData.putInt('armor', reinforcementTotal)
    machine.customData.putFloat('temperature', 0)
    machine.customData.putString('heat', 'none')
    machine.customData.putInt('heaterHeats', 0)
    machine.customData.putFloat('processingTime', 1.0)
    machine.customData.putInt('lastHeaterHeats', -1)
    machine.customData.putInt('lastArmor', -1)

    Utils.server.tell(`并行:${parallel} 保护值:${reinforcementTotal}`)
})

MBDMachineEvents.onTick('cwi:blast_furnace', event => {
    if (globalTickCounter % 10) return

    const { machine } = event.getEvent()
    const level = machine.getLevel()
    const pos = machine.getPos()

    const backDir = machine.getFrontFacing().get().getOpposite()

    let dx = 0, dz = 0
    if (backDir == Direction.NORTH) { dx = 0; dz = -1 }
    else if (backDir == Direction.SOUTH) { dx = 0; dz = 1 }
    else if (backDir == Direction.EAST) { dx = -1; dz = 0 }
    else if (backDir == Direction.WEST) { dx = 1; dz = 0 }

    const backX = pos.x + dx
    const backZ = pos.z + dz
    const checkY = pos.y - 2

    const checks = [
        [backX, backZ],
        [backX + 1, backZ],
        [backX - 1, backZ],
        [backX, backZ + 1],
        [backX, backZ - 1]
    ]

    let heaterHeats = 0
    let burnerDetails = []
    for (let i = 0; i < checks.length; i++) {
        let cx = checks[i][0], cz = checks[i][1]
        let state = level.getBlockState(new BlockPos(cx, checkY, cz))
        let heatVal = 0
        let heatName = '无'
        if (state.hasProperty($BlazeBurnerBlock.HEAT_LEVEL)) {
            heatName = state.getValue($BlazeBurnerBlock.HEAT_LEVEL).name()
            if (heatName === 'SMOULDERING') heatVal = 1
            else if (heatName === 'KINDLED') heatVal = 2
            else if (heatName === 'SEETHING') heatVal = 3
        }
        heaterHeats += heatVal
        burnerDetails.push(`(${cx},${checkY},${cz}) ${heatName}:${heatVal}`)
    }

    const armor = machine.customData.getInt('armor')
    let temperature = machine.customData.getFloat('temperature')

    const targetTemp = 2400 * Math.pow(heaterHeats / 15, 0.75)
    const armorFactor = (1 - Math.exp(-armor / 40)) / (1 - Math.exp(-126 / 40))
    const maxTemp = 1200 + 1200 * armorFactor
    const effectiveMax = Math.min(targetTemp, maxTemp)

    const lastHH = machine.customData.getInt('lastHeaterHeats')
    const lastArmor = machine.customData.getInt('lastArmor')
    if (heaterHeats === lastHH && armor === lastArmor && Math.abs(temperature - effectiveMax) < 1.5) {
        temperature = effectiveMax
        return
    }

    let currentHeat = 'none'
    if (temperature >= 1900) currentHeat = 'superheated'
    else if (temperature >= 1200) currentHeat = 'heated'

    temperature += (effectiveMax - temperature) * 0.075

    let newHeat = 'none'
    if (temperature >= 1900) newHeat = 'superheated'
    else if (temperature >= 1200) newHeat = 'heated'

    const processingTime = 1 - 0.75 * (temperature / 2400)

    Utils.server.tell(`燃烧室: ${burnerDetails.join(' ')}`)
    Utils.server.tell(`燃烧值:${heaterHeats} 保护值:${armor} (因子:${armorFactor.toFixed(3)})`)
    Utils.server.tell(`目标温度:${targetTemp.toFixed(1)} 结构上限:${maxTemp.toFixed(1)} 有效上限:${effectiveMax.toFixed(1)}`)
    Utils.server.tell(`温度:${temperature.toFixed(1)} 状态:${currentHeat}→${newHeat} 配方速度:${processingTime.toFixed(4)}`)

    machine.customData.putInt('heaterHeats', heaterHeats)
    machine.customData.putFloat('temperature', temperature)
    machine.customData.putString('heat', newHeat)
    machine.customData.putFloat('processingTime', processingTime)
    machine.customData.putInt('lastHeaterHeats', heaterHeats)
    machine.customData.putInt('lastArmor', armor)
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
    if (globalTickCounter % 4) return
    const { machine } = event.getEvent()
    const level = machine.getLevel()
    const pos = machine.getPos()
    const parallelCount = machine.customData.getInt('parallel')
    const temperature = machine.customData.getFloat('temperature')
    const heat = machine.customData.getString('heat')
    const effectMultiplier = Math.sqrt(temperature / 200)
    const dir = machine.getFrontFacing().get()
    let offsetX = 0, offsetZ = 0
    if (dir == Direction.NORTH) { offsetX = 0; offsetZ = 1 }
    else if (dir == Direction.EAST) { offsetX = 1; offsetZ = 0 }
    else if (dir == Direction.SOUTH) { offsetX = 0; offsetZ = -1 }
    else if (dir == Direction.WEST) { offsetX = -1; offsetZ = 0 }
    const y = pos.y + parallelCount / 2 - 2
    const x = pos.x + 0.5 + offsetX
    const z = pos.z + 0.5 + offsetZ

    const flameParticle = (heat === 'none')? 'minecraft:smoke': (heat === 'heated')? 'clanginghowl:flamethrower_flame' : 'clanginghowl:flamethrower_soul_flame'
    for (let i = 0; i < effectMultiplier; i++) {
        level.spawnParticles(flameParticle, true, x, y, z,
            -0.1 + Math.random() * 0.2,
            0.1 + Math.random() * (0.4 * effectMultiplier - 0.1),
            -0.1 + Math.random() * 0.2,
            0, 0.3
        )
    }
    level.spawnParticles('minecraft:campfire_cosy_smoke', true,
        x + (-0.2 + Math.random() * 0.4), y,
        z + (-0.2 + Math.random() * 0.4),
        -0.05 + Math.random() * 0.1,
        0.1 + Math.random() * (0.1 * effectMultiplier - 0.1),
        -0.05 + Math.random() * 0.1,
        0, 0.3
    )
})

// Blast Furnace Recipes

global.blastFurnaceRecipes = [
    {
        id: 'cwi:industrial_blasting/quartz_to_silicon',
        duration: 300,
        inputItems: [{ "item": "minecraft:quartz" }],
        inputFluids: [],
        outputFluids: [{ "fluid": "tfmg:liquid_silicon", "amount": 90 }]
    },
    {
        id: 'cwi:industrial_blasting/quartz_powder_to_silicon',
        duration: 200,
        inputItems: [{ "item": "kubejs:quartz_powder" }],
        inputFluids: [],
        outputFluids: [{ "fluid": "tfmg:liquid_silicon", "amount": 90 }]
    },
    {
        id: 'cwi:industrial_blasting/magnetite_to_pig_iron',
        duration: 500,
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
        duration: 300,
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
        duration: 300,
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
        duration: 300,
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
        duration: 300,
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
        duration: 400,
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