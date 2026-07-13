global.debugUserName = [
    "QIUWH"
]

ItemEvents.rightClicked((event) => {
    let {item, player} = event

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (player.mainHandItem === item.id &&
            player.crouching &&
            player.mainHandItem !== "minecraft:air" &&
            player.username === global.debugUserName[i]) {
            player.runCommandSilent("kubejs hand")
        }
    }
})

PlayerEvents.chat((event) => {
    let {player, message, server} = event

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (player.username === global.debugUserName[i]) {
            if (message.trim().equalsIgnoreCase("-ki")) {
                server.runCommandSilent("kill @e[type=item]")
                server.runCommandSilent("tellraw @a 'Dropped items have been cleared'")
                event.cancel()
            }

            if (message.trim().equalsIgnoreCase("-kf")) {
                player.runCommandSilent("effect give @s minecraft:night_vision infinite 255 true")
                player.runCommandSilent("effect give @s minecraft:strength infinite 255 true")
                player.runCommandSilent("effect give @s minecraft:resistance infinite 255 true")
                event.cancel()
            }

            if (message.trim().equalsIgnoreCase("-efc")) {
                player.runCommandSilent("effect clear")
                event.cancel()
            }

            if (message.trim().equalsIgnoreCase("-kla")) {
                server.runCommandSilent("kill @e[type=!player]")
                event.cancel()
            }
        }
    }
})

BlockEvents.rightClicked((event) => {
    let { player } = event;

    let blockState = event.getBlock().getBlockState();
    let pos = event.getBlock().getPos();
    let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)
    let blockResistance = blockState.getBlock().getExplosionResistance()

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (
            event.hand !== "MAIN_HAND" &&
            player.crouching &&
            player.username === global.debugUserName[i]
        ) {
            player.tell(Text.of(`Hardness: ${blockHardness}`));
            player.tell(Text.of(`Resistance: ${blockResistance}`));
        }
    }
});