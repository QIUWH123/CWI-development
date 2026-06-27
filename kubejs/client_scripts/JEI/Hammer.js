const drawHammer = (graphics, guiHelper, stage) => {
    const drawable = guiHelper.createDrawableItemStack(Item.of('minecraft:hammer_' + (stage || 1)))
    let pose = graphics.pose()
    pose.pushPose()
    pose.translate(18, 6, 0)
    pose.scale(2, 2, 1)
    drawable.draw(graphics, 0, 0)
    pose.popPose()
}

JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers
    const defaultHammerDrawable = guiHelper.createDrawableItemStack(Item.of('minecraft:iron_hammer'))

    const buildBlockConversion = category => {
        category.title(Component.translate('Block Conversion')).setWidth(178).setHeight(72).background(guiHelper.createBlankDrawable(0, 0)).iconSupplier(() => defaultHammerDrawable)
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const recipeData = recipe.recipeData
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 48).setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1).addItemStack(recipeData.input)
            const outputs = recipeData.outputs || []
            const maxPerRow = 2, rows = []
            for (let i = 0; i < outputs.length; i += maxPerRow) rows.push(outputs.slice(i, i + maxPerRow))
            rows.forEach((row, rowIndex) => {
                const y = 48 - rowIndex * 18, startX = 142 - (row.length - 1) * 9
                row.forEach((out, i) => {
                    const stack = Item.of(out.item, out.count || 1), slot = layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, startX + i * 18, y)
                    if (out.chance && out.chance < 1) {
                        const po = new $ProcessingOutput(stack, out.chance)
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(po), -1, -1).addRichTooltipCallback($CreateRecipeCategory.addStochasticTooltip(po))
                    } else slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    slot.addItemStack(stack)
                })
            })
        })
        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(56, 33, 0)
            pose.mulPose($Axis.XP.rotationDegrees(-12.5))
            pose.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics.defaultBlockElement(Block.getBlock(recipe.recipeData.input.id).defaultBlockState()).rotateBlock(0, 180, 0).atLocal(0, 0, 2).scale(24).render(graphics)
            pose.popPose()
            drawHammer(graphics, guiHelper, recipe.recipeData.stage)
        })
    }

    const buildDepotConversion = category => {
        category.title(Component.translate('Depot Conversion')).setWidth(178).setHeight(72).background(guiHelper.createBlankDrawable(0, 0)).iconSupplier(() => defaultHammerDrawable)
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const recipeData = recipe.recipeData
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 48).setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1).addItemStack(recipeData.input)
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142, 48).setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1).addItemStack(recipeData.output)
        })
        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(89, 34, 0)
            pose.scale(2, 2, 1)
            guiHelper.createDrawableItemStack(recipe.recipeData.input).draw(graphics, -8, -8)
            pose.popPose()
            drawHammer(graphics, guiHelper, recipe.recipeData.stage)
        })
    }

    event.custom('kubejs:block_conversion', buildBlockConversion)
    event.custom('kubejs:depot_conversion', buildDepotConversion)
})

JEIAddedEvents.registerRecipes(event => {
    const blockBuilder = event.custom(new ResourceLocation('kubejs', 'block_conversion'))
    Object.entries(global.blockConversions).forEach(([inputId, data]) => {
        const outputs = []
        if (data.target && data.target !== 'air') outputs.push({ item: data.target, chance: 1 })
        if (data.drops) data.drops.forEach(drop => outputs.push({ item: drop.item, chance: drop.chance, count: drop.count || 1 }))
        blockBuilder.add({ input: Item.of(inputId), outputs: outputs, stage: data.requireStage || 1 })
    })
    const depotBuilder = event.custom(new ResourceLocation('kubejs', 'depot_conversion'))
    Object.entries(global.depotConversions).forEach(([inputId, data]) => depotBuilder.add({ input: Item.of(inputId), output: Item.of(data.target), stage: data.requireStage || 1 }))
})

JEIAddedEvents.registerRecipeCatalysts(event => {
    const { jeiHelpers } = event.data
    const hammerIds = Ingredient.of('#minecraft:hammers').getItemIds()
    const blockType = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'block_conversion')).get()
    const depotType = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'depot_conversion')).get()
    hammerIds.forEach(id => event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](Item.of(id), [blockType, depotType]))
})