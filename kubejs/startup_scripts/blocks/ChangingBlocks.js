const Direction = Java.loadClass('net.minecraft.core.Direction')
const DIRECTIONS = Direction.values();

function growthHandler(chance, map) {
    return (tick) => {
        const { block, level } = tick
        const pos = block.getPos()

        DIRECTIONS.forEach((face) => {
            const offsetPos = pos.relative(face)
            const next = map[level.getBlock(offsetPos).id]

            if (next && Math.random() < chance) {
                tick.server.runCommandSilent(
                    `setblock ${offsetPos.getX()} ${offsetPos.getY()} ${offsetPos.getZ()} ${next}[facing=${face.toString().toLowerCase()}]`
                )
            }
        })
    }
}

function changeHandler(chance, finalBlock) {
    return (tick) => {
        const { block } = tick
        const pos = block.getPos()

        if (Math.random() < chance) {
            tick.server.runCommandSilent(
                `setblock ${pos.getX()} ${pos.getY()} ${pos.getZ()} ${finalBlock}`
            )
        }
    }
}

StartupEvents.registry('block', (event) => {

    event.create('infected_budding_amethyst')
        .soundType('amethyst')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .randomTick(growthHandler(0.2, {
            'minecraft:air': 'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud': 'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud': 'minecraft:large_amethyst_bud',
            'minecraft:large_amethyst_bud': 'minecraft:amethyst_cluster'
        }))

    event.create('infected_budding_quartz')
        .soundType('amethyst')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .randomTick(growthHandler(0.2, {
            'minecraft:air': 'geode_plus:small_nether_quartz_bud',
            'geode_plus:small_nether_quartz_bud': 'geode_plus:medium_nether_quartz_bud',
            'geode_plus:medium_nether_quartz_bud': 'geode_plus:large_nether_quartz_bud',
            'geode_plus:large_nether_quartz_bud': 'geode_plus:nether_quartz_crystal'
        }))
    
    event.create('forming_fabric', 'cardinal')
        .soundType('wood')
        .hardness(1)
        .resistance(1)
        .mapColor('#FF5500')
        .box(0, 0, 0, 16, 2, 16)
        .tagBlock('minecraft:mineable/axe')
        .notSolid()
        .suffocating(false)
        .defaultCutout()

    event.create('wet_web', 'cardinal')
        .soundType('wood')
        .hardness(1)
        .resistance(1)
        .mapColor('#FF5500')
        .box(0, 0, 0, 16, 2, 16)
        .tagBlock('minecraft:mineable/axe')
        .notSolid()
        .suffocating(false)
        .defaultCutout()
        .randomTick(changeHandler(0.02, 'kubejs:pressed_wet_web'))

    event.create('pressed_wet_web', 'cardinal')
        .soundType('wood')
        .hardness(1)
        .resistance(1)
        .mapColor('#FF5500')
        .box(0, 0, 0, 16, 2, 16)
        .tagBlock('minecraft:mineable/axe')
        .notSolid()
        .suffocating(false)
        .defaultCutout()
        .randomTick(changeHandler(0.1, 'kubejs:dried_web'))

    event.create('dried_web', 'cardinal')
        .soundType('wood')
        .hardness(1)
        .resistance(1)
        .mapColor('#FF5500')
        .box(0, 0, 0, 16, 2, 16)
        .tagBlock('minecraft:mineable/axe')
        .notSolid()
        .suffocating(false)
        .defaultCutout()

})