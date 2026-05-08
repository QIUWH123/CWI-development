ServerEvents.recipes(event => {

//    event.shapeless(
//        Item.of('clanginghowl:advanced_hand_drill'),
//        ['clanginghowl:advanced_hand_drill', 'minecraft:iron_ingot']
//    ).modifyResult((grid, result) => {
//        const item = grid.find('clanginghowl:advanced_hand_drill')
//        if (!item) return result
//        let originalEnchants = item.nbt?.Enchantments ?? []
//        let enchantsCopy = originalEnchants.map(e => ({ id: e.id, lvl: e.lvl }))
//        enchantsCopy.push({ id: 'clanginghowl:ecological_energy', lvl: 1 })
//        let resultItem = item.copy()
//        resultItem.nbt = resultItem.nbt || {}
//        resultItem.nbt.Enchantments = enchantsCopy
//        return resultItem
//    })

//    event.shapeless(
//        Item.of('clanginghowl:advanced_hand_drill'),
//        ['clanginghowl:advanced_hand_drill', 'minecraft:iron_ingot']
//    ).modifyResult((grid, result) => {
//        const item = grid.find('clanginghowl:advanced_hand_drill')
//        if (!item) return result
//        let originalEnchants = item.nbt?.Enchantments ?? []
//        let enchantsCopy = originalEnchants.map(e => ({ id: e.id, lvl: e.lvl }))
//        enchantsCopy.push({ id: 'clanginghowl:energy_efficiency', lvl: 3 })
//        let resultItem = item.copy()
//        resultItem.nbt = resultItem.nbt || {}
//       resultItem.nbt.Enchantments = enchantsCopy
//        return resultItem
//    })

//    event.shapeless(
//        Item.of('clanginghowl:advanced_hand_drill'),
//        ['clanginghowl:advanced_hand_drill', 'minecraft:iron_ingot']
//    ).modifyResult((grid, result) => {
//        const item = grid.find('clanginghowl:advanced_hand_drill')
//        if (!item) return result
//        let originalEnchants = item.nbt?.Enchantments ?? []
//        let enchantsCopy = originalEnchants.map(e => ({ id: e.id, lvl: e.lvl }))
//        enchantsCopy.push({ id: 'minecraft:silk_touch', lvl: 1 })
//        let resultItem = item.copy()
//        resultItem.nbt = resultItem.nbt || {}
//        resultItem.nbt.Enchantments = enchantsCopy
//        return resultItem
//    })

})