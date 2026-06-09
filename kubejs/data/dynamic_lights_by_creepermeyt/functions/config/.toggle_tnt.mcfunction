scoreboard players reset @s dynbcmenus
scoreboard players add t dynbclevel 1
execute if score t dynbclevel matches 2 run scoreboard players set t dynbclevel 0
execute if score p dynbclevel matches 0 if score t dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score t dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"lit ","color":"gray","bold":false},{"text":"TNT","color":"red"}]
execute if score t dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"lit ","color":"gray","bold":false},{"text":"TNT","color":"red"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

