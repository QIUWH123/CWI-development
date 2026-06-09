scoreboard objectives add dynbclevel dummy
scoreboard objectives remove dynbcmenus
scoreboard objectives add dynbcmenus trigger
execute unless score 0 dynbclevel matches 0.. run scoreboard players set 0 dynbclevel 0
execute unless score - dynbclevel matches -1.. run scoreboard players set - dynbclevel 0
execute unless score f dynbclevel matches 0.. run scoreboard players set f dynbclevel 1
execute unless score t dynbclevel matches 0.. run scoreboard players set t dynbclevel 1
execute unless score g dynbclevel matches 0.. run scoreboard players set g dynbclevel 1
execute unless score s dynbclevel matches 0.. run scoreboard players set s dynbclevel 1
execute unless score p dynbclevel matches 0.. run scoreboard players set p dynbclevel 2
execute unless score a dynbclevel matches 0.. run scoreboard players set a dynbclevel 1
execute unless score e dynbclevel matches 0.. run scoreboard players set e dynbclevel 1

#version check
function dynamic_lights_by_creepermeyt:internal/util/versioncheck

execute unless score v dynbclevel matches -1170 run function dynamic_lights_by_creepermeyt:config/incompatible
execute if score v dynbclevel matches -1170 run function dynamic_lights_by_creepermeyt:internal/conditional/load_c1


## --- SAME AS .TOGGLE_PRESET.MCFUNCTION --- ###