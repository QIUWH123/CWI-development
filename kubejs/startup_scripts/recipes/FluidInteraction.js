/*
StartupEvents.postInit((event) => {
    let $FluidInteractionRegistry = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry');
    let II = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$InteractionInformation').__javaObject__;
    let FI = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$FluidInteraction').__javaObject__;
    let HI = Java.loadClass('net.minecraftforge.fluids.FluidInteractionRegistry$HasFluidInteraction').__javaObject__;
    let context = $KubeJS.getStartupScriptManager().context;

    function registerFluidInteraction(fluidType, hasFluidInteration, fluidInteration) {
        $FluidInteractionRegistry.addInteraction(
            fluidType,
            II.getConstructor(HI, FI).newInstance(
                $Context.jsToJava(context, hasFluidInteration, HI),
                $Context.jsToJava(context, fluidInteration, FI)
            )
        );
    }

    function blockGen(outputBlock, inputBlock, fluid) {
        registerFluidInteraction(
            Fluid.of(fluid).fluid.fluidType,
            (level, currentPos, relativePos, currentState) => {
                const directions = [
                    currentPos.north(),
                    currentPos.south(),
                    currentPos.east(),
                    currentPos.west(),
                    currentPos.below(),
                ];

                for (let direction of directions) {
                    if (level.getBlockState(direction).is(Block.getBlock(inputBlock))) {
                        return true;
                    }
                }
                return false;
            },
            (level, currentPos, relativePos, currentState) => {
                level.setBlockAndUpdate(currentPos, Block.getBlock(outputBlock).defaultBlockState());
            }
        );
    }

    blockGen('iron_ore', 'iron_block', 'tfmg:concentrated_sulfuric_acid')
})
*/