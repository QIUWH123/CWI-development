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

global.stoneTextures = {
  'kubejs:gneiss': 'tfc:block/rock/raw/phyllite',
  'kubejs:cobbled_gneiss': 'tfc:block/rock/cobble/phyllite',
  'kubejs:gneiss_gravel': 'tfc:block/rock/gravel/phyllite',
  'kubejs:schist': 'tfc:block/rock/raw/slate',
  'kubejs:cobbled_schist': 'tfc:block/rock/cobble/slate',
  'kubejs:schist_gravel': 'tfc:block/rock/gravel/slate',
  'kubejs:rhyolite': 'tfc:block/rock/raw/rhyolite',
  'kubejs:cobbled_rhyolite': 'tfc:block/rock/cobble/rhyolite',
  'kubejs:rhyolite_gravel': 'tfc:block/rock/gravel/rhyolite',
  'kubejs:claystone': 'kubejs:block/stones/claystone',
  'kubejs:cobbled_claystone': 'kubejs:block/stones/cobbled_claystone',
  'kubejs:claystone_gravel': 'kubejs:block/stones/claystone_gravel',
  'kubejs:shale': 'kubejs:block/stones/shale',
  'kubejs:cobbled_shale': 'kubejs:block/stones/cobbled_shale',
  'kubejs:shale_gravel': 'kubejs:block/stones/shale_gravel',
  'kubejs:cobbled_granite': 'kubejs:block/stones/cobbled_granite',
  'kubejs:granite_gravel': 'kubejs:block/stones/granite_gravel',
  'kubejs:cobbled_diorite': 'kubejs:block/stones/cobbled_diorite',
  'kubejs:diorite_gravel': 'kubejs:block/stones/diorite_gravel',
  'kubejs:cobbled_andesite': 'kubejs:block/stones/cobbled_andesite',
  'kubejs:andesite_gravel': 'kubejs:block/stones/andesite_gravel',
  'kubejs:cobbled_basalt': 'kubejs:block/stones/cobbled_basalt',
  'kubejs:basalt_gravel': 'kubejs:block/stones/basalt_gravel',
  'kubejs:deepslate_gravel': 'kubejs:block/stones/deepslate_gravel',
  'kubejs:cobbled_conglomerate': 'kubejs:block/stones/cobbled_conglomerate',
  'kubejs:conglomerate_gravel': 'kubejs:block/stones/conglomerate_gravel',
  'kubejs:cobbled_phyllite': 'kubejs:block/stones/cobbled_phyllite',
  'kubejs:phyllite_gravel': 'kubejs:block/stones/phyllite_gravel',
  'kubejs:cobbled_quartzite': 'kubejs:block/stones/cobbled_quartzite',
  'kubejs:quartzite_gravel': 'kubejs:block/stones/quartzite_gravel',
  'kubejs:cobbled_darkslate': 'kubejs:block/stones/cobbled_darkslate',
  'kubejs:darkslate_gravel': 'kubejs:block/stones/darkslate_gravel'
}

StartupEvents.registry('block', event => {
  global.stoneTypes.forEach(stone => {
    const [rawId, cobId, gravId, dustId] = stone.types
    const base = stone.hardness
    const sound = stone.sound
    const color = stone.color
    const cobH = +(base * 0.7).toFixed(1)
    const gravH = +(base * 0.2).toFixed(1)
    const rawTier = toolTier(base)
    const cobTier = rawTier
    const gravTier = downgradeTier(rawTier)

    function applyBlock(builder, blockId, hardness, resistance, soundType, requiresTool, tags, tier) {
      const tex = global.stoneTextures[blockId]
      if (tex) builder.textureAll(tex)
      builder.hardness(hardness)
             .resistance(resistance)
             .soundType(soundType)
      if (requiresTool) builder.requiresTool(true)
      tags.forEach(tag => builder.tagBlock(tag))
      if (tier) builder.tagBlock(`minecraft:needs_${tier}_tool`)
      builder.mapColor(color)
    }

    if (!shouldModify(rawId)) {
      applyBlock(event.create(rawId.split(':')[1]), rawId, base, base * 1.2, sound, true, ['minecraft:mineable/pickaxe'], rawTier)
    }

    if (!shouldModify(cobId)) {
      applyBlock(event.create(cobId.split(':')[1]), cobId, cobH, cobH * 1.2, sound, true, ['minecraft:mineable/pickaxe'], cobTier)
    }

    if (!shouldModify(gravId)) {
      applyBlock(event.create(gravId.split(':')[1], 'falling'), gravId, gravH, gravH * 1.2, 'gravel', true, ['minecraft:mineable/shovel'], gravTier)
    }
  })
})

BlockEvents.modification(event => {
  global.stoneTypes.forEach(stone => {
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