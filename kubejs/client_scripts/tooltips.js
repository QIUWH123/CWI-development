ItemEvents.tooltip(event => {

    Object.values(global.materialTypes).forEach(material => {
        if (!material.items || !material.formula) return
        Object.values(material.items).forEach(itemId => {
            if (itemId) {
                event.add(itemId, Text.of(material.formula).yellow())
            }
        })
    })

    event.addAdvanced('#cwi:hot_items', (item, advanced, text) => {
        text.add(Text.translate('tooltip.kubejs.hot').red())
    })

    event.addAdvanced('#cwi:no_gravity_items', (item, advanced, text) => {
        text.add(Text.translate('tooltip.kubejs.no_gravity').white())
    })

})