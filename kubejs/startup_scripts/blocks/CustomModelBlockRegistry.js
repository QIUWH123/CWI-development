// priority: 1

function cubeColumnModel(top, side) {
    return {
        "parent": "minecraft:block/cube_column",
        "textures": {
            "end": top,
            "side": side
        }
    }
}

StartupEvents.registry('block', event => {

    event.create('rutile_ore')
        .soundType('amethyst')
        .hardness(4)
        .resistance(6)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .mapColor('#FF5500')
        .modelJson = cubeColumnModel('kubejs:block/ores/rutile_top', 'kubejs:block/ores/rutile_side')

    event.create('uraninite_ore')
        .soundType('amethyst')
        .hardness(4)
        .resistance(6)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .mapColor('#FF5500')
        .modelJson = cubeColumnModel('kubejs:block/ores/uraninite_top', 'kubejs:block/ores/uraninite_side')

    event.create('gravitite_ore')
        .soundType('amethyst')
        .hardness(6)
        .resistance(12)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .mapColor('#FF5500')
        .modelJson = cubeColumnModel('kubejs:block/ores/gravitite_top', 'kubejs:block/ores/gravitite_side')

    event.create('claystone_base')
        .soundType('deepslate')
        .hardness(3)
        .resistance(3)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .mapColor('#B0965F')
        .modelJson = cubeColumnModel('kubejs:block/claystone_base_bottom', 'kubejs:block/claystone_base_side')
        
})