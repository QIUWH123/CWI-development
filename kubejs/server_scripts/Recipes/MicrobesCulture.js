ServerEvents.recipes(event => {

// Petri Dish And Agar Plate Recipes

    event.recipes.create.deploying('kubejs:petri_dish', ['kubejs:empty_petri_dish', 'minecraft:glass_pane'])
    event.recipes.cwi.sterilzing('kubejs:sterile_petri_dish', 'kubejs:petri_dish')

// Microbe Inoculation And Capping

    global.microbes.forEach(microbe => {
        const name = microbe.name
        const inputD  = `kubejs:${name}`
        const outputD = `kubejs:inoculated_${name}_petri_dish`
        event.recipes.create.deploying(outputD, ['kubejs:sterile_petri_dish', inputD])

        microbe.variants.forEach(variant => {
            const input  = `kubejs:${variant.trait}_${name}_agar_plate`
            const output = `kubejs:sealed_${variant.trait}_${name}_agar_plate`
            event.custom({
                "type": "vintageimprovements:curving",
                "itemAsHead": "kubejs:capping_head",
                "ingredients": [{ "item": input }],
                "results": [{ "item": output }]
            })
        })
    })
})

ServerEvents.recipes(event => {
    global.microbes.forEach(microbe => {
        const transition = `kubejs:processing_${microbe.name}_petri_dish`;
        const input = `kubejs:inoculated_${microbe.name}_petri_dish`;

        microbe.variants.forEach(variant => {
            const output = `kubejs:${variant.trait}_${microbe.name}_agar_plate`;
            const steps = [];

            variant.steps.forEach(step => {
                const count = step.count || 1;
                for (let i = 0; i < count; i++) {
                    if (step.type === 'deploying') {
                        let ingredient = step.item;
                        if (typeof ingredient === 'object' && ingredient.fluid) {
                            ingredient = Fluid.of(ingredient.fluid, ingredient.amount);
                        }
                        steps.push(event.recipes.create.deploying(transition, [transition, ingredient]));
                    } else if (step.type === 'filling') {
                        steps.push(event.recipes.create.filling(transition, [transition, Fluid.of(step.fluid, step.amount)]));
                    }
                }
            });

            event.recipes.create.sequenced_assembly(output, input, steps)
                .transitionalItem(transition)
                .loops(1);
        });
    });
});