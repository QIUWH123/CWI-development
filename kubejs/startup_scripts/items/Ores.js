StartupEvents.registry('item', event => {
    global.compoundOreTypes.forEach(ore => {
        event.create(ore.id).texture(ore.itemTexture)
        event.create(`${ore.id}_powder`).texture(`kubejs:item/ores/${ore.id}_powder`)
        if (ore.process === 'false') return
        event.create(`crushed_${ore.id}`).texture(`kubejs:item/ores/crushed_${ore.id}`)
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
    })
})