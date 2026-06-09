scoreboard players reset @s dynbcmenus
scoreboard players add - dynbclevel 1
execute if score - dynbclevel matches 2 run scoreboard players set - dynbclevel -1
execute if score p dynbclevel matches 0 unless score s dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score - dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"all items except ","color":"gray","bold":false},{"text":"Torches","color":"yellow"}]
execute if score - dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"All Items","color":"yellow"}]
execute if score - dynbclevel matches -1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"All Items","color":"gray"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

