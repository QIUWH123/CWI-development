ServerEvents.tags('item', event => {

    global.materialTypes.forEach(mat => {
        const items = mat.items

        if (items.ingot) event.add('cwi:ingots', items.ingot)
        if (items.sheet) event.add('cwi:sheets', items.sheet)
        if (items.nugget) event.add('cwi:nuggets', items.nugget)
        if (items.powder) event.add('cwi:powders', items.powder)
        if (items.wire) event.add('cwi:wires', items.wire)
        if (items.rod) event.add('cwi:rods', items.rod)
        if (items.block) event.add('cwi:blocks', items.block)
    })

})