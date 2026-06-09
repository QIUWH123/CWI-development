#if delete
#replace with new, erase delete, add secondary if necessary

#if not delete
#check if larger, replace with larger, remove secondary if necessary

execute if entity @s[tag=dynbc.delete] run function dynamic_lights_by_creepermeyt:internal/smart/compare_c2

scoreboard players reset c dynbclevel

execute if score lvl dynbclevel > @s dynbclevel run function dynamic_lights_by_creepermeyt:internal/smart/compare_c1
execute if score lvl dynbclevel matches 0 run function dynamic_lights_by_creepermeyt:internal/smart/compare_c1

