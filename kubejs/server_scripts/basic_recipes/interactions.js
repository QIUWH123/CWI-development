let itemFallList = {};
let fallItem = [
    {
        inputItem: "create:polished_rose_quartz",
        outputItem: 'kubejs:damaged_polished_rose_quartz',
        spaceBetween: 2
    },
    {
        inputItem: "create:precision_mechanism",
        outputItem: 'kubejs:damaged_precision_mechanism',
        spaceBetween: 3
    },
    {
        inputItem: "naturescompass:naturescompass",
        outputItem: 'kubejs:damaged_natures_compass',
        spaceBetween: 3
    },
    {
        inputItem: "create_connected:control_chip",
        outputItem: 'kubejs:damaged_control_chip',
        spaceBetween: 2
    },
    {
        inputItem: "create:electron_tube",
        outputItem: 'kubejs:damaged_electron_tube',
        spaceBetween: 2
    }
];

EntityEvents.spawned("item", event => {
    let itemEntity = event.getEntity();
    fallItem.forEach(value => {
        if (itemEntity.getItem().getId() != value.inputItem) return;
        itemEntity.pickUpDelay = 32767;
        let count = itemEntity.getNbt().get("Item").getInt("Count")
        itemFallList[itemEntity.getUuid()] = {
            y: itemEntity.getY(),
            output: value.outputItem,
            count: count,
            spaceBetween: value.spaceBetween
        }
    })
})

LevelEvents.tick(event => {
    if (event.server.tickCount % 5 != 0) return
    event.getLevel().getEntities().forEach(entity => {
        if (entity.type != "minecraft:item") return
        for (let key in itemFallList) {
            let fallValue = itemFallList[key];
            if (entity.getUuid() == key) {
                if (entity.onGround()) {
                    if (fallValue.y - entity.getY() >= fallValue.spaceBetween) {
                        entity.setItem(Item.of(fallValue.output, fallValue.count))
                    }
                    entity.pickUpDelay = 20;
                    delete itemFallList[key]
                }
            }
        }
    })
})