ServerEvents.recipes(event => {

//custom recipe function define

  function chiseling(input,output,count){
    event.custom({
      "type": "createdieselgenerators:hammering",
      "ingredients":[{"item": input}],
      "results":[{"item": output,"count": count}]
    })}

  function cutting(input,output,count){
    event.custom({
      "type": "createdieselgenerators:wire_cutting",
      "ingredients": [{"item": input}],
      "results": [{"item": output,"count": count}]
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

  function deploying(using, input, output) {
    event.custom({
    "type": "create:deploying",
    "ingredients": [{"item": input},{"item": using}],
    "results": [{"item": output}]})
  }

  function deployingTag(tag, input, output) {
    event.custom({
    "type": "create:deploying",
    "ingredients": [{"item": input},{"tag": tag}],
    "results": [{"item": output}]})
  }

//curving

  deploying('create:sturdy_sheet','minecraft:paper','create:schedule')
  deployingTag('cwi:leather','minecraft:paper','vintageimprovements:recipe_card')

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
  rolling('kubejs:molybdenum_ingot','kubejs:molybdenum_rod')
  rolling('kubejs:bronze_ingot','kubejs:bronze_rod')
  rolling('kubejs:tin_ingot','kubejs:tin_rod')
  rolling('kubejs:cobalt_ingot','kubejs:cobalt_rod')
  rolling('tfmg:cast_iron_ingot','vintageimprovements:cast_iron_rod')
  rolling('kubejs:rusted_iron_ingot','kubejs:rusted_iron_rod')

  rolling('tfmg:aluminum_sheet','tfmg:aluminum_wire')
  rolling('tfmg:cast_iron_sheet','vintageimprovements:cast_iron_wire')
  rolling('tfmg:lead_sheet','vintageimprovements:lead_wire')
  rolling('tfmg:nickel_sheet','vintageimprovements:nickel_wire')
  rolling('vintageimprovements:constantan_sheet','tfmg:constantan_wire')
  rolling('kubejs:silver_sheet','kubejs:silver_wire')
  rolling('kubejs:molybdenum_wire','kubejs:molybdenum_wire')
  rolling('kubejs:bronze_sheet','kubejs:bronze_wire')
  rolling('kubejs:tin_sheet','kubejs:tin_wire')
  rolling('kubejs:cobalt_sheet','kubejs:cobalt_wire')
  rolling('kubejs:magnet_sheet','kubejs:magnet_wire')
  rolling('kubejs:magnetic_alloy_sheet','kubejs:magnetic_alloy_wire')
  rolling('kubejs:rusted_iron_sheet','kubejs:rusted_iron_wire')

//cutting

  cutting('create:brass_sheet','vintageimprovements:brass_wire',1)
  cutting('tfmg:aluminum_sheet','tfmg:aluminum_wire',1)
  cutting('tfmg:lead_sheet','vintageimprovements:lead_wire',1)
  cutting('kubejs:tin_sheet','kubejs:tin_wire',1)
  cutting('kubejs:rusted_iron_sheet','kubejs:rusted_iron_wire',1)
  cutting('minecraft:dead_bush','farmersdelight:straw',1)

//chiseling

  chiseling('create:brass_sheet','kubejs:brass_circuit_board',1)

//pressing

  event.recipes.create.pressing('kubejs:magnesium_sheet', 'kubejs:magnesium_ingot')
  event.recipes.create.pressing('kubejs:silver_sheet', 'kubejs:silver_ingot')
  event.recipes.create.pressing('kubejs:molybdenum_sheet', 'kubejs:molybdenum_ingot')
  event.recipes.create.pressing('kubejs:bronze_sheet', 'kubejs:bronze_ingot')
  event.recipes.create.pressing('kubejs:tin_sheet', 'kubejs:tin_ingot')
  event.recipes.create.pressing('kubejs:cobalt_sheet', 'kubejs:cobalt_ingot')

  event.recipes.create.pressing('2x kubejs:broken_burnt_log', 'kubejs:burnt_log')
  event.recipes.create.pressing('2x kubejs:stripped_broken_burnt_log', 'kubejs:stripped_burnt_log')
  event.recipes.create.pressing('2x kubejs:broken_ash_log', 'kubejs:ash_log')
  event.recipes.create.pressing('2x kubejs:stripped_broken_ash_log', 'kubejs:stripped_ash_log')

//liquid_burning

  liquidBurning('tfmg:gasoline', 1, 48, true)
  liquidBurning('tfmg:diesel', 1, 32, true)

  liquidBurning('tfmg:kerosene', 1, 32, false)
  liquidBurning('kubejs:methane', 1, 16, false)
  liquidBurning('createdieselgenerators:plant_oil', 1, 4, false)

//conversion

  addStoragePair('kubejs:rubber_block', 'kubejs:rubber', 9)
  addStoragePair('kubejs:polyethylene_block', 'kubejs:polyethylene', 9)
  addStoragePair('kubejs:polypropylene_block', 'kubejs:polypropylene', 9)
  addStoragePair('kubejs:polyvinyl_chloride_block', 'kubejs:polyvinyl_chloride', 9)
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
  addStoragePair('kubejs:molybdenum_block', 'kubejs:molybdenum_ingot', 9)
  addStoragePair('kubejs:molybdenum_ingot', 'kubejs:molybdenum_nugget', 9)
  addStoragePair('kubejs:cobalt_block', 'kubejs:cobalt_ingot', 9)
  addStoragePair('kubejs:cobalt_ingot', 'kubejs:cobalt_nugget', 9)
  addStoragePair('kubejs:rusted_iron_block', 'kubejs:rusted_iron_ingot', 9)
  addStoragePair('kubejs:rusted_iron_ingot', 'kubejs:rusted_iron_nugget', 9)
  addStoragePair('createmetallurgy:refractory_mortar', 'createmetallurgy:refractory_mortar_ball', 4)
  addStoragePair('darkerdepths:amber_block', 'darkerdepths:amber', 4)

})