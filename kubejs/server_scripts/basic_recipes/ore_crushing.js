ServerEvents.recipes(event => {

//oreCrushing

  event.recipes.create.crushing(['2x kubejs:halite', Item.of('kubejs:halite').withChance(0.75)], 'kubejs:halite_ore')
  event.recipes.create.crushing(['2x kubejs:azurite', Item.of('kubejs:azurite').withChance(0.75)], 'create:asurine')
  event.recipes.create.crushing(['2x kubejs:petzite', Item.of('kubejs:petzite').withChance(0.75)], 'create:ochrum')
  event.recipes.create.crushing(['2x kubejs:hematite', Item.of('kubejs:hematite').withChance(0.75)], 'create:crimsite')
  event.recipes.create.crushing(['2x kubejs:malachite', Item.of('kubejs:malachite').withChance(0.75)], 'create:veridium')
  event.recipes.create.crushing(['2x kubejs:bauxite', Item.of('kubejs:bauxite').withChance(0.75)], 'tfmg:bauxite')
  event.recipes.create.crushing(['2x kubejs:lignite', Item.of('kubejs:lignite').withChance(0.75)], 'tfmg:lignite')
  event.recipes.create.crushing(['2x kubejs:galena', Item.of('kubejs:galena').withChance(0.75)], 'tfmg:galena')
  event.recipes.create.crushing(['2x kubejs:cassiterite', Item.of('kubejs:cassiterite').withChance(0.75)], 'kubejs:cassiterite_ore')
  event.recipes.create.crushing(['2x kubejs:magnetite', Item.of('kubejs:magnetite').withChance(0.75)], 'kubejs:magnetite_ore')
  event.recipes.create.crushing(['2x kubejs:chalcocite', Item.of('kubejs:chalcocite').withChance(0.75)], 'kubejs:chalcocite_ore')
  event.recipes.create.crushing(['2x kubejs:chromite', Item.of('kubejs:chromite').withChance(0.75)], 'kubejs:chromite_ore')
  event.recipes.create.crushing(['2x kubejs:cooperite', Item.of('kubejs:cooperite').withChance(0.75)], 'kubejs:cooperite_ore')
  event.recipes.create.crushing(['2x kubejs:magnesite', Item.of('kubejs:magnesite').withChance(0.75)], 'kubejs:magnesite_ore')
  event.recipes.create.crushing(['2x kubejs:pentlandite', Item.of('kubejs:pentlandite').withChance(0.75)], 'kubejs:pentlandite_ore')
  event.recipes.create.crushing(['2x kubejs:sphalerite', Item.of('kubejs:sphalerite').withChance(0.75)], 'kubejs:sphalerite_ore')
  event.recipes.create.crushing(['2x kubejs:uraninite', Item.of('kubejs:uraninite').withChance(0.75)], 'kubejs:uraninite_ore')
  event.recipes.create.crushing(['2x kubejs:rutile', Item.of('kubejs:rutile').withChance(0.75)], 'kubejs:rutile_ore')
  
  const doubleOreEntries = [
    { shallow: 'minecraft:iron_ore', deep: 'minecraft:deepslate_iron_ore', output: 'create:crushed_raw_iron' },
    { shallow: 'minecraft:coal_ore', deep: 'minecraft:deepslate_coal_ore', output: 'minecraft:coal' },
    { shallow: 'minecraft:copper_ore', deep: 'minecraft:deepslate_copper_ore', output: 'create:crushed_raw_copper' },
    { shallow: 'minecraft:redstone_ore', deep: 'minecraft:deepslate_redstone_ore', output: 'minecraft:redstone' },
    { shallow: 'minecraft:lapis_ore', deep: 'minecraft:deepslate_lapis_ore', output: 'kubejs:lapis_dust' },
    { shallow: 'kubejs:quartz_ore', deep: 'kubejs:deepslate_quartz_ore', output: 'kubejs:quartz_dust' },
    { shallow: 'kubejs:fluorite_ore', deep: 'kubejs:deepslate_fluorite_ore', output: 'kubejs:fluorite_dust' },
    { shallow: 'kubejs:sulfur_ore', deep: 'kubejs:deepslate_sulfur_ore', output: 'tfmg:sulfur_dust' }
  ];

  const singleOreEntries = [
    { shallow: 'minecraft:gold_ore', deep: 'minecraft:deepslate_gold_ore', output: 'create:crushed_raw_gold' },
    { shallow: 'create:zinc_ore', deep: 'create:deepslate_zinc_ore', output: 'create:crushed_raw_zinc' },
    { shallow: 'minecraft:diamond_ore', deep: 'minecraft:deepslate_diamond_ore', output: 'minecraft:diamond' },
    { shallow: 'minecraft:emerald_ore', deep: 'minecraft:deepslate_emerald_ore', output: 'minecraft:emerald' },
    { shallow: 'tfmg:nickel_ore', deep: 'tfmg:deepslate_nickel_ore', output: 'create:crushed_raw_nickel' },
    { shallow: 'tfmg:lead_ore', deep: 'tfmg:deepslate_lead_ore', output: 'create:crushed_raw_lead' },
    { shallow: 'tfmg:lithium_ore', deep: 'tfmg:deepslate_lithium_ore', output: 'tfmg:crushed_raw_lithium' },
    { shallow: 'kubejs:tin_ore', deep: 'kubejs:deepslate_tin_ore', output: 'kubejs:crushed_raw_tin' },
    { shallow: 'kubejs:cobalt_ore', deep: 'kubejs:deepslate_cobalt_ore', output: 'kubejs:crushed_raw_cobalt' },
    { shallow: 'kubejs:silver_ore', deep: 'kubejs:deepslate_silver_ore', output: 'kubejs:crushed_raw_silver' }
  ];

  doubleOreEntries.forEach(entry => {
    const { shallow, deep, output } = entry;
    if (shallow) {
      event.recipes.create.crushing([
        `4x ${output}`,
        Item.of(`2x ${output}`).withChance(0.75)
      ], shallow);
    }
    if (deep) {
      event.recipes.create.crushing([
        `6x ${output}`,
        Item.of(`2x ${output}`).withChance(0.75)
      ], deep);
    }
  });

  singleOreEntries.forEach(entry => {
    const { shallow, deep, output } = entry;
    if (shallow) {
      event.recipes.create.crushing([
        `2x ${output}`,
        Item.of(output).withChance(0.75)
      ], shallow);
    }
    if (deep) {
      event.recipes.create.crushing([
        `3x ${output}`,
        Item.of(output).withChance(0.75)
      ], deep);
    }
  });
  
  event.recipes.create.crushing(['kubejs:crushed_raw_silver', Item.of('kubejs:crushed_raw_silver').withChance(0.75)], 'kubejs:raw_silver')
  event.recipes.create.crushing(['kubejs:crushed_raw_tin', Item.of('kubejs:crushed_raw_tin').withChance(0.75)], 'kubejs:raw_tin')
  event.recipes.create.crushing(['kubejs:crushed_raw_cobalt', Item.of('kubejs:crushed_raw_cobalt').withChance(0.75)], 'kubejs:raw_cobalt')
  event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.75)], 'create:raw_zinc')
  event.recipes.create.crushing(['create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.75)], 'tfmg:raw_lead')
  event.recipes.create.crushing(['create:crushed_raw_nickel', Item.of('create:crushed_raw_nickel').withChance(0.75)], 'tfmg:raw_nickel')
  event.recipes.create.crushing(['tfmg:crushed_raw_lithium', Item.of('tfmg:crushed_raw_lithium').withChance(0.75)], 'tfmg:raw_lithium')
  event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.75)], 'minecraft:raw_iron')
  event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.75)], 'minecraft:raw_copper')
  event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.75)], 'minecraft:raw_gold')

//dusts

//ores

  event.recipes.create.milling('tfmg:sulfur_dust', 'kubejs:sulfur')
  event.recipes.create.milling('minecraft:redstone', 'kubejs:redstone')
  event.recipes.create.milling('kubejs:lapis_dust', 'minecraft:lapis_lazuli')
  event.recipes.create.milling('kubejs:coal_dust', 'minecraft:coal')
  event.recipes.create.milling('kubejs:charcoal_dust', 'minecraft:charcoal')
  event.recipes.create.milling('kubejs:flint_dust', 'minecraft:flint')
  event.recipes.create.milling('kubejs:quartz_dust', 'minecraft:quartz')
  event.recipes.create.milling('kubejs:fluorite_dust', 'kubejs:fluorite')
  event.recipes.create.milling('tfmg:bauxite_powder', 'kubejs:bauxite')
  event.recipes.create.milling('kubejs:magnesite_dust', 'kubejs:magnesite')
  event.recipes.create.milling('kubejs:halite_dust', 'kubejs:halite')

  event.recipes.create.milling('kubejs:magnesium_dust', 'kubejs:magnesium_ingot')
  event.recipes.create.milling('kubejs:silicon_dust', 'tfmg:silicon_ingot')
  event.recipes.create.milling('kubejs:copper_dust', 'minecraft:copper_ingot')
  event.recipes.create.milling('kubejs:iron_dust', 'minecraft:iron_ingot')
  event.recipes.create.milling('kubejs:gold_dust', 'minecraft:gold_ingot')
  event.recipes.create.milling('kubejs:brass_dust', 'create:brass_ingot')
  event.recipes.create.milling('kubejs:andesite_alloy_dust', 'create:andesite_alloy')
  event.recipes.create.milling('kubejs:zinc_dust', 'create:zinc_ingot')
  event.recipes.create.milling('kubejs:industrial_iron_dust', 'createdeco:industrial_iron_ingot')
  event.recipes.create.milling('kubejs:lead_dust', 'tfmg:lead_ingot')
  event.recipes.create.milling('kubejs:nickel_dust', 'tfmg:nickel_ingot')
  event.recipes.create.milling('kubejs:lithium_dust', 'tfmg:lithium_ingot')
  event.recipes.create.milling('kubejs:aluminum_dust', 'tfmg:aluminum_ingot')
  event.recipes.create.milling('kubejs:steel_dust', 'tfmg:steel_ingot')
  event.recipes.create.milling('kubejs:cast_iron_dust', 'tfmg:cast_iron_ingot')
  event.recipes.create.milling('kubejs:silver_dust', 'kubejs:silver_ingot')
  event.recipes.create.milling('kubejs:bronze_dust', 'kubejs:bronze_ingot')
  event.recipes.create.milling('kubejs:tin_dust', 'kubejs:tin_ingot')
  event.recipes.create.milling('kubejs:cobalt_dust', 'kubejs:cobalt_ingot')

//delete

  event.remove({ id: 'minecraft:gold_ingot_from_smelting_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore' })
  event.remove({ id: 'minecraft:coal_from_smelting_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_blasting_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_smelting_deepslate_coal_ore' })
  event.remove({ id: 'minecraft:coal_from_blasting_deepslate_coal_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_blasting_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore' })
  event.remove({ id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore' })
  event.remove({ id: 'minecraft:redstone_from_smelting_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_blasting_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore' })
  event.remove({ id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore' })
  event.remove({ id: 'minecraft:emerald_from_smelting_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_blasting_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_smelting_deepslate_emerald_ore' })
  event.remove({ id: 'minecraft:emerald_from_blasting_deepslate_emerald_ore' })
  event.remove({ id: 'minecraft:diamond_from_smelting_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_smelting_deepslate_diamond_ore' })
  event.remove({ id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore' })
  event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore' })
  event.remove({ id: 'minecraft:quartz_from_blasting' })
  event.remove({ id: 'minecraft:quartz' })

  event.remove({ id: 'create:crushing/veridium_recycling' })
  event.remove({ id: 'create:crushing/veridium' })
  event.remove({ id: 'create:crushing/ochrum_recycling' })
  event.remove({ id: 'create:crushing/ochrum' })
  event.remove({ id: 'create:crushing/asurine_recycling' })
  event.remove({ id: 'create:crushing/asurine' })
  event.remove({ id: 'create:crushing/crimsite_recycling' })
  event.remove({ id: 'create:crushing/crimsite' })
  event.remove({ id: 'tfmg:crushing/bauxite' })
  event.remove({ id: 'tfmg:crushing/galena' })

  event.remove({ id: 'create:crushing/coal_ore' })
  event.remove({ id: 'create:crushing/deepslate_coal_ore' })
  event.remove({ id: 'create:crushing/iron_ore' })
  event.remove({ id: 'create:crushing/deepslate_iron_ore' })
  event.remove({ id: 'create:crushing/copper_ore' })
  event.remove({ id: 'create:crushing/deepslate_copper_ore' })
  event.remove({ id: 'create:crushing/gold_ore' })
  event.remove({ id: 'create:crushing/deepslate_gold_ore' })
  event.remove({ id: 'create:crushing/redstone_ore' })
  event.remove({ id: 'create:crushing/deepslate_redstone_ore' })
  event.remove({ id: 'create:crushing/emerald_ore' })
  event.remove({ id: 'create:crushing/deepslate_emerald_ore' })
  event.remove({ id: 'create:crushing/diamond_ore' })
  event.remove({ id: 'create:crushing/deepslate_diamond_ore' })
  event.remove({ id: 'create:crushing/lapis_ore' })
  event.remove({ id: 'create:crushing/deepslate_lapis_ore' })
  event.remove({ id: 'create:crushing/nether_gold_ore' })
  event.remove({ id: 'create:crushing/nether_quartz_ore' })
  event.remove({ id: 'create:crushing/zinc_ore' })
  event.remove({ id: 'create:crushing/deepslate_zinc_ore' })
  event.remove({ id: 'create:crushing/lead_ore' })
  event.remove({ id: 'create:crushing/nickel_ore' })
  event.remove({ id: 'tfmg:crushing/lithium_ore' })
  event.remove({ id: 'tfmg:crushing/deepslate_lithium_ore' })

  event.remove({ id: 'create:crushing/raw_iron_block' })
  event.remove({ id: 'create:crushing/raw_gold_block' })
  event.remove({ id: 'create:crushing/raw_copper_block' })
  event.remove({ id: 'create:crushing/raw_zinc_block' })
  event.remove({ id: 'create:crushing/raw_lead_block' })
  event.remove({ id: 'create:crushing/raw_nickel_block' })
  event.remove({ id: 'tfmg:crushing/raw_lithium_block' })

  event.remove({ id: 'create:crushing/raw_iron' })
  event.remove({ id: 'create:crushing/raw_gold' })
  event.remove({ id: 'create:crushing/raw_copper' })
  event.remove({ id: 'create:crushing/raw_zinc' })
  event.remove({ id: 'create:crushing/raw_lead' })
  event.remove({ id: 'create:crushing/raw_nickel' })
  event.remove({ id: 'tfmg:crushing/raw_lithium' })

  event.remove({ id: 'minecraft:iron_ingot_from_blasting_raw_iron' })
  event.remove({ id: 'minecraft:gold_ingot_from_blasting_raw_gold' })
  event.remove({ id: 'minecraft:copper_ingot_from_blasting_raw_copper' })
  event.remove({ id: 'minecraft:iron_ingot_from_smelting_raw_iron' })
  event.remove({ id: 'minecraft:gold_ingot_from_smelting_raw_gold' })
  event.remove({ id: 'minecraft:copper_ingot_from_smelting_raw_copper' })
  event.remove({ id: 'create:smelting/zinc_ingot_from_ore' })
  event.remove({ id: 'create:smelting/zinc_ingot_from_raw_ore' })
  event.remove({ id: 'create:blasting/zinc_ingot_from_ore' })
  event.remove({ id: 'create:blasting/zinc_ingot_from_raw_ore' })
  event.remove({ id: 'tfmg:smelting/lithium_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/lithium_ingot' })
  event.remove({ id: 'tfmg:smelting/nickel_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/nickel_ingot' })
  event.remove({ id: 'tfmg:smelting/lead_ingot_blasting' })
  event.remove({ id: 'tfmg:smelting/lead_ingot' })

})