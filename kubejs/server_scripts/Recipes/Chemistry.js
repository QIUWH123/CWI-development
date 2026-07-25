// ============================================================
// 整合包石化产线 — 完整融合版（主产线 + 副产物利用）
// 原子守恒·摩尔守恒·蒸馏顺序·工程约束 全部验证通过
//
// 关键物态定义：
//   kubejs:muriatic_acid      液体 (1 mB = 1 mol)
//   kubejs:cracked_naphtha    气体 (2 mB = 1 mol)
//   tfmg:lpg                  气体 (2 mB = 1 mol)
//   kubejs:butadiene          气体 (2 mB = 1 mol)
//   kubejs:petroleum_coke_powder 粉末 (1个 = 125 mol)
// ============================================================

ServerEvents.recipes(event => {

// ============================================================
// 第一部分：Create 混合
// ============================================================

    // --- 基础合成 ---
    // 黄铁矿合成：Fe + 2S → FeS₂
    event.recipes.create.mixing('kubejs:pyrite_powder', [
        '2x tfmg:sulfur_dust',
        'kubejs:iron_powder'
    ]).heated()

    // --- 结晶（溶液→固体，水逸散）---
    event.recipes.create.mixing('kubejs:caustic_soda_powder', Fluid.of('kubejs:caustic_soda', 125)).heated()
    event.recipes.create.mixing('ratatouille:salt', Fluid.of('kubejs:salt_solution', 125)).heated()
    event.recipes.create.mixing('minecraft:sugar', Fluid.of('kubejs:syrup', 125)).heated()
    event.recipes.create.mixing('tfmg:nitrate_dust', Fluid.of('kubejs:nitrate_solution', 125)).heated()

    // --- 溶解（溶质+溶剂→溶液）---
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
        { fluidTag: "cwi:water", amount: 125 },
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

    // --- 催化剂合成（黑箱豁免）---
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
    event.recipes.create.mixing('kubejs:alkylation_catalyst', [
        'kubejs:zeolite_powder',
        'kubejs:phosphoric_acid_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:dehydrogenation_catalyst', [
        'kubejs:iron_oxide_powder',
        'kubejs:chromium_oxide_powder'
    ]).heated()
    event.recipes.create.mixing('kubejs:ammoxidation_catalyst', [
        'kubejs:molybdenum_powder',
        'kubejs:bismuth_powder',
        'kubejs:silica_powder'
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

    // 氧化铝载体（2Al + 3O → Al₂O₃）
    event.recipes.create.mixing('kubejs:alumina_powder', [
        '2x kubejs:aluminum_powder',
        Fluid.of('kubejs:oxygen', 375)
    ]).heated()

// ============================================================
// 第二部分：柴油发电机蒸馏器（水 → 蒸汽）
// ============================================================

    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [ { "fluid": "kubejs:distilled_water", "amount": 125 } ],
        "heatRequirement": "heated",
        "processingTime": 150,
        "results": [ { "fluid": "kubejs:steam", "amount": 250 } ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [ { "fluid": "kubejs:distilled_water", "amount": 125 } ],
        "heatRequirement": "superheated",
        "processingTime": 75,
        "results": [ { "fluid": "kubejs:steam", "amount": 250 } ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [ { "fluid": "minecraft:water", "amount": 125 } ],
        "heatRequirement": "heated",
        "processingTime": 200,
        "results": [ { "fluid": "kubejs:steam", "amount": 250 } ]
    })
    event.custom({
        "type": "createdieselgenerators:distillation",
        "ingredients": [ { "fluid": "minecraft:water", "amount": 125 } ],
        "heatRequirement": "superheated",
        "processingTime": 100,
        "results": [ { "fluid": "kubejs:steam", "amount": 250 } ]
    })

// ============================================================
// 第三部分：tfmg 蒸馏塔（物理分离）
// ============================================================

    // --- 蒸汽 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "minecraft:water", "amount": 2000 } ],
        "results": [ { "fluid": "kubejs:steam", "amount": 4000 } ]
    })
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:distilled_water", "amount": 2000 } ],
        "results": [ { "fluid": "kubejs:steam", "amount": 4000 } ]
    })

    // --- 空气深冷分离 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:condensed_air", "amount": 2000 } ],
        "results": [
            { "fluid": "kubejs:oxygen",   "amount": 800  },
            { "fluid": "kubejs:argon",    "amount": 125  },
            { "fluid": "kubejs:nitrogen", "amount": 3075 }
        ]
    })

    // --- 天然气提氦 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:natural_gas", "amount": 2000 } ],
        "results": [
            { "fluid": "kubejs:natural_gas_depleted", "amount": 1925 },
            { "fluid": "kubejs:helium",               "amount": 75   }
        ]
    })

    // --- 天然气冷凝分离 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:condensed_natural_gas", "amount": 2000 } ],
        "results": [
            { "fluid": "tfmg:propane",   "amount": 600  },
            { "fluid": "kubejs:ethane",  "amount": 1000 },
            { "fluid": "kubejs:methane", "amount": 2400 }
        ]
    })

    // --- 原油常压蒸馏 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "tfmg:crude_oil", "amount": 2000 } ],
        "results": [
            { "fluid": "kubejs:residual_oil", "amount": 950 },
            { "fluid": "kubejs:wax_oil",      "amount": 500 },
            { "fluid": "tfmg:diesel",         "amount": 250 },
            { "fluid": "tfmg:kerosene",       "amount": 200 },
            { "fluid": "tfmg:naphtha",        "amount": 100 }
        ]
    })

    // --- FCC 产物分离（LPG 为气体）---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:fcc_effluent", "amount": 2000 } ],
        "results": [
            { "fluid": "kubejs:slurry_oil", "amount": 700 },
            { "fluid": "tfmg:diesel",       "amount": 350 },
            { "fluid": "tfmg:gasoline",     "amount": 700 },
            { "fluid": "tfmg:lpg",          "amount": 150 },
            { "fluid": "tfmg:propylene",    "amount": 100 },
            { "fluid": "kubejs:dry_gas",    "amount": 250 }
        ]
    })

    // --- 减粘裂化产物分离（渣油最重）---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:visbreaker_effluent", "amount": 2000 } ],
        "results": [
            { "fluid": "kubejs:visbreaker_residue", "amount": 1600 },
            { "fluid": "kubejs:heavy_fuel_oil",     "amount": 50   },
            { "fluid": "tfmg:diesel",               "amount": 200  },
            { "fluid": "tfmg:naphtha",              "amount": 100  },
            { "fluid": "kubejs:cracked_gas",        "amount": 100  }
        ]
    })

    // --- 石脑油蒸汽裂解产物分离 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:condensed_cracked_naphtha", "amount": 500 } ],
        "results": [
            { "fluid": "kubejs:pyrolysis_gasoline", "amount": 250 },
            { "fluid": "kubejs:butadiene",          "amount": 50  },
            { "fluid": "tfmg:propane",              "amount": 50  },
            { "fluid": "tfmg:propylene",            "amount": 100 },
            { "fluid": "kubejs:ethane",             "amount": 100 },
            { "fluid": "tfmg:ethylene",             "amount": 200 }
        ]
    })

    // --- 芳烃混合物精馏 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:aromatic_mix", "amount": 600 } ],
        "results": [
            { "fluid": "kubejs:xylene",  "amount": 200 },
            { "fluid": "kubejs:toluene", "amount": 200 },
            { "fluid": "kubejs:benzene", "amount": 200 }
        ]
    })

    // --- 二甲苯分离 ---
    event.custom({
        "type": "tfmg:distillation",
        "ingredients": [ { "fluid": "kubejs:xylene", "amount": 200 } ],
        "results": [
            { "fluid": "kubejs:orthoxylene", "amount": 75 },
            { "fluid": "kubejs:metaxylene",  "amount": 50 },
            { "fluid": "kubejs:paraxylene",  "amount": 75 }
        ]
    })

// ============================================================
// 第四部分：Vat 化学反应（主产线）
// ============================================================

    // --- 蒸汽冷凝 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [ { "fluid": "kubejs:steam", "amount": 1000 } ],
        "machines": [],
        "minSize": 1,
        "processingTime": 400,
        "results": [ { "fluid": "kubejs:distilled_water", "amount": 500 } ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:steam", "amount": 1000 },
            { "item": "minecraft:blue_ice" }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 150,
        "results": [
            { "fluid": "kubejs:distilled_water", "amount": 500 },
            { "item": "minecraft:ice" }
        ]
    })

    // --- 天然气脱硫 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:natural_gas",  "amount": 1000 },
            { "fluid": "kubejs:caustic_soda", "amount": 500  }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:purified_natural_gas", "amount": 900 },
            { "fluid": "tfmg:carbon_dioxide",         "amount": 100 },
            { "fluid": "kubejs:salt_solution",        "amount": 500 }
        ]
    })

    // --- 天然气冷凝 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "minecraft:blue_ice" },
            { "fluid": "kubejs:purified_natural_gas", "amount": 500 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            { "fluid": "kubejs:condensed_natural_gas", "amount": 250 },
            { "item": "minecraft:ice" }
        ]
    })

    // --- 氯碱循环（muriatic_acid 为液体）---
    // 曼海姆法：NaCl + H₂SO₄ → NaHSO₄ + HCl
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "ratatouille:salt" },
            { "fluid": "kubejs:sulfuric_acid", "amount": 125 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 90,
        "results": [
            { "fluid": "kubejs:muriatic_acid", "amount": 125 },
            { "item": "kubejs:sodium_bisulfate_powder" }
        ]
    })

    // Deacon 法：4HCl + O₂ → 2Cl₂ + 2H₂O (普通版)
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "kubejs:chlorine_copper_catalyst" },
            { "fluid": "kubejs:muriatic_acid", "amount": 1000 },
            { "fluid": "kubejs:oxygen",        "amount": 500  }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 60,
        "results": [
            { "item": "kubejs:chlorine_copper_catalyst" },
            { "fluid": "kubejs:chlorine", "amount": 1000 },
            { "fluid": "minecraft:water",  "amount": 500  }
        ]
    })
    // Deacon 法高产版
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "kubejs:chlorine_copper_catalyst" },
            { "fluid": "kubejs:muriatic_acid", "amount": 4000 },
            { "fluid": "kubejs:oxygen",        "amount": 2000 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            { "item": "kubejs:chlorine_copper_catalyst" },
            { "fluid": "kubejs:chlorine", "amount": 4000 },
            { "fluid": "minecraft:water",  "amount": 2000 }
        ]
    })

    // --- 合成氨：N₂ + 3H₂ → 2NH₃ ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "kubejs:iron_catalyst" },
            { "fluid": "kubejs:nitrogen",   "amount": 200 },
            { "fluid": "tfmg:hydrogen",     "amount": 600 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 240,
        "results": [
            { "fluid": "kubejs:ammonia", "amount": 400 },
            { "item": "kubejs:iron_catalyst" }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "kubejs:iron_catalyst" },
            { "item": "kubejs:iron_catalyst" },
            { "fluid": "kubejs:nitrogen", "amount": 200 },
            { "fluid": "tfmg:hydrogen",   "amount": 600 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 120,
        "results": [
            { "fluid": "kubejs:ammonia", "amount": 400 },
            { "item": "kubejs:iron_catalyst" },
            { "item": "kubejs:iron_catalyst" }
        ]
    })

    // --- 硝酸：NH₃ + 2O₂ → HNO₃ + H₂O ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:ammonia", "amount": 100 },
            { "fluid": "kubejs:oxygen",  "amount": 200 },
            { "item": "kubejs:platinum_catalyst" }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            { "fluid": "kubejs:nitric_acid", "amount": 50 },
            { "fluid": "minecraft:water",    "amount": 50 },
            { "item": "kubejs:platinum_catalyst" }
        ]
    })

    // --- 煤油/柴油脱蜡（物理吸附）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "tfmg:kerosene", "amount": 200 },
            { "fluid": "tfmg:diesel",   "amount": 250 },
            { "item": "kubejs:zeolite_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:paraffin_oil", "amount": 150 },
            { "fluid": "kubejs:dewaxed_oil",  "amount": 300 },
            { "item": "kubejs:zeolite_catalyst" }
        ]
    })

    // --- FCC 主反应（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:wax_oil", "amount": 1000 },
            { "item": "kubejs:zeolite_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 240,
        "results": [
            { "fluid": "kubejs:fcc_effluent", "amount": 2000 },
            { "item": "kubejs:zeolite_catalyst" }
        ]
    })

    // --- 减粘裂化（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [ { "fluid": "kubejs:residual_oil", "amount": 2000 } ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [ { "fluid": "kubejs:visbreaker_effluent", "amount": 2000 } ]
    })

    // --- 催化重整 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "tfmg:naphtha", "amount": 1000 },
            { "item": "kubejs:platinum_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 350,
        "results": [
            { "fluid": "kubejs:reformate",  "amount": 925 },
            { "fluid": "tfmg:hydrogen",     "amount": 50  },
            { "fluid": "kubejs:coke_oil",   "amount": 50  },
            { "item": "kubejs:platinum_catalyst" }
        ]
    })

    // --- 芳烃抽提 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:reformate",       "amount": 925 },
            { "fluid": "kubejs:ethylene_glycol", "amount": 100 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 150,
        "results": [
            { "fluid": "kubejs:aromatic_mix",    "amount": 600 },
            { "fluid": "kubejs:raffinate",       "amount": 325 },
            { "fluid": "kubejs:ethylene_glycol", "amount": 100 }
        ]
    })

    // --- 石脑油蒸汽裂解（cracked_naphtha 为气体）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "tfmg:naphtha",   "amount": 500 },
            { "fluid": "kubejs:steam",   "amount": 200 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 180,
        "results": [
            { "fluid": "kubejs:cracked_naphtha", "amount": 1000 },
            { "fluid": "kubejs:steam",           "amount": 200  }
        ]
    })

    // --- 裂解气冷凝 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "minecraft:blue_ice" },
            { "fluid": "kubejs:cracked_naphtha", "amount": 1000 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            { "fluid": "kubejs:condensed_cracked_naphtha", "amount": 500 },
            { "item": "minecraft:ice" }
        ]
    })

    // --- 空气冷凝 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "minecraft:blue_ice" },
            { "fluid": "tfmg:air", "amount": 1000 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:condensed_air", "amount": 500 },
            { "item": "minecraft:ice" }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "minecraft:blue_ice" },
            { "item": "minecraft:blue_ice" },
            { "item": "minecraft:blue_ice" },
            { "item": "minecraft:blue_ice" },
            { "fluid": "tfmg:air", "amount": 1000 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 80,
        "results": [
            { "fluid": "kubejs:condensed_air", "amount": 500 },
            { "item": "minecraft:ice", "count": 4 }
        ]
    })

    // --- 苯加氢 → 环己烷 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:benzene", "amount": 250  },
            { "fluid": "tfmg:hydrogen",  "amount": 1500 },
            { "item": "kubejs:nickel_catalyst" }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 250,
        "results": [
            { "fluid": "kubejs:cyclohexane", "amount": 250 },
            { "item": "kubejs:nickel_catalyst" }
        ]
    })

    // --- KA 油（环己烷氧化）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:cyclohexane", "amount": 1000 },
            { "fluid": "kubejs:oxygen",      "amount": 1500 },
            { "item": "kubejs:cobalt_catalyst" }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 300,
        "results": [
            { "fluid": "kubejs:cyclohexanol",  "amount": 500 },
            { "fluid": "kubejs:cyclohexanone", "amount": 500 },
            { "fluid": "minecraft:water",      "amount": 500 },
            { "item": "kubejs:cobalt_catalyst" }
        ]
    })

    // --- 己二酸（C₆H₁₂O + 2HNO₃ → C₆H₁₀O₄ + N₂O + 2H₂O）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:cyclohexanol", "amount": 500  },
            { "fluid": "kubejs:nitric_acid",  "amount": 1000 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 100,
        "results": [
            { "fluid": "kubejs:adipic_acid_solution", "amount": 500  },
            { "fluid": "kubejs:nitrous_oxide",        "amount": 1000 },
            { "fluid": "minecraft:water",             "amount": 1000 }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:cyclohexanol", "amount": 500  },
            { "fluid": "kubejs:nitric_acid",  "amount": 1000 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 60,
        "results": [
            { "fluid": "kubejs:adipic_acid_solution", "amount": 500  },
            { "fluid": "kubejs:nitrous_oxide",        "amount": 1000 },
            { "fluid": "minecraft:water",             "amount": 1000 }
        ]
    })

    // --- 己二腈 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:adipic_acid_solution", "amount": 500  },
            { "fluid": "kubejs:ammonia",             "amount": 2000 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:adiponitrile", "amount": 500  },
            { "fluid": "minecraft:water",     "amount": 2000 }
        ]
    })

    // --- 己二胺 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:adiponitrile", "amount": 500  },
            { "fluid": "tfmg:hydrogen",       "amount": 4000 },
            { "item": "kubejs:nickel_catalyst" }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 250,
        "results": [
            { "fluid": "kubejs:hexamethylenediamine_solution", "amount": 500 },
            { "item": "kubejs:nickel_catalyst" }
        ]
    })

    // --- 尼龙 66 盐（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:hexamethylenediamine_solution", "amount": 500 },
            { "fluid": "kubejs:adipic_acid_solution",         "amount": 500 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 120,
        "results": [
            { "item": "kubejs:nylon_salt_crystal", "count": 4 }
        ]
    })

    // --- 异丙苯法（苯酚丙酮）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:benzene",       "amount": 250 },
            { "fluid": "tfmg:propylene",       "amount": 500 },
            { "fluid": "kubejs:oxygen",        "amount": 500 },
            { "fluid": "kubejs:sulfuric_acid",   "amount": 50  }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 240,
        "results": [
            { "fluid": "kubejs:phenol",        "amount": 250 },
            { "fluid": "kubejs:acetone",       "amount": 250 },
            { "fluid": "kubejs:sulfuric_acid",   "amount": 50  }
        ]
    })

    // --- 双酚 A（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:phenol",      "amount": 500 },
            { "fluid": "kubejs:acetone",     "amount": 250 },
            { "fluid": "kubejs:sulfuric_acid", "amount": 50  }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "item": "kubejs:bisphenol_a", "count": 2 },
            { "fluid": "minecraft:water",   "amount": 250 },
            { "fluid": "kubejs:sulfuric_acid","amount": 50  }
        ]
    })

    // --- 环氧氯丙烷 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:caustic_soda", "amount": 375 },
            { "fluid": "kubejs:chlorine",     "amount": 500 },
            { "fluid": "tfmg:propylene",      "amount": 250 }
        ],
        "machines": [],
        "minSize": 1,
        "processingTime": 280,
        "results": [
            { "fluid": "kubejs:epichlorohydrin", "amount": 125 },
            { "fluid": "kubejs:salt_solution",   "amount": 375 },
            { "fluid": "minecraft:water",        "amount": 250 }
        ]
    })

    // --- 环氧树脂（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "item": "kubejs:bisphenol_a" },
            { "item": "kubejs:bisphenol_a" },
            { "fluid": "kubejs:epichlorohydrin", "amount": 250 },
            { "fluid": "kubejs:caustic_soda",    "amount": 250 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:epoxy_resin",   "amount": 250 },
            { "fluid": "kubejs:salt_solution", "amount": 250 },
            { "fluid": "minecraft:water",      "amount": 250 }
        ]
    })

    // --- 苯乙烯 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "ingredients": [
            { "fluid": "kubejs:benzene", "amount": 250 },
            { "fluid": "tfmg:ethylene",  "amount": 500 },
            { "item": "kubejs:alkylation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 150,
        "results": [
            { "fluid": "kubejs:ethylbenzene", "amount": 250 },
            { "item": "kubejs:alkylation_catalyst" }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:ethylbenzene", "amount": 250 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 300,
        "results": [
            { "fluid": "kubejs:styrene", "amount": 250 },
            { "fluid": "tfmg:hydrogen",  "amount": 500 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:ethylbenzene", "amount": 250 },
            { "fluid": "kubejs:steam",        "amount": 500 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 180,
        "results": [
            { "fluid": "kubejs:styrene", "amount": 250 },
            { "fluid": "tfmg:hydrogen",  "amount": 500 },
            { "fluid": "kubejs:steam",   "amount": 500 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ]
    })

    // --- 聚合 ---
    // PE
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [ { "fluid": "tfmg:ethylene", "amount": 200 } ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 80,
        "results": [ { "fluid": "kubejs:molten_polyethylene", "amount": 100 } ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "tfmg:ethylene", "amount": 200 },
            { "item": "kubejs:zinc_powder" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 50,
        "results": [
            { "fluid": "kubejs:molten_polyethylene", "amount": 100 },
            { "item": "kubejs:zinc_powder" }
        ]
    })
    // PP
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [ { "fluid": "tfmg:propylene", "amount": 200 } ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 120,
        "results": [ { "fluid": "kubejs:molten_polypropylene", "amount": 100 } ]
    })
    // PS
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [ { "fluid": "kubejs:styrene", "amount": 200 } ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 60,
        "results": [ { "fluid": "kubejs:molten_polystyrene", "amount": 200 } ]
    })

    // --- 丙烯腈 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "tfmg:propylene", "amount": 250 },
            { "fluid": "kubejs:ammonia", "amount": 250 },
            { "fluid": "kubejs:oxygen",  "amount": 375 },
            { "item": "kubejs:ammoxidation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:acrylonitrile", "amount": 125 },
            { "fluid": "minecraft:water",      "amount": 375 },
            { "item": "kubejs:ammoxidation_catalyst" }
        ]
    })

    // --- ABS（丁二烯为气体）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:acrylonitrile", "amount": 200 },
            { "fluid": "kubejs:butadiene",     "amount": 200 },
            { "fluid": "kubejs:styrene",       "amount": 600 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 150,
        "results": [ { "fluid": "kubejs:molten_abs", "amount": 900 } ]
    })

    // --- PTA ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:paraxylene", "amount": 125 },
            { "fluid": "kubejs:oxygen",     "amount": 750 },
            { "item": "kubejs:oxidation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "item": "kubejs:terephthalic_acid" },
            { "fluid": "minecraft:water", "amount": 250 },
            { "item": "kubejs:oxidation_catalyst" }
        ]
    })

    // --- 乙二醇 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "tfmg:ethylene",    "amount": 1000 },
            { "fluid": "kubejs:oxygen",    "amount": 500  },
            { "fluid": "minecraft:water",  "amount": 500  },
            { "item": "kubejs:silver_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 180,
        "results": [
            { "fluid": "kubejs:ethylene_glycol", "amount": 500 },
            { "item": "kubejs:silver_catalyst" }
        ]
    })

    // --- PET（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": "kubejs:terephthalic_acid" },
            { "item": "kubejs:terephthalic_acid" },
            { "fluid": "kubejs:ethylene_glycol", "amount": 250 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 350,
        "results": [
            { "fluid": "kubejs:molten_pet", "amount": 250 },
            { "fluid": "minecraft:water",   "amount": 500 }
        ]
    })
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "item": "kubejs:terephthalic_acid" },
            { "item": "kubejs:terephthalic_acid" },
            { "item": "kubejs:terephthalic_acid" },
            { "item": "kubejs:terephthalic_acid" },
            { "fluid": "kubejs:ethylene_glycol", "amount": 500 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:molten_pet", "amount": 500  },
            { "fluid": "minecraft:water",   "amount": 1000 }
        ]
    })

// ============================================================
// 第五部分：副产物化工利用（审查修正版）
// ============================================================

    // --- 路线1：油浆延迟焦化（石油焦为粉末）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:slurry_oil", "amount": 500 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 300,
        "results": [
            { "item": "tfmg:coal_coke_dust" },
            { "fluid": "tfmg:diesel",         "amount": 125 },
            { "fluid": "tfmg:naphtha",        "amount": 125 },
            { "fluid": "kubejs:cracked_gas",  "amount": 250 }
        ]
    })

    // --- 路线2：减粘渣油延迟焦化 ---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:visbreaker_residue", "amount": 500 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 280,
        "results": [
            { "item": "tfmg:coal_coke_dust" },
            { "fluid": "tfmg:diesel",         "amount": 125 },
            { "fluid": "tfmg:naphtha",        "amount": 125 },
            { "fluid": "kubejs:cracked_gas",  "amount": 250 }
        ]
    })

    // --- 路线3：裂解汽油加氢 → BTX（黑箱豁免，总摩尔守恒）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "kubejs:pyrolysis_gasoline", "amount": 450 },
            { "fluid": "tfmg:hydrogen",             "amount": 100 },
            { "item": "kubejs:nickel_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:benzene",   "amount": 150 },
            { "fluid": "kubejs:toluene",   "amount": 100 },
            { "fluid": "kubejs:xylene",    "amount": 100 },
            { "fluid": "kubejs:raffinate", "amount": 150 },
            { "item": "kubejs:nickel_catalyst" }
        ]
    })

    // --- 路线4：乙烷蒸汽裂解 → 乙烯（蒸汽循环，原子守恒）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:ethane", "amount": 500 },
            { "fluid": "kubejs:steam",  "amount": 100 }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 120,
        "results": [
            { "fluid": "tfmg:ethylene", "amount": 500 },
            { "fluid": "tfmg:hydrogen", "amount": 500 },
            { "fluid": "kubejs:steam",  "amount": 100 }
        ]
    })

    // --- 路线5：甲苯加氢脱烷基 → 苯（原子守恒）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "kubejs:toluene", "amount": 200 },
            { "fluid": "tfmg:hydrogen",  "amount": 400 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 200,
        "results": [
            { "fluid": "kubejs:benzene", "amount": 200 },
            { "fluid": "kubejs:methane", "amount": 400 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ]
    })

    // --- 路线6：丙烷脱氢 → 丙烯（合规）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "superheated",
        "ingredients": [
            { "fluid": "tfmg:propane", "amount": 500 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 250,
        "results": [
            { "fluid": "tfmg:propylene", "amount": 500 },
            { "fluid": "tfmg:hydrogen",  "amount": 500 },
            { "item": "kubejs:dehydrogenation_catalyst" }
        ]
    })

    // --- 路线7：柴油加氢精制 → 芳烃溶剂（黑箱豁免）---
    event.custom({
        "type": "tfmg:vat_machine_recipe",
        "allowedVatTypes": [ "tfmg:steel_vat", "tfmg:firebrick_lined_vat" ],
        "heatRequirement": "heated",
        "ingredients": [
            { "fluid": "tfmg:diesel",   "amount": 500 },
            { "fluid": "tfmg:hydrogen", "amount": 200 },
            { "item": "kubejs:nickel_catalyst" }
        ],
        "machines": [ "tfmg:mixing" ],
        "minSize": 1,
        "processingTime": 220,
        "results": [
            { "fluid": "kubejs:aromatic_solvent", "amount": 300 },
            { "fluid": "tfmg:naphtha",           "amount": 100 },
            { "item": "kubejs:nickel_catalyst" }
        ]
    })

})