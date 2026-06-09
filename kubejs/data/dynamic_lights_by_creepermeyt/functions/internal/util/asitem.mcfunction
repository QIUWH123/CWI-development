tag @s add dynbc.gettinglvl
data modify entity @e[tag=dynbc.itemtagger,limit=1] HandItems[0] set from entity @s Item
data modify entity @e[tag=dynbc.itemtagger,limit=1] equipment.mainhand set from entity @s Item
execute as @e[tag=dynbc.itemtagger] run function dynamic_lights_by_creepermeyt:internal/util/astagger
tag @s remove dynbc.gettinglvl
tag @s add dynbc.haslvl