scoreboard players reset @s dynbcmenus
scoreboard players add g dynbclevel 1
execute if score g dynbclevel matches 2 run scoreboard players set g dynbclevel 0
execute if score p dynbclevel matches 0 if score g dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score g dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"entities with","color":"gray","bold":false},{"text":" Glowing","color":"gray"}]
execute if score g dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"entities with","color":"gray","bold":false},{"text":" Glowing","color":"gray"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

