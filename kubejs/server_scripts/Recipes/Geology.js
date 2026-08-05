ServerEvents.recipes(event => {

// Output Replacement

    event.replaceOutput({ output: 'minecraft:bone_meal' }, 'minecraft:bone_meal', 'kubejs:bone_powder')

// Shapeless

    event.shapeless('2x minecraft:lime_dye', 'createaddition:biomass_pellet')
    event.shapeless('2x minecraft:green_dye', 'ratatouille:compost_mass')
    event.shapeless('2x minecraft:brown_dye', 'ratatouille:compost_residue')
    event.shapeless('minecraft:white_dye', 'kubejs:bone_powder')
    event.shapeless('2x minecraft:stick', 'minecraft:bamboo')
    event.shapeless('createdieselgenerators:wood_chip', 'minecraft:stick')
    event.shapeless('2x rusticdelight:cotton_seeds', 'rusticdelight:cotton_boll')
    event.shapeless('3x rusticdelight:cotton_seeds', 'miners_delight:gossypium')

// Compacting

    event.recipes.create.compacting('createdieselgenerators:chip_wood_beam', '2x createdieselgenerators:chip_wood_block')
    event.recipes.create.compacting('kubejs:rubber', 'kubejs:sticky_resin')
    event.recipes.create.compacting('kubejs:sticky_resin', Fluid.of('kubejs:molten_sticky_resin', 100))

// Filling

    event.recipes.create.filling('minecraft:wet_sponge', [Fluid.of('minecraft:water', 1000), 'minecraft:sponge'])

// Cooking

    event.recipes.minecraft.campfire_cooking('kubejs:cooked_spider_meat', 'kubejs:spider_meat')
    event.recipes.minecraft.smoking('kubejs:cooked_spider_meat', 'kubejs:spider_meat')
    event.recipes.minecraft.smelting('kubejs:cooked_spider_meat', 'kubejs:spider_meat')

// Mixing

    event.recipes.create.mixing('minecraft:wheat_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_wheat_seeds']).processingTime(200)
    event.recipes.create.mixing('minecraft:melon_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_melon_seeds']).processingTime(200)
    event.recipes.create.mixing('minecraft:pumpkin_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_pumpkin_seeds']).processingTime(200)
    event.recipes.create.mixing('minecraft:beetroot_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_beetroot_seeds']).processingTime(200)
    event.recipes.create.mixing('farmersdelight:tomato_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_tomato_seeds']).processingTime(200)
    event.recipes.create.mixing('farmersdelight:cabbage_seeds', [AddFluid('50 #cwi:water'), 'kubejs:dry_cabbage_seeds']).processingTime(200)

    event.recipes.create.mixing('farmersdelight:organic_compost', ['2x ratatouille:compost_residue', 'minecraft:dirt', Fluid.of('minecraft:water', 250)])
    event.recipes.create.mixing('3x minecraft:bone_meal', ['2x kubejs:bone_powder', 'biomancy:stone_powder'])

    event.recipes.create.mixing('kubejs:sticky_resin', 'kubejs:rubber').heated().processingTime(600)
    event.recipes.create.mixing(Fluid.of('kubejs:molten_sticky_resin', 100), 'kubejs:sticky_resin').heated().processingTime(600)
    event.recipes.create.mixing(Fluid.of('createdieselgenerators:biodiesel', 100), [Fluid.of('createdieselgenerators:ethanol', 50), Fluid.of('createdieselgenerators:plant_oil', 50)])
    event.recipes.create.mixing('minecraft:bamboo', ['kubejs:muddy_bamboo', AddFluid('500 #cwi:water')])
    event.recipes.create.mixing('minecraft:sugar_cane', ['kubejs:muddy_sugar_cane', AddFluid('500 #cwi:water')])
    event.recipes.create.mixing('createaddition:biomass', ['#createaddition:plants', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('createaddition:biomass', ['#minecraft:saplings', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('createaddition:biomass', ['#minecraft:flowers', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('createaddition:biomass', ['#minecraft:leaves', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('2x createaddition:biomass', ['#forge:crops', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('2x createaddition:biomass', ['#createaddition:plant_foods', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
    event.recipes.create.mixing('kubejs:carbon-sealed_quartzite_base', ['kubejs:lapped_quartzite_base', 'kubejs:coal_powder', AddFluid('100 #cwi:water')]).heated().processingTime(1200)

    event.recipes.create.mixing(Fluid.of('minecraft:lava', 100), '#cwi:cobbled_stones').superheated()
    event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 250), ['minecraft:sugar', 'createaddition:biomass', Fluid.of('kubejs:distilled_water', 250)])
    event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 250), [Fluid.of('kubejs:syrup', 125), 'createaddition:biomass', Fluid.of('kubejs:distilled_water', 125)])
    event.recipes.create.mixing('createaddition:biomass', ['createaddition:biomass_pellet', Fluid.of('minecraft:water', 50)])
    event.recipes.create.mixing('minecraft:clay_ball', ['kubejs:clay_powder', Fluid.of('minecraft:water', 50)])
    event.recipes.create.mixing('3x minecraft:gunpowder', ['3x tfmg:nitrate_dust', '2x kubejs:sulfur_powder', 'kubejs:charcoal_powder'])
    event.recipes.create.mixing('minecraft:glow_ink_sac', ['darkerdepths:glow_grime', 'minecraft:ink_sac'])
    event.recipes.create.mixing('minecraft:sugar', Fluid.of("create:honey", 100)).heated()

// Milling

    event.recipes.create.milling(['3x minecraft:lime_dye', Item.of('minecraft:light_gray_dye').withChance(0.1)], 'createaddition:biomass_pellet')
    event.recipes.create.milling(['3x minecraft:green_dye', Item.of('minecraft:brown_dye').withChance(0.1)], 'ratatouille:compost_mass')
    event.recipes.create.milling(['2x minecraft:white_dye', Item.of('minecraft:light_gray_dye').withChance(0.1)], 'kubejs:bone_powder')
    event.recipes.create.milling(['2x kubejs:ash', Item.of('kubejs:ash').withChance(0.75), Item.of('miners_delight:silverfish_eggs').withChance(0.03)], 'kubejs:depleted_dirt')
    event.recipes.create.milling('kubejs:powdered_fermento_mycetes', 'kubejs:dry_fermento_mycetes')
    event.recipes.create.milling('kubejs:bone_powder', 'biomancy:bone_fragments')
    event.recipes.create.milling(['2x minecraft:string', Item.of('minecraft:string').withChance(0.25)], 'miners_delight:gossypium')
    event.recipes.create.milling(['minecraft:string', Item.of('minecraft:string').withChance(0.5)], 'rusticdelight:cotton_boll')
    event.recipes.create.milling(['create:wheat_flour', Item.of('create:wheat_flour').withChance(0.5)], 'ratatouille:wheat_kernels')
    event.recipes.create.milling(['2x createaddition:biomass', Item.of('createaddition:biomass').withChance(0.25)], 'ratatouille:compost_residue')
    event.recipes.create.milling(['3x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.25)], 'minecraft:bamboo')
    event.recipes.create.milling(['createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.5)], 'minecraft:stick')
    event.recipes.create.milling(['2x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.75)], 'minecraft:dead_bush')

// Crushing

    event.recipes.create.crushing([Item.of('2x kubejs:darkslate_powder').withChance(0.75), Item.of('kubejs:darkslate_powder').withChance(0.57), Item.of('kubejs:dark_ash').withChance(0.27), Item.of('kubejs:acidolys_bacillus').withChance(0.83), Item.of('kubejs:acidolys_bacillus').withChance(0.73), Item.of('kubejs:dark_ash').withChance(0.58)], 'kubejs:acidified_darkslate')
    event.recipes.create.crushing([Item.of('2x kubejs:claystone_powder').withChance(0.75), Item.of('kubejs:claystone_powder').withChance(0.57), Item.of('kubejs:ash').withChance(0.27), Item.of('kubejs:dry_carbofusor_spirillum').withChance(0.58), Item.of('kubejs:dry_putrelys_sporogenes').withChance(0.73), Item.of('biomancy:bone_fragments').withChance(0.73)], 'kubejs:claystone_biological_sediment')
    event.recipes.create.crushing([Item.of('2x kubejs:ash').withChance(0.75), Item.of('kubejs:ash').withChance(0.57), Item.of('biomancy:stone_powder').withChance(0.27), Item.of('kubejs:dust-covered_seeds').withChance(0.078), Item.of('kubejs:dry_fermento_mycetes').withChance(0.042), Item.of('biomancy:bone_fragments').withChance(0.43)], 'kubejs:dry_biological_sediment')
    event.recipes.create.crushing([Item.of('ratatouille:compost_mass').withChance(0.37), Item.of('kubejs:muddy_sugar_cane').withChance(0.13), Item.of('kubejs:muddy_bamboo').withChance(0.17), Item.of('kubejs:nitrofix_rhizobium').withChance(0.11), Item.of('biomancy:stone_powder').withChance(0.57), Item.of('biomancy:bone_fragments').withChance(0.43)], 'kubejs:wet_biological_sediment')
    event.recipes.create.crushing(['2x kubejs:ash', Item.of('kubejs:ash').withChance(0.75), Item.of('kubejs:ash').withChance(0.37), Item.of('kubejs:ash').withChance(0.11)], 'kubejs:depleted_dirt')

// Rubberworks Sapping

    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 25), ["minecraft:oak_log", "minecraft:oak_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 50), ["minecraft:spruce_log", "minecraft:spruce_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:jungle_log", "minecraft:jungle_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 50), ["minecraft:dark_oak_log", "minecraft:dark_oak_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 60), ["minecraft:cherry_log", "minecraft:cherry_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:birch_log", "minecraft:birch_leaves"])
    event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:acacia_log", "minecraft:acacia_leaves"])

// Rubberworks Compressing

    event.recipes.rubberworksCompressing([Item.of('kubejs:stone_powder').withChance(0.35), Item.of('kubejs:rhyolite_powder').withChance(0.13), Item.of('kubejs:diorite_powder').withChance(0.16), Item.of('kubejs:granite_powder').withChance(0.21)], Fluid.of("minecraft:lava", 100))
    event.recipes.rubberworksCompressing([Item.of('minecraft:sugar').withChance(0.57), Item.of('minecraft:sugar').withChance(0.21)], Fluid.of("create:honey", 100))

// Distillation

    distillation(event, "heated",
        [ AddFluid('500 kubejs:wood_vinegar') ],
        [ AddFluid('400 minecraft:water'), AddFluid('100 kubejs:methanol') ],
        200
    )

// Threshing

    threshing(event,
        [ AddItem('kubejs:depleted_dirt') ],
        [
            AddItem('2 kubejs:ash'),
            AddItem('1 kubejs:ash', 0.5),
            AddItem('1 miners_delight:silverfish_eggs', 0.09),
            AddItem('1 miners_delight:arthropod', 0.03)
        ],
        100
    )

    threshing(event,
        [ AddItem('miners_delight:gossypium') ],
        [
            AddItem('2 rusticdelight:cotton_boll'),
            AddItem('1 rusticdelight:cotton_boll', 0.5)
        ],
        100
    )

// Centrifugation

    centrifuging(event, [AddItem('kubejs:claystone_powder'), AddItem('kubejs:claystone_powder')], [AddItem('kubejs:stone_powder'), AddItem('kubejs:clay_powder')], 10)

// Fermentation

    addFermentingRecipes(event,
        [
            AddItem('3 kubejs:fermento_mycetes'),
            AddFluid('250 kubejs:distilled_water'),
            AddFluid('50 createdieselgenerators:ethanol')
        ],
        [
            AddItem('kubejs:yeast_paste')
        ],
        100, undefined, ['basin', 'bulk']
    )

// Sequenced Assembly

    event.recipes.create.sequenced_assembly(
        'kubejs:whetstone',
        'minecraft:tuff',
        [
            polishing(event, 2, AddItem('kubejs:incomplete_whetstone'), [AddItem('kubejs:incomplete_whetstone')], 60),
            event.recipes.create.pressing('kubejs:incomplete_whetstone', 'kubejs:incomplete_whetstone'),
            event.recipes.create.pressing('kubejs:incomplete_whetstone', 'kubejs:incomplete_whetstone')
        ]
    )
    .transitionalItem('kubejs:incomplete_whetstone')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'kubejs:lapped_quartzite_base',
        'kubejs:cobbled_quartzite',
        [
            event.recipes.create.pressing('kubejs:incomplete_quartzite_base', 'kubejs:incomplete_quartzite_base'),
            event.recipes.create.cutting('kubejs:incomplete_quartzite_base', 'kubejs:incomplete_quartzite_base')
        ]
    )
    .transitionalItem('kubejs:incomplete_quartzite_base')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        'kubejs:fine_whetstone',
        'kubejs:carbon-sealed_quartzite_base',
        [
            event.recipes.create.pressing('kubejs:incomplete_fine_whetstone', 'kubejs:incomplete_fine_whetstone'),
            event.recipes.create.filling('kubejs:incomplete_fine_whetstone', ['kubejs:incomplete_fine_whetstone', AddFluid('100 #cwi:water')]),
            event.recipes.create.filling('kubejs:incomplete_fine_whetstone', ['kubejs:incomplete_fine_whetstone', AddFluid('100 #cwi:water')]),
            polishing(event, 2, AddItem('kubejs:incomplete_fine_whetstone'), [AddItem('kubejs:incomplete_fine_whetstone')], 60)
        ]
    )
    .transitionalItem('kubejs:incomplete_fine_whetstone')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        'kubejs:soaked_depleted_dirt',
        'kubejs:depleted_dirt',
        [
            event.recipes.create.filling('kubejs:wet_depleted_dirt', ['kubejs:wet_depleted_dirt', Fluid.of('minecraft:water', 250)]),
            event.recipes.create.filling('kubejs:wet_depleted_dirt', ['kubejs:wet_depleted_dirt', Fluid.of('minecraft:water', 250)]),
            event.recipes.create.filling('kubejs:wet_depleted_dirt', ['kubejs:wet_depleted_dirt', Fluid.of('minecraft:water', 250)])
        ]
    )
    .transitionalItem('kubejs:wet_depleted_dirt')
    .loops(1)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:dust-covered_seeds').withChance(1),
            Item.of('kubejs:dry_beetroot_seeds').withChance(1),
            Item.of('kubejs:dry_wheat_seeds').withChance(1),
            Item.of('kubejs:dry_melon_seeds').withChance(1),
            Item.of('kubejs:dry_pumpkin_seeds').withChance(1),
            Item.of('kubejs:dry_tomato_seeds').withChance(1),
            Item.of('kubejs:dry_cabbage_seeds').withChance(1),
            Item.of('kubejs:ash').withChance(3)
        ],
        'kubejs:dust-covered_seeds',
        [
            event.recipes.create.filling('kubejs:dust-covered_seeds', ['kubejs:dust-covered_seeds', Fluid.of('minecraft:water', 50)])
        ]
    )
    .transitionalItem('kubejs:dust-covered_seeds')
    .loops(3)

    event.recipes.create.sequenced_assembly(
        [
            Item.of('kubejs:dust-covered_seeds').withChance(1),
            Item.of('kubejs:dry_beetroot_seeds').withChance(1),
            Item.of('kubejs:dry_wheat_seeds').withChance(1),
            Item.of('kubejs:dry_melon_seeds').withChance(1),
            Item.of('kubejs:dry_pumpkin_seeds').withChance(1),
            Item.of('kubejs:dry_tomato_seeds').withChance(1),
            Item.of('kubejs:dry_cabbage_seeds').withChance(1)
        ],
        'kubejs:dust-covered_seeds',
        [
            vibrating(event, AddItem('kubejs:dust-covered_seeds'), [AddItem('kubejs:dust-covered_seeds')], 200)
        ]
    )
    .transitionalItem('kubejs:dust-covered_seeds')
    .loops(1)

})