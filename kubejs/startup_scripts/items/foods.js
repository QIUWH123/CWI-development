StartupEvents.registry('item', event => {

    event.create('dry_beetroot_seeds')
        .texture('minecraft:item/beetroot_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('dry_melon_seeds')
        .texture('minecraft:item/melon_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('dry_pumpkin_seeds')
        .texture('minecraft:item/pumpkin_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('dry_tomato_seeds')
        .texture('farmersdelight:item/tomato_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('dry_cabbage_seeds')
        .texture('farmersdelight:item/cabbage_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('dry_wheat_seeds')
        .texture('minecraft:item/wheat_seeds')
        .color(0xB8AE93)
        .food(food => {
            food.hunger(1)
                .saturation(0.5)
        })

    event.create('spider_meat')
        .texture('kubejs:item/foods/spider_meat')
        .food(food => {
            food.hunger(3)
                .saturation(1)
        })

    event.create('cooked_spider_meat')
        .texture('kubejs:item/foods/cooked_spider_meat')
        .food(food => {
            food.hunger(6)
                .saturation(1)
        })

// Apple Foods From Global Data

    global.apples.forEach(([material, hunger, saturation, effects]) => {
        const itemName = `${material}_apple`
        const baseTexture = `kubejs:item/foods/${itemName}`
        
        const applyFood = (food, hungerMul, satMul, durMul) => {
            food.hunger(hunger * hungerMul)
                .saturation(saturation * satMul)
                .alwaysEdible()
            effects.forEach(([effectId, duration, amplifier, showParticles]) => {
                food.effect(effectId, duration * durMul, amplifier, showParticles)
            })
        }

        event.create(itemName)
            .texture(baseTexture)
            .food(food => applyFood(food, 1, 1, 1))

        event.create(`charged_${itemName}`)
            .textureJson({
                layer0: baseTexture,
                layer1: 'kubejs:item/foods/apple_charged_overlay'
            })
            .food(food => applyFood(food, 1.5, 1, 1.25))

        event.create(`enchanted_${itemName}`)
            .textureJson({
                layer0: baseTexture,
                layer1: 'kubejs:item/foods/apple_enchanted_overlay'
            })
            .food(food => applyFood(food, 2, 1.5, 1.5))
    })
})