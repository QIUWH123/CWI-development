ServerEvents.tags('block', event => {
  const allTiers = [
    'minecraft:needs_wooden_tool',
    'minecraft:needs_stone_tool',
    'minecraft:needs_iron_tool',
    'minecraft:needs_diamond_tool',
    'minecraft:needs_netherite_tool'
  ]

  const toolTier = h => h < 2 ? 'wooden' : h < 3.5 ? 'stone' : 'iron'

  function downgradeTier(tier) {
    if (tier === 'iron') return 'stone'
    if (tier === 'stone') return 'wooden'
    return null
  }

  function shouldModify(blockId) {
    return blockId.startsWith('minecraft:') || blockId.startsWith('darkerdepths:')
  }

  global.stones.forEach(stone => {
    const [rawId, cobId, gravId] = stone.types
    const base = stone.hardness
    const rawTier = toolTier(base)
    const cobTier = rawTier
    const gravTier = downgradeTier(rawTier)

    if (shouldModify(rawId)) {
      allTiers.forEach(tier => event.remove(tier, rawId))
      event.add(`minecraft:needs_${rawTier}_tool`, rawId)
      event.add('minecraft:mineable/pickaxe', rawId)
    }

    if (shouldModify(cobId)) {
      allTiers.forEach(tier => event.remove(tier, cobId))
      event.add(`minecraft:needs_${cobTier}_tool`, cobId)
      event.add('minecraft:mineable/pickaxe', cobId)
    }

    if (shouldModify(gravId)) {
      allTiers.forEach(tier => event.remove(tier, gravId))
      event.add('minecraft:mineable/shovel', gravId)
      if (gravTier) {
        event.add(`minecraft:needs_${gravTier}_tool`, gravId)
      }
    }
  })
})