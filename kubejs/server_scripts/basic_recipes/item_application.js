ServerEvents.recipes(event => {

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "createdieselgenerators:chip_wood_block"
      },
      {
        "item": "vintageimprovements:andesite_sheet"
      }
    ],
    "results": [
      {
        "item": "create:andesite_casing"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "createdieselgenerators:chip_wood_block"
      },
      {
        "tag": "modpack:rubber"
      }
    ],
    "results": [
      {
        "item": "kubejs:sealed_wood"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:sealed_wood"
      },
      {
        "item": "create:copper_sheet"
      }
    ],
    "results": [
      {
        "item": "create:copper_casing"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:quality_sealed_wood"
      },
      {
        "item": "create:brass_sheet"
      }
    ],
    "results": [
      {
        "item": "create:brass_casing"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "create:brass_casing"
      },
      {
        "item": "createdeco:industrial_iron_sheet"
      }
    ],
    "results": [
      {
        "item": "kubejs:industrial_casing"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:harden_wood"
      },
      {
        "item": "tfmg:heavy_plate"
      }
    ],
    "results": [
      {
        "item": "tfmg:steel_casing"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:mechanical_arm_base"
      },
      {
        "item": "kubejs:robot_hand"
      }
    ],
    "results": [
      {
        "item": "create:mechanical_arm"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:mechanical_arm_base"
      },
      {
        "item": "kubejs:robot_pipette"
      }
    ],
    "results": [
      {
        "item": "fluid:pipette"
      }
    ]
  })

  event.custom({
    "type": "create:item_application",
    "ingredients": [
      {
        "item": "kubejs:mechanical_arm_base"
      },
      {
        "tag": "modpack:chemical_sprayer"
      }
    ],
    "results": [
      {
        "item": "createdieselgenerators:chemical_turret"
      }
    ]
  })

//sandpaperPolishing

  event.custom({
    "type": "create:sandpaper_polishing",
    "ingredients": [
      {
        "item": "kubejs:sealed_wood"
      }
    ],
    "results": [
      {
        "item": "kubejs:polished_sealed_wood"
      }
    ]
  })

  event.custom({
    "type": "create:sandpaper_polishing",
    "ingredients": [
      {
        "item": "minecraft:diamond"
      }
    ],
    "results": [
      {
        "item": "kubejs:polished_diamond"
      }
    ]
  })

  event.custom({
    "type": "create:sandpaper_polishing",
    "ingredients": [
      {
        "item": "geode_plus:nether_quartz_crystal_block"
      }
    ],
    "results": [
      {
        "item": "minecraft:quartz_block"
      }
    ]
  })

})
