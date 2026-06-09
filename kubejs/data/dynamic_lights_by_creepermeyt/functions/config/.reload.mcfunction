execute if score - dynbclevel matches -1.. run tag @s add dynbc.show
execute if entity @s[tag=!dynbc.show] run function dynamic_lights_by_creepermeyt:internal/load
execute if entity @s[tag=!dynbc.show] run scoreboard players set @s dynbcmenus 8


execute if entity @s[tag=dynbc.show] run function dynamic_lights_by_creepermeyt:config/presets
tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
tellraw @s [{"text":"-> ","bold":true},{"text":"Reloaded ","color":"green"},{"text":"datapack","color":"white"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

tag @s remove dynbc.show