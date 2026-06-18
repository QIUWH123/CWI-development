JEIAddedEvents.registerRecipeCatalysts(event => {
    const { data } = event
    const { jeiHelpers } = data
    let typeId = ResourceLocation.fromNamespaceAndPath('kubejs', 'mixing_vessel')
    let recipeType = jeiHelpers.getRecipeType(typeId).get()
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('cwi:mixing_vessel'), recipeType)
})

JEIAddedEvents.registerRecipes(event => {
    let typeId = new ResourceLocation('kubejs', 'mixing_vessel')
    let recipeBuilder = event.custom(typeId)
    global.mixingVesselRecipes.forEach(recipe => {
        recipeBuilder.add(recipe)
    })
})

JEIAddedEvents.registerCategories(event => {
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers
    event.custom('kubejs:mixing_vessel', category => {
        category.title(Component.translate('Mixing Vessel'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => guiHelper.createDrawableItemStack(Item.of('cwi:mixing_vessel')))

        let fluidSlotBg = guiHelper.getSlotDrawable()

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            let recipeData = recipe.recipeData
            let inputs = recipeData.inputs || []
            inputs.forEach((stack, i) => {
                let item = Item.of(stack.item || stack, stack.count || 1)
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18 + i * 18, 48)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(item)
            })
            let inputFluids = recipeData.inputFluids || []
            inputFluids.forEach((f, i) => {
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18 + i * 18, 24)
                    .setBackground(fluidSlotBg, -1, -1)
                    .addFluidStack(f.fluid, f.amount)
            })
            let outputs = recipeData.outputs || []
            outputs.forEach((stack, i) => {
                let item = Item.of(stack.item || stack, stack.count || 1)
                layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142 + i * 18, 48)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(item)
            })
            let outputFluids = recipeData.outputFluids || []
            outputFluids.forEach((f, i) => {
                layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142 + i * 18, 24)
                    .setBackground(fluidSlotBg, -1, -1)
                    .addFluidStack(f.fluid, f.amount)
            })
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let matrixStack = graphics.pose()
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
            let glassState = Block.getBlock('kubejs:incomplete_mixing_vessel').defaultBlockState()
            $AnimatedKinetics.defaultBlockElement(glassState)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
            let gearState = Block.getBlock('kubejs:mixer_head').defaultBlockState()
            $AnimatedKinetics.defaultBlockElement(gearState)
                .rotateBlock(0, $AnimatedKinetics.getCurrentAngle() * 8, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
            matrixStack.popPose()
        })
    })
})