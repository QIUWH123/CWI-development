let itemFallList = {};
let fallItem = [
    {
        inputItem: "create:polished_rose_quartz",
        outputItem: 'kubejs:damaged_polished_rose_quartz',
        spaceBetween: 2,
        sound: "/playsound minecraft:block.amethyst_block.break block @a ~ ~ ~ 0.8 1.2",
        particle: "/particle minecraft:electric_spark ~ ~ ~ 0.2 0.2 0.2 0.1 4"
    },
    {
        inputItem: "create:precision_mechanism",
        outputItem: 'kubejs:damaged_precision_mechanism',
        spaceBetween: 3,
        sound: "/playsound minecraft:block.chain.break block @a ~ ~ ~ 0.6 1.2",
        particle: "/particle minecraft:ash ~ ~ ~ 0.3 0.3 0.3 0.02 12"
    },
    {
        inputItem: "naturescompass:naturescompass",
        outputItem: 'kubejs:damaged_natures_compass',
        spaceBetween: 3,
        sound: "/playsound minecraft:block.glass.break block @a ~ ~ ~ 0.4 1.8",
        particle: "/particle minecraft:electric_spark ~ ~ ~ 0.2 0.2 0.2 0.1 4"
    },
    {
        inputItem: "create_connected:control_chip",
        outputItem: 'kubejs:damaged_control_chip',
        spaceBetween: 2,
        sound: "/playsound minecraft:block.comparator.click block @a ~ ~ ~ 0.5 1.5",
        particle: "/particle minecraft:electric_spark ~ ~ ~ 0.2 0.2 0.2 0.1 4"
    },
    {
        inputItem: "create:electron_tube",
        outputItem: 'kubejs:damaged_electron_tube',
        spaceBetween: 2,
        sound: "/playsound minecraft:block.glass.break block @a ~ ~ ~ 0.4 1.8",
        particle: "/particle minecraft:electric_spark ~ ~ ~ 0.2 0.2 0.2 0.1 4"
    },
    {
        inputItem: "kubejs:ash",
        outputItem: '',
        spaceBetween: 2,
        sound: "/playsound block.sand.place block @a ~ ~ ~ 2 2",
        particle: "/particle minecraft:falling_dust minecraft:gravel ~ ~ ~ 0.6 0.4 0.6 0.03 16"
    },
    {
        inputItem: "kubejs:dark_ash",
        outputItem: '',
        spaceBetween: 2,
        sound: "/playsound block.sand.place block @a ~ ~ ~ 2 2",
        particle: "/particle minecraft:falling_dust minecraft:deepslate ~ ~ ~ 0.6 0.4 0.6 0.03 16"
    }
];

EntityEvents.spawned("item", event => {
    let itemEntity = event.getEntity();
    fallItem.forEach(value => {
        if (itemEntity.getItem().getId() != value.inputItem) return;
        itemEntity.pickUpDelay = 32767;
        let count = itemEntity.getNbt().get("Item").getInt("Count");
        itemFallList[itemEntity.getUuid()] = {
            y: itemEntity.getY(),
            output: value.outputItem,
            count: count,
            spaceBetween: value.spaceBetween,
            sound: value.sound || null,
            particle: value.particle || null
        };
    });
});

LevelEvents.tick(event => {
    if (event.server.tickCount % 5 != 0) return;
    event.getLevel().getEntities().forEach(entity => {
        if (entity.type != "minecraft:item") return;
        let uuid = entity.getUuid();
        let fallValue = itemFallList[uuid];
        if (!fallValue) return;
        if (entity.onGround()) {
            if (fallValue.y - entity.getY() >= fallValue.spaceBetween) {
                entity.setItem(Item.of(fallValue.output, fallValue.count));
                if (fallValue.sound && typeof fallValue.sound === "string") {
                    let cmd = fallValue.sound.startsWith("/") ? fallValue.sound.substring(1) : fallValue.sound;
                    event.server.runCommandSilent(`/execute positioned ${entity.x} ${entity.y} ${entity.z} run ${cmd}`);
                }
                if (fallValue.particle && typeof fallValue.particle === "string") {
                    let cmd = fallValue.particle.startsWith("/") ? fallValue.particle.substring(1) : fallValue.particle;
                    event.server.runCommandSilent(`/execute positioned ${entity.x} ${entity.y + 0.2} ${entity.z} run ${cmd}`);
                }
            }
            entity.pickUpDelay = 20;
            delete itemFallList[uuid];
        }
    });
});