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

    const recipes = [
        {
            inputs: [{ item: 'tfmg:sulfur_dust', count: 2 }, { item: 'kubejs:copper_dust' }],
            outputs: [{ item: 'kubejs:sulfur_copper_catalyst' }]
        },
        {
            inputs: [{ item: 'kubejs:copper_dust' }],
            inputFluids: [{ fluid: 'kubejs:chlorine', amount: 250 }],
            outputs: [{ item: 'kubejs:chloride_copper_catalyst' }]
        },
        {
            inputs: [{ item: 'kubejs:caustic_soda_powder', count: 2 }, { item: 'kubejs:nickel_dust' }],
            outputs: [{ item: 'kubejs:nickel_catalyst' }]
        },
        {
            inputs: [{ item: 'kubejs:nickel_dust' }],
            inputFluids: [{ fluid: 'kubejs:caustic_soda', amount: 250 }],
            outputs: [{ item: 'kubejs:nickel_catalyst' }]
        },
        {
            inputs: [{ item: 'kubejs:caustic_soda_powder' }],
            inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
            outputFluids: [{ fluid: 'kubejs:caustic_soda', amount: 125 }]
        },
        {
            inputs: [{ item: 'ratatouille:salt' }],
            inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
            outputFluids: [{ fluid: 'kubejs:brine', amount: 125 }]
        },
        {
            inputs: [{ item: 'kubejs:halite_dust' }],
            inputFluids: [{ fluid: 'minecraft:water', amount: 125 }],
            outputFluids: [{ fluid: 'kubejs:bittern', amount: 125 }]
        },
        {
            inputs: [{ item: 'kubejs:halite_dust' }],
            inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
            outputFluids: [{ fluid: 'kubejs:bittern', amount: 125 }]
        },
        {
            inputs: [{ item: 'tfmg:nitrate_dust' }],
            inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 125 }],
            outputFluids: [{ fluid: 'kubejs:nitrate_solution', amount: 125 }]
        },
        {
            inputs: [{ item: 'minecraft:sugar' }, { item: 'createaddition:biomass' }],
            inputFluids: [{ fluid: 'kubejs:distilled_water', amount: 250 }],
            outputFluids: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
        },
        {
            inputs: [{ item: 'createaddition:biomass' }],
            inputFluids: [
                { fluid: 'kubejs:distilled_water', amount: 125 },
                { fluid: 'kubejs:syrup', amount: 125 }
            ],
            outputFluids: [{ fluid: 'createaddition:bioethanol', amount: 250 }]
        },
        {
            inputFluids: [
                { fluid: 'createdieselgenerators:ethanol', amount: 50 },
                { fluid: 'createdieselgenerators:plant_oil', amount: 50 }
            ],
            outputFluids: [{ fluid: 'createdieselgenerators:biodiesel', amount: 100 }]
        }
    ]

    recipes.forEach(recipe => {
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