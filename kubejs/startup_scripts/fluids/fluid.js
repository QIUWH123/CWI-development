function registerMoltenMetal(event, name, color) {
  event.create(name)
    .stillTexture('kubejs:fluid/metal_still')
    .flowingTexture('kubejs:fluid/metal_flow')
    .color(color)
    .tag('cwi:moltens')
    .bucketItem
    .textureJson({
      layer0: 'kubejs:item/fireproof_bucket',
      layer1: 'kubejs:item/fluids/moltens'
    })
    .tag('cwi:containers')
    .tag('cwi:moltens')
}

function registerFluid(event, name, color, type, overrides) {
  if (!type) type = 'thin'
  if (!overrides) overrides = {}
  var builder = event.create(name)
  if (overrides.still) {
    builder = builder.stillTexture(overrides.still).flowingTexture(overrides.flowing)
  } else {
    builder = builder[type === 'thick' ? 'thickTexture' : 'thinTexture'](color)
  }
  builder
    .bucketItem
    .textureJson(overrides.textureJson || {
      layer0: 'kubejs:item/fluid_container',
      layer1: 'kubejs:item/fluids/fluids'
    })
    .tag('cwi:containers')
}

function registerGas(event, name, color) {
  event.create(name)
    .color(color)
    .stillTexture('kubejs:fluid/gas_texture')
    .gaseous()
    .noBlock()
    .tag('cwi:gasses')
    .bucketItem
    .textureJson({
      layer0: 'kubejs:item/gas_container',
      layer1: 'kubejs:item/fluids/fluids'
    })
    .tag('cwi:containers')
    .tag('cwi:gasses')
}

var moltenMetals = [
  ['molten_aluminum', 0xE8FAFF],
  ['molten_vanadium', 0xEDE8ED],
  ['molten_tin', 0xC5E3FF],
  ['molten_silver', 0xD4FFF9],
  ['molten_molybdenum', 0xD4FFF9],
  ['molten_andesite_alloy', 0xD4FFF9],
  ['molten_zinc', 0x71eba5],
  ['molten_gold', 0xFFF860],
  ['molten_iron', 0xFF8A8A],
  ['molten_magnesium', 0xA9B9C4],
  ['molten_industrial_iron', 0xFF8A8A],
  ['molten_pig_iron', 0xFFABAB],
  ['molten_cast_iron', 0xFF9191],
  ['molten_copper', 0xFF6C40],
  ['molten_brass', 0xFFC800],
  ['molten_lead', 0x95A1FF],
  ['molten_cobalt', 0xA7C9E8],
  ['molten_nickel', 0xF2F2D0],
  ['molten_constantan', 0xF5DFB3],
  ['molten_bronze', 0x7D511B],
  ['molten_electrum', 0x9E8518],
  ['molten_glass', 0xFFD8D8]
]

var specialFluids = [
  ['molten_sticky_resin', null, null, 'kubejs:fluid/molten_sticky_resin_still', 'kubejs:fluid/molten_sticky_resin_flow', {
    layer0: 'kubejs:item/fluid_container',
    layer1: 'kubejs:item/_',
    layer2: 'kubejs:item/fluids/sticky_resin'
  }],
  ['tfmg:concentrated_sulfuric_acid', null, null, 'kubejs:fluid/concentrated_sulfuric_acid_still', 'kubejs:fluid/concentrated_sulfuric_acid_flow', {
    layer0: 'kubejs:item/fluid_container',
    layer1: 'kubejs:item/_',
    layer2: 'kubejs:item/fluids/concentrated_sulfuric_acid'
  }]
]

var normalFluids = [
  ['condensed_air', 0xFFFFFF, 'thick'],
  ['syrup', 0xD4BE5D, 'thick'],
  ['wheat_juice', 0xD4BE5D, 'thick'],
  ['molten_slime', 0xA5FF3A, 'thick'],
  ['molten_rubber', 0xE5A020, 'thick'],
  ['chromatic_waste', 0xC800A0, 'thick'],
  ['wood_vinegar', 0x9C7B60, 'thick'],
  ['humic_acid_slurry', 0x6B4226, 'thick'],
  ['thermophile_broth', 0xA64324, 'thick'],
  ['ammonia_solution', 0xFFD5AC, 'thick'],
  ['calcium_chloride_solution', 0xF5F4DF, 'thick'],
  ['nitrate_solution', 0xF8FFEE, 'thick'],
  ['molten_polyethylene', 0xE4E8EB, 'thick'],
  ['molten_polypropylene', 0xD0EEF7, 'thick'],
  ['molten_polyvinyl_chloride', 0xE8E8CA, 'thick'],
  ['ferric_chloride', 0x6B4226, 'thin'],
  ['nitrogen_fertilizer', 0xFFEB63, 'thin'],
  ['nitric_acid', 0xC25A34, 'thin'],
  ['caustic_soda', 0xFFD6C4, 'thin'],
  ['muriatic_acid', 0xC0E030, 'thin'],
  ['acetic_acid', 0xF0E68C, 'thin'],
  ['propionic_acid', 0xFFDAB9, 'thin'],
  ['lactic_acid', 0xFFCBA4, 'thin'],
  ['brine', 0x62DEFF, 'thin'],
  ['bittern', 0x2A5DA8, 'thin'],
  ['distilled_water', 0xB0EEFF, 'thin'],
  ['pan_precursor', 0x8B6B50, 'thin'],
  ['acrylonitrile', 0x374E60, 'thin'],
  ['acetone', 0x90A0A0, 'thin'],
  ['silicate_solution', 0xC0D0D0, 'thin'],
  ['methanol', 0xE0B040, 'thin'],
  ['synthetic_ester_base_oil', 0xF0C060, 'thin'],
  ['epoxy_resin', 0xD0A050, 'thin'],
  ['paraffin_oil', 0xFFD070, 'thin'],
  ['cracked_paraffin_oil', 0xE8B840, 'thin'],
  ['reformate', 0x4A6A80, 'thin'],
  ['aromatic_mix', 0x5A7A90, 'thin'],
  ['platinum_catalyst_carrier', 0x3A5A70, 'thin'],
  ['hexamethylenediamine_solution', 0xD0D0B0, 'thin'],
  ['phenol', 0xC6F0F5, 'thin'],
  ['epichlorohydrin', 0xF3F5DA, 'thin'],
  ['adipic_acid_solution', 0xE0F0FF, 'thin'],
  ['cyclohexanol', 0x6080A0, 'thin'],
  ['cyclohexane', 0x8098B0, 'thin'],
  ['condensed_natural_gas', 0xC7FFFA, 'thin'],
  ['vinyl_chloride_monomer', 0xA0A090, 'thin'],
  ['condensed_cracked_naphtha', 0xC25A34, 'thin'],
  ['condensed_cracked_ethane', 0xD2E6AA, 'thin'],
  ['condensed_cracked_propane', 0x97C2A1, 'thin']
]

var gases = [
  ['oxygen', 0xFAFFFA],
  ['nitrogen', 0xD0E0F0],
  ['nitrogen_dioxide', 0xF08060],
  ['ammonia', 0xFFE5C0],
  ['chlorine', 0xE8FF40],
  ['natural_gas', 0xE0FFFF],
  ['argon', 0xC0A0C0],
  ['helium', 0xD0C0E0],
  ['hydrogen_sulfide', 0xFFD070],
  ['sulfur_dioxide', 0xEBB92F],
  ['steam', 0xF8F8F8],
  ['ethane', 0xE0F0C0],
  ['cracked_ethane', 0xD8E8A8],
  ['cracked_propane', 0xB0D8B8],
  ['cracked_naphtha', 0xE07050],
  ['purified_natural_gas', 0xE0FFFF],
  ['methane', 0x7090A8],
  ['benzene', 0x80A0C0],
  ['toluene', 0x90B0D0],
  ['xylene', 0xA0C0E0],
  ['syngas', 0xB09070]
]

StartupEvents.registry('fluid', function (event) {
  moltenMetals.forEach(function (entry) {
    registerMoltenMetal(event, entry[0], entry[1])
  })

  specialFluids.forEach(function (entry) {
    registerFluid(event, entry[0], null, null, {
      still: entry[3],
      flowing: entry[4],
      textureJson: entry[5]
    })
  })

  normalFluids.forEach(function (entry) {
    registerFluid(event, entry[0], entry[1], entry[2])
  })

  gases.forEach(function (entry) {
    registerGas(event, entry[0], entry[1])
  })
})