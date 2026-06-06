BlockEvents.modification(event => {

  event.modify('minecraft:crafting_table', block => {
    block.destroySpeed = 3
    block.soundType = 'deepslate'
    block.requiresTool =  true
    block.explosionResistance = 5
  })

  event.modify('minecraft:furnace', block => {
    block.destroySpeed = 3
    block.soundType = 'deepslate'
    block.requiresTool =  true
    block.explosionResistance = 5
  })

  const rebar = [
    'tfmg:rebar_block',
    'tfmg:rebar_floor',
    'tfmg:rebar_wall',
    'tfmg:rebar_pile',
    'tfmg:rebar_stairs',
    'tfmg:rebar_pillar'
  ]
  rebar.forEach(id => {
    event.modify(id, block => {
      block.requiresTool =  true
    })
  })

  const petrified = [
    'darkerdepths:stripped_petrified_wood',
    'darkerdepths:petrified_wood',
    'darkerdepths:petrified_planks',
    'darkerdepths:petrified_stairs',
    'darkerdepths:petrified_slab',
    'darkerdepths:petrified_fence',
    'darkerdepths:petrified_fence_gate',
    'darkerdepths:petrified_door',
    'darkerdepths:petrified_trapdoor',
    'darkerdepths:petrified_pressure_plate',
    'darkerdepths:petrified_button',
    'darkerdepths:petrified_sign',
    'darkerdepths:petrified_hanging_sign'
  ]
  petrified.forEach(id => {
    event.modify(id, block => {
      block.requiresTool =  true
      block.destroySpeed = 3
      block.explosionResistance = 4
    })
  })

  const petrifiedLog = [
    'darkerdepths:stripped_petrified_log', 
    'darkerdepths:petrified_log'
  ]
  petrifiedLog.forEach(id => {
    event.modify(id, block => {
      block.requiresTool =  true
      block.destroySpeed = 4
      block.explosionResistance = 5
    })
  })

})