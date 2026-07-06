global.mixingVesselRecipes = [
    {
        id: 'cwi:mixing_vessel/sulfur_copper_catalyst',
        priority: 1,
        duration: 20,
        inputs: [
            { "item": "tfmg:sulfur_dust", "count": 2 },
            { "item": "kubejs:copper_powder" }
        ],
        outputs: [{ "item": "kubejs:sulfur_copper_catalyst" }]
    },
    {
        id: 'cwi:mixing_vessel/chlorine_copper_catalyst',
        priority: 1,
        duration: 20,
        inputs: [{ "item": "kubejs:copper_powder" }],
        inputFluids: [{ "fluid": "kubejs:chlorine", "amount": 250 }],
        outputs: [{ "item": "kubejs:chlorine_copper_catalyst" }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_powder',
        priority: 1,
        duration: 20,
        inputs: [
            { "item": "kubejs:caustic_soda_powder", "count": 2 },
            { "item": "kubejs:nickel_powder" }
        ],
        outputs: [{ "item": "kubejs:nickel_catalyst" }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_fluid',
        priority: 1,
        duration: 20,
        inputs: [{ "item": "kubejs:nickel_powder" }],
        inputFluids: [{ "fluid": "kubejs:caustic_soda", "amount": 250 }],
        outputs: [{ "item": "kubejs:nickel_catalyst" }]
    },
    {
        id: 'cwi:mixing_vessel/caustic_soda_fluid',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "kubejs:caustic_soda_powder" }],
        inputFluids: [{ "fluid": "kubejs:distilled_water", "amount": 125 }],
        outputFluids: [{ "fluid": "kubejs:caustic_soda", "amount": 125 }]
    },
    {
        id: 'cwi:mixing_vessel/salt_solution_fluid',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "ratatouille:salt" }],
        inputFluids: [{ "fluid": "kubejs:distilled_water", "amount": 125 }],
        outputFluids: [{ "fluid": "kubejs:salt_solution", "amount": 125 }]
    },
    {
        id: 'cwi:mixing_vessel/raw_brine_fluid_from_water',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "kubejs:halite_powder" }],
        inputFluids: [{ "fluid": "minecraft:water", "amount": 125 }],
        outputFluids: [{ "fluid": "kubejs:raw_brine", "amount": 125 }]
    },
    {
        id: 'cwi:mixing_vessel/raw_brine_fluid_from_distilled_water',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "kubejs:halite_powder" }],
        inputFluids: [{ "fluid": "kubejs:distilled_water", "amount": 125 }],
        outputFluids: [{ "fluid": "kubejs:raw_brine", "amount": 125 }]
    },
    {
        id: 'cwi:mixing_vessel/nitrate_solution_fluid',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "tfmg:nitrate_dust" }],
        inputFluids: [{ "fluid": "kubejs:distilled_water", "amount": 125 }],
        outputFluids: [{ "fluid": "kubejs:nitrate_solution", "amount": 125 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_sugar',
        priority: 0,
        duration: 20,
        inputs: [
            { "item": "minecraft:sugar" },
            { "item": "createaddition:biomass" }
        ],
        inputFluids: [{ "fluid": "kubejs:distilled_water", "amount": 250 }],
        outputFluids: [{ "fluid": "createaddition:bioethanol", "amount": 250 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_syrup',
        priority: 0,
        duration: 20,
        inputs: [{ "item": "createaddition:biomass" }],
        inputFluids: [
            { "fluid": "kubejs:distilled_water", "amount": 125 },
            { "fluid": "kubejs:syrup", "amount": 125 }
        ],
        outputFluids: [{ "fluid": "createaddition:bioethanol", "amount": 250 }]
    },
    {
        id: 'cwi:mixing_vessel/biodiesel_fluid',
        priority: 0,
        duration: 20,
        inputFluids: [
            { "fluid": "createdieselgenerators:ethanol", "amount": 50 },
            { "fluid": "createdieselgenerators:plant_oil", "amount": 50 }
        ],
        outputFluids: [{ "fluid": "createdieselgenerators:biodiesel", "amount": 100 }]
    }
]

ServerEvents.recipes(event => {
    global.mixingVesselRecipes.forEach(recipe => {
        let builder = event.recipes.cwi.mixing_vessel_mixing()
            .id(recipe.id)
            .duration(recipe.duration)

        if (recipe.priority !== undefined) {
            builder.priority(recipe.priority)
        }

        if (recipe.inputs) {
            recipe.inputs.forEach(inp => {
                let itemStr = inp.item
                if (inp.count && inp.count > 1) {
                    itemStr = `${inp.count}x ${itemStr}`
                }
                builder.inputItems(itemStr)
            })
        }

        if (recipe.inputFluids) {
            recipe.inputFluids.forEach(f => {
                builder.inputFluids(`${f.fluid} ${f.amount}`)
            })
        }

        if (recipe.outputs) {
            recipe.outputs.forEach(out => {
                let count = out.count || 1
                if (out.chance !== undefined && out.chance < 1) {
                    builder.chance(out.chance, b => {
                        let itemStr = out.item
                        if (count > 1) itemStr = `${count}x ${itemStr}`
                        b.outputItems(itemStr)
                    })
                } else {
                    let itemStr = out.item
                    if (count > 1) itemStr = `${count}x ${itemStr}`
                    builder.outputItems(itemStr)
                }
            })
        }

        if (recipe.outputFluids) {
            recipe.outputFluids.forEach(f => {
                if (f.chance !== undefined && f.chance < 1) {
                    builder.chance(f.chance, b => b.outputFluids(`${f.fluid} ${f.amount}`))
                } else {
                    builder.outputFluids(`${f.fluid} ${f.amount}`)
                }
            })
        }
    })
})

const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')

MBDMachineEvents.onBeforeRecipeModify("cwi:mixing_vessel", (event) => {
    let { machine, recipe } = event.getEvent()
    let partmachine = $IMachine.ofMachine(machine.level, machine.pos).orElse(null)
    let holder = partmachine.machineHolder
    if (holder.speed === 0) return
    let copyRecipe = recipe.copy()
    copyRecipe.duration = Math.max(1, Math.floor(recipe.duration * Math.abs(256 / holder.speed)))
    event.getEvent().setRecipe(copyRecipe)
})