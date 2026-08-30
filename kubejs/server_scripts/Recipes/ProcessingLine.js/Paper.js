ServerEvents.recipes(function(event) {

    addFermentingRecipes(event,
        [
            AddItem('8 createdieselgenerators:wood_chip'),
            AddFluid('500 #cwi:water')
        ],
        [
            AddItem('2 create:pulp'),
            AddItem('create:pulp', 0.5)
        ],
        800, "heated", ['basin', 'bulk']
    )

    addFermentingRecipes(event,
        [
            AddItem('4 #create:pulpifiable'),
            AddFluid('500 #cwi:water')
        ],
        [
            AddItem('2 create:pulp'),
            AddItem('create:pulp', 0.5)
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
            A: 'kubejs:andesite_alloy_rod',
            B: 'minecraft:stick',
            C: 'farmersdelight:canvas'
        }
    )

    event.recipes.create.mixing(Fluid.of('kubejs:pulp', 500), ['create:pulp', AddFluid('500 #cwi:water')]).processingTime(200)
    event.recipes.create.mixing(Fluid.of('kubejs:fine_pulp', 500), Fluid.of('kubejs:pulp', 500)).processingTime(200)

    event.recipes.create.filling('kubejs:wet_web', ['kubejs:forming_fabric', Fluid.of('kubejs:fine_pulp', 100)])

    event.recipes.create.pressing(['kubejs:pressed_wet_web' ,Fluid.of('minecraft:water', 25)], 'kubejs:wet_web')
    event.recipes.create.pressing(['minecraft:paper', 'kubejs:forming_fabric'], 'kubejs:dried_web')

    event.recipes.minecraft.smoking('kubejs:dried_web', 'kubejs:pressed_wet_web')
})