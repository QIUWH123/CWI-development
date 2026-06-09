execute unless block ~ ~ ~ light unless block ~ ~ ~ #dynamic_lights_by_creepermeyt:air unless block ~ ~ ~ water[level=0] run scoreboard players set m dynbclevel 1
execute if score lvl dynbclevel matches 0..15 if score m dynbclevel matches 1 positioned ~ ~1 ~ run function dynamic_lights_by_creepermeyt:internal/optimized/summon
execute if score lvl dynbclevel matches 0..15 unless score m dynbclevel matches 1 run function dynamic_lights_by_creepermeyt:internal/optimized/summon
scoreboard players reset m dynbclevel