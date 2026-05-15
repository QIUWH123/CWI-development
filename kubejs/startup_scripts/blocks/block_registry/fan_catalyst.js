StartupEvents.registry('block', event => {

  function registerCatalysts(material, hardness, resistance) {
    const types = ['frame', 'smoking', 'haunting', 'splashing', 'blasting', 'corroding'];
    const texture = `kubejs:block/fan_catalyst/fan_catalyst_${material}`;

    types.forEach(type => {
      const id = type === 'frame'
        ? `${material}_fan_catalyst_frame`
        : `${material}_fan_${type}_catalyst`
      const parentModel = type === 'frame'
        ? 'kubejs:block/fan_catalyst_frame'
        : `kubejs:block/fan_${type}_catalyst`
      const block = event.create(id)
        .soundType('metal')
        .hardness(hardness)
        .resistance(resistance)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_stone_tool')
        .mapColor('#FF5500')
        .suffocating(false)
        .redstoneConductor(false)
        .defaultCutout()

      block.modelJson = {
        parent: parentModel,
        textures: { "0": texture }
      };
    });
  }

  registerCatalysts('brass', 3, 3)
  registerCatalysts('iron', 3.5, 3.5)
  registerCatalysts('industrial_iron', 3.5, 3.5)
  registerCatalysts('cast_iron', 3.5, 3.5)
  registerCatalysts('steel', 4, 4)
  registerCatalysts('aluminum', 3, 3)

});