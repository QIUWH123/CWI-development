## check for only torches
execute if score - dynbclevel matches 1 unless predicate dynamic_lights_by_creepermeyt:no_hand_torch run function dynamic_lights_by_creepermeyt:internal/conditional/asholder_c2

## check for all items
execute if score - dynbclevel matches 0 run function dynamic_lights_by_creepermeyt:internal/conditional/asholder_c1

## check for enchanted items
execute if score e dynbclevel matches 1 unless predicate dynamic_lights_by_creepermeyt:no_hand_enchantment unless score @s dynbclevel matches 4.. run function dynamic_lights_by_creepermeyt:internal/conditional/asholder_c3


execute if score @s dynbclevel matches 0.. run tag @s add dynbc.haslvl

