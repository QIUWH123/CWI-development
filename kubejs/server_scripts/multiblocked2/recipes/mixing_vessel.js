ServerEvents.recipes(event => {

  // ========== 需要加热的配方 (heated) ==========

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/caustic_soda_powder_from_fluid")
    .priority(1).duration(200)
    .inputFluids("kubejs:caustic_soda 125")
    .outputItems("kubejs:caustic_soda_powder")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/salt_from_brine")
    .priority(1).duration(200)
    .inputFluids("kubejs:brine 125")
    .outputItems("ratatouille:salt")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/nitrate_dust_from_solution")
    .priority(1).duration(200)
    .inputFluids("kubejs:nitrate_solution 125")
    .outputItems("tfmg:nitrate_dust")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/sulfur_copper_catalyst")
    .priority(1).duration(200)
    .inputItems("2x tfmg:sulfur_dust", "kubejs:copper_dust")
    .outputItems("kubejs:sulfur_copper_catalyst")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/chloride_copper_catalyst")
    .priority(1).duration(200)
    .inputItems("kubejs:copper_dust")
    .inputFluids("kubejs:chlorine 250")
    .outputItems("kubejs:chloride_copper_catalyst")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/nickel_catalyst_from_powder")
    .priority(1).duration(200)
    .inputItems("2x kubejs:caustic_soda_powder", "kubejs:nickel_dust")
    .outputItems("kubejs:nickel_catalyst")
    .addDataBoolean("heated", true);

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/nickel_catalyst_from_fluid")
    .priority(1).duration(200)
    .inputItems("kubejs:nickel_dust")
    .inputFluids("kubejs:caustic_soda 250")
    .outputItems("kubejs:nickel_catalyst")
    .addDataBoolean("heated", true);

  // ========== 无需加热的配方 (无条件) ==========

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/caustic_soda_fluid")
    .priority(0).duration(100)
    .inputItems("kubejs:caustic_soda_powder")
    .inputFluids("kubejs:distilled_water 125")
    .outputFluids("kubejs:caustic_soda 125");

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/brine_fluid")
    .priority(0).duration(100)
    .inputItems("ratatouille:salt")
    .inputFluids("kubejs:distilled_water 125")
    .outputFluids("kubejs:brine 125");

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/bittern_fluid_from_water")
    .priority(0).duration(100)
    .inputItems("kubejs:halite_dust")
    .inputFluids("minecraft:water 125")
    .outputFluids("kubejs:bittern 125");

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/bittern_fluid_from_distilled_water")
    .priority(0).duration(100)
    .inputItems("kubejs:halite_dust")
    .inputFluids("kubejs:distilled_water 125")
    .outputFluids("kubejs:bittern 125");

  event.recipes.modpack.mixing_vessel_mixing()
    .id("modpack:mixing_vessel/nitrate_solution_fluid")
    .priority(0).duration(100)
    .inputItems("tfmg:nitrate_dust")
    .inputFluids("kubejs:distilled_water 125")
    .outputFluids("kubejs:nitrate_solution 125");
});