let globalTickCounter = 0

ServerEvents.tick(event => {
    globalTickCounter = (globalTickCounter + 1) % 120
})

const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
const Direction = Java.loadClass('net.minecraft.core.Direction')

MBDMachineEvents.onTick('cwi:stirling_engine', event => {

    if (globalTickCounter % 20 !== 0) return

    const machine = event.getEvent().getMachine()
    const level = machine.getLevel()
    const pos = machine.getPos()
    
    const isValid = level.getBlock(pos.offset(0, -1, 0)).hasTag('cwi:fluid_container')

    if (isValid) {
        level.playSound( null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 'create:steam', 'blocks', 0.4, 1 )
        
        let facing = Direction.NORTH
        const f = machine.getFrontFacing()
        if (f.isPresent()) {
            const d = f.get()
            if (d.getAxis().isHorizontal()) facing = d
        }

        let x1, z1, x2, z2, x3, z3, x4, z4
        const yBase = pos.y + 0.6

        if (facing == Direction.NORTH) {
            x1 = pos.x - 0.1; z1 = pos.z + 0.4
            x2 = pos.x + 1.1; z2 = pos.z + 0.8
            x3 = pos.x - 0.1; z3 = pos.z + 0.8
            x4 = pos.x + 1.1; z4 = pos.z + 0.4
        } else if (facing == Direction.EAST) {
            x1 = pos.x + 0.2; z1 = pos.z - 0.1
            x2 = pos.x + 0.6; z2 = pos.z + 1.1
            x3 = pos.x + 0.6; z3 = pos.z - 0.1
            x4 = pos.x + 0.2; z4 = pos.z + 1.1
        } else if (facing == Direction.SOUTH) {
            x1 = pos.x - 0.1; z1 = pos.z + 0.2
            x2 = pos.x + 1.1; z2 = pos.z + 0.6
            x3 = pos.x - 0.1; z3 = pos.z + 0.6
            x4 = pos.x + 1.1; z4 = pos.z + 0.2
        } else if (facing == Direction.WEST) {
            x1 = pos.x + 0.4; z1 = pos.z - 0.1
            x2 = pos.x + 0.8; z2 = pos.z + 1.1
            x3 = pos.x + 0.8; z3 = pos.z - 0.1
            x4 = pos.x + 0.4; z4 = pos.z + 1.1
        }

        if (globalTickCounter % 40 !== 0) {
            level.spawnParticles( 'create_sa:steam_cloud', true, x1, yBase, z1, 0, 0, 0, 0, 0)
            level.spawnParticles( 'create_sa:steam_cloud', true, x2, yBase, z2, 0, 0, 0, 0, 0)
        } else {
            level.spawnParticles( 'create_sa:steam_cloud', true, x3, yBase, z3, 0, 0, 0, 0, 0)
            level.spawnParticles( 'create_sa:steam_cloud', true, x4, yBase, z4, 0, 0, 0, 0, 0)
        }
    }

    const partmachine = $IMachine.ofMachine(level, pos).orElse(null)
    if (!partmachine) return

    const holder = partmachine.machineHolder
    if (!holder) return

    const prevValid = machine.customData.getBoolean('stirling_valid')
    if (prevValid == isValid) return

    if (isValid) holder.scheduleWorkingRPM(128, false)
    else holder.stopWorking()

    machine.recipeLogic.setWorkingEnabled(isValid)
    machine.customData.putBoolean('stirling_valid', isValid)
})