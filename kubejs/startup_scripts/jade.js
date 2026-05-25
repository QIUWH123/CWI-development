const blockBanList = [
  'kubejs:steel_armor_safe',
  'kubejs:steel_armor_block',
  'kubejs:steel_armor_penetrated'
]

const $WailaClientRegistration = Java.loadClass("snownee.jade.impl.WailaClientRegistration");

StartupEvents.postInit((event) => {
  const banIngredient = Ingredient.of(blockBanList)

  $WailaClientRegistration.INSTANCE.addTooltipCollectedCallback(0, (tooltip, accessor) => {
    if (!accessor.hitResult) return
    let item = accessor.getPickedResult()
    if (banIngredient.test(item)) {
      tooltip["add(net.minecraft.network.chat.Component)"](Text.red("UNBREAKABLE").bold())
    }
  })
})