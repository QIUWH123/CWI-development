StartupEvents.registry("enchantment", event => {

    event.create("health_stealing")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .postAttack((user, target, lvl) => {
            if (target.isLiving()) user.health += lvl
        })

    event.create("antigravity")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .postAttack((user, target, lvl) => {
            if (target.isLiving()) target.setNoGravity(true)
        })

    event.create("fluorescence")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .postAttack((user, target, lvl) => {
            if (target.isLiving()) target.setGlowing(true)
        })

    event.create("flying")
        .weapon()
        .minLevel(1)
        .maxLevel(5)
        .postAttack((user, target, lvl) => {
            if (target.isLiving()) target.addMotion(0, Math.sqrt(lvl), 0)
        })

})