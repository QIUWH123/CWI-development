let $WorldMapClientWorldDataHelper = Java.loadClass('xaero.map.mcworld.WorldMapClientWorldDataHelper')
let $ClientboundRulesPacket = Java.loadClass('xaero.map.message.basic.ClientboundRulesPacket')
let $MinimapClientWorldDataHelper = Java.loadClass('xaero.common.minimap.mcworld.MinimapClientWorldDataHelper')
let $ClientboundRulesPacketMinimap = Java.loadClass('xaero.common.message.basic.ClientboundRulesPacket')

PlayerEvents.tick(e => {
    if (globalTickCounter % 10) return

    let dimKey = String(e.level.dimensionKey.location())
    let showCave = dimKey == 'minecraft:the_nether'

    let hasRadar = e.player.inventory.find('kubejs:echoing_heart') >= 0

    $WorldMapClientWorldDataHelper.currentWorldData.syncedRules = new $ClientboundRulesPacket(false, showCave)
    $MinimapClientWorldDataHelper.currentWorldData.syncedRules = new $ClientboundRulesPacketMinimap(false, showCave, hasRadar)
})