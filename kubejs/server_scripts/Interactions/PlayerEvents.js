PlayerEvents.tick(event => {
    const player = event.player
    if (globalTickCounter % 10 != 0) return

    // Hot Item Effect
        if (player.inventory.count("#cwi:hot_items") > 0) {
            player.attack(player.damageSources().inFire(), 1)
        }
    
    // Fluid Effect
        if (player.block.hasTag("cwi:corrosive") || player.block.up.hasTag("cwi:corrosive")) {
            player.attack(player.damageSources().magic(), 7)
        }
        if (player.block.hasTag("cwi:hot") || player.block.up.hasTag("cwi:hot")) {
            player.attack(player.damageSources().lava(), 5)
            player.setSecondsOnFire(3)
        }
})