const drawHammer = (graphics, guiHelper, stage) => {
    const hammerId = 'minecraft:hammer_' + (stage || 1)
    const drawable = guiHelper.createDrawableItemStack(Item.of(hammerId))
    let ms = graphics.pose()
    ms.pushPose()
    ms.translate(18, 6, 0)
    ms.scale(2, 2, 1)
    drawable.draw(graphics, 0, 0)
    ms.popPose()
}

JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers
    const defaultHammerDrawable = guiHelper.createDrawableItemStack(Item.of('minecraft:iron_hammer'))

    const buildBlockConversion = category => {
        category.title(Component.translate('Block Conversion')).setWidth(178).setHeight(72)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => defaultHammerDrawable)
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const recipeData = recipe.recipeData
            const input = recipeData.input
            const outputs = recipeData.outputs || []
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(input)
            let max = 2, rows = []
            for (let i = 0; i < outputs.length; i += max) rows.push(outputs.slice(i, i + max))
            rows.forEach((row, ri) => {
                let y = 48 - ri * 18, sx = 142 - (row.length - 1) * 9
                row.forEach((out, i) => {
                    let stack = Item.of(out.item, out.count || 1), slot = layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, sx + i * 18, y)
                    if (out.chance && out.chance < 1) {
                        let po = new $ProcessingOutput(stack, out.chance)
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(po), -1, -1)
                            .addRichTooltipCallback($CreateRecipeCategory.addStochasticTooltip(po))
                    } else slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    slot.addItemStack(stack)
                })
            })
        })
        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let ms = graphics.pose()
            ms.pushPose()
            ms.translate(56, 33, 0)
            ms.mulPose($Axis.XP.rotationDegrees(-12.5))
            ms.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics.defaultBlockElement(Block.getBlock(recipe.recipeData.input.id).defaultBlockState())
                .rotateBlock(0, 180, 0).atLocal(0, 0, 2).scale(24).render(graphics)
            ms.popPose()
            drawHammer(graphics, guiHelper, recipe.recipeData.stage)
        })
    }

    const buildDepotConversion = category => {
        category.title(Component.translate('Depot Conversion')).setWidth(178).setHeight(72)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => defaultHammerDrawable)
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const recipeData = recipe.recipeData
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 18, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1).addItemStack(recipeData.input)
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 142, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1).addItemStack(recipeData.output)
        })
        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let ms = graphics.pose()
            ms.pushPose()
            ms.translate(89, 34, 0)
            ms.scale(2, 2, 1)
            guiHelper.createDrawableItemStack(recipe.recipeData.input).draw(graphics, -8, -8)
            ms.popPose()
            drawHammer(graphics, guiHelper, recipe.recipeData.stage)
        })
    }

    event.custom('kubejs:block_conversion', buildBlockConversion)
    event.custom('kubejs:depot_conversion', buildDepotConversion)
})

JEIAddedEvents.registerRecipes(event => {
    let blockB = event.custom(new ResourceLocation('kubejs', 'block_conversion'))
    Object.entries(global.blockConversions).forEach(([id, d]) => {
        let outs = []
        if (d.target && d.target !== 'air') outs.push({ item: d.target, chance: 1 })
        if (d.drops) d.drops.forEach(dr => outs.push({ item: dr.item, chance: dr.chance, count: dr.count || 1 }))
        blockB.add({ input: Item.of(id), outputs: outs, stage: d.requireStage || 1 })
    })
    let depotB = event.custom(new ResourceLocation('kubejs', 'depot_conversion'))
    Object.entries(global.depotConversions).forEach(([id, d]) => {
        depotB.add({ input: Item.of(id), output: Item.of(d.target), stage: d.requireStage || 1 })
    })
})

JEIAddedEvents.registerRecipeCatalysts(event => {
    const { jeiHelpers } = event.data
    const hammerIds = Ingredient.of('#minecraft:hammer').getItemIds()
    const blockType = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'block_conversion')).get()
    const depotType = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'depot_conversion')).get()
    hammerIds.forEach(id => {
        const item = Item.of(id)
        event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"](item, [blockType, depotType])
    })
})