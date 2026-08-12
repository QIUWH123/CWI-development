ServerEvents.recipes(event => {

// Material Data And Mold Setup

    const materials = global.materialTypes
    const moldTypes = ['terracotta', 'fireproof_brick']
    const shapes = ['sheet', 'rod', 'nugget', 'ingot']

    function calcTime(event, mat, shape) {
        const blockTime = mat.mp
        const ingotTime = Math.round(blockTime / 5)
        if (shape === 'block') return blockTime
        if (shape === 'sheet' || shape === 'ingot') return ingotTime
        if (shape === 'nugget') return Math.round(ingotTime / 5)
        if (shape === 'rod' || shape === 'wire' || shape === 'spring') return Math.round(ingotTime / 3)
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
                tableCasting(event, moldItem, AddFluid(amount + ' ' + mat.fluid), calcTime(event, mat, shape), AddItem(outputItem))
            })
        })

        if (mat.items.block) {
            basinCasting(event, [AddFluid('810 ' + mat.fluid)], calcTime(event, mat, 'block'), AddItem(mat.items.block))
        }

        if (mat.mp > 2400) return
        
        const heat = mat.mp >= 1200 ? 'superheated' : 'heated'
        const bulkMin = heat === 'superheated' ? 9 : 4
        const bulkMax = 50
        const itemTypes = ['sheet', 'wire', 'spring', 'rod', 'powder', 'nugget', 'ingot', 'block']
        itemTypes.forEach(type => {
            const itemId = mat.items[type]
            if (!itemId) return
            const amount = 
                (type === 'block') ? 810 :
                (type === 'wire' || type === 'rod') ? 45 :
                (type === 'nugget') ? 10 : 90
            melting(event, heat, AddItem(itemId), calcTime(event, mat, type), AddFluid(amount + ' ' + mat.fluid))
            bulkMelting(event, bulkMin, bulkMax, AddItem(itemId), calcTime(event, mat, type), AddFluid(amount + ' ' + mat.fluid))
        })
    })

// Auto Generated Pressing Milling And Rolling

    materials.forEach(mat => {
        if (!['metal', 'alloy', 'polymer'].includes(mat.type)) return
        if (!mat.items) return

        const items = mat.items

        if (items.ingot && items.sheet && mat.stiffness < 400) event.recipes.create.pressing(items.sheet, items.ingot)
        if (items.ingot && items.powder && mat.stiffness < 400) event.recipes.create.milling(items.powder, items.ingot)
        if (items.sheet && items.powder && mat.stiffness < 400) event.recipes.create.milling(items.powder, items.sheet)
        if (items.powder && items.ingot && mat.mp < 1200) event.blasting(items.powder, items.ingot)
        if (items.powder && items.ingot && mat.mp < 800) event.smelting(items.powder, items.ingot)
        if (items.ingot && items.rod && mat.stiffness < 400) rolling(event, AddItem(items.ingot), AddItem('2 ' + items.rod))
        if (items.sheet && items.wire && mat.stiffness < 400) rolling(event, AddItem(items.sheet), AddItem('2 ' + items.wire))
        if (items.wire && items.spring && mat.stiffness < 400) coiling(event, AddItem(items.wire), AddItem(items.spring), 7.5 * Math.sqrt(mat.stiffness))
        if (items.rod && items.spring && mat.stiffness < 300) coiling(event, AddItem(items.rod), AddItem(items.spring), 10 * Math.sqrt(mat.stiffness))
        if (items.ingot && items.rod && mat.stiffness < 100) cutting(event, AddItem(items.ingot), AddItem('2 ' + items.rod))
        if (items.sheet && items.wire && mat.stiffness < 100) cutting(event, AddItem(items.sheet), AddItem('2 ' + items.wire))
        if (items.ingot && items.sheet && mat.stiffness < 250) addDepotConversion(items.ingot, items.sheet, (mat.stiffness < 150) ? 1 : (mat.stiffness < 200) ? 2 : 3)
        if (items.ingot && items.block && (items.ingot.startsWith('kubejs:') || items.block.startsWith('kubejs:'))) addStoragePair(event, items.block, items.ingot, 9)
        if (items.ingot && items.nugget && (items.ingot.startsWith('kubejs:') || items.nugget.startsWith('kubejs:'))) addStoragePair(event, items.ingot, items.nugget, 9)
    })

})