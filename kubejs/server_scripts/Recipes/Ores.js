LootJS.modifiers(event => {
    global.oreTypes.forEach(([oreId, dropOreId, crushedOreId, isDeepslate, isMore]) => {
        const exp = isDeepslate ? 5 : 3
        const dust = isDeepslate ? 'kubejs:deepslate_powder' : 'kubejs:stone_powder'
        const mainChance = isDeepslate ? 0.75 : 0.5
        const modifier = event.addBlockLootModifier(oreId)
        const extraDrops = isMore ? 3 : 2

        modifier.dropExperience(exp).removeLoot(oreId).removeLoot(dropOreId)
        for (let i = 0; i < extraDrops; i++) {
            modifier.addLoot(dropOreId)
        }
        modifier.randomChanceWithLooting(mainChance, 1).addLoot(dropOreId)
        modifier.randomChanceWithLooting(0.3, 1).addLoot(dust)
    })
})