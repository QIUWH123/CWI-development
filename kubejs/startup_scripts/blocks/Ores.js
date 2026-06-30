// priority: 1

function oreBlockstate(id, colored) {
    if (colored) return {
        variants: {
            "": [
                { model: `kubejs:block/ores/${id}0` },
                { model: `kubejs:block/ores/${id}1` },
                { model: `kubejs:block/ores/${id}2` },
                { model: `kubejs:block/ores/${id}3` }
            ]
        }
    } 
    else return {
        variants: {
            "": { model: `kubejs:block/ores/${id}` }
        }
    } 
}

StartupEvents.registry('block', event => {

    const ores = [
        { id: 'cassiterite',  colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'stone' },
        { id: 'cooperite',    colored: true,  hardness: 6,   resistance: 12, sound: 'ancient_debris', requiredTool: 'iron' },
        { id: 'chalcocite',   colored: true,  hardness: 4.5, resistance: 8,  sound: 'stone',          requiredTool: 'stone' },
        { id: 'magnesite',    colored: true,  hardness: 2.5, resistance: 5,  sound: 'stone',          requiredTool: 'stone' },
        { id: 'magnetite',    colored: true,  hardness: 5,   resistance: 8,  sound: 'stone',          requiredTool: 'stone' },
        { id: 'halite',       colored: false, hardness: 3,   resistance: 6,  sound: 'calcite',        requiredTool: 'wooden' },
        { id: 'chromite',     colored: true,  hardness: 4,   resistance: 6,  sound: 'stone',          requiredTool: 'stone' },
        { id: 'pentlandite',  colored: true,  hardness: 3,   resistance: 6,  sound: 'stone',          requiredTool: 'wooden' },
        { id: 'sphalerite',   colored: true,  hardness: 3,   resistance: 6,  sound: 'stone',          requiredTool: 'wooden' },
        { id: 'rutile',       colored: true,  hardness: 4,   resistance: 6,  sound: 'amethyst',       requiredTool: 'iron' },
        { id: 'uraninite',    colored: false, hardness: 4,   resistance: 6,  sound: 'amethyst',       requiredTool: 'iron' },
        { id: 'gravitite',    colored: false, hardness: 6,   resistance: 12, sound: 'amethyst',       requiredTool: 'diamond' }
    ]

    ores.forEach(ore => {
        event.create(`${ore.id}_ore`)
            .soundType(ore.sound)
            .hardness(ore.hardness)
            .resistance(ore.resistance)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock(`minecraft:needs_${ore.requiredTool}_tool`)
            .tagBoth('cwi:ores')
            .mapColor('#FFFFFF')
            .blockstateJson = oreBlockstate(ore.id, ore.colored)
    })
})