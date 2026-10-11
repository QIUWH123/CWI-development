JEIEvents.information(event => {
    const processing = global.oreProcessing
    const averagePowder = processing.powderCount + processing.extraPowderChance
    const percent = chance => Math.round(chance * 100)
    const itemName = id => Item.of(id).getHoverName()

// Expected Yield Uses The Same Values As The Server Separation Recipes

    Object.values(global.compoundOreTypes).forEach(ore => {
        const map = global.productionMaps[ore.id]
        if (!ore.process || !map) return

        const concentrate = itemName(`kubejs:refined_${map.main}`)
        const byproducts = (map.by || []).map(([material]) => itemName(`kubejs:refined_${material}`))
        const byproductNames = Text.of('')
        const oreInfo = [
            Text.translate('cwi.info.ore.powder', processing.powderCount, percent(processing.extraPowderChance)),
            Text.translate('cwi.info.ore.average', averagePowder.toFixed(2)),
            Text.translate('cwi.info.ore.separation', concentrate, percent(processing.vibratingChance), percent(processing.centrifugingChance)),
            Text.translate('cwi.info.ore.block_yield', (averagePowder * processing.vibratingChance).toFixed(2), (averagePowder * processing.centrifugingChance).toFixed(2)),
            Text.translate('cwi.info.ore.buffer')
        ]

        if (byproducts.length > 0) {
            byproducts.forEach((name, index) => {
                if (index > 0) byproductNames.append(Text.of(', '))
                byproductNames.append(name)
            })
            oreInfo.push(Text.translate('cwi.info.ore.byproducts', byproductNames))
        }

        event.addItem(`${ore.mod}:${ore.realId}`, oreInfo)
        event.addItem(`kubejs:${ore.id}_tailings`, [
            Text.translate('cwi.info.ore.tailings', concentrate, percent(processing.flotationChance)),
            Text.translate('cwi.info.ore.reagent'),
            Text.translate(map.leachable ? 'cwi.info.ore.stubborn_leachable' : 'cwi.info.ore.stubborn_physical', percent(processing.regrindingChance))
        ])
        event.addItem(`kubejs:stubborn_${ore.id}_tailings`, [
            Text.translate(map.leachable ? 'cwi.info.ore.stubborn_leachable' : 'cwi.info.ore.stubborn_physical', percent(processing.regrindingChance)),
            Text.translate('cwi.info.ore.buffer')
        ])
    })

// Machine Operating Notes Describe Useful Limits Without Duplicating Recipes

    event.addItem('cwi:blast_furnace', [
        Text.translate('cwi.info.blast_furnace.bootstrap'),
        Text.translate('cwi.info.blast_furnace.heat'),
        Text.translate('cwi.info.blast_furnace.outputs')
    ])

    event.addItem('kubejs:glass_batch', [
        Text.translate('cwi.info.glass.reusable'),
        Text.translate('cwi.info.glass.recovery')
    ])

    event.addItem(['kubejs:cracked_glass', 'kubejs:devitrified_glass', 'kubejs:glass_powder'], [
        Text.translate('cwi.info.glass.recovery')
    ])

    event.addFluid(Fluid.of('kubejs:molten_slag'), [
        Text.translate('cwi.info.slag.casting')
    ])
})
