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
                inoculum: variant.inoculum || `kubejs:${microbe.name}`,
                microbeName: microbe.name,
                steps: JSON.parse(JSON.stringify(variant.steps)),
                count: variant.count
            })
        })
    })
})

JEIAddedEvents.registerCategories(event => {
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers
    event.custom('kubejs:incubator', category => {
        category.title(Component.translate('cwi.recipe.incubating'))
        category.setWidth(178)
        category.setHeight(136)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => guiHelper.createDrawableItemStack(Item.of('cwi:incubator')))

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const data = recipe.recipeData

            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                .addItemStack(Item.of('kubejs:' + data.microbeName))

            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT)
                .addItemStack(Item.of('kubejs:' + data.microbeName))

            if (data.inoculum !== 'kubejs:' + data.microbeName) {
                layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                    .addItemStack(Item.of(data.inoculum))
            }

        // Index Preparation Feeds For Lookup, Incubation Still Uses One Sealed Plate
            data.steps.forEach((step, index) => {
                const count = step.count || 1
                const slot = layoutBuilder.addSlot($RecipeIngredientRole.RENDER_ONLY, 50 + index * 20, 16)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)

                if (step.type === 'filling') {
                    slot.setFluidRenderer(step.amount * count, false, 16, 16)
                        .addFluidStack(step.fluid, step.amount * count)
                    layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                        .addFluidStack(step.fluid, step.amount * count)
                } else {
                    slot.addItemStack(Item.of(step.item, count))
                    layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                        .addItemStack(Item.of(step.item, count))
                }

                slot.addRichTooltipCallback((view, tooltip) => {
                    const machine = step.type === 'filling' ? 'create:spout' : 'create:deployer'
                    tooltip.add(Component.translate('cwi.jei.incubator.feed_step', index + 1, Item.of(machine).displayName, count)
                        .withStyle(ChatFormatting.GRAY))
                })
            })

            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 90)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(data.input)

            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 90)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(data.output)
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            const data = recipe.recipeData

            data.steps.forEach((step, index) => {
                drawWordWrap(graphics, Client.font, Component.literal(String(index + 1)).withStyle(ChatFormatting.GOLD), 54 + index * 20, 36, 16, 0xFFFFFF, true)
            })

            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 81)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 93)

            let matrixStack = graphics.pose()
            matrixStack.pushPose()
            matrixStack.translate(56, 75, 0)
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
            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(iconX, iconY, 0)
            pose.scale(1.5, 1.5, 1.0)
            microbeDrawable.draw(graphics, 0, 0)
            pose.popPose()

        // Align The Culture Yield To The Lower Right Of The Enlarged Microbe Icon
            const countText = `x${data.count}`
            pose.pushPose()
            pose.translate(0, 0, 200)
            drawWordWrap(graphics, Client.font, Component.literal(countText).withStyle(ChatFormatting.GOLD), iconX + 24 - Client.font.width(countText), iconY + 18, 24, 0xFFFFFF, true)
            pose.popPose()

            const timeMin = (data.time / 1200).toFixed(1)
            const timeText = `${timeMin} min`
            drawWordWrap(graphics, Client.font, Component.literal(timeText).withStyle(ChatFormatting.GOLD), 130, 58, 48, 0xFFFFFF, true)
            drawWordWrap(graphics, Client.font, Component.literal('64 RPM').withStyle(ChatFormatting.GOLD), 130, 71, 48, 0xFFFFFF, true)
        })
    })
})
