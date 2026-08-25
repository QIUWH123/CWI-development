// Constants

const UNLOCKED = -1
const LOCKED = 1

// Basic Weapon Lockpicking Configs

const lockPickConfigs = {
    "minecraft:wooden_sword":           { successChance: 0.2, durabilityCost: 3 },
    "minecraft:stone_sword":            { successChance: 0.2, durabilityCost: 3 },
    "minecraft:iron_sword":             { successChance: 0.2, durabilityCost: 3 },
    "minecraft:golden_sword":           { successChance: 0.2, durabilityCost: 3 },
    "kubejs:rusted_iron_sword":         { successChance: 0.2, durabilityCost: 3 },
    "kubejs:lead_sword":                { successChance: 0.2, durabilityCost: 3 },
    "kubejs:copper_sword":              { successChance: 0.2, durabilityCost: 3 },
    "kubejs:zinc_sword":                { successChance: 0.2, durabilityCost: 3 },
    "kubejs:brass_sword":               { successChance: 0.2, durabilityCost: 3 },
    "kubejs:bronze_sword":              { successChance: 0.2, durabilityCost: 3 },
    "kubejs:steel_sword":               { successChance: 0.2, durabilityCost: 3 },
    "kubejs:stainless_steel_sword":     { successChance: 0.2, durabilityCost: 3 },
    "minecraft:diamond_sword":          { successChance: 0.2, durabilityCost: 3 },
    "minecraft:netherite_sword":        { successChance: 0.2, durabilityCost: 3 },
    "ae2:nether_quartz_sword":          { successChance: 0.2, durabilityCost: 3 },
    "ae2:certus_quartz_sword":          { successChance: 0.2, durabilityCost: 3 },
    "ae2:fluix_sword":                  { successChance: 0.2, durabilityCost: 3 },
    "clanginghowl:advanced_chainsword": { successChance: 1.0, durabilityCost: 3 },

    "minecraft:wooden_axe":             { successChance: 0.4, durabilityCost: 3 },
    "minecraft:stone_axe":              { successChance: 0.4, durabilityCost: 3 },
    "minecraft:iron_axe":               { successChance: 0.4, durabilityCost: 3 },
    "minecraft:golden_axe":             { successChance: 0.4, durabilityCost: 3 },
    "kubejs:rusted_iron_axe":           { successChance: 0.4, durabilityCost: 3 },
    "kubejs:lead_axe":                  { successChance: 0.4, durabilityCost: 3 },
    "kubejs:copper_axe":                { successChance: 0.4, durabilityCost: 3 },
    "kubejs:zinc_axe":                  { successChance: 0.4, durabilityCost: 3 },
    "kubejs:brass_axe":                 { successChance: 0.4, durabilityCost: 3 },
    "kubejs:bronze_axe":                { successChance: 0.4, durabilityCost: 3 },
    "kubejs:steel_axe":                 { successChance: 0.4, durabilityCost: 3 },
    "kubejs:stainless_steel_axe":       { successChance: 0.4, durabilityCost: 3 },
    "minecraft:diamond_axe":            { successChance: 0.4, durabilityCost: 3 },
    "minecraft:netherite_axe":          { successChance: 0.4, durabilityCost: 3 },
    "ae2:nether_quartz_axe":            { successChance: 0.4, durabilityCost: 3 },
    "ae2:certus_quartz_axe":            { successChance: 0.4, durabilityCost: 3 },
    "ae2:fluix_axe":                    { successChance: 0.4, durabilityCost: 3 },

    "minecraft:wooden_pickaxe":         { successChance: 0.5, durabilityCost: 3 },
    "minecraft:stone_pickaxe":          { successChance: 0.5, durabilityCost: 3 },
    "minecraft:iron_pickaxe":           { successChance: 0.5, durabilityCost: 3 },
    "minecraft:golden_pickaxe":         { successChance: 0.5, durabilityCost: 3 },
    "kubejs:rusted_iron_pickaxe":       { successChance: 0.5, durabilityCost: 3 },
    "kubejs:lead_pickaxe":              { successChance: 0.5, durabilityCost: 3 },
    "kubejs:copper_pickaxe":            { successChance: 0.5, durabilityCost: 3 },
    "kubejs:zinc_pickaxe":              { successChance: 0.5, durabilityCost: 3 },
    "kubejs:brass_pickaxe":             { successChance: 0.5, durabilityCost: 3 },
    "kubejs:bronze_pickaxe":            { successChance: 0.5, durabilityCost: 3 },
    "kubejs:steel_pickaxe":             { successChance: 0.5, durabilityCost: 3 },
    "kubejs:stainless_steel_pickaxe":   { successChance: 0.5, durabilityCost: 3 },
    "minecraft:diamond_pickaxe":        { successChance: 0.5, durabilityCost: 3 },
    "minecraft:netherite_pickaxe":      { successChance: 0.5, durabilityCost: 3 },
    "ae2:nether_quartz_pickaxe":        { successChance: 0.5, durabilityCost: 3 },
    "ae2:certus_quartz_pickaxe":        { successChance: 0.5, durabilityCost: 3 },
    "ae2:fluix_pickaxe":                { successChance: 0.5, durabilityCost: 3 },

    "minecraft:wooden_shovel":          { successChance: 0.3, durabilityCost: 3 },
    "minecraft:stone_shovel":           { successChance: 0.3, durabilityCost: 3 },
    "minecraft:iron_shovel":            { successChance: 0.3, durabilityCost: 3 },
    "minecraft:golden_shovel":          { successChance: 0.3, durabilityCost: 3 },
    "kubejs:rusted_iron_shovel":        { successChance: 0.3, durabilityCost: 3 },
    "kubejs:lead_shovel":               { successChance: 0.3, durabilityCost: 3 },
    "kubejs:copper_shovel":             { successChance: 0.3, durabilityCost: 3 },
    "kubejs:zinc_shovel":               { successChance: 0.3, durabilityCost: 3 },
    "kubejs:brass_shovel":              { successChance: 0.3, durabilityCost: 3 },
    "kubejs:bronze_shovel":             { successChance: 0.3, durabilityCost: 3 },
    "kubejs:steel_shovel":              { successChance: 0.3, durabilityCost: 3 },
    "kubejs:stainless_steel_shovel":    { successChance: 0.3, durabilityCost: 3 },
    "minecraft:diamond_shovel":         { successChance: 0.3, durabilityCost: 3 },
    "minecraft:netherite_shovel":       { successChance: 0.3, durabilityCost: 3 },
    "ae2:nether_quartz_shovel":         { successChance: 0.3, durabilityCost: 3 },
    "ae2:certus_quartz_shovel":         { successChance: 0.3, durabilityCost: 3 },
    "ae2:fluix_shovel":                 { successChance: 0.3, durabilityCost: 3 },

    "minecraft:wooden_hoe":             { successChance: 0.3, durabilityCost: 3 },
    "minecraft:stone_hoe":              { successChance: 0.3, durabilityCost: 3 },
    "minecraft:iron_hoe":               { successChance: 0.3, durabilityCost: 3 },
    "minecraft:golden_hoe":             { successChance: 0.3, durabilityCost: 3 },
    "kubejs:rusted_iron_hoe":           { successChance: 0.3, durabilityCost: 3 },
    "kubejs:lead_hoe":                  { successChance: 0.3, durabilityCost: 3 },
    "kubejs:copper_hoe":                { successChance: 0.3, durabilityCost: 3 },
    "kubejs:zinc_hoe":                  { successChance: 0.3, durabilityCost: 3 },
    "kubejs:brass_hoe":                 { successChance: 0.3, durabilityCost: 3 },
    "kubejs:bronze_hoe":                { successChance: 0.3, durabilityCost: 3 },
    "kubejs:steel_hoe":                 { successChance: 0.3, durabilityCost: 3 },
    "kubejs:stainless_steel_hoe":       { successChance: 0.3, durabilityCost: 3 },
    "minecraft:diamond_hoe":            { successChance: 0.3, durabilityCost: 3 },
    "minecraft:netherite_hoe":          { successChance: 0.3, durabilityCost: 3 },
    "ae2:nether_quartz_hoe":            { successChance: 0.3, durabilityCost: 3 },
    "ae2:certus_quartz_hoe":            { successChance: 0.3, durabilityCost: 3 },
    "ae2:fluix_hoe":                    { successChance: 0.3, durabilityCost: 3 }
}

// Core Lockpicking Event

BlockEvents.rightClicked(e => {
    const { player, block, level } = e

    // Only Handle Blocks With Loot Table And Not Yet Opened
    if (!block.entityData?.LootTable) return

    const mainHand = player.getMainHandItem()
    const chestData = block.getEntity().persistentData

    // Initialize Lock State
    if (!chestData.contains("Lock")) {
        chestData.putInt("Lock", LOCKED)
    }

    const lockValue = chestData.getInt("Lock")

    // Unlocked Allow Normal Opening
    if (lockValue === UNLOCKED) {
        level.spawnParticles('minecraft:falling_dust minecraft:gravel', true, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.25, 0.1, 0.25, 12, 0)
        level.spawnParticles('minecraft:campfire_cosy_smoke', true, block.x + 0.5, block.y + 0.8, block.z + 0.5, 0.25, 0.1, 0.25, 3, 0)

        if (Math.random() < 0.1) {
            const silverfish = level.createEntity("minecraft:silverfish")
            silverfish.setPosition(block.x + 0.5 + Math.random() / 4, block.y + 0.9, block.z + 0.5 + Math.random() / 4)
            silverfish.spawn()
        }
        return
    }

    // Invalid Tool Prompt And Block
    const config = lockPickConfigs[mainHand.id]
    if (!config) {
        player.setStatusMessage(Component.translate("message.cwi.no_lockpick"))
        level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.chain.break", "neutral", 1.0, 0.8)
        e.cancel()
        return
    }

    // Probability Check
    const success = Math.random() < config.successChance

    if (success) {
        // Unlock Success
        chestData.putInt("Lock", UNLOCKED)
        player.setStatusMessage(Component.translate("message.cwi.lockpick_success"))
        level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.note_block.bell", "neutral", 2.0, 1.2)
    } else {
        player.setStatusMessage(Component.translate("message.cwi.lockpick_failure"))
    }

    // Common Operations: Durability Cost, Trapdoor Sound, Item Cooldown, Cancel Event
    player.damageHeldItem("main_hand", config.durabilityCost)
    level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.iron_trapdoor.close", "neutral", 2.0, 1.2)
    e.cancel()
})