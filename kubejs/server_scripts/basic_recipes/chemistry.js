ServerEvents.recipes(event => {

//mixing

  event.recipes.create.mixing('3x kubejs:pyrite_dust', ['2x tfmg:sulfur_dust','kubejs:iron_dust']).heated()
  event.recipes.create.mixing('kubejs:caustic_soda_powder', Fluid.of('kubejs:caustic_soda', 125)).heated()
  event.recipes.create.mixing('ratatouille:salt', Fluid.of('kubejs:brine', 125)).heated()
  event.recipes.create.mixing('minecraft:sugar', Fluid.of('kubejs:syrup', 125)).heated()
  event.recipes.create.mixing('tfmg:nitrate_dust', Fluid.of('kubejs:nitrate_solution', 125)).heated()
  event.recipes.create.mixing('kubejs:sulfur_copper_catalyst', ['2x tfmg:sulfur_dust','kubejs:copper_dust']).heated()
  event.recipes.create.mixing('kubejs:chloride_copper_catalyst', [Fluid.of('kubejs:chlorine', 250),'kubejs:copper_dust']).heated()
  event.recipes.create.mixing('kubejs:nickel_catalyst', ['2x kubejs:caustic_soda_powder','kubejs:nickel_dust']).heated()
  event.recipes.create.mixing('kubejs:nickel_catalyst', [Fluid.of('kubejs:caustic_soda', 250),'kubejs:nickel_dust']).heated()
  event.recipes.create.mixing(Fluid.of('kubejs:caustic_soda', 125), ['kubejs:caustic_soda_powder', Fluid.of('kubejs:distilled_water', 125)])
  event.recipes.create.mixing(Fluid.of('kubejs:syrup', 125), [Fluid.of('kubejs:distilled_water', 125), 'minecraft:sugar'])
  event.recipes.create.mixing(Fluid.of('kubejs:brine', 125), [Fluid.of('kubejs:distilled_water', 125), 'ratatouille:salt'])
  event.recipes.create.mixing(Fluid.of('kubejs:bittern', 125), [{fluidTag: "modpack:water", amount: 125}, 'kubejs:halite_dust'])
  event.recipes.create.mixing(Fluid.of('kubejs:ferric_chloride', 125), [Fluid.of('kubejs:chlorine', 125), 'kubejs:iron_dust'])
  event.recipes.create.mixing(Fluid.of('kubejs:nitrate_solution', 125), [Fluid.of('kubejs:distilled_water', 125), 'tfmg:nitrate_dust'])

//simple distillation

  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{"fluid": "kubejs:distilled_water","amount": 100}],
    "heatRequirement": "heated",
    "processingTime": 150,
    "results": [{"fluid": "kubejs:steam","amount": 100}]
  })

  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{"fluid": "kubejs:distilled_water","amount": 100}],
    "heatRequirement": "superheated",
    "processingTime": 75,
    "results": [{"fluid": "kubejs:steam","amount": 100}]
  })

  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{"fluid": "minecraft:water","amount": 100}],
    "heatRequirement": "heated",
    "processingTime": 200,
    "results": [{"fluid": "kubejs:steam","amount": 100}]
  })

  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [{"fluid": "minecraft:water","amount": 100}],
    "heatRequirement": "superheated",
    "processingTime": 100,
    "results": [{"fluid": "kubejs:steam","amount": 100}]
  })

//advenced distillation

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:condensed_natural_gas", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:propane", "amount": 300},
      {"fluid": "kubejs:ethane", "amount": 500},
      {"fluid": "kubejs:methane", "amount": 1200}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:aromatic_mix", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:xylene", "amount": 900},
      {"fluid": "kubejs:toluene", "amount": 700},
      {"fluid": "kubejs:benzene", "amount": 400}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:reformate", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:aromatic_mix", "amount": 1400},
      {"fluid": "tfmg:naphtha", "amount": 200},
      {"fluid": "tfmg:lpg", "amount": 100},
      {"fluid": "kubejs:natural_gas", "amount": 300}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:condensed_cracked_naphtha", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:butane", "amount": 200},
      {"fluid": "tfmg:propane", "amount": 600},
      {"fluid": "tfmg:propylene", "amount": 200},
      {"fluid": "kubejs:ethane", "amount": 400},
      {"fluid": "tfmg:ethylene", "amount": 500},
      {"fluid": "kubejs:methane", "amount": 100}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:condensed_cracked_ethane", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:butane", "amount": 100},
      {"fluid": "tfmg:propane", "amount": 200},
      {"fluid": "tfmg:propylene", "amount": 100},
      {"fluid": "kubejs:ethane", "amount": 300},
      {"fluid": "tfmg:ethylene", "amount": 1200},
      {"fluid": "kubejs:methane", "amount": 100}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:condensed_cracked_propane", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:propane", "amount": 300},
      {"fluid": "tfmg:propylene", "amount": 300},
      {"fluid": "kubejs:ethane", "amount": 200},
      {"fluid": "tfmg:ethylene", "amount": 1000},
      {"fluid": "kubejs:methane", "amount": 200}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:paraffin_oil", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:paraffin_oil", "amount": 200},
      {"fluid": "tfmg:diesel", "amount": 600},
      {"fluid": "tfmg:gasoline", "amount": 1000},
      {"fluid": "kubejs:natural_gas", "amount": 200}
    ]
  })

event.custom({
  "type": "tfmg:distillation",
  "ingredients": [
    {"fluid": "kubejs:cracked_paraffin_oil", "amount": 2000}
  ],
  "results": [
    {"fluid": "tfmg:lubrication_oil", "amount": 350},
    {"fluid": "tfmg:diesel", "amount": 650},
    {"fluid": "tfmg:kerosene", "amount": 500},
    {"fluid": "tfmg:naphtha", "amount": 500}
  ]
})

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "tfmg:heavy_oil", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:heavy_oil", "amount": 500},
      {"fluid": "kubejs:paraffin_oil", "amount": 1500}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "tfmg:crude_oil", "amount": 2000}
    ],
    "results": [
      {"fluid": "tfmg:heavy_oil", "amount": 1200},
      {"fluid": "tfmg:diesel", "amount": 400},
      {"fluid": "tfmg:kerosene", "amount": 200},
      {"fluid": "tfmg:naphtha", "amount": 200}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "minecraft:water", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:steam", "amount": 2000}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:distilled_water", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:steam", "amount": 2000}
    ]
  })

  event.custom({
    "type": "tfmg:distillation",
    "ingredients": [
      {"fluid": "kubejs:condensed_air", "amount": 2000}
    ],
    "results": [
      {"fluid": "kubejs:oxygen", "amount": 400},
      {"fluid": "kubejs:argon", "amount": 60},
      {"fluid": "kubejs:nitrogen", "amount": 1500},
      {"fluid": "kubejs:helium", "amount": 40}
    ]
  })

//chemicalVat

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:steam", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 1200,
    "results": [
      {"fluid": "kubejs:distilled_water", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "ratatouille:salt", "count": 3},
      {"fluid": "tfmg:sulfuric_acid", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 120,
    "results": [
      {"fluid": "kubejs:muriatic_acid", "amount": 1000},
      {"item": "kubejs:sodium_bisulfate_powder", "count": 1}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:magnesium_dust", "count": 1},
      {"fluid": "kubejs:muriatic_acid", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 200,
    "results": [
      {"item": "kubejs:magnesium_dust", "count": 1},
      {"fluid": "kubejs:chlorine", "amount": 500},
      {"fluid": "minecraft:water", "amount": 500}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:chloride_copper_catalyst", "count": 1},
      {"fluid": "kubejs:muriatic_acid", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 40,
    "results": [
      {"item": "kubejs:chloride_copper_catalyst", "count": 1},
      {"fluid": "kubejs:chlorine", "amount": 1000},
      {"fluid": "minecraft:water", "amount": 500}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:blue_ice"},
      {"fluid": "kubejs:steam", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 60,
    "results": [
      {"fluid": "minecraft:water", "amount": 500},
      {"item": "minecraft:ice"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"fluid": "kubejs:vinyl_chloride_monomer", "amount": 1000}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 200,
    "results": [
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"fluid": "kubejs:molten_polyvinyl_chloride", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:natural_gas", "amount": 1000},
      {"fluid": "kubejs:caustic_soda", "amount": 500}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 200,
    "results": [
      {"fluid": "kubejs:purified_natural_gas", "amount": 900},
      {"fluid": "tfmg:carbon_dioxide", "amount": 100},
      {"fluid": "kubejs:brine", "amount": 500}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:methane", "amount": 250},
      {"fluid": "kubejs:steam", "amount": 500},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": [
      "tfmg:mixing"
    ],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:syngas", "amount": 750},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:blue_ice"},
      {"fluid": "kubejs:purified_natural_gas", "amount": 500}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:condensed_natural_gas", "amount": 500},
      {"item": "minecraft:ice"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:cyclohexane", "amount": 1000},
      {"fluid": "kubejs:oxygen", "amount": 1000},
      {"item": "kubejs:cobalt_catalyst"}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 350,
    "results": [
      {"fluid": "kubejs:cyclohexanol", "amount": 1000},
      {"item": "kubejs:cobalt_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:benzene", "amount": 250},
      {"fluid": "tfmg:hydrogen", "amount": 1000},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:cyclohexane", "amount": 1000},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:benzene", "amount": 250},
      {"fluid": "tfmg:propylene", "amount": 250},
      {"fluid": "tfmg:air", "amount": 250},
      {"fluid": "tfmg:sulfuric_acid", "amount": 50}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:acetone", "amount": 250},
      {"fluid": "kubejs:phenol", "amount": 250}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:caustic_soda", "amount": 250},
      {"fluid": "kubejs:chlorine", "amount": 1000},
      {"fluid": "kubejs:distilled_water", "amount": 250},
      {"fluid": "tfmg:propylene", "amount": 250}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 350,
    "results": [
      {"fluid": "kubejs:epichlorohydrin", "amount": 1000},
      {"fluid": "kubejs:muriatic_acid", "amount": 500},
      {"fluid": "kubejs:brine", "amount": 250}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:condensed_cracked_naphtha", "amount": 1000},
      {"fluid": "tfmg:hydrogen", "amount": 250},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:reformate", "amount": 1000},
      {"fluid": "tfmg:hydrogen", "amount": 50},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:blue_ice"},
      {"fluid": "kubejs:cracked_naphtha", "amount": 500}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:condensed_cracked_naphtha", "amount": 250},
      {"item": "minecraft:ice"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:blue_ice"},
      {"fluid": "kubejs:cracked_ethane", "amount": 500}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:condensed_cracked_ethane", "amount": 250},
      {"item": "minecraft:ice"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:iron_catalyst"},
      {"fluid": "kubejs:nitrogen", "amount": 100},
      {"fluid": "tfmg:hydrogen", "amount": 300}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:ammonia", "amount": 200},
      {"item": "kubejs:iron_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:blue_ice"},
      {"fluid": "kubejs:cracked_propane", "amount": 500}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:condensed_cracked_propane", "amount": 250},
      {"item": "minecraft:ice"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:ammonia", "amount": 100},
      {"fluid": "kubejs:oxygen", "amount": 200},
      {"item": "kubejs:platinum_catalyst"}
    ],
    "machines": [],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:nitric_acid", "amount": 100},
      {"fluid": "minecraft:water", "amount": 50},
      {"item": "kubejs:platinum_catalyst"}
    ]
  })

//chemicalVatMixing

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:iron_dust"},
      {"item": "tfmg:sulfur_dust", "count": 2}
    ],
    "machines": ["tfmg:mixing"],
    "processingTime": 10,
    "results": [
      {"item": "kubejs:pyrite_dust", "count": 2}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "tfmg:carbon_dioxide", "amount": 250},
      {"fluid": "tfmg:hydrogen", "amount": 750},
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": ["tfmg:mixing"],
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:methanol", "amount": 250},
      {"fluid": "kubejs:steam", "amount": 250},
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:syngas", "amount": 500},
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": ["tfmg:mixing"],
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:methanol", "amount": 500},
      {"item": "kubejs:sulfur_copper_catalyst"},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:syngas", "amount": 500},
      {"item": "kubejs:iron_catalyst"}
    ],
    "machines": ["tfmg:mixing"],
    "processingTime": 200,
    "results": [
      {"fluid": "kubejs:methanol", "amount": 500},
      {"item": "kubejs:iron_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "minecraft:coal"},
      {"item": "minecraft:coal"},
      {"fluid": "kubejs:distilled_water", "amount": 250},
      {"fluid": "tfmg:hydrogen", "amount": 500}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 150,
    "results": [
      {"fluid": "kubejs:syngas", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "heatRequirement": "heated",
    "allowedVatTypes": [
      "tfmg:cast_iron_vat",
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"item": "kubejs:coal_dust"},
      {"item": "kubejs:coal_dust"},
      {"fluid": "kubejs:distilled_water", "amount": 250},
      {"fluid": "tfmg:hydrogen", "amount": 500}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:syngas", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "tfmg:naphtha", "amount": 500},
      {"fluid": "kubejs:steam", "amount": 200}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 120,
    "results": [
      {"fluid": "kubejs:cracked_naphtha", "amount": 1200}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "tfmg:propane", "amount": 500},
      {"fluid": "kubejs:steam", "amount": 200}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 120,
    "results": [
      {"fluid": "kubejs:cracked_propane", "amount": 1200}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "kubejs:ethane", "amount": 500},
      {"fluid": "kubejs:steam", "amount": 200}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 120,
    "results": [
      {"fluid": "kubejs:cracked_ethane", "amount": 1200}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"item": "kubejs:lead_dust", "count": 8},
      {"item": "tfmg:sulfur_dust", "count": 3},
      {"fluid": "kubejs:distilled_water", "amount": 500}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"item": "kubejs:lead_dust", "count": 8},
      {"item": "tfmg:sulfur_dust", "count": 2},
      {"fluid": "tfmg:sulfuric_acid", "amount": 250},
      {"fluid": "kubejs:distilled_water", "amount": 250}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:cyclohexanol", "amount": 1000},
      {"fluid": "kubejs:nitric_acid", "amount": 1000}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:adipic_acid_solution", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "tfmg:ethylene", "amount": 1000},
      {"fluid": "kubejs:chlorine", "amount": 1000}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:vinyl_chloride_monomer", "amount": 1000}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "tfmg:hydrogen", "amount": 1000},
      {"fluid": "tfmg:ethylene", "amount": 1000},
      {"fluid": "kubejs:ammonia", "amount": 500},
      {"item": "kubejs:nickel_catalyst"}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 300,
    "results": [
      {"fluid": "kubejs:hexamethylenediamine_solution", "amount": 1000},
      {"item": "kubejs:nickel_catalyst"}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "kubejs:hexamethylenediamine_solution", "amount": 500},
      {"fluid": "kubejs:adipic_acid_solution", "amount": 500}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 150,
    "results": [
      {"item": "kubejs:nylon_salt_crystal", "count": 4}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "ingredients": [
      {"fluid": "kubejs:epichlorohydrin", "amount": 1000},
      {"fluid": "kubejs:caustic_soda", "amount": 250},
      {"fluid": "kubejs:phenol", "amount": 250},
      {"fluid": "kubejs:acetone", "amount": 250}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 3,
    "processingTime": 150,
    "results": [
      {"fluid": "kubejs:epoxy_resin", "amount": 1000},
      {"fluid": "kubejs:brine", "amount": 150}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "tfmg:ethylene", "amount": 200}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:molten_polyethylene", "amount": 100}
    ]
  })

  event.custom({
    "type": "tfmg:vat_machine_recipe",
    "allowedVatTypes": [
      "tfmg:steel_vat",
      "tfmg:firebrick_lined_vat"
    ],
    "heatRequirement": "heated",
    "ingredients": [
      {"fluid": "tfmg:propylene", "amount": 200}
    ],
    "machines": ["tfmg:mixing"],
    "minSize": 1,
    "processingTime": 100,
    "results": [
      {"fluid": "kubejs:molten_polypropylene", "amount": 100}
    ]
  })

//glass

})