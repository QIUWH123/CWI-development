/*
ItemEvents.rightClicked('kubejs:coal_finder', event => {
    const veinName = "createoreexcavation:ore_vein_type/coal"
    let player = event.getPlayer();
    let level = event.getLevel();
    let player_pos = player.blockPosition()
    let pos = $OreVeinGenerator.getPicker(level).locate(veinName, player.blockPosition(), level, 100);
    let dis = Math.floor(Math.sqrt((player_pos.x - pos.x)*(player_pos.x - pos.x)+(player_pos.z - pos.z)*(player_pos.z - pos.z)))
    if (pos === null) {
        player.tell("无法找到煤矿" + veinName);
    } else {
    //    player.tell("100区块内最近的煤矿位于" + pos + ".")
        player.setStatusMessage("最近的煤矿距离你" + dis + "方块")
    }
})
*/