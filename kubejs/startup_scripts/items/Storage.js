/*
StartupEvents.registry('item', event => {

  event.create('unfilled_antimatter_ball')
    .barWidth((i) => {
        if (i.nbt && i.nbt.contains('Antimatter') && i.nbt.getInt('Antimatter') != 0) {
            return ((i.nbt.getInt('Antimatter') + 8) / 100) * 13
        }
        return 0
    })
    .barColor((i) => Color.LIGHT_PURPLE)

  event.create('battery', "basic")
    .maxDamage(128)
    .unstackable()
    .attachCapability(
        CapabilityBuilder.ENERGY.customItemStack()
            .canReceive(i => true)
            .getEnergyStored(i => (128 - i.damageValue) * 1000)
            .getMaxEnergyStored(i => 128000)
            .receiveEnergy((itm, amount, sim) => {
                let energyPerDurability = 1000;
                let maxDurabilityToRestore = Math.floor(amount / energyPerDurability);
                let actualDurabilityToRestore = Math.min(maxDurabilityToRestore, itm.damageValue);
                if (actualDurabilityToRestore > 0 && !sim) {
                    itm.damageValue -= actualDurabilityToRestore;
                }
                return actualDurabilityToRestore * energyPerDurability;
            })
    )
    .createItemProperties().setNoRepair()

})
*/