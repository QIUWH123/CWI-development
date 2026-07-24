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
    global.microbes.forEach(microbe => {
        microbe.variants.forEach(variant => {
            const sealed = `kubejs:sealed_${variant.trait}_${microbe.name}_agar_plate`
            const cultured = `kubejs:cultured_${variant.trait}_${microbe.name}_agar_plate`
            recipeBuilder.add({
                input: sealed,
                output: cultured,
                time: variant.time,
                microbeName: microbe.name
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
            const data = recipe.recipeData

            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                .addItemStack(Item.of('kubejs:' + data.microbeName))

            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(data.input)

            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(data.output)
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            const data = recipe.recipeData

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

            const microbeItem = Item.of('kubejs:' + data.microbeName)
            const microbeDrawable = guiHelper.createDrawableItemStack(microbeItem)
            const iconX = 10
            const iconY = 10
            let pose = graphics.pose()
            pose.pushPose()
            pose.translate(iconX, iconY, 0)
            pose.scale(1.5, 1.5, 1.0)
            microbeDrawable.draw(graphics, 0, 0)
            pose.popPose()

            const timeMin = (data.time / 1200).toFixed(1)
            const timeText = `${timeMin} min`
            drawWordWrap(graphics, Client.font, Component.literal(timeText).withStyle(ChatFormatting.GOLD), 133, 16, 60, 0xFFFFFF, true)
        })
    })
})