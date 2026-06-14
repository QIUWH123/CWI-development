const chlorine = 0xE8FF40
const sulfur = 0xFFE699

const catalysts = [
    ['cobalt_catalyst', 'cobalt', chlorine],
    ['sulfur_copper_catalyst', 'copper', sulfur],
    ['chlorine_copper_catalyst', 'copper', chlorine],
    ['iron_catalyst', 'iron', sulfur],
    ['nickel_catalyst', 'nickel', sulfur],
    ['vanadium_catalyst', 'vanadium', sulfur],
    ['platinum_catalyst', 'platinum', sulfur]
]

StartupEvents.registry('item', event => {
    catalysts.forEach(([name, base, type]) => {
        event.create(name)
            .textureJson({
                layer0: `kubejs:item/dusts/${base}_dust`,
                layer1: 'kubejs:item/catalyst'
            })
            .color(1, type)
    })
})