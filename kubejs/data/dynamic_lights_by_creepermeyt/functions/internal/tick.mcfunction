## reschedule tick
execute unless score - dynbclevel matches -2 run schedule function dynamic_lights_by_creepermeyt:internal/tick 1t
execute if score - dynbclevel matches -2 run schedule clear dynamic_lights_by_creepermeyt:internal/tick
## mark dynamic light markers for deletion
tag @e[type=marker,tag=dynbc] add dynbc.delete

## menus 1.21.6
execute unless score - dynbclevel matches -2 as @a[scores={dynbcmenus=1..}] at @s run function dynamic_lights_by_creepermeyt:config/openmenus

###########################################################
## Add Items, Entities, Effects, Compatibility to Marker ##
###########################################################

## entities on fire - only if they are close to a player
scoreboard players set lvl dynbclevel 15
execute if score f dynbclevel matches 1 as @e[predicate=dynamic_lights_by_creepermeyt:on_fire] at @s if entity @a[distance=..48] anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## max of 48 tnt - only if they are close to a player
scoreboard players set lvl dynbclevel 15
execute if score t dynbclevel matches 1 as @e[type=tnt,sort=random,limit=48] unless entity @s[nbt={fuse:1s}] at @s unless block ~ ~1 ~ moving_piston unless block ~ ~1 ~ tnt if entity @a[distance=..48] run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## glowing effect - only if they are close to a player
scoreboard players set lvl dynbclevel 10
execute if score g dynbclevel matches 1 as @e[predicate=dynamic_lights_by_creepermeyt:is_glowing] at @s if entity @a[distance=..48] anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## glow squids :3 - only if they are close to a player
scoreboard players set lvl dynbclevel 10
execute if score s dynbclevel matches 1 as @e[type=glow_squid] at @s if entity @a[distance=..48] anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## allays :D - only if they are close to a player
scoreboard players set lvl dynbclevel 6
execute if score a dynbclevel matches 1 as @e[type=#dynamic_lights_by_creepermeyt:allay] at @s if entity @a[distance=..48] anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## enchanted armor (not items)- only if they are <24 blocks (spawn radius) from a player so that mob farms are not affected
scoreboard players set lvl dynbclevel 4
execute if score e dynbclevel matches 1 as @e[type=#dynamic_lights_by_creepermeyt:can_wear_armor,predicate=!dynamic_lights_by_creepermeyt:no_armor_enchantment] at @s if entity @a[distance=..24] anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight

## PREPARE TAGS & SCOREBOARDS OF HOLDERS & ITEMS
## run as HOLDERS of items - only if they are close to a player
execute unless score - dynbclevel matches -2 as @e[type=#dynamic_lights_by_creepermeyt:can_hold_dynbc] at @s run function dynamic_lights_by_creepermeyt:internal/util/asholder

## run as DROPPED items
execute if entity @e[type=item,tag=!dynbc.haslvl] at @e[type=item,tag=!dynbc.haslvl,sort=nearest,limit=1] run summon minecraft:armor_stand ~ -128 ~ {Tags:[dynbc.itemtagger]}
execute unless score - dynbclevel matches -2 as @e[type=item,tag=!dynbc.haslvl] run function dynamic_lights_by_creepermeyt:internal/util/asitem
kill @e[tag=dynbc.itemtagger]

## Holders with ENCHANTED items & DROPPED Enchanted items
execute if score e dynbclevel matches 1 as @e[tag=dynbc.enchantment] run function dynamic_lights_by_creepermeyt:internal/util/genforentitywithscore
## TORCHES ONLY - holders & items
execute if score - dynbclevel matches 1 as @e[tag=dynbc.haslvl,tag=!dynbc.enchantment,tag=dynbc.torch] run function dynamic_lights_by_creepermeyt:internal/util/genforentitywithscore
## ALL ITEMS - holders & items
execute if score - dynbclevel matches 0 as @e[tag=dynbc.haslvl,tag=!dynbc.enchantment,scores={dynbclevel=0..}] run function dynamic_lights_by_creepermeyt:internal/util/genforentitywithscore


## compatibility
execute unless score - dynbclevel matches -2 run function dynamic_lights_by_creepermeyt:compatibility/compatibility

## Check if OVERLOADED
function dynamic_lights_by_creepermeyt:internal/util/overloadcheck

###################################
## Generation/Deletion of Lights ##
###################################
function dynamic_lights_by_creepermeyt:internal/common/tickupdate


## complete uninstallation
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run tag @e remove dynbc.haslvl
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run tag @e remove dynbc.torch
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run tag @e remove dynbc.holder
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run tag @e remove dynbc.enchantment
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run scoreboard objectives remove dynbcmenus
execute if score - dynbclevel matches -2 if entity @s[tag=!dynbc.presetchange] run scoreboard objectives remove dynbclevel