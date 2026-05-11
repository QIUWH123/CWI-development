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

function addTools(material, outputPrefix, stick) {
  if (stick === undefined) stick = 'minecraft:stick'
  for (var tool in toolPatterns) {
    if (toolPatterns.hasOwnProperty(tool)) {
      event.shaped(Item.of(outputPrefix + '_' + tool), toolPatterns[tool], {
        A: material,
        B: stick
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

addTools('#modpack:cobbled_stones', 'minecraft:stone')

addTools('kubejs:rusted_iron_ingot', 'kubejs:rusted_iron')

addTools('create:iron_sheet', 'minecraft:iron')
addArmor('create:iron_sheet', 'minecraft:iron')

addTools('create:golden_sheet', 'minecraft:golden')
addArmor('create:golden_sheet', 'minecraft:golden')

addTools('kubejs:bronze_sheet', 'kubejs:bronze')
addArmor('kubejs:bronze_sheet', 'kubejs:bronze')

addTools('createaddition:zinc_sheet', 'create_sa:zinc')
addArmor('createaddition:zinc_sheet', 'create_sa:zinc')

})