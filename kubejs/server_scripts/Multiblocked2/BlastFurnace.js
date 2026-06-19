global.blastFurnaceRecipes = [
    {
        id: 'cwi:industrial_blasting/quartz_to_silicon',
        duration: 30,
        inputItems: [{ item: 'minecraft:quartz' }],
        inputFluids: [],
        outputFluids: [{ fluid: 'tfmg:liquid_silicon', amount: 90 }]
    },
    {
        id: 'cwi:industrial_blasting/quartz_powder_to_silicon',
        duration: 20,
        inputItems: [{ item: 'kubejs:quartz_powder' }],
        inputFluids: [],
        outputFluids: [{ fluid: 'tfmg:liquid_silicon', amount: 90 }]
    },
    {
        id: 'cwi:industrial_blasting/magnetite_to_pig_iron',
        duration: 50,
        inputItems: [
            { item: 'kubejs:magnetite' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_powder_to_pig_iron',
        duration: 30,
        inputItems: [
            { item: 'kubejs:iron_powder' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/iron_ingot_to_pig_iron',
        duration: 30,
        inputItems: [
            { item: 'minecraft:iron_ingot' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 20 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/crushed_iron_to_pig_iron',
        duration: 30,
        inputItems: [
            { item: 'create:crushed_raw_iron' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 90 },
            { fluid: 'tfmg:molten_slag', amount: 100 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/raw_iron_to_pig_iron',
        duration: 30,
        inputItems: [
            { item: 'minecraft:raw_iron' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    },
    {
        id: 'cwi:industrial_blasting/hematite_to_pig_iron',
        duration: 40,
        inputItems: [
            { item: 'kubejs:hematite' },
            { item: 'tfmg:limesand' }
        ],
        inputFluids: [],
        outputFluids: [
            { fluid: 'kubejs:molten_pig_iron', amount: 180 },
            { fluid: 'tfmg:molten_slag', amount: 200 }
        ]
    }
]

ServerEvents.recipes(event => {
    global.blastFurnaceRecipes.forEach(recipe => {
        let builder = event.recipes.cwi.blast_furnace_processing()
            .id(recipe.id)
            .duration(recipe.duration)

        if (recipe.inputItems) {
            recipe.inputItems.forEach(inp => {
                let str = inp.item
                if (inp.count && inp.count > 1) str = `${inp.count}x ${str}`
                builder.inputItems(str)
            })
        }

        if (recipe.inputFluids && recipe.inputFluids.length > 0) {
            recipe.inputFluids.forEach(f => {
                builder.inputFluids(`${f.fluid} ${f.amount}`)
            })
        }

        if (recipe.outputFluids) {
            recipe.outputFluids.forEach(f => {
                builder.outputFluids(`${f.fluid} ${f.amount}`)
            })
        }
    })
})