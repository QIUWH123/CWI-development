PlayerEvents.loggedIn(event => {
  
  const { player, server } = event
  if (server.persistentData.contains("starterplaced")) return
  server.persistentData.putBoolean("starterplaced", true)
    
  const x = Math.floor(player.x)
  const y = Math.floor(player.y)
  const z = Math.floor(player.z)
    
  server.runCommandSilent(`gamerule showDeathMessages false`)
  server.runCommandSilent(`gamerule announceAdvancements false`)
  server.runCommandSilent(`gamerule doInsomnia false`)
  server.runCommandSilent(`gamerule doPatrolSpawning false`)
  server.runCommandSilent(`gamerule doTraderSpawning false`)
  server.runCommandSilent(`gamerule doImmediateRespawn true`)
  server.runCommandSilent(`gamerule keepInventory true`)
  server.runCommandSilent(`place template cwi:filled_starter_bunker ${x} ${y - 58} ${z}`)
  server.runCommandSilent(`place template cwi:starter_bunker ${x} ${y - 58} ${z}`)
  server.runCommandSilent(`tp @a ${x + 34} ${y - 56} ${z + 22} 90 50`)
  server.runCommandSilent(`effect give @a minecraft:nausea 5 0 true`)
  server.runCommandSilent(`effect give @a minecraft:blindness 2 0 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 1 5 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 2 2 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 3 1 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 5 0 true`)
  server.runCommandSilent(`effect give @a minecraft:weakness 5 0 true`)
  server.runCommandSilent(`playsound clanginghowl:electric_shock player @a ${x + 34} ${y - 56} ${z + 22} 2 2`)
  server.runCommandSilent(`playsound minecraft:entity.generic.extinguish_fire player @a ${x + 34} ${y - 56} ${z + 22} 2 1`)
  server.runCommandSilent(`playsound kubejs:player_spawn player @a ${x + 34} ${y - 56} ${z + 22} 2 1`)
  server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${x + 34} ${y - 56} ${z + 22} 0.3 0.1 0.3 0 10`)
  server.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${x + 34} ${y - 54.3} ${z + 22} 0.4 0.3 0.4 0.03 30`)
  server.runCommandSilent(`particle minecraft:smoke ${x + 34} ${y - 56.3} ${z + 22} 0.3 0.3 0.3 0.05 5`)

})

PlayerEvents.respawned(event => {
  
  const { player, server } = event
  const x = Math.floor(player.x)
  const y = Math.floor(player.y)
  const z = Math.floor(player.z)
    
  server.runCommandSilent(`effect give @a minecraft:nausea 5 0 true`)
  server.runCommandSilent(`effect give @a minecraft:blindness 2 0 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 1 5 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 2 2 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 3 1 true`)
  server.runCommandSilent(`effect give @a minecraft:slowness 5 0 true`)
  server.runCommandSilent(`effect give @a minecraft:weakness 5 0 true`)
  server.runCommandSilent(`playsound block.sand.place block @a ${x} ${y + 1} ${z} 2 0.8`)
  server.runCommandSilent(`playsound kubejs:player_spawn player @a ${x} ${y + 1} ${z} 2 1`)
  server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${x} ${y + 0.2} ${z} 0.6 0.3 0.6 0 20`)
  server.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${x} ${y} ${z} 0.4 0.3 0.4 0.03 30`)
  server.runCommandSilent(`particle minecraft:smoke ${x} ${y} ${z} 0.3 0.3 0.3 0.05 5`)

})