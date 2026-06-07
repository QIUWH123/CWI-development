BlockEvents.broken(event => {
  if ((
    event.block.id == 'kubejs:steel_armor_block' || 
    event.block.id == 'kubejs:steel_armor_penetrated' || 
    event.block.id == 'kubejs:steel_armor_safe') && !(
    event.player.isCreative() || 
    event.player.getMainHandItem().id == 'create_sa:portable_drill')) {
    event.cancel()
  }
})