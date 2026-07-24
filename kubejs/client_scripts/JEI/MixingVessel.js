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
        let cloned = JSON.parse(JSON.stringify(recipe))
        if (cloned.outputs) {
            cloned.outputs = cloned.outputs.map(out => ({
                item: out.item,
                count: out.count || 1,
                chance: out.chance !== undefined ? out.chance : 1
            }))
        }
        if (cloned.outputFluids) {
            cloned.outputFluids = cloned.outputFluids.map(f => ({
                fluid: f.fluid,
                amount: f.amount,
                chance: f.chance !== undefined ? f.chance : 1
            }))
        }
        if (cloned.inputFluids) {
            cloned.inputFluids = cloned.inputFluids.map(f => ({
                fluid: f.fluid,
                amount: f.amount,
                chance: f.chance !== undefined ? f.chance : 1
            }))
        }
        recipeBuilder.add(cloned)
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

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            let recipeData = recipe.recipeData

            const layoutSlots = (items, maxPerRow, baseY, centerX, role, builder) => {
                if (!items || items.length === 0) return
                const rows = []
                for (let i = 0; i < items.length; i += maxPerRow) rows.push(items.slice(i, i + maxPerRow))
                rows.forEach((row, rowIndex) => {
                    const y = baseY - rowIndex * 18
                    const startX = centerX - (row.length - 1) * 9
                    row.forEach((entry, i) => {
                        const slot = layoutBuilder.addSlot(role, startX + i * 18, y)
                        builder(slot, entry)
                    })
                })
            }

            let allInputs = []
            if (recipeData.inputs) {
                recipeData.inputs.forEach(inp => allInputs.push({ type: 'item', data: inp }))
            }
            if (recipeData.inputFluids) {
                recipeData.inputFluids.forEach(f => allInputs.push({ type: 'fluid', data: f }))
            }

            layoutSlots(allInputs, 2, 48, 18, $RecipeIngredientRole.INPUT, (slot, entry) => {
                if (entry.type === 'item') {
                    let inp = entry.data
                    let inputItem = Item.of(inp.item || inp, inp.count || 1)
                    slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    slot.addItemStack(inputItem)
                } else if (entry.type === 'fluid') {
                    let f = entry.data
                    slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                        .setFluidRenderer(f.amount, false, 16, 16)
                        .addFluidStack(f.fluid, f.amount)
                }
            })

            let allOutputs = []
            if (recipeData.outputs) {
                recipeData.outputs.forEach(out => allOutputs.push({ type: 'item', data: out }))
            }
            if (recipeData.outputFluids) {
                recipeData.outputFluids.forEach(f => allOutputs.push({ type: 'fluid', data: f }))
            }

            layoutSlots(allOutputs, 2, 48, 142, $RecipeIngredientRole.OUTPUT, (slot, entry) => {
                if (entry.type === 'item') {
                    let out = entry.data
                    let outputItem = Item.of(out.item, out.count || 1)
                    if (out.chance && out.chance < 1) {
                        const po = new $ProcessingOutput(outputItem, out.chance)
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(po), -1, -1)
                            .addRichTooltipCallback($CreateRecipeCategory.addStochasticTooltip(po))
                    } else {
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    }
                    slot.addItemStack(outputItem)
                } else if (entry.type === 'fluid') {
                    let f = entry.data
                    if (f.chance && f.chance < 1) {
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(f.chance), -1, -1)
                        slot.addRichTooltipCallback((view, tooltip) => {
                            tooltip.add(Component.literal(`${Math.round(f.chance * 100)}% Chance`).withStyle(ChatFormatting.GOLD))
                        })
                    } else {
                        slot.setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    }
                    slot.setFluidRenderer(f.amount, false, 16, 16)
                        .addFluidStack(f.fluid, f.amount)
                }
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