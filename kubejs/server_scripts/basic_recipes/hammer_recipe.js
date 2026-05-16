global.conversionMap = {
    
    'minecraft:stone': {
        target: 'minecraft:cobblestone',
        drops: []
    },
    'minecraft:cobblestone': {
        target: 'minecraft:gravel',
        drops: []
    },
    'minecraft:gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:stone_dust', count: 1, chance: 0.75 }
        ]
    },

    'minecraft:deepslate': {
        target: 'minecraft:cobbled_deepslate',
        drops: []
    },
    'minecraft:cobbled_deepslate': {
        target: 'kubejs:deepslate_gravel',
        drops: []
    },
    'kubejs:deepslate_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 }
        ]
    },

    'minecraft:granite': {
        target: 'kubejs:cobbled_granite',
        drops: []
    },
    'kubejs:cobbled_granite': {
        target: 'kubejs:granite_gravel',
        drops: []
    },
    'kubejs:granite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:granite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:granite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:granite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:granite_dust', count: 1, chance: 0.75 }
        ]
    },

    'minecraft:diorite': {
        target: 'kubejs:cobbled_diorite',
        drops: []
    },
    'kubejs:cobbled_diorite': {
        target: 'kubejs:diorite_gravel',
        drops: []
    },
    'kubejs:diorite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:diorite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:diorite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:diorite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:diorite_dust', count: 1, chance: 0.75 }
        ]
    },

    'minecraft:andesite': {
        target: 'kubejs:cobbled_andesite',
        drops: []
    },
    'kubejs:cobbled_andesite': {
        target: 'kubejs:andesite_gravel',
        drops: []
    },
    'kubejs:andesite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:andesite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:andesite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:andesite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:andesite_dust', count: 1, chance: 0.75 }
        ]
    },

    'minecraft:basalt': {
        target: 'kubejs:cobbled_basalt',
        drops: []
    },
    'minecraft:smooth_basalt': {
        target: 'kubejs:cobbled_basalt',
        drops: []
    },
    'kubejs:cobbled_basalt': {
        target: 'kubejs:basalt_gravel',
        drops: []
    },
    'kubejs:basalt_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:basalt_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:basalt_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:basalt_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:basalt_dust', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:claystone': {
        target: 'kubejs:cobbled_claystone',
        drops: []
    },
    'kubejs:cobbled_claystone': {
        target: 'kubejs:claystone_gravel',
        drops: []
    },
    'kubejs:claystone_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:claystone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:claystone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:claystone_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:claystone_dust', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:schist': {
        target: 'kubejs:cobbled_schist',
        drops: []
    },
    'kubejs:cobbled_schist': {
        target: 'kubejs:schist_gravel',
        drops: []
    },
    'kubejs:schist_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:schist_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:schist_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:schist_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:schist_dust', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:gneiss': {
        target: 'kubejs:cobbled_gneiss',
        drops: []
    },
    'kubejs:cobbled_gneiss': {
        target: 'kubejs:gneiss_gravel',
        drops: []
    },
    'kubejs:gneiss_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:gneiss_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:gneiss_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:gneiss_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:gneiss_dust', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:rhyolite': {
        target: 'kubejs:cobbled_rhyolite',
        drops: []
    },
    'kubejs:cobbled_rhyolite': {
        target: 'kubejs:rhyolite_gravel',
        drops: []
    },
    'kubejs:rhyolite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:rhyolite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:rhyolite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:rhyolite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:rhyolite_dust', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:shale': {
        target: 'kubejs:cobbled_shale',
        drops: []
    },
    'kubejs:cobbled_shale': {
        target: 'kubejs:shale_gravel',
        drops: []
    },
    'kubejs:shale_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:shale_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:shale_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:shale_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:shale_dust', count: 1, chance: 0.75 }
        ]
    },

    'darkerdepths:duskrock': {
        target: 'kubejs:cobbled_conglomerate',
        drops: []
    },
    'kubejs:cobbled_conglomerate': {
        target: 'kubejs:conglomerate_gravel',
        drops: []
    },
    'kubejs:conglomerate_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:conglomerate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:conglomerate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:conglomerate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:conglomerate_dust', count: 1, chance: 0.75 }
        ]
    },

    'darkerdepths:grimestone': {
        target: 'kubejs:cobbled_phyllite',
        drops: []
    },
    'kubejs:cobbled_phyllite': {
        target: 'kubejs:phyllite_gravel',
        drops: []
    },
    'kubejs:phyllite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:phyllite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:phyllite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:phyllite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:phyllite_dust', count: 1, chance: 0.75 }
        ]
    },

    'darkerdepths:aridrock': {
        target: 'kubejs:cobbled_quartzite',
        drops: []
    },
    'kubejs:cobbled_quartzite': {
        target: 'kubejs:quartzite_gravel',
        drops: []
    },
    'kubejs:quartzite_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:quartzite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:quartzite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:quartzite_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:quartzite_dust', count: 1, chance: 0.75 }
        ]
    },

    'darkerdepths:darkslate': {
        target: 'kubejs:cobbled_darkslate',
        drops: []
    },
    'kubejs:cobbled_darkslate': {
        target: 'kubejs:darkslate_gravel',
        drops: []
    },
    'kubejs:darkslate_gravel': {
        target: 'air',
        drops: [
            { item: 'kubejs:darkslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:darkslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:darkslate_dust', count: 1, chance: 0.75 },
            { item: 'kubejs:darkslate_dust', count: 1, chance: 0.75 }
        ]
    },


    
    'minecraft:iron_ore': {
        target: 'minecraft:cobblestone',
        drops: [
            { item: 'minecraft:raw_iron', count: 1, chance: 0.5 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 }
        ]
    },
    'minecraft:deepslate_iron_ore': {
        target: 'minecraft:cobbled_deepslate',
        drops: [
            { item: 'minecraft:raw_iron', count: 1, chance: 0.5 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
            { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 }
        ]
    },

    'kubejs:scrap_block': {
        target: 'air',
        drops: [
            { item: 'tfmg:screw', count: 1, chance: 0.6 },
            { item: 'tfmg:screw', count: 1, chance: 0.18 },
            { item: 'kubejs:rusted_iron', count: 1, chance: 0.6 },
            { item: 'kubejs:rusted_iron', count: 1, chance: 0.18 },
            { item: 'tfmg:rebar', count: 1, chance: 0.3 },
            { item: 'tfmg:rebar', count: 1, chance: 0.09 },
            { item: 'tfmg:rebar', count: 1, chance: 0.018 },
            { item: 'kubejs:dark_ash_dust', count: 1, chance: 0.7 },
            { item: 'kubejs:dark_ash_dust', count: 1, chance: 0.35 },
            { item: 'kubejs:dark_ash_dust', count: 1, chance: 0.11 },
            { item: 'kubejs:ash_dust', count: 1, chance: 0.7 },
            { item: 'kubejs:ash_dust', count: 1, chance: 0.35 },
            { item: 'kubejs:ash_dust', count: 1, chance: 0.11 },
            { item: 'kubejs:rubber', count: 1, chance: 0.8 },
            { item: 'kubejs:rubber', count: 1, chance: 0.56 },
            { item: 'kubejs:rubber', count: 1, chance: 0.28 },
            { item: 'minecraft:gray_wool', count: 1, chance: 0.6 },
            { item: 'minecraft:gray_wool', count: 1, chance: 0.42 },
            { item: 'minecraft:black_wool', count: 1, chance: 0.21 },
            { item: 'tfmg:synthetic_string', count: 1, chance: 0.8 },
            { item: 'tfmg:synthetic_string', count: 1, chance: 0.56 },
            { item: 'tfmg:synthetic_string', count: 1, chance: 0.28 },
            { item: 'tfmg:synthetic_leather', count: 1, chance: 0.6 },
            { item: 'tfmg:synthetic_leather', count: 1, chance: 0.18 }
        ]
    }

}