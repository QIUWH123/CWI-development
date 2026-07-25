ServerEvents.recipes(event => {

    function catalystsRecipe(material) {
        let mat = global.materialTypes.find(m => m.id === material)
        event.shaped( `kubejs:${material}_fan_catalyst_frame`, [ 'ABA', 'B B', 'ABA' ], { A: mat.items.sheet, B: mat.items.rod } )
        
        event.recipes.create.deploying(`kubejs:${material}_fan_splashing_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'kubejs:distilled_water_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_splashing_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'minecraft:water_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_blasting_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'minecraft:lava_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_corroding_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'kubejs:sulfuric_acid_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_corroding_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'kubejs:concentrated_sulfuric_acid_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_sterilizing_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'createdieselgenerators:ethanol_bucket'])
        event.recipes.create.deploying(`kubejs:${material}_fan_smoking_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'minecraft:campfire'])
        event.recipes.create.deploying(`kubejs:${material}_fan_haunting_catalyst`, [`kubejs:${material}_fan_catalyst_frame`, 'minecraft:soul_campfire'])
    }

    catalystsRecipe('brass')
    catalystsRecipe('iron')
    catalystsRecipe('industrial_iron')
    catalystsRecipe('cast_iron')
    catalystsRecipe('steel')
    catalystsRecipe('aluminum')

})