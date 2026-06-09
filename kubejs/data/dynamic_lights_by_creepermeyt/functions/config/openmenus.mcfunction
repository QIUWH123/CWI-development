# 1 -> execute if score @s dynbcmenus matches 1 run function dynamic_lights_by_creepermeyt:config/.toggle_fire
# 1 -> trigger dynbcmenus set 1

execute if score @s dynbcmenus matches 1 run function dynamic_lights_by_creepermeyt:config/.toggle_fire
execute if score @s dynbcmenus matches 2 run function dynamic_lights_by_creepermeyt:config/.toggle_tnt
execute if score @s dynbcmenus matches 3 run function dynamic_lights_by_creepermeyt:config/.toggle_glowsquid
execute if score @s dynbcmenus matches 4 run function dynamic_lights_by_creepermeyt:config/.toggle_glowing
execute if score @s dynbcmenus matches 5 run function dynamic_lights_by_creepermeyt:config/.toggle_optimization
execute if score @s dynbcmenus matches 6 run function dynamic_lights_by_creepermeyt:config/.toggle_allay
execute if score @s dynbcmenus matches 7 run function dynamic_lights_by_creepermeyt:config/.toggle_enchantment
execute if score @s dynbcmenus matches 8 run function dynamic_lights_by_creepermeyt:config/config

execute if score @s dynbcmenus matches 9 run function dynamic_lights_by_creepermeyt:config/.toggle_preset
execute if score @s dynbcmenus matches 10 run function dynamic_lights_by_creepermeyt:config/oconfig
execute if score @s dynbcmenus matches 11 run function dynamic_lights_by_creepermeyt:config/.uninstall

scoreboard players reset @s dynbcmenus
scoreboard players enable @s dynbcmenus