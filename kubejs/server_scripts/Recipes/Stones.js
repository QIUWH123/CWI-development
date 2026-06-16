ServerEvents.recipes(event => {

// Stones processing

  event.recipes.create.crushing(['minecraft:cobbled_deepslate', Item.of('kubejs:quartzite_powder').withChance(0.75)], 'darkerdepths:arid_deepslate')
  event.recipes.create.milling(['3x kubejs:deepslate_powder', Item.of('kubejs:deepslate_powder').withChance(0.75), Item.of('kubejs:quartzite_powder').withChance(0.75)], 'darkerdepths:arid_deepslate')
  event.recipes.create.milling(['3x kubejs:tuff_powder', Item.of('kubejs:tuff_powder').withChance(0.75)], 'minecraft:tuff')
  event.recipes.create.crushing('kubejs:cobbled_basalt', 'minecraft:smooth_basalt')
  event.recipes.create.milling(['3x kubejs:basalt_powder', Item.of('kubejs:basalt_powder').withChance(0.75)], 'minecraft:smooth_basalt')

  global.stoneTypes.forEach(entry => {
    const [raw, cobbled, gravel, dust] = entry.types
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

// Recipes

  event.recipes.create.mixing(['kubejs:granite_gravel'], ['kubejs:quartz_powder', 'minecraft:gravel', Fluid.of('minecraft:lava', 250)]).heated()
  event.recipes.create.compacting(['kubejs:granite_gravel'], ['kubejs:quartz_powder', 'minecraft:gravel']).superheated()
  event.recipes.create.mixing(['3x kubejs:granite_powder', Item.of('kubejs:granite_powder').withChance(0.37)], ['kubejs:quartz_powder', Fluid.of('minecraft:lava', 250)]).superheated()
  event.recipes.create.filling(['kubejs:granite_powder'], ['kubejs:quartz_powder', Fluid.of('minecraft:lava', 20)])
  event.recipes.create.mixing('2x kubejs:granite_powder', ['kubejs:quartz_powder', 'kubejs:diorite_powder'])

  event.recipes.create.filling('kubejs:diorite_gravel', ['kubejs:basalt_gravel', Fluid.of('tfmg:liquid_silicon', 125)])
  event.recipes.create.filling('kubejs:diorite_powder', ['kubejs:basalt_powder', Fluid.of('tfmg:liquid_silicon', 20)])
  event.recipes.create.filling('kubejs:diorite_gravel', ['kubejs:andesite_gravel', Fluid.of('tfmg:liquid_silicon', 125)])
  event.recipes.create.filling('kubejs:diorite_powder', ['kubejs:andesite_powder', Fluid.of('tfmg:liquid_silicon', 20)])
  event.recipes.create.mixing('2x kubejs:diorite_powder', ['kubejs:stone_powder', 'kubejs:quartz_powder'])

  event.recipes.create.mixing('2x kubejs:andesite_powder', ['kubejs:stone_powder', 'kubejs:diorite_powder'])

  event.recipes.create.compacting(['kubejs:rhyolite_gravel', Item.of('kubejs:rhyolite_powder').withChance(0.37)], ['kubejs:granite_gravel', 'minecraft:flint', Fluid.of('minecraft:lava', 250)]).superheated()

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