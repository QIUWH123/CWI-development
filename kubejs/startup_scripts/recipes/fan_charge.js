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
    let fallingAcidParticle = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation('biomancy:falling_acid'))
    let toxinGasParticle = $BuiltInRegistries.PARTICLE_TYPE.get(new $ResourceLocation('biomancy:toxin_gas'))

    let context = $KubeJS.getStartupScriptManager().context

    const corrodingRecipes = {
        'create:iron_sheet': 'minecraft:iron_ingot'
    }

    const corrodingTypeImplementation = {

        isValidAt(level, pos) {
            if (!level || !pos) return false
            return (level.getBlockState(pos).block.id === 'tfmg:sulfuric_acid')
            || (level.getBlockState(pos).block.id === 'kubejs:concentrated_sulfuric_acid')
            //|| (level.getBlockState(pos).block.id === 'create_connected:sulfuric_acid_catalyst')
        },

        getPriority() {
            return 450
        },

        canProcess(stack, level) {
            if (!stack || !level) return false
            if (corrodingRecipes[stack.id]) return true
            return false
        },

        process(stack, level) {
            if (!stack || !level) return null

            let itemId = stack.id
            let resultId = corrodingRecipes[itemId]
            
            if (!resultId) return null

            let result = Item.getItem(resultId)
            let arrayList = new $ArrayList()
            
            arrayList.add(new $ItemStack(result, stack.count))

            return arrayList
        },

        spawnProcessingParticles(level, pos) {
            if (!level || !pos) return
            if (!level.random) return
                
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
        },

        morphAirFlow(particleAccess, random) {
            if (!particleAccess || !random) return

            particleAccess.setColor(0xadac50)
            particleAccess.setAlpha(0.75)
            
            if (random.nextFloat() < 0.02) {
                particleAccess.spawnExtraParticle(toxinGasParticle, 0.2)
            }
        },

        affectEntity(entity, level) {
            if (!entity || !level) return

            if (
                !level.clientSide
                && entity.alive
                && entity instanceof $LivingEntity
            ) {
                if (entity.onFire) {
                    entity.setSecondsOnFire(0)
                }

                entity.addEffect(new $MobEffectInstance('biomancy:armor_shred', 10, 0))
                entity.addEffect(new $MobEffectInstance('biomancy:corrosive', 10, 0))
            }
        }
    }

    let corrodingType = $Context.jsToJava(context, corrodingTypeImplementation, $FanProcessingType)

    $AllFanProcessingTypes.register('corroding', corrodingType)
})