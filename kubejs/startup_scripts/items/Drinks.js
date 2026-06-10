const potions = [
    {id: 'sweetcord_beer', color: 0xE3C16F, effect: {id: 'minecraft:haste', duration: 2400, amplifier: 0}},
    {id: 'apple_cidar', color: 0xD4A373, effect: {id: 'minecraft:slow_falling', duration: 2400, amplifier: 0}},
    {id: 'carrot_ale', color: 0xE58E26, effect: {id: 'minecraft:night_vision', duration: 2400, amplifier: 0}},
    {id: 'berry_wine', color: 0x8B1A3A, effect: {id: 'minecraft:speed', duration: 2400, amplifier: 0}},
    {id: 'wheat_kvas', color: 0xC2A878, effect: {id: 'minecraft:jump_boost', duration: 2400, amplifier: 0}},
    {id: 'sake', color: 0xF5F5E6, effect: {id: 'kubejs:reach', duration: 2400, amplifier: 0}}
];

StartupEvents.registry('item', event => {

    potions.forEach(potions => {
        const itemID = potions.id
        const effect = potions.effect
        event.create(itemID)
            .maxStackSize(16)
            .useAnimation('drink')
            .food(food => {food
                .effect(effect.id, effect.duration, effect.amplifier, 1)
                .alwaysEdible()
                .eaten(ctx => {
                    ctx.player.give('minecraft:glass_bottle')
                })
            })  
            .texture(`kubejs:item/drinks/${itemID}`)
            .tooltip(Text.translate(`item.kubejs.${itemID}.tooltip`));
    })
})

StartupEvents.registry('fluid', event => {
    potions.forEach(potions => {
        event.create(potions.id)
            .thinTexture(potions.color)
            .noBlock()
    })
})