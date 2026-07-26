ServerEvents.tags('block', event => {
    global.compoundOreTypes.forEach(ore => {
        const oreId = `${ore.mod}:${ore.realId}`
        global.allTiers.forEach(tier => event.remove(tier, oreId))
        event.add(`minecraft:needs_${ore.requiredTool}_tool`, oreId)
        event.add('minecraft:mineable/pickaxe', oreId)
    })
})