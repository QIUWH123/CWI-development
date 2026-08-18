let upgradeRecipeList = []

ServerEvents.recipes(event => {

// ==================== 核心注册函数 ====================

    let idCount = 0

    function registerUpgradeRecipe(inputItem, ingredients, enchantId, maxLevel, durabilityMultiplier, outputItem) {
        const finalOutput = outputItem || inputItem

        const ingredientObjs = []
        for (const ing of ingredients) {
            let id = ing.item || ing.id
            let count = ing.count || 1
            let consume = ing.consume !== false
            ingredientObjs.push({ item: id, consume: consume, count: count })
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

// ==================== 材质与工具/护甲定义 ====================

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

// ==================== 材料部件映射 ====================

    function getGlobalMaterialItem(mat, itemType) {
        const globalId = { golden: 'gold' }[mat] || mat
        const entry = global.materialTypes.find(e => e.id === globalId)
        if (entry && entry.items && entry.items[itemType]) {
            return entry.items[itemType]
        }
        return undefined
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

// ==================== 配方定义（数组） ====================

    const SHARP_RECIPES = [
        { max: 1, inc: 0.20, ing: [{ item: 'create:sand_paper', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 2, inc: 0.15, ing: [{ item: 'kubejs:whetstone', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 3, inc: 0.10, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'create:powdered_obsidian', consume: true }] },
        { max: 4, inc: 0.08, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:powdered_obsidian', consume: true }] }
    ]

    const EFF_RECIPES = [
        { max: 1, inc: 0.20, ing: [{ item: 'create:sand_paper', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 2, inc: 0.15, ing: [{ item: 'kubejs:whetstone', consume: false }, { item: 'kubejs:flint_powder', consume: true }] },
        { max: 3, inc: 0.10, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'create:powdered_obsidian', consume: true }] },
        { max: 4, inc: 0.08, ing: [{ item: 'kubejs:fine_whetstone', consume: false }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:powdered_obsidian', consume: true }] }
    ]

    const SWEEP_RECIPES = [
        { max: 1, inc: 0.10, minTier: 2, ing: (m) => [{ item: 'kubejs:small_hammer', consume: false }, { item: rod(m), consume: true }, { item: sheet(m), consume: true }, { item: 'create:sand_paper', consume: false }] },
        { max: 2, inc: 0.08, minTier: 3, ing: (m) => [{ item: 'kubejs:small_hammer', consume: false }, { item: rod(m), consume: true }, { item: sheet(m), consume: true }, { item: 'kubejs:fine_whetstone', consume: false }] }
    ]

    const KNOCKBACK_RECIPES = [
        { max: 1, inc: 0.06, ing: (m) => [{ item: block(m), consume: true }, { item: rod(m), consume: true }] },
        { max: 2, inc: 0.04, minTier: 2, ing: (m) => [{ item: block(m), consume: true }, { item: rod(m), consume: true }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:sand_paper', consume: false }] }
    ]

    const SPECIAL_PROTECTION_RECIPES = [
        { enchant: 'minecraft:fire_protection', max: 1, inc: 0.04, ing: [{ item: 'createdieselgenerators:hammer', consume: false }, { item: 'tfmg:fireclay_ball', consume: true, count: 3 }, { item: 'kubejs:sticky_resin', consume: true }] },
        { enchant: 'minecraft:projectile_protection', max: 1, inc: 0.04, ing: [{ item: 'farmersdelight:safety_net', consume: true }, { item: 'createdieselgenerators:wire_cutters', consume: false }, { item: 'kubejs:net', consume: true, count: 2 }] },
        { enchant: 'minecraft:blast_protection', max: 1, inc: 0.04, ing: [{ item: 'createdieselgenerators:hammer', consume: false }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:sturdy_sheet', consume: true, count: 3 }, { item: 'create:cardboard', consume: true }] }
    ]

    const FEATHER_FALLING_RECIPES = [
        { max: 2, inc: 0.03, ing: [{ item: 'create:belt_connector', consume: true }, { item: 'kubejs:rubber', consume: true }] },
        { max: 2, inc: 0.03, ing: [{ item: 'create:belt_connector', consume: true }, { item: 'tfmg:rubber_sheet', consume: true }] }
    ]

    const UNBREAKING_RECIPES = [
        { max: 3, inc: 0.02, ing: (m) => [{ item: 'kubejs:small_hammer', consume: false }, { item: ingot(m, false), consume: true }] }
    ]

    const SMITE_RECIPES = [
        { max: 1, inc: 0.03, ing: [{ item: 'kubejs:silver_sheet', consume: true, count: 2 }, { item: 'kubejs:silver_rod', consume: true }, { item: 'kubejs:small_hammer', consume: false }] }
    ]

    const DEPTH_STRIDER_RECIPES = [
        { max: 2, inc: 0.05, ing: [{ item: 'minecraft:leather', consume: true }, { item: 'kubejs:sticky_resin', consume: true }, { item: 'kubejs:fat', consume: true }, { item: 'kubejs:small_hammer', consume: false }] },
        { max: 2, inc: 0.05, ing: [{ item: 'tfmg:synthetic_leather', consume: true }, { item: 'kubejs:sticky_resin', consume: true }, { item: 'kubejs:fat', consume: true }, { item: 'kubejs:small_hammer', consume: false }] }
    ]

    const RESPIRATION_RECIPES = [
        { max: 1, inc: 0.03, ing: [{ item: 'minecraft:bottle', consume: true, count: 3 }, { item: 'kubejs:rubber', consume: true }, { item: 'kubejs:sticky_resin', consume: true }, { item: 'kubejs:small_hammer', consume: false }] },
        { max: 1, inc: 0.02, ing: [{ item: 'minecraft:bottle', consume: true, count: 3 }, { item: 'tfmg:rubber_sheet', consume: true }, { item: 'kubejs:sticky_resin', consume: true }, { item: 'kubejs:small_hammer', consume: false }] }
    ]

    const AQUA_AFFINITY_RECIPES = [
        { max: 1, inc: 0.03, ing: [{ item: 'kubejs:sticky_resin', consume: true }, { item: 'kubejs:fat', consume: true, count: 2 }, { item: 'kubejs:small_hammer', consume: false }] }
    ]

// ==================== 通用注册函数 ====================

    function applyToolRecipes(recipes, toolTypes, enchantId) {
        for (let mat in MAT) {
            if (!MAT.hasOwnProperty(mat)) continue
            let d = MAT[mat]
            if (!d.tools) continue
            toolTypes.forEach(tool => {
                let toolId = getToolId(mat, tool)
                recipes.forEach(r => {
                    if (r.minTier && d.tier < r.minTier) return
                    let realMax = r.fixedMax ? r.max : Math.min(r.max, d.tier)
                    if (realMax < 1) return
                    let ingredients = typeof r.ing === 'function' ? r.ing(mat) : r.ing
                    registerUpgradeRecipe(toolId, ingredients, enchantId, realMax, d.multiplier * r.inc)
                })
            })
        }
    }

    function applyArmorRecipes(recipes, armorTypes, enchantId) {
        for (let mat in MAT) {
            if (!MAT.hasOwnProperty(mat)) continue
            let d = MAT[mat]
            if (!d.armor) continue
            armorTypes.forEach(part => {
                let armorId = getArmorId(mat, part)
                recipes.forEach(r => {
                    if (r.minTier && d.tier < r.minTier) return
                    let realMax = r.fixedMax ? r.max : Math.min(r.max, d.tier)
                    if (realMax < 1) return
                    let ingredients = typeof r.ing === 'function' ? r.ing(mat) : r.ing
                    registerUpgradeRecipe(armorId, ingredients, enchantId, realMax, d.multiplier * r.inc)
                })
            })
        }
    }

// ==================== 注册所有配方 ====================

    // 锋利：剑、锤子（锤子锋利上限2）
    applyToolRecipes(SHARP_RECIPES, ['sword'], 'minecraft:sharpness')
    applyToolRecipes(SHARP_RECIPES.slice(0, 2), ['hammer'], 'minecraft:sharpness')

    // 效率：镐、斧、锹、锄
    applyToolRecipes(EFF_RECIPES, ['pickaxe', 'axe', 'shovel', 'hoe'], 'minecraft:efficiency')

    // 横扫之刃：剑
    applyToolRecipes(SWEEP_RECIPES, ['sword'], 'minecraft:sweeping')

    // 击退：锤子
    applyToolRecipes(KNOCKBACK_RECIPES, ['hammer'], 'minecraft:knockback')

    // 保护：护甲（皮革单独处理）
    const LEATHER_STRINGS = ['minecraft:string', 'tfmg:synthetic_string']
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]
        if (!d.armor) continue
        let maxProt = Math.min(d.tier, 3)
        ARMOR.forEach(part => {
            let armorId = getArmorId(mat, part)
            if (mat !== 'leather') {
                let w = wire(mat)
                if (!w) return
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

    // 特殊保护：火焰/弹射/爆炸保护
    SPECIAL_PROTECTION_RECIPES.forEach(r => applyArmorRecipes([r], ARMOR, r.enchant))

    // 摔落保护：靴子
    applyArmorRecipes(FEATHER_FALLING_RECIPES, ['boots'], 'minecraft:feather_falling')

    // 耐久：所有工具和护甲
    applyToolRecipes(UNBREAKING_RECIPES, TOOLS, 'minecraft:unbreaking')
    applyArmorRecipes(UNBREAKING_RECIPES, ARMOR, 'minecraft:unbreaking')

    // 特殊物品耐久
    ;['farmersdelight:iron_knife', 'farmersdelight:golden_knife', 'minecraft:shears'].forEach(itemId => {
        let mat = itemId.includes('golden') ? 'golden' : 'iron'
        registerUpgradeRecipe(itemId, [
            { item: 'kubejs:small_hammer', consume: false },
            { item: ingot(mat, false), consume: true }
        ], 'minecraft:unbreaking', Math.min(3, MAT[mat].tier), MAT[mat].multiplier * 0.02)
    })

    // 亡灵杀手：剑和锤子，1级
    applyToolRecipes(SMITE_RECIPES, ['sword', 'hammer'], 'minecraft:smite')

    // 深海探索者：靴子，2级（固定上限）
    applyArmorRecipes(DEPTH_STRIDER_RECIPES, ['boots'], 'minecraft:depth_strider')

    // 水下呼吸：头盔，1级
    applyArmorRecipes(RESPIRATION_RECIPES, ['helmet'], 'minecraft:respiration')

    // 水下速掘：斧、镐、剑、铲，1级
    applyToolRecipes(AQUA_AFFINITY_RECIPES, ['axe', 'pickaxe', 'sword', 'shovel'], 'minecraft:aqua_affinity')

})

global.upgradeRecipes = upgradeRecipeList