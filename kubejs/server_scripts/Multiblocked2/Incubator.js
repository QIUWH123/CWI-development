// Incubating Microbe Agar Plates

ServerEvents.recipes(event => {
    global.microbes.forEach(microbe => {
        const name = microbe.name
        microbe.variants.forEach(variant => {
            const trait = variant.trait
            event.recipes.cwi.incubating()
                .id(`cwi:incubating/${name}/${trait}`)
                .duration(variant.time)
                .inputItems(`kubejs:sealed_${trait}_${name}_agar_plate`)
                .outputItems(`kubejs:cultured_${trait}_${name}_agar_plate`)
        })
    })
})