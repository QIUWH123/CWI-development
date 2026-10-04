ServerEvents.recipes(event => {

// Petri Dish And Agar Plate Recipes

    event.shaped( 'kubejs:empty_petri_dish', [ 'A A', 'BAB' ], { A: 'create:brass_sheet', B: 'create:brass_ingot' })
    event.recipes.create.deploying('kubejs:petri_dish', ['kubejs:empty_petri_dish', 'minecraft:glass_pane'])
    event.recipes.cwi.sterilzing('kubejs:sterile_petri_dish', 'kubejs:petri_dish')

// Microbe Culture Recipes

    global.microbes.forEach(microbe => {
        const name = microbe.name
        const inoculated = `kubejs:inoculated_${name}_petri_dish`
        event.recipes.create.deploying(inoculated, ['kubejs:sterile_petri_dish', `kubejs:${name}`])

        const transition = `kubejs:processing_${name}_petri_dish`

        microbe.variants.forEach(variant => {
            const trait = variant.trait
            // Revival dishes must not feed the active-culture nutrient sequences.
            const variantInoculated = variant.inoculum ? `kubejs:inoculated_${trait}_${name}_petri_dish` : inoculated
            const variantTransition = variant.inoculum ? `kubejs:processing_${trait}_${name}_petri_dish` : transition
            if (variant.inoculum) {
                event.recipes.create.deploying(variantInoculated, ['kubejs:sterile_petri_dish', variant.inoculum])
                    .id(`cwi:microbes_culture/${name}/${trait}_inoculation`)
            }
            const agarPlate = `kubejs:${trait}_${name}_agar_plate`

            curving(event, 'kubejs:capping_head', AddItem(agarPlate), [AddItem(`kubejs:sealed_${trait}_${name}_agar_plate`)])
            curving(event, 'kubejs:capping_head', AddItem(`kubejs:cultured_${trait}_${name}_agar_plate`), [AddItem('kubejs:petri_dish'), AddItem(`${variant.count} kubejs:${name}`)])

            const steps = []
            variant.steps.forEach(step => {
                const count = step.count || 1
                for (let i = 0; i < count; i++) {
                    if (step.type === 'deploying') {
                        let ingredient = step.item
                        if (typeof ingredient === 'object' && ingredient.fluid) {
                            ingredient = Fluid.of(ingredient.fluid, ingredient.amount)
                        }
                        steps.push(event.recipes.create.deploying(variantTransition, [variantTransition, ingredient]))
                    } else if (step.type === 'filling') {
                        steps.push(event.recipes.create.filling(variantTransition, [variantTransition, Fluid.of(step.fluid, step.amount)]))
                    }
                }
            })

            event.recipes.create.sequenced_assembly(agarPlate, variantInoculated, steps)
                .transitionalItem(variantTransition)
                .loops(1)
                .id(`cwi:microbes_culture/${name}/${trait}`)
        })
    })
})
