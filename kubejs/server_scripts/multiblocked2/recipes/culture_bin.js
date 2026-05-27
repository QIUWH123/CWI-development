ServerEvents.recipes(event => {
  global.microbes.forEach(([name, color1, color2, color3, variants, times]) => {
    variants.forEach((variant, index) => {
      const sealed   = `kubejs:sealed_${variant}_${name}_agar_plate`
      const cultured = `kubejs:cultured_${variant}_${name}_agar_plate`
      const duration = times[index]

      event.recipes.cwi.incubating()
        .id(`cwi:incubating/${name}/${variant}`)
        .duration(duration)
        .inputItems(sealed)
        .outputItems(cultured)
    })
  })
})