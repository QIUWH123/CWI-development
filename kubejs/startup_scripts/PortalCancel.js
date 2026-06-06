const $PortalSpawnEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent")

ForgeEvents.onEvent($PortalSpawnEvent,event=>{
    event.setCanceled(true)
})