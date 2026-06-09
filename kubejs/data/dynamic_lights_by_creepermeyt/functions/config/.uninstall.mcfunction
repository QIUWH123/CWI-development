scoreboard players set - dynbclevel -2
scoreboard players set f dynbclevel 0
scoreboard players set t dynbclevel 0
scoreboard players set s dynbclevel 0
scoreboard players set g dynbclevel 0
scoreboard players set a dynbclevel 0
scoreboard players set e dynbclevel 0
function dynamic_lights_by_creepermeyt:internal/tick

tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}
tellraw @s "                 -------------------------------"
tellraw @s [{"text":"            < ","bold":true},{"text":"Dynamic Lights","color":"yellow"},{"text":" By ","color":"gray","bold":false},"CreepermeYT >"]
tellraw @s "                 -------------------------------"
tellraw @s ""
tellraw @s ["                            ",{"text":" << PRESETS >>","bold":true,"color":"gray"}]
tellraw @s ""
tellraw @s ["                        ",{"text":"   ","bold":true},{"text":"[ UNINSTALLED ]","color":"dark_gray","bold":true}]
tellraw @s ""
tellraw @s ""
tellraw @s ["                    ",{"text":"   << TOGGLE OPTIONS >>","bold":true,"color":"gray"}]
tellraw @s ""
tellraw @s ["                         ",{"text":"  ","bold":true},{"text":"[ UNINSTALLED ]","bold":true,"color":"dark_gray"}]
tellraw @s ""
tellraw @s ""
tellraw @s {"text":"                         [ RELOAD ]","color":"green","bold":true,"clickEvent": {"action": "run_command", "value": "/function dynamic_lights_by_creepermeyt:config/.reload"}}
tellraw @s ""
tellraw @s {"text":"-- Previous Action: ------------------------------------","color":"yellow"}
tellraw @s [{"text":"-> ","bold":true},{"text":"Uninstalled ","color":"red"},{"text":"datapack","color":"white"}]
tellraw @s {"text":"-----------------------------------------------------","color":"yellow"}

playsound ui.button.click master @s