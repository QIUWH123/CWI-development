ServerEvents.loaded((event) => {
    const { server } = event
    if (server.persistentData.getBoolean('first_loaded')) return
        server.persistentData.putBoolean('first_loaded', true)
        server.gameRules.set('keepInventory', 'true')
        server.gameRules.set('doImmediateRespawn', 'true')
        server.gameRules.set('doInsomnia', 'false')
        server.gameRules.set('doTraderSpawning', 'false')
        server.gameRules.set('doPatrolSpawning', 'false')
        server.gameRules.set('showDeathMessages', 'false')
        server.gameRules.set('announceAdvancements', 'false')
        server.getLevel('minecraft:overworld').setDayTime(22000)
})

PlayerEvents.loggedIn(event => {
    const { player, server } = event
    if (!server.persistentData.contains("first_player_enter")) {
        server.persistentData.putBoolean("first_player_enter", true)
        const x = Math.floor(player.x)
        const y = Math.floor(player.y)
        const z = Math.floor(player.z)
        server.persistentData.putInt("starter_x", x + 65)
        server.persistentData.putInt("starter_y", y - 56)
        server.persistentData.putInt("starter_z", z + 22)
        server.runCommandSilent(`place template cwi:filled_starter_bunker ${x} ${y - 58} ${z}`)
        server.runCommandSilent(`place template cwi:starter_bunker ${x} ${y - 58} ${z}`)
        server.runCommandSilent('kill @e[type=item]')
    }
    if (!player.persistentData.contains("first_enter")) {
        player.persistentData.putBoolean("first_enter", true)

        const playerX = server.persistentData.getInt("starter_x")
        const playerY = server.persistentData.getInt("starter_y")
        const playerZ = server.persistentData.getInt("starter_z")

        player.setX(playerX + 1)
        player.setY(playerY)
        player.setZ(playerZ + 1)
        player.setRotation(90, 0)

        player.potionEffects.add('minecraft:nausea', 100, 0, false, false)
        player.potionEffects.add('minecraft:blindness', 40, 0, false, false)
        player.potionEffects.add('minecraft:slowness', 20, 5, false, false)
        player.potionEffects.add('minecraft:slowness', 40, 3, false, false)
        player.potionEffects.add('minecraft:slowness', 60, 2, false, false)
        player.potionEffects.add('minecraft:slowness', 80, 2, false, false)
        player.potionEffects.add('minecraft:slowness', 100, 0, false, false)
        player.potionEffects.add('minecraft:weakness', 100, 0, false, false)

        server.runCommandSilent(`playsound clanginghowl:electric_shock player @a ${playerX} ${playerY} ${playerZ} 2 2`)
        server.runCommandSilent(`playsound minecraft:entity.generic.extinguish_fire player @a ${playerX} ${playerY} ${playerZ} 2 1`)
        server.runCommandSilent(`playsound kubejs:player_spawn player @a ${playerX} ${playerY} ${playerZ} 2 1`)
        server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${playerX} ${playerY} ${playerZ} 0.3 0.1 0.3 0 10`)
        server.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${playerX} ${playerY + 1.7} ${playerZ} 0.4 0.3 0.4 0.03 30`)
        server.runCommandSilent(`particle minecraft:smoke ${playerX} ${playerY + 0.3} ${playerZ} 0.3 0.3 0.3 0.05 5`)
    }
})

PlayerEvents.respawned(event => {
    const { player, server } = event

    const x = Math.floor(player.x)
    const y = Math.floor(player.y)
    const z = Math.floor(player.z)

    player.potionEffects.add('minecraft:nausea', 100, 0, false, false)
    player.potionEffects.add('minecraft:blindness', 40, 0, false, false)
    player.potionEffects.add('minecraft:slowness', 20, 5, false, false)
    player.potionEffects.add('minecraft:slowness', 40, 3, false, false)
    player.potionEffects.add('minecraft:slowness', 60, 2, false, false)
    player.potionEffects.add('minecraft:slowness', 80, 2, false, false)
    player.potionEffects.add('minecraft:slowness', 100, 0, false, false)
    player.potionEffects.add('minecraft:weakness', 100, 0, false, false)

    server.runCommandSilent(`playsound block.sand.place block @a ${x} ${y + 1} ${z} 2 0.8`)
    server.runCommandSilent(`playsound kubejs:player_spawn player @a ${x} ${y + 1} ${z} 2 1`)
    server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${x} ${y + 0.2} ${z} 0.6 0.3 0.6 0 20`)
    server.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${x} ${y} ${z} 0.4 0.3 0.4 0.03 30`)
    server.runCommandSilent(`particle minecraft:smoke ${x} ${y} ${z} 0.3 0.3 0.3 0.05 5`)
})