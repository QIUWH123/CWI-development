ServerEvents.recipes(event => {

  event.replaceOutput({output:'minecraft:bone_meal'},'minecraft:bone_meal','kubejs:bone_powder')

  event.shapeless('2x minecraft:stick','minecraft:bamboo')
  event.shapeless('2x rusticdelight:cotton_seeds','rusticdelight:cotton_boll')
  event.shapeless('3x rusticdelight:cotton_seeds','miners_delight:gossypium')

  event.recipes.create.compacting('createdieselgenerators:chip_wood_beam','2x createdieselgenerators:chip_wood_block')
  event.recipes.create.compacting('kubejs:rubber', 'kubejs:sticky_resin')
  event.recipes.create.compacting('kubejs:sticky_resin', Fluid.of('kubejs:molten_sticky_resin', 100))
  
  event.recipes.create.filling('minecraft:wet_sponge', [Fluid.of('minecraft:water', 1000), 'minecraft:sponge'])

  event.recipes.create.milling(['2x kubejs:ash', Item.of('kubejs:ash').withChance(0.75), Item.of('miners_delight:silverfish_eggs').withChance(0.03)], 'kubejs:depleted_dirt')
  event.recipes.create.milling('kubejs:powdered_fermento_mycetes', 'kubejs:dry_fermento_mycetes')
  event.recipes.create.milling('kubejs:bone_powder', 'biomancy:bone_fragments')
  event.recipes.create.milling(['2x minecraft:string',Item.of('minecraft:string').withChance(0.25)], 'miners_delight:gossypium')
  event.recipes.create.milling(['minecraft:string',Item.of('minecraft:string').withChance(0.5)], 'rusticdelight:cotton_boll')
  event.recipes.create.milling(['create:wheat_flour',Item.of('create:wheat_flour').withChance(0.5)], 'ratatouille:wheat_kernels')
  event.recipes.create.milling(['2x createaddition:biomass', Item.of('createaddition:biomass').withChance(0.25)], 'ratatouille:compost_residue')
  
  event.recipes.create.crushing(['2x createdieselgenerators:wood_chip', Item.of('createdieselgenerators:wood_chip').withChance(0.5)], 'minecraft:bamboo')

  event.recipes.create.crushing([Item.of('2x kubejs:darkslate_powder').withChance(0.75), Item.of('kubejs:darkslate_powder').withChance(0.57), Item.of('kubejs:dark_ash').withChance(0.27), Item.of('kubejs:acidolys_bacillus').withChance(0.83), Item.of('kubejs:acidolys_bacillus').withChance(0.73), Item.of('kubejs:dark_ash').withChance(0.58)], 'kubejs:acidified_darkslate')
  event.recipes.create.crushing([Item.of('2x kubejs:claystone_powder').withChance(0.75), Item.of('kubejs:claystone_powder').withChance(0.57), Item.of('kubejs:ash').withChance(0.27), Item.of('kubejs:dry_carbofusor_spirillum').withChance(0.58), Item.of('kubejs:dry_putrelys_sporogenes').withChance(0.73), Item.of('biomancy:bone_fragments').withChance(0.73)], 'kubejs:claystone_biological_sediment')
  event.recipes.create.crushing([Item.of('2x kubejs:ash').withChance(0.75), Item.of('kubejs:ash').withChance(0.57), Item.of('biomancy:stone_powder').withChance(0.27), Item.of('kubejs:dust-covered_seeds').withChance(0.078), Item.of('kubejs:dry_fermento_mycetes').withChance(0.042), Item.of('biomancy:bone_fragments').withChance(0.43)], 'kubejs:dry_biological_sediment')
  event.recipes.create.crushing([Item.of('ratatouille:compost_mass').withChance(0.37), Item.of('kubejs:muddy_sugar_cane').withChance(0.13), Item.of('kubejs:muddy_bamboo').withChance(0.17), Item.of('kubejs:nitrofix_rhizobium').withChance(0.11), Item.of('biomancy:stone_powder').withChance(0.57), Item.of('biomancy:bone_fragments').withChance(0.43)], 'kubejs:wet_biological_sediment')
  event.recipes.create.crushing(['2x kubejs:ash', Item.of('kubejs:ash').withChance(0.75), Item.of('kubejs:ash').withChance(0.37), Item.of('kubejs:ash').withChance(0.11)], 'kubejs:depleted_dirt')

  event.recipes.create.mixing('farmersdelight:organic_compost', ['2x ratatouille:compost_residue', 'minecraft:dirt', Fluid.of('minecraft:water', 250)])

  event.recipes.create.mixing(['3x minecraft:bone_meal'], ['2x kubejs:bone_powder', 'biomancy:stone_powder'])

  event.recipes.create.mixing('kubejs:sticky_resin', 'kubejs:rubber').heated()
  event.recipes.create.mixing(Fluid.of('kubejs:molten_sticky_resin', 100), 'kubejs:sticky_resin').heated()
  event.recipes.create.mixing(Fluid.of('createdieselgenerators:biodiesel', 100), [Fluid.of('createdieselgenerators:ethanol', 50), Fluid.of('createdieselgenerators:plant_oil', 50)])
  event.recipes.create.mixing(['minecraft:bamboo'], ['kubejs:muddy_bamboo', {fluidTag: "cwi:water", amount: 500}])
  event.recipes.create.mixing(['minecraft:sugar_cane'], ['kubejs:muddy_sugar_cane', {fluidTag: "cwi:water", amount: 500}])
  event.recipes.create.mixing('createaddition:biomass', ['#createaddition:plants', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
  event.recipes.create.mixing('createaddition:biomass', ['#minecraft:saplings', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
  event.recipes.create.mixing('createaddition:biomass', ['#minecraft:flowers', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
  event.recipes.create.mixing('createaddition:biomass', ['#minecraft:leaves', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
  event.recipes.create.mixing('2x createaddition:biomass', ['#forge:crops', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()
  event.recipes.create.mixing('2x createaddition:biomass', ['#createaddition:plant_foods', Fluid.of('createdieselgenerators:plant_oil', 100)]).heated()

  event.recipes.create.mixing(Fluid.of('minecraft:lava', 100), '#cwi:cobbled_stones').superheated()
  event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 250), ['minecraft:sugar','createaddition:biomass', Fluid.of('kubejs:distilled_water', 250)])
  event.recipes.create.mixing(Fluid.of('createaddition:bioethanol', 250), [Fluid.of('kubejs:syrup', 125),'createaddition:biomass', Fluid.of('kubejs:distilled_water', 125)])
  event.recipes.create.mixing('createaddition:biomass', ['createaddition:biomass_pellet', Fluid.of('minecraft:water', 50)])
  event.recipes.create.mixing('minecraft:clay_ball', ['kubejs:clay_powder', Fluid.of('minecraft:water', 50)])
  event.recipes.create.mixing('3x minecraft:gunpowder', ['3x tfmg:nitrate_dust', '2x tfmg:sulfur_dust', 'kubejs:charcoal_powder'])
  event.recipes.create.mixing('minecraft:glow_ink_sac', ['darkerdepths:glow_grime', 'minecraft:ink_sac'])

  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 25), ["minecraft:oak_log", "minecraft:oak_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 50), ["minecraft:spruce_log", "minecraft:spruce_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:jungle_log", "minecraft:jungle_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 50), ["minecraft:dark_oak_log", "minecraft:dark_oak_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 60), ["minecraft:cherry_log", "minecraft:cherry_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:birch_log", "minecraft:birch_leaves"])
  event.recipes.rubberworksSapping(Fluid.of("kubejs:molten_sticky_resin", 40), ["minecraft:acacia_log", "minecraft:acacia_leaves"])
  
  event.recipes.rubberworksCompressing([Item.of('kubejs:stone_powder').withChance(0.73), Item.of('kubejs:rhyolite_powder').withChance(0.26), Item.of('kubejs:diorite_powder').withChance(0.32), Item.of('kubejs:granite_powder').withChance(0.43)], Fluid.of("minecraft:lava", 500)).superheated()
  
  event.custom({
    "type": "createdieselgenerators:distillation",
    "ingredients": [
      {
        "fluid": "kubejs:wood_vinegar",
        "amount": 500
      }
    ],
    "heatRequirement": "heated",
    "processingTime": 200,
    "results": [
      {
        "fluid": "minecraft:water",
        "amount": 400
      },
      {
        "fluid": "kubejs:methanol",
        "amount": 100
      }
    ]
  })
    
  event.custom({
    "type": "ratatouille:threshing",
    "ingredients": [
      {
        "item": "kubejs:depleted_dirt"
      }
    ],
    "processingTime": 100,
    "results": [
      {
        "item": "kubejs:ash",
        "count": 2
      },
      {
        "item": "kubejs:ash",
        "count": 1,
        "chance": 0.5
      },
      {
        "item": "miners_delight:silverfish_eggs",
        "count": 1,
        "chance": 0.09
      },
      {
        "item": "miners_delight:arthropod",
        "count": 1,
        "chance": 0.03
      }
    ]
  })

  event.custom({
    "type": "ratatouille:threshing",
    "ingredients": [
      {
        "item": "miners_delight:gossypium"
      }
    ],
    "processingTime": 100,
    "results": [
      {
        "item": "rusticdelight:cotton_boll",
        "count": 2
      },
      {
        "item": "rusticdelight:cotton_boll",
        "count": 1,
        "chance": 0.5
      }
    ]
  })

  event.custom({
    "type":"vintageimprovements:centrifugation",
    "ingredients": [
      {"item": "kubejs:claystone_powder"},
      {"item": "kubejs:claystone_powder"}
    ],"results": [
      {"item": "kubejs:stone_powder","count": 1},
      {"item": "kubejs:clay_powder","count": 1}
    ],"processingTime": 10
  })

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
      event.custom({"type":"vintageimprovements:vibrating","ingredients": [ {"item": "kubejs:dust-covered_seeds"}],"results": [{"item": "kubejs:dust-covered_seeds"}],"processingTime": 100})
    ]
  )
  .transitionalItem('kubejs:dust-covered_seeds')
  .loops(1)

})