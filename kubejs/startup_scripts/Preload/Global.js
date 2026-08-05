// priority: 1000

global.stoneTypes = [
    { id: 'stone',        hardness: 2.4, sound: 'stone',     color: '#7F7F7F', types: ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:gravel', 'kubejs:stone_powder'] },
    { id: 'deepslate',    hardness: 3.3, sound: 'deepslate', color: '#3A3A3A', types: ['minecraft:deepslate', 'minecraft:cobbled_deepslate', 'kubejs:deepslate_gravel', 'kubejs:deepslate_powder'] },
    { id: 'granite',      hardness: 4.3, sound: 'stone',     color: '#C08080', types: ['minecraft:granite', 'kubejs:cobbled_granite', 'kubejs:granite_gravel', 'kubejs:granite_powder'] },
    { id: 'diorite',      hardness: 4.0, sound: 'stone',     color: '#C4C4C4', types: ['minecraft:diorite', 'kubejs:cobbled_diorite', 'kubejs:diorite_gravel', 'kubejs:diorite_powder'] },
    { id: 'andesite',     hardness: 3.7, sound: 'stone',     color: '#8C8C8C', types: ['minecraft:andesite', 'kubejs:cobbled_andesite', 'kubejs:andesite_gravel', 'kubejs:andesite_powder'] },
    { id: 'basalt',       hardness: 4.0, sound: 'stone',     color: '#2A2A2A', types: ['minecraft:basalt', 'kubejs:cobbled_basalt', 'kubejs:basalt_gravel', 'kubejs:basalt_powder'] },
    { id: 'claystone',    hardness: 1.7, sound: 'deepslate', color: '#B0965F', types: ['kubejs:claystone', 'kubejs:cobbled_claystone', 'kubejs:claystone_gravel', 'kubejs:claystone_powder'] },
    { id: 'schist',       hardness: 3.4, sound: 'stone',     color: '#8A8A8A', types: ['kubejs:schist', 'kubejs:cobbled_schist', 'kubejs:schist_gravel', 'kubejs:schist_powder'] },
    { id: 'gneiss',       hardness: 4.5, sound: 'stone',     color: '#9A8B7A', types: ['kubejs:gneiss', 'kubejs:cobbled_gneiss', 'kubejs:gneiss_gravel', 'kubejs:gneiss_powder'] },
    { id: 'rhyolite',     hardness: 4.5, sound: 'stone',     color: '#C0B0A0', types: ['kubejs:rhyolite', 'kubejs:cobbled_rhyolite', 'kubejs:rhyolite_gravel', 'kubejs:rhyolite_powder'] },
    { id: 'shale',        hardness: 2.3, sound: 'deepslate', color: '#5d5d5d', types: ['kubejs:shale', 'kubejs:cobbled_shale', 'kubejs:shale_gravel', 'kubejs:shale_powder'] },
    { id: 'conglomerate', hardness: 2.8, sound: 'stone',     color: '#4a2318', types: ['darkerdepths:duskrock', 'kubejs:cobbled_conglomerate', 'kubejs:conglomerate_gravel', 'kubejs:conglomerate_powder'] },
    { id: 'phyllite',     hardness: 2.8, sound: 'stone',     color: '#606769', types: ['darkerdepths:grimestone', 'kubejs:cobbled_phyllite', 'kubejs:phyllite_gravel', 'kubejs:phyllite_powder'] },
    { id: 'quartzite',    hardness: 1.7, sound: 'stone',     color: '#b59f63', types: ['darkerdepths:aridrock', 'kubejs:cobbled_quartzite', 'kubejs:quartzite_gravel', 'kubejs:quartzite_powder'] },
    { id: 'darkslate',    hardness: 3.8, sound: 'deepslate', color: '#232121', types: ['darkerdepths:darkslate', 'kubejs:cobbled_darkslate', 'kubejs:darkslate_gravel', 'kubejs:darkslate_powder'] }
]

global.compoundOreTypes = [
    { id: 'cassiterite', realId: 'cassiterite_ore', mod: 'kubejs', colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'tfc:item/ore/rich_sphalerite', blockTexture: 'kubejs:block/ores/cassiterite' },
    { id: 'cooperite',   realId: 'cooperite_ore',   mod: 'kubejs', colored: true,  hardness: 6,   resistance: 12, sound: 'ancient_debris', requiredTool: 'iron',    process: 'true',  itemTexture: 'kubejs:item/ores/cooperite',   blockTexture: 'kubejs:block/ores/cooperite' },
    { id: 'chalcocite',  realId: 'chalcocite_ore',  mod: 'kubejs', colored: true,  hardness: 4.5, resistance: 8,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'mekanism:item/raw_lead',       blockTexture: 'kubejs:block/ores/chalcocite' },
    { id: 'magnesite',   realId: 'magnesite_ore',   mod: 'kubejs', colored: true,  hardness: 2.5, resistance: 5,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/magnesite',   blockTexture: 'kubejs:block/ores/magnesite' },
    { id: 'magnetite',   realId: 'magnetite_ore',   mod: 'kubejs', colored: true,  hardness: 6,   resistance: 8,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/magnetite', blockTexture: 'kubejs:block/ores/magnetite' },
    { id: 'halite',      realId: 'halite_ore',      mod: 'kubejs', colored: false, hardness: 3,   resistance: 5,  sound: 'calcite',        requiredTool: 'wooden',  process: 'false', itemTexture: 'tfc:item/ore/halite',          blockTexture: 'kubejs:block/ores/halite' },
    { id: 'chromite',    realId: 'chromite_ore',    mod: 'kubejs', colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/chromite',    blockTexture: 'kubejs:block/ores/chromite' },
    { id: 'pentlandite', realId: 'pentlandite_ore', mod: 'kubejs', colored: true,  hardness: 3,   resistance: 6,  sound: 'calcite',        requiredTool: 'wooden',  process: 'true',  itemTexture: 'kubejs:item/ores/pentlandite', blockTexture: 'kubejs:block/ores/pentlandite' },
    { id: 'sphalerite',  realId: 'sphalerite_ore',  mod: 'kubejs', colored: true,  hardness: 3,   resistance: 6,  sound: 'stone',          requiredTool: 'wooden',  process: 'true',  itemTexture: 'kubejs:item/ores/sphalerite',  blockTexture: 'kubejs:block/ores/sphalerite' },
    { id: 'rutile',      realId: 'rutile_ore',      mod: 'kubejs', colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'iron',    process: 'true',  itemTexture: 'kubejs:item/ores/rutile',      blockTexture: 'kubejs:block/ores/rutile_side' },
    //{ id: 'uraninite',   realId: 'uraninite_ore',   mod: 'kubejs', colored: false, hardness: 4,   resistance: 6,  sound: 'amethyst',       requiredTool: 'iron',    process: 'false', itemTexture: 'kubejs:item/ores/uraninite',   blockTexture: 'kubejs:block/ores/uraninite_side' },
    //{ id: 'gravitite',   realId: 'gravitite_ore',   mod: 'kubejs', colored: false, hardness: 6,   resistance: 12, sound: 'amethyst',       requiredTool: 'diamond', process: 'false', itemTexture: 'kubejs:item/ores/gravitite',   blockTexture: 'kubejs:block/ores/gravitite_side' },
    { id: 'hematite',    realId: 'crimsite',        mod: 'create', colored: true,  hardness: 6,   resistance: 8,  sound: 'stone',          requiredTool: 'iron',    process: 'true',  itemTexture: 'kubejs:item/ores/hematite',    blockTexture: 'create:block/palettes/stone_types/natural/crimsite_0' },
    { id: 'azurite',     realId: 'asurine',         mod: 'create', colored: true,  hardness: 3,   resistance: 4,  sound: 'amethyst',       requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/azurite',     blockTexture: 'create:block/palettes/stone_types/natural/asurine_0' },
    { id: 'malachite',   realId: 'veridium',        mod: 'create', colored: true,  hardness: 3,   resistance: 4,  sound: 'amethyst',       requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/malachite',   blockTexture: 'create:block/palettes/stone_types/natural/veridium_0' },
    { id: 'petzite',     realId: 'ochrum',          mod: 'create', colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'iron',    process: 'true',  itemTexture: 'kubejs:item/ores/petzite',     blockTexture: 'create:block/palettes/stone_types/natural/ochrum_0' },
    { id: 'lignite',     realId: 'lignite',         mod: 'tfmg',   colored: true,  hardness: 1,   resistance: 1.5,sound: 'mud',            requiredTool: 'wooden',  process: 'false', itemTexture: 'tfc:item/ore/lignite',         blockTexture: 'tfmg:block/lignite' },
    { id: 'sulfur',      realId: 'sulfur',          mod: 'tfmg',   colored: true,  hardness: 1.5, resistance: 2,  sound: 'ancient_debris', requiredTool: 'wooden',  process: 'false', itemTexture: 'kubejs:item/ores/sulfur',      blockTexture: 'tfmg:block/sulfur' },
    { id: 'bauxite',     realId: 'mauxite',         mod: 'tfmg',   colored: true,  hardness: 3,   resistance: 4,  sound: 'deepslate',      requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/bauxite',     blockTexture: 'tfmg:block/palettes/stone_types/natural/bauxite_0' },
    { id: 'galena',      realId: 'galena',          mod: 'tfmg',   colored: true,  hardness: 3,   resistance: 5,  sound: 'stone',          requiredTool: 'stone',   process: 'true',  itemTexture: 'kubejs:item/ores/galena',      blockTexture: 'tfmg:block/palettes/stone_types/natural/galena_0' }
]

//₀₁₂₃₄₅₆₇₈₉
global.materialTypes = [
    // alloys
    { id: 'andesite_alloy', type: 'alloy', formula: '?', mp: 1198, stiffness: 156, fluid: 'kubejs:molten_andesite_alloy', items: { powder: 'kubejs:andesite_alloy_powder', nugget: 'kubejs:andesite_alloy_nugget', ingot: 'create:andesite_alloy', rod: 'kubejs:andesite_alloy_rod', wire: 'kubejs:andesite_alloy_wire', sheet: 'kubejs:andesite_alloy_sheet', spring: 'kubejs:andesite_alloy_spring', block: 'create:andesite_alloy_block' } },
    { id: 'brass', type: 'alloy', formula: 'CuZn', mp: 1153, stiffness: 108, fluid: 'kubejs:molten_brass', items: { powder: 'kubejs:brass_powder', ingot: 'create:brass_ingot', nugget: 'create:brass_nugget', sheet: 'create:brass_sheet', rod: 'createaddition:brass_rod', wire: 'kubejs:brass_wire', spring: 'kubejs:brass_spring', block: 'create:brass_block' } },
    { id: 'bronze', type: 'alloy', formula: 'Cu₄Sn', mp: 1217, stiffness: 113, fluid: 'kubejs:molten_bronze', items: { powder: 'kubejs:bronze_powder', ingot: 'kubejs:bronze_ingot', nugget: 'kubejs:bronze_nugget', sheet: 'kubejs:bronze_sheet', rod: 'kubejs:bronze_rod', wire: 'kubejs:bronze_wire', spring: 'kubejs:bronze_spring', block: 'kubejs:bronze_block' } },
    { id: 'stainless_steel', type: 'alloy', formula: 'Fe₃₂Cr₈Ni₄Mo', mp: 1783, stiffness: 208, fluid: 'kubejs:molten_stainless_steel', items: { powder: 'kubejs:stainless_steel_powder', ingot: 'kubejs:stainless_steel_ingot', nugget: 'kubejs:stainless_steel_nugget', sheet: 'kubejs:stainless_steel_sheet', rod: 'kubejs:stainless_steel_rod', wire: 'kubejs:stainless_steel_wire', spring: 'kubejs:stainless_steel_spring', block: 'kubejs:stainless_steel_block' } },
    { id: 'constantan', type: 'alloy', formula: 'Cu₃Ni', mp: 1525, stiffness: 160, fluid: 'kubejs:molten_constantan', items: { powder: 'kubejs:constantan_powder', ingot: 'tfmg:constantan_ingot', nugget: 'tfmg:constantan_nugget', sheet: 'kubejs:constantan_sheet', rod: 'kubejs:constantan_rod', wire: 'kubejs:constantan_wire', spring: 'kubejs:constantan_spring', block: 'tfmg:constantan_block' } },
    { id: 'electrum', type: 'alloy', formula: 'Au₃Ag', mp: 1213, stiffness: 75, fluid: 'kubejs:molten_electrum', items: { powder: 'kubejs:electrum_powder', ingot: 'createaddition:electrum_ingot', nugget: 'createaddition:electrum_nugget', sheet: 'createaddition:electrum_sheet', rod: 'createaddition:electrum_rod', wire: 'createaddition:electrum_wire', spring: 'kubejs:electrum_spring', block: 'createaddition:electrum_block' } },
    { id: 'netherite', type: 'alloy', formula: '?', mp: 4876, stiffness: 539, fluid: 'kubejs:molten_netherite', items: { powder: 'kubejs:netherite_powder', ingot: 'minecraft:netherite_ingot', nugget: 'kubejs:netherite_nugget', sheet: 'kubejs:netherite_sheet', rod: 'kubejs:netherite_rod', wire: 'kubejs:netherite_wire', spring: 'kubejs:netherite_spring', block: 'minecraft:netherite_block' } },

    // metals
    { id: 'aluminum', type: 'metal', formula: 'Al', mp: 933, stiffness: 70, fluid: 'kubejs:molten_aluminum', items: { powder: 'kubejs:aluminum_powder', ingot: 'tfmg:aluminum_ingot', nugget: 'tfmg:aluminum_nugget', sheet: 'tfmg:aluminum_sheet', rod: 'kubejs:aluminum_rod', wire: 'kubejs:aluminum_wire', spring: 'kubejs:aluminum_spring', block: 'tfmg:aluminum_block' } },
    { id: 'cast_iron', type: 'metal', formula: 'Fe', mp: 1473, stiffness: 142, fluid: 'kubejs:molten_cast_iron', items: { powder: 'kubejs:cast_iron_powder', ingot: 'tfmg:cast_iron_ingot', nugget: 'tfmg:cast_iron_nugget', sheet: 'tfmg:cast_iron_sheet', rod: 'kubejs:cast_iron_rod', wire: 'kubejs:cast_iron_wire', spring: 'kubejs:cast_iron_spring', block: 'tfmg:cast_iron_block' } },
    { id: 'cobalt', type: 'metal', formula: 'Co', mp: 1768, stiffness: 210, fluid: 'kubejs:molten_cobalt', items: { powder: 'kubejs:cobalt_powder', ingot: 'kubejs:cobalt_ingot', nugget: 'kubejs:cobalt_nugget', sheet: 'kubejs:cobalt_sheet', rod: 'kubejs:cobalt_rod', wire: 'kubejs:cobalt_wire', spring: 'kubejs:cobalt_spring', block: 'kubejs:cobalt_block' } },
    { id: 'copper', type: 'metal', formula: 'Cu', mp: 1358, stiffness: 120, fluid: 'kubejs:molten_copper', items: { powder: 'kubejs:copper_powder', ingot: 'minecraft:copper_ingot', nugget: 'create:copper_nugget', sheet: 'create:copper_sheet', rod: 'createaddition:copper_rod', wire: 'createaddition:copper_wire', spring: 'kubejs:copper_spring', block: 'minecraft:copper_block' } },
    { id: 'gold', type: 'metal', formula: 'Au', mp: 1337, stiffness: 79, fluid: 'kubejs:molten_gold', items: { powder: 'kubejs:gold_powder', ingot: 'minecraft:gold_ingot', nugget: 'minecraft:gold_nugget', sheet: 'create:golden_sheet', rod: 'createaddition:gold_rod', wire: 'createaddition:gold_wire', spring: 'kubejs:gold_spring', block: 'minecraft:gold_block' } },
    { id: 'industrial_iron', type: 'metal', formula: 'Fe', mp: 1503, stiffness: 210, fluid: 'kubejs:molten_industrial_iron', items: { powder: 'kubejs:industrial_iron_powder', ingot: 'kubejs:industrial_iron_ingot', nugget: 'kubejs:industrial_iron_nugget', sheet: 'kubejs:industrial_iron_sheet', rod: 'kubejs:industrial_iron_rod', wire: 'kubejs:industrial_iron_wire', spring: 'kubejs:industrial_iron_spring', block: 'create:industrial_iron_block' } },
    { id: 'rusted_iron', type: 'metal', formula: 'Fe', mp: 1257, stiffness: 186, fluid: null, items: { powder: 'kubejs:rusted_iron_powder', ingot: 'kubejs:rusted_iron_ingot', nugget: 'kubejs:rusted_iron_nugget', sheet: 'kubejs:rusted_iron_sheet', rod: 'kubejs:rusted_iron_rod', wire: 'kubejs:rusted_iron_wire', spring: 'kubejs:rusted_iron_spring', block: 'kubejs:rusted_iron_block' } },
    { id: 'iron', type: 'metal', formula: 'Fe', mp: 1443, stiffness: 196, fluid: 'kubejs:molten_iron', items: { powder: 'kubejs:iron_powder', ingot: 'minecraft:iron_ingot', nugget: 'minecraft:iron_nugget', sheet: 'create:iron_sheet', rod: 'createaddition:iron_rod', wire: 'createaddition:iron_wire', spring: 'kubejs:iron_spring', block: 'minecraft:iron_block' } },
    { id: 'lead', type: 'metal', formula: 'Pb', mp: 601, stiffness: 16, fluid: 'kubejs:molten_lead', items: { powder: 'kubejs:lead_powder', ingot: 'tfmg:lead_ingot', nugget: 'tfmg:lead_nugget', sheet: 'tfmg:lead_sheet', rod: 'kubejs:lead_rod', wire: 'kubejs:lead_wire', spring: 'kubejs:lead_spring', block: 'tfmg:lead_block' } },
    { id: 'magnesium', type: 'metal', formula: 'Mg', mp: 923, stiffness: 45, fluid: 'kubejs:molten_magnesium', items: { powder: 'kubejs:magnesium_powder', ingot: 'kubejs:magnesium_ingot', nugget: 'kubejs:magnesium_nugget', sheet: 'kubejs:magnesium_sheet', rod: 'kubejs:magnesium_rod', wire: 'kubejs:magnesium_wire', spring: 'kubejs:magnesium_spring', block: 'kubejs:magnesium_block' } },
    { id: 'chromium', type: 'metal', formula: 'Cr', mp: 2176, stiffness: 279, fluid: 'kubejs:molten_chromium', items: { powder: 'kubejs:chromium_powder', ingot: 'kubejs:chromium_ingot', nugget: 'kubejs:chromium_nugget', sheet: 'kubejs:chromium_sheet', rod: 'kubejs:chromium_rod', wire: 'kubejs:chromium_wire', spring: 'kubejs:chromium_spring', block: 'kubejs:chromium_block' } },
    { id: 'molybdenum', type: 'metal', formula: 'Mo', mp: 2896, stiffness: 329, fluid: 'kubejs:molten_molybdenum', items: { powder: 'kubejs:molybdenum_powder', ingot: 'kubejs:molybdenum_ingot', nugget: 'kubejs:molybdenum_nugget', sheet: 'kubejs:molybdenum_sheet', rod: 'kubejs:molybdenum_rod', wire: 'kubejs:molybdenum_wire', spring: 'kubejs:molybdenum_spring', block: 'kubejs:molybdenum_block' } },
    { id: 'titanium', type: 'metal', formula: 'Ti', mp: 1961, stiffness: 127, fluid: 'kubejs:molten_titanium', items: { powder: 'kubejs:titanium_powder', ingot: 'kubejs:titanium_ingot', nugget: 'kubejs:titanium_nugget', sheet: 'kubejs:titanium_sheet', rod: 'kubejs:titanium_rod', wire: 'kubejs:titanium_wire', spring: 'kubejs:titanium_spring', block: 'kubejs:titanium_block' } },
    { id: 'platinum', type: 'metal', formula: 'Pt', mp: 2041, stiffness: 168, fluid: 'kubejs:molten_platinum', items: { powder: 'kubejs:platinum_powder', ingot: 'kubejs:platinum_ingot', nugget: 'kubejs:platinum_nugget', sheet: 'kubejs:platinum_sheet', rod: 'kubejs:platinum_rod', wire: 'kubejs:platinum_wire', spring: 'kubejs:platinum_spring', block: 'kubejs:platinum_block' } },
    { id: 'nickel', type: 'metal', formula: 'Ni', mp: 1728, stiffness: 205, fluid: 'kubejs:molten_nickel', items: { powder: 'kubejs:nickel_powder', ingot: 'tfmg:nickel_ingot', nugget: 'tfmg:nickel_nugget', sheet: 'tfmg:nickel_sheet', rod: 'kubejs:nickel_rod', wire: 'kubejs:nickel_wire', spring: 'kubejs:nickel_spring', block: 'tfmg:nickel_block' } },
    { id: 'silver', type: 'metal', formula: 'Ag', mp: 1235, stiffness: 83, fluid: 'kubejs:molten_silver', items: { powder: 'kubejs:silver_powder', ingot: 'kubejs:silver_ingot', nugget: 'kubejs:silver_nugget', sheet: 'kubejs:silver_sheet', rod: 'kubejs:silver_rod', wire: 'kubejs:silver_wire', spring: 'kubejs:silver_spring', block: 'kubejs:silver_block' } },
    { id: 'steel', type: 'metal', formula: 'Fe', mp: 1807, stiffness: 223, fluid: 'kubejs:molten_steel', items: { powder: 'kubejs:steel_powder', ingot: 'tfmg:steel_ingot', nugget: 'tfmg:steel_nugget', sheet: 'tfmg:heavy_plate', rod: 'kubejs:steel_rod', wire: 'kubejs:steel_wire', spring: 'kubejs:steel_spring', block: 'tfmg:steel_block' } },
    { id: 'tin', type: 'metal', formula: 'Sn', mp: 505, stiffness: 50, fluid: 'kubejs:molten_tin', items: { powder: 'kubejs:tin_powder', ingot: 'kubejs:tin_ingot', nugget: 'kubejs:tin_nugget', sheet: 'kubejs:tin_sheet', rod: 'kubejs:tin_rod', wire: 'kubejs:tin_wire', spring: 'kubejs:tin_spring', block: 'kubejs:tin_block' } },
    { id: 'vanadium', type: 'metal', formula: 'V', mp: 2183, stiffness: 128, fluid: 'kubejs:molten_vanadium', items: { powder: 'kubejs:vanadium_powder', ingot: 'vintageimprovements:vanadium_ingot', nugget: 'vintageimprovements:vanadium_nugget', sheet: 'vintageimprovements:vanadium_sheet', rod: 'kubejs:vanadium_rod', wire: 'kubejs:vanadium_wire', spring: 'kubejs:vanadium_spring', block: 'vintageimprovements:vanadium_block' } },
    { id: 'zinc', type: 'metal', formula: 'Zn', mp: 693, stiffness: 108, fluid: 'kubejs:molten_zinc', items: { powder: 'kubejs:zinc_powder', ingot: 'create:zinc_ingot', nugget: 'create:zinc_nugget', sheet: 'createaddition:zinc_sheet', rod: 'kubejs:zinc_rod', wire: 'kubejs:zinc_wire', spring: 'kubejs:zinc_spring', block: 'create:zinc_block' } },

    // non-metal
    { id: 'diamond', type: 'non-metal', formula: 'C', mp: 3820, stiffness: 1089, fluid: null, items: { powder: 'kubejs:diamond_powder', ingot: 'minecraft:diamond', block: 'minecraft:diamond_block' } },

    //metalloids
    { id: 'silicon', type: 'metalloid', formula: 'Si', mp: 1687, stiffness: 132, fluid: 'tfmg:liquid_silicon', items: { powder: 'kubejs:silicon_powder', ingot: 'tfmg:silicon_ingot' } },

    // polymers
    { id: 'polyethylene', type: 'polymer', formula: '(C₂H₄)ₙ', mp: 395, stiffness: 0.5, fluid: 'kubejs:molten_polyethylene', items: { powder: 'kubejs:polyethylene_powder', ingot: 'kubejs:polyethylene', sheet: 'kubejs:polyethylene_sheet', block: 'kubejs:polyethylene_block' } },
    { id: 'polypropylene', type: 'polymer', formula: '(C₃H₆)ₙ', mp: 415, stiffness: 1.2, fluid: 'kubejs:molten_polypropylene', items: { powder: 'kubejs:polypropylene_powder', ingot: 'kubejs:polypropylene', sheet: 'kubejs:polypropylene_sheet', block: 'kubejs:polypropylene_block' } },
    { id: 'polyvinyl_chloride', type: 'polymer', formula: '(C₂H₃Cl)ₙ', mp: 330, stiffness: 3.0, fluid: 'kubejs:molten_polyvinyl_chloride', items: { powder: 'kubejs:polyvinyl_chloride_powder', ingot: 'kubejs:polyvinyl_chloride', sheet: 'kubejs:polyvinyl_chloride_sheet', block: 'kubejs:polyvinyl_chloride_block' } },
    { id: 'polybenzimidazole', type: 'polymer', formula: '(C₂₀H₁₂N₄)ₙ', mp: 700, stiffness: 7.0, fluid: 'kubejs:molten_polybenzimidazole', items: { powder: 'kubejs:polybenzimidazole_powder', ingot: 'kubejs:polybenzimidazole', sheet: 'kubejs:polybenzimidazole_sheet' } }
]

global.oreTypes = [
    ['kubejs:sulfur_ore', 'kubejs:sulfur', 'kubejs:sulfur_powder', false, true],
    ['kubejs:deepslate_sulfur_ore', 'kubejs:sulfur', 'kubejs:sulfur_powder', true, true],
    ['kubejs:quartz_ore', 'minecraft:quartz', 'kubejs:quartz_powder', false, true],
    ['kubejs:deepslate_quartz_ore', 'minecraft:quartz', 'kubejs:quartz_powder', true, true],
    ['minecraft:copper_ore', 'minecraft:raw_copper', 'create:crushed_raw_copper', false, true],
    ['minecraft:deepslate_copper_ore', 'minecraft:raw_copper', 'create:crushed_raw_copper', true, true],
    ['minecraft:coal_ore', 'minecraft:coal', 'kubejs:coal_powder', false, true],
    ['minecraft:deepslate_coal_ore', 'minecraft:coal', 'kubejs:coal_powder', true, true],
    ['minecraft:iron_ore', 'minecraft:raw_iron', 'create:crushed_raw_iron', false, true],
    ['minecraft:deepslate_iron_ore', 'minecraft:raw_iron', 'create:crushed_raw_iron', true, true],
    ['kubejs:fluorite_ore', 'kubejs:fluorite', 'kubejs:fluorite_powder', false, false],
    ['kubejs:deepslate_fluorite_ore', 'kubejs:fluorite', 'kubejs:fluorite_powder', true, false],
    ['minecraft:redstone_ore', 'kubejs:redstone', 'minecraft:redstone', false, false],
    ['minecraft:deepslate_redstone_ore', 'kubejs:redstone', 'minecraft:redstone', true, false],
    ['kubejs:silver_ore', 'kubejs:raw_silver', 'kubejs:crushed_raw_silver', false, false],
    ['kubejs:deepslate_silver_ore', 'kubejs:raw_silver', 'kubejs:crushed_raw_silver', true, false],
    ['kubejs:tin_ore', 'kubejs:raw_tin', 'kubejs:crushed_raw_tin', false, false],
    ['kubejs:deepslate_tin_ore', 'kubejs:raw_tin', 'kubejs:crushed_raw_tin', true, false],
    ['minecraft:gold_ore', 'minecraft:raw_gold', 'create:crushed_raw_gold', false, false],
    ['minecraft:deepslate_gold_ore', 'minecraft:raw_gold', 'create:crushed_raw_gold', true, false],
    ['minecraft:diamond_ore', 'minecraft:diamond', '', false, false],
    ['minecraft:deepslate_diamond_ore', 'minecraft:diamond', '', true, false],
    ['minecraft:emerald_ore', 'minecraft:emerald', '', false, false],
    ['minecraft:deepslate_emerald_ore', 'minecraft:emerald', '', true, false],
    ['minecraft:lapis_ore', 'minecraft:lapis_lazuli', 'kubejs:lapis_powder', false, false],
    ['minecraft:deepslate_lapis_ore', 'minecraft:lapis_lazuli', 'kubejs:lapis_powder', true, false],
    ['create:zinc_ore', 'create:raw_zinc', 'create:crushed_raw_zinc', false, false],
    ['create:deepslate_zinc_ore', 'create:raw_zinc', 'create:crushed_raw_zinc', true, false],
    ['tfmg:lead_ore', 'tfmg:raw_lead', 'create:crushed_raw_lead', false, false],
    ['tfmg:deepslate_lead_ore', 'tfmg:raw_lead', 'create:crushed_raw_lead', true, false],
    ['tfmg:nickel_ore', 'tfmg:raw_nickel', 'create:crushed_raw_nickel', false, false],
    ['tfmg:deepslate_nickel_ore', 'tfmg:raw_nickel', 'create:crushed_raw_nickel', true, false],
    ['tfmg:lithium_ore', 'tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', false, false],
    ['tfmg:deepslate_lithium_ore', 'tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', true, false]
]

global.colors = [
    'white', 'orange', 'magenta', 'light_blue',
    'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue',
    'brown', 'green', 'red', 'black'
]

global.allTiers = [
    'minecraft:needs_wooden_tool',
    'minecraft:needs_stone_tool',
    'minecraft:needs_iron_tool',
    'minecraft:needs_diamond_tool',
    'minecraft:needs_netherite_tool'
]

global.hammers = [
    ['bronze_hammer', 'bronze', 12, 2, 2],
    ['brass_hammer', 'brass', 13, 2, 1],
    ['steel_hammer', 'steel', 15, 3, 3],
    ['iron_hammer', 'iron', 15, 2, 0],
    ['rusted_iron_hammer', 'rusted_iron', 18, 2, 1],
    ['stone_hammer', 'stone', 20, 1, 0],
    ['golden_hammer', 'gold', 9, 1, 0],
    ['zinc_hammer', 'zinc', 10, 1, 0],
    ['copper_hammer', 'copper', 17, 2, 1],
    ['netherite_hammer', 'netherite', 12, 3, 0]
]

global.pipePileDefinitions = [
    ['steel',     'tfmg:block/steel_pipes',     6, 7, 'metal', 'pickaxe', 'stone', 'tfmg:steel_pipe'],
    ['cast_iron', 'tfmg:block/cast_iron_pipes', 4, 6, 'metal', 'pickaxe', 'stone', 'tfmg:cast_iron_pipe'],
    ['brass',     'tfmg:block/brass_pipes',     3, 6, 'metal', 'pickaxe', 'stone', 'tfmg:brass_pipe'],
    ['copper',    'kubejs:block/model/pipes',   3, 6, 'metal', 'pickaxe', 'stone', 'create:fluid_pipe'],
    ['aluminum',  'tfmg:block/aluminum_pipes',  3, 6, 'metal', 'pickaxe', 'stone', 'tfmg:aluminum_pipe'],
    ['plastic',   'tfmg:block/plastic_pipes',   2, 2, 'metal', 'pickaxe', 'stone', 'tfmg:plastic_pipe']
]