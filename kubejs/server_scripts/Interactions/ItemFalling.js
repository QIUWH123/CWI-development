const fallItemsConfig = [
    {
        inputItem: "kubejs:ash",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "block.sand.place", volume: 2, pitch: 2 },
                    { type: 'particle', particleType: "minecraft:falling_dust", data: "minecraft:gravel", dx: 0.5, dy: 0.3, dz: 0.5, speed: 0.1, count: 16 },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "kubejs:dark_ash",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "block.sand.place", volume: 2, pitch: 2 },
                    { type: 'particle', particleType: "minecraft:falling_dust", data: "minecraft:deepslate", dx: 0.5, dy: 0.3, dz: 0.5, speed: 0.1, count: 16 },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "create:polished_rose_quartz",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "minecraft:block.amethyst_block.break", volume: 0.8, pitch: 1.2 },
                    { type: 'particle', particleType: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 },
                    { type: 'replaceItem', item: 'kubejs:damaged_polished_rose_quartz' }
                ]
            }
        ]
    },
    {
        inputItem: "create:precision_mechanism",
        effects: [
            {
                spaceBetween: 3,
                events: [
                    { type: 'sound', id: "minecraft:block.chain.break", volume: 0.6, pitch: 1.2 },
                    { type: 'particle', particleType: "minecraft:ash", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 12 },
                    { type: 'replaceItem', item: 'kubejs:damaged_precision_mechanism' }
                ]
            }
        ]
    },
    {
        inputItem: "naturescompass:naturescompass",
        effects: [
            {
                spaceBetween: 3,
                events: [
                    { type: 'sound', id: "minecraft:block.glass.break", volume: 0.4, pitch: 1.8 },
                    { type: 'particle', particleType: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 },
                    { type: 'replaceItem', item: 'kubejs:damaged_natures_compass' }
                ]
            }
        ]
    },
    {
        inputItem: "create_connected:control_chip",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "minecraft:block.comparator.click", volume: 0.5, pitch: 1.5 },
                    { type: 'particle', particleType: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 },
                    { type: 'replaceItem', item: 'kubejs:damaged_control_chip' }
                ]
            }
        ]
    },
    {
        inputItem: "create:electron_tube",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "minecraft:block.glass.break", volume: 0.4, pitch: 1.8 },
                    { type: 'particle', particleType: "minecraft:electric_spark", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 4 },
                    { type: 'replaceItem', item: 'kubejs:damaged_electron_tube' }
                ]
            }
        ]
    },
    {
        inputItem: "minecraft:glass",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "block.glass.break", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "kubejs:devitrified_glass",
        effects: [
            {
                spaceBetween: 4,
                events: [
                    { type: 'sound', id: "block.glass.break", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 },
                    { type: 'discard' }
                ]
            },
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "block.glass.break", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 },
                    { type: 'replaceItem', item: 'kubejs:cracked_glass' }
                ]
            }
        ]
    },
    {
        inputItem: "kubejs:cracked_glass",
        effects: [
            {
                spaceBetween: 2,
                events: [
                    { type: 'sound', id: "block.glass.break", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "minecraft:glass", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 20 },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "minecraft:tnt",
        effects: [
            {
                spaceBetween: 6,
                events: [
                    { type: 'sound', id: "minecraft:entity.generic.explode", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:explosion", dx: 0.5, dy: 0.5, dz: 0.5, speed: 0.1, count: 10 },
                    { type: 'explosion', strength: 2, causesFire: false, explosionMode: 'BREAK' },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "ae2:tiny_tnt",
        effects: [
            {
                spaceBetween: 6,
                events: [
                    { type: 'sound', id: "minecraft:entity.generic.explode", volume: 0.5, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:explosion", dx: 0.0, dy: 0.0, dz: 0.0, speed: 0.0, count: 1 },
                    { type: 'explosion', strength: 1, causesFire: false, explosionMode: 'DESTROY' },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "minecraft:gunpowder",
        effects: [
            {
                spaceBetween: 4,
                events: [
                    { type: 'sound', id: "block.sand.place", volume: 2, pitch: 2 },
                    { type: 'particle', particleType: "minecraft:falling_dust", data: "minecraft:gravel", dx: 0.5, dy: 0.3, dz: 0.5, speed: 0.1, count: 16 },
                    { type: 'setBlock', block: "minecraft:fire" },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "clanginghowl:extraterrestrial_pebble",
        effects: [
            {
                spaceBetween: 0,
                events: [
                    { type: 'sound', id: "minecraft:block.stone.place", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "clanginghowl:extraterrestrial_pebble", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 8 },
                    { type: 'setBlock', block: "clanginghowl:extraterrestrial_pebble" },
                    { type: 'discard' }
                ]
            }
        ]
    },
    {
        inputItem: "kubejs:pebbles",
        effects: [
            {
                spaceBetween: 0,
                events: [
                    { type: 'sound', id: "minecraft:block.stone.place", volume: 1, pitch: 1 },
                    { type: 'particle', particleType: "minecraft:block", data: "kubejs:pebbles", dx: 0.3, dy: 0.3, dz: 0.3, speed: 0.1, count: 8 },
                    { type: 'setBlock', block: "kubejs:pebbles" },
                    { type: 'discard' }
                ]
            }
        ]
    }
]

let fallItemsMap = {}
for (let i = 0; i < fallItemsConfig.length; i++) {
    let configEntry = fallItemsConfig[i]
    let effectsSorted = configEntry.effects.slice().sort(function (a, b) { return b.spaceBetween - a.spaceBetween })
    fallItemsMap[configEntry.inputItem] = effectsSorted
}

const $BuiltInRegistries   = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ResourceLocation    = Java.loadClass('net.minecraft.resources.ResourceLocation')
const $BlockParticleOption = Java.loadClass('net.minecraft.core.particles.BlockParticleOption')
const $ParticleTypes       = Java.loadClass('net.minecraft.core.particles.ParticleTypes')
const $BlockPos            = Java.loadClass('net.minecraft.core.BlockPos')

let soundCache = {}
let particleCache = {}
let blockParticleCache = {}

function getSoundEvent(id) {
    if (!soundCache[id]) {
        soundCache[id] = $BuiltInRegistries.SOUND_EVENT.get(new $ResourceLocation(id))
    }
    return soundCache[id]
}

function getSimpleParticle(id) {
    if (!particleCache[id]) {
        particleCache[id] = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation(id))
    }
    return particleCache[id]
}

function getBlockParticleOptions(type, blockId) {
    let cacheKey = type + ':' + blockId
    if (!blockParticleCache[cacheKey]) {
        let blockState = Block.getBlock(blockId).defaultBlockState()
        let particleType = type === 'minecraft:falling_dust' ? $ParticleTypes.FALLING_DUST : $ParticleTypes.BLOCK
        blockParticleCache[cacheKey] = new $BlockParticleOption(particleType, blockState)
    }
    return blockParticleCache[cacheKey]
}

function resolveParticleOptions(cfg) {
    if (cfg.particleType === 'minecraft:falling_dust' || cfg.particleType === 'minecraft:block') {
        return getBlockParticleOptions(cfg.particleType, cfg.data)
    }
    return getSimpleParticle(cfg.particleType)
}

function selectBestEffect(effects, fallDistance) {
    for (let i = 0; i < effects.length; i++) {
        if (effects[i].spaceBetween <= fallDistance) {
            return effects[i]
        }
    }
    return null
}

function getBlockStateForPlacement(id) {
    let block = Block.getBlock(id)
    if (block) return block.defaultBlockState()
    return Fluid.getFluid(id).defaultFluidState().createLegacyBlock()
}

function applyEvent(entity, event, fallDistance) {
    switch (event.type) {
        case 'sound':
            entity.level.playSound(null, entity.x, entity.y, entity.z, getSoundEvent(event.id), 'blocks', event.volume, event.pitch)
            break
        case 'particle': {
            let fd = Math.max(fallDistance, 1)
            let factorXZ = Math.pow(fd, 0.25)
            let factorY  = Math.pow(fd, 0.15)
            entity.level.sendParticles(
                resolveParticleOptions(event),
                entity.x, entity.y + 0.2, entity.z,
                event.count,
                event.dx * factorXZ,
                event.dy * factorY,
                event.dz * factorXZ,
                event.speed * factorXZ
            )
            break
        }
        case 'explosion': {
            let explosion = entity.level.createExplosion(entity.x, entity.y, entity.z)
            if (event.explosionMode === 'BREAK') {
                explosion.explosionMode = 'tnt'
            } else if (event.explosionMode === 'DESTROY') {
                explosion.explosionMode = 'block'
            } else {
                explosion.explosionMode = 'none'
            }
            explosion.causesFire = event.causesFire
            explosion.strength = event.strength
            explosion.explode()
            break
        }
        case 'setBlock': {
            let pos = new $BlockPos(Math.floor(entity.x), Math.floor(entity.y), Math.floor(entity.z))
            entity.level.setBlockAndUpdate(pos, getBlockStateForPlacement(event.block))
            break
        }
        case 'replaceItem':
            entity.item = Item.of(event.item, entity.item.count)
            break
        case 'discard':
            entity.discard()
            break
    }
}

function applyEffect(entity, effect, fallDistance) {
    for (let i = 0; i < effect.events.length; i++) {
        applyEvent(entity, effect.events[i], fallDistance)
    }
    if (entity.isAlive()) {
        entity.pickUpDelay = 20
    }
}

let trackedItems = []

EntityEvents.spawned('item', function (event) {
    let entity = event.entity
    let effects = fallItemsMap[entity.item.id]
    if (!effects) return

    entity.pickUpDelay = 32767
    trackedItems.push({
        entity: entity,
        startY: entity.y,
        effects: effects
    })
})

LevelEvents.tick(function (event) {
    if (globalTickCounter % 2) return

    let compactNeeded = false
    for (let i = trackedItems.length - 1; i >= 0; i--) {
        let data = trackedItems[i]
        let entity = data.entity

        if (!entity || !entity.isAlive() || entity.isRemoved()) {
            trackedItems[i] = null
            compactNeeded = true
            continue
        }

        if (!entity.onGround()) continue

        let fallDistance = Math.abs(data.startY - entity.y)
        let effect = selectBestEffect(data.effects, fallDistance)

        if (!effect) {
            entity.pickUpDelay = 20
        } else {
            applyEffect(entity, effect, fallDistance)
        }

        trackedItems[i] = null
        compactNeeded = true
    }

    if (compactNeeded) {
        trackedItems = trackedItems.filter(function (item) { return item !== null })
    }
})