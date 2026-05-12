function transformBlock(level, entity, itemStack, hand) {
    if (level.isClientSide()) return
    if (!entity.isPlayer()) return
    entity.addItemCooldown(itemStack.item, 20)
    let hit = entity.rayTrace(5)
    if (!hit || hit.type !== 'block') return
    let block = hit.block
    if (!block) return
    let currentBlockId = String(block.id)
    let conversion = getConversionMap()[currentBlockId]
    if (!conversion) return
    let targetBlockId = typeof conversion === 'string' ? conversion : conversion.target
    let drops = typeof conversion === 'object' ? conversion.drops : []
    let pos = hit.block.pos
    level.runCommandSilent(`particle minecraft:block ${currentBlockId} ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.5 0.5 0.5 0.05 60`)
    level.runCommandSilent(`particle minecraft:falling_dust ${currentBlockId} ${pos.x + 0.5} ${pos.y + 0.5} ${pos.z + 0.5} 0.6 0.6 0.6 0.05 12`)
    level.runCommandSilent(`playsound block.anvil.place block @a ${pos.x} ${pos.y} ${pos.z} 1 1`)
    drops.forEach(drop => {
        if (Math.random() < (drop.chance || 1.0)) {
            let count = drop.count || 1
            block.popItem(`${count}x ${drop.item}`)
        }
    })
    block.set(targetBlockId)
    if (!entity.isCreative()) {itemStack.hurtAndBreak(1, entity, (e) => e.broadcastBreakEvent(hand))}
    entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:item.flintandsteel.use', 'players', 0.5, 0.4)
}

function getConversionMap() {
    return {
        'minecraft:stone': {
            target: 'minecraft:gravel',
            drops: []
        },
        'minecraft:cobblestone': {
            target: 'minecraft:gravel',
            drops: []
        },
        'minecraft:gravel': {
            target: 'air',
            drops: [
                { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:stone_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:stone_dust', count: 1, chance: 0.75 }
            ]
        },
        'minecraft:deepslate': {
            target: 'minecraft:gravel',
            drops: []
        },
        'minecraft:cobbled_deepslate': {
            target: 'kubejs:deepslate_gravel',
            drops: []
        },
        'kubejs:deepslate_gravel': {
            target: 'air',
            drops: [
                { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 },
                { item: 'kubejs:deepslate_dust', count: 1, chance: 0.75 }
            ]
        },
        'minecraft:iron_ore': {
            target: 'minecraft:cobblestone',
            drops: [
                { item: 'minecraft:raw_iron', count: 1, chance: 0.5 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 }
            ]
        },
        'minecraft:deepslate_iron_ore': {
            target: 'minecraft:cobbled_deepslate',
            drops: [
                { item: 'minecraft:raw_iron', count: 1, chance: 0.5 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 },
                { item: 'create:crushed_raw_iron', count: 1, chance: 0.75 }
            ]
        }
    }
}

function hammerCallbacks() {
    return {
        use: (level, player, hand) => {
            player.persistentData.chargedHammer_charging = true;
            return true;
        },
        releaseUsing: (itemStack, level, entity, durationLeft) => {
            if (entity.persistentData.chargedHammer_charging) {
                entity.persistentData.chargedHammer_charging = false;
            }
            return itemStack;
        },
        finishUsing: (itemStack, level, entity) => {
            if (entity.persistentData.chargedHammer_charging) {
                entity.persistentData.chargedHammer_charging = false;
                let hand = entity.getUsedItemHand();
                transformBlock(level, entity, itemStack, hand);
            }
            return itemStack;
        }
    };
}

StartupEvents.registry('item', event => {

    const hammers = [
        ['bronze_hammer', 'bronze', 17],
        ['iron_hammer', 'iron', 20],
        ['stone_hammer', 'stone', 25],
        ['gold_hammer', 'gold', 12],
        ['netherite_hammer', 'netherite', 15]
    ]

    hammers.forEach(([name, tier, duration]) => {
        event.create(name, 'pickaxe')
            .texture(`kubejs:item/tools/${name}`)
            .tier(tier)
            .attackDamageBaseline(3)
            .unstackable()
            .useAnimation('spear')
            .useDuration(itemStack => duration)
            .use(hammerCallbacks().use)
            .releaseUsing(hammerCallbacks().releaseUsing)
            .finishUsing(hammerCallbacks().finishUsing)
    });
});