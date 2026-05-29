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

global.materials = [
  { id: 'diamond', formula: 'C', types: ['kubejs:diamond_dust', 'minecraft:diamond', 'minecraft:diamond_block'] },

  { id: 'iron', formula: 'Fe', types: ['kubejs:iron_dust', 'minecraft:iron_ingot', 'minecraft:iron_nugget', 'create:iron_sheet', 'createaddition:iron_rod', 'createaddition:iron_wire', 'minecraft:iron_block'] },
  { id: 'industrial_iron', formula: 'Fe', types: ['kubejs:industrial_iron_dust', 'createdeco:industrial_iron_ingot', 'createdeco:industrial_iron_nugget', 'createdeco:industrial_iron_sheet', 'create:industrial_iron_block'] },
  { id: 'cast_iron', formula: 'Fe', types: ['kubejs:cast_iron_dust', 'tfmg:cast_iron_ingot', 'tfmg:cast_iron_nugget', 'tfmg:cast_iron_sheet', 'vintageimprovements:cast_iron_rod', 'vintageimprovements:cast_iron_wire', 'tfmg:cast_iron_block'] },
  { id: 'steel', formula: 'Fe', types: ['kubejs:steel_dust', 'tfmg:steel_ingot', 'tfmg:steel_nugget', 'tfmg:heavy_plate', 'vintageimprovements:steel_rod', 'vintageimprovements:steel_wire', 'tfmg:steel_block'] },

  { id: 'vanadium', formula: 'V', types: ['kubejs:vanadium_dust', 'vintageimprovements:vanadium_ingot', 'vintageimprovements:vanadium_nugget', 'vintageimprovements:vanadium_sheet', 'vintageimprovements:vanadium_rod', 'vintageimprovements:vanadium_wire', 'vintageimprovements:vanadium_block'] },
  { id: 'zinc', formula: 'Zn', types: ['kubejs:zinc_dust', 'create:zinc_ingot', 'create:zinc_nugget', 'createaddition:zinc_sheet', 'vintageimprovements:zinc_rod', 'vintageimprovements:zinc_wire', 'create:zinc_block'] },
  { id: 'copper', formula: 'Cu', types: ['kubejs:copper_dust', 'minecraft:copper_ingot', 'create:copper_nugget', 'create:copper_sheet', 'createaddition:copper_rod', 'createaddition:copper_wire', 'minecraft:copper_block'] },
  { id: 'gold', formula: 'Au', types: ['kubejs:gold_dust', 'minecraft:gold_ingot', 'minecraft:gold_nugget', 'create:golden_sheet', 'createaddition:gold_rod', 'createaddition:gold_wire', 'minecraft:gold_block'] },
  { id: 'lead', formula: 'Pb', types: ['kubejs:lead_dust', 'tfmg:lead_ingot', 'tfmg:lead_nugget', 'tfmg:lead_sheet', 'vintageimprovements:lead_rod', 'vintageimprovements:lead_wire', 'tfmg:lead_block'] },
  { id: 'nickel', formula: 'Ni', types: ['kubejs:nickel_dust', 'tfmg:nickel_ingot', 'tfmg:nickel_nugget', 'tfmg:nickel_sheet', 'vintageimprovements:nickel_rod', 'vintageimprovements:nickel_wire', 'tfmg:nickel_block'] },
  { id: 'aluminum', formula: 'Al', types: ['kubejs:aluminum_dust', 'tfmg:aluminum_ingot', 'tfmg:aluminum_nugget', 'tfmg:aluminum_sheet', 'vintageimprovements:aluminum_rod', 'vintageimprovements:aluminum_wire', 'tfmg:aluminum_block'] },
  { id: 'cobalt', formula: 'Co', types: ['kubejs:cobalt_dust', 'kubejs:cobalt_ingot', 'kubejs:cobalt_nugget', 'kubejs:cobalt_sheet', 'kubejs:cobalt_rod', 'kubejs:cobalt_wire', 'kubejs:cobalt_block'] },
  { id: 'tin', formula: 'Sn', types: ['kubejs:tin_dust', 'kubejs:tin_ingot', 'kubejs:tin_nugget', 'kubejs:tin_sheet', 'kubejs:tin_rod', 'kubejs:tin_wire', 'kubejs:tin_block'] },
  { id: 'silver', formula: 'Ag', types: ['kubejs:silver_dust', 'kubejs:silver_ingot', 'kubejs:silver_nugget', 'kubejs:silver_sheet', 'kubejs:silver_rod', 'kubejs:silver_wire', 'kubejs:silver_block'] },
  { id: 'molybdenum', formula: 'Mo', types: ['kubejs:molybdenum_dust', 'kubejs:molybdenum_ingot', 'kubejs:molybdenum_nugget', 'kubejs:molybdenum_sheet', 'kubejs:molybdenum_rod', 'kubejs:molybdenum_wire', 'kubejs:molybdenum_block'] },
  { id: 'magnesium', formula: 'Mg', types: ['kubejs:magnesium_dust', 'kubejs:magnesium_ingot', 'kubejs:magnesium_nugget', 'kubejs:magnesium_sheet', 'kubejs:magnesium_rod', 'kubejs:magnesium_wire', 'kubejs:magnesium_block'] },

  { id: 'constantan', formula: 'Cu₃Ni', types: ['kubejs:constantan_dust', 'tfmg:constantan_ingot', 'tfmg:constantan_nugget', 'tfmg:constantan_sheet', 'vintageimprovements:constantan_rod', 'tfmg:constantan_wire', 'tfmg:constantan_block'] },
  { id: 'electrum', formula: 'Au₃Ag', types: ['kubejs:electrum_dust', 'createaddition:electrum_ingot', 'createaddition:electrum_nugget', 'createaddition:electrum_sheet', 'createaddition:electrum_rod', 'createaddition:electrum_wire', 'createaddition:electrum_block'] },
  { id: 'brass', formula: 'CuZn', types: ['kubejs:brass_dust', 'create:brass_ingot', 'create:brass_nugget', 'create:brass_sheet', 'createaddition:brass_rod', 'vintageimprovements:brass_wire', 'create:brass_block'] },
  { id: 'bronze', formula: 'Cu₃Sn', types: ['kubejs:bronze_dust', 'kubejs:bronze_ingot', 'kubejs:bronze_nugget', 'kubejs:bronze_sheet', 'kubejs:bronze_rod', 'kubejs:bronze_wire', 'kubejs:bronze_block'] },

  { id: 'polyethylene', formula: '(C₂H₄)ₙ', types: ['kubejs:polyethylene_powder', 'kubejs:polyethylene', 'kubejs:polyethylene_sheet', 'kubejs:polyethylene_block'] },
  { id: 'polypropylene', formula: '(C₃H₆)ₙ', types: ['kubejs:polypropylene_powder', 'kubejs:polypropylene', 'kubejs:polypropylene_sheet', 'kubejs:polypropylene_block'] },
  { id: 'polyvinyl_chloride', formula: '(C₂H₃Cl)ₙ', types: ['kubejs:polyvinyl_chloride_powder', 'kubejs:polyvinyl_chloride', 'kubejs:polyvinyl_chloride_sheet', 'kubejs:polyvinyl_chloride_block'] },
  //{ id: 'nylon_66', formula: '(C₁₂H₂₂N₂O₂)ₙ', types: [] }
]