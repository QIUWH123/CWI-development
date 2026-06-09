execute if score p dynbclevel matches 0 run tag @s add profile1
execute if score p dynbclevel matches 1 run tag @s add profile2
execute if score p dynbclevel matches 2 run tag @s add profile0
execute if score p dynbclevel matches 3 run tag @s add profile0

tag @s add dynbc.presetchange
function dynamic_lights_by_creepermeyt:config/.uninstall
tag @s remove dynbc.presetchange


## --- SAME AS LOAD.MCFUNCTION --- ###

scoreboard objectives add dynbclevel dummy
scoreboard objectives remove dynbcmenus
scoreboard objectives add dynbcmenus trigger

execute if entity @s[tag=profile0] run scoreboard players set 0 dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set - dynbclevel 1
execute if entity @s[tag=profile0] run scoreboard players set f dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set t dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set g dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set s dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set p dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set a dynbclevel 0
execute if entity @s[tag=profile0] run scoreboard players set e dynbclevel 0

execute if entity @s[tag=profile1] run scoreboard players set 0 dynbclevel 0
execute if entity @s[tag=profile1] run scoreboard players set - dynbclevel 0
execute if entity @s[tag=profile1] run scoreboard players set f dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set t dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set g dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set s dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set p dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set a dynbclevel 1
execute if entity @s[tag=profile1] run scoreboard players set e dynbclevel 1

execute if entity @s[tag=profile2] run scoreboard players set 0 dynbclevel 0
execute if entity @s[tag=profile2] run scoreboard players set - dynbclevel 0
execute if entity @s[tag=profile2] run scoreboard players set f dynbclevel 1
execute if entity @s[tag=profile2] run scoreboard players set t dynbclevel 1
execute if entity @s[tag=profile2] run scoreboard players set g dynbclevel 1
execute if entity @s[tag=profile2] run scoreboard players set s dynbclevel 1
execute if entity @s[tag=profile2] run scoreboard players set p dynbclevel 2
execute if entity @s[tag=profile2] run scoreboard players set a dynbclevel 1
execute if entity @s[tag=profile2] run scoreboard players set e dynbclevel 1

execute if entity @s[tag=profile3] run scoreboard players set 0 dynbclevel 0
execute if entity @s[tag=profile3] run scoreboard players set - dynbclevel 0
execute if entity @s[tag=profile3] run scoreboard players set f dynbclevel 1
execute if entity @s[tag=profile3] run scoreboard players set t dynbclevel 1
execute if entity @s[tag=profile3] run scoreboard players set g dynbclevel 1
execute if entity @s[tag=profile3] run scoreboard players set s dynbclevel 1
execute if entity @s[tag=profile3] run scoreboard players set p dynbclevel 3
execute if entity @s[tag=profile3] run scoreboard players set a dynbclevel 1
execute if entity @s[tag=profile3] run scoreboard players set e dynbclevel 1

#version check
function dynamic_lights_by_creepermeyt:internal/common/versioncheck

function dynamic_lights_by_creepermeyt:internal/tick
function dynamic_lights_by_creepermeyt:config/presets
tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
execute if entity @s[tag=profile0] run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Switched","color":"yellow"}," to ",{"text":"[FASTEST] ","color":"gray"},{"text":"Preset","color":"gold"}]
execute if entity @s[tag=profile1] run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Switched","color":"yellow"}," to ",{"text":"[OPTIMIZED] ","color":"gray"},{"text":"Preset","color":"gold"}]
execute if entity @s[tag=profile2] run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Switched","color":"yellow"}," to ",{"text":"[SMART] ","color":"gray"},{"text":"Preset","color":"gold"}]
execute if entity @s[tag=profile3] run tellraw @s [{"text":"-> ","color":"white","bold":true},{"text":"Switched","color":"yellow"}," to ",{"text":"[TEST] ","color":"gray"},{"text":"Preset","color":"gold"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

tag @s remove profile0
tag @s remove profile1
tag @s remove profile2
tag @s remove profile3