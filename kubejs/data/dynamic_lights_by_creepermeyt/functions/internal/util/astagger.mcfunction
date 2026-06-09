execute if predicate dynamic_lights_by_creepermeyt:mainhand_torch run tag @e[tag=dynbc.gettinglvl] add dynbc.torch

execute if predicate dynamic_lights_by_creepermeyt:mainhand_lightlvl_15 run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 15

execute if predicate dynamic_lights_by_creepermeyt:mainhand_lightlvl_14 run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 14

execute if predicate dynamic_lights_by_creepermeyt:mainhand_lightlvl_10 run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 10

execute if predicate dynamic_lights_by_creepermeyt:mainhand_lightlvl_7 run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 7

execute if predicate dynamic_lights_by_creepermeyt:mainhand_lightlvl_5 run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 5

execute unless predicate dynamic_lights_by_creepermeyt:no_hand_enchantment unless score @e[tag=dynbc.gettinglvl,limit=1] dynbclevel matches 4.. run tag @e[tag=dynbc.gettinglvl] add dynbc.enchantment
execute if entity @e[tag=dynbc.gettinglvl,tag=dynbc.enchantment] run scoreboard players set @e[tag=dynbc.gettinglvl] dynbclevel 4