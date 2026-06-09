execute if score 0 dynbclevel matches 0 run tag @s add exists
execute if entity @s[tag=!exists] run function dynamic_lights_by_creepermeyt:config/.uninstall


execute if entity @s[tag=exists] run function dynamic_lights_by_creepermeyt:config/presets
execute if entity @s[tag=exists] run tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if entity @s[tag=exists] run tellraw @s [{"text":"-> Opened ","color":"white","bold":true},{"text":"Config","color":"gray"}]
execute if entity @s[tag=exists] run tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}
tag @s remove exists