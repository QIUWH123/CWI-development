JEIAddedEvents.registerRecipeCatalysts(event => {
    const { data, jeiHelpers } = event.data
    let vanillaItem = Item.of('minecraft:crafting_table')
    let vanillaRecipeType = jeiHelpers.getRecipeType(ResourceLocation.fromNamespaceAndPath('minecraft', 'crafting')).get()
    data["addRecipeCatalyst(net.minecraft.world.item.ItemStack,mezz.jei.api.recipe.RecipeType[])"]
        (vanillaItem, vanillaRecipeType)
})