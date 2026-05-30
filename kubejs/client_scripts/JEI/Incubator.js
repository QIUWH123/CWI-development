JEIAddedEvents.registerRecipeCatalysts(event => {
    const { data } = event
    const { jeiHelpers } = data
    let typeId = ResourceLocation.fromNamespaceAndPath('kubejs', 'incubator')
    let recipeType = jeiHelpers.getRecipeType(typeId).get()
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('cwi:incubator'), recipeType)
})

JEIAddedEvents.registerRecipes(event => {
    let typeId = new ResourceLocation('kubejs', 'incubator')
    let recipeBuilder = event.custom(typeId)
    global.microbes.forEach(([name, color1, color2, color3, variants, times]) => {
        variants.forEach(variant => {
            const sealed = `kubejs:sealed_${variant}_${name}_agar_plate`
            const cultured = `kubejs:cultured_${variant}_${name}_agar_plate`
            recipeBuilder.add({
                input: sealed,
                output: cultured
            })
        })
    })
})

JEIAddedEvents.registerCategories(event => {
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers
    event.custom('kubejs:incubator', category => {
        category.title(Component.translate('Incubating'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => guiHelper.createDrawableItemStack(Item.of('cwi:incubator')))
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)

            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })
        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let matrixStack = graphics.pose()
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
            let stoneState = Block.getBlock('cwi:incubator').defaultBlockState()
            $AnimatedKinetics.defaultBlockElement(stoneState)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
            matrixStack.popPose()
        })
    })
})