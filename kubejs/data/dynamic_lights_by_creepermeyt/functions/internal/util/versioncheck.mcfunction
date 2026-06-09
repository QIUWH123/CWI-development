scoreboard players set v dynbclevel -1165
summon minecraft:arrow ~ ~-128 ~ {Tags:['cmyt.versioncheck'],HasBeenShot:1b}
execute if data entity @e[type=arrow,tag=cmyt.versioncheck,limit=1] HasBeenShot run scoreboard players set v dynbclevel -1170
execute unless entity @e[type=arrow,tag=cmyt.versioncheck,limit=1] run scoreboard players set v dynbclevel -1170
kill @e[tag=cmyt.versioncheck]