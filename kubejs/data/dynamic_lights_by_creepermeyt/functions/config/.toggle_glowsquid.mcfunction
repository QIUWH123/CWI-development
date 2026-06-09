scoreboard players reset @s dynbcmenus
scoreboard players add s dynbclevel 1
execute if score s dynbclevel matches 2 run scoreboard players set s dynbclevel 0
execute if score p dynbclevel matches 0 if score s dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score s dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"glowing ","color":"gray","bold":false},{"text":"Glow Squid","color":"blue"}]
execute if score s dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"glowing ","color":"gray","bold":false},{"text":"Glow Squid","color":"blue"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

