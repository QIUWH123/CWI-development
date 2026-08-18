StartupEvents.registry("enchantment", event => {

    event.create("health_stealing")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .postAttack((living, entity, level) => {
            if (entity.isLiving()) living.health += level
        })
})