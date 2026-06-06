ItemEvents.tooltip(event => {

  global.materialTypes.forEach(mat => {
    if (!mat.items || !mat.formula) return
    Object.values(mat.items).forEach(itemId => {
      if (itemId) {
        event.add(itemId, Text.of(mat.formula).yellow())
      }
    })
  })

  event.addAdvanced('#cwi:hot_items', (item, advanced, text) => {
    text.add(Text.of('Hot').red());
  })

  event.addAdvanced('#cwi:no_gravity_items', (item, advanced, text) => {
    text.add(Text.of('No Gravity').white());
  })

})