function dynamic_lights_by_creepermeyt:internal/smart/delete

tag @s add dynbc.empty
execute if entity @s[tag=dynbc.waterabove] run tag @s remove dynbc.empty
execute if entity @s[tag=dynbc.empty] unless block ~ ~ ~ #dynamic_lights_by_creepermeyt:air unless block ~ ~ ~ water[level=0] run tag @s remove dynbc.empty
execute if entity @s[tag=!dynbc.secondary,tag=!dynbc.empty] run function dynamic_lights_by_creepermeyt:internal/smart/propagate

execute if entity @s[tag=dynbc.empty] run function dynamic_lights_by_creepermeyt:internal/smart/create_c1