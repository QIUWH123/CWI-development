execute unless score lvl dynbclevel = @s dynbclevel run scoreboard players set @s dynbclevel 0 
execute if score r dynbclevel matches 1 run tag @s add dynbc.secondary
tag @s remove dynbc.delete