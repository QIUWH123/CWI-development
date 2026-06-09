scoreboard players set c dynbclevel 0
execute align xyz as @e[type=marker,tag=dynbc,distance=...1] run function dynamic_lights_by_creepermeyt:internal/smart/compare

execute if score c dynbclevel matches 0 run function dynamic_lights_by_creepermeyt:internal/smart/summon_c1
