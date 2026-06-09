scoreboard players reset @s dynbcmenus
scoreboard players add a dynbclevel 1
execute if score a dynbclevel matches 2 run scoreboard players set a dynbclevel 0
execute if score p dynbclevel matches 0 if score a dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score a dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"emissive ","color":"gray","bold":false},{"text":"Allays","color":"aqua"}]
execute if score a dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"emissive ","color":"gray","bold":false},{"text":"Allays","color":"aqua"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

