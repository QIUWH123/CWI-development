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
        ['tfmg','slag_bricks', 'tfmg:block/slag_bricks', 'calcite', 3, 6, 'pickaxe', 'stone']
    ]

    const boards = []

    const upperEaves = [
        ['tfmg','slag_bricks', 'tfmg:block/slag_bricks', 'calcite', 3, 6, 'pickaxe', 'stone'],
        ['tfmg','concrete', 'tfmg:block/yellow_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','rebar_concrete', 'tfmg:block/yellow_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','yellow_concrete', 'tfmg:block/yellow_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','yellow_rebar_concrete', 'tfmg:block/yellow_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','red_concrete', 'tfmg:block/red_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','red_rebar_concrete', 'tfmg:block/red_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','lime_concrete', 'tfmg:block/lime_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','lime_rebar_concrete', 'tfmg:block/lime_rebar_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','white_concrete', 'tfmg:block/white_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','white_rebar_concrete', 'tfmg:block/white_rebar_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','pink_concrete', 'tfmg:block/pink_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','pink_rebar_concrete', 'tfmg:block/pink_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','orange_concrete', 'tfmg:block/orange_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','orange_rebar_concrete', 'tfmg:block/orange_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','black_concrete', 'tfmg:block/black_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','black_rebar_concrete', 'tfmg:block/black_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','light_blue_concrete', 'tfmg:block/light_blue_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','light_blue_rebar_concrete', 'tfmg:block/light_blue_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','light_gray_concrete', 'tfmg:block/light_gray_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','light_gray_rebar_concrete', 'tfmg:block/light_gray_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','blue_concrete', 'tfmg:block/blue_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','blue_rebar_concrete', 'tfmg:block/blue_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','green_concrete', 'tfmg:block/green_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','green_rebar_concrete', 'tfmg:block/green_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','purple_concrete', 'tfmg:block/purple_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','purple_rebar_concrete', 'tfmg:block/purple_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','brown_concrete', 'tfmg:block/brown_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','brown_rebar_concrete', 'tfmg:block/brown_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','cyan_concrete', 'tfmg:block/cyan_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','cyan_rebar_concrete', 'tfmg:block/cyan_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','gray_concrete', 'tfmg:block/gray_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','gray_rebar_concrete', 'tfmg:block/gray_concrete', 'stone', 12, 1200, 'pickaxe', 'stone'],
        ['tfmg','magenta_concrete', 'tfmg:block/magenta_concrete', 'stone', 3.5, 3.5, 'pickaxe', 'stone'],
        ['tfmg','magenta_rebar_concrete', 'tfmg:block/magenta_concrete', 'stone', 12, 1200, 'pickaxe', 'stone']
    ]

    const lowerEaves = []

    materials.forEach(material => {
        event.create(`tfmg:${material}_frame_panel`)
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

        event.create(`tfmg:${material}_frame_upper_eaves`, 'cardinal')
            .soundType('metal')
            .hardness(3)
            .resistance(3)
            .requiresTool(true)
            .box(0, 8, 8, 16, 16, 16)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('create:fan_transparent')
            .tagItem('cwi:upper_eaves')
            .tagItem('cwi:eaves')
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

        event.create(`tfmg:${material}_frame_lower_eaves`, 'cardinal')
            .soundType('metal')
            .hardness(3)
            .resistance(3)
            .requiresTool(true)
            .box(0, 0, 8, 16, 8, 16)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_stone_tool')
            .tagBlock('create:fan_transparent')
            .tagItem('cwi:lower_eaves')
            .tagItem('cwi:eaves')
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

    upperEaves.forEach(([mod, material, texture, sound, hardness, resistance, miningType, toolLevel]) => {
        event.create(`${mod}:${material}_upper_eaves`, 'cardinal')
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
            .box(0, 8, 8, 16, 16, 16)
            .tagBlock(`minecraft:mineable/${miningType}`)
            .tagBlock(`minecraft:needs_${toolLevel}_tool`)
            .tagItem('cwi:upper_eaves')
            .tagItem('cwi:eaves')
            .mapColor('#FF5500')
            .suffocating(false)
            .redstoneConductor(false)
            .defaultCutout()
            .modelJson = {
                parent: 'kubejs:block/frame_upper_eaves',
                textures: { 
                    "0": texture,
                    "particle": texture
                }
            }
    })

    lowerEaves.forEach(([mod, material, texture, sound, hardness, resistance, miningType, toolLevel]) => {
        event.create(`${mod}:${material}_lower_eaves`, 'cardinal')
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
            .box(0, 0, 8, 16, 8, 16)
            .tagBlock(`minecraft:mineable/${miningType}`)
            .tagBlock(`minecraft:needs_${toolLevel}_tool`)
            .tagItem('cwi:upper_eaves')
            .tagItem('cwi:eaves')
            .mapColor('#FF5500')
            .suffocating(false)
            .redstoneConductor(false)
            .defaultCutout()
            .modelJson = {
                parent: 'kubejs:block/frame_lower_eaves',
                textures: { 
                    "0": texture,
                    "particle": texture
                }
            }
    })

    function createThinBlock(type, boxHeight, model, itemTag) {
        (type === 'panel' ? panels : boards).forEach(
            ([mod, material, texture, sound, hardness, resistance, miningType, toolLevel]) => {
                event.create(`${mod}:${material}_${type}`)
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