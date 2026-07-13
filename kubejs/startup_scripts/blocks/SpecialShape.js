StartupEvents.registry('block', event => {

    const materials = [
        'steel',
        'cast_iron',
        'lead',
        'brass',
        'nickel',
        'copper',
        'constantan',
        'zinc',
        'aluminum'
    ]

    const panels = [
        ['slag_bricks', 'tfmg:block/slag_bricks', 'calcite', 3, 6, 'pickaxe', 'stone']
    ]

    const boards = []

    materials.forEach(material => {
        event.create(`${material}_frame_panel`)
            .soundType('metal')
            .hardness(3)
            .resistance(3)
            .requiresTool(true)
            .box(0, 0, 0, 16, 3, 16)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('create:fan_transparent')
            .tagItem('cwi:frame_panel')
            .mapColor('#FF5500')
            .suffocating(false)
            .redstoneConductor(false)
            .defaultCutout()
            .modelJson = {
                parent: 'kubejs:block/frame_panel',
                textures: { 
                    "0": `kubejs:block/model/building_blocks/frame_panels/${material}`,
                    "particle": `kubejs:block/model/building_blocks/frame_panels/${material}`
                }
            }

        event.create(`${material}_frame_upper_eaves`, 'cardinal')
            .soundType('metal')
            .hardness(3)
            .resistance(3)
            .requiresTool(true)
            .box(0, 8, 8, 16, 16, 16)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('create:fan_transparent')
            .tagItem('cwi:frame_upper_eaves')
            .tagItem('cwi:frame_eaves')
            .mapColor('#FF5500')
            .suffocating(false)
            .redstoneConductor(false)
            .defaultCutout()
            .modelJson = {
                parent: 'kubejs:block/frame_upper_eaves',
                textures: { 
                    "0": `kubejs:block/model/building_blocks/frame_eaves/${material}`,
                    "particle": `kubejs:block/model/building_blocks/frame_eaves/${material}`
                }
            }

        event.create(`${material}_frame_lower_eaves`, 'cardinal')
            .soundType('metal')
            .hardness(3)
            .resistance(3)
            .requiresTool(true)
            .box(0, 0, 8, 16, 8, 16)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('create:fan_transparent')
            .tagItem('cwi:frame_lower_eaves')
            .tagItem('cwi:frame_eaves')
            .mapColor('#FF5500')
            .suffocating(false)
            .redstoneConductor(false)
            .defaultCutout()
            .modelJson = {
                parent: 'kubejs:block/frame_lower_eaves',
                textures: { 
                    "0": `kubejs:block/model/building_blocks/frame_eaves/${material}`,
                    "particle": `kubejs:block/model/building_blocks/frame_eaves/${material}`
                }
            }
    })

    function createThinBlock(type, boxHeight, model, itemTag) {
        (type === 'panel' ? panels : boards).forEach(
            ([material, texture, sound, hardness, resistance, miningType, toolLevel]) => {
                event.create(`${material}_${type}`)
                    .soundType(sound)
                    .hardness(hardness)
                    .resistance(resistance)
                    .requiresTool(true)
                    .box(0, 0, 0, 16, boxHeight, 16)
                    .tagBlock(`minecraft:mineable/${miningType}`)
                    .tagBlock(`minecraft:needs_${toolLevel}_tool`)
                    .tagItem(itemTag)
                    .mapColor('#FF5500')
                    .suffocating(false)
                    .redstoneConductor(false)
                    .defaultCutout()
                    .modelJson = {
                        parent: model,
                        textures: { 
                            "0": texture, 
                            "particle": texture 
                        }
                    }
            }
        )
    }

    createThinBlock('panel', 3, 'kubejs:block/panel', 'cwi:panel')
    createThinBlock('board', 1, 'kubejs:block/board', 'cwi:board')
    
})