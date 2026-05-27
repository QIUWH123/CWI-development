LycheeEvents.customCondition('can_see_sky', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        return ctx.level.getBlock(ctx.getParam('lychee:block_pos')).canSeeSky ? times : 0;
    };
});

LycheeEvents.customCondition('is_noon', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isNoon = timeOfDay >= 5500 && timeOfDay <= 6500;

        return isNoon ? times : 0;
    };
});

LycheeEvents.customCondition('is_midnight', (event) => {
    event.condition.testFunc = (recipe, ctx, times) => {
        const timeOfDay = ctx.level.getDayTime() % 24000;
        const isMidnight = timeOfDay >= 17500 && timeOfDay <= 18500;

        return isMidnight ? times : 0;
    };
});