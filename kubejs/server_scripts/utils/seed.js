ServerEvents.loaded(event => {
    console.log('[Utils - Seed]: ' + event.server.overworld())
    global.seed = event.server.overworld().toString().split('\\[')[1].split('\\]')[0]
    global.seed_int = event.server.worldData.worldGenOptions().seed();
    console.log('[Utils - Seed]: ' + global.seed_int)
})