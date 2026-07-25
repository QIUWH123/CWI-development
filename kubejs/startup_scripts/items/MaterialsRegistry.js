const TARGET_TYPES = ['ingot', 'nugget', 'sheet', 'rod', 'wire', 'spring']

const SPECIAL_TEXTURES = {
    'bronze_ingot': 'alloyed:item/bronze_ingot',
    'bronze_nugget': 'alloyed:item/bronze_nugget',
    'bronze_sheet': 'alloyed:item/bronze_sheet'
}

StartupEvents.registry('item', event => {
    
    global.materialTypes.forEach(material => {
        if (!material.items) return;

        TARGET_TYPES.forEach(type => {
            let fullId = material.items[type]
            if (!fullId || !fullId.startsWith('kubejs:')) return

            let itemID = fullId.substring(7)

            let texturePath;
            if (SPECIAL_TEXTURES[itemID]) texturePath = SPECIAL_TEXTURES[itemID]
            else texturePath = `kubejs:item/materials/${itemID}`

            event.create(itemID).texture(texturePath)
        })
    })
})

// Dust

StartupEvents.registry('item', event => {

    event.create('heated_powdered_obsidian')
    event.create('ash')
    event.create('dark_ash')

    const liteColorPowders = []

    const middleColorPowders = [
        ['pyrite_powder', 0xFFE587],
        ['sodium_bisulfate_powder', 0xFFFACD],
        ['caustic_soda_powder', 0xF0F8FF],
        ['lignin_powder', 0xE8C396],
        ['soda_powder', 0xE0FEFF],
        ['calcium_powder', 0xE0FEFF],
        ['calcium_chloride_powder', 0xEDFFBA],
        ['alumina_powder', 0xF0F0F0],
        ['iron_oxide_powder', 0x8B4513],
        ['chromium_oxide_powder', 0x2E8B57],
        ['silica_powder', 0xF5F5DC],
        ['potassium_powder', 0xC8C8C8],
        ['phosphate_powder', 0xFFDAB9],
        ['phosphoric_acid_powder', 0xFFFFE0],
        ['bisphenol_a', 0xE8E8E0],
        ['terephthalic_acid', 0xF0F0E8]
    ]

    const darkColorPowders = []

    const powders = [
        'bone_powder', 'quartz_powder', 'fluorite_powder', 'diamond_powder', 'coal_powder',
        'gold_powder', 'iron_powder', 'lapis_powder', 'copper_powder', 'brass_powder',
        'cobalt_powder', 'magnesium_powder', 'zinc_powder', 'vanadium_powder', 'silicon_powder',
        'charcoal_powder', 'andesite_alloy_powder', 'nickel_powder', 'lead_powder', 'amethyst_powder',
        'cast_iron_powder', 'lithium_powder', 'bronze_powder', 'electrum_powder', 'rusted_iron_powder',
        'constantan_powder', 'silver_powder', 'tin_powder', 'aluminum_powder', 'molybdenum_powder',
        'industrial_iron_powder', 'steel_powder', 'halite_powder', 'magnesite_powder',
        'lignite_powder', 'flint_powder', 'conglomerate_powder', 'phyllite_powder', 'darkslate_powder',
        'clay_powder', 'stone_powder', 'deepslate_powder', 'tuff_powder', 'claystone_powder',
        'granite_powder', 'diorite_powder', 'andesite_powder', 'basalt_powder', 'schist_powder',
        'gneiss_powder', 'rhyolite_powder', 'shale_powder', 'quartzite_powder', 'glass_powder', 'borax_powder',
        'polyethylene_powder', 'polypropylene_powder', 'polyvinyl_chloride_powder', 'polybenzimidazole_powder',
        'mineral_mix',

        'petroleum_coke_powder',
        'bismuth_powder',
        'zeolite_powder',
        'manganese_powder',
        'platinum_powder'
    ]

    powders.forEach(powder => {
        event.create(powder).texture(`kubejs:item/powders/${powder}`).tag('cwi:all_powders')
    })
    liteColorPowders.forEach(([powder, color]) => {
        event.create(powder).texture(`kubejs:item/powders/powder_lite`).color(color).tag('cwi:all_powders')
    })
    middleColorPowders.forEach(([powder, color]) => {
        event.create(powder).texture(`kubejs:item/powders/powder_middle`).color(color).tag('cwi:all_powders')
    })
    darkColorPowders.forEach(([powder, color]) => {
        event.create(powder).texture(`kubejs:item/powders/powder_dark`).color(color).tag('cwi:all_powders')
    })

})