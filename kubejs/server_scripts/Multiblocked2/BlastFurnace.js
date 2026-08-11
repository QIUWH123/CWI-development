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
    machine.customData.putString('heat', 'smouldering')
    machine.customData.putInt('heaterHeats', 0)
    machine.customData.putFloat('processingTime', 1.0)
    machine.customData.putInt('lastHeaterHeats', -1)
    machine.customData.putInt('lastArmor', -1)
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
    else if (backDir == Direction.EAST) { dx = 1; dz = 0 }
    else if (backDir == Direction.WEST) { dx = -1; dz = 0 }

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
    for (let i = 0; i < checks.length; i++) {
        let cx = checks[i][0], cz = checks[i][1]
        let state = level.getBlockState(new BlockPos(cx, checkY, cz))

        if (state.hasProperty($BlazeBurnerBlock.HEAT_LEVEL)) {
            let heatName = state.getValue($BlazeBurnerBlock.HEAT_LEVEL).name()
            if (heatName === 'SMOULDERING') heaterHeats += 1
            else if (heatName === 'KINDLED') heaterHeats += 2
            else if (heatName === 'SEETHING') heaterHeats += 3
        } else if (level.getBlock(new BlockPos(cx, checkY, cz)).hasTag('create:passive_boiler_heaters')) {
            heaterHeats += 1
        }
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
        machine.customData.putFloat('temperature', effectiveMax)
        Utils.server.tell(`Temp: ${effectiveMax}`)
        return
    }

    temperature += (effectiveMax - temperature) * 0.05

    let newHeat = 'none'
    if (temperature >= 1900) newHeat = 'superheated'
    else if (temperature >= 1200) newHeat = 'heated'
    else if (temperature >= 300) newHeat = 'smouldering'

    const processingTime = 1 - 0.75 * (temperature / 2400)

    Utils.server.tell('')
    Utils.server.tell('----------------------------------------')
    Utils.server.tell('')
    Utils.server.tell(`HeatingLevel: ${heaterHeats}`)
    Utils.server.tell(`HeaterMaxTemp: ${targetTemp}`)
    Utils.server.tell(`EffectiveMax: ${effectiveMax}`)
    Utils.server.tell(`CurrentTemp: ${temperature}`)
    Utils.server.tell(`MachineHeat: ${newHeat}`)
    Utils.server.tell(`ProcessingTime: ${processingTime}`)
    Utils.server.tell(`Reinforcement: ${armor}`)

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
    else if (dir == Direction.EAST) { offsetX = -1; offsetZ = 0 }
    else if (dir == Direction.SOUTH) { offsetX = 0; offsetZ = -1 }
    else if (dir == Direction.WEST) { offsetX = 1; offsetZ = 0 }

    const y = pos.y + parallelCount / 2 - 2
    const x = pos.x + 0.5 + offsetX
    const z = pos.z + 0.5 + offsetZ

    if (temperature < 60) return
    level.spawnParticles(
        'minecraft:campfire_cosy_smoke', true,
        x + (-0.2 + Math.random() * 0.4), y,
        z + (-0.2 + Math.random() * 0.4),
        -0.05 + Math.random() * 0.1,
        0.1 + Math.random() * (0.1 * effectMultiplier - 0.1),
        -0.05 + Math.random() * 0.1,
        0, 0.3
    )

    if (temperature < 300) return

    let flameParticle
    if (heat === 'smouldering') flameParticle = 'minecraft:smoke'
    else if (heat === 'heated') flameParticle = 'clanginghowl:flamethrower_flame'
    else flameParticle = 'clanginghowl:flamethrower_soul_flame'

    for (let i = 0; i < effectMultiplier; i++) {
        level.spawnParticles(
            flameParticle, true, x, y, z,
            -0.1 + Math.random() * 0.2,
            0.1 + Math.random() * (0.4 * effectMultiplier - 0.1),
            -0.1 + Math.random() * 0.2,
            0, 0.3
        )
    }
})

// Blast Furnace Recipes

global.blastFurnaceRecipes = [
    {
        id: 'cwi:industrial_blasting/quartz_to_silicon',
        duration: 300,
        heat: 'superheated',
        inputs: [{ item: 'minecraft:quartz' }],
        outputs: [{ fluid: 'tfmg:liquid_silicon', amount: 90 }]
    },
    {
        id: 'cwi:industrial_blasting/quartz_powder_to_silicon',
        duration: 200,
        heat: 'superheated',
        inputs: [{ item: 'kubejs:quartz_powder' }],
        outputs: [{ fluid: 'tfmg:liquid_silicon', amount: 90 }]
    },
    {
        id: 'cwi:industrial_blasting/magnetite_to_pig_iron',
        duration: 500,
        heat: 'superheated',
        inputs: [
            { item: 'kubejs:magnetite' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_powder_to_pig_iron',
        duration: 300,
        heat: 'superheated',
        inputs: [
            { item: 'kubejs:iron_powder' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_ingot_to_pig_iron',
        duration: 300,
        heat: 'superheated',
        inputs: [
            { item: 'minecraft:iron_ingot' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/crushed_iron_to_pig_iron',
        duration: 300,
        heat: 'superheated',
        inputs: [
            { item: 'create:crushed_raw_iron' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 100 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/raw_iron_to_pig_iron',
        duration: 300,
        heat: 'superheated',
        inputs: [
            { item: 'minecraft:raw_iron' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/hematite_to_pig_iron',
        duration: 400,
        heat: 'superheated',
        inputs: [
            { item: 'kubejs:hematite' },
            { item: 'kubejs:limestone_powder' }
        ],
        outputs: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    }
]

ServerEvents.recipes(event => {
    const applyConditional = (builder, ingredientString, chance, perTick, setter) => {
        if (perTick) {
            builder.perTick(tickBuilder => applyConditional(tickBuilder, ingredientString, chance, false, setter))
        } else if (chance) {
            builder.chance(chance, chanceBuilder => setter(chanceBuilder, ingredientString))
        } else {
            setter(builder, ingredientString)
        }
    }

    const heatLevels = ['smouldering', 'heated', 'superheated']

    global.blastFurnaceRecipes.forEach(recipe => {
        const startIndex = heatLevels.indexOf(recipe.heat)
        if (startIndex === -1) {
            console.warn(`[Blast Furnace] 配方 ${recipe.id} 的 heat 值无效: ${recipe.heat}，跳过注册`)
            return
        }

        const levelsToRegister = heatLevels.slice(startIndex)

        levelsToRegister.forEach(level => {
            const recipeId = `${recipe.id}_${level}`
            let builder = event.recipes.cwi.blast_furnace_processing()
                .id(recipeId)
                .duration(recipe.duration)

            builder.machineData(NBT.toTag({ heat: level }), true)

            if (recipe.inputs) {
                recipe.inputs.forEach(entry => {
                    if (entry.item) {
                        applyConditional(
                            builder,
                            entry.count > 1 ? `${entry.count}x ${entry.item}` : entry.item,
                            entry.chance,
                            entry.perTick,
                            (target, ingredient) => target.inputItems(ingredient)
                        )
                    } else if (entry.fluid) {
                        applyConditional(
                            builder,
                            `${entry.fluid} ${entry.amount}`,
                            entry.chance,
                            entry.perTick,
                            (target, ingredient) => target.inputFluids(ingredient)
                        )
                    }
                })
            }

            if (recipe.outputs) {
                recipe.outputs.forEach(entry => {
                    if (entry.item) {
                        applyConditional(
                            builder,
                            entry.count > 1 ? `${entry.count}x ${entry.item}` : entry.item,
                            entry.chance,
                            entry.perTick,
                            (target, ingredient) => target.outputItems(ingredient)
                        )
                    } else if (entry.fluid) {
                        applyConditional(
                            builder,
                            `${entry.fluid} ${entry.amount}`,
                            entry.chance,
                            entry.perTick,
                            (target, ingredient) => target.outputFluids(ingredient)
                        )
                    }
                })
            }
        })
    })
})