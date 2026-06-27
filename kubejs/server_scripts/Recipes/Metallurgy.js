ServerEvents.recipes(event => {

// Casting Functions

    function tableCasting(mold, input, amount, time, output) {
        event.custom({
            "type": "createmetallurgy:casting_in_table",
            "ingredients": [{ "item": mold }, { "amount": amount, "fluid": input }],
            "processingTime": time,
            "result": { "item": output }
        })
    }

    function basinCasting(input, amount, time, output) {
        event.custom({
            "type": "createmetallurgy:casting_in_basin",
            "ingredients": [{ "amount": amount, "fluid": input }],
            "processingTime": time,
            "result": { "item": output }
        })
    }

    function basinCastingItem(item, input, amount, time, output) {
        event.custom({
            "type": "createmetallurgy:casting_in_basin",
            "ingredients": [{ "item": item }, { "amount": amount, "fluid": input }],
            "processingTime": time,
            "result": { "item": output }
        })
    }

// Melting Functions

    function melting(heat, input, amount, time, output) {
        event.custom({
            "type": "createmetallurgy:melting",
            "heatRequirement": heat,
            "ingredients": [{ "item": input }],
            "processingTime": time,
            "results": [{ "amount": amount, "fluid": output }]
        })
    }

    function bulkMelting(minHeat, maxHeat, input, amount, time, output) {
        event.custom({
            "type": "createmetallurgy:bulk_melting",
            "ingredients": [{ "item": input }],
            "maxHeatRequirement": maxHeat,
            "minHeatRequirement": minHeat,
            "processingTime": time,
            "results": [{ "amount": amount, "fluid": output }]
        })
    }

// Alloying Functions

    function alloying(time, input1, amount1, input2, amount2, output, outputAmount) {
        event.custom({
            "type": "createmetallurgy:alloying",
            "ingredients": [{ "amount": amount1, "fluid": input1 }, { "amount": amount2, "fluid": input2 }],
            "processingTime": time,
            "results": [{ "amount": outputAmount, "fluid": output }]
        })
    }

    function alloyingH(time, input1, amount1, input2, amount2, output, outputAmount) {
        event.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": "heated",
            "ingredients": [{ "amount": amount1, "fluid": input1 }, { "amount": amount2, "fluid": input2 }],
            "processingTime": time,
            "results": [{ "amount": outputAmount, "fluid": output }]
        })
    }

    function alloyingSH(time, input1, amount1, input2, amount2, output, outputAmount) {
        event.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": "superheated",
            "ingredients": [{ "amount": amount1, "fluid": input1 }, { "amount": amount2, "fluid": input2 }],
            "processingTime": time,
            "results": [{ "amount": outputAmount, "fluid": output }]
        })
    }

    function itemAlloying(heat, time, input1, count1, input2, count2, output, outputAmount) {
        event.custom({
            "type": "createmetallurgy:alloying",
            "heatRequirement": heat,
            "ingredients": [{ "count": count1, "item": input1 }, { "count": count2, "item": input2 }],
            "processingTime": time,
            "results": [{ "amount": outputAmount, "fluid": output }]
        })
    }

// Material Data And Mold Setup

    const materials = global.materialTypes
    const moldTypes = ['terracotta', 'fireproof_brick']
    const shapes = ['sheet', 'rod', 'nugget', 'ingot']

    function getHeat(mat) {
        return mat.mp >= 1200 ? 'superheated' : 'heated'
    }

    function calcTime(mat, shape) {
        const blockTime = mat.mp
        const ingotTime = Math.round(blockTime / 5)
        if (shape === 'block') return blockTime
        if (shape === 'sheet' || shape === 'ingot') return ingotTime
        if (shape === 'nugget') return Math.round(ingotTime / 5)
        if (shape === 'rod' || shape === 'wire') return Math.round(ingotTime / 3)
        if (shape === 'powder') return Math.round(ingotTime * 0.75)
        return ingotTime
    }

// Auto Generated Casting Melting And Bulk Melting For All Metals And Alloys

    materials.forEach(mat => {
        if (!['metal', 'alloy', 'polymer'].includes(mat.type)) return
        if (!mat.fluid) return
        moldTypes.forEach(moldPrefix => {
            if (moldPrefix === 'terracotta' && mat.mp >= 1200) return
            shapes.forEach(shape => {
                const moldItem = `kubejs:${moldPrefix}_${shape}_mold`
                const outputItem = mat.items[shape]
                if (!outputItem) return
                const amount = (shape === 'sheet' || shape === 'ingot') ? 90 : (shape === 'rod' ? 45 : 10)
                tableCasting(moldItem, mat.fluid, amount, calcTime(mat, shape), outputItem)
            })
        })

        if (mat.items.block) {
            basinCasting(mat.fluid, 810, calcTime(mat, 'block'), mat.items.block)
        }

        const heat = getHeat(mat)
        const bulkMin = heat === 'superheated' ? 9 : 4
        const bulkMax = 50
        const itemTypes = ['sheet', 'wire', 'rod', 'powder', 'nugget', 'ingot', 'block']
        itemTypes.forEach(type => {
            const item = mat.items[type]
            if (!item) return
            const amount = 
                (type === 'block') ? 810 :
                (type === 'wire' || type === 'rod') ? 45 :
                (type === 'nugget') ? 10 : 90
            melting(heat, item, amount, calcTime(mat, type), mat.fluid)
            bulkMelting(bulkMin, bulkMax, item, amount, calcTime(mat, type), mat.fluid)
        })
    })

// Auto Generated Pressing Milling and Rolling

    materials.forEach(mat => {
        if (!['metal', 'alloy', 'polymer'].includes(mat.type)) return
        if (!mat.items) return

        const items = mat.items

        if (items.ingot && items.sheet) event.recipes.create.pressing(items.sheet, items.ingot)
        if (items.ingot && items.powder) event.recipes.create.milling(items.powder, items.ingot)
        if (items.sheet && items.powder) event.recipes.create.milling(items.powder, items.sheet)
        if (items.ingot && items.rod) event.custom({"type":"createaddition:rolling","input": {"item": items.ingot},"result": {"item": items.rod,"count": 2}})
        if (items.sheet && items.wire) event.custom({"type":"createaddition:rolling","input": {"item": items.sheet},"result": {"item": items.wire,"count": 2}})
        if (items.ingot && items.rod && mat.stiffness < 100) event.custom({"type": "createdieselgenerators:wire_cutting", "ingredients": [{"item": items.ingot}], "results": [{"item": items.rod, "chance": 0.3,"count": 2}]})
        if (items.sheet && items.wire && mat.stiffness < 100) event.custom({"type": "createdieselgenerators:wire_cutting", "ingredients": [{"item": items.sheet}], "results": [{"item": items.wire, "chance": 0.3,"count": 2}]})
        if (items.ingot && items.sheet && mat.stiffness < 250) addDepotConversion(items.ingot, items.sheet, (mat.stiffness < 150) ? 1 : (mat.stiffness < 200) ? 2 : 3)
    })

// Special Melting And Casting

    melting('heated', 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')
    bulkMelting(4, 50, 'darkerdepths:amber', 150, 55, 'kubejs:molten_sticky_resin')

    basinCasting('kubejs:molten_slime', 1000, 43, 'minecraft:slime_block')
    basinCasting('tfmg:molten_slag', 1000, 1482, 'tfmg:slag_block')

// Alloying Recipes

    alloying(4, 'kubejs:molten_gold', 30, 'kubejs:molten_silver', 10, 'kubejs:molten_electrum', 40)
    alloying(4, 'kubejs:molten_copper', 30, 'kubejs:molten_nickel', 10, 'kubejs:molten_constantan', 40)
    alloying(5, 'kubejs:molten_copper', 40, 'kubejs:molten_tin', 10, 'kubejs:molten_bronze', 50)
    alloying(2, 'kubejs:molten_copper', 10, 'kubejs:molten_zinc', 10, 'kubejs:molten_brass', 20)

    alloyingH(4, 'kubejs:molten_gold', 30, 'kubejs:molten_silver', 10, 'kubejs:molten_electrum', 40)
    alloyingH(4, 'kubejs:molten_copper', 30, 'kubejs:molten_nickel', 10, 'kubejs:molten_constantan', 40)
    alloyingH(5, 'kubejs:molten_copper', 40, 'kubejs:molten_tin', 10, 'kubejs:molten_bronze', 50)
    alloyingH(2, 'kubejs:molten_copper', 10, 'kubejs:molten_zinc', 10, 'kubejs:molten_brass', 20)

    alloyingSH(4, 'kubejs:molten_gold', 30, 'kubejs:molten_silver', 10, 'kubejs:molten_electrum', 40)
    alloyingSH(4, 'kubejs:molten_copper', 30, 'kubejs:molten_nickel', 10, 'kubejs:molten_constantan', 40)
    alloyingSH(5, 'kubejs:molten_copper', 40, 'kubejs:molten_tin', 10, 'kubejs:molten_bronze', 50)
    alloyingSH(2, 'kubejs:molten_copper', 10, 'kubejs:molten_zinc', 10, 'kubejs:molten_brass', 20)

})