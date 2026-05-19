EntityEvents.hurt(event => {
    const { entity, source } = event
    const player = source.getPlayer()
    if (!player) return
    const item = player.mainHandItem
    if (item.id !== 'clanginghowl:industrial_adjustable_wrench') return
    entity.potionEffects.add('createaddition:shocking', 30, 0, true, true)
    event.server.runCommandSilent(`playsound clanginghowl:electric_shock player @a ${entity.x} ${entity.y} ${entity.z} 0.5 2`)
    event.server.runCommandSilent(`particle minecraft:electric_spark ${entity.x} ${entity.y+1} ${entity.z} 0.4 0.3 0.4 0 5 force`)
    event.server.runCommandSilent(`particle create_rns:stabilizing_resonance ${entity.x} ${entity.y+0.7} ${entity.z} 0.4 0.3 0.4 0 5 force`)
})