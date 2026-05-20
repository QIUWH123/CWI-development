JEIAddedEvents.registerRecipeCatalysts(event => {
 
    const { data } = event
    const { jeiHelpers } = data
 
    let corrodingTypeId = ResourceLocation.fromNamespaceAndPath('create', 'corroding')
    let recipeType = jeiHelpers.getRecipeType(corrodingTypeId).get()
 
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('create:encased_fan').setHoverName(Component.translate('Bulk Corroding').italic(false)), recipeType)
    })

JEIAddedEvents.registerRecipes(event => {
 
    let freezingTypeId = new ResourceLocation('create', 'corroding')
    let recipeBuilder = event.custom(freezingTypeId)
    
    recipeBuilder.add({
        input: 'create:iron_sheet',
        output: 'minecraft:iron_ingot'
    })

})

JEIAddedEvents.registerCategories(event => {
 
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers
 
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
 
            let sulfuricAcidState = Block.getBlock('tfmg:sulfuric_acid').defaultBlockState()
 
            $AnimatedKinetics.defaultBlockElement(sulfuricAcidState)
                .rotateBlock(0, 180, 0)
                .atLocal(0.0, 0.0, 2.0)
                .scale(24.0)
                .render(graphics)
 
            matrixStack.popPose()
        })
    })
    
})