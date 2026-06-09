#if delete
#replace with new, erase delete

#if not delete
#check if larger, replace with larger


execute if entity @s[tag=dynbc.delete] unless score lvl dynbclevel = @s dynbclevel run scoreboard players set @s dynbclevel 0 
execute if entity @s[tag=dynbc.delete] run tag @s remove dynbc.delete

scoreboard players reset c dynbclevel
execute if score lvl dynbclevel > @s dynbclevel run function dynamic_lights_by_creepermeyt:internal/optimized/compare_c1
execute if score lvl dynbclevel matches 0 run function dynamic_lights_by_creepermeyt:internal/optimized/compare_c1