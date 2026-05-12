const $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem");
const $Properties = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour$Properties");
const $IProperties = Java.loadClass("net.minecraft.world.item.Item$Properties");
const $BrushableBlock = Java.loadClass("net.minecraft.world.level.block.BrushableBlock");
const $ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries");

const suspiciousBlocks = [
    {
        block_name: "kubejs:suspicious_depleted_dirt",
        turns_into: "kubejs:depleted_dirt",
        brushing_sound: SoundType.SUSPICIOUS_GRAVEL.getStepSound(),
        brushingFinishedSound: SoundType.ANVIL.getHitSound()
    }
];

suspiciousBlocks.forEach((susBlock) => {
    StartupEvents.registry("block", (event) => {
        event.createCustom(susBlock.block_name, () => {
            let turnIntoBlock = $BuiltInRegistries.BLOCK.get(new $ResourceLocation(susBlock.turns_into));
            return new $BrushableBlock(
                turnIntoBlock,
                $Properties.copy(Blocks.SUSPICIOUS_SAND),
                susBlock.brushing_sound,
                susBlock.brushingFinishedSound
            );
        });
    });

    StartupEvents.registry("item", (event) => {
        event.createCustom(susBlock.block_name, () => {
            let resource = new $ResourceLocation(susBlock.block_name);
            let block = $BuiltInRegistries.BLOCK.get(resource);
            return new $BlockItem(block, new $IProperties());
        });
    });
});