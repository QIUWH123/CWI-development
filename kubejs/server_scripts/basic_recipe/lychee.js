ServerEvents.recipes(event => {

  event.custom({
    "type":"lychee:item_inside",
    "item_in":{"item":"kubejs:dark_ash_dust"},
    "block_in":{"blocks":["water"],"state":{"level":0}},
    "post":[
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.1 0.1 0.1 0.03 3","hide": true},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.27}},
      {"type":"delay","s":3}
    ]
  })

  event.custom({
    "type": "lychee:item_burning",
    "item_in": {"item": "kubejs:ash_dust"},
    "post": [
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.1 0.1 0.1 0.03 3","hide": true},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","contextual":{"type":"chance","chance":0.67}},
      {"type":"delay","s":3}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"forge:tools/knives"},
    "block_in": "kubejs:dead_leaves",
    "contextual": {"type": "is_sneaking"},
    "post": [
      {"type":"execute","command":"particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.03 7","hide": true},
      {"type":"execute","command":"particle minecraft:dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.02 5","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 5","hide": true},
      {"type":"add_item_cooldown","s":0.3},
      {"type":"place","block":"air"},
      {"type":"damage_item"},
      {"type":"drop_item","item":"minecraft:stick","count":2},
      {"type":"drop_item","item":"minecraft:stick","contextual":{"type":"chance","chance":0.75}},
      {"type":"drop_item","item":"minecraft:stick","contextual":{"type":"chance","chance":0.43}},
      {"type":"drop_item","item":"farmersdelight:straw","contextual":{"type":"chance","chance":0.37}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.27}},
      {"type":"drop_item","item":"kubejs:charcoal_dust","contextual":{"type":"chance","chance":0.13}},
      {"type":"drop_item","item":"miners_delight:arthropod","contextual":{"type":"chance","chance":0.07}},
      {"type":"drop_item","item":"miners_delight:silverfish_eggs","contextual":{"type":"chance","chance":0.05}}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"forge:tools/knives"},
    "block_in": "minecraft:dead_bush",
    "contextual": {"type": "is_sneaking"},
    "post": [
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.1 0.1 0.1 0.03 3","hide": true},
      {"type":"add_item_cooldown","s":0.3},
      {"type":"place","block":"air"},
      {"type":"damage_item"},
      {"type":"drop_item","item":"minecraft:stick"},
      {"type":"drop_item","item":"minecraft:stick","contextual":{"type":"chance","chance":0.75}},
      {"type":"drop_item","item":"minecraft:stick","contextual":{"type":"chance","chance":0.37}},
      {"type":"drop_item","item":"farmersdelight:straw","contextual":{"type":"chance","chance":0.17}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.13}}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"item":"minecraft:brush"},
    "block_in": "kubejs:crystalized_phyllite",
    "post": [
      {"type":"place","block":"darkerdepths:mossy_grimestone"},
      {"type":"add_item_cooldown","s":0.5},
      {"type":"damage_item"},
      {"type":"drop_item","item":"kubejs:crystallum_coccus"},
      {"type":"drop_item","item":"minecraft:redstone","contextual":{"type":"chance","chance":0.37}},
      {"type":"drop_item","item":"kubejs:quartz_dust","contextual":{"type":"chance","chance":0.37}}
    ]
  })

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"minecraft:axes"},
    "block_in": "kubejs:burnt_log",
    "post": [
      {"type":"execute","command":"particle minecraft:large_smoke ~ ~ ~ 0.1 0.1 0.1 0.02 3","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 7","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:burnt_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"place","block":"kubejs:stripped_burnt_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","count":2},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","contextual":{"type":"chance","chance":0.57}},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","contextual":{"type":"chance","chance":0.23}}
    ]})

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"minecraft:axes"},
    "block_in": "kubejs:broken_burnt_log",
    "post": [
      {"type":"execute","command":"particle minecraft:large_smoke ~ ~ ~ 0.1 0.1 0.1 0.02 2","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 4","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:broken_burnt_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"place","block":"kubejs:stripped_broken_burnt_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"kubejs:dark_ash_dust"},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","contextual":{"type":"chance","chance":0.73}}
    ]})

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"minecraft:axes"},
    "block_in": "kubejs:stripped_burnt_log",
    "post": [
      {"type":"execute","command":"particle minecraft:large_smoke ~ ~ ~ 0.1 0.1 0.1 0.02 1","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 3","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:stripped_burnt_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"place","block":"kubejs:stripped_broken_burnt_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":5},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":3,"contextual":{"type":"chance","chance":0.75}},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","count":2,"contextual":{"type":"chance","chance":0.73}}
    ]})

  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag":"minecraft:axes"},
    "block_in": "kubejs:stripped_broken_burnt_log",
    "post": [
      {"type":"execute","command":"particle minecraft:large_smoke ~ ~ ~ 0.1 0.1 0.1 0.02 1","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 3","hide": true},
      {"type":"place","block":"air"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":5},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":3,"contextual":{"type":"chance","chance":0.75}},
      {"type":"drop_item","item":"kubejs:dark_ash_dust","count":2,"contextual":{"type":"chance","chance":0.73}}
    ]})
  
  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag": "minecraft:axes"},
    "block_in": "kubejs:ash_log",
    "post": [
      {"type":"execute","command":"particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.03 7","hide": true},
      {"type":"execute","command":"particle minecraft:dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.02 5","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:ash_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 5","hide": true},
      {"type":"place","block":"kubejs:stripped_ash_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"kubejs:ash_dust"},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.73}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.27}}
    ]})
  
  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag": "minecraft:axes"},
    "block_in": "kubejs:broken_ash_log",
    "post": [
      {"type":"execute","command":"particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.03 4","hide": true},
      {"type":"execute","command":"particle minecraft:dust minecraft:gravel ~ ~ ~ 0.4 0.3 0.4 0.02 3","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:broken_ash_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 5","hide": true},
      {"type":"place","block":"kubejs:stripped_broken_ash_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.63}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.13}}
    ]})
  
  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag": "minecraft:axes"},
    "block_in": "kubejs:stripped_ash_log",
    "post": [
      {"type":"execute","command":"particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.3 0.3 0.3 0.01 3","hide": true},
      {"type":"execute","command":"particle minecraft:dust minecraft:gravel ~ ~ ~ 0.3 0.3 0.3 0.01 3","hide": true},
      {"type":"execute","command":"particle minecraft:block kubejs:stripped_ash_log ~ ~ ~ 0.35 0.35 0.35 0.05 30","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 5","hide": true},
      {"type":"place","block":"kubejs:stripped_broken_ash_log"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":6},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":4,"contextual":{"type":"chance","chance":0.85}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.53}}
    ]})
  
  event.custom({
    "type": "lychee:block_interacting",
    "item_in": {"tag": "minecraft:axes"},
    "block_in": "kubejs:stripped_broken_ash_log",
    "post": [
      {"type":"execute","command":"particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.3 0.3 0.3 0.01 3","hide": true},
      {"type":"execute","command":"particle minecraft:dust minecraft:gravel ~ ~ ~ 0.3 0.3 0.3 0.01 3","hide": true},
      {"type":"execute","command":"particle minecraft:smoke ~ ~ ~ 0.3 0.3 0.3 0.05 5","hide": true},
      {"type":"place","block":"air"},
      {"type":"add_item_cooldown","s":0.2},
      {"type":"damage_item"},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":6},
      {"type":"drop_item","item":"createdieselgenerators:wood_chip","count":4,"contextual":{"type":"chance","chance":0.85}},
      {"type":"drop_item","item":"kubejs:ash_dust","contextual":{"type":"chance","chance":0.53}}
    ]})

  event.custom({
    "type": "lychee:dripstone_dripping",
    "source_block":"water",
    "target_block":"sponge",
    "post": [{"type":"place","block":"wet_sponge"}]
  })

  event.custom({
    "type": "lychee:dripstone_dripping",
    "source_block":"water",
    "target_block":"kubejs:depleted_dirt",
    "post": [{"type":"place","block":"kubejs:soaked_depleted_dirt"}]
  })

})