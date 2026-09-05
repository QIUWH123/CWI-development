// ==================== 流体注册函数 ====================

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

function registerHeavyFLuid(event, name, color) {
    event.create(name)
        .stillTexture('kubejs:fluid/heavy_still')
        .flowingTexture('kubejs:fluid/heavy_flow')
        .color(color)
        .tag('cwi:heavy_fluids')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:heavy_fluids')
}

function registerChemicalFLuid(event, name, color) {
    event.create(name)
        .stillTexture('kubejs:fluid/chemical_still')
        .flowingTexture('kubejs:fluid/chemical_flow')
        .color(color)
        .tag('cwi:chemical_fluids')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:chemical_fluids')
}

function registerNormalFLuid(event, name, color) {
    event.create(name)
        .stillTexture('kubejs:fluid/normal_still')
        .flowingTexture('kubejs:fluid/normal_flow')
        .color(color)
        .tag('cwi:normal_fluids')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:normal_fluids')
}

function registerThickFLuid(event, name, color) {
    event.create(name)
        .thickTexture(color)
        .tag('cwi:thick_fluids')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:thick_fluids')
}

function registerThinFLuid(event, name, color) {
    event.create(name)
        .thinTexture(color)
        .tag('cwi:thin_fluids')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:thin_fluids')
}

function registerSpecialFLuid(event, name, overrides) {
    event.create(name)
        .stillTexture(overrides.still)
        .flowingTexture(overrides.flowing)
        .tag('cwi:special_fluids')
        .bucketItem
        .textureJson(overrides.textureJson || {
            layer0: 'kubejs:item/fluid_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:special_fluids')
}

function registerGas(event, name, color) {
    event.create(name)
        .color(color)
        .stillTexture('kubejs:fluid/gas_texture')
        .gaseous()
        .noBlock()
        .tag('cwi:gasses')
        .tag('tfmg:gas')
        .bucketItem
        .textureJson({
            layer0: 'kubejs:item/gas_container',
            layer1: 'kubejs:item/fluids/fluids'
        })
        .tag('cwi:containers')
        .tag('cwi:gasses')
}

// 统一注册入口
function registerFluids(event, name, color, type, overrides) {
    if (type === 'thick') registerThickFLuid(event, name, color)
    if (type === 'thin') registerThinFLuid(event, name, color)
    if (type === 'chemical') registerChemicalFLuid(event, name, color)
    if (type === 'molten') registerMoltenMetal(event, name, color)
    if (type === 'heavy') registerHeavyFLuid(event, name, color)
    if (type === 'normal') registerNormalFLuid(event, name, color)
    if (type === 'special') registerSpecialFLuid(event, name, overrides)
    if (type === 'gas') registerGas(event, name, color)
}

// ==================== 数据定义 ====================

global.moltenMetals = [
    ['molten_aluminum', 0xE8FAFF],
    ['molten_vanadium', 0xEDE8ED],
    ['molten_tin', 0xFFFAF0],
    ['molten_silver', 0xD4FFF9],
    ['molten_molybdenum', 0xD4FFF9],
    ['molten_titanium', 0xFFA29C],
    ['molten_chromium', 0xE4E6EB],
    ['molten_platinum', 0xB8CCFF],
    ['molten_andesite_alloy', 0xD4FFF9],
    ['molten_zinc', 0x71eba5],
    ['molten_gold', 0xFFF860],
    ['molten_iron', 0xFF8A8A],
    ['molten_steel', 0xFFAD8A],
    ['molten_stainless_steel', 0xF0F7FF],
    ['molten_lithium', 0xFFF1D9],
    ['molten_magnesium', 0xA9B9C4],
    ['molten_netherite', 0x403D45],
    ['molten_industrial_iron', 0xFF8A8A],
    ['molten_pig_iron', 0xFFABAB],
    ['molten_cast_iron', 0xFF9191],
    ['molten_copper', 0xFF8864],
    ['molten_brass', 0xFFC800],
    ['molten_lead', 0x95A1FF],
    ['molten_cobalt', 0xA7C9E8],
    ['molten_nickel', 0xF2F2D0],
    ['molten_constantan', 0xF5DFB3],
    ['molten_bronze', 0x7D511B],
    ['molten_electrum', 0x9E8518],
    ['molten_saltpeter', 0xFF75D8],
    ['molten_potassium_sodium_nitrate', 0xFFFBBF]
]

global.specialFluids = [
    ['redstone_acid', null, 'special', ['kubejs:fluid/redstone_acid_still', 'kubejs:fluid/redstone_acid_flow'], {
        container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/redstone_acid'
    }],
    ['molten_sticky_resin', null, 'special', ['kubejs:fluid/molten_sticky_resin_still', 'kubejs:fluid/molten_sticky_resin_flow'], {
        container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/sticky_resin'
    }],
    ['pulp', null, 'special', ['kubejs:fluid/pulp_still', 'kubejs:fluid/pulp_flow'], {
        container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/pulp'
    }],
    ['fine_pulp', null, 'special', ['kubejs:fluid/fine_pulp_still', 'kubejs:fluid/fine_pulp_flow'], {
        container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/fine_pulp'
    }],
    ['kubejs:concentrated_sulfuric_acid', null, 'special', ['kubejs:fluid/concentrated_sulfuric_acid_still', 'kubejs:fluid/concentrated_sulfuric_acid_flow'], {
       container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/concentrated_sulfuric_acid'
    }],
    ['kubejs:sulfuric_acid', null, 'special', ['kubejs:fluid/sulfuric_acid_still', 'kubejs:fluid/sulfuric_acid_flow'], {
        container: 'kubejs:item/fluid_container',
        overlay: 'kubejs:item/fluids/sulfuric_acid'
    }]
]

global.thickFluids = [
    ['condensed_air', 0xFFFFFF],
    ['syrup', 0xD4BE5D],
    ['wheat_juice', 0xD4BE5D],
    ['molten_slime', 0xA5FF3A],
    ['molten_rubber', 0xE5A020],
    ['chromatic_waste', 0xC800A0],
    ['wood_vinegar', 0x9C7B60],
    ['humic_acid_slurry', 0x6B4226],
    ['thermophile_broth', 0xA64324],
    ['ammonia_solution', 0xFFD5AC],
    ['calcium_chloride_solution', 0xF5F4DF],
    ['nitrate_solution', 0xF8FFEE],
    ['molten_polyethylene', 0xE4E8EB],
    ['molten_polypropylene', 0xD0EEF7],
    ['molten_polyvinyl_chloride', 0xE8E8CA],
    ['molten_polybenzimidazole', 0x48484F],
    ['wax_oil', 0x6B4226],
    ['residual_oil', 0x3A1A0A],
    ['visbreaker_residue', 0x5A2A1A],
    ['heavy_fuel_oil', 0x4A2A1A],
    ['slurry_oil', 0x3A2A1A],
    ['coke_oil', 0x2A1A0A],
    ['molten_pet', 0xC8C8B8],
    ['ferric_chloride', 0x6B4226]
]

global.thinFluids = [
    ['calcium_solution', 0xFFF7BA],
    ['salt_solution', 0x62DEFF],
    ['adipic_acid_solution', 0xE0F0FF],
    ['potassium_solution', 0x88AADD],
    ['silicate_solution', 0xC0D0D0],
    ['hexamethylenediamine_solution', 0xD0D0B0],
    ['distilled_water', 0xB0EEFF]
]

global.normalFluids = [
    ['ethylene_glycol', 0x9CCCCC],
    ['cyclohexanone', 0xC8C8C8],
    ['magnesium_chloride_solution', 0xA8D0D0],
    ['urea_solution', 0xE5E8d3],
    ['visbreaker_effluent', 0x6A3A1A],
    ['adiponitrile', 0xB0C8C8],
    ['paraxylene', 0xC8D8E0],
    ['orthoxylene', 0xC8D0D8],
    ['metaxylene', 0xC8D0D8],
    ['nitrogen_fertilizer', 0xFFEB63],
    ['nitric_acid', 0xC25A34],
    ['caustic_soda', 0xFFD6C4],
    ['muriatic_acid', 0xC0E030],
    ['acetic_acid', 0xF0E68C],
    ['propionic_acid', 0xFFDAB9],
    ['lactic_acid', 0xFFCBA4],
    ['raw_brine', 0x2A5DA8],
    ['edc', 0x90B8B0],
    ['alkaline_brine', 0x5957DE],
    ['pan_precursor', 0x8B6B50],
    ['acetone', 0x90A0A0],
    ['phenol', 0xC6F0F5],
    ['epichlorohydrin', 0xF3F5DA],
    ['cyclohexanol', 0x6080A0],
    ['cyclohexane', 0x8098B0],
    ['condensed_natural_gas', 0xC7FFFA],
    ['vinyl_chloride_monomer', 0xA0A090],
    ['condensed_cracked_naphtha', 0xC25A34],
    ['condensed_cracked_ethane', 0xD2E6AA],
    ['condensed_cracked_propane', 0x97C2A1]
]

global.chemicalFluids = [
    ['dewaxed_oil', 0xC8B080],
    ['ammonium_solution', 0xFFFFFF],
    ['pyrolysis_gasoline', 0xD4A040],
    ['raffinate', 0x8A8A70],
    ['fcc_effluent', 0x8A6A3A],
    ['aromatic_solvent', 0xD4C8A0],
    ['methanol', 0xE0B040],
    ['synthetic_ester_base_oil', 0xF0C060],
    ['epoxy_resin', 0xD0A050],
    ['paraffin_oil', 0xFFD070],
    ['cracked_paraffin_oil', 0xE8B840],
    ['reformate', 0x4A6A80],
    ['aromatic_mix', 0x5A7A90]
]

global.gases = [
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
    ['butadiene', 0xCCCCCC],
    ['nitrous_oxide', 0xA0C8D0],
    ['dry_gas', 0xC0C0C0],
    ['cracked_gas', 0xC8C0B0],
    ['natural_gas_depleted', 0xC8D0C8],
    ['syngas', 0xB09070]
]

// ==================== 统一注册 ====================

StartupEvents.registry('fluid', function (event) {
    // molten metals
    global.moltenMetals.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'molten')
    })

    // special fluids
    global.specialFluids.forEach(function (entry) {
        const still = entry[3][0]
        const flowing = entry[3][1]
        const textureJson = {
            layer0: entry[4].container,
            layer1: entry[4].overlay
        }
        registerFluids(event, entry[0], null, 'special', {
            still: still,
            flowing: flowing,
            textureJson: textureJson
        })
    })

    // thick fluids
    global.thickFluids.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'thick')
    })

    // thin fluids
    global.thinFluids.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'thin')
    })

    // thin fluids
    global.normalFluids.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'normal')
    })

    // chemical fluids
    global.chemicalFluids.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'chemical')
    })

    // gases
    global.gases.forEach(function (entry) {
        registerFluids(event, entry[0], entry[1], 'gas')
    })
})

BlockEvents.modification(event => {
    global.moltenMetals.forEach(([id,_]) => {
        event.modify(`kubejs:${id}`, block => {
            block.lightEmission = 12
        })
    })
})