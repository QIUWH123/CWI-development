(() => {
    const MACHINE_ID = 'modpack:mixing_vessel';
    const REQUIRED_TAG = 'kubejs:mixing_vessel';
    function checkFloor(machine) {
        return machine.getLevel()
            .getBlock(machine.getPos().offset(0, -1, 0))
            .hasTag(REQUIRED_TAG);
    }
    function updateMachineState(machine) {
        const isValid = checkFloor(machine);
        if (machine.recipeLogic && machine.recipeLogic.setWorkingEnabled) {
            machine.recipeLogic.setWorkingEnabled(isValid);
        }
        machine.getCustomData().putBoolean('hasValidFloor', isValid);
    }
    MBDMachineEvents.onPlaced(MACHINE_ID, event => {
        const machine = event.getEvent().getMachine();
        updateMachineState(machine);
    });
    const lastFloorState = new Map();
    MBDMachineEvents.onTick(MACHINE_ID, event => {
        const machine = event.getEvent().getMachine();
        const isValid = checkFloor(machine);
        const posKey = machine.getPos().asLong();
        if (lastFloorState.get(posKey) !== isValid) {
            lastFloorState.set(posKey, isValid);
            machine.getCustomData().putBoolean('hasValidFloor', isValid);
            if (machine.recipeLogic && machine.recipeLogic.setWorkingEnabled) {
                machine.recipeLogic.setWorkingEnabled(isValid);
            }
        }
    });
})();