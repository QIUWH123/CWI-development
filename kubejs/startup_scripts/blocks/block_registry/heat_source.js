CreateEvents.boilerHeatHandler((event) => {
    event.addAdvanced('darkerdepths:darkslate', (block) => {
        if (
            block.offset(0, -1, 0).id == "minecraft:lava" ||
            block.offset(1, 0, 0).id == "minecraft:lava"  ||
            block.offset(-1, 0, 0).id == "minecraft:lava" ||
            block.offset(0, 0, 1).id == "minecraft:lava"  ||
            block.offset(0, 0, -1).id == "minecraft:lava"
        ) {
            return 1
        }
        return 0
    })
})