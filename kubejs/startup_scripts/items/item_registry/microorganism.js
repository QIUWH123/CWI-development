StartupEvents.registry('item', event => {

  event.create('dry_fermento_mycetes')
    .texture('kubejs:item/microorganisms/dry_fermento_mycetes')

  event.create('powdered_fermento_mycetes')
    .texture('kubejs:item/microorganisms/powdered_fermento_mycetes')

  event.create('dry_carbofusor_spirillum')
    .texture('kubejs:item/microorganisms/dry_carbofusor_spirillum')

  event.create('dry_putrelys_sporogenes')
    .texture('kubejs:item/microorganisms/dry_putrelys_sporogenes')

  //event.create('radiotroph_nucleavorax').texture('kubejs:item/microorganisms/radiotroph_nucleavorax')

  event.create('petri_dish')
    .texture('kubejs:item/petri_dish')

})

StartupEvents.registry('item', event => {

  global.microbes.forEach(([name, variants]) => {

    event.create(name).texture(`kubejs:item/microorganisms/${name}`)

    event.create(`${name}_dish`)
      .texture('kubejs:item/petri_dish')
      .tag('petri_dish')

    event.create(`processing_${name}_petri_dish`)
      .texture('kubejs:item/petri_dish')
      .tag('petri_dish')
      
    variants.forEach(variant => {
      
      event.create(`${variant}_${name}_petri_dish`)
        .texture('kubejs:item/petri_dish')
        .tag('petri_dish')

      event.create(`sealed_${variant}_${name}_petri_dish`)
        .texture('kubejs:item/petri_dish')
        .tag('petri_dish')
        .tag('sealed_petri_dish')

      event.create(`sterilized_${variant}_${name}_petri_dish`)
        .texture('kubejs:item/petri_dish')
        .tag('petri_dish')
        .tag('sealed_petri_dish')
        .tag('sterilized_petri_dish')

      event.create(`cultured_${variant}_${name}_petri_dish`)
        .texture('kubejs:item/petri_dish')
        .tag('petri_dish')
        .tag('sealed_petri_dish')
        .tag('sterilized_petri_dish');
    })
  })

})