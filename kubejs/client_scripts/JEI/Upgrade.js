// 工具函数：自动换行绘制文本
function drawWordWrap(g, font, text, x, y, maxWidth, color, shadow) {
    for (let iter = font.split(text, maxWidth).iterator(); iter.hasNext(); y += font.lineHeight + 1) {
        let line = iter.next()
        g['drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'](font, line, x, y, color, shadow)
    }
}

// 获取附魔本地化名称
function getEnchantName(enchantId) {
    return Component.translate('enchantment.' + enchantId.replace(':', '.')).getString()
}

// 放大物品绘制
function drawLargeItem(graphics, guiHelper, itemStack, centerX, centerY, scale) {
    const drawable = guiHelper.createDrawableItemStack(itemStack)
    const pose = graphics.pose()
    pose.pushPose()
    pose.translate(centerX, centerY, 0)
    pose.scale(scale, scale, 1)
    drawable.draw(graphics, -8, -8)
    pose.popPose()
}

JEIAddedEvents.registerRecipeCatalysts(event => {
    const { jeiHelpers } = event.data
    const type = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('kubejs', 'equipment_upgrades')).get()
    event.data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (Item.of('minecraft:crafting_table'), [type])
})

JEIAddedEvents.registerRecipes(event => {
    const builder = event.custom(new ResourceLocation('kubejs', 'equipment_upgrades'))

    global.upgradeRecipes.forEach(function (recipe) {
        // 将材料对象数组保留完整信息（item、consume、count）
        const ingredientObjs = []
        for (let i = 0; i < recipe.ingredients.length; i++) {
            const raw = recipe.ingredients[i]
            ingredientObjs.push({
                item: raw.item,
                consume: raw.consume !== false,
                count: raw.count || 1
            })
        }

        builder.add({
            inputs: Ingredient.of(recipe.input),
            ingredients: ingredientObjs,
            enchantId: recipe.enchantId,
            maxLevel: recipe.maxLevel,
            durabilityMultiplier: recipe.durabilityMultiplier,
            exampleInput: recipe.input
        })
    })
})

JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers

    event.custom('kubejs:equipment_upgrades', category => {
        category.title(Component.translate('cwi.recipe.equipment_upgrades'))
            .setWidth(178)
            .setHeight(72)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => new $DoubleItemIcon(
                () => Item.of('minecraft:crafting_table'),
                () => Item.of('kubejs:small_hammer')
            ))

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const data = recipe.recipeData

            // 隐藏输入：待升级的工具/护甲
            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                .addIngredients(data.inputs)

            // 分离消耗品和非消耗品
            const materials = data.ingredients || []
            const consumables = []      // 消耗品
            const nonConsumables = []   // 非消耗品

            for (let i = 0; i < materials.length; i++) {
                const mat = materials[i]
                if (mat.consume === false) {
                    nonConsumables.push(mat)
                } else {
                    consumables.push(mat)
                }
            }

            // 左列：消耗品，x = 14，每行一个
            for (let i = 0; i < consumables.length; i++) {
                const y = 10 + i * 18
                const mat = consumables[i]
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 14, y)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(Item.of(mat.item, mat.count || 1))
            }

            // 右列：非消耗品，x = 44，每行一个
            for (let i = 0; i < nonConsumables.length; i++) {
                const y = 10 + i * 18
                const mat = nonConsumables[i]
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 44, y)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(Item.of(mat.item, mat.count || 1))
            }
        })

        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            const recipeData = recipe.recipeData

            $AllGuiTextures.JEI_SHADOW.render(graphics, 64, 48)

            const exampleItem = recipeData.exampleInput || 'minecraft:iron_sword'
            drawLargeItem(graphics, guiHelper, Item.of(exampleItem), 89, 38, 2.0)

            const enchantName = getEnchantName(recipeData.enchantId)
            const levelText = `Max lv: ${recipeData.maxLevel}`
            const dmgText = `Damage: ${Math.round(recipeData.durabilityMultiplier * 100)}%`

            drawWordWrap(graphics, Client.font, Component.literal(enchantName).withStyle(ChatFormatting.AQUA), 67, 4, 120, 0xffdba6, true)
            drawWordWrap(graphics, Client.font, Component.literal(levelText), 120, 24, 90, 0xCCCCCC, true)
            drawWordWrap(graphics, Client.font, Component.literal(dmgText), 120, 36, 90, 0xCCCCCC, true)
        })
    })
})