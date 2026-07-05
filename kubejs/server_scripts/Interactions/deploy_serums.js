ItemEvents.entityInteracted('biomancy:injector', e => {
    let {item, player, level, target} = e
    let serum = item.nbt.inventory.Item
    let fac = player.facing
    //checks block above deployer
    let BLOCK = player.block.offset('up', 1).offset(fac, -2)
    if(!player.isFake) return
    //this next block of code lets the deployer fill the bioinjector if it is empty, the block above deployer is a chute/hopper, and has a serum in  it
    //item.nbt.merge({inventory:{}})
    if(!serum || !item.nbt.inventory) {
        if(BLOCK.id == 'create:chute' || BLOCK.id == 'create:smart_chute' || BLOCK.id ==  'minecraft:hopper') {
            BLOCK.getInventory().allItems.forEach(item => {
                if(!item.id.match(/^.*serum$|^bio.*cure$|^bio.*stimulant$|^bio.*boost$/)) return
                let Pot = item.getNbt()
                BLOCK.getInventory().extractItem(1, 1, false)
                if(!Pot){
                    e.item.nbt.merge({inventory:{Item:{Count:1,id:item.id},ItemAmount:1}})
                } else {
                    e.item.nbt.merge({inventory:{Item:{Count:1,id:item.id,tag:Pot},ItemAmount:1}})
                }
            })
        }
    //if the bioinjector has 1 to 15 serums in it, check the block above for a matching serum
    } else if(serum.Count >= 0) {
        //let SerumEffect = SERUM_EFFECTS[serum.id]
        let plus1 = (serum.Count + 1)
        if(BLOCK.id == 'create:chute' || BLOCK.id == 'create:smart_chute' || BLOCK.id ==  'minecraft:hopper') {
            BLOCK.getInventory().allItems.forEach(item => {
                if(item.id == serum.id && serum.Count < 16) {
                    let Pot = item.getNbt()
                    BLOCK.getInventory().extractItem(BLOCK.getInventory().find(serum.id), 1, false)
                    if(!Pot){
                        e.item.nbt.merge({inventory:{Item:{Count:plus1,id:item.id},ItemAmount:plus1}})
                    } else {
                        e.item.nbt.merge({inventory:{Item:{Count:plus1,id:item.id,tag:Pot},ItemAmount:plus1}})
                    }
                }
            })
        }
        //trigger bioinjector
        Java.loadClass('com.github.elenterius.biomancy.item.injector.InjectorItem').tryInjectLivingEntity(level, target.block.pos, item)
    }
})