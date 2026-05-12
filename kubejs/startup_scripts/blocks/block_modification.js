BlockEvents.modification(event => {

  event.modify('minecraft:crafting_table', block => {
    block.destroySpeed = 3
    block.soundType = 'stone'
    block.requiresTool =  true
  })

  event.modify('minecraft:cobblestone', block => {
    block.destroySpeed = 1.5
  })

  event.modify('minecraft:cobblestone_stairs', block => {
    block.destroySpeed = 1.5
  })

  event.modify('minecraft:cobblestone_slab', block => {
    block.destroySpeed = 1.5
  })

  event.modify('minecraft:cobblestone_wall', block => {
    block.destroySpeed = 1.5
  })

  event.modify('minecraft:cobbled_deepslate', block => {
    block.destroySpeed = 3
  })

  event.modify('minecraft:cobbled_deepslate_stairs', block => {
    block.destroySpeed = 3
  })

  event.modify('minecraft:cobbled_deepslate_slab', block => {
    block.destroySpeed = 3
  })

  event.modify('minecraft:cobbled_deepslate_wall', block => {
    block.destroySpeed = 3
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