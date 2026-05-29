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

  event.modify('tfmg:rebar_block', block => {
    block.requiresTool =  true
  })
  
  event.modify('tfmg:rebar_floor', block => {
    block.requiresTool =  true
  })
  
  event.modify('tfmg:rebar_wall', block => {
    block.requiresTool =  true
  })
  
  event.modify('tfmg:rebar_pile', block => {
    block.requiresTool =  true
  })
  
  event.modify('tfmg:rebar_stairs', block => {
    block.requiresTool =  true
  })
  
  event.modify('tfmg:rebar_pillar', block => {
    block.requiresTool =  true
  })

})