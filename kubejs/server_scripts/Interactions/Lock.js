// Constants

const UNLOCKED = -1
const LOCKED = 1

// Basic Weapon Lockpicking Configs

const lockPickConfigs = {
    "minecraft:iron_sword":       { successChance: 0.02, durabilityCost: 3 },
    "minecraft:diamond_sword":    { successChance: 0.20, durabilityCost: 2 },
    "minecraft:netherite_sword":  { successChance: 0.30, durabilityCost: 1 }
}

// Core Lockpicking Event

BlockEvents.rightClicked(e => {
    const { player, block, level } = e
    return
    // Skip Crate Blocks
    if (block.id.endsWith("_crate")) return

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
        player.setStatusMessage(Component.translate("message.kubejs.no_lockpick"))
        level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.chain.break", "neutral", 1.0, 0.8)
        e.cancel()
        return
    }

    // Probability Check
    const success = Math.random() < config.successChance

    if (success) {
        // Unlock Success
        chestData.putInt("Lock", UNLOCKED)
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_success"))
        level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.note_block.bell", "neutral", 2.0, 1.2)
    } else {
        player.setStatusMessage(Component.translate("message.kubejs.lockpick_failure"))
    }

    // Common Operations: Durability Cost, Trapdoor Sound, Item Cooldown, Cancel Event
    player.damageHeldItem("main_hand", config.durabilityCost)
    level.playSound(null, block.x + 0.5, block.y + 0.5, block.z + 0.5, "minecraft:block.iron_trapdoor.close", "neutral", 2.0, 1.2)
    e.cancel()
})