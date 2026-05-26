ItemEvents.tooltip(event => {

  global.materials.forEach(mat => {
    mat.types.forEach(itemId => {
      event.add(itemId, Text.of(mat.formula).yellow())
    })
  })

  event.addAdvanced('#cwi:hot_items', (item, advanced, text) => {
    text.add(Text.of('Hot').red());
  })

  event.addAdvanced('#cwi:no_gravity_items', (item, advanced, text) => {
    text.add(Text.of('No Gravity').white());
  })

})