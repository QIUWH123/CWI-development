ServerEvents.recipes(event => {

  event.shaped(
    Item.of('constructionwand:infinity_wand'),
    [
      ' DA',
      ' BD',
      'C  '
    ],
    {
      A: 'kubejs:integrated_electron_tube',
      B: 'create_sa:zinc_handle',
      C: 'create:polished_rose_quartz',
      D: 'create:mechanical_arm'
    }
  )

  event.shaped(
    Item.of('constructionwand:diamond_wand'),
    [
      ' DA',
      ' BD',
      'C  '
    ],
    {
      A: 'kubejs:andesite_bearing',
      B: 'create_sa:zinc_handle',
      C: 'create:andesite_alloy',
      D: 'kubejs:andesite_machine'
    }
  )

  event.shaped(
    Item.of('constructionwand:core_destruction'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:golden_sheet',
      B: 'create:iron_sheet',
      C: 'create:polished_rose_quartz'
    }
  )

  event.shaped(
    Item.of('constructionwand:core_angel'),
    [
      'BAB',
      'ACA',
      'BAB'
    ],
    {
      A: 'create:golden_sheet',
      B: 'create:iron_sheet',
      C: 'minecraft:emerald'
    }
  )

})