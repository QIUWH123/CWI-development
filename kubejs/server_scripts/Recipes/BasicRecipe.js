ServerEvents.recipes(event => {

// Custom Recipe Function Define

    function chiseling(input,output,count){
        event.custom({
            "type": "createdieselgenerators:hammering",
            "ingredients":[{"item": input}],
            "results":[{"item": output,"count": count}]
        })
    }

    function cutting(input,output,chance,count){
        event.custom({
            "type": "createdieselgenerators:wire_cutting",
            "ingredients": [{"item": input}],
            "results": [{"item": output,"chance": chance,"count": count}]
        })
    }

    function cuttingTwo(input,output1,chance1,count1,output2,chance2,count2){
        event.custom({
            "type": "createdieselgenerators:wire_cutting",
            "ingredients": [{"item": input}],
            "results": [{"item": output1,"chance": chance1,"count": count1}, {"item": output2,"chance": chance2,"count": count2}]
        })
    }

    function rolling(input,output){
        event.custom({
            "type":"createaddition:rolling",
            "input": {"item": input},
            "result": {"item": output,"count": 2}
        })
    }

    function liquidBurning(input,amount,burnTime,superheated){
        event.custom({
            "type":"createaddition:liquid_burning",
            "input": {"fluid": input,"amount": amount},
            "burnTime": burnTime,
            "superheated": superheated
        })
    }

    function charging(input,output,energy,chargeRate){
        event.custom({
            "type":"createaddition:charging",
            "input": {"item": input,"count": 1 },
            "result": {"item": output,"count": 1},
            "energy": energy,
            "maxChargeRate": chargeRate
        })
    }

    function turning(input,output,count){
        event.custom({
            "type":"vintageimprovements:turning",
            "ingredients": [{"item": input}],
            "results": [{"item": output,"count": count}]
        })
    }

    function demolding(input,output){
        event.custom({
            "type": "ratatouille:demolding",
            "ingredients": {"item": input},
            "results": {"item": output}
        })
    }

    function curving(head,input,output){
        event.custom({
            "type": "vintageimprovements:curving",
            "itemAsHead": head,
            "ingredients": [{"item": input}],
            "results": [{"item": output}]
        })
    }

    function addStoragePair(bigItem, smallItem, count) {
        var smallStack = count + 'x ' + smallItem
        event.shapeless(Item.of(bigItem), [smallStack])
        event.shapeless(Item.of(smallStack), [bigItem])
    }

    function deploying(using, input, output) {
        event.custom({
            "type": "create:deploying",
            "ingredients": [{"item": input},{"item": using}],
            "results": [{"item": output}]
        })
    }

    function deployingTag(tag, input, output) {
        event.custom({
            "type": "create:deploying",
            "ingredients": [{"item": input},{"tag": tag}],
            "results": [{"item": output}]
        })
    }

    function itemApplication(first, second, output, isSecondTag) {
        var secondIngredient = isSecondTag ? {"tag": second} : {"item": second};
        event.custom({
            "type": "create:item_application",
            "ingredients": [{"item": first}, secondIngredient],
            "results": [{"item": output}]
        })
    }

    function sandpaperPolishing(input, output) {
        event.custom({
            "type": "create:sandpaper_polishing",
            "ingredients": [{"item": input}],
            "results": [{"item": output}]
        })
    }

// Deploying

    deploying('create:sturdy_sheet','minecraft:paper','create:schedule')
    deployingTag('cwi:leathers','minecraft:paper','vintageimprovements:recipe_card')

// Curving

    curving('minecraft:iron_ingot','kubejs:clay_disk','kubejs:clay_ingot_mold')
    curving('minecraft:iron_nugget','kubejs:clay_disk','kubejs:clay_nugget_mold')
    curving('create:iron_sheet','kubejs:clay_disk','kubejs:clay_sheet_mold')
    curving('createaddition:iron_rod','kubejs:clay_disk','kubejs:clay_rod_mold')

// Turning

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

// Rolling

// Cutting

    cuttingTwo('minecraft:dead_bush','minecraft:stick',1,2,'farmersdelight:straw',0.57,1)

// Chiseling

    chiseling('create:brass_sheet','kubejs:brass_circuit_board',1)

// Pressing

    event.recipes.create.pressing('2x kubejs:broken_burnt_log', 'kubejs:burnt_log')
    event.recipes.create.pressing('2x kubejs:stripped_broken_burnt_log', 'kubejs:stripped_burnt_log')
    event.recipes.create.pressing('2x kubejs:broken_ash_log', 'kubejs:ash_log')
    event.recipes.create.pressing('2x kubejs:stripped_broken_ash_log', 'kubejs:stripped_ash_log')

// Item Application

    itemApplication('createdieselgenerators:chip_wood_block', 'vintageimprovements:andesite_sheet', 'create:andesite_casing')
    itemApplication('createdieselgenerators:chip_wood_block', 'cwi:rubbers', 'kubejs:sealed_wood', true)
    itemApplication('kubejs:sealed_wood', 'create:copper_sheet', 'create:copper_casing')
    itemApplication('kubejs:quality_sealed_wood', 'create:brass_sheet', 'create:brass_casing')
    itemApplication('create:brass_casing', 'createdeco:industrial_iron_sheet', 'kubejs:industrial_casing')
    itemApplication('kubejs:harden_wood', 'tfmg:heavy_plate', 'tfmg:steel_casing')
    itemApplication('kubejs:mechanical_arm_base', 'kubejs:robot_hand', 'create:mechanical_arm')
    itemApplication('kubejs:mechanical_arm_base', 'kubejs:robot_pipette', 'fluid:pipette')
    itemApplication('kubejs:mechanical_arm_base', 'cwi:chemical_sprayer', 'createdieselgenerators:chemical_turret', true)

// Sandpaper Polishing

    sandpaperPolishing('kubejs:sealed_wood', 'kubejs:polished_sealed_wood')
    sandpaperPolishing('minecraft:diamond', 'kubejs:polished_diamond')
    sandpaperPolishing('geode_plus:nether_quartz_crystal_block', 'minecraft:quartz_block')

// Liquid Burning

    liquidBurning('tfmg:gasoline', 1, 48, true)
    liquidBurning('tfmg:diesel', 1, 32, true)

    liquidBurning('tfmg:kerosene', 1, 32, false)
    liquidBurning('kubejs:methane', 1, 16, false)
    liquidBurning('createdieselgenerators:plant_oil', 1, 4, false)

// Conversion

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