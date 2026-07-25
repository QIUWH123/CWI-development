ServerEvents.recipes(event => {
    
    event.recipes.minecraft.stonecutting(`4x tfmg:concrete_upper_eaves`, `tfmg:concrete`)
    event.recipes.minecraft.stonecutting(`4x tfmg:rebar_concrete_upper_eaves`, `tfmg:rebar_concrete`)

    global.colors.forEach(color => {
        event.recipes.minecraft.stonecutting(`4x tfmg:${color}_concrete_upper_eaves`, `tfmg:${color}_concrete`)
        event.recipes.minecraft.stonecutting(`4x tfmg:${color}_rebar_concrete_upper_eaves`, `tfmg:${color}_rebar_concrete`)
    })

    global.frameMaterials.forEach(material => {
        let mat = global.materialTypes.find(m => m.id === material)
        event.shaped(`tfmg:${material}_frame`, [ 'ABA', 'B B', 'ABA' ], { A: mat.items.rod, B: mat.items.wire } )

        event.recipes.minecraft.stonecutting(`3x tfmg:${material}_frame_panel`, `tfmg:${material}_frame`)
        event.recipes.minecraft.stonecutting(`4x tfmg:${material}_frame_upper_eaves`, `tfmg:${material}_frame`)
        event.recipes.minecraft.stonecutting(`4x tfmg:${material}_frame_lower_eaves`, `tfmg:${material}_frame`)
    })
})