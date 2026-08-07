ServerEvents.tags('block', event => {

    const toolTier = h => h < 2 ? 'wooden' : h < 3.5 ? 'stone' : 'iron'

    function downgradeTier(tier) {
        if (tier === 'diamond') return 'iron'
        if (tier === 'iron') return 'stone'
        if (tier === 'stone') return 'wooden'
        return null
    }

    function shouldModify(blockId) {
        return blockId.startsWith('minecraft:') || blockId.startsWith('darkerdepths:')
    }

// Assign Correct Mineable And Tier Tags Based On Hardness

    global.stoneTypes.forEach(stone => {
        const [rawId, cobId, gravId] = stone.types
        const base = stone.hardness
        const rawTier = toolTier(base)
        const cobTier = rawTier
        const gravTier = downgradeTier(rawTier)

        if (shouldModify(rawId)) {
            global.allTiers.forEach(tier => event.remove(tier, rawId))
            event.add(`minecraft:needs_${rawTier}_tool`, rawId)
            event.add('minecraft:mineable/pickaxe', rawId)
        }

        if (shouldModify(cobId)) {
            global.allTiers.forEach(tier => event.remove(tier, cobId))
            event.add(`minecraft:needs_${cobTier}_tool`, cobId)
            event.add('minecraft:mineable/pickaxe', cobId)
        }

        if (shouldModify(gravId)) {
            global.allTiers.forEach(tier => event.remove(tier, gravId))
            event.add('minecraft:mineable/shovel', gravId)
            if (gravTier) {
                event.add(`minecraft:needs_${gravTier}_tool`, gravId)
            }
        }
    })
})

ServerEvents.tags('block', event => {
    global.compoundOreTypes.forEach(ore => {
        const oreId = `${ore.mod}:${ore.realId}`
        global.allTiers.forEach(tier => event.remove(tier, oreId))
        event.add(`minecraft:needs_${ore.requiredTool}_tool`, oreId)
        event.add('minecraft:mineable/pickaxe', oreId)
    })
})

ServerEvents.tags('item', event => {
    global.materialTypes.forEach(mat => {
        const items = mat.items
        if (items.ingot) event.add('cwi:ingots', items.ingot)
        if (items.sheet) event.add('cwi:sheets', items.sheet)
        if (items.nugget) event.add('cwi:nuggets', items.nugget)
        if (items.powder) event.add('cwi:powders', items.powder)
        if (items.wire) event.add('cwi:wires', items.wire)
        if (items.rod) event.add('cwi:rods', items.rod)
        if (items.block) event.add('cwi:blocks', items.block)
    })
})