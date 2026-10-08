// Every Registered Substance Must Retain Its Defined Physical State Across Recipes
// Reference Reaction Conditions Must Not Override A Substance's Registered State
// Register A Separate Form With Its Own ID Before Using A Different Physical State
// Mole Accounting Uses 2 mB Per Mol For Registered Gases And 1 mB Per Mol For Registered Liquids
// Define Moles Per Item For Each Solid Material And Use That Value Consistently Across Recipes
// Balance Reaction Equations And Convert Coefficients Using These Mole Accounting Rules
// Mixtures Require Defined Compositions Before A Unique Molecular Equation Can Be Written
// Reference Equations Do Not Prove Current Recipe Quantities Are Balanced, Flag Any Mismatches


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
    var expandedIngredients = expandCountedIngredients(ingredients)
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

// Create Mixing And Catalyst Preparation

// Pyrite Preparation: Fe + 2 S -> FeS2
// Formal Composition Equation Only, Not Proof Of Selective Pyrite Formation
    event.recipes.create.mixing('kubejs:pyrite_powder', [
        '2x kubejs:sulfur_powder',
        'kubejs:iron_powder'
    ]).heated()

// Caustic-soda Recovery: NaOH(aq) -> NaOH(s)
// Solvent Evaporation Is Implicit
    event.recipes.create.mixing('kubejs:caustic_soda_powder', Fluid.of('kubejs:caustic_soda', 125)).heated()

// Salt Recovery: Na+(aq) + Cl-(aq) -> NaCl(s)
// Solvent Evaporation Is Implicit
    event.recipes.create.mixing('ratatouille:salt', Fluid.of('kubejs:salt_solution', 125)).heated()

// Soda Recovery: Na2CO3(aq) -> Na2CO3(s)
// Solution Uses 1 mB Per Mol Of Na2CO3, Soda Powder Represents 125 Mol Per Item
// Carrier Water And Solvent Evaporation Are Implicit
    event.recipes.create.mixing('kubejs:soda_powder', AddFluid('125 kubejs:sodium_carbonate_solution'))
        .heated()
        .id('cwi:mixing/soda_powder_from_sodium_carbonate_solution')

// Sugar Recovery: C12H22O11(aq) -> C12H22O11(s)
// Sucrose Reference Only, Sugar Composition Is Not Defined
    event.recipes.create.mixing('minecraft:sugar', Fluid.of('kubejs:syrup', 125)).heated()

// Nitrate Recovery: Dissolved Nitrate Salt -> Solid Nitrate Salt
// Nitrate Counter Ion Is Unspecified, No Unique Molecular Equation
    event.recipes.create.mixing('tfmg:nitrate_dust', Fluid.of('kubejs:nitrate_solution', 125)).heated()

// Caustic-soda Dissolution: NaOH(s) -> Na+(aq) + OH-(aq)
    event.recipes.create.mixing(Fluid.of('kubejs:caustic_soda', 125), [
        'kubejs:caustic_soda_powder',
        Fluid.of('kubejs:distilled_water', 125)
    ])

// Syrup Preparation: C12H22O11(s) -> C12H22O11(aq)
// Sucrose Reference Only, Sugar Composition Is Not Defined
    event.recipes.create.mixing(Fluid.of('kubejs:syrup', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'minecraft:sugar'
    ])

// Salt-solution Preparation: NaCl(s) -> Na+(aq) + Cl-(aq)
    event.recipes.create.mixing(Fluid.of('kubejs:salt_solution', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'ratatouille:salt'
    ])

// Halite Dissolution: NaCl(s) -> Na+(aq) + Cl-(aq)
    event.recipes.create.mixing(Fluid.of('kubejs:raw_brine', 125), [
        AddFluid('125 #cwi:water'),
        'kubejs:halite_powder'
    ])

// Ferric-chloride Synthesis: 2 Fe + 3 Cl2 -> 2 FeCl3
    event.recipes.create.mixing(Fluid.of('kubejs:ferric_chloride', 125), [
        Fluid.of('kubejs:chlorine', 375),
        'kubejs:iron_powder'
    ])

// Nitrate-solution Preparation: Solid Nitrate Salt -> Dissolved Nitrate Salt
// Nitrate Counter Ion Is Unspecified, No Unique Molecular Equation
    event.recipes.create.mixing(Fluid.of('kubejs:nitrate_solution', 125), [
        Fluid.of('kubejs:distilled_water', 125),
        'tfmg:nitrate_dust'
    ])

// Chlorine-copper Catalyst Preparation: Cu + Cl2 -> CuCl2
// Reference If The Catalyst Represents Copper(II) Chloride
    event.recipes.create.mixing('kubejs:chlorine_copper_catalyst', [
        'kubejs:copper_powder',
        Fluid.of('kubejs:chlorine', 250)
    ]).heated()

// Nickel Catalyst Preparation: Nickel Powder + Alumina -> Supported Nickel Catalyst
// Supported Ni/Al2O3 Assembly, Not A New Molecular Compound
    event.recipes.create.mixing('kubejs:nickel_catalyst', [
        'kubejs:nickel_powder',
        'kubejs:alumina_powder'
    ]).heated()

// Cobalt Catalyst Preparation: Cobalt Powder + Alumina -> Supported Cobalt Catalyst
// Supported Co/Al2O3 Assembly, Activation Is Unspecified
    event.recipes.create.mixing('kubejs:cobalt_catalyst', [
        'kubejs:cobalt_powder',
        'kubejs:alumina_powder'
    ]).heated()

// Iron Catalyst Preparation: Iron Powder + Alumina + Potassium Powder -> Promoted Iron Catalyst
// Supported Iron With Potassium Promoter, Active Phases Are Unspecified
    event.recipes.create.mixing('kubejs:iron_catalyst', [
        'kubejs:iron_powder',
        'kubejs:alumina_powder',
        'kubejs:potassium_powder'
    ]).heated()

// Platinum Catalyst Preparation: Platinum Powder + Alumina -> Supported Platinum Catalyst
// Supported Pt/Al2O3 Assembly, Not A New Molecular Compound
    event.recipes.create.mixing('kubejs:platinum_catalyst', [
        'kubejs:platinum_powder',
        'kubejs:alumina_powder'
    ]).heated()

// Sulfur-copper Catalyst Preparation: Copper Powder + Zinc Powder + Sulfur Powder -> Sulfur-copper Catalyst
// Catalyst Composition Is Unspecified, No Unique Molecular Equation
    event.recipes.create.mixing('kubejs:sulfur_copper_catalyst', [
        'kubejs:copper_powder',
        'kubejs:zinc_powder',
        'kubejs:sulfur_powder'
    ]).heated()

// Dehydrogenation Catalyst Preparation: Iron Oxide + Chromium Oxide -> Mixed-oxide Catalyst
// Mixed Oxide Catalyst Assembly, Exact Oxide Phases Are Unspecified
    event.recipes.create.mixing('kubejs:dehydrogenation_catalyst', [
        'kubejs:iron_oxide_powder',
        'kubejs:chromium_oxide_powder'
    ]).heated()

// Oxidation Catalyst Preparation: Cobalt Powder + Manganese Powder -> Oxidation Catalyst
// Catalyst Assembly, Active Oxidation States Are Unspecified
    event.recipes.create.mixing('kubejs:oxidation_catalyst', [
        'kubejs:cobalt_powder',
        'kubejs:manganese_powder'
    ]).heated()

// Silver Catalyst Preparation: Silver Powder + Alumina -> Supported Silver Catalyst
// Supported Ag/Al2O3 Assembly, Not A New Molecular Compound
    event.recipes.create.mixing('kubejs:silver_catalyst', [
        'kubejs:silver_powder',
        'kubejs:alumina_powder'
    ]).heated()

// Phosphoric-acid Catalyst Preparation: Ca3(PO4)2 + 3 H2SO4 -> 2 H3PO4 + 3 CaSO4
// Reference Only If Phosphate Represents Ca3(PO4)2, Sulfate Byproduct Is Omitted
    event.recipes.create.mixing('kubejs:phosphoric_acid_catalyst', [
        'kubejs:phosphate_powder',
        Fluid.of('kubejs:sulfuric_acid', 50)
    ]).heated()

// Zeolite Catalyst Preparation: Zeolite Powder + Alumina -> Zeolite/alumina Catalyst
// Variable Zeolite Composition, Catalyst Assembly Rather Than A Defined Reaction
    event.recipes.create.mixing('kubejs:zeolite_catalyst', [
        'kubejs:zeolite_powder',
        'kubejs:alumina_powder'
    ]).heated()

// Alumina Synthesis: 4 Al + 3 O2 -> 2 Al2O3
    event.recipes.create.mixing('kubejs:alumina_powder', [
        '2x kubejs:aluminum_powder',
        Fluid.of('kubejs:oxygen', 375)
    ]).heated()

// Water Boiling

// Distilled-water Boiling, Heated: H2O(l) -> H2O(g)
    distillation(event, "heated",
        [ AddFluid('125 kubejs:distilled_water') ],
        [ AddFluid('250 kubejs:steam') ],
        150
    )

// Distilled-water Boiling, Superheated: H2O(l) -> H2O(g)
    distillation(event, "superheated",
        [ AddFluid('125 kubejs:distilled_water') ],
        [ AddFluid('250 kubejs:steam') ],
        75
    )

// Water Boiling, Heated: H2O(l) -> H2O(g)
    distillation(event, "heated",
        [ AddFluid('125 minecraft:water') ],
        [ AddFluid('250 kubejs:steam') ],
        200
    )

// Water Boiling, Superheated: H2O(l) -> H2O(g)
    distillation(event, "superheated",
        [ AddFluid('125 minecraft:water') ],
        [ AddFluid('250 kubejs:steam') ],
        100
    )

// Tower Physical Separation

// Tower Water Boiling: H2O(l) -> H2O(g)
    advancedDistillation(event,
        [ AddFluid('2000 minecraft:water') ],
        [ AddFluid('4000 kubejs:steam') ]
    )

// Tower Distilled-water Boiling: H2O(l) -> H2O(g)
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:distilled_water') ],
        [ AddFluid('4000 kubejs:steam') ]
    )

// Liquid-air Fractionation: Liquid Air Mixture -> O2(g) + Ar(g) + N2(g)
// Physical Separation, Output Proportions Are Gameplay Values
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:condensed_air') ],
        [
            AddFluid('800 kubejs:oxygen'),
            AddFluid('125 kubejs:argon'),
            AddFluid('3075 kubejs:nitrogen')
        ]
    )

// Helium Recovery From Natural Gas: Natural Gas Containing Helium -> Helium-depleted Natural Gas + He
// Physical Separation, Natural Gas Composition Is Unspecified
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:natural_gas') ],
        [
            AddFluid('1925 kubejs:natural_gas_depleted'),
            AddFluid('75 kubejs:helium')
        ]
    )

// Condensed Natural Gas Fractionation: Condensed Natural Gas Mixture -> C3H8(g) + C2H6(g) + CH4(g)
// Physical Separation Of A Mixture, Not Molecular Synthesis
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:condensed_natural_gas') ],
        [
            AddFluid('600 kubejs:propane'),
            AddFluid('1000 kubejs:ethane'),
            AddFluid('2400 kubejs:methane')
        ]
    )

// Crude-oil Fractionation: Crude Oil -> Residual Oil + Wax Oil + Diesel + Kerosene + Naphtha
// Physical Separation, Petroleum Fractions Have No Single Formula
    advancedDistillation(event,
        [ AddFluid('2000 tfmg:crude_oil') ],
        [
            AddFluid('950 kubejs:residual_oil'),
            AddFluid('500 kubejs:wax_oil'),
            AddFluid('250 kubejs:diesel'),
            AddFluid('200 kubejs:kerosene'),
            AddFluid('100 kubejs:naphtha')
        ]
    )

// FCC-effluent Fractionation: FCC Effluent -> Slurry Oil + Diesel + Gasoline + LPG + Propylene + Dry Gas
// Physical Separation, Petroleum Fractions Have No Single Formula
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:fcc_effluent') ],
        [
            AddFluid('700 kubejs:slurry_oil'),
            AddFluid('350 kubejs:diesel'),
            AddFluid('700 kubejs:gasoline'),
            AddFluid('150 kubejs:lpg'),
            AddFluid('100 kubejs:propylene'),
            AddFluid('250 kubejs:dry_gas')
        ]
    )

// Visbreaker-effluent Fractionation: Visbreaker Effluent -> Visbreaker Residue + Heavy Fuel Oil + Diesel + Naphtha + Cracked Gas
// Physical Separation, Petroleum Fractions Have No Single Formula
    advancedDistillation(event,
        [ AddFluid('2000 kubejs:visbreaker_effluent') ],
        [
            AddFluid('1600 kubejs:visbreaker_residue'),
            AddFluid('50 kubejs:heavy_fuel_oil'),
            AddFluid('200 kubejs:diesel'),
            AddFluid('100 kubejs:naphtha'),
            AddFluid('100 kubejs:cracked_gas')
        ]
    )

// Cracked Naphtha Fractionation: Condensed Cracked Naphtha -> Pyrolysis Gasoline + C3H8 + C3H6 + C2H6 + C2H4
// Physical Separation, Feed And Pyrolysis Gasoline Are Mixtures
    advancedDistillation(event,
        [ AddFluid('500 kubejs:condensed_cracked_naphtha') ],
        [
            AddFluid('250 kubejs:pyrolysis_gasoline'),
            AddFluid('50 kubejs:propane'),
            AddFluid('100 kubejs:propylene'),
            AddFluid('100 kubejs:ethane'),
            AddFluid('250 kubejs:ethylene')
        ]
    )

// Aromatic Mixture Separation: Aromatic Mixture -> C8H10 (Xylenes) + C7H8 (Toluene) + C6H6 (Benzene)
// Physical Separation Preserves 600 Mol: 200 Mol Of Each Aromatic Gas
    advancedDistillation(event,
        [ AddFluid('600 kubejs:aromatic_mix') ],
        [
            AddFluid('400 kubejs:xylene'),
            AddFluid('400 kubejs:toluene'),
            AddFluid('400 kubejs:benzene')
        ]
    )

// Xylene Isomer Separation: Mixed C8H10 -> Separated o-C8H10 + m-C8H10 + p-C8H10 Fractions
// Combined Isomer Separation Preserves 200 Mol Across Registered Gas And Liquid Forms
    advancedDistillation(event,
        [ AddFluid('400 kubejs:xylene') ],
        [
            AddFluid('75 kubejs:orthoxylene'),
            AddFluid('50 kubejs:metaxylene'),
            AddFluid('75 kubejs:paraxylene')
        ]
    )

// Vat Processes And Reactions

// Steam Condensation: H2O(g) -> H2O(l)
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('1000 kubejs:steam') ],
        [ AddFluid('500 kubejs:distilled_water') ],
        400
    )

// Steam Condensation With Blue Ice: H2O(g) -> H2O(l)
// Blue Ice To Ice Is A Cooling Item Conversion
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

// Natural Gas CO2 Scrubbing: CO2 + 2 NaOH -> Na2CO3 + H2O
// Pack Feed Model Contains 10 Mol Percent CO2, The Remaining Gas Passes Through
// Caustic Soda Uses 1 mB Per Mol Of NaOH, With Carrier Water Implicit
// Sodium Carbonate Solution Uses 1 mB Per Mol Of Na2CO3, With Carrier Water Implicit
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:natural_gas'),
            AddFluid('100 kubejs:caustic_soda')
        ],
        [
            AddFluid('900 kubejs:purified_natural_gas'),
            AddFluid('50 kubejs:sodium_carbonate_solution'),
            AddFluid('50 kubejs:distilled_water')
        ],
        200
    ).id('cwi:vat_machine_recipe/natural_gas_scrubbing')

// Natural-gas Liquefaction: Purified Natural Gas(g) -> Condensed Natural Gas(l)
// Mixture Phase Change, Blue Ice Represents Fictional Cryogenic Cooling
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

// Hydrogen-chloride Preparation: NaCl + H2SO4 -> NaHSO4 + HCl
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

// Deacon Chlorine Recovery: 4 HCl + O2 -> 2 Cl2 + 2 H2O
// Overall Deacon Reaction, Copper Catalyst Is Returned
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

// Deacon Chlorine Recovery, Larger Batch: 4 HCl + O2 -> 2 Cl2 + 2 H2O
// Overall Deacon Reaction, Copper Catalyst Is Returned
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

// Haber Ammonia Synthesis: N2 + 3 H2 <=> 2 NH3
// Iron Catalyst Is Returned
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:iron_catalyst'),
            AddFluid('200 kubejs:nitrogen'),
            AddFluid('600 kubejs:hydrogen')
        ],
        [
            AddFluid('400 kubejs:ammonia'),
            AddItem('kubejs:iron_catalyst')
        ],
        240
    )

// Haber Ammonia Synthesis, Two Catalyst Items: N2 + 3 H2 <=> 2 NH3
// Extra Catalyst Changes Duration, Not Stoichiometry
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('kubejs:iron_catalyst'),
            AddItem('kubejs:iron_catalyst'),
            AddFluid('200 kubejs:nitrogen'),
            AddFluid('600 kubejs:hydrogen')
        ],
        [
            AddFluid('400 kubejs:ammonia'),
            AddItem('kubejs:iron_catalyst'),
            AddItem('kubejs:iron_catalyst')
        ],
        120
    )

// Ostwald Nitric-acid Synthesis: NH3 + 2 O2 -> HNO3 + H2O
// Overall Ostwald Route, Oxidation And Absorption Stages Are Combined
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

// Kerosene/diesel Processing To Paraffin And Dewaxed Oil: Kerosene + Diesel -> Paraffin Oil + Dewaxed Oil
// Mixture Processing, Feed And Product Compositions Are Unspecified
    vatRecipe(event, null, ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 kubejs:kerosene'),
            AddFluid('250 kubejs:diesel'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        [
            AddFluid('150 kubejs:paraffin_oil'),
            AddFluid('300 kubejs:dewaxed_oil'),
            AddItem('kubejs:zeolite_catalyst')
        ],
        200
    )

// Wax-oil Catalytic Cracking: Wax Oil -> FCC Effluent
// Mixture Cracking, No Unique Balanced Molecular Equation
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

// Residual-oil Visbreaking: Residual Oil -> Visbreaker Effluent
// Mixture Thermal Cracking, No Unique Balanced Molecular Equation
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('2000 kubejs:residual_oil') ],
        [ AddFluid('2000 kubejs:visbreaker_effluent') ],
        200
    )

// Naphtha Catalytic Reforming: Naphtha -> Reformate + H2 + Coke Oil Cut
// Mixture Reforming, No Unique Balanced Molecular Equation
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:naphtha'),
            AddItem('kubejs:platinum_catalyst')
        ],
        [
            AddFluid('925 kubejs:reformate'),
            AddFluid('50 kubejs:hydrogen'),
            AddFluid('50 kubejs:coke_oil'),
            AddItem('kubejs:platinum_catalyst')
        ],
        350
    )

// Aromatic Extraction: Reformate -> Aromatic Extract + Raffinate
// Physical Solvent Extraction, Ethylene Glycol Is Returned
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

// Naphtha Steam Cracking: Naphtha -> Cracked Naphtha
// Mixture Steam Cracking, Steam Is Returned As Diluent
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:naphtha'),
            AddFluid('200 kubejs:steam')
        ],
        [
            AddFluid('1000 kubejs:cracked_naphtha'),
            AddFluid('200 kubejs:steam')
        ],
        180
    )

// Cracked-naphtha Condensation: Cracked Naphtha(g) -> Condensed Cracked Naphtha(l)
// Mixture Phase Change, Blue Ice To Ice Is A Cooling Conversion
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

// Air Liquefaction: Air(g) -> Liquid Air
// Mixture Phase Change, Blue Ice Represents Fictional Cryogenic Cooling
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddItem('minecraft:blue_ice'),
            AddFluid('1000 kubejs:air')
        ],
        [
            AddFluid('500 kubejs:condensed_air'),
            AddItem('minecraft:ice')
        ],
        200
    )

// Benzene Hydrogenation: C6H6 + 3 H2 -> C6H12
// Gas Benzene Uses 2 mB Per Mol And Liquid Cyclohexane Uses 1 mB Per Mol
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:benzene'),
            AddFluid('1500 kubejs:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('250 kubejs:cyclohexane'),
            AddItem('kubejs:nickel_catalyst')
        ],
        250
    )

// Cyclohexane Oxidation To Alcohol/ketone Mixture: 4 C6H12 + 3 O2 -> 2 C6H12O + 2 C6H10O + 2 H2O
// Combined Cyclohexanol And Cyclohexanone Branches, Cobalt Catalyst Is Returned
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

// Cyclohexanol Oxidation To Adipic Acid: C6H12O + 2 HNO3 -> C6H10O4 + N2O + 2 H2O
// Aggregate Oxidation Equation, Solution Carrier Water Is Unspecified
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

// Adiponitrile Formation: C6H10O4 + 2 NH3 -> C6H8N2 + 4 H2O
// Aggregate Amidation And Dehydration Equation
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

// Adiponitrile Hydrogenation: C6H8N2 + 4 H2 -> C6H16N2
// Nickel Catalyst Is Returned, Solution Carrier Water Is Unspecified
    vatRecipe(event, "heated", [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:adiponitrile'),
            AddFluid('4000 kubejs:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('500 kubejs:hexamethylenediamine_solution'),
            AddItem('kubejs:nickel_catalyst')
        ],
        250
    )

// Nylon Salt Formation: C6H16N2 + C6H10O4 -> C12H26N2O4
// Hexamethylenediammonium Adipate Salt, No Condensation Water Yet
    vatRecipe(event, "heated", [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:hexamethylenediamine_solution'),
            AddFluid('500 kubejs:adipic_acid_solution')
        ],
        [ AddItem('4 kubejs:nylon_salt_crystal') ],
        120
    )

// Cumene Route To Phenol And Acetone: C6H6 + C3H6 + O2 -> C6H6O + C3H6O
// Gas Reactants Use 2 mB Per Mol And Liquid Products Use 1 mB Per Mol
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:benzene'),
            AddFluid('500 kubejs:propylene'),
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

// Bisphenol-A Synthesis: 2 C6H6O + C3H6O -> C15H16O2 + H2O
// Acid Catalyst Is Returned
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

// Epichlorohydrin Aggregate Route: C3H6 + 2 Cl2 + 3 NaOH -> C3H5ClO + 3 NaCl + 2 H2O
// Aggregate Allyl Chloride And Dichlorohydrin Route Including HCl Neutralization
    vatRecipe(event, null, [], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('375 kubejs:caustic_soda'),
            AddFluid('500 kubejs:chlorine'),
            AddFluid('250 kubejs:propylene')
        ],
        [
            AddFluid('125 kubejs:epichlorohydrin'),
            AddFluid('375 kubejs:salt_solution'),
            AddFluid('250 minecraft:water')
        ],
        280
    )

// Epoxy-resin Production: n C15H16O2 + n C3H5ClO + n NaOH -> [C18H20O3]n + n NaCl + n H2O
// Formal Repeat Unit Model Ignoring Chain Ends, Resin Grade Is Unspecified
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

// Polyethylene Formation: n C2H4 -> [CH2-CH2]n
// Addition Polymerization, Quantities Represent Repeat Units
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('200 kubejs:ethylene') ],
        [ AddFluid('100 kubejs:molten_polyethylene') ],
        80
    )

// Polyethylene Formation, Zinc Variant: n C2H4 -> [CH2-CH2]n
// Same Repeat Equation, Returned Zinc Does Not Establish A Suitable Initiator
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 kubejs:ethylene'),
            AddItem('kubejs:zinc_powder')
        ],
        [
            AddFluid('100 kubejs:molten_polyethylene'),
            AddItem('kubejs:zinc_powder')
        ],
        50
    )

// Polypropylene Formation: n C3H6 -> [CH2-CH(CH3)]n
// Addition Polymerization, Suitable Catalyst Conditions Are Implicit
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('200 kubejs:propylene') ],
        [ AddFluid('100 kubejs:molten_polypropylene') ],
        120
    )

// Polyvinyl Chloride Production

// Ethylene Dichlorination: C2H4 + Cl2 -> C2H4Cl2
// EDC Is 1,2 Dichloroethane, Iron Catalyst Is Returned
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:ethylene'),
            AddFluid('1000 kubejs:chlorine'),
            AddItem('kubejs:iron_catalyst')
        ],
        [
            AddFluid('500 kubejs:edc'),
            AddItem('kubejs:iron_catalyst')
        ],
        120
    )

// EDC Cracking To Vinyl Chloride: C2H4Cl2 -> C2H3Cl + HCl
// EDC Cracking Produces Vinyl Chloride And HCl
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:edc') ],
        [
            AddFluid('500 kubejs:vinyl_chloride_monomer'),
            AddFluid('500 kubejs:muriatic_acid')
        ],
        200
    )

// PVC Formation: n C2H3Cl -> [CH2-CHCl]n
// Addition Polymerization, This Equation Does Not Validate The Catalyst System
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

// PVC Formation, Zinc Variant: n C2H3Cl -> [CH2-CHCl]n
// Same Repeat Equation, This Equation Does Not Validate The Catalyst System
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

// Terephthalic-acid Synthesis: C8H10 + 3 O2 -> C8H6O4 + 2 H2O
// Para Xylene Oxidation, Catalyst Is Returned
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

// Ethylene-glycol Aggregate Synthesis: 2 C2H4 + O2 + 2 H2O -> 2 C2H6O2
// Aggregate Ethylene Oxide Formation And Hydration
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('1000 kubejs:ethylene'),
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

// PET Formation: n C8H6O4 + n C2H6O2 -> [C10H8O4]n + 2n H2O
// Bulk Condensation Equation Ignores Chain Ends
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

// PET Formation, Larger Batch: n C8H6O4 + n C2H6O2 -> [C10H8O4]n + 2n H2O
// Bulk Condensation Equation Ignores Chain Ends
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

// Byproduct Chemical Processing

// Slurry-oil Coking: Slurry Oil -> Coke + Diesel + Naphtha + Cracked Gas
// Mixture Coking, Feed Composition Is Unspecified
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:slurry_oil') ],
        [
            AddItem('tfmg:coal_coke_dust'),
            AddFluid('125 kubejs:diesel'),
            AddFluid('125 kubejs:naphtha'),
            AddFluid('250 kubejs:cracked_gas')
        ],
        300
    )

// Visbreaker-residue Coking: Visbreaker Residue -> Coke + Diesel + Naphtha + Cracked Gas
// Mixture Coking, Feed Composition Is Unspecified
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [ AddFluid('500 kubejs:visbreaker_residue') ],
        [
            AddItem('tfmg:coal_coke_dust'),
            AddFluid('125 kubejs:diesel'),
            AddFluid('125 kubejs:naphtha'),
            AddFluid('250 kubejs:cracked_gas')
        ],
        280
    )

// Pyrolysis Gasoline Hydrogen Treatment And Aromatic Recovery: Pyrolysis Gasoline + H2 -> Benzene + Toluene + Xylenes + Raffinate
// Combined Hydrogen Treatment And Separation, No Unique Molecular Equation
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('450 kubejs:pyrolysis_gasoline'),
            AddFluid('100 kubejs:hydrogen'),
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

// Ethane Steam Cracking: C2H6 -> C2H4 + H2
// Steam Is Returned As Diluent
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:ethane'),
            AddFluid('100 kubejs:steam')
        ],
        [
            AddFluid('500 kubejs:ethylene'),
            AddFluid('500 kubejs:hydrogen'),
            AddFluid('100 kubejs:steam')
        ],
        120
    )

// Toluene Hydrodealkylation: C7H8 + H2 -> C6H6 + CH4
// All Four Reacting Fluids Are Registered Gases And Use Equal Mole Quantities
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('200 kubejs:toluene'),
            AddFluid('200 kubejs:hydrogen'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        [
            AddFluid('200 kubejs:benzene'),
            AddFluid('200 kubejs:methane'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        200
    )

// Propane Dehydrogenation: C3H8 -> C3H6 + H2
// Dehydrogenation Catalyst Is Returned
    vatRecipe(event, "superheated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:propane'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        [
            AddFluid('500 kubejs:propylene'),
            AddFluid('500 kubejs:hydrogen'),
            AddItem('kubejs:dehydrogenation_catalyst')
        ],
        250
    )

// Diesel Hydrogen Processing: Diesel + H2 -> Aromatic Solvent + Naphtha
// Mixture Hydrogen Processing, No Unique Balanced Molecular Equation
    vatRecipe(event, "heated", ["tfmg:mixing"], ["tfmg:steel_vat", "tfmg:firebrick_lined_vat"], 1,
        [
            AddFluid('500 kubejs:diesel'),
            AddFluid('200 kubejs:hydrogen'),
            AddItem('kubejs:nickel_catalyst')
        ],
        [
            AddFluid('300 kubejs:aromatic_solvent'),
            AddFluid('100 kubejs:naphtha'),
            AddItem('kubejs:nickel_catalyst')
        ],
        220
    )
})
