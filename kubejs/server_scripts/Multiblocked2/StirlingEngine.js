const $IMachine = Java.loadClass('com.lowdragmc.mbd2.api.machine.IMachine')

MBDMachineEvents.onTick('cwi:stirling_engine', event => {
    const machine = event.getEvent().getMachine()
    const level = machine.getLevel()
    const pos = machine.getPos()
    
    const isValid = level.getBlock(pos.offset(0, -1, 0)).hasTag('cwi:fluid_container')

    const partmachine = $IMachine.ofMachine(level, pos).orElse(null)
    if (partmachine) {
        const holder = partmachine.machineHolder
        if (holder) {
            holder.speed = isValid ? 256 : 0
        }
    }
})