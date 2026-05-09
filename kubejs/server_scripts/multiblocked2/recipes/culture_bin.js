ServerEvents.recipes(event => {

  event.recipes.modpack.incubating()
    .id("modpack:culture_bin/nitrate_solution_fluid")
    .priority(0).duration(100)
    .inputItems("tfmg:nitrate_dust")
    .inputFluids("kubejs:distilled_water 125")
    .outputFluids("kubejs:nitrate_solution 125");

});