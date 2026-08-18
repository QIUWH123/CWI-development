function drawStaticSpout(graphics, fluidObj, fluidAmount) {
    const scale = 24
    const pose = graphics.pose()

    $AnimatedKinetics.defaultBlockElement($AllBlocks.SPOUT.getDefaultState())
        .scale(scale)
        .render(graphics)

    const delta = -3 * 20 / 32
    pose.pushPose()
    $GuiGameElement['of(dev.engine_room.flywheel.lib.model.baked.PartialModel)']($AllPartialModels.SPOUT_TOP)
        .scale(scale)
        .render(graphics)
    pose.translate(0, delta, 0)
    $GuiGameElement['of(dev.engine_room.flywheel.lib.model.baked.PartialModel)']($AllPartialModels.SPOUT_MIDDLE)
        .scale(scale)
        .render(graphics)
    pose.translate(0, delta, 0)
    $GuiGameElement['of(dev.engine_room.flywheel.lib.model.baked.PartialModel)']($AllPartialModels.SPOUT_BOTTOM)
        .scale(scale)
        .render(graphics)
    pose.translate(0, delta, 0)
    pose.popPose()

    if (fluidObj && fluidAmount > 0) {
        $AnimatedKinetics.DEFAULT_LIGHTING.applyLighting()

        let forgeFluidStack = new $FluidStack(fluidObj, fluidAmount, null)
        const buffer = $MultiBufferSource.immediate($Tesselator.getInstance().getBuilder())

        pose.pushPose()
        $UIRenderHelper.flipForGuiRender(pose)
        pose.scale(16, 16, 16)
        const from = 3 / 16, to = 17 / 16
        $ForgeCatnipServices.FLUID_RENDERER.renderFluidBox(
            forgeFluidStack, from, from, from, to, to, to,
            buffer, pose, $LightTexture.FULL_BRIGHT, false, true
        )
        pose.popPose()

        const maxWidth = 20 / 128
        pose.pushPose()
        pose.translate(scale / 2, scale * 1.5, scale / 2)
        $UIRenderHelper.flipForGuiRender(pose)
        pose.scale(16, 16, 16)
        pose.translate(-0.5, 0, -0.5)
        const from2 = -maxWidth / 2 + 0.5, to2 = maxWidth / 2 + 0.5
        $ForgeCatnipServices.FLUID_RENDERER.renderFluidBox(
            forgeFluidStack, from2, 0, from2, to2, 2, to2,
            buffer, pose, $LightTexture.FULL_BRIGHT, false, true
        )
        pose.popPose()

        buffer.endBatch()
    }

    $Lighting.setupFor3DItems()
}

JEIAddedEvents.registerRecipeCatalysts(event => {
    const { jeiHelpers } = event.data
    const type = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'budding_catalyst')).get()
    event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:spout'), [type])
})

JEIAddedEvents.registerRecipes(event => {
    const builder = event.custom(new ResourceLocation('kubejs', 'budding_catalyst'))
    const recipes = global.buddingGrowRecipes
    if (recipes && Array.isArray(recipes)) {
        recipes.forEach(recipe => {
            recipe.fluidInput.forEach(cfg => {
                // Build Output Item Array With Chance And Count
                const outputs = recipe.outputs.map(outId => ({
                    item: outId,
                    chance: cfg.chance,
                    count: cfg.multiplier || 1
                }))
                builder.add({
                    fluidId: cfg.id,
                    fluidAmount: cfg.amount,
                    blockInput: recipe.blockInput,
                    outputs: outputs
                })
            })
        })
    }
})

JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers

    event.custom('kubejs:budding_catalyst', category => {
        category.title(Component.translate('cwi.recipe.budding_growth'))
            .setWidth(178)
            .setHeight(156)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => new $DoubleItemIcon(
                () => Item.of('create:spout'),
                () => Item.of('minecraft:budding_amethyst')
            ))

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const data = recipe.recipeData

            if (data.fluidId) {
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 100)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .setFluidRenderer(data.fluidAmount, false, 16, 16)
                    .addFluidStack(data.fluidId, data.fluidAmount)
            }

            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 130)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(Item.of(data.blockInput))

            const outputs = data.outputs || []
            outputs.forEach((out, i) => {
                const y = 130 - i * 22
                const stack = Item.of(out.item, out.count || 1)
                const slot = layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142, y)
                if (out.chance && out.chance < 1) {
                    const po = new $ProcessingOutput(stack, out.chance)
                    slot.setBackground($CreateRecipeCategory.getRenderedSlot(po), -1, -1)
                        .addRichTooltipCallback($CreateRecipeCategory.addStochasticTooltip(po))
                } else {
                    slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                }
                slot.addItemStack(stack)
            })
        })

        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            const data = recipe.recipeData

            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 109)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 135)

            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(56, 105, 0)
            pose.mulPose($Axis.XP.rotationDegrees(-12.5))
            pose.mulPose($Axis.YP.rotationDegrees(22.5))

            const inputBlock = Block.getBlock(data.blockInput)
            if (inputBlock && inputBlock != Block.getBlock('minecraft:air')) {
                $AnimatedKinetics.defaultBlockElement(inputBlock.defaultBlockState())
                    .rotateBlock(0, 180, 0)
                    .atLocal(0, 0, 2)
                    .scale(24)
                    .render(graphics)
            }

            pose.pushPose()
            pose.translate(0, -48, 48)
            const fluidObj = data.fluidId ? Fluid.of(data.fluidId).getFluid() : null
            const fluidAmount = data.fluidAmount || 1000
            drawStaticSpout(graphics, fluidObj, fluidAmount)
            pose.popPose()

            pose.popPose()
        })
    })
})