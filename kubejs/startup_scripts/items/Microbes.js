// Microbes Register

global.microbes = [
  {
    name: 'fermento_mycetes',
    colors: [0xbfb16d, 0xfce992],
    variants: [
      {
        trait: 'frugal',
        time: 7200,
        count: 1,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 4 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'balanced',
        time: 4800,
        count: 2,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'efficient',
        time: 6000,
        count: 4,
        steps: [
          { type: 'filling', fluid: 'kubejs:syrup', amount: 500 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:phosphate_powder' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 250 }
        ]
      },
      {
        trait: 'rapid',
        time: 3000,
        count: 3,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      }
    ]
  },
  {
    name: 'acidolys_bacillus',
    colors: [0xacbf75, 0xdcf595],
    variants: [
      {
        trait: 'sulfur_only',
        time: 7200,
        count: 2,
        steps: [
          { type: 'deploying', item: 'tfmg:sulfur_dust', count: 3 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'tfmg:sulfuric_acid', amount: 50 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 400 }
        ]
      },
      {
        trait: 'iron_balanced',
        time: 4800,
        count: 3,
        steps: [
          { type: 'deploying', item: 'kubejs:iron_powder', count: 1 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'tfmg:sulfuric_acid', amount: 100 },
          { type: 'filling', fluid: 'kubejs:oxygen', amount: 200 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'mixed_feed',
        time: 6000,
        count: 5,
        steps: [
          { type: 'deploying', item: 'kubejs:iron_powder', count: 1 },
          { type: 'deploying', item: 'tfmg:sulfur_dust', count: 1 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'tfmg:sulfuric_acid', amount: 100 },
          { type: 'filling', fluid: 'kubejs:oxygen', amount: 300 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'boosted_aerobic',
        time: 3600,
        count: 4,
        steps: [
          { type: 'deploying', item: 'kubejs:iron_powder', count: 1 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:magnesium_powder' },
          { type: 'filling', fluid: 'tfmg:sulfuric_acid', amount: 100 },
          { type: 'filling', fluid: 'kubejs:oxygen', amount: 400 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      }
    ]
  },
  {
    name: 'vulcan_thermus',
    colors: [0x9c5454, 0xd97171],
    variants: [
      {
        trait: 'basal',
        time: 7200,
        count: 2,
        steps: [
          { type: 'deploying', item: 'kubejs:protein_powder' },
          { type: 'deploying', item: 'ratatouille:salt' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'enriched',
        time: 4800,
        count: 3,
        steps: [
          { type: 'deploying', item: 'kubejs:protein_powder' },
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'ratatouille:salt' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'mineral_boost',
        time: 4800,
        count: 4,
        steps: [
          { type: 'deploying', item: 'kubejs:protein_powder', count: 1 },
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'kubejs:magnesium_powder' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'premium',
        time: 3600,
        count: 5,
        steps: [
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'deploying', item: 'kubejs:protein_powder', count: 1 },
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'kubejs:magnesium_powder' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      }
    ]
  },
  {
    name: 'carbofusor_spirillum',
    colors: [0x85571c, 0xd69036],
    variants: [
      {
        trait: 'syngas_basic',
        time: 9600,
        count: 2,
        steps: [
          { type: 'filling', fluid: 'kubejs:syngas', amount: 400 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 400 }
        ]
      },
      {
        trait: 'syngas_mineral',
        time: 7200,
        count: 3,
        steps: [
          { type: 'filling', fluid: 'kubejs:syngas', amount: 300 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:mineral_mix' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'hydrogen_enriched',
        time: 7200,
        count: 4,
        steps: [
          { type: 'filling', fluid: 'tfmg:hydrogen', amount: 300 },
          { type: 'filling', fluid: 'tfmg:carbon_dioxide', amount: 150 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:mineral_mix' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'boosted_syngas',
        time: 4800,
        count: 5,
        steps: [
          { type: 'filling', fluid: 'kubejs:syngas', amount: 400 },
          { type: 'filling', fluid: 'tfmg:hydrogen', amount: 200 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:mineral_mix', count: 1 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      }
    ]
  },
  {
    name: 'putrelys_sporogenes',
    colors: [0x8a535b, 0xe08794],
    variants: [
      {
        trait: 'compost_basic',
        time: 4800,
        count: 2,
        steps: [
          { type: 'deploying', item: 'ratatouille:compost_mass', count: 4 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'compost_ammonia',
        time: 3600,
        count: 3,
        steps: [
          { type: 'deploying', item: 'ratatouille:compost_mass', count: 4 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'cellulose_feed',
        time: 4800,
        count: 4,
        steps: [
          { type: 'deploying', item: 'kubejs:plant_fiber', count: 2 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      },
      {
        trait: 'rapid_decomp',
        time: 2400,
        count: 5,
        steps: [
          { type: 'deploying', item: 'kubejs:plant_fiber', count: 2 },
          { type: 'filling', fluid: 'kubejs:ammonium_solution', amount: 100 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'filling', fluid: 'kubejs:oxygen', amount: 200 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 500 }
        ]
      }
    ]
  },
  {
    name: 'nitrofix_rhizobium',
    colors: [0x57b3a5, 0x66d4c3],
    variants: [
      {
        trait: 'free_living',
        time: 9600,
        count: 2,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'kubejs:iron_powder' },
          { type: 'filling', fluid: 'kubejs:nitrogen', amount: 400 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 400 }
        ]
      },
      {
        trait: 'phosphate_boost',
        time: 7200,
        count: 3,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 2 },
          { type: 'deploying', item: 'kubejs:phosphate_powder' },
          { type: 'deploying', item: 'kubejs:iron_powder' },
          { type: 'filling', fluid: 'kubejs:nitrogen', amount: 400 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'molybdenum_enhanced',
        time: 6000,
        count: 5,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 1 },
          { type: 'deploying', item: 'kubejs:phosphate_powder' },
          { type: 'deploying', item: 'kubejs:iron_powder' },
          { type: 'deploying', item: 'kubejs:molybdenum_powder' },
          { type: 'filling', fluid: 'kubejs:nitrogen', amount: 400 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      },
      {
        trait: 'symbiotic',
        time: 4800,
        count: 6,
        steps: [
          { type: 'deploying', item: 'minecraft:sugar', count: 1 },
          { type: 'deploying', item: 'kubejs:phosphate_powder' },
          { type: 'deploying', item: 'kubejs:iron_powder' },
          { type: 'deploying', item: 'kubejs:molybdenum_powder' },
          { type: 'filling', fluid: 'kubejs:nitrogen', amount: 300 }
        ]
      }
    ]
  },
  {
    name: 'crystallum_coccus',
    colors: [0xec73f0, 0xfca6ff],
    variants: [
      {
        trait: 'calcium_basic',
        time: 6000,
        count: 2,
        steps: [
          { type: 'filling', fluid: 'kubejs:urea_solution', amount: 300 },
          { type: 'filling', fluid: 'kubejs:calcium_solution', amount: 300 },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 400 }
        ]
      },
      {
        trait: 'ureolytic',
        time: 4800,
        count: 3,
        steps: [
          { type: 'filling', fluid: 'kubejs:urea_solution', amount: 400 },
          { type: 'filling', fluid: 'kubejs:calcium_solution', amount: 300 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 200 }
        ]
      },
      {
        trait: 'high_calcium',
        time: 4800,
        count: 5,
        steps: [
          { type: 'filling', fluid: 'kubejs:urea_solution', amount: 500 },
          { type: 'filling', fluid: 'kubejs:calcium_solution', amount: 500 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'deploying', item: 'kubejs:magnesium_powder' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 200 }
        ]
      },
      {
        trait: 'rapid_crystal',
        time: 3000,
        count: 4,
        steps: [
          { type: 'filling', fluid: 'kubejs:urea_solution', amount: 400 },
          { type: 'filling', fluid: 'kubejs:calcium_solution', amount: 400 },
          { type: 'deploying', item: 'kubejs:yeast_paste' },
          { type: 'deploying', item: 'kubejs:magnesium_powder' },
          { type: 'filling', fluid: 'kubejs:distilled_water', amount: 300 }
        ]
      }
    ]
  }
]

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
        .color(1, 0xE1E8C1)

    event.create('sterile_petri_dish')
        .tag('cwi:petri_dish')
        .textureJson({
            layer0: 'kubejs:item/bio/plate',
            layer1: 'kubejs:item/bio/plate_glass'
        })
        .color(1, 0xC4F9FF)

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
                    layer1: 'kubejs:item/bio/plate_lid',
                    layer2: 'kubejs:item/bio/cultured_overlay'
                })
                .color(1, colors[1])
        })
    })
})