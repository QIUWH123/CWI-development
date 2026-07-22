ServerEvents.recipes(event => {

    function registerUpgradeRecipe(inputItem, ingredients, enchantId, maxLevel, durabilityMultiplier, outputItem) {
        const finalOutput = outputItem || inputItem

        const inputs = [inputItem]
        for (const ing of ingredients) {
            var ingId = ing.item || ing.id
            var count = ing.count || 1
            for (let i = 0; i < count; i++) inputs.push(ingId)
        }

        let recipe = event.shapeless(finalOutput, inputs).modifyResult((stacks, output) => {
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
            if (ing.consume === false) recipe.damageIngredient(damageId, 1)
        }
    }

    // ==================== 材质与工具/护甲定义 ====================
    const MAT = {
        stone:       { tier: 1, base: 0.25, tools: true, armor: false },
        rusted_iron: { tier: 1, base: 0.25, tools: true, armor: false },
        leather:     { tier: 1, base: 0.25, tools: false, armor: true },
        iron:        { tier: 2, base: 0.20, tools: true, armor: true },
        golden:      { tier: 2, base: 0.20, tools: true, armor: true },
        zinc:        { tier: 2, base: 0.20, tools: true, armor: false },
        bronze:      { tier: 3, base: 0.15, tools: true, armor: true },
        brass:       { tier: 3, base: 0.15, tools: true, armor: true },
        steel:       { tier: 4, base: 0.10, tools: true, armor: false },
        netherite:   { tier: 4, base: 0.10, tools: true, armor: true }
    }

    const TOOLS = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe', 'hammer']
    const ARMOR = ['helmet', 'chestplate', 'leggings', 'boots']

    const PREFIX = {
        stone: 'minecraft:stone_', rusted_iron: 'kubejs:rusted_iron_', leather: 'minecraft:leather_',
        iron: 'minecraft:iron_', golden: 'minecraft:golden_', zinc: 'kubejs:zinc_',
        bronze: 'kubejs:bronze_', brass: 'kubejs:brass_', steel: 'kubejs:steel_', netherite: 'minecraft:netherite_'
    }
    const ARMOR_PREFIX = { brass: 'create_sa:brass_' }

    function getToolId(mat, tool) {
        if (tool === 'hammer') return 'minecraft:' + mat + '_hammer'
        return PREFIX[mat] + tool
    }
    function getArmorId(mat, part) {
        return (ARMOR_PREFIX[mat] || PREFIX[mat]) + part
    }

    function sheet(mat, synthetic) {
        if (synthetic) return 'tfmg:synthetic_leather'
        switch(mat) {
            case 'stone': return 'minecraft:cobblestone'; case 'rusted_iron': return 'kubejs:rusted_iron_sheet'
            case 'leather': return 'minecraft:leather'; case 'iron': return 'create:iron_sheet'
            case 'golden': return 'create:golden_sheet'; case 'zinc': return 'createaddition:zinc_sheet'
            case 'bronze': return 'kubejs:bronze_sheet'; case 'brass': return 'create:brass_sheet'
            case 'steel': return 'tfmg:heavy_plate'; case 'netherite': return 'kubejs:netherite_sheet'
        }
    }
    function rod(mat) {
        switch(mat) {
            case 'stone': case 'leather': return 'minecraft:stick'
            case 'rusted_iron': return 'kubejs:rusted_iron_rod'; case 'iron': return 'createaddition:iron_rod'
            case 'golden': return 'createaddition:gold_rod'; case 'zinc': return 'kubejs:zinc_rod'
            case 'bronze': return 'kubejs:bronze_rod'; case 'brass': return 'createaddition:brass_rod'
            case 'steel': return 'kubejs:steel_rod'; case 'netherite': return 'kubejs:netherite_rod'
        }
    }
    function ingot(mat, synthetic) {
        if (synthetic) return 'tfmg:synthetic_leather'
        switch(mat) {
            case 'stone': return 'minecraft:cobblestone'; case 'rusted_iron': return 'kubejs:rusted_iron_ingot'
            case 'leather': return 'minecraft:leather'; case 'iron': return 'minecraft:iron_ingot'
            case 'golden': return 'minecraft:gold_ingot'; case 'zinc': return 'create:zinc_ingot'
            case 'bronze': return 'kubejs:bronze_ingot'; case 'brass': return 'create:brass_ingot'
            case 'steel': return 'tfmg:steel_ingot'; case 'netherite': return 'minecraft:netherite_ingot'
        }
    }
    function block(mat) {
        switch(mat) {
            case 'stone': return 'minecraft:cobblestone'; case 'rusted_iron': return 'kubejs:rusted_iron_block'
            case 'iron': return 'minecraft:iron_block'; case 'golden': return 'minecraft:gold_block'
            case 'zinc': return 'create:zinc_block'; case 'bronze': return 'kubejs:bronze_block'
            case 'brass': return 'create:brass_block'; case 'steel': return 'tfmg:steel_block'
            case 'netherite': return 'minecraft:netherite_block'
        }
    }
    function wire(mat) {
        switch(mat) {
            case 'iron': return 'createaddition:iron_wire'
            case 'golden': return 'createaddition:gold_wire'
            case 'zinc': return 'kubejs:zinc_wire'
            case 'bronze': return 'kubejs:bronze_wire'
            case 'brass': return 'kubejs:brass_wire'
            case 'steel': return 'kubejs:steel_wire'
            case 'netherite': return 'kubejs:netherite_wire'
            case 'rusted_iron': return 'kubejs:rusted_iron_wire'
        }
    }

    // ==================== 锋利 ====================
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
                if (realMax >= 1) registerUpgradeRecipe(toolId, r.ing, 'minecraft:sharpness', realMax, d.base + r.inc)
            })
        })
    }

    // ==================== 效率 ====================
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
                if (realMax >= 1) registerUpgradeRecipe(toolId, r.ing, 'minecraft:efficiency', realMax, d.base + r.inc)
            })
        })
    }

    // ==================== 横扫之刃 ====================
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools || d.tier < 2) continue
        let swordId = getToolId(mat, 'sword')
        registerUpgradeRecipe(swordId, [
            { item: 'kubejs:small_hammer', consume: false }, { item: rod(mat), consume: true }, { item: sheet(mat), consume: true }, { item: 'create:sand_paper', consume: false }
        ], 'minecraft:sweeping', 1, d.base + 0.10)
        if (d.tier >= 3) {
            registerUpgradeRecipe(swordId, [
                { item: 'kubejs:small_hammer', consume: false }, { item: rod(mat), consume: true }, { item: sheet(mat), consume: true }, { item: 'kubejs:fine_whetstone', consume: false }
            ], 'minecraft:sweeping', 2, d.base + 0.08)
        }
    }

    // ==================== 击退 ====================
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.tools) continue
        let hammerId = getToolId(mat, 'hammer')
        registerUpgradeRecipe(hammerId, [
            { item: block(mat), consume: true }, { item: rod(mat), consume: true }
        ], 'minecraft:knockback', 1, d.base + 0.06)
        if (d.tier >= 2) {
            registerUpgradeRecipe(hammerId, [
                { item: block(mat), consume: true }, { item: rod(mat), consume: true }, { item: 'kubejs:small_hammer', consume: false }, { item: 'create:sand_paper', consume: false }
            ], 'minecraft:knockback', 2, d.base + 0.04)
        }
    }

    // ==================== 保护（杆×2 + 板×2 + 线×1） ====================
    const LEATHER_STRINGS = ['minecraft:string', 'tfmg:synthetic_string']
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
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
                registerUpgradeRecipe(armorId, ing, 'minecraft:protection', maxProt, d.base + 0.10)
            } else {
                LEATHER_STRINGS.forEach(str => {
                    let ingNat = [
                        { item: 'kubejs:small_hammer', consume: false },
                        { item: rod(mat), consume: true, count: 2 },
                        { item: sheet(mat, false), consume: true, count: 2 },
                        { item: str, consume: true }
                    ]
                    registerUpgradeRecipe(armorId, ingNat, 'minecraft:protection', maxProt, d.base + 0.10)
                    let ingSyn = [
                        { item: 'kubejs:small_hammer', consume: false },
                        { item: rod(mat), consume: true, count: 2 },
                        { item: sheet(mat, true), consume: true, count: 2 },
                        { item: str, consume: true }
                    ]
                    registerUpgradeRecipe(armorId, ingSyn, 'minecraft:protection', maxProt, d.base + 0.10)
                })
            }
        })
    }

    // ==================== 专项保护 ====================
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        ARMOR.forEach(part => {
            let armorId = getArmorId(mat, part)

            registerUpgradeRecipe(armorId, [
                { item: 'tfmg:fireclay_ball', consume: true, count: 3 },
                { item: 'kubejs:sticky_resin', consume: true }
            ], 'minecraft:fire_protection', 1, d.base + 0.04)

            registerUpgradeRecipe(armorId, [
                { item: 'farmersdelight:safety_net', consume: false },
                { item: 'createdieselgenerators:wire_cutters', consume: false },
                { item: 'kubejs:net', consume: true, count: 2 }
            ], 'minecraft:projectile_protection', 1, d.base + 0.04)

            registerUpgradeRecipe(armorId, [
                { item: 'createdieselgenerators:hammer', consume: false },
                { item: 'kubejs:small_hammer', consume: false },
                { item: 'create:sturdy_sheet', consume: true, count: 3 },
                { item: 'create:cardboard', consume: true }
            ], 'minecraft:blast_protection', 1, d.base + 0.04)
        })
    }

    // ==================== 摔落保护（统一配方：belt_connector + 橡胶，上限2） ====================
    for (let mat in MAT) {
        if (!MAT.hasOwnProperty(mat)) continue
        let d = MAT[mat]; if (!d.armor) continue
        let bootsId = getArmorId(mat, 'boots')
        // 配方1：kubejs:rubber
        registerUpgradeRecipe(bootsId, [
            { item: 'create:belt_connector', consume: true },
            { item: 'kubejs:rubber', consume: true }
        ], 'minecraft:feather_falling', 2, d.base + 0.03)
        // 配方2：tfmg:rubber_sheet
        registerUpgradeRecipe(bootsId, [
            { item: 'create:belt_connector', consume: true },
            { item: 'tfmg:rubber_sheet', consume: true }
        ], 'minecraft:feather_falling', 2, d.base + 0.03)
    }

    // ==================== 耐久 ====================
    function regDur(itemId, mat) {
        let d = MAT[mat]; if (!d) return
        let maxLvl = Math.min(3, d.tier)
        registerUpgradeRecipe(itemId, [
            { item: 'kubejs:small_hammer', consume: false },
            { item: ingot(mat, false), consume: true }
        ], 'minecraft:unbreaking', maxLvl, d.base + 0.02)
        if (mat === 'leather') {
            registerUpgradeRecipe(itemId, [
                { item: 'kubejs:small_hammer', consume: false },
                { item: ingot(mat, true), consume: true }
            ], 'minecraft:unbreaking', maxLvl, d.base + 0.02)
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
})