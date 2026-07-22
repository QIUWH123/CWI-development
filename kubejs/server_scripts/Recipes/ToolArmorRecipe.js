ServerEvents.recipes(event => {

    var toolPatterns = {
        sword:     ['A', 'A', 'B'],
        axe:       ['AA', 'AB', ' B'],
        pickaxe:   ['AAA', ' B ', ' B '],
        shovel:    ['A', 'B', 'B'],
        hoe:       ['AA', ' B', ' B']
    }

    var armorPatterns = {
        helmet:     ['AAA', 'A A'],
        chestplate: ['A A', 'AAA', 'AAA'],
        leggings:   ['AAA', 'A A', 'A A'],
        boots:      ['A A', 'A A']
    }

    function addTools(material, outputPrefix) {
        for (var tool in toolPatterns) {
            if (toolPatterns.hasOwnProperty(tool)) {
                event.shaped(Item.of(outputPrefix + '_' + tool), toolPatterns[tool], {
                    A: material,
                    B:'minecraft:stick'
                })
            }
        }
    }

    function addArmor(material, outputPrefix) {
        for (var piece in armorPatterns) {
            if (armorPatterns.hasOwnProperty(piece)) {
                event.shaped(Item.of(outputPrefix + '_' + piece), armorPatterns[piece], {
                    A: material
                })
            }
        }
    }

    addTools('minecraft:cobblestone', 'minecraft:stone')

    addTools('kubejs:rusted_iron_sheet', 'kubejs:rusted_iron')

    addTools('create:iron_sheet', 'minecraft:iron')
    addArmor('create:iron_sheet', 'minecraft:iron')

    addTools('create:golden_sheet', 'minecraft:golden')
    addArmor('create:golden_sheet', 'minecraft:golden')

    addTools('kubejs:bronze_sheet', 'kubejs:bronze')
    addArmor('kubejs:bronze_sheet', 'kubejs:bronze')

    addTools('create:brass_sheet', 'kubejs:brass')
    addArmor('create:brass_sheet', 'create_sa:brass')

    addTools('createaddition:zinc_sheet', 'kubejs:zinc')

    addTools('tfmg:heavy_plate', 'kubejs:steel')

})

ServerEvents.recipes(event => {
    
    event.shaped(
        'farmersdelight:iron_knife',
        [
            'A',
            'B'
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        'farmersdelight:golden_knife',
        [
            'A',
            'B'
        ],
        {
            A: 'create:golden_sheet',
            B: 'minecraft:stick'
        }
    )

    event.shaped(
        'kubejs:small_hammer',
        [
            'BAB',
            ' C ',
            ' C '
        ],
        {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:iron_nugget',
            C: 'minecraft:stick'
        }
    )

    event.shaped(
        'minecraft:shears',
        [
            ' A ',
            'CBA',
            ' C '
        ],
        {
            A: 'create:iron_sheet',
            B: '#cwi:rubbers',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:bucket',
        [
            'A A',
            ' A '
        ],
        {
            A: 'create:iron_sheet',
        }
    )

    event.shaped(
        'minecraft:stone_hammer',
        [
            'AAA',
            ' B ',
            ' B '
        ],
        {
            A: 'minecraft:cobblestone',
            B: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:rusted_iron_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'kubejs:rusted_iron_sheet',
            B: 'kubejs:rusted_iron_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:iron_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'create:iron_sheet',
            B: 'minecraft:iron_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:brass_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'create:brass_sheet',
            B: 'create:brass_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:zinc_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'createaddition:zinc_sheet',
            B: 'create:zinc_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:steel_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'tfmg:heavy_plate',
            B: 'tfmg:steel_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:bronze_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'kubejs:bronze_sheet',
            B: 'kubejs:bronze_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:golden_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'create:golden_sheet',
            B: 'minecraft:gold_block',
            C: 'minecraft:stick',
        }
    )

    event.shaped(
        'minecraft:netherite_hammer',
        [
            'ABA',
            ' C ',
            ' C '
        ],
        {
            A: 'kubejs:netherite_sheet',
            B: 'minecraft:netherite_block',
            C: 'minecraft:stick',
        }
    )

})