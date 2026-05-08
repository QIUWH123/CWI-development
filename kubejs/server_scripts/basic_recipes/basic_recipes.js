ServerEvents.recipes(event => {

//custom recipe function define

  function hammering(input,output){
    event.custom({
      "type": "createdieselgenerators:hammering",
      "ingredients":[{"item": input}],
      "results":[{"item": output}]
    })}

  function rolling(input,output){
    event.custom({
      "type":"createaddition:rolling",
      "input": {"item": input},
      "result": {"item": output,"count": 2}
    })}

  function liquidBurning(input,amount,burnTime,superheated){
    event.custom({
	    "type":"createaddition:liquid_burning",
	    "input": {"fluid": input,"amount": amount},
	    "burnTime": burnTime,
      "superheated": superheated
    })}

  function charging(input,output,energy,chargeRate){
    event.custom({
	    "type":"createaddition:charging",
	    "input": {"item": input,"count": 1 },
	    "result": {"item": output,"count": 1},
	    "energy": energy,
      "maxChargeRate": chargeRate
    })}

  function turning(input,output,count){
    event.custom({
	    "type":"vintageimprovements:turning",
	    "ingredients": [{"item": input}],
	    "results": [{"item": output,"count": count}]
    })}

  function demolding(input,output){
    event.custom({
      "type": "ratatouille:demolding",
      "ingredients": {"item": input},
      "results": {"item": output}
    })}

  function curving(head,input,output){
    event.custom({
      "type": "vintageimprovements:curving",
      "itemAsHead": head,
      "ingredients": [{"item": input}],
      "results": [{"item": output}]
    })}


  function addStoragePair(bigItem, smallItem, count) {
    var smallStack = count + 'x ' + smallItem;
    event.shapeless(Item.of(bigItem), [smallStack]);
    event.shapeless(Item.of(smallStack), [bigItem]);
  }

//curving

  curving('minecraft:iron_ingot','kubejs:clay_disk','kubejs:clay_ingot_mold')
  curving('minecraft:iron_nugget','kubejs:clay_disk','kubejs:clay_nugget_mold')
  curving('create:iron_sheet','kubejs:clay_disk','kubejs:clay_sheet_mold')
  curving('createaddition:iron_rod','kubejs:clay_disk','kubejs:clay_rod_mold')

//turning

  turning('create:industrial_iron_block', 'vintageimprovements:w_shaped_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:v_shaped_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:concave_curving_head', 1)
  turning('create:industrial_iron_block', 'vintageimprovements:convex_curving_head', 1)
  turning('createdeco:industrial_iron_ingot', 'createdieselgenerators:engine_piston', 1)
  turning('createdeco:industrial_iron_ingot', 'kubejs:industrial_iron_blade', 1)
  turning('createdeco:industrial_iron_ingot', 'kubejs:industrial_iron_drill_head', 1)
  turning('create:sturdy_sheet', 'createmetallurgy:sturdy_whisk', 1)
  turning('minecraft:iron_ingot', 'create:whisk', 1)
  turning('minecraft:iron_ingot', 'create:propeller', 1)
  turning('create:andesite_alloy', 'kubejs:andesite_bearing', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_ingot_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_nugget_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_sheet_mold', 1)
  turning('kubejs:fireproof_brick_disk', 'kubejs:fireproof_brick_rod_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_ingot_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_nugget_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_sheet_mold', 1)
  turning('kubejs:terracotta_disk', 'kubejs:terracotta_rod_mold', 1)

//rolling

  rolling('kubejs:silver_ingot','kubejs:silver_rod')
  rolling('kubejs:bronze_ingot','kubejs:bronze_rod')
  rolling('kubejs:tin_ingot','kubejs:tin_rod')
  rolling('kubejs:cobalt_ingot','kubejs:cobalt_rod')
  rolling('tfmg:cast_iron_ingot','vintageimprovements:cast_iron_rod')

  rolling('tfmg:aluminum_sheet','tfmg:aluminum_wire')
  rolling('tfmg:cast_iron_sheet','vintageimprovements:cast_iron_wire')
  rolling('tfmg:lead_sheet','vintageimprovements:lead_wire')
  rolling('tfmg:nickel_sheet','vintageimprovements:nickel_wire')
  rolling('vintageimprovements:constantan_sheet','tfmg:constantan_wire')
  rolling('kubejs:silver_sheet','kubejs:silver_wire')
  rolling('kubejs:bronze_sheet','kubejs:bronze_wire')
  rolling('kubejs:tin_sheet','kubejs:tin_wire')
  rolling('kubejs:cobalt_sheet','kubejs:cobalt_wire')
  rolling('kubejs:magnet_sheet','kubejs:magnet_wire')
  rolling('kubejs:magnetic_alloy_sheet','kubejs:magnetic_alloy_wire')

//hammering

  hammering('create:andesite_alloy','vintageimprovements:andesite_sheet')
  hammering('tfmg:lead_ingot','tfmg:lead_sheet')
  hammering('tfmg:nickel_ingot','tfmg:nickel_sheet')
  hammering('tfmg:aluminum_ingot','tfmg:aluminum_sheet')
  hammering('kubejs:silver_ingot','kubejs:silver_sheet')

//pressing

  event.recipes.create.pressing('kubejs:magnesium_sheet', 'kubejs:magnesium_ingot')
  event.recipes.create.pressing('kubejs:silver_sheet', 'kubejs:silver_ingot')
  event.recipes.create.pressing('kubejs:bronze_sheet', 'kubejs:bronze_ingot')
  event.recipes.create.pressing('kubejs:tin_sheet', 'kubejs:tin_ingot')
  event.recipes.create.pressing('kubejs:cobalt_sheet', 'kubejs:cobalt_ingot')

//liquid_burning

  liquidBurning('tfmg:gasoline', 1000, 48000, true)
  liquidBurning('tfmg:diesel', 1000, 32000, true)

  liquidBurning('tfmg:kerosene', 1000, 32000, false)
  liquidBurning('kubejs:methane', 1000, 8000, false)
  liquidBurning('createdieselgenerators:plant_oil', 1000, 4000, false)

//conversion

  addStoragePair('kubejs:rubber_block', 'kubejs:rubber', 9)
  addStoragePair('kubejs:polyvinyl_chloride_plastic_block', 'kubejs:polyvinyl_chloride_plastic_sheet', 9)
  addStoragePair('kubejs:sturdy_sheet_block', 'create:sturdy_sheet', 9)
  addStoragePair('kubejs:magnesium_block', 'kubejs:magnesium_ingot', 9)
  addStoragePair('kubejs:magnesium_ingot', 'kubejs:magnesium_nugget', 9)
  addStoragePair('kubejs:bronze_block', 'kubejs:bronze_ingot', 9)
  addStoragePair('kubejs:bronze_ingot', 'kubejs:bronze_nugget', 9)
  addStoragePair('kubejs:raw_tin_block', 'kubejs:raw_tin', 9)
  addStoragePair('kubejs:tin_block', 'kubejs:tin_ingot', 9)
  addStoragePair('kubejs:tin_ingot', 'kubejs:tin_nugget', 9)
  addStoragePair('kubejs:raw_silver_block', 'kubejs:raw_silver', 9)
  addStoragePair('kubejs:silver_block', 'kubejs:silver_ingot', 9)
  addStoragePair('kubejs:silver_ingot', 'kubejs:silver_nugget', 9)
  addStoragePair('kubejs:raw_cobalt_block', 'kubejs:raw_cobalt', 9)
  addStoragePair('kubejs:cobalt_block', 'kubejs:cobalt_ingot', 9)
  addStoragePair('kubejs:cobalt_ingot', 'kubejs:cobalt_nugget', 9)
  addStoragePair('createmetallurgy:refractory_mortar', 'createmetallurgy:refractory_mortar_ball', 4)
  addStoragePair('darkerdepths:amber_block', 'darkerdepths:amber', 4)

})