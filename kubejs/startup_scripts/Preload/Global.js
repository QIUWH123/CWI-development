// priority: 1000

global.stoneTypes = {
    stone: {
        id: 'stone', hardness: 2.4, sound: 'stone', color: '#7F7F7F',
        items: {
            block:      'minecraft:stone',
            cobblestone:'minecraft:cobblestone',
            gravel:     'minecraft:gravel',
            powder:     'kubejs:stone_powder'
        }
    },
    deepslate: {
        id: 'deepslate', hardness: 3.3, sound: 'deepslate', color: '#3A3A3A',
        items: {
            block:      'minecraft:deepslate',
            cobblestone:'minecraft:cobbled_deepslate',
            gravel:     'kubejs:deepslate_gravel',
            powder:     'kubejs:deepslate_powder'
        }
    },
    granite: {
        id: 'granite', hardness: 4.3, sound: 'stone', color: '#C08080',
        items: {
            block:      'minecraft:granite',
            cobblestone:'kubejs:cobbled_granite',
            gravel:     'kubejs:granite_gravel',
            powder:     'kubejs:granite_powder'
        }
    },
    diorite: {
        id: 'diorite', hardness: 4.0, sound: 'stone', color: '#C4C4C4',
        items: {
            block:      'minecraft:diorite',
            cobblestone:'kubejs:cobbled_diorite',
            gravel:     'kubejs:diorite_gravel',
            powder:     'kubejs:diorite_powder'
        }
    },
    andesite: {
        id: 'andesite', hardness: 3.7, sound: 'stone', color: '#8C8C8C',
        items: {
            block:      'minecraft:andesite',
            cobblestone:'kubejs:cobbled_andesite',
            gravel:     'kubejs:andesite_gravel',
            powder:     'kubejs:andesite_powder'
        }
    },
    basalt: {
        id: 'basalt', hardness: 4.0, sound: 'stone', color: '#2A2A2A',
        items: {
            block:      'minecraft:basalt',
            cobblestone:'kubejs:cobbled_basalt',
            gravel:     'kubejs:basalt_gravel',
            powder:     'kubejs:basalt_powder'
        }
    },
    claystone: {
        id: 'claystone', hardness: 1.7, sound: 'deepslate', color: '#B0965F',
        items: {
            block:      'kubejs:claystone',
            cobblestone:'kubejs:cobbled_claystone',
            gravel:     'kubejs:claystone_gravel',
            powder:     'kubejs:claystone_powder'
        }
    },
    schist: {
        id: 'schist', hardness: 3.4, sound: 'stone', color: '#8A8A8A',
        items: {
            block:      'kubejs:schist',
            cobblestone:'kubejs:cobbled_schist',
            gravel:     'kubejs:schist_gravel',
            powder:     'kubejs:schist_powder'
        }
    },
    gneiss: {
        id: 'gneiss', hardness: 4.5, sound: 'stone', color: '#9A8B7A',
        items: {
            block:      'kubejs:gneiss',
            cobblestone:'kubejs:cobbled_gneiss',
            gravel:     'kubejs:gneiss_gravel',
            powder:     'kubejs:gneiss_powder'
        }
    },
    rhyolite: {
        id: 'rhyolite', hardness: 4.5, sound: 'stone', color: '#C0B0A0',
        items: {
            block:      'kubejs:rhyolite',
            cobblestone:'kubejs:cobbled_rhyolite',
            gravel:     'kubejs:rhyolite_gravel',
            powder:     'kubejs:rhyolite_powder'
        }
    },
    shale: {
        id: 'shale', hardness: 2.3, sound: 'deepslate', color: '#5d5d5d',
        items: {
            block:      'kubejs:shale',
            cobblestone:'kubejs:cobbled_shale',
            gravel:     'kubejs:shale_gravel',
            powder:     'kubejs:shale_powder'
        }
    },
    conglomerate: {
        id: 'conglomerate', hardness: 2.8, sound: 'stone', color: '#4a2318',
        items: {
            block:      'darkerdepths:duskrock',
            cobblestone:'kubejs:cobbled_conglomerate',
            gravel:     'kubejs:conglomerate_gravel',
            powder:     'kubejs:conglomerate_powder'
        }
    },
    phyllite: {
        id: 'phyllite', hardness: 2.8, sound: 'stone', color: '#606769',
        items: {
            block:      'darkerdepths:grimestone',
            cobblestone:'kubejs:cobbled_phyllite',
            gravel:     'kubejs:phyllite_gravel',
            powder:     'kubejs:phyllite_powder'
        }
    },
    quartzite: {
        id: 'quartzite', hardness: 1.7, sound: 'stone', color: '#b59f63',
        items: {
            block:      'darkerdepths:aridrock',
            cobblestone:'kubejs:cobbled_quartzite',
            gravel:     'kubejs:quartzite_gravel',
            powder:     'kubejs:quartzite_powder'
        }
    },
    darkslate: {
        id: 'darkslate', hardness: 3.8, sound: 'deepslate', color: '#232121',
        items: {
            block:      'darkerdepths:darkslate',
            cobblestone:'kubejs:cobbled_darkslate',
            gravel:     'kubejs:darkslate_gravel',
            powder:     'kubejs:darkslate_powder'
        }
    }
}

global.compoundOreTypes = {
    // uraninite: {
    //     id: 'uraninite', realId: 'uraninite', mod: 'kubejs', colored: false,
    //     hardness: 4, resistance: 6, sound: 'amethyst', requiredTool: 'iron', process: 'false',
    //     itemTexture: 'kubejs:item/ores/uraninite', blockTexture: 'kubejs:block/ores/uraninite_side'
    // },
    // gravitite: {
    //     id: 'gravitite', realId: 'gravitite', mod: 'kubejs', colored: false,
    //     hardness: 6, resistance: 12, sound: 'amethyst', requiredTool: 'diamond', process: 'false',
    //     itemTexture: 'kubejs:item/ores/gravitite', blockTexture: 'kubejs:block/ores/gravitite_side'
    // },

    cassiterite: {
        id: 'cassiterite', realId: 'cassiterite', mod: 'kubejs', colored: true,
        hardness: 4, resistance: 6, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#5c5c54', texture: 'kubejs:block/ores/cassiterite'
    },
    cooperite: {
        id: 'cooperite', realId: 'cooperite', mod: 'kubejs', colored: true,
        hardness: 6, resistance: 12, sound: 'ancient_debris', requiredTool: 'iron', process: 'true',
        color: '#b5b4a5', texture: 'kubejs:block/ores/cooperite'
    },
    chalcocite: {
        id: 'chalcocite', realId: 'chalcocite', mod: 'kubejs', colored: true,
        hardness: 4.5, resistance: 8, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#444d5d', texture: 'kubejs:block/ores/chalcocite'
    },
    magnesite: {
        id: 'magnesite', realId: 'magnesite', mod: 'kubejs', colored: true,
        hardness: 2.5, resistance: 5, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#d79552', texture: 'kubejs:block/ores/magnesite'
    },
    magnetite: {
        id: 'magnetite', realId: 'magnetite', mod: 'kubejs', colored: true,
        hardness: 6, resistance: 8, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#5c5d66', texture: 'kubejs:block/ores/magnetite'
    },
    halite: {
        id: 'halite', realId: 'halite', mod: 'kubejs', colored: false,
        hardness: 3, resistance: 5, sound: 'calcite', requiredTool: 'wooden', process: 'false',
        color: '#000000', texture: 'kubejs:block/ores/halite', itemTexture: 'tfc:item/ore/halite'
    },
    chromite: {
        id: 'chromite', realId: 'chromite', mod: 'kubejs', colored: true,
        hardness: 4, resistance: 6, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#a66c5b', texture: 'kubejs:block/ores/chromite'
    },
    pentlandite: {
        id: 'pentlandite', realId: 'pentlandite', mod: 'kubejs', colored: true,
        hardness: 3, resistance: 6, sound: 'calcite', requiredTool: 'wooden', process: 'true',
        color: '#867c72', texture: 'kubejs:block/ores/pentlandite'
    },
    sphalerite: {
        id: 'sphalerite', realId: 'sphalerite', mod: 'kubejs', colored: true,
        hardness: 3, resistance: 6, sound: 'stone', requiredTool: 'wooden', process: 'true',
        color: '#95968d', texture: 'kubejs:block/ores/sphalerite'
    },
    rutile: {
        id: 'rutile', realId: 'rutile', mod: 'kubejs', colored: true,
        hardness: 4, resistance: 6, sound: 'stone', requiredTool: 'iron', process: 'true',
        color: '#c3434c', texture: 'kubejs:block/ores/rutile_side'
    },
    hematite: {
        id: 'hematite', realId: 'crimsite', mod: 'create', colored: true,
        hardness: 6, resistance: 8, sound: 'stone', requiredTool: 'iron', process: 'true',
        color: '#923c44', texture: 'create:block/palettes/stone_types/natural/crimsite_0'
    },
    azurite: {
        id: 'azurite', realId: 'asurine', mod: 'create', colored: true,
        hardness: 3, resistance: 4, sound: 'amethyst', requiredTool: 'stone', process: 'true',
        color: '#6b98b4', texture: 'create:block/palettes/stone_types/natural/asurine_0'
    },
    malachite: {
        id: 'malachite', realId: 'veridium', mod: 'create', colored: true,
        hardness: 3, resistance: 4, sound: 'amethyst', requiredTool: 'stone', process: 'true',
        color: '#407e6d', texture: 'create:block/palettes/stone_types/natural/veridium_0'
    },
    petzite: {
        id: 'petzite', realId: 'ochrum', mod: 'create', colored: true,
        hardness: 4, resistance: 6, sound: 'stone', requiredTool: 'iron', process: 'true',
        color: '#b89b5f', texture: 'create:block/palettes/stone_types/natural/ochrum_0'
    },
    lignite: {
        id: 'lignite', realId: 'lignite', mod: 'tfmg', colored: true,
        hardness: 1, resistance: 1.5, sound: 'mud', requiredTool: 'wooden', process: 'false',
        color: '#000000', texture: 'tfmg:block/lignite', itemTexture: 'tfc:item/ore/lignite'
    },
    sulfur: {
        id: 'sulfur', realId: 'sulfur', mod: 'tfmg', colored: true,
        hardness: 1.5, resistance: 2, sound: 'ancient_debris', requiredTool: 'wooden', process: 'false',
        color: '#000000', texture: 'tfmg:block/sulfur', itemTexture: 'kubejs:item/ores/sulfur'
    },
    bauxite: {
        id: 'bauxite', realId: 'bauxite', mod: 'tfmg', colored: true,
        hardness: 3, resistance: 4, sound: 'deepslate', requiredTool: 'stone', process: 'true',
        color: '#5f3938', texture: 'tfmg:block/palettes/stone_types/natural/bauxite_0'
    },
    galena: {
        id: 'galena', realId: 'galena', mod: 'tfmg', colored: true,
        hardness: 3, resistance: 5, sound: 'stone', requiredTool: 'stone', process: 'true',
        color: '#413d74', texture: 'tfmg:block/palettes/stone_types/natural/galena_0'
    }
}

global.productionMaps = {
    cassiterite: {
        main: 'tin', sulfur: false, leachable: false,
        hostRocks: [['granite', 0.71], ['rhyolite', 0.32]],
        by: [['molybdenum', 0.019], ['copper', 0.021], ['iron', 0.067]]
    },
    cooperite: {
        main: 'platinum', sulfur: true, leachable: false,
        hostRocks: [['darkslate', 0.79], ['phyllite', 0.22]],
        by: [['nickel', 0.031]]
    },
    chalcocite: {
        main: 'copper', sulfur: true, leachable: true,
        hostRocks: [['diorite', 0.61], ['granite', 0.39]],
        by: [['molybdenum', 0.049], ['gold', 0.021]]
    },
    magnesite: {
        main: 'magnesium', sulfur: false, leachable: true,
        hostRocks: [['quartzite', 0.51], ['shale', 0.49]],
        by: [['lithium', 0.021]]
    },
    magnetite: {
        main: 'iron', sulfur: false, leachable: false,
        hostRocks: [['quartzite', 0.62], ['gneiss', 0.41]],
        by: [['vanadium', 0.061], ['titanium', 0.029]]
    },
    chromite: {
        main: 'chromium', sulfur: false, leachable: false,
        hostRocks: [['darkslate', 0.78], ['phyllite', 0.19]],
        by: [['magnesium', 0.18], ['iron', 0.101], ['aluminum', 0.051]]
    },
    pentlandite: {
        main: 'nickel', sulfur: true, leachable: true,
        hostRocks: [['darkslate', 0.79], ['phyllite', 0.22]],
        by: [['cobalt', 0.049], ['iron', 0.298]]
    },
    sphalerite: {
        main: 'zinc', sulfur: true, leachable: true,
        hostRocks: [['shale', 0.58], ['quartzite', 0.42]],
        by: [['iron', 0.097], ['lead', 0.021]]
    },
    rutile: {
        main: 'titanium', sulfur: false, leachable: false,
        hostRocks: [['gneiss', 0.63], ['schist', 0.37]],
        by: []
    },
    hematite: {
        main: 'iron', sulfur: false, leachable: false,
        hostRocks: [['quartzite', 0.61], ['gneiss', 0.43]],
        by: []
    },
    azurite: {
        main: 'copper', sulfur: false, leachable: true,
        hostRocks: [['granite', 0.59], ['diorite', 0.38]],
        by: [['silver', 0.011]]
    },
    malachite: {
        main: 'copper', sulfur: false, leachable: true,
        hostRocks: [['granite', 0.57], ['diorite', 0.36]],
        by: [['silver', 0.009]]
    },
    petzite: {
        main: 'gold', sulfur: false, leachable: false,
        hostRocks: [['rhyolite', 0.64], ['andesite', 0.33]],
        by: [['silver', 0.101]]
    },
    bauxite: {
        main: 'aluminum', sulfur: false, leachable: false,
        hostRocks: [['claystone', 0.76], ['conglomerate', 0.18]],
        by: []
    },
    galena: {
        main: 'lead', sulfur: true, leachable: true,
        hostRocks: [['shale', 0.55], ['quartzite', 0.44]],
        by: [['zinc', 0.061], ['silver', 0.008]]
    }
}

global.outPutMaterial = [
    ['aluminum', false],
    ['cobalt', true],
    ['copper', true],
    ['gold', true],
    ['iron', true],
    ['lithium', true],
    ['magnesium', true],
    ['chromium', false],
    ['titanium', false],
    ['platinum', false],
    ['nickel', true],
    ['silver', true],
    ['molybdenum', true],
    ['vanadium', true],
    ['lead', true],
    ['zinc', true],
    ['tin', true]
]

//₀₁₂₃₄₅₆₇₈₉
global.materialTypes = {
// Alloys
    andesite_alloy: {
        id: 'andesite_alloy', type: 'alloy', formula: '?',
        mp: 1198, stiffness: 156, fluid: 'kubejs:molten_andesite_alloy',
        items: {
            powder: 'kubejs:andesite_alloy_powder',
            nugget: 'kubejs:andesite_alloy_nugget',
            ingot:  'create:andesite_alloy',
            rod:    'kubejs:andesite_alloy_rod',
            wire:   'kubejs:andesite_alloy_wire',
            sheet:  'kubejs:andesite_alloy_sheet',
            spring: 'kubejs:andesite_alloy_spring',
            block:  'create:andesite_alloy_block'
        }
    },
    brass: {
        id: 'brass', type: 'alloy', formula: 'CuZn',
        mp: 1153, stiffness: 108, fluid: 'kubejs:molten_brass',
        items: {
            powder: 'kubejs:brass_powder',
            ingot:  'create:brass_ingot',
            nugget: 'create:brass_nugget',
            sheet:  'create:brass_sheet',
            rod:    'createaddition:brass_rod',
            wire:   'kubejs:brass_wire',
            spring: 'kubejs:brass_spring',
            block:  'create:brass_block'
        }
    },
    bronze: {
        id: 'bronze', type: 'alloy', formula: 'Cu₃Sn',
        mp: 1217, stiffness: 113, fluid: 'kubejs:molten_bronze',
        items: {
            powder: 'kubejs:bronze_powder',
            ingot:  'kubejs:bronze_ingot',
            nugget: 'kubejs:bronze_nugget',
            sheet:  'kubejs:bronze_sheet',
            rod:    'kubejs:bronze_rod',
            wire:   'kubejs:bronze_wire',
            spring: 'kubejs:bronze_spring',
            block:  'kubejs:bronze_block'
        }
    },
    stainless_steel: {
        id: 'stainless_steel', type: 'alloy', formula: 'Fe₃₂Cr₈Ni₄Mo',
        mp: 1783, stiffness: 208, fluid: 'kubejs:molten_stainless_steel',
        items: {
            powder: 'kubejs:stainless_steel_powder',
            ingot:  'kubejs:stainless_steel_ingot',
            nugget: 'kubejs:stainless_steel_nugget',
            sheet:  'kubejs:stainless_steel_sheet',
            rod:    'kubejs:stainless_steel_rod',
            wire:   'kubejs:stainless_steel_wire',
            spring: 'kubejs:stainless_steel_spring',
            block:  'kubejs:stainless_steel_block'
        }
    },
    constantan: {
        id: 'constantan', type: 'alloy', formula: 'Cu₃Ni',
        mp: 1525, stiffness: 160, fluid: 'kubejs:molten_constantan',
        items: {
            powder: 'kubejs:constantan_powder',
            ingot:  'tfmg:constantan_ingot',
            nugget: 'tfmg:constantan_nugget',
            sheet:  'kubejs:constantan_sheet',
            rod:    'kubejs:constantan_rod',
            wire:   'kubejs:constantan_wire',
            spring: 'kubejs:constantan_spring',
            block:  'tfmg:constantan_block'
        }
    },
    electrum: {
        id: 'electrum', type: 'alloy', formula: 'Au₃Ag',
        mp: 1213, stiffness: 75, fluid: 'kubejs:molten_electrum',
        items: {
            powder: 'kubejs:electrum_powder',
            ingot:  'createaddition:electrum_ingot',
            nugget: 'createaddition:electrum_nugget',
            sheet:  'createaddition:electrum_sheet',
            rod:    'createaddition:electrum_rod',
            wire:   'createaddition:electrum_wire',
            spring: 'kubejs:electrum_spring',
            block:  'createaddition:electrum_block'
        }
    },
    netherite: {
        id: 'netherite', type: 'alloy', formula: '?',
        mp: 4876, stiffness: 539, fluid: 'kubejs:molten_netherite',
        items: {
            powder: 'kubejs:netherite_powder',
            ingot:  'minecraft:netherite_ingot',
            nugget: 'kubejs:netherite_nugget',
            sheet:  'kubejs:netherite_sheet',
            rod:    'kubejs:netherite_rod',
            wire:   'kubejs:netherite_wire',
            spring: 'kubejs:netherite_spring',
            block:  'minecraft:netherite_block'
        }
    },

// Metals
    aluminum: {
        id: 'aluminum', type: 'metal', formula: 'Al',
        mp: 933, stiffness: 70, fluid: 'kubejs:molten_aluminum',
        items: {
            powder: 'kubejs:aluminum_powder',
            ingot:  'tfmg:aluminum_ingot',
            nugget: 'tfmg:aluminum_nugget',
            sheet:  'tfmg:aluminum_sheet',
            rod:    'kubejs:aluminum_rod',
            wire:   'kubejs:aluminum_wire',
            spring: 'kubejs:aluminum_spring',
            block:  'tfmg:aluminum_block'
        }
    },
    cast_iron: {
        id: 'cast_iron', type: 'metal', formula: 'Fe',
        mp: 1473, stiffness: 142, fluid: 'kubejs:molten_cast_iron',
        items: {
            powder: 'kubejs:cast_iron_powder',
            ingot:  'tfmg:cast_iron_ingot',
            nugget: 'tfmg:cast_iron_nugget',
            sheet:  'tfmg:cast_iron_sheet',
            rod:    'kubejs:cast_iron_rod',
            wire:   'kubejs:cast_iron_wire',
            spring: 'kubejs:cast_iron_spring',
            block:  'tfmg:cast_iron_block'
        }
    },
    cobalt: {
        id: 'cobalt', type: 'metal', formula: 'Co',
        mp: 1768, stiffness: 210, fluid: 'kubejs:molten_cobalt',
        items: {
            powder: 'kubejs:cobalt_powder',
            ingot:  'kubejs:cobalt_ingot',
            nugget: 'kubejs:cobalt_nugget',
            sheet:  'kubejs:cobalt_sheet',
            rod:    'kubejs:cobalt_rod',
            wire:   'kubejs:cobalt_wire',
            spring: 'kubejs:cobalt_spring',
            block:  'kubejs:cobalt_block'
        }
    },
    copper: {
        id: 'copper', type: 'metal', formula: 'Cu',
        mp: 1358, stiffness: 120, fluid: 'kubejs:molten_copper',
        items: {
            powder: 'kubejs:copper_powder',
            ingot:  'minecraft:copper_ingot',
            nugget: 'create:copper_nugget',
            sheet:  'create:copper_sheet',
            rod:    'createaddition:copper_rod',
            wire:   'createaddition:copper_wire',
            spring: 'kubejs:copper_spring',
            block:  'minecraft:copper_block'
        }
    },
    gold: {
        id: 'gold', type: 'metal', formula: 'Au',
        mp: 1337, stiffness: 79, fluid: 'kubejs:molten_gold',
        items: {
            powder: 'kubejs:gold_powder',
            ingot:  'minecraft:gold_ingot',
            nugget: 'minecraft:gold_nugget',
            sheet:  'create:golden_sheet',
            rod:    'createaddition:gold_rod',
            wire:   'createaddition:gold_wire',
            spring: 'kubejs:gold_spring',
            block:  'minecraft:gold_block'
        }
    },
    industrial_iron: {
        id: 'industrial_iron', type: 'metal', formula: 'Fe',
        mp: 1503, stiffness: 210, fluid: 'kubejs:molten_industrial_iron',
        items: {
            powder: 'kubejs:industrial_iron_powder',
            ingot:  'kubejs:industrial_iron_ingot',
            nugget: 'kubejs:industrial_iron_nugget',
            sheet:  'kubejs:industrial_iron_sheet',
            rod:    'kubejs:industrial_iron_rod',
            wire:   'kubejs:industrial_iron_wire',
            spring: 'kubejs:industrial_iron_spring',
            block:  'create:industrial_iron_block'
        }
    },
    rusted_iron: {
        id: 'rusted_iron', type: 'metal', formula: 'Fe',
        mp: 1257, stiffness: 186, fluid: null,
        items: {
            powder: 'kubejs:rusted_iron_powder',
            ingot:  'kubejs:rusted_iron_ingot',
            nugget: 'kubejs:rusted_iron_nugget',
            sheet:  'kubejs:rusted_iron_sheet',
            rod:    'kubejs:rusted_iron_rod',
            wire:   'kubejs:rusted_iron_wire',
            spring: 'kubejs:rusted_iron_spring',
            block:  'kubejs:rusted_iron_block'
        }
    },
    iron: {
        id: 'iron', type: 'metal', formula: 'Fe',
        mp: 1443, stiffness: 196, fluid: 'kubejs:molten_iron',
        items: {
            powder: 'kubejs:iron_powder',
            ingot:  'minecraft:iron_ingot',
            nugget: 'minecraft:iron_nugget',
            sheet:  'create:iron_sheet',
            rod:    'createaddition:iron_rod',
            wire:   'createaddition:iron_wire',
            spring: 'kubejs:iron_spring',
            block:  'minecraft:iron_block'
        }
    },
    lead: {
        id: 'lead', type: 'metal', formula: 'Pb',
        mp: 601, stiffness: 16, fluid: 'kubejs:molten_lead',
        items: {
            powder: 'kubejs:lead_powder',
            ingot:  'tfmg:lead_ingot',
            nugget: 'tfmg:lead_nugget',
            sheet:  'tfmg:lead_sheet',
            rod:    'kubejs:lead_rod',
            wire:   'kubejs:lead_wire',
            spring: 'kubejs:lead_spring',
            block:  'tfmg:lead_block'
        }
    },
    lithium: {
        id: 'lithium', type: 'metal', formula: 'Li',
        mp: 453, stiffness: 7, fluid: 'kubejs:molten_lithium',
        items: {
            powder: 'kubejs:lithium_powder',
            ingot:  'tfmg:lithium_ingot',
            nugget: 'tfmg:lithium_nugget',
            sheet:  'kubejs:lithium_sheet',
            rod:    'kubejs:lithium_rod',
            wire:   'kubejs:lithium_wire',
            spring: 'kubejs:lithium_spring',
            block:  'tfmg:lithium_block'
        }
    },
    magnesium: {
        id: 'magnesium', type: 'metal', formula: 'Mg',
        mp: 923, stiffness: 45, fluid: 'kubejs:molten_magnesium',
        items: {
            powder: 'kubejs:magnesium_powder',
            ingot:  'kubejs:magnesium_ingot',
            nugget: 'kubejs:magnesium_nugget',
            sheet:  'kubejs:magnesium_sheet',
            rod:    'kubejs:magnesium_rod',
            wire:   'kubejs:magnesium_wire',
            spring: 'kubejs:magnesium_spring',
            block:  'kubejs:magnesium_block'
        }
    },
    chromium: {
        id: 'chromium', type: 'metal', formula: 'Cr',
        mp: 2176, stiffness: 279, fluid: 'kubejs:molten_chromium',
        items: {
            powder: 'kubejs:chromium_powder',
            ingot:  'kubejs:chromium_ingot',
            nugget: 'kubejs:chromium_nugget',
            sheet:  'kubejs:chromium_sheet',
            rod:    'kubejs:chromium_rod',
            wire:   'kubejs:chromium_wire',
            spring: 'kubejs:chromium_spring',
            block:  'kubejs:chromium_block'
        }
    },
    molybdenum: {
        id: 'molybdenum', type: 'metal', formula: 'Mo',
        mp: 2896, stiffness: 329, fluid: 'kubejs:molten_molybdenum',
        items: {
            powder: 'kubejs:molybdenum_powder',
            ingot:  'kubejs:molybdenum_ingot',
            nugget: 'kubejs:molybdenum_nugget',
            sheet:  'kubejs:molybdenum_sheet',
            rod:    'kubejs:molybdenum_rod',
            wire:   'kubejs:molybdenum_wire',
            spring: 'kubejs:molybdenum_spring',
            block:  'kubejs:molybdenum_block'
        }
    },
    titanium: {
        id: 'titanium', type: 'metal', formula: 'Ti',
        mp: 1961, stiffness: 127, fluid: 'kubejs:molten_titanium',
        items: {
            powder: 'kubejs:titanium_powder',
            ingot:  'kubejs:titanium_ingot',
            nugget: 'kubejs:titanium_nugget',
            sheet:  'kubejs:titanium_sheet',
            rod:    'kubejs:titanium_rod',
            wire:   'kubejs:titanium_wire',
            spring: 'kubejs:titanium_spring',
            block:  'kubejs:titanium_block'
        }
    },
    platinum: {
        id: 'platinum', type: 'metal', formula: 'Pt',
        mp: 2041, stiffness: 168, fluid: 'kubejs:molten_platinum',
        items: {
            powder: 'kubejs:platinum_powder',
            ingot:  'kubejs:platinum_ingot',
            nugget: 'kubejs:platinum_nugget',
            sheet:  'kubejs:platinum_sheet',
            rod:    'kubejs:platinum_rod',
            wire:   'kubejs:platinum_wire',
            spring: 'kubejs:platinum_spring',
            block:  'kubejs:platinum_block'
        }
    },
    nickel: {
        id: 'nickel', type: 'metal', formula: 'Ni',
        mp: 1728, stiffness: 205, fluid: 'kubejs:molten_nickel',
        items: {
            powder: 'kubejs:nickel_powder',
            ingot:  'tfmg:nickel_ingot',
            nugget: 'tfmg:nickel_nugget',
            sheet:  'tfmg:nickel_sheet',
            rod:    'kubejs:nickel_rod',
            wire:   'kubejs:nickel_wire',
            spring: 'kubejs:nickel_spring',
            block:  'tfmg:nickel_block'
        }
    },
    silver: {
        id: 'silver', type: 'metal', formula: 'Ag',
        mp: 1235, stiffness: 83, fluid: 'kubejs:molten_silver',
        items: {
            powder: 'kubejs:silver_powder',
            ingot:  'kubejs:silver_ingot',
            nugget: 'kubejs:silver_nugget',
            sheet:  'kubejs:silver_sheet',
            rod:    'kubejs:silver_rod',
            wire:   'kubejs:silver_wire',
            spring: 'kubejs:silver_spring',
            block:  'kubejs:silver_block'
        }
    },
    steel: {
        id: 'steel', type: 'metal', formula: 'Fe',
        mp: 1807, stiffness: 223, fluid: 'kubejs:molten_steel',
        items: {
            powder: 'kubejs:steel_powder',
            ingot:  'tfmg:steel_ingot',
            nugget: 'tfmg:steel_nugget',
            sheet:  'tfmg:heavy_plate',
            rod:    'kubejs:steel_rod',
            wire:   'kubejs:steel_wire',
            spring: 'kubejs:steel_spring',
            block:  'tfmg:steel_block'
        }
    },
    tin: {
        id: 'tin', type: 'metal', formula: 'Sn',
        mp: 505, stiffness: 50, fluid: 'kubejs:molten_tin',
        items: {
            powder: 'kubejs:tin_powder',
            ingot:  'kubejs:tin_ingot',
            nugget: 'kubejs:tin_nugget',
            sheet:  'kubejs:tin_sheet',
            rod:    'kubejs:tin_rod',
            wire:   'kubejs:tin_wire',
            spring: 'kubejs:tin_spring',
            block:  'kubejs:tin_block'
        }
    },
    vanadium: {
        id: 'vanadium', type: 'metal', formula: 'V',
        mp: 2183, stiffness: 128, fluid: 'kubejs:molten_vanadium',
        items: {
            powder: 'kubejs:vanadium_powder',
            ingot:  'vintageimprovements:vanadium_ingot',
            nugget: 'vintageimprovements:vanadium_nugget',
            sheet:  'vintageimprovements:vanadium_sheet',
            rod:    'kubejs:vanadium_rod',
            wire:   'kubejs:vanadium_wire',
            spring: 'kubejs:vanadium_spring',
            block:  'vintageimprovements:vanadium_block'
        }
    },
    zinc: {
        id: 'zinc', type: 'metal', formula: 'Zn',
        mp: 693, stiffness: 108, fluid: 'kubejs:molten_zinc',
        items: {
            powder: 'kubejs:zinc_powder',
            ingot:  'create:zinc_ingot',
            nugget: 'create:zinc_nugget',
            sheet:  'createaddition:zinc_sheet',
            rod:    'kubejs:zinc_rod',
            wire:   'kubejs:zinc_wire',
            spring: 'kubejs:zinc_spring',
            block:  'create:zinc_block'
        }
    },

// Non-Metal
    diamond: {
        id: 'diamond', type: 'non-metal', formula: 'C',
        mp: 3820, stiffness: 1089, fluid: null,
        items: {
            powder: 'kubejs:diamond_powder',
            ingot:  'minecraft:diamond',
            block:  'minecraft:diamond_block'
        }
    },

// Metalloids
    silicon: {
        id: 'silicon', type: 'metalloid', formula: 'Si',
        mp: 1687, stiffness: 132, fluid: 'tfmg:liquid_silicon',
        items: {
            powder: 'kubejs:silicon_powder',
            ingot:  'tfmg:silicon_ingot'
        }
    },

// Polymer
    polyethylene: {
        id: 'polyethylene', type: 'polymer', formula: '(C₂H₄)ₙ',
        mp: 395, stiffness: 0.5, fluid: 'kubejs:molten_polyethylene',
        items: {
            powder: 'kubejs:polyethylene_powder',
            ingot:  'kubejs:polyethylene',
            sheet:  'kubejs:polyethylene_sheet',
            block:  'kubejs:polyethylene_block'
        }
    },
    polypropylene: {
        id: 'polypropylene', type: 'polymer', formula: '(C₃H₆)ₙ',
        mp: 415, stiffness: 1.2, fluid: 'kubejs:molten_polypropylene',
        items: {
            powder: 'kubejs:polypropylene_powder',
            ingot:  'kubejs:polypropylene',
            sheet:  'kubejs:polypropylene_sheet',
            block:  'kubejs:polypropylene_block'
        }
    },
    polyvinyl_chloride: {
        id: 'polyvinyl_chloride', type: 'polymer', formula: '(C₂H₃Cl)ₙ',
        mp: 330, stiffness: 3.0, fluid: 'kubejs:molten_polyvinyl_chloride',
        items: {
            powder: 'kubejs:polyvinyl_chloride_powder',
            ingot:  'kubejs:polyvinyl_chloride',
            sheet:  'kubejs:polyvinyl_chloride_sheet',
            block:  'kubejs:polyvinyl_chloride_block'
        }
    },
    polybenzimidazole: {
        id: 'polybenzimidazole', type: 'polymer', formula: '(C₂₀H₁₂N₄)ₙ',
        mp: 700, stiffness: 7.0, fluid: 'kubejs:molten_polybenzimidazole',
        items: {
            powder: 'kubejs:polybenzimidazole_powder',
            ingot:  'kubejs:polybenzimidazole',
            sheet:  'kubejs:polybenzimidazole_sheet'
        }
    }
}

global.oreTypes = [
    [ { normal: 'kubejs:sulfur_ore', deepslate: 'kubejs:deepslate_sulfur_ore' }, 'kubejs:sulfur_item', '', 'kubejs:sulfur_powder', true ],
    [ { normal: 'kubejs:quartz_ore', deepslate: 'kubejs:deepslate_quartz_ore' }, 'minecraft:quartz', '', 'kubejs:quartz_powder', true ],
    [ { normal: 'minecraft:copper_ore', deepslate: 'minecraft:deepslate_copper_ore' }, 'minecraft:raw_copper', 'create:crushed_raw_copper', 'kubejs:raw_copper_powder', true ],
    [ { normal: 'minecraft:coal_ore', deepslate: 'minecraft:deepslate_coal_ore' }, 'minecraft:coal', '', 'kubejs:coal_powder', true ],
    [ { normal: 'minecraft:iron_ore', deepslate: 'minecraft:deepslate_iron_ore' }, 'minecraft:raw_iron', 'create:crushed_raw_iron', 'kubejs:raw_iron_powder', true ],
    [ { normal: 'kubejs:fluorite_ore', deepslate: 'kubejs:deepslate_fluorite_ore' }, 'kubejs:fluorite', '', 'kubejs:fluorite_powder', false ],
    [ { normal: 'minecraft:redstone_ore', deepslate: 'minecraft:deepslate_redstone_ore' }, 'kubejs:redstone', '', 'minecraft:redstone', false ],
    [ { normal: 'kubejs:silver_ore', deepslate: 'kubejs:deepslate_silver_ore' }, 'kubejs:raw_silver', 'kubejs:crushed_raw_silver', 'kubejs:raw_silver_powder', false ],
    [ { normal: 'kubejs:tin_ore', deepslate: 'kubejs:deepslate_tin_ore' }, 'kubejs:raw_tin', 'kubejs:crushed_raw_tin', 'kubejs:raw_tin_powder', false ],
    [ { normal: 'minecraft:gold_ore', deepslate: 'minecraft:deepslate_gold_ore' }, 'minecraft:raw_gold', 'create:crushed_raw_gold', 'kubejs:raw_gold_powder', false ],
    [ { normal: 'minecraft:diamond_ore', deepslate: 'minecraft:deepslate_diamond_ore' }, 'minecraft:diamond', '', '', false ],
    [ { normal: 'minecraft:emerald_ore', deepslate: 'minecraft:deepslate_emerald_ore' }, 'minecraft:emerald', '', '', false ],
    [ { normal: 'minecraft:lapis_ore', deepslate: 'minecraft:deepslate_lapis_ore' }, 'minecraft:lapis_lazuli', '', 'kubejs:lapis_powder', false ],
    [ { normal: 'create:zinc_ore', deepslate: 'create:deepslate_zinc_ore' }, 'create:raw_zinc', 'create:crushed_raw_zinc', 'kubejs:raw_zinc_powder', false ],
    [ { normal: 'tfmg:lead_ore', deepslate: 'tfmg:deepslate_lead_ore' }, 'tfmg:raw_lead', 'create:crushed_raw_lead', 'kubejs:raw_lead_powder', false ],
    [ { normal: 'tfmg:nickel_ore', deepslate: 'tfmg:deepslate_nickel_ore' }, 'tfmg:raw_nickel', 'create:crushed_raw_nickel', 'kubejs:raw_nickel_powder', false ],
    [ { normal: 'tfmg:lithium_ore', deepslate: 'tfmg:deepslate_lithium_ore' }, 'tfmg:raw_lithium', 'tfmg:crushed_raw_lithium', 'kubejs:raw_lithium_powder', false ]
]

global.variantSettings = {
    normal: {
        type: 'normal',
        cobble: 'minecraft:cobblestone',
        dropChance: 0.25,
        dust: 'kubejs:stone_powder',
        processingTime: 200
    },
    deepslate: {
        type: 'deepslate',
        cobble: 'minecraft:cobbled_deepslate',
        dropChance: 0.75,
        dust: 'kubejs:deepslate_powder',
        processingTime: 300
    }
}

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

global.apples = [
    ['gold', 5, 0.5, [
        ['minecraft:haste', 100, 2, 1],
        ['minecraft:haste', 200, 1, 1],
        ['minecraft:haste', 300, 0, 1],
        ['minecraft:speed', 100, 2, 1],
        ['minecraft:speed', 200, 1, 1],
        ['minecraft:speed', 300, 0, 1],
        ['minecraft:glowing', 300, 0, 1]
    ]],
    ['brass', 5, 0.5, [
        ['minecraft:regeneration', 600, 0, 1],
        ['minecraft:speed', 600, 0, 1]
    ]],
    ['bronze', 5, 0.5, [
        ['minecraft:regeneration', 800, 0, 1],
        ['minecraft:speed', 800, 0, 1]
    ]],
    ['copper', 5, 0.5, [
        ['minecraft:absorption', 600, 1, 1],
        ['minecraft:resistance', 120, 0, 1],
        ['minecraft:slowness', 120, 0, 1]
    ]],
    ['iron', 5, 0.5, [
        ['minecraft:absorption', 800, 2, 1],
        ['minecraft:resistance', 160, 0, 1],
        ['minecraft:slowness', 160, 0, 1]
    ]],
    ['andesite_alloy', 5, 0.5, [
        ['minecraft:resistance', 80, 1, 1],
        ['minecraft:slowness', 80, 1, 1]
    ]],
    ['lithium', 5, 0.5, [
        ['tfmg:hellfire', 400, 1, 1]
    ]],
    ['lead', 5, 0.5, [
        ['clanginghowl:neurotoxin', 400, 2, 1]
    ]],
    ['steel', 5, 0.5, [
        ['minecraft:strength', 200, 1, 1],
        ['minecraft:resistance', 200, 1, 1],
        ['minecraft:fire_resistance', 200, 1, 1]
    ]],
    ['stainless_steel', 5, 0.5, [
        ['minecraft:strength', 200, 1, 1],
        ['minecraft:resistance', 200, 2, 1],
        ['minecraft:fire_resistance', 200, 1, 1],
        ['minecraft:regeneration', 200, 1, 1]
    ]],
    ['titanium', 5, 0.5, [
        ['minecraft:resistance', 40, 4, 1]
    ]]
]

global.pipePileDefinitions = [
    ['steel',     'tfmg:block/steel_pipes',     6, 7, 'metal', 'pickaxe', 'stone', 'tfmg:steel_pipe'],
    ['cast_iron', 'tfmg:block/cast_iron_pipes', 4, 6, 'metal', 'pickaxe', 'stone', 'tfmg:cast_iron_pipe'],
    ['brass',     'tfmg:block/brass_pipes',     3, 6, 'metal', 'pickaxe', 'stone', 'tfmg:brass_pipe'],
    ['copper',    'kubejs:block/model/pipes',   3, 6, 'metal', 'pickaxe', 'stone', 'create:fluid_pipe'],
    ['aluminum',  'tfmg:block/aluminum_pipes',  3, 6, 'metal', 'pickaxe', 'stone', 'tfmg:aluminum_pipe'],
    ['plastic',   'tfmg:block/plastic_pipes',   2, 2, 'metal', 'pickaxe', 'stone', 'tfmg:plastic_pipe']
]