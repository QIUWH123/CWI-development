// priority: 1000

global.stoneTypes = [
    { id: 'stone',        hardness: 2.4, sound: 'stone',     color: '#7F7F7F', types: ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:gravel', 'kubejs:stone_dust'] },
    { id: 'deepslate',    hardness: 3.3, sound: 'deepslate', color: '#3A3A3A', types: ['minecraft:deepslate', 'minecraft:cobbled_deepslate', 'kubejs:deepslate_gravel', 'kubejs:deepslate_dust'] },
    { id: 'granite',      hardness: 4.3, sound: 'stone',     color: '#C08080', types: ['minecraft:granite', 'kubejs:cobbled_granite', 'kubejs:granite_gravel', 'kubejs:granite_dust'] },
    { id: 'diorite',      hardness: 4.0, sound: 'stone',     color: '#C4C4C4', types: ['minecraft:diorite', 'kubejs:cobbled_diorite', 'kubejs:diorite_gravel', 'kubejs:diorite_dust'] },
    { id: 'andesite',     hardness: 3.7, sound: 'stone',     color: '#8C8C8C', types: ['minecraft:andesite', 'kubejs:cobbled_andesite', 'kubejs:andesite_gravel', 'kubejs:andesite_dust'] },
    { id: 'basalt',       hardness: 4.0, sound: 'stone',     color: '#2A2A2A', types: ['minecraft:basalt', 'kubejs:cobbled_basalt', 'kubejs:basalt_gravel', 'kubejs:basalt_dust'] },
    { id: 'claystone',    hardness: 1.7, sound: 'deepslate', color: '#B0965F', types: ['kubejs:claystone', 'kubejs:cobbled_claystone', 'kubejs:claystone_gravel', 'kubejs:claystone_dust'] },
    { id: 'schist',       hardness: 3.4, sound: 'stone',     color: '#8A8A8A', types: ['kubejs:schist', 'kubejs:cobbled_schist', 'kubejs:schist_gravel', 'kubejs:schist_dust'] },
    { id: 'gneiss',       hardness: 4.5, sound: 'stone',     color: '#9A8B7A', types: ['kubejs:gneiss', 'kubejs:cobbled_gneiss', 'kubejs:gneiss_gravel', 'kubejs:gneiss_dust'] },
    { id: 'rhyolite',     hardness: 4.5, sound: 'stone',     color: '#C0B0A0', types: ['kubejs:rhyolite', 'kubejs:cobbled_rhyolite', 'kubejs:rhyolite_gravel', 'kubejs:rhyolite_dust'] },
    { id: 'shale',        hardness: 2.3, sound: 'deepslate', color: '#5d5d5d', types: ['kubejs:shale', 'kubejs:cobbled_shale', 'kubejs:shale_gravel', 'kubejs:shale_dust'] },
    { id: 'conglomerate', hardness: 2.8, sound: 'stone',     color: '#4a2318', types: ['darkerdepths:duskrock', 'kubejs:cobbled_conglomerate', 'kubejs:conglomerate_gravel', 'kubejs:conglomerate_dust'] },
    { id: 'phyllite',     hardness: 2.8, sound: 'stone',     color: '#606769', types: ['darkerdepths:grimestone', 'kubejs:cobbled_phyllite', 'kubejs:phyllite_gravel', 'kubejs:phyllite_dust'] },
    { id: 'quartzite',    hardness: 1.7, sound: 'stone',     color: '#b59f63', types: ['darkerdepths:aridrock', 'kubejs:cobbled_quartzite', 'kubejs:quartzite_gravel', 'kubejs:quartzite_dust'] },
    { id: 'darkslate',    hardness: 3.8, sound: 'deepslate', color: '#232121', types: ['darkerdepths:darkslate', 'kubejs:cobbled_darkslate', 'kubejs:darkslate_gravel', 'kubejs:darkslate_dust'] }
]

global.microbes = [
    ['fermento_mycetes',    0xbfb16d, 0xfce992, 0xffb078, ['frugal', 'prolific', 'rapid'], [1800, 3600, 1200]],
    ['acidolys_bacillus',   0xacbf75, 0xdcf595, 0xdcff82, ['heap', 'efficient', 'specialized'], [3000, 2000, 4800]],
    ['vulcan_thermus',      0x9c5454, 0xd97171, 0xfa8cb4, ['crude', 'thermogenic', 'thermoelectric'], [2400, 4000, 5000]],
    ['carbofusor_spirillum',0x85571c, 0xd69036, 0xffab66, ['coal_saver', 'pressurized', 'syngas_rich'], [2400, 3000, 3600]],
    ['putrelys_sporogenes', 0x8a535b, 0xe08794, 0xff458f, ['saprophytic', 'proteolytic', 'cellulolytic'], [1800, 3000, 4200]],
    ['nitrofix_rhizobium',  0x57b3a5, 0x66d4c3, 0x96ffd3, ['sugar_fed', 'phototrophic', 'nitrifying'], [2000, 3600, 4800]],
    ['crystallum_coccus',   0xec73f0, 0xfca6ff, 0xff87bb, ['cheap_crystal', 'fast_nucleating', 'precision'], [1800, 1200, 4800]]
]

global.materialTypes = [
    // alloy
    { id: 'andesite_alloy', type: 'alloy', formula: '?', mp: 1198, fluid: 'kubejs:molten_andesite_alloy', items: { dust: 'kubejs:andesite_alloy_dust', ingot: 'create:andesite_alloy', rod: 'vintageimprovements:andesite_rod', wire: 'vintageimprovements:andesite_wire', sheet: 'vintageimprovements:andesite_sheet', block: 'create:andesite_alloy_block' } },
    { id: 'brass', type: 'alloy', formula: 'CuZn', mp: 1153, fluid: 'kubejs:molten_brass', items: { dust: 'kubejs:brass_dust', ingot: 'create:brass_ingot', nugget: 'create:brass_nugget', sheet: 'create:brass_sheet', rod: 'createaddition:brass_rod', wire: 'vintageimprovements:brass_wire', block: 'create:brass_block' } },
    { id: 'bronze', type: 'alloy', formula: 'Cu₄Sn', mp: 1217, fluid: 'kubejs:molten_bronze', items: { dust: 'kubejs:bronze_dust', ingot: 'kubejs:bronze_ingot', nugget: 'kubejs:bronze_nugget', sheet: 'kubejs:bronze_sheet', rod: 'kubejs:bronze_rod', wire: 'kubejs:bronze_wire', block: 'kubejs:bronze_block' } },
    { id: 'constantan', type: 'alloy', formula: 'Cu₃Ni', mp: 1525, fluid: 'kubejs:molten_constantan', items: { dust: 'kubejs:constantan_dust', ingot: 'tfmg:constantan_ingot', nugget: 'tfmg:constantan_nugget', sheet: 'vintageimprovements:constantan_sheet', rod: 'vintageimprovements:constantan_rod', wire: 'tfmg:constantan_wire', block: 'tfmg:constantan_block' } },
    { id: 'electrum', type: 'alloy', formula: 'Au₃Ag', mp: 1213, fluid: 'kubejs:molten_electrum', items: { dust: 'kubejs:electrum_dust', ingot: 'createaddition:electrum_ingot', nugget: 'createaddition:electrum_nugget', sheet: 'createaddition:electrum_sheet', rod: 'createaddition:electrum_rod', wire: 'createaddition:electrum_wire', block: 'createaddition:electrum_block' } },

    // metal
    { id: 'aluminum', type: 'metal', formula: 'Al', mp: 933, fluid: 'kubejs:molten_aluminum', items: { dust: 'kubejs:aluminum_dust', ingot: 'tfmg:aluminum_ingot', nugget: 'tfmg:aluminum_nugget', sheet: 'tfmg:aluminum_sheet', rod: 'vintageimprovements:aluminum_rod', wire: 'tfmg:aluminum_wire', block: 'tfmg:aluminum_block' } },
    { id: 'cast_iron', type: 'metal', formula: 'Fe', mp: 1473, fluid: 'kubejs:molten_cast_iron', items: { dust: 'kubejs:cast_iron_dust', ingot: 'tfmg:cast_iron_ingot', nugget: 'tfmg:cast_iron_nugget', sheet: 'tfmg:cast_iron_sheet', rod: 'vintageimprovements:cast_iron_rod', wire: 'vintageimprovements:cast_iron_wire', block: 'tfmg:cast_iron_block' } },
    { id: 'cobalt', type: 'metal', formula: 'Co', mp: 1768, fluid: 'kubejs:molten_cobalt', items: { dust: 'kubejs:cobalt_dust', ingot: 'kubejs:cobalt_ingot', nugget: 'kubejs:cobalt_nugget', sheet: 'kubejs:cobalt_sheet', rod: 'kubejs:cobalt_rod', wire: 'kubejs:cobalt_wire', block: 'kubejs:cobalt_block' } },
    { id: 'copper', type: 'metal', formula: 'Cu', mp: 1358, fluid: 'kubejs:molten_copper', items: { dust: 'kubejs:copper_dust', ingot: 'minecraft:copper_ingot', nugget: 'create:copper_nugget', sheet: 'create:copper_sheet', rod: 'createaddition:copper_rod', wire: 'createaddition:copper_wire', block: 'minecraft:copper_block' } },
    { id: 'gold', type: 'metal', formula: 'Au', mp: 1337, fluid: 'kubejs:molten_gold', items: { dust: 'kubejs:gold_dust', ingot: 'minecraft:gold_ingot', nugget: 'minecraft:gold_nugget', sheet: 'create:golden_sheet', rod: 'createaddition:gold_rod', wire: 'createaddition:gold_wire', block: 'minecraft:gold_block' } },
    { id: 'industrial_iron', type: 'metal', formula: 'Fe', mp: 1503, fluid: 'kubejs:molten_industrial_iron', items: { dust: 'kubejs:industrial_iron_dust', ingot: 'createdeco:industrial_iron_ingot', nugget: 'createdeco:industrial_iron_nugget', sheet: 'createdeco:industrial_iron_sheet', block: 'create:industrial_iron_block' } },
    { id: 'iron', type: 'metal', formula: 'Fe', mp: 1443, fluid: 'kubejs:molten_iron', items: { dust: 'kubejs:iron_dust', ingot: 'minecraft:iron_ingot', nugget: 'minecraft:iron_nugget', sheet: 'create:iron_sheet', rod: 'createaddition:iron_rod', wire: 'createaddition:iron_wire', block: 'minecraft:iron_block' } },
    { id: 'lead', type: 'metal', formula: 'Pb', mp: 601, fluid: 'kubejs:molten_lead', items: { dust: 'kubejs:lead_dust', ingot: 'tfmg:lead_ingot', nugget: 'tfmg:lead_nugget', sheet: 'tfmg:lead_sheet', rod: 'vintageimprovements:lead_rod', wire: 'vintageimprovements:lead_wire', block: 'tfmg:lead_block' } },
    { id: 'magnesium', type: 'metal', formula: 'Mg', mp: 923, fluid: 'kubejs:molten_magnesium', items: { dust: 'kubejs:magnesium_dust', ingot: 'kubejs:magnesium_ingot', nugget: 'kubejs:magnesium_nugget', sheet: 'kubejs:magnesium_sheet', rod: 'kubejs:magnesium_rod', wire: 'kubejs:magnesium_wire', block: 'kubejs:magnesium_block' } },
    { id: 'molybdenum', type: 'metal', formula: 'Mo', mp: 2896, fluid: 'kubejs:molten_molybdenum', items: { dust: 'kubejs:molybdenum_dust', ingot: 'kubejs:molybdenum_ingot', nugget: 'kubejs:molybdenum_nugget', sheet: 'kubejs:molybdenum_sheet', rod: 'kubejs:molybdenum_rod', wire: 'kubejs:molybdenum_wire', block: 'kubejs:molybdenum_block' } },
    { id: 'nickel', type: 'metal', formula: 'Ni', mp: 1728, fluid: 'kubejs:molten_nickel', items: { dust: 'kubejs:nickel_dust', ingot: 'tfmg:nickel_ingot', nugget: 'tfmg:nickel_nugget', sheet: 'tfmg:nickel_sheet', rod: 'vintageimprovements:nickel_rod', wire: 'vintageimprovements:nickel_wire', block: 'tfmg:nickel_block' } },
    { id: 'silver', type: 'metal', formula: 'Ag', mp: 1235, fluid: 'kubejs:molten_silver', items: { dust: 'kubejs:silver_dust', ingot: 'kubejs:silver_ingot', nugget: 'kubejs:silver_nugget', sheet: 'kubejs:silver_sheet', rod: 'kubejs:silver_rod', wire: 'kubejs:silver_wire', block: 'kubejs:silver_block' } },
    { id: 'steel', type: 'metal', formula: 'Fe', mp: 1807, fluid: 'tfmg:molten_steel', items: { dust: 'kubejs:steel_dust', ingot: 'tfmg:steel_ingot', nugget: 'tfmg:steel_nugget', sheet: 'tfmg:heavy_plate', rod: 'vintageimprovements:steel_rod', wire: 'vintageimprovements:steel_wire', block: 'tfmg:steel_block' } },
    { id: 'tin', type: 'metal', formula: 'Sn', mp: 505, fluid: 'kubejs:molten_tin', items: { dust: 'kubejs:tin_dust', ingot: 'kubejs:tin_ingot', nugget: 'kubejs:tin_nugget', sheet: 'kubejs:tin_sheet', rod: 'kubejs:tin_rod', wire: 'kubejs:tin_wire', block: 'kubejs:tin_block' } },
    { id: 'vanadium', type: 'metal', formula: 'V', mp: 2183, fluid: 'kubejs:molten_vanadium', items: { dust: 'kubejs:vanadium_dust', ingot: 'vintageimprovements:vanadium_ingot', nugget: 'vintageimprovements:vanadium_nugget', sheet: 'vintageimprovements:vanadium_sheet', rod: 'vintageimprovements:vanadium_rod', wire: 'vintageimprovements:vanadium_wire', block: 'vintageimprovements:vanadium_block' } },
    { id: 'zinc', type: 'metal', formula: 'Zn', mp: 693, fluid: 'kubejs:molten_zinc', items: { dust: 'kubejs:zinc_dust', ingot: 'create:zinc_ingot', nugget: 'create:zinc_nugget', sheet: 'createaddition:zinc_sheet', rod: 'vintageimprovements:zinc_rod', wire: 'vintageimprovements:zinc_wire', block: 'create:zinc_block' } },

    // non-metal
    { id: 'diamond', type: 'non-metal', formula: 'C', mp: 3820, fluid: null, items: { dust: 'kubejs:diamond_dust', ingot: 'minecraft:diamond', block: 'minecraft:diamond_block' } },

    // polymer
    { id: 'polyethylene', type: 'polymer', formula: '(C₂H₄)ₙ', mp: 395, fluid: 'kubejs:molten_polyethylene', items: { dust: 'kubejs:polyethylene_powder', ingot: 'kubejs:polyethylene', sheet: 'kubejs:polyethylene_sheet', block: 'kubejs:polyethylene_block' } },
    { id: 'polypropylene', type: 'polymer', formula: '(C₃H₆)ₙ', mp: 415, fluid: 'kubejs:molten_polypropylene', items: { dust: 'kubejs:polypropylene_powder', ingot: 'kubejs:polypropylene', sheet: 'kubejs:polypropylene_sheet', block: 'kubejs:polypropylene_block' } },
    { id: 'polyvinyl_chloride', type: 'polymer', formula: '(C₂H₃Cl)ₙ', mp: 330, fluid: 'kubejs:molten_polyvinyl_chloride', items: { dust: 'kubejs:polyvinyl_chloride_powder', ingot: 'kubejs:polyvinyl_chloride', sheet: 'kubejs:polyvinyl_chloride_sheet', block: 'kubejs:polyvinyl_chloride_block' } },
    { id: 'polybenzimidazole', type: 'polymer', formula: '(C₂₀H₁₂N₄)ₙ', mp: 700, fluid: 'kubejs:molten_polybenzimidazole', items: { dust: 'kubejs:polybenzimidazole_powder', ingot: 'kubejs:polybenzimidazole', sheet: 'kubejs:polybenzimidazole_sheet' } }
]

global.oreTypes = [
    ['kubejs:sulfur_ore', 'kubejs:sulfur', 'tfmg:sulfur_dust', false, true],
    ['kubejs:deepslate_sulfur_ore', 'kubejs:sulfur', 'tfmg:sulfur_dust', true, true],
    ['kubejs:quartz_ore', 'minecraft:quartz', 'kubejs:quartz_dust', false, true],
    ['kubejs:deepslate_quartz_ore', 'minecraft:quartz', 'kubejs:quartz_dust', true, true],
    ['minecraft:copper_ore', 'minecraft:raw_copper', 'create:crushed_raw_copper', false, true],
    ['minecraft:deepslate_copper_ore', 'minecraft:raw_copper', 'create:crushed_raw_copper', true, true],
    ['minecraft:coal_ore', 'minecraft:coal', 'kubejs:coal_dust', false, true],
    ['minecraft:deepslate_coal_ore', 'minecraft:coal', 'kubejs:coal_dust', true, true],
    ['minecraft:iron_ore', 'minecraft:raw_iron', 'create:crushed_raw_iron', false, true],
    ['minecraft:deepslate_iron_ore', 'minecraft:raw_iron', 'create:crushed_raw_iron', true, true],
    ['kubejs:fluorite_ore', 'kubejs:fluorite', 'kubejs:fluorite_dust', false, false],
    ['kubejs:deepslate_fluorite_ore', 'kubejs:fluorite', 'kubejs:fluorite_dust', true, false],
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
    ['minecraft:lapis_ore', 'minecraft:lapis_lazuli', 'kubejs:lapis_dust', false, false],
    ['minecraft:deepslate_lapis_ore', 'minecraft:lapis_lazuli', 'kubejs:lapis_dust', true, false],
    ['create:zinc_ore', 'create:raw_zinc', 'create:crushed_raw_zinc', false, false],
    ['create:deepslate_zinc_ore', 'create:raw_zinc', 'create:crushed_raw_zinc', true, false],
    ['tfmg:lead_ore', 'tfmg:raw_lead', 'create:crushed_raw_lead', false, false],
    ['tfmg:deepslate_lead_ore', 'tfmg:raw_lead', 'create:crushed_raw_lead', true, false],
    ['tfmg:nickel_ore', 'tfmg:raw_nickel', 'create:crushed_raw_nickel', false, false],
    ['tfmg:deepslate_nickel_ore', 'tfmg:raw_nickel', 'create:crushed_raw_nickel', true, false],
    ['tfmg:lithium_ore', 'tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', false, false],
    ['tfmg:deepslate_lithium_ore', 'tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', true, false]
]

global.hammers = [
    ['bronze_hammer', 'bronze', 18, 2],
    ['iron_hammer', 'iron', 20, 2],
    ['rusted_iron_hammer', 'rusted_iron', 22, 2],
    ['stone_hammer', 'stone', 25, 1],
    ['gold_hammer', 'gold', 13, 1],
    ['netherite_hammer', 'netherite', 15, 3]
]