execute as @e[type=marker,tag=dynbc,limit=16383] at @s run function dynamic_lights_by_creepermeyt:internal/smart/updatecheck 
execute as @e[type=marker,tag=!dynbc.secondary,tag=!dynbc.delete,tag=dynbc.update,limit=16383] at @s run function dynamic_lights_by_creepermeyt:internal/smart/create
execute as @e[type=marker,tag=dynbc.secondary,tag=!dynbc.delete,tag=dynbc.update,limit=16383] at @s run function dynamic_lights_by_creepermeyt:internal/smart/create
execute as @e[type=marker,tag=dynbc.delete,limit=16383] at @s run function dynamic_lights_by_creepermeyt:internal/smart/delete