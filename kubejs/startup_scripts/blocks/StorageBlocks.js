StartupEvents.registry('block', event => {

// Storage Block

    const storageBlocks = [
        { name: 'polyethylene_block',        sound: 'chiseled_bookshelf',  hardness: 4, resistance: 4,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'polypropylene_block',       sound: 'chiseled_bookshelf',  hardness: 4, resistance: 4,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'polyvinyl_chloride_block',  sound: 'chiseled_bookshelf',  hardness: 4, resistance: 4,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'carbon_fiber_block',        sound: 'stone',               hardness: 8, resistance: 12, tool: 'axe',     needsTool: false, tier: null    },
        { name: 'rubber_block',              sound: 'wool',                hardness: 2, resistance: 3,  tool: 'axe',     needsTool: false, tier: null    },
        { name: 'industrial_rubber_block',   sound: 'wool',                hardness: 3, resistance: 4,  tool: 'axe',     needsTool: false, tier: null    },
        { name: 'rusted_iron_block',         sound: 'metal',               hardness: 4, resistance: 5,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'bronze_block',              sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'magnesium_block',           sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'charcoal_block',            sound: 'stone',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'tin_block',                 sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'silver_block',              sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'molybdenum_block',          sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'iron'  },
        { name: 'titanium_block',            sound: 'metal',               hardness: 6, resistance: 8,  tool: 'pickaxe', needsTool: true,  tier: 'iron'  },
        { name: 'chromium_block',            sound: 'metal',               hardness: 7, resistance: 10, tool: 'pickaxe', needsTool: true,  tier: 'iron'  },
        { name: 'cobalt_block',              sound: 'metal',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'iron'  },
        { name: 'raw_tin_block',             sound: 'stone',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' },
        { name: 'raw_silver_block',          sound: 'stone',               hardness: 5, resistance: 6,  tool: 'pickaxe', needsTool: true,  tier: 'stone' }
    ]

    storageBlocks.forEach(function(block) {
        var builder = event.create(block.name)
            .textureAll('kubejs:block/storage_blocks/' + block.name)
            .hardness(block.hardness)
            .resistance(block.resistance)
            .mapColor('#FF5500')
            .tagBlock('minecraft:mineable/' + block.tool)
        if (block.sound === 'metal') builder.soundType('metal')
        else if (block.sound === 'wool') builder.soundType('wool')
        else if (block.sound === 'stone') builder.stoneSoundType()
        if (block.needsTool) builder.requiresTool(true)
        if (block.tier) builder.tagBlock('minecraft:needs_' + block.tier + '_tool')
    })
})