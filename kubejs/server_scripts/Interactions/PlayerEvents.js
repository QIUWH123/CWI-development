PlayerEvents.tick(event => {
    const player = event.player
    if (globalTickCounter % 10) return

    // Hot Item Effect
        if (player.inventory.count("#cwi:hot_items") > 0) {
            player.attack(player.damageSources().inFire(), 1)
        }
})

MEJSEvents.standOnFluid(event=>{
    const entity = event.entity
    if (globalTickCounter % 10) return

    const moltenHotFluids = [
        'kubejs:molten_aluminum',
        'kubejs:molten_vanadium',
        'kubejs:molten_tin',
        'kubejs:molten_silver',
        'kubejs:molten_andesite_alloy',
        'kubejs:molten_zinc',
        'kubejs:molten_gold',
        'kubejs:molten_iron',
        'kubejs:molten_pig_iron',
        'kubejs:molten_cast_iron',
        'kubejs:molten_copper',
        'kubejs:molten_brass',
        'kubejs:molten_lead',
        'kubejs:molten_cobalt',
        'kubejs:molten_nickel',
        'kubejs:molten_constantan',
        'kubejs:molten_bronze',
        'kubejs:molten_electrum',
        'kubejs:molten_glass'
    ]

    const acidicFluids = [
        ['kubejs:redstone_acid', 3],
        ['kubejs:concentrated_sulfuric_acid', 5],
        ['kubejs:nitric_acid', 4],
        ['kubejs:muriatic_acid', 4.5],
        ['kubejs:acetic_acid', 2],
        ['kubejs:propionic_acid', 1],
        ['kubejs:lactic_acid', 2],
        ['kubejs:wood_vinegar', 0.5],
        ['kubejs:humic_acid_slurry', 0.5],
        ['kubejs:sulfuric_acid', 4]
    ]

    moltenHotFluids.forEach(fluidid=>{
        if (event.fluidState.fluidType != Fluid.of(fluidid).fluid.fluidType) return
            entity.attack(entity.damageSources().lava(), 7)
            entity.setSecondsOnFire(3)
            entity.potionEffects.add('minecraft:slowness', 10, 6, true, true)
    })
    acidicFluids.forEach(([fluidid, damage])=>{
        if (event.fluidState.fluidType != Fluid.of(fluidid).fluid.fluidType) return
            entity.attack(entity.damageSources().magic(), damage)
            entity.potionEffects.add('biomancy:armor_shred', 100, 1, true, true)
            entity.potionEffects.add('biomancy:corrosive', 20, 1, true, true)
    })
})