StartupEvents.registry('item', event => {

  event.create('dry_fermento_mycetes')
    .texture('kubejs:item/microbes/dry_fermento_mycetes')

  event.create('powdered_fermento_mycetes')
    .texture('kubejs:item/microbes/powdered_fermento_mycetes')

  event.create('dry_carbofusor_spirillum')
    .texture('kubejs:item/microbes/dry_carbofusor_spirillum')

  event.create('dry_putrelys_sporogenes')
    .texture('kubejs:item/microbes/dry_putrelys_sporogenes')

  //event.create('radiotroph_nucleavorax').texture('kubejs:item/microbes/radiotroph_nucleavorax')

  event.create('empty_petri_dish')
    .texture('kubejs:item/bio/plate')
    .tag('cwi:petri_dish')

  event.create('petri_dish')
    .tag('cwi:petri_dish')
    .textureJson({
      layer0: 'kubejs:item/bio/plate',
      layer1: 'kubejs:item/bio/plate_glass_dirty'
    })
    .color(1, 0x6e7539)

  event.create('sterile_petri_dish')
    .tag('cwi:petri_dish')
    .textureJson({
      layer0: 'kubejs:item/bio/plate',
      layer1: 'kubejs:item/bio/plate_glass'
    })
    .color(1, 0xc4f9ff)

})

StartupEvents.registry('item', event => {

  global.microbes.forEach(([name, color1, color2, color3, variants, times]) => {

    event.create(name).texture(`kubejs:item/microbes/${name}`)

    event.create(`inoculated_${name}_petri_dish`)
      .texture('kubejs:item/petri_dish/petri_dish')
      .tag('cwi:petri_dish')
      .tag('cwi:inoculated_petri_dish')
      .textureJson({
        layer0: 'kubejs:item/bio/plate',
        layer1: 'kubejs:item/bio/plate_glass'
      })
      .color(1, color1)

    event.create(`processing_${name}_petri_dish`)
      .texture('kubejs:item/petri_dish/petri_dish')
      .tag('cwi:petri_dish')
      .tag('cwi:inoculated_petri_dish')
      .textureJson({
        layer0: 'kubejs:item/bio/plate',
        layer1: 'kubejs:item/bio/plate_glass'
      })
      .color(1, color1)
      
    variants.forEach(variant => {
      
      event.create(`${variant}_${name}_agar_plate`)
        .texture('kubejs:item/agar_plate/agar_plate')
        .tag('cwi:petri_dish')
        .tag('cwi:inoculated_agar_plate')
        .textureJson({
          layer0: 'kubejs:item/bio/plate',
          layer1: 'kubejs:item/bio/plate_glass'
        })
        .color(1, color2)

      event.create(`sealed_${variant}_${name}_agar_plate`)
        .texture('kubejs:item/agar_plate/agar_plate')
        .tag('cwi:petri_dish')
        .tag('cwi:inoculated_agar_plate')
        .tag('cwi:sealed_agar_plate')
        .tag('cwi:before_sterilizing_agar_plate')
        .textureJson({
          layer0: 'kubejs:item/bio/plate',
          layer1: 'kubejs:item/bio/plate_lid'
        })
        .color(1, color2)

      event.create(`cultured_${variant}_${name}_agar_plate`)
        .texture('kubejs:item/agar_plate/agar_plate')
        .tag('cwi:petri_dish')
        .tag('cwi:inoculated_agar_plate')
        .tag('cwi:sealed_agar_plate')
        .tag('cwi:cultured_agar_plate')
        .textureJson({
          layer0: 'kubejs:item/bio/plate',
          layer1: 'kubejs:item/bio/plate_lid'
        })
        .color(1, color3)

    })
  })

})