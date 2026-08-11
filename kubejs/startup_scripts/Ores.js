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
        event.create(ore.id)
            .model(`kubejs:block/ores/${ore.colored? ore.id + '0' : ore.id}`)
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

StartupEvents.registry('item', event => {
    event.create('flotation_reagent')
    event.create('precipitant')
    event.create('washing_residue')
    event.create('silicate_residue')
    event.create('anode_slime')
    global.compoundOreTypes.forEach(ore => {
        if (ore.process === 'true') {
            event.create(`crushed_${ore.id}`).texture(`kubejs:item/ores/crushed_${ore.id}`)
        } else {
            event.create(ore.id + '_item').texture(ore.itemTexture)
        }
        event.create(`${ore.id}_powder`).texture(`kubejs:item/ores/${ore.id}_powder`)
        if (ore.process === 'true') {
            event.create(`${ore.id}_tailings`)
                .textureJson({
                    layer0: `kubejs:item/ores/${ore.id}_powder`,
                    layer1: 'kubejs:item/ores/tailings_overlay'
                })
            event.create(`stubborn_${ore.id}_tailings`)
                .textureJson({
                    layer0: `kubejs:item/ores/${ore.id}_powder`,
                    layer1: 'kubejs:item/ores/stubborn_tailings_overlay'
                })
            event.create(`leach_${ore.id}_residue`)
                .textureJson({
                    layer0: `kubejs:item/ores/small_${ore.id}_powder`,
                    layer1: 'kubejs:item/ores/leach_residue_overlay'
                })
        } else {
            
        }
    })

    const materials = [
        'aluminum', 'chromium', 'zinc',
        'cobalt', 'copper', 'gold',
        'iron', 'lead',  'magnesium',
        'molybdenum', 'nickel', 'tin',
        'platinum', 'silver', 'titanium'
    ]

    materials.forEach(id => {
        event.create(`${id}_crystal`).texture(`kubejs:item/ores/${id}_crystal`)
        event.create(`refined_${id}`).texture(`kubejs:item/ores/refined_${id}`)
    })
})

StartupEvents.registry('fluid', event => {
    event.create('mother_liquor')
        .thickTexture(0xb0bec5)
        .bucketColor(0xb0bec5)
        .noBlock()
    global.compoundOreTypes.forEach(ore => {
        if (ore.process === 'false') return
        event.create(`leach_${ore.id}_solution`)
        .thickTexture(0x00000)
        event.create(`purified_${ore.id}_solution`)
        .thickTexture(0x00000)
    })
})