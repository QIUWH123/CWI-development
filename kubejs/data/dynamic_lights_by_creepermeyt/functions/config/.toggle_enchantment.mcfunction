scoreboard players reset @s dynbcmenus
scoreboard players add e dynbclevel 1
execute if score e dynbclevel matches 2 run scoreboard players set e dynbclevel 0
execute if score p dynbclevel matches 0 if score e dynbclevel matches 1 run scoreboard players set p dynbclevel 1

function dynamic_lights_by_creepermeyt:internal/tick

function dynamic_lights_by_creepermeyt:config/rconfig

tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if score e dynbclevel matches 0 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Disabled ","color":"red"},{"text":"Enchanted","bold":true,"color":"dark_purple"},{"text":" items","color":"gray","bold":false}]
execute if score e dynbclevel matches 1 run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Enabled ","color":"green"},{"text":"Enchanted","bold":true,"color":"dark_purple"},{"text":" items","color":"gray","bold":false}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

