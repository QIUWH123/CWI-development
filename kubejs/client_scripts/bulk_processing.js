// client_scripts/bulk_processing.js

// ---------- 类别注册（保持原样） ----------
JEIAddedEvents.registerCategories(event => {
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers

    // Corroding 分类
    event.custom('create:corroding', category => {
        category.title(Component.translate('recipe.kubejs.corroding'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:propeller'),
                () => Item.of('tfmg:sulfuric_acid_bucket')
            )
        })
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })
        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let matrixStack = graphics.pose()
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.ENCASED_FAN_INNER)
                    .rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
                    .scale(24.0)
                    .render(graphics)
            $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:encased_fan').defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 0.0)
                .scale(24.0)
                .render(graphics)
            let state = Block.getBlock('tfmg:sulfuric_acid').defaultBlockState()
            $AnimatedKinetics.defaultBlockElement(state)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
            matrixStack.popPose()
        })
    })

    // Sterilizing 分类
    event.custom('create:sterilizing', category => {
        category.title(Component.translate('recipe.kubejs.sterilizing'))
        category.setWidth(178)
        category.setHeight(72)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => {
            return new $DoubleItemIcon(
                () => Item.of('create:propeller'),
                () => Item.of('createdieselgenerators:ethanol_bucket')
            )
        })
        category.handleLookup((layoutBuilder, recipe, focuses) => {
            layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.input)
            layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                .addItemStack(recipe.recipeData.output)
        })
        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
            $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
            $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)
            let matrixStack = graphics.pose()
            matrixStack.pushPose()
            matrixStack.translate(56, 33, 0)
            matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
            matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                ($AllPartialModels.ENCASED_FAN_INNER)
                    .rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
                    .scale(24.0)
                    .render(graphics)
            $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:encased_fan').defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 0.0)
                .scale(24.0)
                .render(graphics)
            let state = Block.getBlock('createdieselgenerators:ethanol').defaultBlockState()
            $AnimatedKinetics.defaultBlockElement(state)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
            matrixStack.popPose()
        })
    })
})

// ---------- 配方注册（保持循环，无作用域问题） ----------
JEIAddedEvents.registerRecipes(event => {
    // Corroding recipes
    let corrodingBuilder = event.custom(new ResourceLocation('create', 'corroding'))
    corrodingBuilder.add({ input: 'create:iron_sheet', output: 'minecraft:iron_ingot' })
    // 在此添加更多腐蚀配方...

    // Sterilizing recipes
    let sterilizingBuilder = event.custom(new ResourceLocation('create', 'sterilizing'))
    sterilizingBuilder.add({ input: 'kubejs:petri_dish', output: 'kubejs:sterile_petri_dish' })
    // 在此添加更多消毒配方...
})