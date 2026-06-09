EntityEvents.hurt(event => {
    const { entity, source } = event
    const player = source.getPlayer()
    if (!player) return
    const item = player.mainHandItem
    if (item.id !== 'clanginghowl:industrial_adjustable_wrench') return
    entity.potionEffects.add('createaddition:shocking', 30, 0, true, true)
    let level = entity.level
    level.playSound(null, entity.x, entity.y + entity.getBbHeight() / 2, entity.z, 'clanginghowl:electric_shock', 'players', 0.5, 2)
    level.spawnParticles('minecraft:electric_spark', true, entity.x, entity.y + entity.getBbHeight() / 2, entity.z, 0.4, 0.3, 0.4, 5, 0)
    level.spawnParticles('create_rns:stabilizing_resonance', true, entity.x, entity.y + entity.getBbHeight() / 2 - 1, entity.z, 0.4, 0.3, 0.4, 5, 0)
})