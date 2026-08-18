EntityEvents.hurt(event => {
    const { entity, source } = event
    const player = source.getPlayer()
    if (!player) return
    const item = player.mainHandItem
    if (item.id !== 'clanginghowl:industrial_adjustable_wrench' && !item.hasTag('cwi:neurotoxin')) return
    const level = entity.level

    if (item.id === 'clanginghowl:industrial_adjustable_wrench') {
        entity.potionEffects.add('createaddition:shocking', 30, 0, true, true)
        level.playSound(null, entity.x, entity.y + entity.getBbHeight() / 2, entity.z, 'clanginghowl:electric_shock', 'players', 0.5, 2)
        level.spawnParticles('minecraft:electric_spark', true, entity.x, entity.y + entity.getBbHeight() / 2, entity.z, 0.4, 0.3, 0.4, 5, 0)
        level.spawnParticles('create_rns:stabilizing_resonance', true, entity.x, entity.y + entity.getBbHeight() / 2 - 1, entity.z, 0.4, 0.3, 0.4, 5, 0)
    }
    
    if (item.hasTag('cwi:neurotoxin')) {
        if (item.hasTag('cwi:neurotoxin_lv2')) {
            if (random(0, 1) > 0.6) {
                entity.potionEffects.add('clanginghowl:neurotoxin', Math.round(random(0, 200)), Math.round(random(0, 0.7)), true, true)
            }
        } else {
            if (random(0, 1) > 0.8) {
                entity.potionEffects.add('clanginghowl:neurotoxin', Math.round(random(0, 100)), 0, true, true)
            }
        }
    }
})