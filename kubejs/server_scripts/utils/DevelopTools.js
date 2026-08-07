global.debugUserName = [
    "QIUWH",
    "Liaux_awa"
]

PlayerEvents.loggedIn(event => {
    const { player, server } = event
    if (player.username === "Liaux_awa") {
        player.tell('还记得那些东西不能用吗 ^w^')
    }
})

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
                server.tell('All Dropped Items Have Been Cleared')
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
                server.tell('All Players Have Been Cleared')
                event.cancel()
            }
        }
    }
})

BlockEvents.rightClicked((event) => {
    let { player } = event

    let id = event.getBlock().getId()
    let blockState = event.getBlock().getBlockState()
    let pos = event.getBlock().getPos()
    let blockHardness = blockState.getDestroySpeed(event.getLevel(), pos)
    let blockResistance = blockState.getBlock().getExplosionResistance()

    for (let i = 0; i < global.debugUserName.length; i++) {
        if (
            event.hand !== "MAIN_HAND" &&
            player.crouching &&
            player.username === global.debugUserName[i]
        ) {
            player.tell(Text.of(`ID: ${id}`))
            player.tell(Text.of(`Pos: ${pos.getX()}, ${pos.getY()}, ${pos.getZ()}`))
            player.tell(Text.of(`Hardness: ${blockHardness}`))
            player.tell(Text.of(`Resistance: ${blockResistance}`))
        }
    }
})