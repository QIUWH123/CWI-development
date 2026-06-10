StartupEvents.registry('mob_effect', event => {

    event.create('sand_erosion')
        .color(0x00FF00)
        .category('harmful')

    event.create('radiation_poisoning')
        .color(0x00FF00)
        .category('harmful')

    event.create('toxic_atmosphere')
        .color(0x8B4513)
        .category('harmful')

    event.create('abyssal_drain')
        .color(0x8B4513)
        .category('harmful')

    event.create('reach')
        .color(0x000000)
        .beneficial()
        .modifyAttribute('forge:block_reach', 'f88c30a3-5478-4000-a056-933f8d57fc99', 1, "addition")

})