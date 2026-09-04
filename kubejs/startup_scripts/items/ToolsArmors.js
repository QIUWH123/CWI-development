// priority: 2

// Armors
StartupEvents.registry('item', event => {
    const armors = ['bronze', 'steel', 'stainless_steel']
    const equipments = ['helmet', 'chestplate', 'leggings', 'boots']
    
    armors.forEach(mat => {
        equipments.forEach(part => {
            event.create(`${mat}_${part}`, part)
                .texture(`kubejs:item/armors/${mat}_${part}`)
                .tier(mat)
                .unstackable()

        })
    })
})

// Tools
StartupEvents.registry('item', event => {
    const stats = {
        stainless_steel: {sword:9, axe:12, pickaxe:6.5, shovel:7,   hoe:1},
        steel:           {sword:8, axe:11, pickaxe:6,   shovel:6.5, hoe:1},
        bronze:          {sword:7, axe:10, pickaxe:5,   shovel:5.5, hoe:1},
        brass:           {sword:6, axe:9,  pickaxe:4,   shovel:4.5, hoe:1},
        zinc:            {sword:5, axe:8,  pickaxe:3.5, shovel:4,   hoe:1},
        copper:          {sword:5, axe:8,  pickaxe:3.5, shovel:4,   hoe:1},
        lead:            {sword:8, axe:11, pickaxe:6,   shovel:6.5, hoe:1},
        rusted_iron:     {sword:4, axe:7,  pickaxe:3,   shovel:3.5, hoe:1}
    }
    Object.entries(stats).forEach(([material, tools]) => {
        Object.entries(tools).forEach(([tool, dmg]) => {
            event.create(`${material}_${tool}`, tool)
                .texture(`kubejs:item/tools/${material}_${tool}`)
                .tier(material)
                .attackDamageBaseline(dmg)
                .unstackable()
                .tag(`minecraft:${tool}s`)
        })
    })
})

// ToolTiers
ItemEvents.toolTierRegistry(event => {
    const tiers = {
        steel:           [1257, 10, 3, 0, 'tfmg:steel_ingot'],
        stainless_steel: [1593, 11, 4, 0, 'kubejs:stainless_steel_ingot'],
        bronze:          [861, 8,  2, 0, 'kubejs:bronze_ingot'],
        brass:           [673,  7,  2, 0, 'create:brass_ingot'],
        zinc:            [187,  5,  1, 0, 'create:zinc_ingot'],
        copper:          [381,  5,  2, 0, 'create:copper_ingot'],
        lead:            [154,  1,  2, 0, 'tfmg:lead_ingot'],
        rusted_iron:     [287,  4,  2, 0, 'kubejs:rusted_iron_ingot']
    }
    Object.entries(tiers).forEach(([name,[uses,speed,level,bonus,repair]]) => {
        event.add(name, tier => {
            tier.uses = uses
            tier.speed = speed
            tier.attackDamageBonus = bonus
            tier.level = level
            tier.enchantmentValue = 0
            tier.repairIngredient = repair
        })
    })
})

// ArmorTier
ItemEvents.armorTierRegistry(event => {
    event.add('bronze', tier => {
        tier.durabilityMultiplier = 51
        tier.slotProtections = [3,6,8,3]
        tier.enchantmentValue = 0
        tier.repairIngredient = 'kubejs:bronze_ingot'
        tier.toughness = 1
        tier.knockbackResistance = 0.05
    })
    event.add('steel', tier => {
        tier.durabilityMultiplier = 78
        tier.slotProtections = [4,8,10,4]
        tier.enchantmentValue = 0
        tier.repairIngredient = 'tfmg:steel_ingot'
        tier.toughness = 2
        tier.knockbackResistance = 0.15
    })
    event.add('stainless_steel', tier => {
        tier.durabilityMultiplier = 97
        tier.slotProtections = [5,9,11,5]
        tier.enchantmentValue = 0
        tier.repairIngredient = 'kubejs:stainless_steel_ingot'
        tier.toughness = 3
        tier.knockbackResistance = 0.2
    })
})

// Misc
const $ShieldItem = Java.loadClass('net.minecraft.world.item.ShieldItem')
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')

StartupEvents.registry('item', event => {

    event.createCustom('steel_shield', () => { return new $ShieldItem(new $ItemProperties().durability(1257))})
    event.createCustom('stainless_steel_shield', () => { return new $ShieldItem(new $ItemProperties().durability(1593))})

    event.create('small_hammer')
        .unstackable()
        .maxDamage(143)

    event.create('whetstone')
        .unstackable()
        .maxDamage(37)
        .texture('kubejs:item/whetstone/whetstone')

    event.create('fine_whetstone')
        .unstackable()
        .maxDamage(73)
        .texture('kubejs:item/whetstone/fine_whetstone')

    event.create('incomplete_whetstone', 'create:sequenced_assembly')
        .unstackable()
        .texture('kubejs:item/whetstone/incomplete_whetstone')

    event.create('incomplete_fine_whetstone', 'create:sequenced_assembly')
        .unstackable()
        .texture('kubejs:item/whetstone/incomplete_fine_whetstone')

    event.create('carbon-sealed_quartzite_base')
        .unstackable()
        .texture('kubejs:item/whetstone/carbon-sealed_quartzite_base')

    event.create('incomplete_quartzite_base', 'create:sequenced_assembly')
        .unstackable()
        .texture('kubejs:item/whetstone/incomplete_quartzite_base')

    event.create('lapped_quartzite_base')
        .unstackable()
        .texture('kubejs:item/whetstone/lapped_quartzite_base')
})