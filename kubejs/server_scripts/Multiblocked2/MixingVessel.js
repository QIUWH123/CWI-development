// Mixing Vessel Speed Modifier

MBDMachineEvents.onBeforeRecipeModify("cwi:mixing_vessel", (event) => {
    let { machine, recipe } = event.getEvent()
    let partmachine = $IMachine.ofMachine(machine.level, machine.pos).orElse(null)
    let holder = partmachine.machineHolder
    if (holder.speed === 0) return
    let copyRecipe = recipe.copy()
    copyRecipe.duration = Math.max(1, Math.floor(recipe.duration * Math.abs(256 / holder.speed)))
    event.getEvent().setRecipe(copyRecipe)
})

// Mixing Vessel Recipes

global.mixingVesselRecipes = [
    {
        id: 'cwi:mixing_vessel/sulfur_copper_catalyst',
        duration: 20,
        inputs: [
            { item: 'kubejs:sulfur_powder', count: 2 },
            { item: 'kubejs:copper_powder' }
        ],
        outputs: [{ item: 'kubejs:sulfur_copper_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/chlorine_copper_catalyst',
        duration: 20,
        inputs: [
            { item: 'kubejs:copper_powder' },
            { fluid: 'kubejs:chlorine', amount: 250 }
        ],
        outputs: [{ item: 'kubejs:chlorine_copper_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_powder',
        duration: 20,
        inputs: [
            { item: 'kubejs:caustic_soda_powder', count: 2 },
            { item: 'kubejs:nickel_powder' }
        ],
        outputs: [{ item: 'kubejs:nickel_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/nickel_catalyst_from_fluid',
        duration: 20,
        inputs: [
            { item: 'kubejs:nickel_powder' },
            { fluid: 'kubejs:caustic_soda', amount: 250 }
        ],
        outputs: [{ item: 'kubejs:nickel_catalyst' }]
    },
    {
        id: 'cwi:mixing_vessel/caustic_soda_fluid',
        duration: 20,
        inputs: [
            { item: 'kubejs:caustic_soda_powder' },
            { fluid: 'kubejs:distilled_water', amount: 125 }
        ],
        outputs: [{ fluid: 'kubejs:caustic_soda', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/salt_solution_fluid',
        duration: 20,
        inputs: [
            { item: 'ratatouille:salt' },
            { fluid: 'kubejs:distilled_water', amount: 125 }
        ],
        outputs: [{ fluid: 'kubejs:salt_solution', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/raw_brine_fluid_from_water',
        duration: 20,
        inputs: [
            { item: 'kubejs:halite_powder' },
            { fluid: 'minecraft:water', amount: 125 }
        ],
        outputs: [{ fluid: 'kubejs:raw_brine', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/raw_brine_fluid_from_distilled_water',
        duration: 20,
        inputs: [
            { item: 'kubejs:halite_powder' },
            { fluid: 'kubejs:distilled_water', amount: 125 }
        ],
        outputs: [{ fluid: 'kubejs:raw_brine', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/nitrate_solution_fluid',
        duration: 20,
        inputs: [
            { item: 'tfmg:nitrate_dust' },
            { fluid: 'kubejs:distilled_water', amount: 125 }
        ],
        outputs: [{ fluid: 'kubejs:nitrate_solution', amount: 125 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_sugar',
        duration: 20,
        inputs: [
            { item: 'minecraft:sugar' },
            { item: 'createaddition:biomass' },
            { fluid: 'kubejs:distilled_water', amount: 250 }
        ],
        outputs: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
    },
    {
        id: 'cwi:mixing_vessel/bioethanol_syrup',
        duration: 20,
        inputs: [
            { item: 'createaddition:biomass' },
            { fluid: 'kubejs:distilled_water', amount: 125 },
            { fluid: 'kubejs:syrup', amount: 125 }
        ],
        outputs: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
    },
    {
        id: 'cwi:mixing_vessel/biodiesel_fluid',
        duration: 20,
        inputs: [
            { fluid: 'createdieselgenerators:ethanol', amount: 50 },
            { fluid: 'createdieselgenerators:plant_oil', amount: 50 }
        ],
        outputs: [{ fluid: 'createdieselgenerators:biodiesel', amount: 100}]
    }
]

// Mixing Vessel Recipe Registration

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

    global.mixingVesselRecipes.forEach(recipe => {
        let builder = event.recipes.cwi.mixing_vessel_mixing()
            .id(recipe.id)
            .duration(recipe.duration)

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