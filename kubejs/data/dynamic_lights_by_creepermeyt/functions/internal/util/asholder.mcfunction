tag @s remove dynbc.haslvl
tag @s remove dynbc.torch
tag @s remove dynbc.enchantment
scoreboard players reset @s dynbclevel
tag @s add dynbc.holder

execute if entity @a[distance=..48] run function dynamic_lights_by_creepermeyt:internal/conditional/asholder_c4