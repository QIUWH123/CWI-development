ForgeModEvents.onEvent('net.minecraftforge.fml.event.lifecycle.FMLCommonSetupEvent', event => {

    let $AllFanProcessingTypes = Java.loadClass('com.simibubi.create.content.kinetics.fan.processing.AllFanProcessingTypes')
    let $FanProcessingType = Java.loadClass('com.simibubi.create.content.kinetics.fan.processing.FanProcessingType')
    let $ItemStack = Java.loadClass('net.minecraft.world.item.ItemStack')
    let $ArrayList = Java.loadClass('java.util.ArrayList')
    let $Context = Java.loadClass('dev.latvian.mods.rhino.Context')
    let $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')
    let $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity')
    let $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
    let $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    let $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
    let $HashMap = Java.loadClass('java.util.HashMap')

    let fallingAcidParticle = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation('biomancy:falling_acid'))
    let toxinGasParticle = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation('biomancy:toxin_gas'))
    let cloudParticle = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation('minecraft:cloud'))

    let context = $KubeJS.getStartupScriptManager().context

    let corrodingRecipesMap = new $HashMap()
    let sterilizingRecipesMap = new $HashMap()

    global.corrodingFanRecipes = corrodingRecipesMap
    global.sterilizingFanRecipes = sterilizingRecipesMap

    let spawnCorrodingParticles = function (level, pos) {
        if (!level || !pos || !level.random) return
        let x = typeof pos.x === 'number' ? pos.x : 0
        let y = typeof pos.y === 'number' ? pos.y : 0
        let z = typeof pos.z === 'number' ? pos.z : 0
        if (level.random.nextInt(5) == 0) {
            level.addParticle(
                fallingAcidParticle,
                x + (level.random.nextFloat() - 0.5) * 0.5,
                y + 0.1,
                z + (level.random.nextFloat() - 0.5) * 0.5,
                0.0, 0.02, 0.0
            )
        }
    }

    let morphCorrodingAirFlow = function (particleAccess, random) {
        if (!particleAccess || !random) return
        particleAccess.setColor(0xadac50)
        particleAccess.setAlpha(0.75)
        if (random.nextFloat() < 0.02) {
            particleAccess.spawnExtraParticle(toxinGasParticle, 0.2)
        }
    }

    let applyCorrodingEffects = function (entity, level) {
        if (!entity || !level) return
        if (!level.clientSide && entity.alive && entity instanceof $LivingEntity) {
            entity.addEffect(new $MobEffectInstance('biomancy:armor_shred', 10, 0))
            entity.addEffect(new $MobEffectInstance('biomancy:corrosive', 10, 0))
        }
    }

    let spawnSterilizingParticles = function (level, pos) {
        if (!level || !pos || !level.random) return
        let x = typeof pos.x === 'number' ? pos.x : 0
        let y = typeof pos.y === 'number' ? pos.y : 0
        let z = typeof pos.z === 'number' ? pos.z : 0
        if (level.random.nextInt(3) == 0) {
            level.addParticle(
                cloudParticle,
                x + (level.random.nextFloat() - 0.5) * 0.5,
                y + 0.1,
                z + (level.random.nextFloat() - 0.5) * 0.5,
                0.0, 0.02, 0.0
            )
        }
    }

    let morphSterilizingAirFlow = function (particleAccess, random) {
        if (!particleAccess || !random) return
        particleAccess.setColor(0x88ccff)
        particleAccess.setAlpha(0.6)
        if (random.nextFloat() < 0.05) {
            particleAccess.spawnExtraParticle(cloudParticle, 0.2)
        }
    }

    let applySterilizingEffects = function (entity, level) {
        if (!entity || !level) return
        if (!level.clientSide && entity.alive && entity instanceof $LivingEntity) {
            entity.addEffect(new $MobEffectInstance('minecraft:blindness', 100, 0))
        }
    }

    let fanProcessingConfigs = [
        {
            name: 'corroding',
            catalysts: [
                'tfmg:sulfuric_acid',
                'kubejs:concentrated_sulfuric_acid',
                'kubejs:brass_fan_corroding_catalyst',
                'kubejs:iron_fan_corroding_catalyst',
                'kubejs:cast_iron_fan_corroding_catalyst',
                'kubejs:steel_fan_corroding_catalyst',
                'kubejs:aluminum_fan_corroding_catalyst'
            ],
            recipesMap: corrodingRecipesMap,
            priority: 450,
            spawnParticles: spawnCorrodingParticles,
            morphAirFlow: morphCorrodingAirFlow,
            affectEntity: applyCorrodingEffects
        },
        {
            name: 'sterilizing',
            catalysts: [
                'createdieselgenerators:ethanol',
                'kubejs:brass_fan_sterilizing_catalyst',
                'kubejs:iron_fan_sterilizing_catalyst',
                'kubejs:cast_iron_fan_sterilizing_catalyst',
                'kubejs:steel_fan_sterilizing_catalyst',
                'kubejs:aluminum_fan_sterilizing_catalyst'
            ],
            recipesMap: sterilizingRecipesMap,
            priority: 450,
            spawnParticles: spawnSterilizingParticles,
            morphAirFlow: morphSterilizingAirFlow,
            affectEntity: applySterilizingEffects
        }
    ]

    function registerFanType(config) {
        let impl = {
            isValidAt: function (level, pos) {
                if (!level || !pos) return false
                return config.catalysts.includes(level.getBlockState(pos).block.id)
            },
            getPriority: function () {
                return config.priority || 450
            },
            canProcess: function (stack, level) {
                if (!stack || !level) return false
                return config.recipesMap.containsKey(stack.id)
            },
            process: function (stack, level) {
                if (!stack || !level) return null
                let resultId = config.recipesMap.get(stack.id)
                if (!resultId) return null
                let result = Item.getItem(resultId)
                let arr = new $ArrayList()
                arr.add(new $ItemStack(result, stack.count))
                return arr
            },
            spawnProcessingParticles: config.spawnParticles,
            morphAirFlow: config.morphAirFlow,
            affectEntity: config.affectEntity
        }
        let fanTypeObj = $Context.jsToJava(context, impl, $FanProcessingType)
        $AllFanProcessingTypes.register(config.name, fanTypeObj)
    }

    fanProcessingConfigs.forEach(registerFanType)
})