Ponder.registry(event => {
    const glassSceneBuilder = Java.loadClass('com.simibubi.create.foundation.ponder.CreateSceneBuilder')
    const glassDirection = Java.loadClass('net.minecraft.core.Direction')
    const glassBasinEntity = Java.loadClass('com.simibubi.create.content.processing.basin.BasinBlockEntity')
    const glassMixerEntity = Java.loadClass('com.simibubi.create.content.kinetics.mixer.MechanicalMixerBlockEntity')
    const glassChuteEntity = Java.loadClass('com.simibubi.create.content.logistics.chute.SmartChuteBlockEntity')

// Scripted Inventories Show Working Stock And Backpressure Without Claiming A Live Production Test
    const basinSnapshot = (scene, util, sand, batches, returned) => {
        scene.world.modifyBlockEntityNBT(util.select.position(2, 2, 2), glassBasinEntity, nbt => {
            nbt.put('InputItems', NBT.toTag({ Size: 9, Items: sand > 0 ? [{ Slot: 0, id: 'minecraft:sand', Count: sand }] : [] }))
            nbt.put('OutputItems', NBT.toTag({ Size: 9, Items: returned ? [
                { Slot: 0, id: 'kubejs:glass_batch', Count: batches },
                { Slot: 1, id: 'kubejs:soda_powder', Count: 1 },
                { Slot: 2, id: 'kubejs:limestone_powder', Count: 1 }
            ] : [
                { Slot: 1, id: 'kubejs:soda_powder', Count: 1 },
                { Slot: 2, id: 'kubejs:limestone_powder', Count: 1 }
            ] }))
        })
    }

    const explain = (scene, util, text, position, duration) => {
        scene.overlay.showText(duration).text(text).pointAt(util.vector.centerOf(position[0], position[1], position[2])).placeNearTarget().attachKeyFrame()
    }

    const pauseOutlet = (scene, util, paused) => {
        scene.world.modifyBlock(util.grid.at(2, 1, 2), state => state.with('powered', String(paused)), false)
    }

    event.create(['kubejs:glass_batch', 'create:smart_chute']).scene('cwi:glass_working_stock', 'Keep Glass Working Stock In Circulation', 'cwi:glass_batching', (baseScene, util) => {
        const scene = new glassSceneBuilder(baseScene)
        scene.configureBasePlate(0, 0, 5)
        scene.scaleSceneView(0.85)
        scene.showBasePlate()
        scene.world.showSection(util.select.layersFrom(1), glassDirection.DOWN)
        scene.world.setKineticSpeed(util.select.position(2, 4, 3), 32)
        scene.world.setKineticSpeed(util.select.position(2, 5, 3), 32)
        scene.world.setKineticSpeed(util.select.position(2, 4, 2), -32)
        scene.world.setFilterData(util.select.position(2, 2, 2), glassBasinEntity, Item.of('kubejs:glass_batch'))
        scene.world.setFilterData(util.select.position(2, 1, 2), glassChuteEntity, Item.of('kubejs:glass_batch'))
        scene.idle(20)

        explain(scene, util, 'This batching module uses a Smart Chute, available in the Precision Age. The upper chest supplies sand; connect your drive to the shaft.', [1, 3, 2], 120)
        scene.idle(130)
        basinSnapshot(scene, util, 6, 0, false)
        scene.overlay.showControls(util.vector.topOf(2, 2, 2), PonderPointing.DOWN, 80).withItem(Item.of('kubejs:soda_powder'))
        explain(scene, util, 'Keep soda and limestone as working stock inside the basin. Set the basin recipe filter to glass batch.', [2, 2, 2], 110)
        scene.idle(120)

        pauseOutlet(scene, util, true)
        scene.world.modifyBlockEntity(util.grid.at(2, 4, 2), glassMixerEntity, mixer => mixer.startProcessingBasin())
        scene.idle(130)
        basinSnapshot(scene, util, 4, 1, true)
        explain(scene, util, 'After mixing, both working powders return. An unfiltered outlet would remove them along with the product.', [2, 2, 2], 110)
        scene.idle(120)

        scene.overlay.showFilterSlotInput(util.vector.centerOf(2, 1, 2), 80)
        scene.overlay.showControls(util.vector.centerOf(2, 1, 2), PonderPointing.RIGHT, 80).rightClick().withItem(Item.of('kubejs:glass_batch'))
        explain(scene, util, 'The chute extracts only glass batch. The returned powders stay available to the mixer for the next batch.', [2, 1, 2], 120)
        pauseOutlet(scene, util, false)
        scene.idle(130)
        basinSnapshot(scene, util, 0, 0, false)
        scene.overlay.showControls(util.vector.centerOf(2, 1, 2), PonderPointing.RIGHT, 100).withItem(Item.of('kubejs:glass_batch', 3))
        explain(scene, util, 'These three batches used the same working powders. Add more sand rather than replacing the carbonate stock.', [2, 1, 2], 100)
        scene.idle(110)

        pauseOutlet(scene, util, true)
        scene.world.modifyBlockEntity(util.grid.at(2, 1, 2), glassChuteEntity, chute => chute.setItem(Item.of('kubejs:glass_batch', 64), 0.5))
        basinSnapshot(scene, util, 0, 8, true)
        explain(scene, util, 'Pausing the chute lets glass batch accumulate in the chute and basin. Resume extraction to make room for more production.', [2, 1, 2], 120)
        scene.idle(130)
        scene.world.setKineticSpeed(util.select.everywhere(), 0)
        scene.idle(30)
        scene.world.modifyBlockEntity(util.grid.at(2, 1, 2), glassChuteEntity, chute => chute.setItem(Item.of('minecraft:air'), 0.5))
        pauseOutlet(scene, util, false)
        scene.world.setKineticSpeed(util.select.position(2, 4, 3), 32)
        scene.world.setKineticSpeed(util.select.position(2, 5, 3), 32)
        scene.world.setKineticSpeed(util.select.position(2, 4, 2), -32)
        basinSnapshot(scene, util, 4, 0, false)
        scene.world.modifyBlockEntity(util.grid.at(2, 4, 2), glassMixerEntity, mixer => mixer.startProcessingBasin())
        explain(scene, util, 'Restart with the working powders still present. Firing, pressing, quenching, and reject recovery belong downstream of this module.', [2, 2, 2], 120)
        scene.idle(130)
        scene.markAsFinished()
    })
})
