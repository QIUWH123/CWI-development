// priority: -1

StartupEvents.registry("creative_mode_tab", (event) => {
	function addCreativeTab(name) {
		return event.create(`cwi:${name}`)
	}

	addCreativeTab("fan_catalysts")
		.icon(() => Item.of("kubejs:brass_fan_blasting_catalyst"))
		.content(() => Ingredient.of("#cwi:fan_catalysts").itemIds)
		
	addCreativeTab("fluids")
		.icon(() => Item.of("kubejs:oxygen_bucket"))
		.content(() => Ingredient.of("#cwi:containers").itemIds)
		
	addCreativeTab("dusts")
		.icon(() => Item.of("kubejs:gold_dust"))
		.content(() => Ingredient.of("#cwi:dusts").itemIds)
		
	addCreativeTab("tools")
		.icon(() => Item.of("minecraft:iron_pickaxe"))
		.content(() => Ingredient.of("#forge:tools").itemIds)
		
	addCreativeTab("plot_items")
		.icon(() => Item.of("kubejs:material_note"))
		.content(() => Ingredient.of("#cwi:plot_items").itemIds)

})

StartupEvents.modifyCreativeTab('kubejs:tab', event => {

	event.remove(
		Ingredient.of("#cwi:fan_catalysts").itemIds
		.concat(Ingredient.of("#cwi:containers").itemIds)
		.concat(Ingredient.of("#cwi:dusts").itemIds)
		.concat(Ingredient.of("#cwi:plot_items").itemIds)
	)

	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])

})