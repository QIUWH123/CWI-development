ServerEvents.recipes(event => {

// Stones processing

event.recipes.create.crushing(['minecraft:cobbled_deepslate', Item.of('kubejs:quartzite_dust').withChance(0.75)], 'darkerdepths:arid_deepslate')
event.recipes.create.milling(['3x kubejs:deepslate_dust', Item.of('kubejs:deepslate_dust').withChance(0.75), Item.of('kubejs:quartzite_dust').withChance(0.75)], 'darkerdepths:arid_deepslate')
event.recipes.create.milling(['3x kubejs:tuff_dust', Item.of('kubejs:tuff_dust').withChance(0.75)], 'minecraft:tuff')
event.recipes.create.crushing('kubejs:cobbled_basalt', 'minecraft:smooth_basalt')
event.recipes.create.milling(['3x kubejs:basalt_dust', Item.of('kubejs:basalt_dust').withChance(0.75)], 'minecraft:smooth_basalt')

const stoneTypes = [
  ['minecraft:stone', 'minecraft:cobblestone', 'minecraft:gravel', 'kubejs:stone_dust'],
  ['minecraft:deepslate', 'minecraft:cobbled_deepslate', 'kubejs:deepslate_gravel', 'kubejs:deepslate_dust'],
  ['minecraft:granite', 'kubejs:cobbled_granite', 'kubejs:granite_gravel', 'kubejs:granite_dust'],
  ['minecraft:diorite', 'kubejs:cobbled_diorite', 'kubejs:diorite_gravel', 'kubejs:diorite_dust'],
  ['minecraft:andesite', 'kubejs:cobbled_andesite', 'kubejs:andesite_gravel', 'kubejs:andesite_dust'],
  ['minecraft:basalt', 'kubejs:cobbled_basalt', 'kubejs:basalt_gravel', 'kubejs:basalt_dust'],
  ['kubejs:claystone', 'kubejs:cobbled_claystone', 'kubejs:claystone_gravel', 'kubejs:claystone_dust'],
  ['kubejs:schist', 'kubejs:cobbled_schist', 'kubejs:schist_gravel', 'kubejs:schist_dust'],
  ['kubejs:gneiss', 'kubejs:cobbled_gneiss', 'kubejs:gneiss_gravel', 'kubejs:gneiss_dust'],
  ['kubejs:rhyolite', 'kubejs:cobbled_rhyolite', 'kubejs:rhyolite_gravel', 'kubejs:rhyolite_dust'],
  ['kubejs:shale', 'kubejs:cobbled_shale', 'kubejs:shale_gravel', 'kubejs:shale_dust'],
  ['darkerdepths:duskrock', 'kubejs:cobbled_conglomerate', 'kubejs:conglomerate_gravel', 'kubejs:conglomerate_dust'],
  ['darkerdepths:grimestone', 'kubejs:cobbled_phyllite', 'kubejs:phyllite_gravel', 'kubejs:phyllite_dust'],
  ['darkerdepths:aridrock', 'kubejs:cobbled_quartzite', 'kubejs:quartzite_gravel', 'kubejs:quartzite_dust'],
  ['darkerdepths:darkslate', 'kubejs:cobbled_darkslate', 'kubejs:darkslate_gravel', 'kubejs:darkslate_dust']
]

stoneTypes.forEach(([raw, cobbled, gravel, dust]) => {
  event.recipes.create.crushing(cobbled, raw)
  event.recipes.create.crushing(gravel, cobbled)
  const dustOutputs = [`3x ${dust}`, Item.of(dust).withChance(0.75)]
  event.recipes.create.milling(dustOutputs, raw)
  event.recipes.create.milling(dustOutputs, cobbled)
  event.recipes.create.milling(dustOutputs, gravel)
  event.recipes.create.compacting(gravel, `4x ${dust}`)
  event.recipes.create.compacting(cobbled, gravel).heated()
  event.recipes.create.compacting(raw, cobbled).superheated()
})

//recipes

  event.recipes.create.mixing(['kubejs:granite_gravel'], ['kubejs:quartz_dust', 'minecraft:gravel', Fluid.of('minecraft:lava', 250)]).heated()
  event.recipes.create.compacting(['kubejs:granite_gravel'], ['kubejs:quartz_dust', 'minecraft:gravel']).superheated()
  event.recipes.create.mixing(['3x kubejs:granite_dust', Item.of('kubejs:granite_dust').withChance(0.37)], ['kubejs:quartz_dust', Fluid.of('minecraft:lava', 250)]).superheated()
  event.recipes.create.filling(['kubejs:granite_dust'], ['kubejs:quartz_dust', Fluid.of('minecraft:lava', 20)])
  event.recipes.create.mixing('2x kubejs:granite_dust', ['kubejs:quartz_dust', 'kubejs:diorite_dust'])

  event.recipes.create.filling('kubejs:diorite_gravel', ['kubejs:basalt_gravel', Fluid.of('tfmg:liquid_silicon', 125)])
  event.recipes.create.filling('kubejs:diorite_dust', ['kubejs:basalt_dust', Fluid.of('tfmg:liquid_silicon', 20)])
  event.recipes.create.filling('kubejs:diorite_gravel', ['kubejs:andesite_gravel', Fluid.of('tfmg:liquid_silicon', 125)])
  event.recipes.create.filling('kubejs:diorite_dust', ['kubejs:andesite_dust', Fluid.of('tfmg:liquid_silicon', 20)])
  event.recipes.create.mixing('2x kubejs:diorite_dust', ['kubejs:stone_dust', 'kubejs:quartz_dust'])

  event.recipes.create.mixing('2x kubejs:andesite_dust', ['kubejs:stone_dust', 'kubejs:diorite_dust'])

  event.recipes.create.compacting(['kubejs:rhyolite_gravel', Item.of('kubejs:rhyolite_dust').withChance(0.37)], ['kubejs:granite_gravel', 'minecraft:flint', Fluid.of('minecraft:lava', 250)]).superheated()

  event.recipes.create.sequenced_assembly(
    [
      Item.of('minecraft:deepslate').withChance(0.63),
      Item.of('minecraft:stone').withChance(0.37)
    ],
    'minecraft:stone', 
    [
      event.recipes.create.pressing('kubejs:compressed_stone', 'kubejs:compressed_stone'),
      event.recipes.create.pressing('kubejs:compressed_stone', 'kubejs:compressed_stone'),
      event.recipes.create.pressing('kubejs:compressed_stone', 'kubejs:compressed_stone'),
    ]
  )
  .transitionalItem('kubejs:compressed_stone')
  .loops(3)

})