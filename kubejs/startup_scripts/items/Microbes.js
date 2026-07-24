// Dry Microbes

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

// Petri Dish Items

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

// Microbe Petri Dish And Agar Plate Items

StartupEvents.registry('item', event => {
    global.microbes.forEach(microbe => {
        const name = microbe.name
        const colors = microbe.colors

        event.create(name)
            .texture(`kubejs:item/microbes/${name}`)

        event.create(`inoculated_${name}_petri_dish`)
            .texture('kubejs:item/petri_dish/petri_dish')
            .tag('cwi:petri_dish')
            .tag('cwi:inoculated_petri_dish')
            .textureJson({
                layer0: 'kubejs:item/bio/plate',
                layer1: 'kubejs:item/bio/plate_glass'
            })
            .color(1, colors[0])

        event.create(`processing_${name}_petri_dish`)
            .texture('kubejs:item/petri_dish/petri_dish')
            .tag('cwi:petri_dish')
            .tag('cwi:inoculated_petri_dish')
            .textureJson({
                layer0: 'kubejs:item/bio/plate',
                layer1: 'kubejs:item/bio/plate_glass'
            })
            .color(1, colors[0])

        microbe.variants.forEach(variant => {
            const trait = variant.trait;

            event.create(`${trait}_${name}_agar_plate`)
                .texture('kubejs:item/agar_plate/agar_plate')
                .tag('cwi:petri_dish')
                .tag('cwi:inoculated_agar_plate')
                .textureJson({
                    layer0: 'kubejs:item/bio/plate',
                    layer1: 'kubejs:item/bio/plate_glass'
                })
                .color(1, colors[1])

            event.create(`sealed_${trait}_${name}_agar_plate`)
                .texture('kubejs:item/agar_plate/agar_plate')
                .tag('cwi:petri_dish')
                .tag('cwi:inoculated_agar_plate')
                .tag('cwi:sealed_agar_plate')
                .tag('cwi:before_sterilizing_agar_plate')
                .textureJson({
                    layer0: 'kubejs:item/bio/plate',
                    layer1: 'kubejs:item/bio/plate_lid'
                })
                .color(1, colors[1])

            event.create(`cultured_${trait}_${name}_agar_plate`)
                .texture('kubejs:item/agar_plate/agar_plate')
                .tag('cwi:petri_dish')
                .tag('cwi:inoculated_agar_plate')
                .tag('cwi:sealed_agar_plate')
                .tag('cwi:cultured_agar_plate')
                .textureJson({
                    layer0: 'kubejs:item/bio/plate',
                    layer1: 'kubejs:item/bio/plate_lid'
                })
                .color(1, colors[1])
        });
    });
});