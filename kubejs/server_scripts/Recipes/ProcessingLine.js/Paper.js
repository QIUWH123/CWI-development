ServerEvents.recipes(function(event) {

    addFermentingRecipes(event,
        [
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {item: "createdieselgenerators:wood_chip"},
            {fluidTag: "cwi:water", amount: 500}
        ],
        [
            {item: "create:pulp"},
            {item: "create:pulp"},
            {item: "create:pulp", chance: 0.5}
        ],
        800, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            {tag: "create:pulpifiable"},
            {tag: "create:pulpifiable"},
            {tag: "create:pulpifiable"},
            {tag: "create:pulpifiable"},
            {fluidTag: "cwi:water", amount: 500}
        ],
        [
            {item: "create:pulp"},
            {item: "create:pulp"},
            {item: "create:pulp", chance: 0.5}
        ],
        800, "heated", ['basin', 'bulk']
    )

    event.shaped(
        'kubejs:forming_fabric',
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: 'vintageimprovements:andesite_rod',
            B: 'minecraft:stick',
            C: 'farmersdelight:canvas'
        }
    )

    event.recipes.create.mixing(Fluid.of('kubejs:pulp', 500), ['create:pulp', {fluidTag: "cwi:water", amount: 500}]).processingTime(200)
    event.recipes.create.mixing(Fluid.of('kubejs:fine_pulp', 500), Fluid.of('kubejs:pulp', 500)).processingTime(200)

    event.recipes.create.filling('kubejs:wet_web', ['kubejs:forming_fabric', Fluid.of('kubejs:fine_pulp', 100)])

    event.recipes.create.pressing(['kubejs:pressed_wet_web' ,Fluid.of('minecraft:water', 25)], 'kubejs:wet_web')

    event.recipes.minecraft.smoking('kubejs:dried_web', 'kubejs:pressed_wet_web')

    event.custom({
        "type": "ratatouille:demolding",
        "ingredients": [{ "item": "kubejs:dried_web" }],
        "results": [
            { "item": "kubejs:forming_fabric" },
            { "item": "minecraft:paper" }
        ]
    })

})