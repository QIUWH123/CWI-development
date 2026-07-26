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

function oreDepositModel(texture) {
    return {
        parent: 'kubejs:block/ore_deposit',
        textures: { '1': texture }
    }
}

StartupEvents.registry('block', event => {
    global.compoundOreTypes.forEach(ore => {
        const resistance = ore.resistance
        const hardness = ore.hardness
        const sound = ore.sound
        event.create(`${ore.id}_deposit`)
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock(`minecraft:needs_diamond_tool`)
            .tagBoth('cwi:ores')
            .tagBoth('cwi:ore_deposit')
            .tagBoth('create_rns:deposit_blocks')
            .mapColor('#FFFFFF')
            .defaultCutout()
            .modelJson = oreDepositModel(ore.texture)

        if( ore.mod !== 'kubejs') return
        event.create(`${ore.id}_ore`)
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock(`minecraft:needs_${ore.requiredTool}_tool`)
            .tagBoth('cwi:ores')
            .mapColor('#FFFFFF')
            .blockstateJson = oreBlockstate(ore.id, ore.colored)
    })
})

BlockEvents.modification(event => {
    global.compoundOreTypes.forEach(ore => {
        if( ore.mod === 'kubejs') return
        const resistance = ore.resistance
        const hardness = ore.hardness
        const sound = ore.sound
        event.modify(`${ore.mod}:${ore.realId}`, properties => {
            properties.setDestroySpeed(hardness)
            properties.setExplosionResistance(resistance)
            properties.setSoundType(sound)
            properties.setRequiresTool(true)
        })
    })
})