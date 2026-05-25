ItemEvents.tooltip(event => {
  global.materials.forEach(mat => {
    mat.types.forEach(itemId => {
      event.add(itemId, Text.of(mat.formula).yellow())
    })
  })
})