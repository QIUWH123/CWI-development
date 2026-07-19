// minecraft 1.20.1 kubejs v6
const JEI_RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes')

JEIEvents.removeRecipes(event => {
    global.jeiRuntime.getRecipeManager()
        .createRecipeLookup(JEI_RecipeTypes.ANVIL)
        .get()
        .forEach(recipe => {
            // 右输入是附魔书就隐藏
            if (recipe.getRightInputs()[0] == "minecraft:enchanted_book") {
                global.jeiRuntime.recipeManager.hideRecipes(JEI_RecipeTypes.ANVIL, [recipe])
            }
        })
})