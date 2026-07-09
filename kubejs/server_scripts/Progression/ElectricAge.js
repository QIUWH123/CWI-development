ServerEvents.recipes(event => {

    event.shaped(
        'create_new_age:electrical_connector',
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: 'kubejs:constantan_sheet',
            B: 'create_new_age:overcharged_diamond_wire',
            C: 'tfmg:heavy_plate',
            D: 'kubejs:constantan_rod',
            E: 'kubejs:steel_ring'
        }
    )

})