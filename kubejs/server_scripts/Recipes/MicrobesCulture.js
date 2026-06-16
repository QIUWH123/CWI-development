ServerEvents.recipes(event => {

    event.recipes.create.deploying('kubejs:petri_dish',['kubejs:empty_petri_dish', 'minecraft:glass_pane'])

    global.microbes.forEach(([name, color1, color2, color3, variants, times]) => {
        const inputD  = `kubejs:${name}`
        const outputD = `kubejs:inoculated_${name}_petri_dish`
        event.recipes.create.deploying(outputD,['kubejs:sterile_petri_dish',inputD])
        variants.forEach(variant => {
            const input  = `kubejs:${variant}_${name}_agar_plate`
            const output = `kubejs:sealed_${variant}_${name}_agar_plate`
            event.custom({
                type: "vintageimprovements:curving",
                itemAsHead: "kubejs:capping_head",
                ingredients: [{ item: input }],
                results: [{ item: output }]
            })
        })
    })

    const fermento_transition = 'kubejs:processing_fermento_mycetes_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:frugal_fermento_mycetes_agar_plate',
        'kubejs:inoculated_fermento_mycetes_petri_dish',
        [
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:distilled_water', 500)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:prolific_fermento_mycetes_agar_plate',
        'kubejs:inoculated_fermento_mycetes_petri_dish',
        [
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:syrup', 500)]),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:ammonia', 100)]),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'kubejs:bone_powder']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:distilled_water', 250)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:rapid_fermento_mycetes_agar_plate',
        'kubejs:inoculated_fermento_mycetes_petri_dish',
        [
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('createdieselgenerators:ethanol', 200)]),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:oxygen', 100)]),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'createaddition:biomass']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:distilled_water', 250)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    const acidolys_transition = 'kubejs:processing_acidolys_bacillus_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:heap_acidolys_bacillus_agar_plate',
        'kubejs:inoculated_acidolys_bacillus_petri_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:distilled_water', 500)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:efficient_acidolys_bacillus_agar_plate',
        'kubejs:inoculated_acidolys_bacillus_petri_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_powder']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:oxygen', 200)]),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('tfmg:sulfuric_acid', 500)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:specialized_acidolys_bacillus_agar_plate',
        'kubejs:inoculated_acidolys_bacillus_petri_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:copper_powder']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:silver_powder']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:ferric_chloride', 250)]),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:distilled_water', 250)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    const vulcan_transition = 'kubejs:processing_vulcan_thermus_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:crude_vulcan_thermus_agar_plate',
        'kubejs:inoculated_vulcan_thermus_petri_dish',
        [
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:oxygen', 300)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, Fluid.of('minecraft:lava', 100)])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:thermogenic_vulcan_thermus_agar_plate',
        'kubejs:inoculated_vulcan_thermus_petri_dish',
        [
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:hydrogen_sulfide', 200)]),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:oxygen', 300)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'kubejs:sulfur_copper_catalyst']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'minecraft:blaze_powder'])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:thermoelectric_vulcan_thermus_agar_plate',
        'kubejs:inoculated_vulcan_thermus_petri_dish',
        [
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, Fluid.of('minecraft:lava', 100)]),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:distilled_water', 100)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:thermophile_broth', 500)])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    const carbofusor_transition = 'kubejs:processing_carbofusor_spirillum_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:coal_saver_carbofusor_spirillum_agar_plate',
        'kubejs:inoculated_carbofusor_spirillum_petri_dish',
        [
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('kubejs:distilled_water', 500)])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:pressurized_carbofusor_spirillum_agar_plate',
        'kubejs:inoculated_carbofusor_spirillum_petri_dish',
        [
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:bituminous_coal']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:bituminous_coal']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:nickel_catalyst']),
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('tfmg:hydrogen', 300)])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:syngas_rich_carbofusor_spirillum_agar_plate',
        'kubejs:inoculated_carbofusor_spirillum_petri_dish',
        [
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('kubejs:syngas', 600)]),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:iron_catalyst']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:copper_powder'])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    const putrelys_transition = 'kubejs:processing_putrelys_sporogenes_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:saprophytic_putrelys_sporogenes_agar_plate',
        'kubejs:inoculated_putrelys_sporogenes_petri_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:distilled_water', 500)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:proteolytic_putrelys_sporogenes_agar_plate',
        'kubejs:inoculated_putrelys_sporogenes_petri_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'minecraft:rotten_flesh']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'minecraft:rotten_flesh']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:bone_powder']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:ammonia', 200)]),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:distilled_water', 250)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:cellulolytic_putrelys_sporogenes_agar_plate',
        'kubejs:inoculated_putrelys_sporogenes_petri_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:cellulase_enzyme']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:lignin_powder']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:lignin_powder']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:oxygen', 200)]),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:distilled_water', 300)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    const nitrofix_transition = 'kubejs:processing_nitrofix_rhizobium_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:sugar_fed_nitrofix_rhizobium_agar_plate',
        'kubejs:inoculated_nitrofix_rhizobium_petri_dish',
        [
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:bone_powder']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:nitrogen', 500)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:distilled_water', 300)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:phototrophic_nitrofix_rhizobium_agar_plate',
        'kubejs:inoculated_nitrofix_rhizobium_petri_dish',
        [
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:molybdenum_powder']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:molybdenum_powder']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:amethyst_shard']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:ammonia', 300)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:distilled_water', 400)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:nitrifying_nitrofix_rhizobium_agar_plate',
        'kubejs:inoculated_nitrofix_rhizobium_petri_dish',
        [
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:ammonia', 400)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:oxygen', 600)]),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:platinum_catalyst']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:distilled_water', 300)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    const crystallum_transition = 'kubejs:processing_crystallum_coccus_petri_dish';

    event.recipes.create.sequenced_assembly(
        'kubejs:cheap_crystal_crystallum_coccus_agar_plate',
        'kubejs:inoculated_crystallum_coccus_petri_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:quartz']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:quartz']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:bone_powder']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:bone_powder']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:distilled_water', 500)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:fast_nucleating_crystallum_coccus_agar_plate',
        'kubejs:inoculated_crystallum_coccus_petri_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:calcium_chloride_solution', 400)]),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:ammonia', 200)]),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:distilled_water', 300)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

    event.recipes.create.sequenced_assembly(
        'kubejs:precision_crystallum_coccus_agar_plate',
        'kubejs:inoculated_crystallum_coccus_petri_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:silica_gel']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:silica_gel']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:gold_nanoparticle']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:amethyst_shard']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:distilled_water', 400)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

})