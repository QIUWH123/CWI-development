ServerEvents.recipes(event => {

// Stones processing

event.recipes.create.crushing(['minecraft:cobbled_deepslate', Item.of('kubejs:quartzite_dust').withChance(0.75)], 'darkerdepths:arid_deepslate')
event.recipes.create.milling(['3x kubejs:deepslate_dust', Item.of('kubejs:deepslate_dust').withChance(0.75), Item.of('kubejs:quartzite_dust').withChance(0.75)], 'darkerdepths:arid_deepslate')
event.recipes.create.milling(['3x kubejs:tuff_dust', Item.of('kubejs:tuff_dust').withChance(0.75)], 'minecraft:tuff')
event.recipes.create.crushing('kubejs:cobbled_basalt', 'minecraft:smooth_basalt')
event.recipes.create.milling(['3x kubejs:basalt_dust', Item.of('kubejs:basalt_dust').withChance(0.75)], 'minecraft:smooth_basalt')

global.stoneTypes.forEach(([raw, cobbled, gravel, dust]) => {
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