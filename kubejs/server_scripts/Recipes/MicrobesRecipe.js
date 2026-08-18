// Fermenting Helper

function addFermentingRecipes(event, ingredients, results, processingTime, heatRequirement, types) {
    function expandInput(arr) {
        var out = []
        arr.forEach(function(e) {
            if (e.count && !e.chance) {
                for (var i = 0; i < e.count; i++) {
                    var copy = {}
                    for (var k in e) {
                        if (e.hasOwnProperty(k) && k !== 'count') copy[k] = e[k]
                    }
                    out.push(copy)
                }
            } else {
                out.push(e)
            }
        })
        return out
    }
    var expandedIngredients = expandInput(ingredients)
    types.forEach(function(type) {
        var recipe = {
            type: "createdieselgenerators:" + type + "_fermenting",
            ingredients: expandedIngredients,
            processingTime: processingTime,
            results: results
        }
        if (heatRequirement) recipe.heatRequirement = heatRequirement
        event.custom(recipe)
    })
}

ServerEvents.recipes(function(event) {

// General Recipes
    addFermentingRecipes(event,
        [
            AddItem('kubejs:raw_soil'),
            AddItem('tfmg:nitrate_dust'),
            AddItem('minecraft:bone_meal'),
            AddItem('#cwi:basic_materials'),
            AddFluid('250 kubejs:distilled_water')
        ],
        [
            AddItem('minecraft:dirt')
        ],
        600, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:raw_soil'),
            AddFluid('125 kubejs:nitrate_solution'),
            AddItem('minecraft:bone_meal'),
            AddItem('#cwi:basic_materials'),
            AddFluid('125 kubejs:distilled_water')
        ],
        [
            AddItem('minecraft:dirt')
        ],
        600, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:raw_soil'),
            AddFluid('100 kubejs:nitrogen_fertilizer'),
            AddItem('#cwi:basic_materials')
        ],
        [
            AddItem('minecraft:dirt')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('500 kubejs:raw_brine')
        ],
        [
            AddItem('3 ratatouille:salt'),
            AddItem('biomancy:stone_powder')
        ],
        300, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('500 minecraft:water')
        ],
        [
            AddItem('ratatouille:salt', 0.13),
            AddItem('biomancy:stone_powder', 0.6)
        ],
        300, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('500 kubejs:steam')
        ],
        [
            AddFluid('150 kubejs:distilled_water')
        ],
        1200, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('ratatouille:compost_mass'),
            AddFluid('100 createdieselgenerators:plant_oil')
        ],
        [
            AddItem('ratatouille:compost_residue'),
            AddFluid('50 ratatouille:bio_gas'),
            AddFluid('100 ratatouille:compost_tea')
        ],
        2400, undefined, ['basin', 'bulk']
    )

// Bulk Only
    addFermentingRecipes(event,
        [
            AddItem('#minecraft:logs')
        ],
        [
            AddItem('kubejs:charcoal_powder'),
            AddFluid('200 kubejs:wood_vinegar'),
            AddFluid('75 ratatouille:bio_gas')
        ],
        1800, "heated", ['bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('createdieselgenerators:chip_wood_beam')
        ],
        [
            AddItem('kubejs:dark_ash'),
            AddItem('kubejs:dark_ash', 0.5),
            AddFluid('60 kubejs:wood_vinegar'),
            AddFluid('30 ratatouille:bio_gas')
        ],
        1200, "heated", ['bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('createdieselgenerators:chip_wood_block')
        ],
        [
            AddItem('kubejs:dark_ash'),
            AddFluid('30 kubejs:wood_vinegar'),
            AddFluid('15 ratatouille:bio_gas')
        ],
        900, "heated", ['bulk']
    )

// Lichen
    addFermentingRecipes(event,
        [
            AddItem('kubejs:soaked_depleted_dirt'),
            AddItem('minecraft:glow_lichen'),
            AddFluid('250 kubejs:distilled_water')
        ],
        [
            AddItem('kubejs:raw_soil'),
            AddItem('minecraft:glow_lichen')
        ],
        1500, undefined, ['basin', 'bulk']
    )

// Fermento Mycetes
    addFermentingRecipes(event,
        [
            AddItem('kubejs:powdered_fermento_mycetes'),
            AddItem('#createdieselgenerators:fermentable'),
            AddFluid('250 kubejs:distilled_water')
        ],
        [
            AddItem('kubejs:fermento_mycetes')
        ],
        600, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('#createdieselgenerators:fermentable'),
            AddItem('kubejs:fermento_mycetes'),
            AddFluid('500 kubejs:distilled_water')
        ],
        [
            AddFluid('500 createdieselgenerators:ethanol'),
            AddItem('kubejs:fermento_mycetes')
        ],
        600, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('1 kubejs:syrup'),
            AddItem('kubejs:fermento_mycetes'),
            AddFluid('5 kubejs:distilled_water')
        ],
        [
            AddFluid('5 createdieselgenerators:ethanol'),
            AddItem('kubejs:fermento_mycetes')
        ],
        4, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:fermento_mycetes'),
            AddFluid('10 createdieselgenerators:ethanol')
        ],
        [
            AddFluid('10 kubejs:acetic_acid'),
            AddFluid('2 minecraft:water'),
            AddItem('kubejs:fermento_mycetes')
        ],
        50, undefined, ['basin', 'bulk']
    )

// Acidolys Bacillus
    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:deepslate_powder')
        ],
        [
            AddItem('kubejs:clay_powder', 0.67),
            AddItem('kubejs:flint_powder', 0.33),
            AddItem('biomancy:stone_powder', 0.17),
            AddItem('kubejs:acidolys_bacillus')
        ],
        500, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:deepslate_gravel')
        ],
        [
            AddItem('kubejs:clay_powder', 0.67),
            AddItem('kubejs:flint_powder', 0.33),
            AddItem('biomancy:stone_powder', 0.17),
            AddItem('kubejs:acidolys_bacillus')
        ],
        750, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('minecraft:cobbled_deepslate')
        ],
        [
            AddItem('kubejs:clay_powder', 0.67),
            AddItem('kubejs:flint_powder', 0.33),
            AddItem('biomancy:stone_powder', 0.17),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1000, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('minecraft:deepslate')
        ],
        [
            AddItem('kubejs:clay_powder', 0.67),
            AddItem('kubejs:flint_powder', 0.33),
            AddItem('biomancy:stone_powder', 0.17),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1250, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:schist_powder')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.50),
            AddItem('biomancy:stone_powder', 0.20),
            AddItem('kubejs:iron_powder', 0.15),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        650, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:schist_gravel')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.50),
            AddItem('biomancy:stone_powder', 0.20),
            AddItem('kubejs:iron_powder', 0.15),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        975, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_schist')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.50),
            AddItem('biomancy:stone_powder', 0.20),
            AddItem('kubejs:iron_powder', 0.15),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:schist')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.50),
            AddItem('biomancy:stone_powder', 0.20),
            AddItem('kubejs:iron_powder', 0.15),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1625, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:gneiss_powder')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.80),
            AddItem('biomancy:stone_powder', 0.10),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        850, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:gneiss_gravel')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.80),
            AddItem('biomancy:stone_powder', 0.10),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1275, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_gneiss')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.80),
            AddItem('biomancy:stone_powder', 0.10),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1700, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:gneiss')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.80),
            AddItem('biomancy:stone_powder', 0.10),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:nickel_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        2125, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:rhyolite_powder')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.90),
            AddItem('biomancy:stone_powder', 0.05),
            AddItem('kubejs:lithium_powder', 0.05),
            AddItem('kubejs:acidolys_bacillus')
        ],
        850, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:rhyolite_gravel')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.90),
            AddItem('biomancy:stone_powder', 0.05),
            AddItem('kubejs:lithium_powder', 0.05),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1275, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_rhyolite')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.90),
            AddItem('biomancy:stone_powder', 0.05),
            AddItem('kubejs:lithium_powder', 0.05),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1700, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:rhyolite')
        ],
        [
            AddItem('kubejs:quartz_powder', 0.90),
            AddItem('biomancy:stone_powder', 0.05),
            AddItem('kubejs:lithium_powder', 0.05),
            AddItem('kubejs:acidolys_bacillus')
        ],
        2125, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:shale_powder')
        ],
        [
            AddItem('kubejs:clay_powder', 0.60),
            AddItem('kubejs:quartz_powder', 0.30),
            AddItem('kubejs:sulfur_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        350, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:shale_gravel')
        ],
        [
            AddItem('kubejs:clay_powder', 0.60),
            AddItem('kubejs:quartz_powder', 0.30),
            AddItem('kubejs:sulfur_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        525, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_shale')
        ],
        [
            AddItem('kubejs:clay_powder', 0.60),
            AddItem('kubejs:quartz_powder', 0.30),
            AddItem('kubejs:sulfur_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        700, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:shale')
        ],
        [
            AddItem('kubejs:clay_powder', 0.60),
            AddItem('kubejs:quartz_powder', 0.30),
            AddItem('kubejs:sulfur_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        875, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:conglomerate_powder')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:quartz_powder', 0.20),
            AddItem('kubejs:acidolys_bacillus')
        ],
        450, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:conglomerate_gravel')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:quartz_powder', 0.20),
            AddItem('kubejs:acidolys_bacillus')
        ],
        675, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_conglomerate')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:quartz_powder', 0.20),
            AddItem('kubejs:acidolys_bacillus')
        ],
        900, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('darkerdepths:duskrock')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:quartz_powder', 0.20),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1125, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:phyllite_powder')
        ],
        [
            AddItem('kubejs:clay_powder', 0.40),
            AddItem('kubejs:quartz_powder', 0.40),
            AddItem('kubejs:iron_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        450, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:phyllite_gravel')
        ],
        [
            AddItem('kubejs:clay_powder', 0.40),
            AddItem('kubejs:quartz_powder', 0.40),
            AddItem('kubejs:iron_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        675, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_phyllite')
        ],
        [
            AddItem('kubejs:clay_powder', 0.40),
            AddItem('kubejs:quartz_powder', 0.40),
            AddItem('kubejs:iron_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        900, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('darkerdepths:grimestone')
        ],
        [
            AddItem('kubejs:clay_powder', 0.40),
            AddItem('kubejs:quartz_powder', 0.40),
            AddItem('kubejs:iron_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1125, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('4 kubejs:darkslate_powder')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:copper_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        750, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:darkslate_gravel')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:copper_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1125, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('kubejs:cobbled_darkslate')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:copper_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1500, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:acidolys_bacillus'),
            AddItem('darkerdepths:darkslate')
        ],
        [
            AddItem('biomancy:stone_powder', 0.50),
            AddItem('kubejs:clay_powder', 0.30),
            AddItem('kubejs:iron_powder', 0.20),
            AddItem('kubejs:copper_powder', 0.10),
            AddItem('kubejs:acidolys_bacillus')
        ],
        1875, undefined, ['basin', 'bulk']
    )

// Carbofusor Spirillum
    addFermentingRecipes(event,
        [
            AddItem('kubejs:carbofusor_spirillum'),
            AddItem('minecraft:coal'),
            AddFluid('100 minecraft:water')
        ],
        [
            AddFluid('50 tfmg:crude_oil'),
            AddFluid('100 tfmg:carbon_dioxide'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        150, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 kubejs:peat'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        [
            AddItem('2 kubejs:lignite_item'),
            AddItem('kubejs:lignite_item', 0.37),
            AddFluid('50 kubejs:methane'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        1200, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 kubejs:peat'),
            AddItem('minecraft:clay'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        [
            AddItem('2 kubejs:lignite_item'),
            AddItem('kubejs:lignite_item', 0.75),
            AddFluid('100 kubejs:humic_acid_slurry'),
            AddItem('minecraft:clay'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        1200, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 kubejs:peat'),
            AddItem('4 minecraft:clay'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        [
            AddItem('2 kubejs:lignite_item'),
            AddItem('kubejs:lignite_item', 0.75),
            AddFluid('100 kubejs:humic_acid_slurry'),
            AddItem('minecraft:clay'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        1200, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 kubejs:lignite_item'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        [
            AddItem('2 kubejs:bituminous_coal'),
            AddItem('kubejs:bituminous_coal', 0.75),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        1200, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 kubejs:bituminous_coal'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        [
            AddItem('2 minecraft:coal'),
            AddItem('minecraft:coal', 0.75),
            AddFluid('100 kubejs:methane'),
            AddItem('kubejs:carbofusor_spirillum')
        ],
        1800, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('5 kubejs:syngas'),
            AddItem('kubejs:carbofusor_spirillum'),
            AddItem('kubejs:iron_catalyst')
        ],
        [
            AddFluid('5 kubejs:methanol'),
            AddItem('kubejs:carbofusor_spirillum'),
            AddItem('kubejs:iron_catalyst')
        ],
        12, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('5 kubejs:syngas'),
            AddItem('kubejs:carbofusor_spirillum'),
            AddItem('kubejs:sulfur_copper_catalyst'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('5 kubejs:methanol'),
            AddItem('kubejs:carbofusor_spirillum'),
            AddItem('kubejs:sulfur_copper_catalyst'),
            AddItem('kubejs:nickel_catalyst')
        ],
        6, "heated", ['basin', 'bulk']
    )

// Nitrofix Rhizobium
    addFermentingRecipes(event,
        [
            AddFluid('4 minecraft:water'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        [
            AddFluid('1 kubejs:ammonia_solution'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        180, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('6 minecraft:water'),
            AddFluid('1 kubejs:syrup'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        [
            AddFluid('3 kubejs:ammonia_solution'),
            AddFluid('1 tfmg:carbon_dioxide'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        60, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('1 kubejs:ammonia_solution'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        [
            AddFluid('1 kubejs:nitrate_solution'),
            AddItem('kubejs:nitrofix_rhizobium')
        ],
        20, "heated", ['basin', 'bulk']
    )

// Crystallum Coccus
    addFermentingRecipes(event,
        [
            AddFluid('1000 kubejs:redstone_acid'),
            AddFluid('1000 kubejs:caustic_soda'),
            AddItem('minecraft:budding_amethyst'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:infected_budding_amethyst')
        ],
        2400, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('1000 kubejs:redstone_acid'),
            AddFluid('1000 kubejs:caustic_soda'),
            AddItem('geode_plus:budding_nether_quartz'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:infected_budding_quartz')
        ],
        2400, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:amethyst_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('minecraft:amethyst_shard'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:quartz_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('minecraft:quartz'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:lapis_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('minecraft:lapis_lazuli'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:sulfur_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:sulfur_item'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 minecraft:redstone'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:redstone'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:fluorite_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:fluorite'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:flint_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('minecraft:flint'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 #cwi:water'),
            AddItem('2 kubejs:halite_powder'),
            AddItem('kubejs:crystallum_coccus')
        ],
        [
            AddItem('kubejs:halite_item'),
            AddItem('kubejs:crystallum_coccus')
        ],
        300, undefined, ['basin', 'bulk']
    )

// Putrelys Sporogenes
    addFermentingRecipes(event,
        [
            AddItem('ratatouille:compost_mass'),
            AddFluid('100 createdieselgenerators:plant_oil'),
            AddItem('kubejs:putrelys_sporogenes')
        ],
        [
            AddItem('ratatouille:compost_residue'),
            AddFluid('50 ratatouille:bio_gas'),
            AddFluid('100 ratatouille:compost_tea'),
            AddItem('kubejs:putrelys_sporogenes')
        ],
        600, undefined, ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('ratatouille:compost_residue'),
            AddItem('kubejs:putrelys_sporogenes')
        ],
        [
            AddItem('kubejs:peat'),
            AddFluid('25 ratatouille:bio_gas'),
            AddItem('kubejs:putrelys_sporogenes')
        ],
        1200, undefined, ['basin', 'bulk']
    )

// Vulcan Thermus
    addFermentingRecipes(event,
        [
            AddItem('kubejs:vulcan_thermus'),
            AddFluid('10 createdieselgenerators:ethanol'),
            AddFluid('10 kubejs:oxygen')
        ],
        [
            AddFluid('10 kubejs:acetic_acid'),
            AddFluid('10 minecraft:water'),
            AddItem('kubejs:vulcan_thermus')
        ],
        5, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('minecraft:charcoal'),
            AddFluid('100 minecraft:water'),
            AddItem('kubejs:vulcan_thermus')
        ],
        [
            AddFluid('100 kubejs:syngas'),
            AddItem('kubejs:vulcan_thermus')
        ],
        400, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:charcoal_powder'),
            AddFluid('100 minecraft:water'),
            AddItem('kubejs:vulcan_thermus')
        ],
        [
            AddFluid('100 kubejs:syngas'),
            AddItem('kubejs:vulcan_thermus')
        ],
        300, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('kubejs:sulfur_powder'),
            AddFluid('100 kubejs:oxygen'),
            AddItem('kubejs:vulcan_thermus')
        ],
        [
            AddFluid('100 kubejs:sulfur_dioxide'),
            AddItem('kubejs:vulcan_thermus')
        ],
        200, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('100 kubejs:hydrogen_sulfide'),
            AddFluid('150 kubejs:oxygen'),
            AddItem('kubejs:vulcan_thermus')
        ],
        [
            AddFluid('100 kubejs:sulfur_dioxide'),
            AddFluid('100 minecraft:water'),
            AddItem('kubejs:vulcan_thermus')
        ],
        150, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddFluid('500 kubejs:raw_brine'),
            AddItem('kubejs:vulcan_thermus')
        ],
        [
            AddItem('4 ratatouille:salt'),
            AddFluid('500 minecraft:water'),
            AddItem('kubejs:vulcan_thermus')
        ],
        200, "heated", ['basin', 'bulk']
    )
})