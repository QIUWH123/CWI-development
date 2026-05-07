MBDMachineEvents.onTick('modpack:mixing_vessel', event => {
    const machine = event.getEvent().getMachine()
    const isValid = machine.getLevel()
        .getBlock(machine.getPos().offset(0, -1, 0))
        .hasTag('kubejs:mixing_vessel')
    if (machine.recipeLogic && machine.recipeLogic.setWorkingEnabled) {
        machine.recipeLogic.setWorkingEnabled(isValid)
    }
    machine.getCustomData().putBoolean('hasValidFloor', isValid)
})