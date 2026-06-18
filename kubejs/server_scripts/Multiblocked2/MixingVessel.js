global.mixingVesselRecipes = [
    {
        id: 'cwi:mixing_vessel/sulfur_copper_catalyst',
        priority: 1,
        duration: 40,
        inputs: [
            { item: 'tfmg:sulfur_dust', count: 2 },
            { item: 'kubejs:copper_powder' }
        ],
        outputs: [{ item: 'kubejs:sulfur_copper_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/chlorine_copper_catalyst',
        priority: 1,
        duration: 40,
        inputs: [{ item: 'kubejs:copper_powder' }],
        inputFluids: [{ fluid: 'kubejs:chlorine', amount: 250 }],
        outputs: [{ item: 'kubejs:chlorine_copper_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_powder',
        priority: 1,
        duration: 40,
        inputs: [
            { item: 'kubejs:caustic_soda_powder', count: 2 },
            { item: 'kubejs:nickel_powder' }
        ],
        outputs: [{ item: 'kubejs:nickel_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_fluid',
        priority: 1,
        duration: 40,
        inputs: [{ item: 'kubejs:nickel_powder' }],
        inputFluids: [{ fluid: 'kubejs:caustic_soda', amount: 250 }],
        outputs: [{ item: 'kubejs:nickel_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/caustic_soda_fluid',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'kubejs:caustic_soda_powder' }],
        inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
        outputFluids: [{ fluid: 'kubejs:caustic_soda', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/brine_fluid',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'ratatouille:salt' }],
        inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
        outputFluids: [{ fluid: 'kubejs:brine', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/bittern_fluid_from_water',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'kubejs:halite_powder' }],
        inputFluids: [{ fluid: 'minecraft:water', amount: 125 }],
        outputFluids: [{ fluid: 'kubejs:bittern', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/bittern_fluid_from_distilled_water',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'kubejs:halite_powder' }],
        inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
        outputFluids: [{ fluid: 'kubejs:bittern', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/nitrate_solution_fluid',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'tfmg:nitrate_dust' }],
        inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
        outputFluids: [{ fluid: 'kubejs:nitrate_solution', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_sugar',
        priority: 0,
        duration: 40,
        inputs: [
            { item: 'minecraft:sugar' },
            { item: 'createaddition:biomass' }
        ],
        inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 250 }],
        outputFluids: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_syrup',
        priority: 0,
        duration: 40,
        inputs: [{ item: 'createaddition:biomass' }],
        inputFluids: [
            { fluid: 'kubejs:distilled_water', amount: 125 },
            { fluid: 'kubejs:syrup', amount: 125 }
        ],
        outputFluids: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
    },
    {
        id: 'cwi:mixing_vessel/biodiesel_fluid',
        priority: 0,
        duration: 40,
        inputFluids: [
            { fluid: 'createdieselgenerators:ethanol', amount: 50 },
            { fluid: 'createdieselgenerators:plant_oil', amount: 50 }
        ],
        outputFluids: [{ fluid: 'createdieselgenerators:biodiesel', amount: 100 }]
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
                let itemStr = out.item
                if (out.count && out.count > 1) {
                    itemStr = `${out.count}x ${itemStr}`
                }
                builder.outputItems(itemStr)
            })
        }

        if (recipe.outputFluids) {
            recipe.outputFluids.forEach(f => {
                builder.outputFluids(`${f.fluid} ${f.amount}`)
            })
        }
    })
})