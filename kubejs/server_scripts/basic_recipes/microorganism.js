ServerEvents.recipes(event => {

  global.microbes.forEach(([name, variants]) => {
    variants.forEach(variant => {
      const input  = `kubejs:${variant}_${name}_petri_dish`
      const output = `kubejs:sealed_${variant}_${name}_petri_dish`
      event.custom({
        type: "vintageimprovements:curving",
        itemAsHead: "kubejs:capping_head",
        ingredients: [{ item: input }],
        results: [{ item: output }]
      })
    })
  })

    // ==================== Fermento Mycetes ====================
    const fermento_transition = 'kubejs:processing_fermento_mycetes_petri_dish';

    // Economy type: sugar + water, low yield but very cheap
    event.recipes.create.sequenced_assembly(
        'kubejs:frugal_fermento_mycetes_petri_dish',
        'kubejs:fermento_mycetes_dish',
        [
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'minecraft:sugar']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('minecraft:water', 500)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    // High yield type: syrup + ammonia, higher output but produces ammonia byproduct
    event.recipes.create.sequenced_assembly(
        'kubejs:prolific_fermento_mycetes_petri_dish',
        'kubejs:fermento_mycetes_dish',
        [
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:syrup', 500)]),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:ammonia', 100)]),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'kubejs:bone_dust']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('minecraft:water', 250)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    // Rapid type: ethanol + oxygen + biomass, fast but consumes ethanol
    event.recipes.create.sequenced_assembly(
        'kubejs:rapid_fermento_mycetes_petri_dish',
        'kubejs:fermento_mycetes_dish',
        [
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('createdieselgenerators:ethanol', 200)]),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('kubejs:oxygen', 100)]),
            event.recipes.create.deploying(fermento_transition, [fermento_transition, 'createaddition:biomass']),
            event.recipes.create.filling(fermento_transition, [fermento_transition, Fluid.of('minecraft:water', 250)])
        ]
    ).transitionalItem(fermento_transition).loops(1);

    // ==================== Acidolys Bacillus ====================
    const acidolys_transition = 'kubejs:processing_acidolys_bacillus_petri_dish';

    // Economy type: iron + sulfur + water, uses iron oxidation for acid
    event.recipes.create.sequenced_assembly(
        'kubejs:heap_acidolys_bacillus_petri_dish',
        'kubejs:acidolys_bacillus_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('minecraft:water', 500)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    // Efficient type: pyrite + oxygen + sulfuric acid, fast oxidation
    event.recipes.create.sequenced_assembly(
        'kubejs:efficient_acidolys_bacillus_petri_dish',
        'kubejs:acidolys_bacillus_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:pyrite_dust']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:oxygen', 200)]),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('tfmg:sulfuric_acid', 500)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    // Specialized type: chalcopyrite + silver + ferric chloride, leaches copper and silver
    event.recipes.create.sequenced_assembly(
        'kubejs:specialized_acidolys_bacillus_petri_dish',
        'kubejs:acidolys_bacillus_dish',
        [
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:iron_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:copper_dust']),
            event.recipes.create.deploying(acidolys_transition, [acidolys_transition, 'kubejs:silver_dust']),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('kubejs:ferric_chloride', 250)]),
            event.recipes.create.filling(acidolys_transition, [acidolys_transition, Fluid.of('minecraft:water', 250)])
        ]
    ).transitionalItem(acidolys_transition).loops(1);

    // ==================== Vulcan Thermus ====================
    const vulcan_transition = 'kubejs:processing_vulcan_thermus_petri_dish';

    // Simple type: sulfur + oxygen + heat, produces heat
    event.recipes.create.sequenced_assembly(
        'kubejs:crude_vulcan_thermus_petri_dish',
        'kubejs:vulcan_thermus_dish',
        [
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'tfmg:sulfur_dust']),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:oxygen', 300)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'minecraft:magma_cream'])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    // High heat type: hydrogen sulfide + oxygen + catalyst, produces water + sulfur dioxide
    event.recipes.create.sequenced_assembly(
        'kubejs:thermogenic_vulcan_thermus_petri_dish',
        'kubejs:vulcan_thermus_dish',
        [
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:hydrogen_sulfide', 400)]),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('kubejs:oxygen', 600)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'kubejs:sulfur_copper_catalyst']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'minecraft:blaze_powder'])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    // Thermoelectric type: magma + water + thermophile broth, simulates thermoelectric effect
    event.recipes.create.sequenced_assembly(
        'kubejs:thermoelectric_vulcan_thermus_petri_dish',
        'kubejs:vulcan_thermus_dish',
        [
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'minecraft:magma_block']),
            event.recipes.create.filling(vulcan_transition, [vulcan_transition, Fluid.of('minecraft:water', 500)]),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'kubejs:thermophile_broth']),
            event.recipes.create.deploying(vulcan_transition, [vulcan_transition, 'createdieselgenerators:engine_piston'])
        ]
    ).transitionalItem(vulcan_transition).loops(1);

    // ==================== Carbofusor Spirillum ====================
    const carbofusor_transition = 'kubejs:processing_carbofusor_spirillum_petri_dish';

    // Coal saving type: peat + water + pressure, slow but renewable
    event.recipes.create.sequenced_assembly(
        'kubejs:coal_saver_carbofusor_spirillum_petri_dish',
        'kubejs:carbofusor_spirillum_dish',
        [
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:peat']),
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('minecraft:water', 500)])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    // High pressure type: bituminous coal + hydrogen + nickel catalyst, fast coalification
    event.recipes.create.sequenced_assembly(
        'kubejs:pressurized_carbofusor_spirillum_petri_dish',
        'kubejs:carbofusor_spirillum_dish',
        [
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:bituminous_coal']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:bituminous_coal']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:nickel_catalyst']),
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('kubejs:hydrogen', 300)])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    // Syngas type: syngas + iron catalyst, produces methanol as byproduct
    event.recipes.create.sequenced_assembly(
        'kubejs:syngas_rich_carbofusor_spirillum_petri_dish',
        'kubejs:carbofusor_spirillum_dish',
        [
            event.recipes.create.filling(carbofusor_transition, [carbofusor_transition, Fluid.of('kubejs:syngas', 600)]),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:iron_catalyst']),
            event.recipes.create.deploying(carbofusor_transition, [carbofusor_transition, 'kubejs:copper_dust'])
        ]
    ).transitionalItem(carbofusor_transition).loops(1);

    // ==================== Putrelys Sporogenes ====================
    const putrelys_transition = 'kubejs:processing_putrelys_sporogenes_petri_dish';

    // Basic saprophytic type: compost mass + water, slow
    event.recipes.create.sequenced_assembly(
        'kubejs:saprophytic_putrelys_sporogenes_petri_dish',
        'kubejs:putrelys_sporogenes_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'ratatouille:compost_mass']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('minecraft:water', 500)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    // Proteolytic type: rotten flesh + bone dust + ammonia, fast nitrogen utilization
    event.recipes.create.sequenced_assembly(
        'kubejs:proteolytic_putrelys_sporogenes_petri_dish',
        'kubejs:putrelys_sporogenes_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'minecraft:rotten_flesh']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'minecraft:rotten_flesh']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:bone_dust']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:ammonia', 200)]),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('minecraft:water', 250)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    // Cellulolytic type: cellulase + lignin + oxygen, efficient plant decomposition
    event.recipes.create.sequenced_assembly(
        'kubejs:cellulolytic_putrelys_sporogenes_petri_dish',
        'kubejs:putrelys_sporogenes_dish',
        [
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:cellulase_enzyme']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:lignin_powder']),
            event.recipes.create.deploying(putrelys_transition, [putrelys_transition, 'kubejs:lignin_powder']),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('kubejs:oxygen', 200)]),
            event.recipes.create.filling(putrelys_transition, [putrelys_transition, Fluid.of('minecraft:water', 300)])
        ]
    ).transitionalItem(putrelys_transition).loops(1);

    // ==================== Nitrofix Rhizobium ====================
    const nitrofix_transition = 'kubejs:processing_nitrofix_rhizobium_petri_dish';

    // Sugar-fed nitrogen fixation: sugar + nitrogen + bone meal, slow but cheap
    event.recipes.create.sequenced_assembly(
        'kubejs:sugar_fed_nitrofix_rhizobium_petri_dish',
        'kubejs:nitrofix_rhizobium_dish',
        [
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:sugar']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:bone_dust']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:nitrogen', 500)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('minecraft:water', 300)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    // Phototrophic type: molybdenum + amethyst + ammonia + light, high yield but requires rare metals
    event.recipes.create.sequenced_assembly(
        'kubejs:phototrophic_nitrofix_rhizobium_petri_dish',
        'kubejs:nitrofix_rhizobium_dish',
        [
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:molybdenum_dust']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:molybdenum_dust']),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'minecraft:amethyst_shard']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:ammonia', 300)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('minecraft:water', 400)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    // Nitrifying type: ammonia + oxygen + platinum catalyst, oxidizes ammonia to nitrate
    event.recipes.create.sequenced_assembly(
        'kubejs:nitrifying_nitrofix_rhizobium_petri_dish',
        'kubejs:nitrofix_rhizobium_dish',
        [
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:ammonia', 400)]),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:oxygen', 600)]),
            event.recipes.create.deploying(nitrofix_transition, [nitrofix_transition, 'kubejs:platinum_catalyst']),
            event.recipes.create.filling(nitrofix_transition, [nitrofix_transition, Fluid.of('kubejs:distilled_water', 300)])
        ]
    ).transitionalItem(nitrofix_transition).loops(1);

    // ==================== Crystallum Coccus ====================
    const crystallum_transition = 'kubejs:processing_crystallum_coccus_petri_dish';

    // Cheap crystal type: quartz + bone meal + water, slow but cheap
    event.recipes.create.sequenced_assembly(
        'kubejs:cheap_crystal_crystallum_coccus_petri_dish',
        'kubejs:crystallum_coccus_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:quartz']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:quartz']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:bone_dust']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:bone_dust']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('minecraft:water', 500)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

    // Fast nucleation type: urea + calcium chloride + ammonia, produces calcium carbonate crystals, fast
    event.recipes.create.sequenced_assembly(
        'kubejs:fast_nucleating_crystallum_coccus_petri_dish',
        'kubejs:crystallum_coccus_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:urea']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:calcium_chloride', 400)]),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:ammonia', 200)]),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('minecraft:water', 300)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

    // Precision catalysis type: silica gel + gold nanoparticles + seed crystal, produces high-grade crystal clusters
    event.recipes.create.sequenced_assembly(
        'kubejs:precision_crystallum_coccus_petri_dish',
        'kubejs:crystallum_coccus_dish',
        [
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:silica_gel']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:silica_gel']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'kubejs:gold_nanoparticle']),
            event.recipes.create.deploying(crystallum_transition, [crystallum_transition, 'minecraft:amethyst_shard']),
            event.recipes.create.filling(crystallum_transition, [crystallum_transition, Fluid.of('kubejs:distilled_water', 400)])
        ]
    ).transitionalItem(crystallum_transition).loops(1);

})