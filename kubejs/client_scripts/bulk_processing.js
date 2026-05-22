// client_scripts/fan_jei.js

// ---------- 类型配置 ----------
// 每新增一种风扇处理类型，只需在此数组中追加一项即可
const fanJEITypes = [
    {
        typeName: 'corroding',
        titleTranslationKey: 'recipe.kubejs.corroding',
        catalystHoverName: 'Bulk Corroding',
        iconItems: ['create:propeller', 'tfmg:sulfuric_acid_bucket'],
        backgroundBlock: 'tfmg:sulfuric_acid',
        recipes: [
            { input: 'create:iron_sheet', output: 'minecraft:iron_ingot' }
            // 在这里添加更多腐蚀配方
        ]
    },
    {
        typeName: 'sterilizing',
        titleTranslationKey: 'recipe.kubejs.sterilizing',
        catalystHoverName: 'Bulk Sterilizing',
        iconItems: ['create:propeller', 'createdieselgenerators:ethanol_bucket'],
        backgroundBlock: 'createdieselgenerators:ethanol',
        recipes: [
            { input: 'kubejs:petri_dish', output: 'kubejs:sterile_petri_dish' }
            // 在这里添加更多消毒配方
        ]
    }
]

// ---------- 催化剂注册（修正版） ----------
JEIAddedEvents.registerRecipeCatalysts(event => {
    const { data } = event

    fanJEITypes.forEach(type => {
        let catalystStack = Item.of('create:encased_fan')
            .setHoverName(Component.translate(type.catalystHoverName).italic(false))

        // 直接使用分类的完整 ID 字符串作为催化剂
        data.addRecipeCatalyst(catalystStack, `create:${type.typeName}`)
    })
})

// ---------- 配方注册 ----------
JEIAddedEvents.registerRecipes(event => {
    fanJEITypes.forEach(type => {
        let recipeTypeId = new ResourceLocation('create', type.typeName)
        let recipeBuilder = event.custom(recipeTypeId)

        type.recipes.forEach(recipe => {
            recipeBuilder.add({
                input: recipe.input,
                output: recipe.output
            })
        })
    })
})

// ---------- 分类外观 ----------
JEIAddedEvents.registerCategories(event => {
    const { data } = event
    const { jeiHelpers } = data
    const { guiHelper } = jeiHelpers

    fanJEITypes.forEach(type => {
        event.custom('create:' + type.typeName, category => {
            // 基础信息
            category.title(Component.translate(type.titleTranslationKey))
            category.setWidth(178)
            category.setHeight(72)
            category.background(guiHelper.createBlankDrawable(0, 0))

            // 图标
            category.iconSupplier(() => {
                let [itemA, itemB] = type.iconItems
                return new $DoubleItemIcon(
                    () => Item.of(itemA),
                    () => Item.of(itemB)
                )
            })

            // 输入/输出槽位
            category.handleLookup((layoutBuilder, recipe, focuses) => {
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 21, 48)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(recipe.recipeData.input)

                layoutBuilder.addSlot($RecipeIngredientRole.OUTPUT, 141, 48)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(recipe.recipeData.output)
            })

            // 绘制动画背景
            category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
                $AllGuiTextures.JEI_SHADOW.render(graphics, 46, 29)
                $AllGuiTextures.JEI_SHADOW.render(graphics, 65, 39)
                $AllGuiTextures.JEI_LONG_ARROW.render(graphics, 54, 51)

                let matrixStack = graphics.pose()

                matrixStack.pushPose()
                matrixStack.translate(56, 33, 0)
                matrixStack.mulPose($Axis.XP.rotationDegrees(-12.5))
                matrixStack.mulPose($Axis.YP.rotationDegrees(22.5))

                // 风扇内部旋转部分
                $AnimatedKinetics["defaultBlockElement(dev.engine_room.flywheel.lib.model.baked.PartialModel)"]
                    ($AllPartialModels.ENCASED_FAN_INNER)
                        .rotateBlock(180, 0, $AnimatedKinetics.getCurrentAngle() * 16)
                        .scale(24.0)
                        .render(graphics)

                // 风扇外壳
                $AnimatedKinetics.defaultBlockElement(Block.getBlock('create:encased_fan').defaultBlockState())
                    .rotateBlock(0, 180, 0)
                    .atLocal(0.0, 0.0, 0.0)
                    .scale(24.0)
                    .render(graphics)

                // 根据类型显示不同方块（硫酸或乙醇）
                let state = Block.getBlock(type.backgroundBlock).defaultBlockState()
                $AnimatedKinetics.defaultBlockElement(state)
                    .rotateBlock(0, 180, 0)
                    .atLocal(0.0, 0.0, 2.0)
                    .scale(24.0)
                    .render(graphics)

                matrixStack.popPose()
            })
        })
    })
})