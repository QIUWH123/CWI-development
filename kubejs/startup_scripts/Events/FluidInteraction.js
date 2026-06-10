ForgeEvents.onEvent('net.minecraftforge.event.level.BlockEvent$FluidPlaceBlockEvent', event => {
	const result = event.getNewState().getBlock();
	let block

	if (result == Blocks.COBBLESTONE) block = Blocks.CALCITE
	if (result == Blocks.STONE) block = Blocks.TUFF
	if (result == Blocks.BASALT) block = Blocks.DEEPSLATE
	if (result == Blocks.OBSIDIAN) block = Blocks.BEDROCK

	if (block) event.setNewState(block.defaultBlockState())
	//event.setNewState(event.getOriginalState())
})

ForgeEvents.onEvent('com.simibubi.create.api.event.PipeCollisionEvent$Spill', event => {
    const pipeFluid = Fluid.of(event.getPipeFluid());
    const worldFluid = Fluid.of(event.getWorldFluid());

    const pf = pipeFluid.getId();
    const wf = worldFluid.getId();

    if (
        (pf === 'minecraft:water' && wf === 'minecraft:lava') ||
        (pf === 'minecraft:lava' && wf === 'minecraft:water') ||
        (pf === 'minecraft:lava' && wf === 'minecraft:flowing_water') ||
        (pf === 'minecraft:water' && wf === 'minecraft:flowing_lava')
    ) {
        event.setState(null);
    }
});