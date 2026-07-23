function drawWordWrap(g, font, text, x, y, maxWidth, color, shadow) {
    for (let iter = font.split(text, maxWidth).iterator(); iter.hasNext(); y += font.lineHeight + 1) {
        let line = iter.next()
        g['drawString(net.minecraft.client.gui.Font,net.minecraft.util.FormattedCharSequence,float,float,int,boolean)'](font, line, x, y, color, shadow)
    }
}

function getEnchantName(enchantId) {
    return Component.translate('enchantment.' + enchantId.replace(':', '.')).getString()
}

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

    if (global.upgradeRecipes) {
        global.upgradeRecipes.forEach(function (recipe) {
            const ingArr = []
            for (let i = 0; i < recipe.ingredients.length; i++) {
                ingArr.push(recipe.ingredients[i])
            }

            builder.add({
                inputs: Ingredient.of(recipe.input),
                ingredients: ingArr,
                enchantId: recipe.enchantId,
                maxLevel: recipe.maxLevel,
                durabilityMultiplier: recipe.durabilityMultiplier,
                exampleInput: recipe.input
            })
        })
    }
})

JEIAddedEvents.registerCategories(event => {
    const { jeiHelpers } = event.data
    const { guiHelper } = jeiHelpers

    event.custom('kubejs:equipment_upgrades', category => {
        category.title(Component.translate('Equipment Upgrades'))
            .setWidth(178)
            .setHeight(72)
            .background(guiHelper.createBlankDrawable(0, 0))
            .iconSupplier(() => new $DoubleItemIcon(
                () => Item.of('minecraft:crafting_table'),
                () => Item.of('kubejs:small_hammer')
            ))

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const data = recipe.recipeData

            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT)
                .addIngredients(data.inputs)

            const materials = data.ingredients || []
            const rows = []
            for (let i = 0; i < materials.length; i += 2) {
                rows.push(materials.slice(i, i + 2))
            }
            const baseY = 10
            const centerX = 18
            rows.forEach((row, rowIndex) => {
                const y = baseY + rowIndex * 18
                const startX = centerX - (row.length - 1) * 9
                row.forEach((mat, col) => {
                    layoutBuilder.addSlot($RecipeIngredientRole.INPUT, startX + col * 18, y)
                        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                        .addItemStack(Item.of(mat))
                })
            })
        })

        category.setDrawHandler((recipe, slots, graphics, mx, my) => {
            const recipeData = recipe.recipeData

            $AllGuiTextures.JEI_SHADOW.render(graphics, 63, 48)

            const exampleItem = recipeData.exampleInput || 'minecraft:iron_sword'
            drawLargeItem(graphics, guiHelper, Item.of(exampleItem), 89, 38, 2.0)

            const enchantName = getEnchantName(recipeData.enchantId)
            const levelText = `Max lv: ${recipeData.maxLevel}`
            const dmgText = `Damage: ${Math.round(recipeData.durabilityMultiplier * 100)}%`

            drawWordWrap(graphics, Client.font, Component.literal(enchantName).withStyle(ChatFormatting.AQUA), 66, 4, 120, 0xffdba6, true)
            drawWordWrap(graphics, Client.font, Component.literal(levelText), 120, 24, 90, 0xCCCCCC, true)
            drawWordWrap(graphics, Client.font, Component.literal(dmgText), 120, 36, 90, 0xCCCCCC, true)
        })
    })
})