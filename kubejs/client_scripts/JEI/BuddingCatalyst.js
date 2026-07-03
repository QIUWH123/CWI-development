JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers

    const buildNewConversion = category => {
        category.title(Component.translate('New Conversion')).setWidth(178).setHeight(216)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => guiHelper.createDrawableItemStack(Item.of('minecraft:crafting_table')))
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const recipeData = recipe.recipeData
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 120)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipeData.input)
            const outputs = recipeData.outputs || []
            outputs.forEach((out, i) => {
                const y = 120 - i * 18
                const stack = Item.of(out.item, out.count || 1)
                const slot = layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142, y)
                if (out.chance && out.chance < 1) {
                    const po = new $ProcessingOutput(stack, out.chance)
                    slot.setBackground($CreateRecipeCategory.getRenderedSlot(po), -1, -1)
                        .addRichTooltipCallback($CreateRecipeCategory.addStochasticTooltip(po))
                } else slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                slot.addItemStack(stack)
            })
        })
        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 111)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 123)
            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(56, 105, 0)
            pose.mulPose($Axis.XP.rotationDegrees(-12.5))
            pose.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics.defaultBlockElement(Block.getBlock(recipe.recipeData.input.id).defaultBlockState())
                .rotateBlock(0, 180, 0).atLocal(0, 0, 2).scale(24).render(graphics)
            pose.popPose()
        })
    }

    event.custom('kubejs:new_conversion', buildNewConversion)
})

JEIAddedEvents.registerRecipes(event => {
    const builder = event.custom(new ResourceLocation('kubejs', 'new_conversion'))
    builder.add({
        input: Item.of('minecraft:stone'),
        outputs: [
            { item: 'minecraft:diamond', chance: 1 },
            { item: 'minecraft:gold_ingot', chance: 0.5, count: 2 }
        ]
    })
})

JEIAddedEvents.registerRecipeCatalysts(event => {
    const { jeiHelpers } = event.data
    const type = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'new_conversion')).get()
    event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of('minecraft:crafting_table'), [type])
})