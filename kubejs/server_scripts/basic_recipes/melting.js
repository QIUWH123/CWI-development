ServerEvents.recipes(event => {

  function tableCasting(mold,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_table",
      "ingredients": [{"item": mold},{
      "amount": amount,"fluid": input}],
      "processingTime": time,
      "result": {"item": output}
    })}

  function basinCasting(input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_basin",
      "ingredients": [{"amount": amount,"fluid": input}],
      "processingTime": time,
      "result": {"item": output}
    })}

  function basinCastingItem(item,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:casting_in_basin",
      "ingredients": [{"item": item},{
      "amount": amount,"fluid": input}],
      "processingTime": time,
      "result": {"item": output}
    })}

  function melting(heat,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:melting",
      "heatRequirement": heat,
      "ingredients": [{"item": input}],
      "processingTime": time,
      "results": [{"amount": amount,"fluid": output}]
    })}

  function bulkMelting(minHeat,maxHeat,input,amount,time,output){
    event.custom({
      "type": "createmetallurgy:bulk_melting",
      "ingredients": [{"item": input}],
      "maxHeatRequirement": maxHeat,
      "minHeatRequirement": minHeat,
      "processingTime": time,
      "results": [{"amount": amount,"fluid": output}]
    })}

  function alloying(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "ingredients": [{"amount": amount1,"fluid": input1},{"amount": amount2,"fluid": input2}],
      "processingTime": time,
      "results": [{"amount": outputAmount,"fluid": output}]
    })}

  function alloyingH(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": "heated",
      "ingredients": [{"amount": amount1,"fluid": input1},{"amount": amount2,"fluid": input2}],
      "processingTime": time,
      "results": [{"amount": outputAmount,"fluid": output}]
    })}

  function alloyingSH(time,input1,amount1,input2,amount2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": "superheated",
      "ingredients": [{"amount": amount1,"fluid": input1},{"amount": amount2,"fluid": input2}],
      "processingTime": time,
      "results": [{"amount": outputAmount,"fluid": output}]
    })}

  function itemAlloying(heat,time,input1,count1,input2,count2,output,outputAmount){
    event.custom({
      "type": "createmetallurgy:alloying",
      "heatRequirement": heat,
      "ingredients": [{"count": count1,"item": input1},{"count": count2,"item": input2}],
      "processingTime": time,
      "results": [{"amount": outputAmount,"fluid": output}]
    })}

//melting

  melting('heated', 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')
  bulkMelting(4,50, 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')
  const MATERIALS = [
    {
      id: 'copper', fluid: 'kubejs:molten_copper', mp: 217,
      sheet: 'create:copper_sheet', ingot: 'minecraft:copper_ingot',
      rod: 'createaddition:copper_rod', wire: 'createaddition:copper_wire',
      nugget: 'create:copper_nugget', block: 'minecraft:copper_block', dust: 'kubejs:copper_dust'
    },
    {
      id: 'gold', fluid: 'kubejs:molten_gold', mp: 213,
      sheet: 'create:golden_sheet', ingot: 'minecraft:gold_ingot',
      rod: 'createaddition:gold_rod', wire: 'createaddition:gold_wire',
      nugget: 'minecraft:gold_nugget', block: 'minecraft:gold_block', dust: 'kubejs:gold_dust'
    },
    {
      id: 'silver', fluid: 'kubejs:molten_silver', mp: 192,
      sheet: 'kubejs:silver_sheet', ingot: 'kubejs:silver_ingot',
      rod: 'kubejs:silver_rod', wire: 'kubejs:silver_wire',
      nugget: 'kubejs:silver_nugget', block: 'kubejs:silver_block', dust: 'kubejs:silver_dust'
    },
    {
      id: 'molybdenum', fluid: 'kubejs:molten_molybdenum', mp: 524,
      sheet: 'kubejs:molybdenum_sheet', ingot: 'kubejs:molybdenum_ingot',
      rod: 'kubejs:molybdenum_rod', wire: 'kubejs:molybdenum_wire',
      nugget: 'kubejs:molybdenum_nugget', block: 'kubejs:molybdenum_block', dust: 'kubejs:molybdenum_dust'
    },
    {
      id: 'tin', fluid: 'kubejs:molten_tin', mp: 46,
      sheet: 'kubejs:tin_sheet', ingot: 'kubejs:tin_ingot',
      rod: 'kubejs:tin_rod', wire: 'kubejs:tin_wire',
      nugget: 'kubejs:tin_nugget', block: 'kubejs:tin_block', dust: 'kubejs:tin_dust'
    },
    {
      id: 'cast_iron', fluid: 'kubejs:molten_cast_iron', mp: 237,
      sheet: 'tfmg:cast_iron_sheet', ingot: 'tfmg:cast_iron_ingot',
      rod: 'vintageimprovements:cast_iron_rod', wire: 'vintageimprovements:cast_iron_wire',
      nugget: 'tfmg:cast_iron_nugget', block: 'tfmg:cast_iron_block', dust: 'kubejs:cast_iron_dust'
    },
    {
      id: 'lead', fluid: 'kubejs:molten_lead', mp: 66,
      sheet: 'tfmg:lead_sheet', ingot: 'tfmg:lead_ingot',
      rod: 'vintageimprovements:lead_rod', wire: 'vintageimprovements:lead_wire',
      nugget: 'tfmg:lead_nugget', block: 'tfmg:lead_block', dust: 'kubejs:lead_dust'
    },
    {
      id: 'zinc', fluid: 'kubejs:molten_zinc', mp: 84,
      sheet: 'createaddition:zinc_sheet', ingot: 'create:zinc_ingot',
      rod: 'vintageimprovements:zinc_rod', wire: 'vintageimprovements:zinc_wire',
      nugget: 'create:zinc_nugget', block: 'create:zinc_block', dust: 'kubejs:zinc_dust'
    },
    {
      id: 'aluminum', fluid: 'kubejs:molten_aluminum', mp: 132,
      sheet: 'tfmg:aluminum_sheet', ingot: 'tfmg:aluminum_ingot',
      rod: 'vintageimprovements:aluminum_rod', wire: 'tfmg:aluminum_wire',
      nugget: 'tfmg:aluminum_nugget', block: 'tfmg:aluminum_block', dust: 'kubejs:aluminum_dust'
    },
    {
      id: 'andesite_alloy', fluid: 'kubejs:molten_andesite_alloy', mp: 136,
      sheet: 'vintageimprovements:andesite_sheet', ingot: 'create:andesite_alloy',
      rod: 'vintageimprovements:andesite_rod', wire: 'vintageimprovements:andesite_wire',
      nugget: null, block: 'create:andesite_alloy_block', dust: 'kubejs:andesite_alloy_dust'
    },
    {
      id: 'electrum', fluid: 'kubejs:molten_electrum', mp: 208,
      sheet: 'createaddition:electrum_sheet', ingot: 'createaddition:electrum_ingot',
      rod: 'createaddition:electrum_rod', wire: 'createaddition:electrum_wire',
      nugget: 'createaddition:electrum_nugget', block: 'createaddition:electrum_block', dust: 'kubejs:electrum_dust'
    },
    {
      id: 'constantan', fluid: 'kubejs:molten_constantan', mp: 242,
      sheet: 'vintageimprovements:constantan_sheet', ingot: 'tfmg:constantan_ingot',
      rod: 'vintageimprovements:constantan_rod', wire: 'tfmg:constantan_wire',
      nugget: 'tfmg:constantan_nugget', block: 'tfmg:constantan_block', dust: 'kubejs:constantan_dust'
    },
    {
      id: 'bronze', fluid: 'kubejs:molten_bronze', mp: 216,
      sheet: 'kubejs:bronze_sheet', ingot: 'kubejs:bronze_ingot',
      rod: 'kubejs:bronze_rod', wire: 'kubejs:bronze_wire',
      nugget: 'kubejs:bronze_nugget', block: 'kubejs:bronze_block', dust: 'kubejs:bronze_dust'
    },
    {
      id: 'brass', fluid: 'kubejs:molten_brass', mp: 186,
      sheet: 'create:brass_sheet', ingot: 'create:brass_ingot',
      rod: 'createaddition:brass_rod', wire: 'vintageimprovements:brass_wire',
      nugget: 'create:brass_nugget', block: 'create:brass_block', dust: 'kubejs:brass_dust'
    },
    {
      id: 'cobalt', fluid: 'kubejs:molten_cobalt', mp: 299,
      sheet: 'kubejs:cobalt_sheet', ingot: 'kubejs:cobalt_ingot',
      rod: 'kubejs:cobalt_rod', wire: 'kubejs:cobalt_wire',
      nugget: 'kubejs:cobalt_nugget', block: 'kubejs:cobalt_block', dust: 'kubejs:cobalt_dust'
    },
    {
      id: 'iron', fluid: 'kubejs:molten_iron', mp: 307,
      sheet: 'create:iron_sheet', ingot: 'minecraft:iron_ingot',
      rod: 'createaddition:iron_rod', wire: 'createaddition:iron_wire',
      nugget: 'minecraft:iron_nugget', block: 'minecraft:iron_block', dust: 'kubejs:iron_dust'
    },
    {
      id: 'steel', fluid: 'tfmg:molten_steel', mp: 317,
      sheet: 'tfmg:heavy_plate', ingot: 'tfmg:steel_ingot',
      rod: 'vintageimprovements:steel_rod', wire: 'vintageimprovements:steel_wire',
      nugget: 'tfmg:steel_nugget', block: 'tfmg:steel_block', dust: 'kubejs:steel_dust'
    }
  ]

  function getHeat(mat) { return mat.mp >= 200 ? 'superheated' : 'heated' }

  function castTime(mat, type) {
    const base = mat.mp
    if (type === 'sheet' || type === 'ingot') return base
    if (type === 'rod') return Math.round(base / 2)
    if (type === 'nugget') return Math.round(base / 5)
    if (type === 'block') return base * 5
    return base
  }

  function meltTime(mat, type) {
    const ingotTime = Math.round(mat.mp / 3)
    const dustTime = Math.round(ingotTime * 0.7)

    if (type === 'dust') return dustTime
    if (type === 'sheet' || type === 'ingot') return ingotTime
    if (type === 'wire' || type === 'rod') return Math.round(ingotTime / 2)
    if (type === 'nugget') return Math.round(ingotTime / 5)
    if (type === 'block') return ingotTime * 5
    return ingotTime
  }

  const MOLD_TYPES = ['terracotta', 'fireproof_brick']
  const SHAPES = ['sheet', 'rod', 'nugget', 'ingot']

  MATERIALS.forEach(mat => {
    MOLD_TYPES.forEach(moldPrefix => {
      if (moldPrefix === 'terracotta' && mat.mp >= 250) return
      SHAPES.forEach(shape => {
        const moldItem = `kubejs:${moldPrefix}_${shape}_mold`
        const outputItem = mat[shape]
        if (!outputItem) return
        const amount = (shape === 'sheet' || shape === 'ingot') ? 90 : (shape === 'rod' ? 45 : 10)
        const time = castTime(mat, shape)
        tableCasting(moldItem, mat.fluid, amount, time, outputItem)
      })
    })

    if (mat.block) {
      basinCasting(mat.fluid, 810, castTime(mat, 'block'), mat.block)
    }

    const heat = getHeat(mat)
    const bulkMin = heat === 'superheated' ? 9 : 4
    const bulkMax = 50

    const itemTypes = ['sheet', 'wire', 'rod', 'dust', 'nugget', 'ingot', 'block']
    itemTypes.forEach(type => {
      const item = mat[type]
      if (!item) return
      const amount = (type === 'block') ? 810 :
                    (type === 'wire' || type === 'rod') ? 45 :
                    (type === 'nugget') ? 10 : 90
      const time = meltTime(mat, type)
      melting(heat, item, amount, time, mat.fluid)
      bulkMelting(bulkMin, bulkMax, item, amount, time, mat.fluid)
    })
  })

//basinCasting
  
  basinCasting('kubejs:molten_slime',1000,43,'minecraft:slime_block')
  basinCasting('tfmg:molten_slag',1000,1482,'tfmg:slag_block')

  tableCasting('kubejs:terracotta_ingot_mold','tfmg:molten_plastic',90,46,'tfmg:plastic_sheet')
  tableCasting('kubejs:fireproof_brick_ingot_mold','tfmg:molten_plastic',90,46,'tfmg:plastic_sheet')
  basinCasting('tfmg:molten_plastic',810,230,'tfmg:plastic_block')

  tableCasting('kubejs:terracotta_ingot_mold','kubejs:polyvinyl_chloride_plastic',90,46,'kubejs:polyvinyl_chloride_plastic_sheet')
  tableCasting('kubejs:fireproof_brick_ingot_mold','kubejs:polyvinyl_chloride_plastic',90,46,'kubejs:polyvinyl_chloride_plastic_sheet')
  basinCasting('kubejs:polyvinyl_chloride_plastic',810,230,'kubejs:polyvinyl_chloride_plastic_block')

//mixing

  alloying(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',40)
  alloying(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',40)
  alloying(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',90)
  alloying(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)

  alloyingH(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',40)
  alloyingH(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',40)
  alloyingH(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',90)
  alloyingH(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)

  alloyingSH(4,'kubejs:molten_gold',30,'kubejs:molten_silver',10,'kubejs:molten_electrum',40)
  alloyingSH(4,'kubejs:molten_copper',30,'kubejs:molten_nickel',10,'kubejs:molten_constantan',40)
  alloyingSH(9,'kubejs:molten_copper',80,'kubejs:molten_tin',10,'kubejs:molten_bronze',90)
  alloyingSH(2,'kubejs:molten_copper',10,'kubejs:molten_zinc',10,'kubejs:molten_brass',20)
  
})