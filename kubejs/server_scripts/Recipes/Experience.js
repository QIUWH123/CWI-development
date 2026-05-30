ServerEvents.recipes(event => {

    event.forEachRecipe({ type: 'minecraft:smelting' }, recipe => {
        recipe.xp(0);
    });
    
    event.forEachRecipe({ type: 'minecraft:blasting' }, recipe => {
        recipe.xp(0);
    });
    
    event.forEachRecipe({ type: 'minecraft:smoking' }, recipe => {
        recipe.xp(0);
    });
    
    event.forEachRecipe({ type: 'minecraft:campfire_cooking' }, recipe => {
        recipe.xp(0);
    });
    
});