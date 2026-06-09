execute unless score r dynbclevel matches 1 run tag @s remove dynbc.secondary

tag @s add dynbc.update
execute store result score @s dynbclevel run scoreboard players get lvl dynbclevel
