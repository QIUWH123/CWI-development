StartupEvents.registry('block', event => {
    const logTypes = [
        'ash_log',
        'stripped_ash_log',
        'broken_ash_log',
        'stripped_broken_ash_log',
        'burnt_log',
        'stripped_burnt_log',
        'broken_burnt_log',
        'stripped_broken_burnt_log'
    ]

    function createLogBlock(event, id) {
        let builder = event.create(id)
            .soundType('wood')
            .hardness(2)
            .resistance(2)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/axe')
            .tagBlock('minecraft:needs_wooden_tool')
            .mapColor('#FF5500');

        if (id.includes('broken')) {
            builder
                .redstoneConductor(false)
                .suffocating(false)
                .defaultCutout()
            builder.modelJson = {
                "parent": "kubejs:block/broken_logs",
                "textures": {
                    "0": `kubejs:block/logs/${id.replace("broken_", "")}_inner`,
                    "1": `kubejs:block/logs/${id.replace("broken_", "")}_top`,
                    "2": `kubejs:block/logs/${id.replace("broken_", "")}`,
                    "particle": `kubejs:block/logs/${id.replace("broken_", "")}_inner`
                }
            }
        } else {
            builder.modelJson = {
                "parent": "minecraft:block/cube_column",
                "textures": {
                    "end": `kubejs:block/logs/${id}_top`,
                    "side": `kubejs:block/logs/${id}`
                }
            }
        }

        builder.property(BlockProperties.AXIS)
            .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        builder.blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": `kubejs:block/${id}`,
                    "x": 90,
                    "y": 90
                },
                "axis=y": {
                    "model": `kubejs:block/${id}`
                },
                "axis=z": {
                    "model": `kubejs:block/${id}`,
                    "x": 90
                }
            }
        };
    }

    logTypes.forEach(id => createLogBlock(event, id))

    event.create('dead_leaves', 'falling')
        .soundType('glow_lichen')
        .hardness(0.3)
        .resistance(0.3)
        .mapColor('#FF5500')
        .suffocating(false)
        .redstoneConductor(false)
        .defaultCutout()
})