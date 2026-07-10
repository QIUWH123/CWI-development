const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
const $BlazeBurnerBlock = Java.loadClass('com.simibubi.create.content.processing.burner.BlazeBurnerBlock')

MBDMachineEvents.onTick('cwi:stirling_engine', event => {

    if (globalTickCounter % 20 !== 0) return

    const machine = event.getEvent().getMachine()
    const level = machine.getLevel()
    const pos = machine.getPos()
    
    const blockBelow = level.getBlockState(pos.offset(0, -1, 0))
    let heatLevel = null
    let targetRPM = 0

    if (level.getBlock(pos.offset(0, -1, 0)).hasTag('create:passive_boiler_heaters')){
        targetRPM = 32
    }

    if (blockBelow.hasProperty($BlazeBurnerBlock.HEAT_LEVEL)) {
        heatLevel = blockBelow.getValue($BlazeBurnerBlock.HEAT_LEVEL)
        switch (heatLevel.name()) {
            case 'KINDLED':
                targetRPM = 64
                break
            case 'SEETHING':
                targetRPM = 128
                break
        }
    }

    const working = targetRPM !== 0

    if (working) {
        level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 'create:steam', 'blocks', 0.4, 1)
        
        let facing = machine.getFrontFacing().get()
        let x1, z1, x2, z2, x3, z3, x4, z4
        const yBase = pos.y + 0.6

        if (facing == Direction.NORTH) {
            x1 = pos.x - 0.1; z1 = pos.z + 0.4
            x2 = pos.x + 1.1; z2 = pos.z + 0.8
            x3 = pos.x - 0.1; z3 = pos.z + 0.8
            x4 = pos.x + 1.1; z4 = pos.z + 0.4
        } else if (facing == Direction.EAST) {
            x1 = pos.x + 0.6; z1 = pos.z - 0.1
            x2 = pos.x + 0.2; z2 = pos.z + 1.1
            x3 = pos.x + 0.2; z3 = pos.z - 0.1
            x4 = pos.x + 0.6; z4 = pos.z + 1.1
        } else if (facing == Direction.SOUTH) {
            x1 = pos.x - 0.1; z1 = pos.z + 0.2
            x2 = pos.x + 1.1; z2 = pos.z + 0.6
            x3 = pos.x - 0.1; z3 = pos.z + 0.6
            x4 = pos.x + 1.1; z4 = pos.z + 0.2
        } else if (facing == Direction.WEST) {
            x1 = pos.x + 0.8; z1 = pos.z - 0.1
            x2 = pos.x + 0.4; z2 = pos.z + 1.1
            x3 = pos.x + 0.4; z3 = pos.z - 0.1
            x4 = pos.x + 0.8; z4 = pos.z + 1.1
        }

        if (globalTickCounter % 40 !== 0) {
            level.spawnParticles('create_sa:steam_cloud', true, x1, yBase, z1, 0, 0, 0, 0, 0)
            level.spawnParticles('create_sa:steam_cloud', true, x2, yBase, z2, 0, 0, 0, 0, 0)
        } else {
            level.spawnParticles('create_sa:steam_cloud', true, x3, yBase, z3, 0, 0, 0, 0, 0)
            level.spawnParticles('create_sa:steam_cloud', true, x4, yBase, z4, 0, 0, 0, 0, 0)
        }
    }

    const partmachine = $IMachine.ofMachine(level, pos).orElse(null)
    if (!partmachine) return

    const holder = partmachine.machineHolder
    if (!holder) return

    const prevValid = machine.customData.getInt('stirling_rpm')
    if (prevValid == targetRPM) return

    if (working) {
        holder.scheduleWorkingRPM(targetRPM, false)
    } else {
        holder.stopWorking()
    }

    machine.recipeLogic.setWorkingEnabled(working)
    machine.customData.putInt('stirling_rpm', targetRPM)
})