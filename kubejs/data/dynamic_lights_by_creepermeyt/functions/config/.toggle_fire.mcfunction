scoreboard players reset @s dynbcmenus
scoreboard players add f dynbclevel 1
execute if score f dynbclevel matches 2 run scoreboard players set f dynbclevel 0
execute if score p dynbclevel matches 0 if score f dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score f dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"entities on","color":"gray","bold":false},{"text":" Fire","color":"gold"}]
execute if score f dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"entities on","color":"gray","bold":false},{"text":" Fire","color":"gold"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

