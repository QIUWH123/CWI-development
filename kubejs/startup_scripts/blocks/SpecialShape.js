StartupEvents.registry('block', event => {

// Block Registration Helpers

    const registerBlock = (blockId, options) => {
        const blockType    = options.blockType || null
        const soundType    = options.soundType || 'metal'
        const hardness     = options.hardness || 3
        const resistance   = options.resistance || 3
        const collisionBox = options.collisionBox || null
        const blockTags    = options.blockTags || []
        const itemTags     = options.itemTags || []
        const modelJson    = options.modelJson
        const enableCutout = options.enableCutout !== false

        const builder = blockType
            ? event.create(blockId, blockType)
            : event.create(blockId)

        builder
            .soundType(soundType)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
            .suffocating(false)
            .redstoneConductor(false)
            .mapColor('#FF5500')

        if (collisionBox) {
            builder.box.apply(builder, collisionBox)
        }

        blockTags.forEach(tag => builder.tagBlock(tag))
        itemTags.forEach(tag => builder.tagItem(tag))
        if (enableCutout) builder.defaultCutout()
        builder.modelJson = modelJson
    }

// Frame Material Data

    const frameMaterials = [
        'steel', 'cast_iron', 'lead', 'brass', 'nickel',
        'copper', 'constantan', 'zinc', 'aluminum'
    ]

// Pipe Pile Definitions

    const pipePileDefinitions = [
        ['steel',     'tfmg:block/steel_pipes',      6, 7, 'metal', 'pickaxe', 'stone'],
        ['cast_iron', 'tfmg:block/cast_iron_pipes',  4, 6, 'metal', 'pickaxe', 'stone'],
        ['brass',     'tfmg:block/brass_pipes',      3, 6, 'metal', 'pickaxe', 'stone'],
        ['copper',    'kubejs:block/model/pipes',    3, 6, 'metal', 'pickaxe', 'stone'],
        ['aluminum',  'tfmg:block/aluminum_pipes',   3, 6, 'metal', 'pickaxe', 'stone'],
        ['plastic',   'tfmg:block/plastic_pipes',    2, 2, 'metal', 'pickaxe', 'stone']
    ]

// Panel Definitions

    const panelDefinitions = [
        ['tfmg', 'slag_bricks', 'tfmg:block/slag_bricks', 'calcite', 3, 6, 'pickaxe', 'stone']
    ]

// Special Upper Eave Definitions

    const specialUpperEaveDefinitions = [
        ['tfmg', 'slag_bricks',    'tfmg:block/slag_bricks',    'calcite', 3,   6,    'pickaxe', 'stone'],
        ['tfmg', 'concrete',       'tfmg:block/concrete',       'stone',   3.5, 3.5,  'pickaxe', 'stone'],
        ['tfmg', 'rebar_concrete', 'tfmg:block/rebar_concrete', 'stone',   12,  1200, 'pickaxe', 'stone']
    ]

// Frame Blocks

    frameMaterials.forEach(material => {
        const blockTags = [
            'minecraft:mineable/pickaxe',
            'minecraft:needs_stone_tool',
            'create:fan_transparent'
        ]
        const panelTexture = `kubejs:block/model/building_blocks/frame_panels/${material}`
        const eaveTexture  = `kubejs:block/model/building_blocks/frame_eaves/${material}`

        // Frame Panel
        registerBlock(`tfmg:${material}_frame_panel`, {
            collisionBox: [0, 0, 0, 16, 3, 16],
            blockTags: blockTags,
            itemTags: ['cwi:frame_panel'],
            modelJson: {
                parent: 'kubejs:block/frame_panel',
                textures: { '0': panelTexture, particle: panelTexture }
            }
        })

        // Frame Upper Eaves
        registerBlock(`tfmg:${material}_frame_upper_eaves`, {
            blockType: 'cardinal',
            collisionBox: [0, 8, 8, 16, 16, 16],
            blockTags: blockTags,
            itemTags: ['cwi:upper_eaves', 'cwi:eaves'],
            modelJson: {
                parent: 'kubejs:block/frame_upper_eaves',
                textures: { '0': eaveTexture, particle: eaveTexture }
            }
        })

        // Frame Lower Eaves
        registerBlock(`tfmg:${material}_frame_lower_eaves`, {
            blockType: 'cardinal',
            collisionBox: [0, 0, 8, 16, 8, 16],
            blockTags: blockTags,
            itemTags: ['cwi:lower_eaves', 'cwi:eaves'],
            modelJson: {
                parent: 'kubejs:block/frame_lower_eaves',
                textures: { '0': eaveTexture, particle: eaveTexture }
            }
        })
    })

// Upper Eave Registration Helper

    const registerUpperEave = (blockId, texturePath, hardness, resistance, soundType) => {
        registerBlock(blockId, {
            blockType: 'cardinal',
            soundType: soundType || 'stone',
            hardness: hardness,
            resistance: resistance,
            collisionBox: [0, 8, 8, 16, 16, 16],
            blockTags: ['minecraft:mineable/pickaxe', 'minecraft:needs_stone_tool'],
            itemTags: ['cwi:upper_eaves', 'cwi:eaves'],
            modelJson: {
                parent: 'kubejs:block/frame_upper_eaves',
                textures: { '0': texturePath, particle: texturePath }
            }
        })
    }

// Colored Concrete Upper Eaves

    global.colors.forEach(color => {
        const texturePath = `tfmg:block/${color}_concrete`
        registerUpperEave(`tfmg:${color}_concrete_upper_eaves`,       texturePath, 3.5, 3.5)
        registerUpperEave(`tfmg:${color}_rebar_concrete_upper_eaves`, texturePath, 12,  1200)
    })

// Special Upper Eaves

    specialUpperEaveDefinitions.forEach(([namespace, material, texturePath, soundType, hardness, resistance]) => {
        registerUpperEave(`${namespace}:${material}_upper_eaves`, texturePath, hardness, resistance, soundType)
    })

// Pipe Piles

    pipePileDefinitions.forEach(([pipeId, texturePath, hardness, resistance, soundType, miningType, toolLevel]) => {
        const blockTags = [`minecraft:mineable/${miningType}`, `minecraft:needs_${toolLevel}_tool`]

        ;['small_pile', 'pile', 'large_pile'].forEach(pileSize => {
            registerBlock(`${pileSize}_of_${pipeId}_pipes`, {
                blockType: 'cardinal',
                soundType: soundType,
                hardness: hardness,
                resistance: resistance,
                blockTags: blockTags,
                modelJson: {
                    parent: `kubejs:block/pipe_piles/${pileSize}_of_pipes`,
                    textures: { '0': texturePath }
                }
            })
        })
    })

// Thin Blocks Panels And Boards

    ;['panel', 'board'].forEach(thinBlockType => {
        const boxHeight = thinBlockType === 'panel' ? 3 : 1
        const definitionList = thinBlockType === 'panel' ? panelDefinitions : []

        definitionList.forEach(([namespace, material, texturePath, soundType, hardness, resistance, miningType, toolLevel]) => {
            registerBlock(`${namespace}:${material}_${thinBlockType}`, {
                soundType: soundType,
                hardness: hardness,
                resistance: resistance,
                collisionBox: [0, 0, 0, 16, boxHeight, 16],
                blockTags: [`minecraft:mineable/${miningType}`, `minecraft:needs_${toolLevel}_tool`],
                itemTags: [`cwi:${thinBlockType}`],
                modelJson: {
                    parent: `kubejs:block/${thinBlockType}`,
                    textures: { '0': texturePath, particle: texturePath }
                }
            })
        })
    })

})