PlayerEvents.loggedIn(event => {
  
  const { player, server } = event;
  
  if (!server.persistentData.contains("starterplaced")) {
    server.persistentData.putBoolean("starterplaced", true);
    
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);
    
    server.runCommandSilent(`gamerule doInsomnia false`);
    server.runCommandSilent(`gamerule doPatrolSpawning false`);
    server.runCommandSilent(`gamerule doTraderSpawning false`);
    server.runCommandSilent(`place template modpack:filled_starter_bunker ${x} ${y - 58} ${z}`);
    server.runCommandSilent(`place template modpack:starter_bunker ${x} ${y - 58} ${z}`);
    server.runCommandSilent(`tp @a ${x + 34} ${y - 56} ${z + 22} 90 50`);
    server.runCommandSilent(`effect give @a minecraft:nausea 7 0 true`);
    server.runCommandSilent(`effect give @a minecraft:blindness 5 0 true`);
    server.runCommandSilent(`playsound clanginghowl:electric_shock player @a ${x + 34} ${y - 56} ${z + 22} 1.5 3`);
    server.runCommandSilent(`playsound minecraft:entity.generic.extinguish_fire player @a ${x + 34} ${y - 56} ${z + 22} 1 1`);
    server.runCommandSilent(`particle minecraft:campfire_cosy_smoke ${x + 34} ${y - 56} ${z + 22} 0.3 0.1 0.3 0 10`);
    server.runCommandSilent(`particle minecraft:cloud ${x + 34} ${y - 56} ${z + 22} 0.3 0.2 0.3 0 10`);
    server.runCommandSilent(`particle minecraft:falling_dust minecraft:gravel ${x + 34} ${y - 54.3} ${z + 22} 0.4 0.3 0.4 0.03 7`);
    server.runCommandSilent(`particle minecraft:dust minecraft:gravel ${x + 34} ${y - 54.3} ${z + 22} 0.4 0.3 0.4 0.02 5`);
    server.runCommandSilent(`particle minecraft:smoke ${x + 34} ${y - 56.3} ${z + 22} 0.3 0.3 0.3 0.05 5`);

  }

});