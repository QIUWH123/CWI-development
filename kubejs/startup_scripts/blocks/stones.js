// priority: 1

const toolTier = h => h < 2 ? 'wooden' : h < 3.5 ? 'stone' : 'iron'

function downgradeTier(tier) {
  if (tier === 'iron') return 'stone'
  if (tier === 'stone') return 'wooden'
  return null
}

global.shouldModify = function(blockId) {
  return blockId.startsWith('minecraft:') || blockId.startsWith('darkerdepths:')
}
const shouldModify = global.shouldModify

StartupEvents.registry('block', event => {
  global.stones.forEach(stone => {
    const [rawId, cobId, gravId, dustId] = stone.types
    const base = stone.hardness
    const sound = stone.sound
    const color = stone.color
    const cobH = +(base * 0.7).toFixed(1)
    const gravH = +(base * 0.2).toFixed(1)
    const rawTier = toolTier(base)
    const cobTier = rawTier
    const gravTier = downgradeTier(rawTier)

    if (!shouldModify(rawId)) {
      event.create(rawId.split(':')[1])
        .hardness(base).resistance(base * 1.2)
        .soundType(sound).requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(`minecraft:needs_${rawTier}_tool`)
        .mapColor(color)
    }

    if (!shouldModify(cobId)) {
      event.create(cobId.split(':')[1])
        .hardness(cobH).resistance(cobH * 1.2)
        .soundType(sound).requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock(`minecraft:needs_${cobTier}_tool`)
        .mapColor(color)
    }

    if (!shouldModify(gravId)) {
      const builder = event.create(gravId.split(':')[1], 'falling')
        .hardness(gravH).resistance(gravH * 1.2)
        .soundType('gravel')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/shovel')
      if (gravTier) {
        builder.tagBlock(`minecraft:needs_${gravTier}_tool`)
      }
      builder.mapColor(color)
    }
  })
})

BlockEvents.modification(event => {
  global.stones.forEach(stone => {
    const [rawId, cobId, gravId, dustId] = stone.types
    const base = stone.hardness
    const sound = stone.sound
    const cobHardness = +(base * 0.7).toFixed(1)
    const gravHardness = +(base * 0.2).toFixed(1)

    if (shouldModify(rawId)) {
      event.modify(rawId, block => {
        block.setDestroySpeed(base)
        block.setExplosionResistance(base * 1.2)
        block.setSoundType(sound)
        block.setRequiresTool(true)
      })
    }

    if (shouldModify(cobId)) {
      event.modify(cobId, block => {
        block.setDestroySpeed(cobHardness)
        block.setExplosionResistance(cobHardness * 1.2)
        block.setSoundType(sound)
        block.setRequiresTool(true)
      })
    }

    if (shouldModify(gravId)) {
      event.modify(gravId, block => {
        block.setDestroySpeed(gravHardness)
        block.setExplosionResistance(gravHardness * 1.2)
        block.setSoundType('gravel')
        block.setRequiresTool(true)
      })
    }
  })
})