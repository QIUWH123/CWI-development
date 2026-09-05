ServerEvents.recipes(event => {

    event.recipes.create.mixing(Fluid.of('create:tea', 500), ['#minecraft:leaves', Fluid.of('minecraft:milk', 100), Fluid.of('kubejs:distilled_water', 400)]).heated()

    global.apples.forEach(([material, hunger, saturation, effects]) => {
        const mat = global.materialTypes.find(m => m.id === material)
        if (!mat) return

        const appleItem = `kubejs:${material}_apple`
        const chargedAppleItem = `kubejs:charged_${material}_apple`
        const enchantedAppleItem = `kubejs:enchanted_${material}_apple`
        const ingot = mat.items.ingot
        const sheet = mat.items.sheet
        const fluid = mat.fluid
        if (!ingot || !sheet || !fluid) return

        event.shaped(appleItem, ['AAA', 'ABA', 'AAA'], {
            A: ingot,
            B: 'minecraft:apple'
        })

        event.shaped(appleItem, ['AAA', 'ABA', 'AAA'], {
            A: sheet,
            B: 'minecraft:apple'
        })

        charging(event, 10000, 100, AddItem(appleItem), AddItem(chargedAppleItem))

        addFermentingRecipes(event,
            [
                AddFluid('250 kubejs:redstone_acid'),
                AddItem('2x kubejs:lapis_powder'),
                AddItem('3x kubejs:amethyst_powder'),
                AddItem(chargedAppleItem)
            ],
            [
                AddItem(enchantedAppleItem)
            ],
            2400, "superheated", ['basin', 'bulk']
        )

        tableCasting(event, true, [AddItem('minecraft:apple'), AddFluid('720 ' + fluid)], 200, AddItem(appleItem))
        basinCasting(event, true, [AddItem('minecraft:apple'), AddFluid('720 ' + fluid)], 200, AddItem(appleItem))
    })

})