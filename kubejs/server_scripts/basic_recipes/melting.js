ServerEvents.recipes(event => {

  function tableCasting(mold,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_table",
      "ingredients": [
        {
          "item": mold
        },
        {
          "amount": amount,
          "fluid": input
        }
      ],
      "processingTime": time,
      "result": {
        "item": output
      }
    })
  }

  function basinCasting(input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_basin",
      "ingredients": [
        {
          "amount": amount,
          "fluid": input
        }
      ],
      "processingTime": time,
      "result": {
        "item": output
      }
    })
  }

  function basinCastingItem(item,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_basin",
      "ingredients": [
        {
          "item": item
        },
        {
          "amount": amount,
          "fluid": input
        }
      ],
      "processingTime": time,
      "result": {
        "item": output
      }
    })
  }

  function melting(heat,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:melting",
      "heatRequirement": heat,
      "ingredients": [
        {
          "item": input
        }
      ],
      "processingTime": time,
      "results": [
        {
          "amount": amount,
          "fluid": output
        }
      ]
    })
  }

  function bulkMelting(minHeat,maxHeat,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:bulk_melting",
      "ingredients": [
        {
          "item": input
        }
      ],
      "maxHeatRequirement": maxHeat,
      "minHeatRequirement": minHeat,
      "processingTime": time,
      "results": [
        {
          "amount": amount,
          "fluid": output
        }
      ]
    })
  }

  function alloying(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "ingredients": [
        {
          "amount": amount1,
          "fluid": input1
        },
        {
          "amount": amount2,
          "fluid": input2
        }
      ],
      "processingTime": time,
      "results": [
        {
          "amount": outputAmount,
          "fluid": output
        }
      ]
    })
  }

  function alloyingH(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": "heated",
      "ingredients": [
        {
          "amount": amount1,
          "fluid": input1
        },
        {
          "amount": amount2,
          "fluid": input2
        }
      ],
      "processingTime": time,
      "results": [
        {
          "amount": outputAmount,
          "fluid": output
        }
      ]
    })
  }

  function alloyingSH(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": "superheated",
      "ingredients": [
        {
          "amount": amount1,
          "fluid": input1
        },
        {
          "amount": amount2,
          "fluid": input2
        }
      ],
      "processingTime": time,
      "results": [
        {
          "amount": outputAmount,
          "fluid": output
        }
      ]
    })
  }

  function itemAlloying(heat,time,input1,count1,input2,count2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": heat,
      "ingredients": [
        {
          "count": count1,
          "item": input1
        },
        {
          "count": count2,
          "item": input2
        }
      ],
      "processingTime": time,
      "results": [
        {
          "amount": outputAmount,
          "fluid": output
        }
      ]
    })
  }

//basinCasting
  
  basinCasting('kubejs:molten_slime',1000,43,'minecraft:slime_block')
  basinCasting('tfmg:molten_slag',1000,1482,'tfmg:slag_block')

  tableCasting('kubejs:terracotta_ingot_mold','tfmg:molten_plastic',90,46,'tfmg:plastic_sheet')
  tableCasting('kubejs:fireproof_brick_ingot_mold','tfmg:molten_plastic',90,46,'tfmg:plastic_sheet')
  basinCasting('tfmg:molten_plastic',810,230,'tfmg:plastic_block')

  tableCasting('kubejs:terracotta_ingot_mold','kubejs:polyvinyl_chloride_plastic',90,46,'kubejs:polyvinyl_chloride_plastic_sheet')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:polyvinyl_chloride_plastic',90,46,'kubejs:polyvinyl_chloride_plastic_sheet')
  basinCasting('kubejs:polyvinyl_chloride_plastic',810,230,'kubejs:polyvinyl_chloride_plastic_block')

//melting

  melting('heated', 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')
  bulkMelting(4,50, 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')

//castingMetal

  //terracotta

  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_copper',90,217,'create:copper_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_gold',90,213,'create:golden_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_silver',90,192,'kubejs:silver_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_tin',90,46,'kubejs:tin_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_cast_iron',10,237,'tfmg:cast_iron_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_lead',90,66,'tfmg:lead_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_zinc',90,84,'createaddition:zinc_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_aluminum',90,132,'tfmg:aluminum_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_andesite_alloy',90,136,'vintageimprovements:andesite_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_electrum',90,208,'createaddition:electrum_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_constantan',90,242,'vintageimprovements:constantan_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_bronze',90,216,'kubejs:bronze_sheet')
  tableCasting('kubejs:terracotta_sheet_mold','kubejs:molten_brass',90,186,'create:brass_sheet')

  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_copper',45,97,'createaddition:copper_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_gold',45,95,'createaddition:gold_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_silver',45,86,'kubejs:silver_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_tin',45,20,'kubejs:tin_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_cast_iron',10,106,'vintageimprovements:cast_iron_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_lead',45,29,'vintageimprovements:lead_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_zinc',45,37,'vintageimprovements:zinc_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_aluminum',45,59,'vintageimprovements:aluminum_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_andesite_alloy',45,61,'vintageimprovements:andesite_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_electrum',45,93,'createaddition:electrum_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_constantan',45,108,'vintageimprovements:constantan_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_bronze',45,97,'kubejs:bronze_rod')
  tableCasting('kubejs:terracotta_rod_mold','kubejs:molten_brass',45,83,'createaddition:brass_rod')

  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_copper',10,43,'create:copper_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_gold',10,42,'minecraft:gold_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_silver',10,38,'kubejs:silver_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_tin',10,9,'kubejs:tin_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_cast_iron',10,47,'tfmg:cast_iron_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_lead',10,13,'tfmg:lead_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_zinc',10,16,'create:zinc_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_aluminum',10,26,'tfmg:aluminum_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_electrum',10,41,'createaddition:electrum_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_constantan',10,48,'tfmg:constantan_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_bronze',10,43,'kubejs:bronze_nugget')
  tableCasting('kubejs:terracotta_nugget_mold','kubejs:molten_brass',10,37,'create:brass_nugget')

  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_copper',90,217,'minecraft:copper_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_gold',90,213,'minecraft:gold_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_silver',90,192,'kubejs:silver_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_tin',90,46,'kubejs:tin_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_cast_iron',10,237,'tfmg:cast_iron_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_lead',90,66,'tfmg:lead_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_zinc',90,84,'create:zinc_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_aluminum',90,132,'tfmg:aluminum_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_andesite_alloy',90,136,'create:andesite_alloy')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_electrum',90,208,'createaddition:electrum_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_constantan',90,242,'tfmg:constantan_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_bronze',90,216,'kubejs:bronze_ingot')
  tableCasting('kubejs:terracotta_ingot_mold','kubejs:molten_brass',90,186,'create:brass_ingot')

  //fireproof_brick

  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_copper',90,217,'create:copper_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_gold',90,213,'create:golden_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_silver',90,192,'kubejs:silver_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_tin',90,46,'kubejs:tin_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_cast_iron',10,237,'tfmg:cast_iron_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_lead',90,66,'tfmg:lead_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_zinc',90,84,'createaddition:zinc_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_aluminum',90,132,'tfmg:aluminum_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_andesite_alloy',90,136,'vintageimprovements:andesite_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_electrum',90,208,'createaddition:electrum_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_constantan',90,242,'vintageimprovements:constantan_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_bronze',90,216,'kubejs:bronze_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_brass',90,186,'create:brass_sheet')

  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_cobalt',90,299,'kubejs:cobalt_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','kubejs:molten_iron',90,307,'create:iron_sheet')
  tableCasting('kubejs:fireproof_brick_sheet_mold','tfmg:molten_steel',90,317,'tfmg:heavy_plate')

  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_copper',45,97,'createaddition:copper_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_gold',45,95,'createaddition:gold_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_silver',45,86,'kubejs:silver_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_tin',45,20,'kubejs:tin_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_cast_iron',10,106,'vintageimprovements:cast_iron_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_lead',45,29,'vintageimprovements:lead_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_zinc',45,37,'vintageimprovements:zinc_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_aluminum',45,59,'vintageimprovements:aluminum_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_andesite_alloy',45,61,'vintageimprovements:andesite_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_electrum',45,93,'createaddition:electrum_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_constantan',45,108,'vintageimprovements:constantan_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_bronze',45,97,'kubejs:bronze_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_brass',45,83,'createaddition:brass_rod')

  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_cobalt',45,134,'kubejs:cobalt_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','kubejs:molten_iron',45,137,'createaddition:iron_rod')
  tableCasting('kubejs:fireproof_brick_rod_mold','tfmg:molten_steel',45,142,'vintageimprovements:steel_rod')

  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_copper',10,43,'create:copper_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_gold',10,42,'minecraft:gold_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_silver',10,38,'kubejs:silver_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_tin',10,9,'kubejs:tin_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_cast_iron',10,47,'tfmg:cast_iron_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_lead',10,13,'tfmg:lead_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_zinc',10,16,'create:zinc_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_aluminum',10,26,'tfmg:aluminum_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_electrum',10,41,'createaddition:electrum_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_constantan',10,48,'tfmg:constantan_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_bronze',10,43,'kubejs:bronze_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_brass',10,37,'create:brass_nugget')

  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_cobalt',10,60,'kubejs:cobalt_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','kubejs:molten_iron',10,61,'minecraft:iron_nugget')
  tableCasting('kubejs:fireproof_brick_nugget_mold','tfmg:molten_steel',10,63,'tfmg:steel_nugget')

  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_copper',90,217,'minecraft:copper_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_gold',90,213,'minecraft:gold_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_silver',90,192,'kubejs:silver_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_tin',90,46,'kubejs:tin_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_cast_iron',10,237,'tfmg:cast_iron_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_lead',90,66,'tfmg:lead_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_zinc',90,84,'create:zinc_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_aluminum',90,132,'tfmg:aluminum_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_andesite_alloy',90,136,'create:andesite_alloy')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_electrum',90,208,'createaddition:electrum_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_constantan',90,242,'tfmg:constantan_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_bronze',90,216,'kubejs:bronze_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_brass',90,186,'create:brass_ingot')

  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_cobalt',90,299,'kubejs:cobalt_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:molten_iron',90,307,'minecraft:iron_ingot')
  tableCasting('kubejs:fireproof_brick_ingot_mold','tfmg:molten_steel',90,317,'tfmg:steel_ingot')

  basinCasting('kubejs:molten_copper',810,1085,'minecraft:copper_block')
  basinCasting('kubejs:molten_gold',810,1065,'minecraft:gold_block')
  basinCasting('kubejs:molten_silver',810,960,'kubejs:silver_block')
  basinCasting('kubejs:molten_tin',810,230,'kubejs:tin_block')
  basinCasting('kubejs:molten_cast_iron',810,1185,'tfmg:cast_iron_block')
  basinCasting('kubejs:molten_lead',810,330,'tfmg:lead_block')
  basinCasting('kubejs:molten_zinc',810,420,'create:zinc_block')
  basinCasting('kubejs:molten_aluminum',810,660,'tfmg:aluminum_block')
  basinCasting('kubejs:molten_andesite_alloy',810,680,'create:andesite_alloy_block')
  basinCasting('kubejs:molten_electrum',810,1040,'createaddition:electrum_block')
  basinCasting('kubejs:molten_constantan',810,1210,'tfmg:constantan_block')
  basinCasting('kubejs:molten_bronze',810,1080,'kubejs:bronze_block')
  basinCasting('kubejs:molten_brass',810,930,'create:brass_block')

  basinCasting('kubejs:molten_cobalt',810,1495,'kubejs:cobalt_block')
  basinCasting('kubejs:molten_iron',810,1535,'minecraft:iron_block')
  basinCasting('tfmg:molten_steel',810,1585,'tfmg:steel_block')

//melting

  melting('superheated', 'create:copper_sheet', 90, 72, 'kubejs:molten_copper')
  melting('superheated', 'create:golden_sheet', 90, 71, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_sheet', 90, 64, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_sheet', 90, 15, 'kubejs:molten_tin')
  melting('superheated', 'tfmg:cast_iron_sheet', 10, 79, 'kubejs:molten_cast_iron')
  melting('heated', 'tfmg:lead_sheet', 90, 22, 'kubejs:molten_lead')
  melting('heated', 'createaddition:zinc_sheet', 90, 28, 'kubejs:molten_zinc')
  melting('heated', 'tfmg:aluminum_sheet', 90, 44, 'kubejs:molten_aluminum')
  melting('heated', 'vintageimprovements:andesite_sheet', 90, 45, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'createaddition:electrum_sheet', 90, 69, 'kubejs:molten_electrum')
  melting('superheated', 'vintageimprovements', 90, 80, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_sheet', 90, 72, 'kubejs:molten_bronze')
  melting('heated', 'create:brass_sheet', 90, 62, 'kubejs:molten_brass')

  melting('superheated', 'createaddition:copper_wire', 45, 32, 'kubejs:molten_copper')
  melting('superheated', 'createaddition:gold_wire', 45, 31, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_wire', 45, 28, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_wire', 45, 6, 'kubejs:molten_tin')
  melting('superheated', 'vintageimprovements:cast_iron_wire', 45, 35, 'kubejs:molten_cast_iron')
  melting('heated', 'vintageimprovements:lead_wire', 45, 9, 'kubejs:molten_lead')
  melting('heated', 'vintageimprovements:zinc_wire', 45, 12, 'kubejs:molten_zinc')
  melting('heated', 'tfmg:aluminum_wire', 45, 19, 'kubejs:molten_aluminum')
  melting('heated', 'vintageimprovements:andesite_wire', 45, 20, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'createaddition:electrum_wire', 45, 31, 'kubejs:molten_electrum')
  melting('superheated', 'tfmg:constantan_wire', 45, 36, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_wire', 45, 32, 'kubejs:molten_bronze')
  melting('heated', 'vintageimprovements:brass_wire', 45, 27, 'kubejs:molten_brass')

  melting('superheated', 'createaddition:copper_rod', 45, 32, 'kubejs:molten_copper')
  melting('superheated', 'createaddition:gold_rod', 45, 31, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_rod', 45, 28, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_rod', 45, 6, 'kubejs:molten_tin')
  melting('superheated', 'vintageimprovements:cast_iron_rod', 45, 35, 'kubejs:molten_cast_iron')
  melting('heated', 'vintageimprovements:lead_rod', 45, 9, 'kubejs:molten_lead')
  melting('heated', 'vintageimprovements:zinc_rod', 45, 12, 'kubejs:molten_zinc')
  melting('heated', 'vintageimprovements:aluminum_rod', 45, 19, 'kubejs:molten_aluminum')
  melting('heated', 'vintageimprovements:andesite_rod', 45, 20, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'createaddition:electrum_rod', 45, 31, 'kubejs:molten_electrum')
  melting('superheated', 'vintageimprovements:constantan_rod', 45, 36, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_rod', 45, 32, 'kubejs:molten_bronze')
  melting('heated', 'createaddition:brass_rod', 45, 27, 'kubejs:molten_brass')

  melting('superheated', 'kubejs:copper_dust', 90, 50, 'kubejs:molten_copper')
  melting('superheated', 'kubejs:gold_dust', 90, 49, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_dust', 90, 44, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_dust', 90, 10, 'kubejs:molten_tin')
  melting('superheated', 'kubejs:cast_iron_dust', 10, 55, 'kubejs:molten_cast_iron')
  melting('heated', 'kubejs:lead_dust', 90, 15, 'kubejs:molten_lead')
  melting('heated', 'kubejs:zinc_dust', 90, 19, 'kubejs:molten_zinc')
  melting('heated', 'kubejs:aluminum_dust', 90, 30, 'kubejs:molten_aluminum')
  melting('heated', 'kubejs:andesite_alloy_dust', 90, 31, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'kubejs:electrum_dust', 90, 48, 'kubejs:molten_electrum')
  melting('superheated', 'kubejs:constantan_dust', 90, 56, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_dust', 90, 50, 'kubejs:molten_bronze')
  melting('heated', 'kubejs:brass_dust', 90, 43, 'kubejs:molten_brass')

  melting('superheated', 'create:copper_nugget', 10, 14, 'kubejs:molten_copper')
  melting('superheated', 'minecraft:gold_nugget', 10, 14, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_nugget', 10, 12, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_nugget', 10, 3, 'kubejs:molten_tin')
  melting('superheated', 'tfmg:cast_iron_nugget', 10, 15, 'kubejs:molten_cast_iron')
  melting('heated', 'tfmg:lead_nugget', 10, 4, 'kubejs:molten_lead')
  melting('heated', 'create:zinc_nugget', 10, 5, 'kubejs:molten_zinc')
  melting('heated', 'tfmg:aluminum_nugget', 10, 8, 'kubejs:molten_aluminum')
  melting('superheated', 'createaddition:electrum_nugget', 10, 13, 'kubejs:molten_electrum')
  melting('superheated', 'tfmg:constantan_nugget', 10, 16, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_nugget', 10, 14, 'kubejs:molten_bronze')
  melting('heated', 'create:brass_nugget', 10, 12, 'kubejs:molten_brass')

  melting('superheated', 'minecraft:copper_ingot', 90, 72, 'kubejs:molten_copper')
  melting('superheated', 'minecraft:gold_ingot', 90, 71, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_ingot', 90, 64, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_ingot', 90, 15, 'kubejs:molten_tin')
  melting('superheated', 'tfmg:cast_iron_ingot', 10, 79, 'kubejs:molten_cast_iron')
  melting('heated', 'tfmg:lead_ingot', 90, 22, 'kubejs:molten_lead')
  melting('heated', 'create:zinc_ingot', 90, 28, 'kubejs:molten_zinc')
  melting('heated', 'tfmg:aluminum_ingot', 90, 44, 'kubejs:molten_aluminum')
  melting('heated', 'create:andesite_alloy', 90, 45, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'createaddition:electrum_ingot', 90, 69, 'kubejs:molten_electrum')
  melting('superheated', 'tfmg:constantan_ingot', 90, 80, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_ingot', 90, 72, 'kubejs:molten_bronze')
  melting('heated', 'create:brass_ingot', 90, 62, 'kubejs:molten_brass')

  melting('superheated', 'minecraft:copper_block', 810, 361, 'kubejs:molten_copper')
  melting('superheated', 'minecraft:gold_block', 810, 355, 'kubejs:molten_gold')
  melting('heated', 'kubejs:silver_block', 810, 320, 'kubejs:molten_silver')
  melting('heated', 'kubejs:tin_block', 810, 76, 'kubejs:molten_tin')
  melting('superheated', 'tfmg:cast_iron_block', 810, 395, 'kubejs:molten_cast_iron')
  melting('heated', 'tfmg:lead_block', 810, 110, 'kubejs:molten_lead')
  melting('heated', 'create:zinc_block', 810, 140, 'kubejs:molten_zinc')
  melting('heated', 'tfmg:aluminum_block', 810, 220, 'kubejs:molten_aluminum')
  melting('heated', 'create:andesite_alloy_block', 810, 226, 'kubejs:molten_andesite_alloy')
  melting('superheated', 'createaddition:electrum_block', 810, 346, 'kubejs:molten_electrum')
  melting('superheated', 'tfmg:constantan_block', 810, 403, 'kubejs:molten_constantan')
  melting('superheated', 'kubejs:bronze_block', 810, 360, 'kubejs:molten_bronze')
  melting('heated', 'create:brass_block', 810, 310, 'kubejs:molten_brass')

//bulkMelting

  bulkMelting(9,50, 'create:copper_sheet', 90, 72, 'kubejs:molten_copper')
  bulkMelting(9,50, 'create:golden_sheet', 90, 71, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_sheet', 90, 64, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_sheet', 90, 15, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_sheet', 90, 100, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'tfmg:cast_iron_sheet', 10, 79, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'tfmg:lead_sheet', 90, 22, 'kubejs:molten_lead')
  bulkMelting(4,50, 'createaddition:zinc_sheet', 90, 28, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'tfmg:aluminum_sheet', 90, 44, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'vintageimprovements:andesite_sheet', 90, 45, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'createaddition:electrum_sheet', 90, 69, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'vintageimprovements:constantan_sheet', 90, 80, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_sheet', 90, 72, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'create:brass_sheet', 90, 62, 'kubejs:molten_brass')

  bulkMelting(9,50, 'createaddition:copper_wire', 45, 32, 'kubejs:molten_copper')
  bulkMelting(9,50, 'createaddition:gold_wire', 45, 31, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_wire', 45, 28, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_wire', 45, 6, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_wire', 45, 45, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'vintageimprovements:cast_iron_wire', 45, 35, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'vintageimprovements:lead_wire', 45, 9, 'kubejs:molten_lead')
  bulkMelting(4,50, 'vintageimprovements:zinc_wire', 45, 12, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'tfmg:aluminum_wire', 45, 19, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'vintageimprovements:andesite_wire', 45, 20, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'createaddition:electrum_wire', 45, 31, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'tfmg:constantan_wire', 45, 36, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_wire', 45, 32, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'vintageimprovements:brass_wire', 45, 27, 'kubejs:molten_brass')

  bulkMelting(9,50, 'createaddition:copper_rod', 45, 32, 'kubejs:molten_copper')
  bulkMelting(9,50, 'createaddition:gold_rod', 45, 31, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_rod', 45, 28, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_rod', 45, 6, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_rod', 45, 45, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'vintageimprovements:cast_iron_rod', 45, 35, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'vintageimprovements:lead_rod', 45, 9, 'kubejs:molten_lead')
  bulkMelting(4,50, 'vintageimprovements:zinc_rod', 45, 12, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'vintageimprovements:aluminum_rod', 45, 19, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'vintageimprovements:andesite_rod', 45, 20, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'createaddition:electrum_rod', 45, 31, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'vintageimprovements:constantan_rod', 45, 36, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_rod', 45, 32, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'createaddition:brass_rod', 45, 27, 'kubejs:molten_brass')

  bulkMelting(9,50, 'kubejs:copper_dust', 90, 50, 'kubejs:molten_copper')
  bulkMelting(9,50, 'kubejs:gold_dust', 90, 49, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_dust', 90, 44, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_dust', 90, 10, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_dust', 90, 70, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'kubejs:cast_iron_dust', 10, 55, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'kubejs:lead_dust', 90, 15, 'kubejs:molten_lead')
  bulkMelting(4,50, 'kubejs:zinc_dust', 90, 19, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'kubejs:aluminum_dust', 90, 30, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'kubejs:andesite_alloy_dust', 90, 31, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'kubejs:electrum_dust', 90, 48, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'kubejs:constantan_dust', 90, 56, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_dust', 90, 50, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'kubejs:brass_dust', 90, 43, 'kubejs:molten_brass')

  bulkMelting(9,50, 'create:copper_nugget', 10, 14, 'kubejs:molten_copper')
  bulkMelting(9,50, 'minecraft:gold_nugget', 10, 14, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_nugget', 10, 12, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_nugget', 10, 3, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_nugget', 10, 20, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'tfmg:cast_iron_nugget', 10, 15, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'tfmg:lead_nugget', 10, 4, 'kubejs:molten_lead')
  bulkMelting(4,50, 'create:zinc_nugget', 10, 5, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'tfmg:aluminum_nugget', 10, 8, 'kubejs:molten_aluminum')
  bulkMelting(9,50, 'createaddition:electrum_nugget', 10, 13, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'tfmg:constantan_nugget', 10, 16, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_nugget', 10, 14, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'create:brass_nugget', 10, 12, 'kubejs:molten_brass')

  bulkMelting(9,50, 'minecraft:copper_ingot', 90, 72, 'kubejs:molten_copper')
  bulkMelting(9,50, 'minecraft:gold_ingot', 90, 71, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_ingot', 90, 64, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_ingot', 90, 15, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_ingot', 90, 100, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'tfmg:cast_iron_ingot', 10, 79, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'tfmg:lead_ingot', 90, 22, 'kubejs:molten_lead')
  bulkMelting(4,50, 'create:zinc_ingot', 90, 28, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'tfmg:aluminum_ingot', 90, 44, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'create:andesite_alloy', 90, 45, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'createaddition:electrum_ingot', 90, 69, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'tfmg:constantan_ingot', 90, 80, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_ingot', 90, 72, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'create:brass_ingot', 90, 62, 'kubejs:molten_brass')

  bulkMelting(9,50, 'minecraft:copper_block', 810, 361, 'kubejs:molten_copper')
  bulkMelting(9,50, 'minecraft:gold_block', 810, 355, 'kubejs:molten_gold')
  bulkMelting(4,50, 'kubejs:silver_block', 810, 320, 'kubejs:molten_silver')
  bulkMelting(4,50, 'kubejs:tin_block', 810, 76, 'kubejs:molten_tin')
  bulkMelting(9,50, 'kubejs:cobalt_block', 810, 498, 'kubejs:molten_cobalt')
  bulkMelting(9,50, 'tfmg:cast_iron_block', 810, 395, 'kubejs:molten_cast_iron')
  bulkMelting(4,50, 'tfmg:lead_block', 810, 110, 'kubejs:molten_lead')
  bulkMelting(4,50, 'create:zinc_block', 810, 140, 'kubejs:molten_zinc')
  bulkMelting(4,50, 'tfmg:aluminum_block', 810, 220, 'kubejs:molten_aluminum')
  bulkMelting(4,50, 'create:andesite_alloy_block', 810, 226, 'kubejs:molten_andesite_alloy')
  bulkMelting(9,50, 'createaddition:electrum_block', 810, 346, 'kubejs:molten_electrum')
  bulkMelting(9,50, 'tfmg:constantan_block', 810, 403, 'kubejs:molten_constantan')
  bulkMelting(9,50, 'kubejs:bronze_block', 810, 360, 'kubejs:molten_bronze')
  bulkMelting(4,50, 'create:brass_block', 810, 310, 'kubejs:molten_brass')

  bulkMelting(9,50, 'tfmg:heavy_plate', 90, 105, 'tfmg:molten_steel')
  bulkMelting(9,50, 'vintageimprovements:steel_wire', 45, 46, 'tfmg:molten_steel')
  bulkMelting(9,50, 'vintageimprovements:steel_rod', 45, 46, 'tfmg:molten_steel')
  bulkMelting(9,50, 'kubejs:steel_dust', 90, 73, 'tfmg:molten_steel')
  bulkMelting(9,50, 'tfmg:steel_nugget', 10, 20, 'tfmg:molten_steel')
  bulkMelting(9,50, 'tfmg:steel_ingot', 90, 105, 'tfmg:molten_steel')
  bulkMelting(9,50, 'tfmg:steel_block', 810, 527, 'tfmg:molten_steel')

  bulkMelting(9,50, 'create:iron_sheet', 90, 101, 'kubejs:molten_iron')
  bulkMelting(9,50, 'createaddition:iron_wire', 45, 45, 'kubejs:molten_iron')
  bulkMelting(9,50, 'createaddition:iron_rod', 45, 45, 'kubejs:molten_iron')
  bulkMelting(9,50, 'kubejs:iron_dust', 90, 70, 'kubejs:molten_iron')
  bulkMelting(9,50, 'minecraft:iron_nugget', 10, 19, 'kubejs:molten_iron')
  bulkMelting(9,50, 'minecraft:iron_ingot', 90, 101, 'kubejs:molten_iron')
  bulkMelting(9,50, 'minecraft:iron_block', 810, 510, 'kubejs:molten_iron')

//mixing

  alloying(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',20)
  alloying(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',20)
  alloying(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',20)
  alloying(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)

  alloyingH(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',20)
  alloyingH(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',20)
  alloyingH(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',20)
  alloyingH(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)

  alloyingSH(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',20)
  alloyingSH(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',20)
  alloyingSH(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',20)
  alloyingSH(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)
  
})