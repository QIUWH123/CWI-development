//molten metals

StartupEvents.registry('fluid', event => {

    event.create('molten_aluminum')
        .thickTexture(0xDEDEF0)

    event.create('molten_vanadium')
        .thickTexture(0xDEDEF0)

    event.create('molten_tin')
        .thickTexture(0xC5E3FF)

    event.create('molten_silver')
        .thickTexture(0xD4FFF9)

    event.create('molten_andesite_alloy')
        .thickTexture(0xD4FFF9)

    event.create('molten_zinc')
        .thickTexture(0x71eba5)

    event.create('molten_gold')
        .thickTexture(0xFFF860)

    event.create('molten_iron')
        .thickTexture(0xFFD8D8)

    event.create('molten_pig_iron')
        .thickTexture(0xFFD8D8)

    event.create('molten_cast_iron')
        .thickTexture(0xFFD8D8)

    event.create('molten_copper')
        .thickTexture(0xFF6C40)

    event.create('molten_brass')
        .thickTexture(0xFFC800)

    event.create('molten_lead')
        .thickTexture(0x95A1FF)
        
    event.create('molten_cobalt')
        .thickTexture(0x95A1FF)

    event.create('molten_nickel')
        .thickTexture(0xf2f2d0)

    event.create('molten_constantan')
        .thickTexture(0xf2f2d0)

    event.create('molten_bronze')
        .thickTexture(0x7d511b)

    event.create('molten_electrum')
        .thickTexture(0x9e8518)

})

//fluids

StartupEvents.registry('fluid', event => {

    event.create('origin_blood')
        .stillTexture('kubejs:fluid/origin_blood_still')
        .flowingTexture('kubejs:fluid/origin_blood_flow')

    event.create('redstone_acid')
        .stillTexture('kubejs:fluid/redstone_acid_still')
        .flowingTexture('kubejs:fluid/redstone_acid_flow')

    event.create('molten_sticky_resin')
        .stillTexture('kubejs:fluid/molten_sticky_resin_still')
        .flowingTexture('kubejs:fluid/molten_sticky_resin_flow')

    event.create('molten_glass')
        .stillTexture('kubejs:fluid/molten_glass_still')
        .flowingTexture('kubejs:fluid/molten_glass_flow')

    event.create('tfmg:concentrated_sulfuric_acid')
        .stillTexture('kubejs:fluid/concentrated_sulfuric_acid_still')
        .flowingTexture('kubejs:fluid/concentrated_sulfuric_acid_flow')

    event.create('condensed_air')
        .thickTexture(0xFFFFFF)

    event.create('syrup')
        .thickTexture(0xD4BE5D)

    event.create('wheat_juice')
        .thickTexture(0xD4BE5D)

    event.create('molten_slime')
        .thickTexture(0xA5FF3A)

    event.create('molten_rubber')
        .thickTexture(0xE5A020)
        
    event.create('chromatic_waste')
        .thickTexture(0xC800A0)

    event.create('wood_vinegar')
        .thickTexture(0x9C7B60)
    
    event.create('humic_acid_slurry')
        .thickTexture(0x6B4226)

    event.create('ammonia_solution')
        .thickTexture(0xFFD5AC)

    event.create('nitrate_solution')
        .thickTexture(0xF8FFEE)

    event.create('nitrogen_fertilizer')
        .thinTexture(0xFFEB63)

    event.create('nitric_acid')
        .thinTexture(0xC25A34)

    event.create('caustic_soda')
        .thinTexture(0xFFD6C4)

    event.create('muriatic_acid')
        .thinTexture(0xC0E030)

    event.create('acetic_acid')
        .thinTexture(0xF0E68C)

    event.create('propionic_acid')
        .thinTexture(0xFFDAB9)

    event.create('lactic_acid')
        .thinTexture(0xFFCBA4)

    event.create('brine')
        .thinTexture(0x62DEFF)

    event.create('bittern')
        .thinTexture(0x2A5DA8)
    
    event.create('distilled_water')
        .thinTexture(0xB0EEFF)

    event.create('pan_precursor')
        .thinTexture(0x8B6B50)

    event.create('acrylonitrile')
        .thinTexture(0x374E60)
        
    event.create('acetone')
        .thinTexture(0x90A0A0)
        
    event.create('silicate_solution')
        .thinTexture(0xC0D0D0)
    
    event.create('methanol')
        .thinTexture(0xE0B040)
    
    event.create('synthetic_ester_base_oil')
        .thinTexture(0xF0C060)

    event.create('epoxy_resin')
        .thinTexture(0xD0A050)
        
    event.create('paraffin_oil')
        .thinTexture(0xFFD070)
    
    event.create('cracked_paraffin_oil')
        .thinTexture(0xE8B840)

    event.create('reformate')
        .thinTexture(0x4A6A80)
        
    event.create('aromatic_mix')
        .thinTexture(0x5A7A90)
        
    event.create('platinum_catalyst_carrier')
        .thinTexture(0x3A5A70)
    
    event.create('hexamethylenediamine_solution')
        .thinTexture(0xD0D0B0)

    event.create('phenol')
        .thinTexture(0xC6F0F5)
        
    event.create('epichlorohydrin')
        .thinTexture(0xF3F5DA)

    event.create('adipic_acid_solution')
        .thinTexture(0xE0F0FF)
        
    event.create('cyclohexanol')
        .thinTexture(0x6080A0)
        
    event.create('cyclohexane')
        .thinTexture(0x8098B0)

    event.create('condensed_natural_gas')
        .thinTexture(0xC7FFFA)

    event.create('polyvinyl_chloride_plastic')
        .thinTexture(0xC0C0A8)
        
    event.create('vinyl_chloride_monomer')
        .thinTexture(0xA0A090)

    event.create('condensed_cracked_naphtha')
        .thinTexture(0xC25A34)
        
    event.create('condensed_cracked_ethane')
        .thinTexture(0xD2E6AA)
        
    event.create('condensed_cracked_propane')
        .thinTexture(0x97C2A1)

})

//gaseous

StartupEvents.registry('fluid', event => {

    event.create('oxygen')
        .color(0xFAFFFA)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('nitrogen')
        .color(0xD0E0F0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('nitrogen_dioxide')
        .color(0xF08060)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('ammonia')
        .color(0xFFE5C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('chlorine')
        .color(0xE8FF40)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('natural_gas')
        .color(0xE0FFFF)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('argon')
        .color(0xC0A0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('helium')
        .color(0xD0C0E0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('hydrogen_sulfide')
        .color(0xFFD070)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('sulfur_dioxide')
        .color(0xEBB92F)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('steam')
        .color(0xF8F8F8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('ethane')
        .color(0xE0F0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('cracked_ethane')
        .color(0xD8E8A8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('cracked_propane')
        .color(0xB0D8B8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('cracked_naphtha')
        .color(0xE07050)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('purified_natural_gas')
        .color(0xE0FFFF)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('methane')
        .color(0x7090A8)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('benzene')
        .color(0x80A0C0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        
    event.create('toluene')
        .color(0x90B0D0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('xylene')
        .color(0xA0C0E0)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

    event.create('syngas')
        .color(0xB09070)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()

})