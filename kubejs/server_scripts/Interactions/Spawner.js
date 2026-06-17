BlockEvents.rightClicked("minecraft:spawner", event => {
    const { block, item } = event

    if (item.id != 'minecraft:totem_of_undying') return

    let SpawnerEntityData = {
        Delay: 20,
        MaxNearbyEntities: 6,
        MaxSpawnDelay: 40,
        MinSpawnDelay: 20,
        RequiredPlayerRange: 16,
        SpawnCount: 4,
        SpawnRange: 4,

        SpawnData: {
            custom_spawn_rules: {
                block_light_limit: [0, 15],
                sky_light_limit: [0, 15]
            },

            entity: {
                CustomName: "NAME",
                Health: 20,
                id: "minecraft:zombie",

                ArmorItems: [
                    {
                        Count: 1,
                        id: "minecraft:golden_boots"
                    },
                    {
                        Count: 1,
                        id: "minecraft:golden_leggings"
                    },
                    {
                        Count: 1,
                        id: "minecraft:golden_chestplate"
                    },
                    {
                        Count: 1,
                        id: "minecraft:golden_helmet"
                    }
                ],

                HandItems: [
                    {
                        Count: 1,
                        id: "minecraft:golden_sword"
                    },
                    {
                        Count: 1,
                        id: "minecraft:golden_hoe"
                    }
                ]
            }
        },

        SpawnPotentials: [
            {
                data: {
                    entity: {
                        id: "minecraft:zombie",

                        ArmorItems: [
                            {
                                Count: 1,
                                id: "minecraft:golden_boots"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_leggings"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_chestplate"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_helmet"
                            }
                        ],

                        HandItems: [
                            {
                                Count: 1,
                                id: "minecraft:golden_sword"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_hoe"
                            }
                        ]
                    }
                },
                weight: 1
            },

            {
                data: {
                    entity: {
                        id: "minecraft:skeleton",

                        ArmorItems: [
                            {
                                Count: 1,
                                id: "minecraft:golden_boots"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_leggings"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_chestplate"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_helmet"
                            }
                        ],

                        HandItems: [
                            {
                                Count: 1,
                                id: "minecraft:golden_sword"
                            },
                            {
                                Count: 1,
                                id: "minecraft:golden_hoe"
                            }
                        ]
                    }
                },
                weight: 1
            }
        ]
    }

    block.mergeEntityData(SpawnerEntityData)
})