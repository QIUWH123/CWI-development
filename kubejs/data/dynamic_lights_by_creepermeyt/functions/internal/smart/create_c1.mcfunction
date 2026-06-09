execute if score @s dynbclevel matches 9..15 run function dynamic_lights_by_creepermeyt:internal/smart/place/place_high
execute if score @s dynbclevel matches ..8 run function dynamic_lights_by_creepermeyt:internal/smart/place/place_low
tag @s remove dynbc.empty
tag @s remove dynbc.update