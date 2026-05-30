ServerEvents.recipes(event => {

  event.recipes.create.mixing(Fluid.of('create:tea', 500), ['#minecraft:leaves', Fluid.of('minecraft:milk', 100), Fluid.of('kubejs:distilled_water', 400)]).heated()

})