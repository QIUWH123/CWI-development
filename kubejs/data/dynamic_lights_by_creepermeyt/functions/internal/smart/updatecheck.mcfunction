execute unless block ~ ~ ~ light run tag @s add dynbc.update
execute if block ~ ~1 ~ water if block ~ ~ ~ light[waterlogged=false] run tag @s add dynbc.waterabove
execute if entity @s[tag=dynbc.waterabove] run tag @s add dynbc.update