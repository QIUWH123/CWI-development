function addFermentingRecipes(event, ingredients, results, processingTime, heatRequirement, types) {
    var base = {
        ingredients: ingredients,
        processingTime: processingTime,
        results: results
    }
    if (heatRequirement) base.heatRequirement = heatRequirement
    types.forEach(function(type) {
        var recipe = {
            type: "createdieselgenerators:" + type + "_fermenting",
            ingredients: base.ingredients,
            processingTime: base.processingTime,
            results: base.results
        };
        if (base.heatRequirement) recipe.heatRequirement = base.heatRequirement
        event.custom(recipe)
    })
}

ServerEvents.recipes(function(event) {

    //general_recipes

    addFermentingRecipes(event,
        [
            { item: "kubejs:raw_soil" },
            { item: "tfmg:nitrate_dust" },
            { item: "minecraft:bone_meal" },
            { tag: "cwi:basic_materials" },
            { fluid: "kubejs:distilled_water", amount: 250 }
        ],
        [
            { item: "minecraft:dirt" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:raw_soil" },
            { fluid: "kubejs:nitrate_solution", amount: 125 },
            { item: "minecraft:bone_meal" },
            { tag: "cwi:basic_materials" },
            { fluid: "kubejs:distilled_water", amount: 125 }
        ],
        [
            { item: "minecraft:dirt" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:raw_soil" },
            { fluid: "kubejs:nitrogen_fertilizer", amount: 100 },
            { tag: "cwi:basic_materials" }
        ],
        [
            { item: "minecraft:dirt" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:bittern", amount: 500 }
        ],
        [
            { item: "ratatouille:salt", count: 3 },
            { item: "biomancy:stone_powder" }
        ],
        300, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "minecraft:water", amount: 500 }
        ],
        [
            { item: "ratatouille:salt", chance: 0.13 },
            { item: "biomancy:stone_powder", chance: 0.6 }
        ],
        300, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:steam", amount: 500 }
        ],
        [
            { fluid: "kubejs:distilled_water", amount: 150 }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "ratatouille:compost_mass" },
            { fluid: "createdieselgenerators:plant_oil", amount: 100 }
        ],
        [
            { item: "ratatouille:compost_residue" },
            { fluid: "ratatouille:bio_gas", amount: 50 },
            { fluid: "ratatouille:compost_tea", amount: 100 }
        ],
        2400, undefined, ['basin', 'bulk']
    );

    //bulk_only

    addFermentingRecipes(event,
        [
            { tag: "minecraft:logs" }
        ],
        [
            { item: "kubejs:charcoal_powder" },
            { fluid: "kubejs:wood_vinegar", amount: 200 },
            { fluid: "ratatouille:bio_gas", amount: 75 }
        ],
        1800, "heated", ['bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "createdieselgenerators:chip_wood_beam" }
        ],
        [
            { item: "kubejs:dark_ash" },
            { item: "kubejs:dark_ash", chance: 0.5 },
            { fluid: "kubejs:wood_vinegar", amount: 60 },
            { fluid: "ratatouille:bio_gas", amount: 30 }
        ],
        1200, "heated", ['bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "createdieselgenerators:chip_wood_block" }
        ],
        [
            { item: "kubejs:dark_ash" },
            { fluid: "kubejs:wood_vinegar", amount: 30 },
            { fluid: "ratatouille:bio_gas", amount: 15 }
        ],
        900, "heated", ['bulk']
    );

    //lichen

    addFermentingRecipes(event,
        [
            { item: "kubejs:soaked_depleted_dirt" },
            { item: "minecraft:glow_lichen" },
            { fluid: "kubejs:distilled_water", amount: 250 }
        ],
        [
            { item: "kubejs:raw_soil" },
            { item: "minecraft:glow_lichen" }
        ],
        1500, undefined, ['basin', 'bulk']
    );

    //fermento_mycetes

    addFermentingRecipes(event,
        [
            { item: "kubejs:powdered_fermento_mycetes" },
            { tag: "createdieselgenerators:fermentable" },
            { fluid: "kubejs:distilled_water", amount: 250 }
        ],
        [
            { item: "kubejs:fermento_mycetes" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { tag: "createdieselgenerators:fermentable" },
            { item: "kubejs:fermento_mycetes" },
            { fluid: "kubejs:distilled_water", amount: 500 }
        ],
        [
            { fluid: "createdieselgenerators:ethanol", amount: 500 },
            { item: "kubejs:fermento_mycetes" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:syrup", amount: 1 },
            { item: "kubejs:fermento_mycetes" },
            { fluid: "kubejs:distilled_water", amount: 5 }
        ],
        [
            { fluid: "createdieselgenerators:ethanol", amount: 5 },
            { item: "kubejs:fermento_mycetes" }
        ],
        4, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:fermento_mycetes" },
            { fluid: "createdieselgenerators:ethanol", amount: 10 }
        ],
        [
            { fluid: "kubejs:acetic_acid", amount: 10 },
            { fluid: "minecraft:water", amount: 2 },
            { item: "kubejs:fermento_mycetes" }
        ],
        50, undefined, ['basin', 'bulk']
    );

    //acidolys_bacillus

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze1" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        100, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze2" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze3" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze4" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67, count: 2 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        400, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze5" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67, count: 3 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        500, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze7" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67, count: 4 },
            { item: "kubejs:bronze_powder", chance: 0.67, count: 2 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        700, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:bronze8" }
        ],
        [
            { item: "kubejs:bronze_powder", chance: 0.67, count: 4 },
            { item: "kubejs:bronze_powder", chance: 0.67, count: 3 },
            { item: "kubejs:bronze_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        800, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron1" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        100, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron2" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron3" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron4" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67, count: 2 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        400, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron5" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67, count: 3 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        500, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron7" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67, count: 4 },
            { item: "kubejs:iron_powder", chance: 0.67, count: 2 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        700, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { tag: "cwi:iron8" }
        ],
        [
            { item: "kubejs:iron_powder", chance: 0.67, count: 4 },
            { item: "kubejs:iron_powder", chance: 0.67, count: 3 },
            { item: "kubejs:iron_powder", chance: 0.67 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        800, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:stone_powder" },
            { item: "kubejs:stone_powder" },
            { item: "kubejs:stone_powder" },
            { item: "kubejs:stone_powder" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:flint_powder", chance: 0.33 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:gravel" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:flint_powder", chance: 0.33 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        450, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:cobblestone" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:flint_powder", chance: 0.33 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:stone" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:flint_powder", chance: 0.33 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        750, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:tuff_powder" },
            { item: "kubejs:tuff_powder" },
            { item: "kubejs:tuff_powder" },
            { item: "kubejs:tuff_powder" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.27 },
            { item: "biomancy:stone_powder", chance: 0.37 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:zinc_powder", chance: 0.09 },
            { item: "kubejs:copper_powder", chance: 0.12 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        150, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:tuff" },
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.27 },
            { item: "biomancy:stone_powder", chance: 0.37 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:zinc_powder", chance: 0.09 },
            { item: "kubejs:copper_powder", chance: 0.12 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        450, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:granite_powder" },
            { item: "kubejs:granite_powder" },
            { item: "kubejs:granite_powder" },
            { item: "kubejs:granite_powder" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.87 },
            { item: "biomancy:stone_powder", chance: 0.09 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:tin_powder", chance: 0.11 },
            { item: "kubejs:iron_powder", chance: 0.14 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        800, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:granite_gravel" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.87 },
            { item: "biomancy:stone_powder", chance: 0.09 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:tin_powder", chance: 0.11 },
            { item: "kubejs:iron_powder", chance: 0.14 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:cobbled_granite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.87 },
            { item: "biomancy:stone_powder", chance: 0.09 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:tin_powder", chance: 0.11 },
            { item: "kubejs:iron_powder", chance: 0.14 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        2000, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:cobbled_granite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.87 },
            { item: "biomancy:stone_powder", chance: 0.09 },
            { item: "kubejs:lead_powder", chance: 0.08 },
            { item: "kubejs:tin_powder", chance: 0.11 },
            { item: "kubejs:iron_powder", chance: 0.14 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        2400, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:diorite_powder" },
            { item: "kubejs:diorite_powder" },
            { item: "kubejs:diorite_powder" },
            { item: "kubejs:diorite_powder" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.67 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:silver_powder", chance: 0.09 },
            { item: "kubejs:iron_powder", chance: 0.13 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        700, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:diorite_gravel" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.67 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:silver_powder", chance: 0.09 },
            { item: "kubejs:iron_powder", chance: 0.13 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1050, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:cobbled_diorite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.67 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:silver_powder", chance: 0.09 },
            { item: "kubejs:iron_powder", chance: 0.13 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1400, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:diorite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.67 },
            { item: "biomancy:stone_powder", chance: 0.17 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:silver_powder", chance: 0.09 },
            { item: "kubejs:iron_powder", chance: 0.13 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1750, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:andesite_powder" },
            { item: "kubejs:andesite_powder" },
            { item: "kubejs:andesite_powder" },
            { item: "kubejs:andesite_powder" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.47 },
            { item: "biomancy:stone_powder", chance: 0.21 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:magnesite_powder", chance: 0.09 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:andesite_gravel" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.47 },
            { item: "biomancy:stone_powder", chance: 0.21 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:magnesite_powder", chance: 0.09 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        900, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:cobbled_andesite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.47 },
            { item: "biomancy:stone_powder", chance: 0.21 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:magnesite_powder", chance: 0.09 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:andesite" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.47 },
            { item: "biomancy:stone_powder", chance: 0.21 },
            { item: "kubejs:nickel_powder", chance: 0.17 },
            { item: "kubejs:magnesite_powder", chance: 0.09 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1500, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:claystone_powder" },
            { item: "kubejs:claystone_powder" },
            { item: "kubejs:claystone_powder" },
            { item: "kubejs:claystone_powder" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.97 },
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:lithium_powder", chance: 0.09 },
            { item: "tfmg:bauxite_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:claystone" }
        ],
        [
            { item: "kubejs:clay_powder", chance: 0.97 },
            { item: "kubejs:clay_powder", chance: 0.67 },
            { item: "kubejs:lithium_powder", chance: 0.09 },
            { item: "tfmg:bauxite_powder", chance: 0.17 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1500, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:basalt_powder" },
            { item: "kubejs:basalt_powder" },
            { item: "kubejs:basalt_powder" },
            { item: "kubejs:basalt_powder" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.21 },
            { item: "tfmg:sulfur_dust", chance: 0.13 },
            { item: "kubejs:magnesite_powder", chance: 0.13 },
            { item: "kubejs:vanadium_powder", chance: 0.21 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:basalt_gravel" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.21 },
            { item: "tfmg:sulfur_dust", chance: 0.13 },
            { item: "kubejs:magnesite_powder", chance: 0.13 },
            { item: "kubejs:vanadium_powder", chance: 0.21 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        900, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:cobbled_basalt" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.21 },
            { item: "tfmg:sulfur_dust", chance: 0.13 },
            { item: "kubejs:magnesite_powder", chance: 0.13 },
            { item: "kubejs:vanadium_powder", chance: 0.21 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "minecraft:basalt" }
        ],
        [
            { item: "kubejs:quartz_powder", chance: 0.21 },
            { item: "tfmg:sulfur_dust", chance: 0.13 },
            { item: "kubejs:magnesite_powder", chance: 0.13 },
            { item: "kubejs:vanadium_powder", chance: 0.21 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1500, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:quartz_powder" }
        ],
        [
            { item: "kubejs:silicon_powder" },
            { item: "kubejs:silicon_powder" },
            { item: "kubejs:silicon_powder", chance: 0.47 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:acidolys_bacillus" },
            { item: "kubejs:quartzite_powder" },
            { item: "kubejs:quartzite_powder" },
            { item: "kubejs:quartzite_powder" },
            { item: "kubejs:quartzite_powder" }
        ],
        [
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:quartz_powder", chance: 0.47 },
            { item: "kubejs:acidolys_bacillus" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    //carbofusor_spirillum

    addFermentingRecipes(event,
        [
            { item: "kubejs:carbofusor_spirillum" },
            { item: "minecraft:coal" },
            { fluid: "minecraft:water", amount: 100 }
        ],
        [
            { fluid: "tfmg:crude_oil", amount: 50 },
            { fluid: "tfmg:carbon_dioxide", amount: 100 },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        150, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        [
            { item: "kubejs:lignite", count: 2 },
            { item: "kubejs:lignite", chance: 0.37 },
            { fluid: "kubejs:methane", amount: 50 },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        1200, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "minecraft:clay" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        [
            { item: "kubejs:lignite", count: 2 },
            { item: "kubejs:lignite", chance: 0.75 },
            { fluid: "kubejs:humic_acid_slurry", amount: 100 },
            { item: "minecraft:clay" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "kubejs:peat" },
            { item: "minecraft:clay" },
            { item: "minecraft:clay" },
            { item: "minecraft:clay" },
            { item: "minecraft:clay" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        [
            { item: "kubejs:lignite", count: 2 },
            { item: "kubejs:lignite", chance: 0.75 },
            { fluid: "kubejs:humic_acid_slurry", amount: 100 },
            { item: "minecraft:clay" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:lignite" },
            { item: "kubejs:lignite" },
            { item: "kubejs:lignite" },
            { item: "kubejs:lignite" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        [
            { item: "kubejs:bituminous_coal", count: 2 },
            { item: "kubejs:bituminous_coal", chance: 0.75 },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        1200, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "kubejs:bituminous_coal" },
            { item: "kubejs:bituminous_coal" },
            { item: "kubejs:bituminous_coal" },
            { item: "kubejs:bituminous_coal" },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        [
            { item: "minecraft:coal", count: 2 },
            { item: "minecraft:coal", chance: 0.75 },
            { fluid: "kubejs:methane", amount: 100 },
            { item: "kubejs:carbofusor_spirillum" }
        ],
        1800, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:syngas", amount: 5 },
            { item: "kubejs:carbofusor_spirillum" },
            { item: "kubejs:iron_catalyst" }
        ],
        [
            { fluid: "kubejs:methanol", amount: 5 },
            { item: "kubejs:carbofusor_spirillum" },
            { item: "kubejs:iron_catalyst" }
        ],
        12, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:syngas", amount: 5 },
            { item: "kubejs:carbofusor_spirillum" },
            { item: "kubejs:sulfur_copper_catalyst" },
            { item: "kubejs:nickel_catalyst" }
        ],
        [
            { fluid: "kubejs:methanol", amount: 5 },
            { item: "kubejs:carbofusor_spirillum" },
            { item: "kubejs:sulfur_copper_catalyst" },
            { item: "kubejs:nickel_catalyst" }
        ],
        6, "heated", ['basin', 'bulk']
    );

    //nitrofix_rhizobium

    addFermentingRecipes(event,
        [
            { fluid: "minecraft:water", amount: 4 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        [
            { fluid: "kubejs:ammonia_solution", amount: 1 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        180, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "minecraft:water", amount: 6 },
            { fluid: "kubejs:syrup", amount: 1 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        [
            { fluid: "kubejs:ammonia_solution", amount: 3 },
            { fluid: "tfmg:carbon_dioxide", amount: 1 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        60, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:ammonia_solution", amount: 1 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        [
            { fluid: "kubejs:nitrate_solution", amount: 1 },
            { item: "kubejs:nitrofix_rhizobium" }
        ],
        20, "heated", ['basin', 'bulk']
    );

    //crystallum_coccus

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:redstone_acid", amount: 1000 },
            { fluid: "kubejs:caustic_soda", amount: 1000 },
            { item: "minecraft:budding_amethyst" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:infected_budding_amethyst" }
        ],
        2400, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:redstone_acid", amount: 1000 },
            { fluid: "kubejs:caustic_soda", amount: 1000 },
            { item: "geode_plus:budding_nether_quartz" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:infected_budding_quartz" }
        ],
        2400, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "minecraft:quartz" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:quartz_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "minecraft:quartz" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:lapis_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "minecraft:lapis_lazuli" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "tfmg:sulfur_dust" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:sulfur" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "minecraft:redstone" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:redstone" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:fluorite_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:fluorite" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:flint_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "minecraft:flint" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:halite_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:halite" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluidTag: "cwi:water", amount: 100 },
            { item: "kubejs:magnesite_powder" },
            { item: "kubejs:crystallum_coccus" }
        ],
        [
            { item: "kubejs:magnesite" },
            { item: "kubejs:crystallum_coccus" }
        ],
        300, undefined, ['basin', 'bulk']
    );

    //putrelys_sporogenes

    addFermentingRecipes(event,
        [
            { item: "ratatouille:compost_mass" },
            { fluid: "createdieselgenerators:plant_oil", amount: 100 },
            { item: "kubejs:putrelys_sporogenes" }
        ],
        [
            { item: "ratatouille:compost_residue" },
            { fluid: "ratatouille:bio_gas", amount: 50 },
            { fluid: "ratatouille:compost_tea", amount: 100 },
            { item: "kubejs:putrelys_sporogenes" }
        ],
        600, undefined, ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "ratatouille:compost_residue" },
            { item: "kubejs:putrelys_sporogenes" }
        ],
        [
            { item: "kubejs:peat" },
            { fluid: "ratatouille:bio_gas", amount: 25 },
            { item: "kubejs:putrelys_sporogenes" }
        ],
        1200, undefined, ['basin', 'bulk']
    );

    //vulcan_thermus

    addFermentingRecipes(event,
        [
            { item: "kubejs:vulcan_thermus" },
            { fluid: "createdieselgenerators:ethanol", amount: 10 },
            { fluid: "kubejs:oxygen", amount: 10 }
        ],
        [
            { fluid: "kubejs:acetic_acid", amount: 10 },
            { fluid: "minecraft:water", amount: 10 },
            { item: "kubejs:vulcan_thermus" }
        ],
        5, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "minecraft:charcoal" },
            { fluid: "minecraft:water", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        [
            { fluid: "kubejs:syngas", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        400, "heated", ['basin', 'bulk']
    );
    
    addFermentingRecipes(event,
        [
            { item: "kubejs:charcoal_powder" },
            { fluid: "minecraft:water", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        [
            { fluid: "kubejs:syngas", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        300, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { item: "tfmg:sulfur_dust" },
            { fluid: "kubejs:oxygen", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        [
            { fluid: "kubejs:sulfur_dioxide", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        200, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:hydrogen_sulfide", amount: 100 },
            { fluid: "kubejs:oxygen", amount: 150 },
            { item: "kubejs:vulcan_thermus" }
        ],
        [
            { fluid: "kubejs:sulfur_dioxide", amount: 100 },
            { fluid: "minecraft:water", amount: 100 },
            { item: "kubejs:vulcan_thermus" }
        ],
        150, "heated", ['basin', 'bulk']
    );

    addFermentingRecipes(event,
        [
            { fluid: "kubejs:bittern", amount: 500 },
            { item: "kubejs:vulcan_thermus" }
        ],
        [
            { item: "ratatouille:salt", count: 8 },
            { fluid: "minecraft:water", amount: 500 },
            { item: "kubejs:vulcan_thermus" }
        ],
        200, "heated", ['basin', 'bulk']
    );

})