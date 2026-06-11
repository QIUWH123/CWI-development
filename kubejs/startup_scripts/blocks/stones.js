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

const stoneConfigs = global.stoneTypes.map(stone => {
  const rawId = stone.types[0]
  const cobId = stone.types[1]
  const gravId = stone.types[2]
  const base = stone.hardness
  const sound = stone.sound
  const color = stone.color
  const cobH = +(base * 0.7).toFixed(1)
  const gravH = +(base * 0.2).toFixed(1)
  const rawTier = toolTier(base)
  const cobTier = rawTier
  const gravTier = downgradeTier(rawTier)
  return { 
    rawId: rawId, cobId: cobId, gravId: gravId, base: base, sound: sound, color: color,
    cobH: cobH, gravH: gravH, rawTier: rawTier, cobTier: cobTier, gravTier: gravTier
  }
})

StartupEvents.registry('block', event => {
  stoneConfigs.forEach(cfg => {
    function apply(builder, blockId, hardness, soundType, tags, tier) {
      const tex = global.stoneTextures[blockId]
      if (tex) { builder.textureAll(tex) }
      builder.hardness(hardness).resistance(hardness * 1.2).soundType(soundType)
      if (tags.length) { builder.requiresTool(true) }
      tags.forEach(tag => builder.tagBlock(tag))
      if (tier) { builder.tagBlock('minecraft:needs_' + tier + '_tool') }
      builder.mapColor(cfg.color)
    }

    if (!shouldModify(cfg.rawId)) apply(event.create(cfg.rawId.split(':')[1]), cfg.rawId, cfg.base, cfg.sound, ['minecraft:mineable/pickaxe'], cfg.rawTier)
    if (!shouldModify(cfg.cobId)) apply(event.create(cfg.cobId.split(':')[1]), cfg.cobId, cfg.cobH, cfg.sound, ['minecraft:mineable/pickaxe'], cfg.cobTier)
    if (!shouldModify(cfg.gravId)) apply(event.create(cfg.gravId.split(':')[1], 'falling'), cfg.gravId, cfg.gravH, 'gravel', ['minecraft:mineable/shovel'], cfg.gravTier)
  })
})

BlockEvents.modification(event => {
  stoneConfigs.forEach(cfg => {
    function apply(id, hardness, soundType) {
      event.modify(id, properties => {
        properties.setDestroySpeed(hardness)
        properties.setExplosionResistance(hardness * 1.2)
        properties.setSoundType(soundType)
        properties.setRequiresTool(true)
      })
    }

    if (shouldModify(cfg.rawId)) apply(cfg.rawId, cfg.base, cfg.sound)
    if (shouldModify(cfg.cobId)) apply(cfg.cobId, cfg.cobH, cfg.sound)
    if (shouldModify(cfg.gravId)) apply(cfg.gravId, cfg.gravH, 'gravel')
  })
})