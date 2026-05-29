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
        .mapColor('#FF5500')

    if (id.includes('broken')) {
        builder = builder
        .redstoneConductor(false)
        .suffocating(false)
        .defaultCutout()
    }

    builder.property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
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
        }
    }

    logTypes.forEach(id => createLogBlock(event, id))

  event.create('dead_leaves','falling')
    .soundType('glow_lichen')
    .hardness(0.3)
    .resistance(0.3)
    .mapColor('#FF5500')
    .suffocating(false)
    .redstoneConductor(false)
    .defaultCutout()
    
})