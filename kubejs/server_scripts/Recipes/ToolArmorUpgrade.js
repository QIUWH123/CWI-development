let upgradeRecipeList = []

ServerEvents.recipes(event => {

// Register Upgrade Recipe

    let idCount = 0

    function registerUpgradeRecipe(inputItem, ingredients, enchantId, maxLevel, durabilityMultiplier, outputItem) {
        const finalOutput = outputItem || inputItem

        const ingredientObjs = []
        for (const ing of ingredients) {
            let id = ing.item || ing.id
            let count = ing.count || 1
            let consume = ing.consume !== false
            ingredientObjs.push({ item: id, consume: consume , count: count })
        }
        upgradeRecipeList.push({
            input: inputItem,
            ingredients: ingredientObjs,
            enchantId: enchantId,
            maxLevel: maxLevel,
            durabilityMultiplier: durabilityMultiplier,
            output: outputItem || inputItem
        })

        const inputs = [inputItem]
        for (const ing of ingredients) {
            var ingId = ing.item || ing.id
            var count = ing.count || 1
            for (let i = 0; i < count; i++) inputs.push(ingId)
        }

        idCount++
        let recipe = event.shapeless(finalOutput, inputs).id(`cwi:equipment_upgrade/${idCount}_manual_only`).modifyResult((stacks, output) => {
            const tool = stacks.find(inputItem)
            const result = Item.of(finalOutput, tool.nbt)

            const enchants = result.nbt?.Enchantments || []
            let targetLevel = 0, targetIndex = -1
            for (let i = 0; i < enchants.length; i++) {
                if (enchants[i].id === enchantId) {
                    targetLevel = enchants[i].lvl
                    targetIndex = i
                    break
                }
            }

            if (targetLevel >= maxLevel) return

            const maxDmg = result.maxDamage
            const curDmg = result.nbt?.Damage || 0
            const curDur = maxDmg - curDmg
            if (curDur > 0) {
                const inc = Math.max(1, Math.floor(curDur * durabilityMultiplier * Math.sqrt(targetIndex + 2)))
                result.nbt.merge({ Damage: Math.min(curDmg + inc, maxDmg - 1) })
            }

            if (targetLevel === 0) enchants.push({ id: enchantId, lvl: 1 })
            else enchants[targetIndex].lvl = targetLevel + 1
            result.nbt.merge({ Enchantments: enchants })

            return result
        })

        for (const ing of ingredients) {
            var damageId = ing.item || ing.id
            if (ing.consume === false) {
                recipe.damageIngredient(damageId, 1)
            }
        }
    }

// Material And Tool Armor Definitions

    const MAT = {
        leather:         { tier: 1, multiplier: 1.8, tools: false, armor: true,  prefix: 'minecraft:leather_',         sheet: 'minecraft:leather', rod: 'minecraft:stick', ingot: 'minecraft:leather', block: 'minecraft:leather' },
        stone:           { tier: 1, multiplier: 1.5, tools: true,  armor: false, prefix: 'minecraft:stone_',           sheet: 'minecraft:cobblestone', rod: 'minecraft:stick', ingot: 'minecraft:cobblestone', block: 'minecraft:cobblestone' },
        rusted_iron:     { tier: 1, multiplier: 1.4, tools: true,  armor: false, prefix: 'kubejs:rusted_iron_' },
        golden:          { tier: 2, multiplier: 0.8, tools: true,  armor: true,  prefix: 'minecraft:golden_' },
        zinc:            { tier: 2, multiplier: 1.1, tools: true,  armor: false, prefix: 'kubejs:zinc_' },
        iron:            { tier: 2, multiplier: 1.0, tools: true,  armor: true,  prefix: 'minecraft:iron_' },
        lead:            { tier: 2, multiplier: 1.1, tools: true,  armor: false, prefix: 'kubejs:lead_' },
        copper:          { tier: 2, multiplier: 1.0, tools: true,  armor: false, prefix: 'kubejs:copper_' },
        brass:           { tier: 3, multiplier: 0.8, tools: true,  armor: false, prefix: 'kubejs:brass_' },
        bronze:          { tier: 3, multiplier: 0.7, tools: true,  armor: true,  prefix: 'kubejs:bronze_' },
        steel:           { tier: 4, multiplier: 0.4, tools: true,  armor: true,  prefix: 'kubejs:steel_' },
        stainless_steel: { tier: 4, multiplier: 0.3, tools: true,  armor: true,  prefix: 'kubejs:stainless_steel_' },
        netherite:       { tier: 4, multiplier: 0.2, tools: true,  armor: true,  prefix: 'minecraft:netherite_' }
    }

    const TOOLS = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'hammer']
    const ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']

    function getToolId(mat, tool) {
        if (tool === 'hammer') return 'minecraft:' + mat + '_hammer'
        return MAT[mat].prefix + tool
    }
    function getArmorId(mat, part) {
        return MAT[mat].prefix + part
    }

// Material Component Functions

    function getGlobalMaterialItem(mat, itemType) {
        const globalId = { golden: 'gold' }[mat] || mat
        const entry = global.materialTypes.find(e => e.id === globalId)
        return entry.items[itemType]
    }

    function sheet(mat, synthetic) {
        if (synthetic) return 'tfmg:synthetic_leather'
        if (MAT[mat].sheet) return MAT[mat].sheet
        return getGlobalMaterialItem(mat, 'sheet')
    }
    function rod(mat) {
        if (MAT[mat].rod) return MAT[mat].rod
        return getGlobalMaterialItem(mat, 'rod')
    }
    function ingot(mat, synthetic) {
        if (synthetic) return 'tfmg:synthetic_leather'
        if (MAT[mat].ingot) return MAT[mat].ingot
        return getGlobalMaterialItem(mat, 'ingot')
    }
    function block(mat) {
        if (MAT[mat].block) return MAT[mat].block
        return getGlobalMaterialItem(mat, 'block')
    }
    function wire(mat) {
        if (MAT[mat].wire) return MAT[mat].wire
        return getGlobalMaterialItem(mat, 'wire')
    }

// Sharpness Upgrade

    const SHARP_RECIPES = [
        { max: 1, inc: 0.20, ing: [{ item: 'create:sand_paper', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 2, inc: 0.15, ing: [{ item: 'kubejs:whetstone', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 3, inc: 0.10, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'create:powdered_obsidian', consume: true }] },
        { max: 4, inc: 0.08, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:powdered_obsidian', consume: true }] }
    ]
    const SHARP_TYPES = ['sword', 'hammer']
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        SHARP_TYPES.forEach(tool => {
            let toolId = getToolId(mat, tool)
            let maxAllowed = tool === 'hammer' ? Math.min(d.tier, 2) : d.tier
            SHARP_RECIPES.forEach(r => {
                let realMax = Math.min(r.max, maxAllowed)
                if (realMax >= 1) registerUpgradeRecipe(toolId, r.ing, 'minecraft:sharpness', realMax, d.multiplier * r.inc)
            })
        })
    }

// Efficiency Upgrade

    const EFF_RECIPES = [
        { max: 1, inc: 0.20, ing: [{ item: 'create:sand_paper', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 2, inc: 0.15, ing: [{ item: 'kubejs:whetstone', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 3, inc: 0.10, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'create:powdered_obsidian', consume: true }] },
        { max: 4, inc: 0.08, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:powdered_obsidian', consume: true }] }
    ]
    const EFF_TYPES = ['pickaxe', 'axe', 'shovel', 'hoe']
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        EFF_TYPES.forEach(tool => {
            let toolId = getToolId(mat, tool)
            let maxAllowed = d.tier
            EFF_RECIPES.forEach(r => {
                let realMax = Math.min(r.max, maxAllowed)
                if (realMax >= 1) registerUpgradeRecipe(toolId, r.ing, 'minecraft:efficiency', realMax, d.multiplier * r.inc)
            })
        })
    }

// Sweeping Edge Upgrade

    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools || d.tier < 2) continue
        let swordId = getToolId(mat, 'sword')
        registerUpgradeRecipe(swordId, [
            { item: 'kubejs:small_hammer', consume: false }, { item: rod(mat), consume: true }, { item: sheet(mat), consume: true }, { item: 'create:sand_paper', consume: false }
        ], 'minecraft:sweeping', 1, d.multiplier * 0.10)
        if (d.tier >= 3) {
            registerUpgradeRecipe(swordId, [
                { item: 'kubejs:small_hammer', consume: false }, { item: rod(mat), consume: true }, { item: sheet(mat), consume: true }, { item: 'kubejs:fine_whetstone', consume: false }
            ], 'minecraft:sweeping', 2, d.multiplier * 0.08)
        }
    }

// Knockback Upgrade

    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        let hammerId = getToolId(mat, 'hammer')
        registerUpgradeRecipe(hammerId, [
            { item: block(mat), consume: true }, { item: rod(mat), consume: true }
        ], 'minecraft:knockback', 1, d.multiplier * 0.06)
        if (d.tier >= 2) {
            registerUpgradeRecipe(hammerId, [
                { item: block(mat), consume: true }, { item: rod(mat), consume: true }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:sand_paper', consume: false }
            ], 'minecraft:knockback', 2, d.multiplier * 0.04)
        }
    }

// Protection Upgrade

    const LEATHER_STRINGS = ['minecraft:string', 'tfmg:synthetic_string']
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        let maxProt = Math.min(d.tier, 3)
        ARMOR.forEach(part => {
            let armorId = getArmorId(mat, part)
            if (mat !== 'leather') {
                let w = wire(mat)
                let ing = [
                    { item: 'kubejs:small_hammer', consume: false },
                    { item: rod(mat), consume: true, count: 2 },
                    { item: sheet(mat, false), consume: true, count: 2 },
                    { item: w, consume: true }
                ]
                registerUpgradeRecipe(armorId, ing, 'minecraft:protection', maxProt, d.multiplier * 0.10)
            } else {
                LEATHER_STRINGS.forEach(str => {
                    let ingNat = [
                        { item: 'kubejs:small_hammer', consume: false },
                        { item: rod(mat), consume: true, count: 2 },
                        { item: sheet(mat, false), consume: true, count: 2 },
                        { item: str, consume: true }
                    ]
                    registerUpgradeRecipe(armorId, ingNat, 'minecraft:protection', maxProt, d.multiplier * 0.10)
                    let ingSyn = [
                        { item: 'kubejs:small_hammer', consume: false },
                        { item: rod(mat), consume: true, count: 2 },
                        { item: sheet(mat, true), consume: true, count: 2 },
                        { item: str, consume: true }
                    ]
                    registerUpgradeRecipe(armorId, ingSyn, 'minecraft:protection', maxProt, d.multiplier * 0.10)
                })
            }
        })
    }

// Special Protection Upgrades

    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        ARMOR.forEach(part => {
            let armorId = getArmorId(mat, part)

            registerUpgradeRecipe(armorId, [
                { item: 'createdieselgenerators:hammer', consume: false },
                { item: 'tfmg:fireclay_ball', consume: true, count: 3 },
                { item: 'kubejs:sticky_resin', consume: true }
            ], 'minecraft:fire_protection', 1, d.multiplier * 0.04)

            registerUpgradeRecipe(armorId, [
                { item: 'farmersdelight:safety_net', consume: false },
                { item: 'createdieselgenerators:wire_cutters', consume: false },
                { item: 'kubejs:net', consume: true, count: 2 }
            ], 'minecraft:projectile_protection', 1, d.multiplier * 0.04)

            registerUpgradeRecipe(armorId, [
                { item: 'createdieselgenerators:hammer', consume: false },
                { item: 'kubejs:small_hammer', consume: false },
                { item: 'create:sturdy_sheet', consume: true, count: 3 },
                { item: 'create:cardboard', consume: true }
            ], 'minecraft:blast_protection', 1, d.multiplier * 0.04)
        })
    }

// Feather Falling Upgrade

    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        let bootsId = getArmorId(mat, 'boots')
        registerUpgradeRecipe(bootsId, [
            { item: 'create:belt_connector', consume: true },
            { item: 'kubejs:rubber', consume: true }
        ], 'minecraft:feather_falling', 2, d.multiplier * 0.03)
        registerUpgradeRecipe(bootsId, [
            { item: 'create:belt_connector', consume: true },
            { item: 'tfmg:rubber_sheet', consume: true }
        ], 'minecraft:feather_falling', 2, d.multiplier * 0.03)
    }

// Unbreaking Upgrade

    function regDur(itemId, mat) {
        let d = MAT[mat]
        let maxLvl = Math.min(3, d.tier)
        registerUpgradeRecipe(itemId, [
            { item: 'kubejs:small_hammer', consume: false },
            { item: ingot(mat, false), consume: true }
        ], 'minecraft:unbreaking', maxLvl, d.multiplier * 0.02)
        if (mat === 'leather') {
            registerUpgradeRecipe(itemId, [
                { item: 'kubejs:small_hammer', consume: false },
                { item: ingot(mat, true), consume: true }
            ], 'minecraft:unbreaking', maxLvl, d.multiplier * 0.02)
        }
    }

    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        TOOLS.forEach(tool => regDur(getToolId(mat, tool), mat))
    }
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        ARMOR.forEach(part => regDur(getArmorId(mat, part), mat))
    }
    regDur('farmersdelight:iron_knife', 'iron')
    regDur('farmersdelight:golden_knife', 'golden')
    regDur('minecraft:shears', 'iron')

// Smite
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        ;['sword', 'hammer'].forEach(tool => {
            let toolId = getToolId(mat, tool)
            registerUpgradeRecipe(toolId, [
                { item: 'kubejs:silver_sheet', consume: true, count: 2 },
                { item: 'kubejs:silver_rod', consume: true },
                { item: 'kubejs:small_hammer', consume: false }
            ], 'minecraft:smite', 1, d.multiplier * 0.03)
        })
    }

// Depth Strider
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        let bootsId = getArmorId(mat, 'boots')
        registerUpgradeRecipe(bootsId, [
            { item: 'minecraft:leather', consume: true },
            { item: 'kubejs:sticky_resin', consume: true },
            { item: 'kubejs:fat', consume: true },
            { item: 'kubejs:small_hammer', consume: false }
        ], 'minecraft:depth_strider', 2, d.multiplier * 0.05)
        registerUpgradeRecipe(bootsId, [
            { item: 'tfmg:synthetic_leather', consume: true },
            { item: 'kubejs:sticky_resin', consume: true },
            { item: 'kubejs:fat', consume: true },
            { item: 'kubejs:small_hammer', consume: false }
        ], 'minecraft:depth_strider', 2, d.multiplier * 0.05)
    }

// Respiration
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        let helmetId = getArmorId(mat, 'helmet')
        registerUpgradeRecipe(helmetId, [
            { item: 'minecraft:bottle', consume: true, count: 3 },
            { item: 'kubejs:rubber', consume: true },
            { item: 'kubejs:sticky_resin', consume: true },
            { item: 'kubejs:small_hammer', consume: false }
        ], 'minecraft:respiration', 1, d.multiplier * 0.03)
        registerUpgradeRecipe(helmetId, [
            { item: 'minecraft:bottle', consume: true, count: 3 },
            { item: 'tfmg:rubber_sheet', consume: true },
            { item: 'kubejs:sticky_resin', consume: true },
            { item: 'kubejs:small_hammer', consume: false }
        ], 'minecraft:respiration', 1, d.multiplier * 0.02)
    }

// Aqua Affinity
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        ;['axe', 'pickaxe', 'sword', 'shovel'].forEach(tool => {
            let toolId = getToolId(mat, tool)
            registerUpgradeRecipe(toolId, [
                { item: 'kubejs:sticky_resin', consume: true },
                { item: 'kubejs:fat', consume: true, count: 2 },
                { item: 'kubejs:small_hammer', consume: false }
            ], 'minecraft:aqua_affinity', 1, d.multiplier * 0.03)
        })
    }

})

global.upgradeRecipes = upgradeRecipeList