// Fall Items Configuration Array

var fallItemsConfig = [
    {
        inputItem: "kubejs:ash",
        effects: [
            {
                spaceBetween: 2,
                outputItem: '',
                sound: { id: "block.sand.place", volume: 2, pitch: 2 },
                particle: { type: "minecraft:falling_dust", data: "minecraft:gravel", dx: 0.5, dy: 0.3, dz: 0.5, speed: 0.1, count: 16 }
            }
        ]
    },
    {
        inputItem: "kubejs:dark_ash",
        effects: [
            {
                spaceBetween: 2,
                outputItem: '',
                sound: { id: "block.sand.place", volume: 2, pitch: 2 },
                particle: { type: "minecraft:falling_dust", data: "minecraft:deepslate", dx: 0.5, dy: 0.3, dz: 0.5, speed: 0.1, count: 16 }
            }
        ]
    },
    {
        inputItem: "create:polished_rose_quartz",
        effects: [
            {
                spaceBetween: 2,
                outputItem: 'kubejs:damaged_polished_rose_quartz',
                sound: { id: "minecraft:block.amethyst_block.break", volume: 0.8, pitch: 1.2 },
                particle: { type: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 }
            }
        ]
    },
    {
        inputItem: "create:precision_mechanism",
        effects: [
            {
                spaceBetween: 3,
                outputItem: 'kubejs:damaged_precision_mechanism',
                sound: { id: "minecraft:block.chain.break", volume: 0.6, pitch: 1.2 },
                particle: { type: "minecraft:ash", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 12 }
            }
        ]
    },
    {
        inputItem: "naturescompass:naturescompass",
        effects: [
            {
                spaceBetween: 3,
                outputItem: 'kubejs:damaged_natures_compass',
                sound: { id: "minecraft:block.glass.break", volume: 0.4, pitch: 1.8 },
                particle: { type: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 }
            }
        ]
    },
    {
        inputItem: "create_connected:control_chip",
        effects: [
            {
                spaceBetween: 2,
                outputItem: 'kubejs:damaged_control_chip',
                sound: { id: "minecraft:block.comparator.click", volume: 0.5, pitch: 1.5 },
                particle: { type: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 }
            }
        ]
    },
    {
        inputItem: "create:electron_tube",
        effects: [
            {
                spaceBetween: 2,
                outputItem: 'kubejs:damaged_electron_tube',
                sound: { id: "minecraft:block.glass.break", volume: 0.4, pitch: 1.8 },
                particle: { type: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 }
            }
        ]
    },
    {
        inputItem: "minecraft:glass",
        effects: [
            {
                spaceBetween: 2,
                outputItem: '',
                sound: { id: "block.glass.break", volume: 1, pitch: 1 },
                particle: { type: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 }
            }
        ]
    },
    {
        inputItem: "kubejs:devitrified_glass",
        effects: [
            {
                spaceBetween: 4,
                outputItem: '',
                sound: { id: "block.glass.break", volume: 1, pitch: 1 },
                particle: { type: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 }
            },
            {
                spaceBetween: 2,
                outputItem: 'kubejs:cracked_glass',
                sound: { id: "block.glass.break", volume: 1, pitch: 1 },
                particle: { type: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 }
            }
        ]
    },
    {
        inputItem: "kubejs:cracked_glass",
        effects: [
            {
                spaceBetween: 2,
                outputItem: '',
                sound: { id: "block.glass.break", volume: 1, pitch: 1 },
                particle: { type: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 }
            }
        ]
    }
]

// Build Sorted Effects Map By Space Between Descending

var fallItemsMap = {}
for (var i = 0; i < fallItemsConfig.length; i++) {
    var configEntry = fallItemsConfig[i]
    var effectsSorted = configEntry.effects
    effectsSorted.sort(function (a, b) { return b.spaceBetween - a.spaceBetween })
    fallItemsMap[configEntry.inputItem] = effectsSorted
}

// Java Class Imports For Sound And Particle

var $BuiltInRegistries   = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
var $ResourceLocation    = Java.loadClass('net.minecraft.resources.ResourceLocation')
var $BlockParticleOption = Java.loadClass('net.minecraft.core.particles.BlockParticleOption')
var $ParticleTypes       = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

// Sound Event Cache

var soundCache = {}
function getSoundEvent(id) {
    if (!soundCache[id]) {
        soundCache[id] = $BuiltInRegistries.SOUND_EVENT.get(new $ResourceLocation(id))
    }
    return soundCache[id]
}

// Particle Type Cache

var particleCache = {}
function getSimpleParticle(id) {
    if (!particleCache[id]) {
        particleCache[id] = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation(id))
    }
    return particleCache[id]
}

// Block Particle Options Resolver

function getBlockParticleOptions(type, blockId) {
    var blockState = Block.getBlock(blockId).defaultBlockState()
    if (type === 'minecraft:falling_dust') {
        return new $BlockParticleOption($ParticleTypes.FALLING_DUST, blockState)
    }
    return new $BlockParticleOption($ParticleTypes.BLOCK, blockState)
}

// Particle Options Factory

function resolveParticleOptions(cfg) {
    if (cfg.type === 'minecraft:falling_dust' || cfg.type === 'minecraft:block') {
        return getBlockParticleOptions(cfg.type, cfg.data)
    }
    return getSimpleParticle(cfg.type)
}

// Select Best Effect Based On Fall Distance

function selectBestEffect(effects, fallDistance) {
    for (var i = 0; i < effects.length; i++) {
        if (effects[i].spaceBetween <= fallDistance) {
            return effects[i]
        }
    }
    return null
}

// Play Sound And Particle Effects

function playEffects(entity, effect, fallDistance) {
    var snd = effect.sound
    if (snd) {
        entity.level.playSound(
            null, entity.x, entity.y, entity.z,
            getSoundEvent(snd.id), 'blocks', snd.volume, snd.pitch
        )
    }

    var ptcl = effect.particle
    if (ptcl) {
        var fd = Math.max(fallDistance, 1)
        var factorXZ = Math.pow(fd, 0.25)
        var factorY  = Math.pow(fd, 0.15)
        entity.level.sendParticles(
            resolveParticleOptions(ptcl),
            entity.x, entity.y + 0.2, entity.z,
            ptcl.count ? ptcl.count : 1,
            ptcl.dx * factorXZ,
            ptcl.dy * factorY,
            ptcl.dz * factorXZ,
            ptcl.speed * factorXZ
        )
    }
}

// Tracked Items Array

var trackedItems = []

// On Item Spawned

EntityEvents.spawned('item', function (event) {
    var entity = event.entity
    var itemId = entity.item.id
    var effects = fallItemsMap[itemId]
    if (!effects) return

    entity.pickUpDelay = 32767
    trackedItems.push({
        entity: entity,
        startY: entity.y,
        count: entity.item.count,
        effects: effects
    })
})

// On Level Tick

LevelEvents.tick(function (event) {
    if (event.server.tickCount % 2 !== 0) return

    var compactNeeded = false
    var i = trackedItems.length
    while (i--) {
        var data = trackedItems[i]
        var entity = data.entity

        if (!entity || !entity.isAlive() || entity.isRemoved()) {
            trackedItems[i] = null
            compactNeeded = true
            continue
        }

        if (!entity.onGround()) continue

        var fallDistance = Math.abs(data.startY - entity.y)
        var effect = selectBestEffect(data.effects, fallDistance)

        if (!effect) {
            entity.pickUpDelay = 20
            trackedItems[i] = null
            compactNeeded = true
            continue
        }

        if (effect.outputItem) {
            entity.item = Item.of(effect.outputItem, data.count)
        } else {
            entity.discard()
        }

        playEffects(entity, effect, fallDistance)
        entity.pickUpDelay = 20
        trackedItems[i] = null
        compactNeeded = true
    }

    if (compactNeeded) {
        var newLen = 0
        for (var j = 0; j < trackedItems.length; j++) {
            if (trackedItems[j] !== null) {
                trackedItems[newLen++] = trackedItems[j]
            }
        }
        trackedItems.length = newLen
    }
})