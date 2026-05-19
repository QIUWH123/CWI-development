//molten metals

StartupEvents.registry('fluid', event => {

    event.create('molten_aluminum')
        .thickTexture(0xE8FAFF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/aluminum'
        })

    event.create('molten_vanadium')
        .thickTexture(0xEDE8ED)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/vanadium'
        })

    event.create('molten_tin')
        .thickTexture(0xC5E3FF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer1: 'kubejs:item/fluids/molten/tin'
        })

    event.create('molten_silver')
        .thickTexture(0xD4FFF9)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/silver'
        })

    event.create('molten_andesite_alloy')
        .thickTexture(0xD4FFF9)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/andesite_alloy'
        })

    event.create('molten_zinc')
        .thickTexture(0x71eba5)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/zinc'
        })

    event.create('molten_gold')
        .thickTexture(0xFFF860)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/gold'
        })

    event.create('molten_iron')
        .thickTexture(0xFF8A8A)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/iron'
        })

    event.create('molten_pig_iron')
        .thickTexture(0xFFABAB)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/pig_iron'
        })

    event.create('molten_cast_iron')
        .thickTexture(0xFF9191)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/cast_iron'
        })

    event.create('molten_copper')
        .thickTexture(0xFF6C40)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/copper'
        })

    event.create('molten_brass')
        .thickTexture(0xFFC800)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/brass'
        })

    event.create('molten_lead')
        .thickTexture(0x95A1FF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/lead'
        })
        
    event.create('molten_cobalt')
        .thickTexture(0xA7C9E8)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/cobalt'
        })

    event.create('molten_nickel')
        .thickTexture(0xF2F2D0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/nickel'
        })

    event.create('molten_constantan')
        .thickTexture(0xF5DFB3)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/constantan'
        })

    event.create('molten_bronze')
        .thickTexture(0x7D511B)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/bronze'
        })

    event.create('molten_electrum')
        .thickTexture(0x9E8518)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fireproof_bucket',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/electrum'
        })

    event.create('molten_glass')
        .thickTexture(0xFFD8D8)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/molten/glass'
        })

})

//fluids

StartupEvents.registry('fluid', event => {

    event.create('origin_blood')
        .stillTexture('kubejs:fluid/origin_blood_still')
        .flowingTexture('kubejs:fluid/origin_blood_flow')

    event.create('redstone_acid')
        .stillTexture('kubejs:fluid/redstone_acid_still')
        .flowingTexture('kubejs:fluid/redstone_acid_flow')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/redstone_acid'
        })

    event.create('molten_sticky_resin')
        .stillTexture('kubejs:fluid/molten_sticky_resin_still')
        .flowingTexture('kubejs:fluid/molten_sticky_resin_flow')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/sticky_resin'
        })

    event.create('tfmg:concentrated_sulfuric_acid')
        .stillTexture('kubejs:fluid/concentrated_sulfuric_acid_still')
        .flowingTexture('kubejs:fluid/concentrated_sulfuric_acid_flow')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/_',
            layer2: 'kubejs:item/fluids/concentrated_sulfuric_acid'
        })

    event.create('condensed_air')
        .thickTexture(0xFFFFFF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('syrup')
        .thickTexture(0xD4BE5D)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('wheat_juice')
        .thickTexture(0xD4BE5D)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('molten_slime')
        .thickTexture(0xA5FF3A)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('molten_rubber')
        .thickTexture(0xE5A020)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('chromatic_waste')
        .thickTexture(0xC800A0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('wood_vinegar')
        .thickTexture(0x9C7B60)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('humic_acid_slurry')
        .thickTexture(0x6B4226)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('ammonia_solution')
        .thickTexture(0xFFD5AC)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('nitrate_solution')
        .thickTexture(0xF8FFEE)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('nitrogen_fertilizer')
        .thinTexture(0xFFEB63)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('nitric_acid')
        .thinTexture(0xC25A34)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('caustic_soda')
        .thinTexture(0xFFD6C4)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('muriatic_acid')
        .thinTexture(0xC0E030)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('acetic_acid')
        .thinTexture(0xF0E68C)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('propionic_acid')
        .thinTexture(0xFFDAB9)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('lactic_acid')
        .thinTexture(0xFFCBA4)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('brine')
        .thinTexture(0x62DEFF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('bittern')
        .thinTexture(0x2A5DA8)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('distilled_water')
        .thinTexture(0xB0EEFF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('pan_precursor')
        .thinTexture(0x8B6B50)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('acrylonitrile')
        .thinTexture(0x374E60)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('acetone')
        .thinTexture(0x90A0A0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('silicate_solution')
        .thinTexture(0xC0D0D0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('methanol')
        .thinTexture(0xE0B040)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('synthetic_ester_base_oil')
        .thinTexture(0xF0C060)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('epoxy_resin')
        .thinTexture(0xD0A050)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('paraffin_oil')
        .thinTexture(0xFFD070)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('cracked_paraffin_oil')
        .thinTexture(0xE8B840)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('reformate')
        .thinTexture(0x4A6A80)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('aromatic_mix')
        .thinTexture(0x5A7A90)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('platinum_catalyst_carrier')
        .thinTexture(0x3A5A70)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
    
    event.create('hexamethylenediamine_solution')
        .thinTexture(0xD0D0B0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('phenol')
        .thinTexture(0xC6F0F5)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('epichlorohydrin')
        .thinTexture(0xF3F5DA)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('adipic_acid_solution')
        .thinTexture(0xE0F0FF)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('cyclohexanol')
        .thinTexture(0x6080A0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('cyclohexane')
        .thinTexture(0x8098B0)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('condensed_natural_gas')
        .thinTexture(0xC7FFFA)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('polyvinyl_chloride_plastic')
        .thinTexture(0xC0C0A8)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('vinyl_chloride_monomer')
        .thinTexture(0xA0A090)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('condensed_cracked_naphtha')
        .thinTexture(0xC25A34)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('condensed_cracked_ethane')
        .thinTexture(0xD2E6AA)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('condensed_cracked_propane')
        .thinTexture(0x97C2A1)
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

})

//gaseous

StartupEvents.registry('fluid', event => {

    event.create('oxygen')
        .color(0xFAFFFA)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('nitrogen')
        .color(0xD0E0F0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('nitrogen_dioxide')
        .color(0xF08060)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('ammonia')
        .color(0xFFE5C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('chlorine')
        .color(0xE8FF40)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('natural_gas')
        .color(0xE0FFFF)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('argon')
        .color(0xC0A0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('helium')
        .color(0xD0C0E0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('hydrogen_sulfide')
        .color(0xFFD070)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('sulfur_dioxide')
        .color(0xEBB92F)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('steam')
        .color(0xF8F8F8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('ethane')
        .color(0xE0F0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('cracked_ethane')
        .color(0xD8E8A8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('cracked_propane')
        .color(0xB0D8B8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('cracked_naphtha')
        .color(0xE07050)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('purified_natural_gas')
        .color(0xE0FFFF)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('methane')
        .color(0x7090A8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('benzene')
        .color(0x80A0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        
    event.create('toluene')
        .color(0x90B0D0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('xylene')
        .color(0xA0C0E0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

    event.create('syngas')
        .color(0xB09070)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })

})