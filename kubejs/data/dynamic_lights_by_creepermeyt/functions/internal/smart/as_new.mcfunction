execute store result score @s dynbclevel run scoreboard players get lvl dynbclevel
execute if score r dynbclevel matches 1 run tag @s add dynbc.secondary
tag @s remove dynbc.new