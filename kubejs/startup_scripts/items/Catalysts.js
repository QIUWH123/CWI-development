const chlorine = 0xE8FF40
const sulfur = 0xFFE14A

const basedCatalysts = [
    ['cobalt_catalyst', 'cobalt', chlorine],
    ['sulfur_copper_catalyst', 'copper', sulfur],
    ['chlorine_copper_catalyst', 'copper', chlorine],
    ['iron_catalyst', 'iron', sulfur],
    ['nickel_catalyst', 'nickel', sulfur],
    ['platinum_catalyst', 'platinum', sulfur],
    ['silver_catalyst', 'silver', 0xD1FDFF],
    ['zeolite_catalyst', 'clay', sulfur]
]

const coloredCatalysts = [
    ['phosphoric_acid_catalyst', 0x4A2C2A, 0xA8E6CF],
    ['dehydrogenation_catalyst', 0x1B3B22, 0xE9C46A],
    ['oxidation_catalyst', 0x3A2C2C, 0xA0D2DB]
]

StartupEvents.registry('item', event => {
    basedCatalysts.forEach(([name, base, type]) => {
        event.create(name)
            .textureJson({
                layer0: `kubejs:item/powders/${base}_powder`,
                layer1: 'kubejs:item/catalyst'
            })
            .color(1, type)
    })
    coloredCatalysts.forEach(([name, baseColor, type]) => {
        event.create(name)
            .textureJson({
                layer0: `kubejs:item/powders/powder_middle`,
                layer1: 'kubejs:item/catalyst'
            })
            .color(0, baseColor)
            .color(1, type)
    })
})