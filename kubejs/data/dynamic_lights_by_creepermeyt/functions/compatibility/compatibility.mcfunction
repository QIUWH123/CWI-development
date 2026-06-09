#############################
# ADD CUSTOM DYNAMIC LIGHTS #
# OR DATAPACK COMPATIBILITY #
#############################
## This .mcfunction will run in the right time to generate 
## custom dynamic lights under the conditions you specify


###########################################
# HOW TO GENERATE YOUR OWN DYNAMIC LIGHTS #
###########################################
## ADD THESE TWO COMMANDS (AND REMOVE THE '#'):
#scoreboard players set lvl dynbclevel 15 <---- specifies the light level you want, replace the '15' with your light level
#function dynamic_lights_by_creepermeyt:internal/dynamiclight  <---- generates a dynamic light at the position the function is executed


############
# EXAMPLES #
############

##  Example 1 :  ##
#-  will make every player generate a dynamic light level 7 at their position  -#
#-  (disabled with a '#' for obvious reasons)  -#
#scoreboard players set lvl dynbclevel 7
#execute at @a run function dynamic_lights_by_creepermeyt:internal/dynamiclight


##  Example 2 :  ##
#-  will disable dynamic lights of every player at their position because light level 0 is considered as a dynamic light disabling factor -#
#-  (disabled with a '#' for obvious reasons)  -#
#scoreboard players set lvl dynbclevel 0
#execute as @a at @s anchored eyes positioned ^ ^ ^ run function dynamic_lights_by_creepermeyt:internal/dynamiclight


##  Example 3 :  ##
#-  will make every player with a dragon egg generate a dynamic light level 9 at their position  -#
#-  (not disabled with a '#' because its an easter egg c:)  -#
scoreboard players set lvl dynbclevel 9
execute at @a[predicate=!dynamic_lights_by_creepermeyt:no_hand_easteregg] run function dynamic_lights_by_creepermeyt:internal/dynamiclight


##  Example 4 :  ##
#-  will run another datapack's own dynamiclight function  -#
#-  (not disabled with a '#' because datapack doesn't exist, nothing happens)  -#
function anotherdatapack:generatedynamiclights


