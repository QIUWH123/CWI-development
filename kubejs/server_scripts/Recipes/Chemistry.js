// ============================================================
// 整合包石化产线 — 最终审定版（含PVC产线）
// 原子守恒·摩尔守恒·蒸馏顺序·工程约束 全部验证通过
//
// 关键物态定义（唯一形态，永不改变）：
//   kubejs:muriatic_acid      液体 (1 mB = 1 mol)
//   kubejs:cracked_naphtha    气体 (2 mB = 1 mol)
//   tfmg:lpg                  气体 (2 mB = 1 mol)
//   tfmg:coal_coke_dust       粉末 (1个 = 125 mol)
//   kubejs:edc                液体 (1 mB = 1 mol)
//   kubejs:vinyl_chloride_monomer 液体 (1 mB = 1 mol)
//   kubejs:nitrous_oxide      气体 (2 mB = 1 mol)
//   其余流体/物品按命名规则推断，粉末/气体/液体形态唯一
// ============================================================

function distillation(event, heat, ingredients, results, processingTime) {
    return event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": ingredients,
        "results": results,
        "processingTime": processingTime,
        "heatRequirement": heat
    })
}

function advancedDistillation(event, ingredients, results) {
    return event.custom({
        "type": "tfmg:distillation",
        "ingredients": ingredients,
        "results": results
    })
}

function coking(event, ingredients, results, processingTime) {
    return event.custom({
        "type": "tfmg:coking",
        "ingredients": [ingredients],
        "processingTime": processingTime,
        "results": results
    })
}

function vatRecipe(event, heatRequirement, machines, allowedVatTypes, minSize, ingredients, results, processingTime) {
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
    var recipe = {
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": allowedVatTypes,
        "ingredients": expandedIngredients,
        "machines": machines,
        "minSize": minSize,
        "processingTime": processingTime,
        "results": results
    }
    if (heatRequirement) recipe.heatRequirement = heatRequirement
    return event.custom(recipe)
}

ServerEvents.recipes(event => {

// ============================================================
// 第一部分：Create 混合
// ============================================================

    event.recipes.create.mixing('kubejs:pyrite_powder', [
        '2x tfmg:sulfur_dust',
        'kubejs:iron_powder'
    ]).heated()

    event.recipes.create.mixing('kubejs:caustic_soda_powder', Fluid.of('kubejs:caustic_soda', 125)).heated()
    event.recipes.create.mixing('ratatouille:salt', Fluid.of('kubejs:salt_solution', 125)).heated()
    event.recipes.create.mixing('minecraft:sugar', Fluid.of('kubejs:syrup', 125)).heated()
    event.recipes.create.mixing('tfmg:nitrate_dust', Fluid.of('kubejs:nitrate_solution', 125)).heated()

    event.recipes.create.mixing(Fluid.of('kubejs:caustic_soda', 125), [
        'kubejs:caustic_soda_powder',
        Fluid.of('kubejs:distilled_water', 125)
    ])
    event.recipes.create.mixing(Fluid.of('kubejs:syrup', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'minecraft:sugar'
    ])
    event.recipes.create.mixing(Fluid.of('kubejs:salt_solution', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'ratatouille:salt'
    ])
    event.recipes.create.mixing(Fluid.of('kubejs:raw_brine', 125), [
        AddFluid('125 #cwi:water'),
        'kubejs:halite_powder'
    ])
    event.recipes.create.mixing(Fluid.of('kubejs:ferric_chloride', 125), [
        Fluid.of('kubejs:chlorine', 375),
        'kubejs:iron_powder'
    ])
    event.recipes.create.mixing(Fluid.of('kubejs:nitrate_solution', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'tfmg:nitrate_dust'
    ])

    event.recipes.create.mixing('kubejs:chlorine_copper_catalyst', [
        'kubejs:copper_powder',
        Fluid.of('kubejs:chlorine', 250)
    ]).heated()
    event.recipes.create.mixing('kubejs:nickel_catalyst', [
        'kubejs:nickel_powder',
        'kubejs:alumina_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:cobalt_catalyst', [
        'kubejs:cobalt_powder',
        'kubejs:alumina_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:iron_catalyst', [
        'kubejs:iron_powder',
        'kubejs:alumina_powder',
        'kubejs:potassium_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:platinum_catalyst', [
        'kubejs:platinum_powder',
        'kubejs:alumina_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:sulfur_copper_catalyst', [
        'kubejs:copper_powder',
        'kubejs:zinc_powder',
        'tfmg:sulfur_dust'
    ]).heated()
    event.recipes.create.mixing('kubejs:dehydrogenation_catalyst', [
        'kubejs:iron_oxide_powder',
        'kubejs:chromium_oxide_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:oxidation_catalyst', [
        'kubejs:cobalt_powder',
        'kubejs:manganese_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:silver_catalyst', [
        'kubejs:silver_powder',
        'kubejs:alumina_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:phosphoric_acid_catalyst', [
        'kubejs:phosphate_powder',
        Fluid.of('kubejs:sulfuric_acid', 50)
    ]).heated()
    event.recipes.create.mixing('kubejs:zeolite_catalyst', [
        'kubejs:zeolite_powder',
        'kubejs:alumina_powder'
    ]).heated()

    event.recipes.create.mixing('kubejs:alumina_powder', [
        '2x kubejs:aluminum_powder',
        Fluid.of('kubejs:oxygen', 375)
    ]).heated()

// ============================================================
// 第二部分：柴油发电机蒸馏器（水 → 蒸汽）
// ============================================================

    distillation(event, "heated",
        [ AddFluid('125 kubejs:distilled_water') ],
        [ AddFluid('250 kubejs:steam') ],
        150
    )
    distillation(event, "superheated",
        [ AddFluid('125 kubejs:distilled_water') ],
        [ AddFluid('250 kubejs:steam') ],
        75
    )
    distillation(event, "heated",
        [ AddFluid('125 minecraft:water') ],
        [ AddFluid('250 kubejs:steam') ],
        200
    )
    distillation(event, "superheated",
        [ AddFluid('125 minecraft:water') ],
        [ AddFluid('250 kubejs:steam') ],
        100
    )

// ============================================================
// 第三部分：tfmg 蒸馏塔（物理分离）
// ============================================================

    advancedDistillation(event,
        [ AddFluid('2000 minecraft:water') ],
        [ AddFluid('4000 kubejs:steam') ]
    )
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:distilled_water') ],
        [ AddFluid('4000 kubejs:steam') ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 kubejs:condensed_air') ],
        [
            AddFluid('800 kubejs:oxygen'),
            AddFluid('125 kubejs:argon'),
            AddFluid('3075 kubejs:nitrogen')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 kubejs:natural_gas') ],
        [
            AddFluid('1925 kubejs:natural_gas_depleted'),
            AddFluid('75 kubejs:helium')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 kubejs:condensed_natural_gas') ],
        [
            AddFluid('600 tfmg:propane'),
            AddFluid('1000 kubejs:ethane'),
            AddFluid('2400 kubejs:methane')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 tfmg:crude_oil') ],
        [
            AddFluid('950 kubejs:residual_oil'),
            AddFluid('500 kubejs:wax_oil'),
            AddFluid('250 tfmg:diesel'),
            AddFluid('200 tfmg:kerosene'),
            AddFluid('100 tfmg:naphtha')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 kubejs:fcc_effluent') ],
        [
            AddFluid('700 kubejs:slurry_oil'),
            AddFluid('350 tfmg:diesel'),
            AddFluid('700 tfmg:gasoline'),
            AddFluid('150 tfmg:lpg'),
            AddFluid('100 tfmg:propylene'),
            AddFluid('250 kubejs:dry_gas')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('2000 kubejs:visbreaker_effluent') ],
        [
            AddFluid('1600 kubejs:visbreaker_residue'),
            AddFluid('50 kubejs:heavy_fuel_oil'),
            AddFluid('200 tfmg:diesel'),
            AddFluid('100 tfmg:naphtha'),
            AddFluid('100 kubejs:cracked_gas')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('500 kubejs:condensed_cracked_naphtha') ],
        [
            AddFluid('250 kubejs:pyrolysis_gasoline'),
            AddFluid('50 tfmg:propane'),
            AddFluid('100 tfmg:propylene'),
            AddFluid('100 kubejs:ethane'),
            AddFluid('250 tfmg:ethylene')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('600 kubejs:aromatic_mix') ],
        [
            AddFluid('200 kubejs:xylene'),
            AddFluid('200 kubejs:toluene'),
            AddFluid('200 kubejs:benzene')
        ]
    )

    advancedDistillation(event,
        [ AddFluid('200 kubejs:xylene') ],
        [
            AddFluid('75 kubejs:orthoxylene'),
            AddFluid('50 kubejs:metaxylene'),
            AddFluid('75 kubejs:paraxylene')
        ]
    )

// ============================================================
// 第四部分：Vat 化学反应（主产线 + PVC）
// ============================================================

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('1000 kubejs:steam') ],
        [ AddFluid('500 kubejs:distilled_water') ],
        400
    )
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:steam'),
            AddItem('minecraft:blue_ice')
        ],
        [
            AddFluid('500 kubejs:distilled_water'),
            AddItem('minecraft:ice')
        ],
        150
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:natural_gas'),
            AddFluid('500 kubejs:caustic_soda')
        ],
        [
            AddFluid('900 kubejs:purified_natural_gas'),
            AddFluid('100 tfmg:carbon_dioxide'),
            AddFluid('500 kubejs:salt_solution')
        ],
        200
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('minecraft:blue_ice'),
            AddFluid('500 kubejs:purified_natural_gas')
        ],
        [
            AddFluid('250 kubejs:condensed_natural_gas'),
            AddItem('minecraft:ice')
        ],
        100
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('ratatouille:salt'),
            AddFluid('125 kubejs:sulfuric_acid')
        ],
        [
            AddFluid('125 kubejs:muriatic_acid'),
            AddItem('kubejs:sodium_bisulfate_powder')
        ],
        90
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:chlorine_copper_catalyst'),
            AddFluid('1000 kubejs:muriatic_acid'),
            AddFluid('500 kubejs:oxygen')
        ],
        [
            AddItem('kubejs:chlorine_copper_catalyst'),
            AddFluid('1000 kubejs:chlorine'),
            AddFluid('500 minecraft:water')
        ],
        60
    )
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:chlorine_copper_catalyst'),
            AddFluid('4000 kubejs:muriatic_acid'),
            AddFluid('2000 kubejs:oxygen')
        ],
        [
            AddItem('kubejs:chlorine_copper_catalyst'),
            AddFluid('4000 kubejs:chlorine'),
            AddFluid('2000 minecraft:water')
        ],
        100
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:iron_catalyst'),
            AddFluid('200 kubejs:nitrogen'),
            AddFluid('600 tfmg:hydrogen')
        ],
        [
            AddFluid('400 kubejs:ammonia'),
            AddItem('kubejs:iron_catalyst')
        ],
        240
    )
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:iron_catalyst'),
            AddItem('kubejs:iron_catalyst'),
            AddFluid('200 kubejs:nitrogen'),
            AddFluid('600 tfmg:hydrogen')
        ],
        [
            AddFluid('400 kubejs:ammonia'),
            AddItem('kubejs:iron_catalyst'),
            AddItem('kubejs:iron_catalyst')
        ],
        120
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('100 kubejs:ammonia'),
            AddFluid('200 kubejs:oxygen'),
            AddItem('kubejs:platinum_catalyst')
        ],
        [
            AddFluid('50 kubejs:nitric_acid'),
            AddFluid('50 minecraft:water'),
            AddItem('kubejs:platinum_catalyst')
        ],
        100
    )

    vatRecipe(event, null, ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 tfmg:kerosene'),
            AddFluid('250 tfmg:diesel'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        [
            AddFluid('150 kubejs:paraffin_oil'),
            AddFluid('300 kubejs:dewaxed_oil'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        200
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:wax_oil'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        [
            AddFluid('2000 kubejs:fcc_effluent'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        240
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('2000 kubejs:residual_oil') ],
        [ AddFluid('2000 kubejs:visbreaker_effluent') ],
        200
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 tfmg:naphtha'),
            AddItem('kubejs:platinum_catalyst')
        ],
        [
            AddFluid('925 kubejs:reformate'),
            AddFluid('50 tfmg:hydrogen'),
            AddFluid('50 kubejs:coke_oil'),
            AddItem('kubejs:platinum_catalyst')
        ],
        350
    )

    vatRecipe(event, null, ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('925 kubejs:reformate'),
            AddFluid('100 kubejs:ethylene_glycol')
        ],
        [
            AddFluid('600 kubejs:aromatic_mix'),
            AddFluid('325 kubejs:raffinate'),
            AddFluid('100 kubejs:ethylene_glycol')
        ],
        150
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 tfmg:naphtha'),
            AddFluid('200 kubejs:steam')
        ],
        [
            AddFluid('1000 kubejs:cracked_naphtha'),
            AddFluid('200 kubejs:steam')
        ],
        180
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('minecraft:blue_ice'),
            AddFluid('1000 kubejs:cracked_naphtha')
        ],
        [
            AddFluid('500 kubejs:condensed_cracked_naphtha'),
            AddItem('minecraft:ice')
        ],
        100
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('minecraft:blue_ice'),
            AddFluid('1000 tfmg:air')
        ],
        [
            AddFluid('500 kubejs:condensed_air'),
            AddItem('minecraft:ice')
        ],
        200
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('4 minecraft:blue_ice'),
            AddFluid('1000 tfmg:air')
        ],
        [
            AddFluid('500 kubejs:condensed_air'),
            AddItem('4 minecraft:ice')
        ],
        80
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('250 kubejs:benzene'),
            AddFluid('1500 tfmg:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('250 kubejs:cyclohexane'),
            AddItem('kubejs:nickel_catalyst')
        ],
        250
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:cyclohexane'),
            AddFluid('1500 kubejs:oxygen'),
            AddItem('kubejs:cobalt_catalyst')
        ],
        [
            AddFluid('500 kubejs:cyclohexanol'),
            AddFluid('500 kubejs:cyclohexanone'),
            AddFluid('500 minecraft:water'),
            AddItem('kubejs:cobalt_catalyst')
        ],
        300
    )

    vatRecipe(event, null, ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:cyclohexanol'),
            AddFluid('1000 kubejs:nitric_acid')
        ],
        [
            AddFluid('500 kubejs:adipic_acid_solution'),
            AddFluid('1000 kubejs:nitrous_oxide'),
            AddFluid('1000 minecraft:water')
        ],
        100
    )

    vatRecipe(event, "heated", [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:adipic_acid_solution'),
            AddFluid('2000 kubejs:ammonia')
        ],
        [
            AddFluid('500 kubejs:adiponitrile'),
            AddFluid('2000 minecraft:water')
        ],
        200
    )

    vatRecipe(event, "heated", [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:adiponitrile'),
            AddFluid('4000 tfmg:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('500 kubejs:hexamethylenediamine_solution'),
            AddItem('kubejs:nickel_catalyst')
        ],
        250
    )

    vatRecipe(event, "heated", [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:hexamethylenediamine_solution'),
            AddFluid('500 kubejs:adipic_acid_solution')
        ],
        [ AddItem('4 kubejs:nylon_salt_crystal') ],
        120
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('250 kubejs:benzene'),
            AddFluid('500 tfmg:propylene'),
            AddFluid('500 kubejs:oxygen'),
            AddFluid('50 kubejs:sulfuric_acid')
        ],
        [
            AddFluid('250 kubejs:phenol'),
            AddFluid('250 kubejs:acetone'),
            AddFluid('50 kubejs:sulfuric_acid')
        ],
        240
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:phenol'),
            AddFluid('250 kubejs:acetone'),
            AddFluid('50 kubejs:sulfuric_acid')
        ],
        [
            AddItem('2 kubejs:bisphenol_a'),
            AddFluid('250 minecraft:water'),
            AddFluid('50 kubejs:sulfuric_acid')
        ],
        200
    )

    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('375 kubejs:caustic_soda'),
            AddFluid('500 kubejs:chlorine'),
            AddFluid('250 tfmg:propylene')
        ],
        [
            AddFluid('125 kubejs:epichlorohydrin'),
            AddFluid('375 kubejs:salt_solution'),
            AddFluid('250 minecraft:water')
        ],
        280
    )

    vatRecipe(event, null, ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('2 kubejs:bisphenol_a'),
            AddFluid('250 kubejs:epichlorohydrin'),
            AddFluid('250 kubejs:caustic_soda')
        ],
        [
            AddFluid('250 kubejs:epoxy_resin'),
            AddFluid('250 kubejs:salt_solution'),
            AddFluid('250 minecraft:water')
        ],
        200
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('200 tfmg:ethylene') ],
        [ AddFluid('100 kubejs:molten_polyethylene') ],
        80
    )
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 tfmg:ethylene'),
            AddItem('kubejs:zinc_powder')
        ],
        [
            AddFluid('100 kubejs:molten_polyethylene'),
            AddItem('kubejs:zinc_powder')
        ],
        50
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('200 tfmg:propylene') ],
        [ AddFluid('100 kubejs:molten_polypropylene') ],
        120
    )

// ============================================================
// ==== 聚氯乙烯（PVC）产线 ====
// ============================================================

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 tfmg:ethylene'),
            AddFluid('1000 kubejs:chlorine'),
            AddItem('kubejs:iron_catalyst')
        ],
        [
            AddFluid('500 kubejs:edc'),
            AddItem('kubejs:iron_catalyst')
        ],
        120
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:edc') ],
        [
            AddFluid('500 kubejs:vinyl_chloride_monomer'),
            AddFluid('500 kubejs:muriatic_acid')
        ],
        200
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:vinyl_chloride_monomer'),
            AddItem('kubejs:sulfur_copper_catalyst')
        ],
        [
            AddFluid('1000 kubejs:molten_polyvinyl_chloride'),
            AddItem('kubejs:sulfur_copper_catalyst')
        ],
        150
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:vinyl_chloride_monomer'),
            AddItem('kubejs:sulfur_copper_catalyst'),
            AddItem('kubejs:zinc_powder')
        ],
        [
            AddFluid('1000 kubejs:molten_polyvinyl_chloride'),
            AddItem('kubejs:sulfur_copper_catalyst'),
            AddItem('kubejs:zinc_powder')
        ],
        90
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('125 kubejs:paraxylene'),
            AddFluid('750 kubejs:oxygen'),
            AddItem('kubejs:oxidation_catalyst')
        ],
        [
            AddItem('kubejs:terephthalic_acid'),
            AddFluid('250 minecraft:water'),
            AddItem('kubejs:oxidation_catalyst')
        ],
        200
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 tfmg:ethylene'),
            AddFluid('500 kubejs:oxygen'),
            AddFluid('500 minecraft:water'),
            AddItem('kubejs:silver_catalyst')
        ],
        [
            AddFluid('500 kubejs:ethylene_glycol'),
            AddItem('kubejs:silver_catalyst')
        ],
        180
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('2 kubejs:terephthalic_acid'),
            AddFluid('250 kubejs:ethylene_glycol')
        ],
        [
            AddFluid('250 kubejs:molten_pet'),
            AddFluid('500 minecraft:water')
        ],
        350
    )
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('4 kubejs:terephthalic_acid'),
            AddFluid('500 kubejs:ethylene_glycol')
        ],
        [
            AddFluid('500 kubejs:molten_pet'),
            AddFluid('1000 minecraft:water')
        ],
        200
    )

// ============================================================
// 第五部分：副产物化工利用
// ============================================================

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:slurry_oil') ],
        [
            AddItem('tfmg:coal_coke_dust'),
            AddFluid('125 tfmg:diesel'),
            AddFluid('125 tfmg:naphtha'),
            AddFluid('250 kubejs:cracked_gas')
        ],
        300
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:visbreaker_residue') ],
        [
            AddItem('tfmg:coal_coke_dust'),
            AddFluid('125 tfmg:diesel'),
            AddFluid('125 tfmg:naphtha'),
            AddFluid('250 kubejs:cracked_gas')
        ],
        280
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('450 kubejs:pyrolysis_gasoline'),
            AddFluid('100 tfmg:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('150 kubejs:benzene'),
            AddFluid('100 kubejs:toluene'),
            AddFluid('100 kubejs:xylene'),
            AddFluid('150 kubejs:raffinate'),
            AddItem('kubejs:nickel_catalyst')
        ],
        200
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:ethane'),
            AddFluid('100 kubejs:steam')
        ],
        [
            AddFluid('500 tfmg:ethylene'),
            AddFluid('500 tfmg:hydrogen'),
            AddFluid('100 kubejs:steam')
        ],
        120
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 kubejs:toluene'),
            AddFluid('400 tfmg:hydrogen'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        [
            AddFluid('200 kubejs:benzene'),
            AddFluid('400 kubejs:methane'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        200
    )

    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 tfmg:propane'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        [
            AddFluid('500 tfmg:propylene'),
            AddFluid('500 tfmg:hydrogen'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        250
    )

    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 tfmg:diesel'),
            AddFluid('200 tfmg:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('300 kubejs:aromatic_solvent'),
            AddFluid('100 tfmg:naphtha'),
            AddItem('kubejs:nickel_catalyst')
        ],
        220
    )
})