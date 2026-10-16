Ponder.registry(event => {
    const logisticsSceneBuilder = Java.loadClass('com.simibubi.create.foundation.ponder.CreateSceneBuilder')
    const logisticsDirection = Java.loadClass('net.minecraft.core.Direction')
    const logisticsFunnelEntity = Java.loadClass('com.simibubi.create.content.logistics.funnel.FunnelBlockEntity')
    const logisticsTunnelEntity = Java.loadClass('com.simibubi.create.content.logistics.tunnel.BrassTunnelBlockEntity')
    const logisticsSwitchEntity = Java.loadClass('com.simibubi.create.content.redstone.thresholdSwitch.ThresholdSwitchBlockEntity')
    const logisticsChestEntity = Java.loadClass('net.minecraft.world.level.block.entity.ChestBlockEntity')
    const logisticsBarrelEntity = Java.loadClass('net.minecraft.world.level.block.entity.BarrelBlockEntity')
    const logisticsFunnelBlock = Java.loadClass('com.simibubi.create.content.logistics.funnel.AbstractFunnelBlock')
    const logisticsRedstoneWire = Java.loadClass('net.minecraft.world.level.block.RedStoneWireBlock')

// These Scenes Use Scripted Stock And Signal Snapshots To Explain The Installed Create Controls
    const openScene = (baseScene, util, size) => {
        const scene = new logisticsSceneBuilder(baseScene)
        scene.configureBasePlate(0, 0, size)
        scene.scaleSceneView(size > 7 ? 0.75 : 0.9)
        scene.showBasePlate()
        scene.world().showSection(util.select().layersFrom(1), logisticsDirection.DOWN)
        scene.world().setKineticSpeed(util.select().everywhere(), -32)
        scene.idle(20)
        return scene
    }

    const explain = (scene, util, text, position, palette, duration) => {
        scene.overlay().showText(duration).text(text).pointAt(util.vector().centerOf(position[0], position[1], position[2])).placeNearTarget().colored(palette).attachKeyFrame()
    }

    const setFunnelPower = (scene, util, position, powered) => {
        scene.world().modifyBlock(util.grid().at(position[0], position[1], position[2]), state => state.setValue(logisticsFunnelBlock.POWERED, logisticsFunnelBlock.POWERED.getValue(String(powered)).get()), false)
    }

    const setBarrelStock = (scene, util, position, item, count) => {
        scene.world().modifyBlockEntity(util.grid().at(position[0], position[1], position[2]), logisticsBarrelEntity, barrel => {
            barrel.setItem(0, Item.of(item, Math.min(count, 64)))
            barrel.setItem(1, count > 64 ? Item.of(item, count - 64) : Item.of('minecraft:air'))
        })
    }

// Thresholds Are Item Counts, And The Switch Remembers Its Previous State Between The Two Limits
    const setWorkingStock = (scene, util, count, highState, inverted, wireX, funnelX) => {
        scene.world().modifyBlockEntity(util.grid().at(3, 1, 3), logisticsChestEntity, chest => {
            chest.setItem(0, Item.of('kubejs:glass_batch', Math.min(count, 64)))
            chest.setItem(1, count > 64 ? Item.of('kubejs:glass_batch', count - 64) : Item.of('minecraft:air'))
        })

        scene.world().modifyBlockEntityNBT(util.select().position(3, 1, 2), logisticsSwitchEntity, nbt => {
            nbt.putInt('OnAboveAmount', 64)
            nbt.putInt('OffBelowAmount', 16)
            nbt.putInt('CurrentAmount', count)
            nbt.putInt('CurrentMinAmount', 0)
            nbt.putInt('CurrentMaxAmount', 1728)
            nbt.putBoolean('InStacks', false)
            nbt.putBoolean('Inverted', inverted)
            nbt.putBoolean('Powered', highState)
            nbt.putBoolean('PoweredAfterDelay', highState !== inverted)
        })

        scene.world().modifyBlock(util.grid().at(wireX, 1, 2), state => state.setValue(logisticsRedstoneWire.POWER, logisticsRedstoneWire.POWER.getValue(highState !== inverted ? '15' : '0').get()), false)
        setFunnelPower(scene, util, [funnelX, 1, 3], highState !== inverted)
    }

    event.create(['create:brass_funnel', 'create:filter']).scene('cwi:logistics_filtering', 'Filtering A Mixed Line', 'cwi:logistics/filtering', (baseScene, util) => {
        const scene = openScene(baseScene, util, 7)
        scene.world().setFilterData(util.select().position(2, 2, 2), logisticsFunnelEntity, Item.of('minecraft:iron_ingot'))
        scene.world().setFilterData(util.select().position(4, 2, 2), logisticsFunnelEntity, Item.of('minecraft:copper_ingot'))
        scene.overlay().showFilterSlotInput(util.vector().topOf(2, 2, 2), 80)
        scene.overlay().showControls(util.vector().topOf(2, 2, 2), PonderPointing.DOWN, 80).rightClick().withItem(Item.of('minecraft:iron_ingot'))
        explain(scene, util, 'A brass funnel takes only the item in its filter.', [2, 2, 2], PonderPalette.INPUT, 80)
        scene.idle(90)

        scene.world().createItemOnBelt(util.grid().at(0, 1, 2), logisticsDirection.WEST, Item.of('minecraft:copper_ingot', 4))
        scene.idle(35)
        explain(scene, util, 'Copper passes the iron filter and continues to its own output.', [4, 2, 2], PonderPalette.GREEN, 80)
        scene.idle(90)

        scene.world().createItemOnBelt(util.grid().at(0, 1, 2), logisticsDirection.WEST, Item.of('minecraft:iron_ingot', 4))
        scene.idle(80)
        explain(scene, util, 'Filters choose material types. They do not reserve stock or balance demand.', [2, 2, 3], PonderPalette.WHITE, 90)
        scene.idle(100)
        scene.markAsFinished()
    })

    event.create('create:brass_tunnel').scene('cwi:logistics_sharing', 'Sharing With Brass Tunnels', 'cwi:logistics/sharing', (baseScene, util) => {
        const scene = openScene(baseScene, util, 7)
        const tunnels = util.select().fromTo(1, 2, 3, 3, 2, 3)
        scene.world().modifyBlockEntityNBT(tunnels, logisticsTunnelEntity, nbt => nbt.putInt('ScrollValue', 0))
        scene.overlay().showCenteredScrollInput(util.grid().at(2, 2, 3), logisticsDirection.UP, 80)
        explain(scene, util, 'Split divides a stack among available outputs. Here, 12 items can become 4 per lane.', [2, 2, 3], PonderPalette.GREEN, 90)
        scene.world().createItemOnBelt(util.grid().at(1, 1, 5), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 12))
        scene.idle(110)

        setFunnelPower(scene, util, [1, 2, 1], true)
        const blockedOutput = scene.world().createItemOnBelt(util.grid().at(1, 1, 2), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 64))
        scene.world().stallBeltItem(blockedOutput, true)
        explain(scene, util, 'If an output backs up, Split skips it. The remaining lanes receive more.', [1, 1, 2], PonderPalette.RED, 100)
        scene.world().createItemOnBelt(util.grid().at(1, 1, 5), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 12))
        scene.idle(110)

        scene.world().removeItemsFromBelt(util.grid().at(2, 1, 5))
        scene.world().removeItemsFromBelt(util.grid().at(3, 1, 5))
        scene.world().modifyBlockEntityNBT(tunnels, logisticsTunnelEntity, nbt => {
            nbt.putInt('ScrollValue', 3)
            nbt.putInt('PreviousIndex', 0)
        })
        explain(scene, util, 'Forced Round Robin sends whole stacks in turn. It waits when the next outlet is blocked.', [2, 2, 3], PonderPalette.INPUT, 100)
        scene.world().createItemOnBelt(util.grid().at(1, 1, 5), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 4))
        scene.idle(110)

        setFunnelPower(scene, util, [1, 2, 1], false)
        scene.world().stallBeltItem(blockedOutput, false)
        explain(scene, util, 'Clearing that lane lets the rotation continue. Use equal stack sizes when equal item shares matter.', [1, 2, 1], PonderPalette.GREEN, 110)
        scene.idle(120)
        scene.world().createItemOnBelt(util.grid().at(1, 1, 5), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 4))
        scene.idle(55)
        scene.world().createItemOnBelt(util.grid().at(1, 1, 5), logisticsDirection.SOUTH, Item.of('minecraft:iron_ingot', 4))
        scene.idle(80)
        scene.markAsFinished()
    })

    event.create(['create:stockpile_switch', 'create:brass_funnel']).scene('cwi:logistics_reserve_priority', 'Working Stock Before Surplus', 'cwi:logistics/reserve_priority', (baseScene, util) => {
        const scene = openScene(baseScene, util, 9)
        setWorkingStock(scene, util, 16, false, true, 4, 4)
        explain(scene, util, 'The lower hopper supplies the workshop. The side funnel exports surplus.', [3, 1, 3], PonderPalette.WHITE, 100)
        scene.idle(110)

        scene.overlay().showControls(util.vector().topOf(3, 1, 2), PonderPointing.DOWN, 100).rightClick()
        explain(scene, util, 'Set the switch to 16 and 64 items, then invert its output. Wire it to the surplus funnel.', [3, 1, 2], PonderPalette.INPUT, 110)
        scene.idle(120)
        setWorkingStock(scene, util, 40, false, true, 4, 4)
        explain(scene, util, 'While this stock rebuilds toward 64, redstone holds surplus export closed.', [4, 1, 3], PonderPalette.RED, 100)
        scene.idle(110)

        setWorkingStock(scene, util, 64, true, true, 4, 4)
        explain(scene, util, 'At 64 items, export opens. The workshop still has its own outlet.', [4, 1, 3], PonderPalette.GREEN, 100)
        scene.world().flapFunnel(util.grid().at(4, 1, 3), false)
        scene.world().createItemOnBelt(util.grid().at(4, 0, 3), logisticsDirection.WEST, Item.of('kubejs:glass_batch', 16))
        setWorkingStock(scene, util, 48, true, true, 4, 4)
        scene.idle(110)

        setWorkingStock(scene, util, 16, false, true, 4, 4)
        setBarrelStock(scene, util, [7, 1, 3], 'kubejs:glass_batch', 48)
        explain(scene, util, 'At 16, surplus closes again. The reserve is protected from export; workshop use can still consume it.', [3, 1, 3], PonderPalette.INPUT, 120)
        scene.idle(130)
        scene.markAsFinished()
    })

    event.create('create:stockpile_switch').scene('cwi:logistics_stockpile_hysteresis', 'Two Limits For Batch Supply', 'cwi:logistics/stockpile_hysteresis', (baseScene, util) => {
        const scene = openScene(baseScene, util, 7)
        setWorkingStock(scene, util, 16, false, false, 2, 2)
        explain(scene, util, 'Use a lower limit of 16 items and an upper limit of 64. Wire the normal output to the incoming funnel.', [3, 1, 2], PonderPalette.INPUT, 120)
        scene.idle(130)

        scene.world().createItemOnBelt(util.grid().at(0, 0, 3), logisticsDirection.WEST, Item.of('kubejs:glass_batch', 24))
        scene.idle(40)
        setWorkingStock(scene, util, 40, false, false, 2, 2)
        explain(scene, util, 'While filling, crossing 16 does not stop supply. The funnel remains open until 64.', [2, 1, 3], PonderPalette.GREEN, 110)
        scene.idle(120)

        scene.world().createItemOnBelt(util.grid().at(0, 0, 3), logisticsDirection.WEST, Item.of('kubejs:glass_batch', 24))
        scene.idle(40)
        setWorkingStock(scene, util, 64, true, false, 2, 2)
        explain(scene, util, 'At 64, the switch powers the funnel and pauses input.', [2, 1, 3], PonderPalette.RED, 90)
        scene.idle(100)

        setWorkingStock(scene, util, 40, true, false, 2, 2)
        setBarrelStock(scene, util, [3, 0, 4], 'kubejs:glass_batch', 24)
        explain(scene, util, 'The same stock of 40 now keeps input paused. Between the limits, the previous state is retained.', [3, 1, 3], PonderPalette.WHITE, 120)
        scene.idle(130)

        setWorkingStock(scene, util, 16, false, false, 2, 2)
        setBarrelStock(scene, util, [3, 0, 4], 'kubejs:glass_batch', 48)
        explain(scene, util, 'At 16, input restarts. This gap prevents a small withdrawal from repeatedly switching supply on and off.', [2, 1, 3], PonderPalette.GREEN, 120)
        scene.world().createItemOnBelt(util.grid().at(0, 0, 3), logisticsDirection.WEST, Item.of('kubejs:glass_batch', 16))
        scene.idle(130)
        scene.markAsFinished()
    })
})
