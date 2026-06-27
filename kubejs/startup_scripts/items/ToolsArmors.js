// priority: 2

// Armors
StartupEvents.registry('item', event => {
    ['helmet', 'chestplate', 'leggings', 'boots'].forEach(part => {
        event.create(`bronze_${part}`, part)
            .texture(`kubejs:item/armors/bronze_${part}`)
            .tier('bronze')
            .unstackable()
    })
})

// Tools
StartupEvents.registry('item', event => {
    const stats = {
        steel: {sword:8, axe:11, pickaxe:6, shovel:6.5, hoe:1},
        bronze:{sword:7, axe:10, pickaxe:5, shovel:5.5, hoe:1},
        brass: {sword:6, axe:9, pickaxe:4, shovel:4.5, hoe:1},
        zinc:  {sword:5, axe:8, pickaxe:3.5, shovel:4, hoe:1},
        rusted_iron:{sword:4, axe:7, pickaxe:3, shovel:3.5, hoe:1}
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
        steel: [2587,10,3,'tfmg:steel_ingot'],
        bronze:[1361,8,2,'kubejs:bronze_ingot'],
        brass: [873,7,2,'create:brass_ingot'],
        zinc:  [423,5,1,'create:zinc_ingot'],
        rusted_iron:[437,4,2,'kubejs:rusted_iron_ingot']
    }
    Object.entries(tiers).forEach(([name,[uses,speed,level,repair]]) => {
        event.add(name, tier => {
            tier.uses = uses
            tier.speed = speed
            tier.attackDamageBonus = 0
            tier.level = level
            tier.enchantmentValue = 0
            tier.repairIngredient = repair
        })
    })
})

// ArmorTier
ItemEvents.armorTierRegistry(event => {
    event.add('bronze', tier => {
        tier.durabilityMultiplier = 97
        tier.slotProtections = [3,8,6,3]
        tier.enchantmentValue = 0
        tier.repairIngredient = 'kubejs:bronze_ingot'
        tier.toughness = 1
        tier.knockbackResistance = 0.1
    })
})