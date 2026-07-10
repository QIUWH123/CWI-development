const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')
const $BlazeBurnerBlock = Java.loadClass('com.simibubi.create.content.processing.burner.BlazeBurnerBlock')

const directionOffsets = {}
directionOffsets[Direction.NORTH] = [-0.1, 0.4, 1.1, 0.8, -0.1, 0.8, 1.1, 0.4]
directionOffsets[Direction.EAST]  = [0.6, -0.1, 0.2, 1.1, 0.2, -0.1, 0.6, 1.1]
directionOffsets[Direction.SOUTH] = [-0.1, 0.2, 1.1, 0.6, -0.1, 0.6, 1.1, 0.2]
directionOffsets[Direction.WEST]  = [0.8, -0.1, 0.4, 1.1, 0.4, -0.1, 0.8, 1.1]

function updateMachine(machine) {
    const level = machine.getLevel()
    const pos = machine.getPos()
    const blockBelowPos = pos.offset(0, -1, 0)
    const blockBelowState = level.getBlockState(blockBelowPos)
    let targetRPM = 0

    if (level.getBlock(blockBelowPos).hasTag('create:passive_boiler_heaters')) {
        targetRPM = 32
    }
    if (blockBelowState.hasProperty($BlazeBurnerBlock.HEAT_LEVEL)) {
        const heatName = blockBelowState.getValue($BlazeBurnerBlock.HEAT_LEVEL).name()
        if (heatName === 'KINDLED') targetRPM = 64
        else if (heatName === 'SEETHING') targetRPM = 128
    }

    const isWorking = targetRPM !== 0
    machine.recipeLogic.setWorkingEnabled(isWorking)

    const machineHolder = $IMachine.ofMachine(level, pos).orElse(null).machineHolder
    if (machine.customData.getInt('rpm') === targetRPM) return

    isWorking ? machineHolder.scheduleWorkingRPM(targetRPM, false) : machineHolder.stopWorking()

    machine.customData.putBoolean('work', isWorking)
    machine.customData.putInt('rpm', targetRPM)
}

MBDMachineEvents.onPlaced('cwi:stirling_engine', event => {
    const machine = event.getEvent().getMachine()
    machine.getLevel().getServer().scheduleInTicks(1, () => {
        updateMachine(machine)

        const pos = machine.getPos()
        const offsets = directionOffsets[machine.getFrontFacing().get()]
        const particleY = pos.y + 0.6
        const particleCoords = offsets.map((val, idx) => idx % 2 === 0 ? pos.x + val : pos.z + val)
        machine.customData.putString('pts', `${particleY},${particleCoords.join(',')}`)
    })
})

MBDMachineEvents.onNeighborChanged('cwi:stirling_engine', event => {
    updateMachine(event.getEvent().getMachine())
})

MBDMachineEvents.onTick('cwi:stirling_engine', event => {
    if (globalTickCounter % 20) return

    const machine = event.getEvent().getMachine()
    if (!machine.customData.getBoolean('work')) return

    const level = machine.getLevel()
    const pos = machine.getPos()
    level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 'create:steam', 'blocks', 0.4, 1)

    const particleData = machine.customData.getString('pts').split(',').map(Number)
    const [y, x1, z1, x2, z2, x3, z3, x4, z4] = particleData
    const useAlt = globalTickCounter % 40 !== 0

    level.spawnParticles('create_sa:steam_cloud', true, useAlt ? x1 : x3, y, useAlt ? z1 : z3, 0, 0, 0, 0, 0)
    level.spawnParticles('create_sa:steam_cloud', true, useAlt ? x2 : x4, y, useAlt ? z2 : z4, 0, 0, 0, 0, 0)
})