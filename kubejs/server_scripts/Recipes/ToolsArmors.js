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

    addTools('#cwi:cobbled_stones', 'minecraft:stone')

    addTools('kubejs:rusted_iron_sheet', 'kubejs:rusted_iron')

    addTools('create:iron_sheet', 'minecraft:iron')
    addArmor('create:iron_sheet', 'minecraft:iron')

    addTools('create:golden_sheet', 'minecraft:golden')
    addArmor('create:golden_sheet', 'minecraft:golden')

    addTools('kubejs:bronze_sheet', 'kubejs:bronze')
    addArmor('kubejs:bronze_sheet', 'kubejs:bronze')

    addTools('createaddition:zinc_sheet', 'create_sa:zinc')
    addArmor('createaddition:zinc_sheet', 'create_sa:zinc')

    addTools('create:brass_sheet', 'create_sa:brass')
    addArmor('create:brass_sheet', 'create_sa:brass')

})

ServerEvents.recipes(event => {

    event.shaped(
        'createdieselgenerators:wire_cutters',
        [
            ' A ',
            'CBA',
            ' C '
        ],
        {
            A: 'create:iron_sheet',
            B: 'create:andesite_alloy',
            C: 'minecraft:stick',
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
            A: '#cwi:cobbled_stones',
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
        'minecraft:gold_hammer',
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
            A: 'vintageimprovements:netherite_sheet',
            B: 'minecraft:netherite_block',
            C: 'minecraft:stick',
        }
    )

})