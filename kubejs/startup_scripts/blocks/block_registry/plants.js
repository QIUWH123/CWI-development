StartupEvents.registry('block', event => {

  event.create('ash_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/ash_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/ash_log"
                },
                "axis=z": {
                    "model": "kubejs:block/ash_log",
                    "x": 90
                }
               }
      }

  event.create('stripped_ash_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/stripped_ash_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/stripped_ash_log"
                },
                "axis=z": {
                    "model": "kubejs:block/stripped_ash_log",
                    "x": 90
                }
               }
      }

  event.create('broken_ash_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .redstoneConductor(false)
    .suffocating(false)
    .defaultCutout()
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/broken_ash_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/broken_ash_log"
                },
                "axis=z": {
                    "model": "kubejs:block/broken_ash_log",
                    "x": 90
                }
               }
      }

  event.create('stripped_broken_ash_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .redstoneConductor(false)
    .suffocating(false)
    .defaultCutout()
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/stripped_broken_ash_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/stripped_broken_ash_log"
                },
                "axis=z": {
                    "model": "kubejs:block/stripped_broken_ash_log",
                    "x": 90
                }
               }
      }

  event.create('burnt_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/burnt_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/burnt_log"
                },
                "axis=z": {
                    "model": "kubejs:block/burnt_log",
                    "x": 90
                }
               }
      }

  event.create('stripped_burnt_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/stripped_burnt_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/stripped_burnt_log"
                },
                "axis=z": {
                    "model": "kubejs:block/stripped_burnt_log",
                    "x": 90
                }
               }
      }

  event.create('broken_burnt_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .redstoneConductor(false)
    .suffocating(false)
    .defaultCutout()
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/broken_burnt_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/broken_burnt_log"
                },
                "axis=z": {
                    "model": "kubejs:block/broken_burnt_log",
                    "x": 90
                }
               }
      }

  event.create('stripped_broken_burnt_log')
    .soundType('wood')
    .hardness(2)
    .resistance(2)
    .requiresTool(true)
    .tagBlock('minecraft:mineable/axe')
    .tagBlock('minecraft:needs_wooden_tool')
    .mapColor('#FF5500')
    .redstoneConductor(false)
    .suffocating(false)
    .defaultCutout()
    .property(BlockProperties.AXIS)
        .placementState(event => event.set(BlockProperties.AXIS, event.clickedFace.axis))
        .blockstateJson = {
            "variants": {
                "axis=x": {
                    "model": "kubejs:block/stripped_broken_burnt_log",
                    "x": 90,
                    "y": 90
                   },
                "axis=y": {
                    "model": "kubejs:block/stripped_broken_burnt_log"
                },
                "axis=z": {
                    "model": "kubejs:block/stripped_broken_burnt_log",
                    "x": 90
                }
               }
      }

  event.create('dead_leaves','falling')
    .soundType('glow_lichen')
    .hardness(0.3)
    .resistance(0.3)
    .mapColor('#FF5500')
    .suffocating(false)
    .redstoneConductor(false)
    .defaultCutout()
    
})