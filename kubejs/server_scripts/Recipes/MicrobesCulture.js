ServerEvents.recipes(event => {

// Petri Dish And Agar Plate Recipes

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
            const agarPlate = `kubejs:${trait}_${name}_agar_plate`

            event.custom({
                type: 'vintageimprovements:curving',
                itemAsHead: 'kubejs:capping_head',
                ingredients: [{ item: agarPlate }],
                results: [{ item: `kubejs:sealed_${trait}_${name}_agar_plate` }]
            })

            event.custom({
                type: 'vintageimprovements:curving',
                itemAsHead: 'kubejs:capping_head',
                ingredients: [{ item: `kubejs:cultured_${trait}_${name}_agar_plate` }],
                results: [{ item: 'kubejs:petri_dish' }, { item: `kubejs:${name}`, count: variant.count }]
            })

            const steps = []
            variant.steps.forEach(step => {
                const count = step.count || 1
                for (let i = 0; i < count; i++) {
                    if (step.type === 'deploying') {
                        let ingredient = step.item
                        if (typeof ingredient === 'object' && ingredient.fluid) {
                            ingredient = Fluid.of(ingredient.fluid, ingredient.amount)
                        }
                        steps.push(event.recipes.create.deploying(transition, [transition, ingredient]))
                    } else if (step.type === 'filling') {
                        steps.push(event.recipes.create.filling(transition, [transition, Fluid.of(step.fluid, step.amount)]))
                    }
                }
            })

            event.recipes.create.sequenced_assembly(agarPlate, inoculated, steps)
                .transitionalItem(transition)
                .loops(1)
        })
    })
})