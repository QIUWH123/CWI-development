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

BlockEvents.broken('kubejs:ash_bricks', event => {
    const { block, level } = event
    level.spawnParticles('minecraft:falling_dust minecraft:gravel', true, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.55, 0.2, 0.55, random(3, 8), 0)
    level.spawnParticles('minecraft:campfire_cosy_smoke', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.3, 0.3, 0.3, random(0,2), 0)
})

BlockEvents.placed('kubejs:ash_bricks', event => {
    const { block, level } = event
    level.spawnParticles('minecraft:falling_dust minecraft:gravel', true, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.45, 0.2, 0.45, random(3, 8), 0)
    level.spawnParticles('minecraft:campfire_cosy_smoke', true, block.x + 0.5, block.y + 0.5, block.z + 0.5, 0.3, 0.3, 0.3, random(0,2), 0)
})