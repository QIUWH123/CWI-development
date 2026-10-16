JEIAddedEvents.registerRecipes(event => {
    const builder = event.custom(new ResourceLocation('kubejs', 'compound_minerals'))
    const processing = global.oreProcessing
    const furnaceMaterials = global.outPutMaterial.filter(([material, enabled]) => enabled).map(([material]) => material)
    const chanceNote = (route, chance) => ({ route: route, chance: chance })
    const yieldNote = route => ({ route: route, count: processing.powderCount, chance: processing.extraPowderChance })

// Merge Identical Products While Keeping Each Producing Route In Its Tooltip
    const addProduct = (products, item, note) => {
        let product = products.find(entry => entry.item === item)
        if (!product) {
            product = { item: item, notes: [] }
            products.push(product)
        }
        product.notes.push(note)
    }

    Object.values(global.compoundOreTypes).forEach(ore => {
        const map = global.productionMaps[ore.id]
        const byproducts = map ? map.by || [] : []
        const hostRocks = map ? map.hostRocks || [] : []
        const best = hostRocks.length > 0 ? hostRocks.reduce((previous, current) => current[1] > previous[1] ? current : previous) : null
        const materials = map ? [map.main].concat(byproducts.map(([material]) => material)) : []
        const specialHosts = ore.id === 'halite' ? [['kubejs:calcite_powder', 0.73], ['kubejs:shale_powder', 0.27]] : [['kubejs:claystone_powder', 0.63], ['kubejs:shale_powder', 0.37]]
        const data = {
            id: ore.id,
            block: `${ore.mod}:${ore.realId}`,
            deposit: `kubejs:${ore.id}_deposit`,
            forms: [],
            physical: [],
            chemical: [],
            finished: [],
            sulfur: !!(map && map.sulfur),
            acid: !!(map && map.leachable)
        }

        if (ore.process && map) {
            data.forms.push(
                { item: `kubejs:crushed_${ore.id}`, notes: [yieldNote('crushing')] },
                { item: `kubejs:${ore.id}_powder`, notes: [yieldNote('milling'), { key: 'milled_crushed' }, chanceNote('regrinding', processing.regrindingChance)] },
                { item: `kubejs:${ore.id}_tailings`, notes: [chanceNote('vibration', 1), chanceNote('centrifuging', 1)] },
                { item: `kubejs:stubborn_${ore.id}_tailings`, notes: [chanceNote('flotation', 1)] }
            )

            addProduct(data.physical, `kubejs:refined_${map.main}`, chanceNote('vibration', processing.vibratingChance))
            addProduct(data.physical, `kubejs:refined_${map.main}`, chanceNote('centrifuging', processing.centrifugingChance))
            addProduct(data.physical, `kubejs:refined_${map.main}`, chanceNote('flotation', processing.flotationChance))

            byproducts.forEach(([material, chance]) => {
                addProduct(data.physical, `kubejs:refined_${material}`, chanceNote('vibration', chance))
                addProduct(data.physical, `kubejs:refined_${material}`, chanceNote('centrifuging', chance * 1.4))
                addProduct(data.physical, `kubejs:refined_${material}`, chanceNote('flotation', chance))
            })

            if (map.sulfur) {
                addProduct(data.physical, 'kubejs:sulfur_powder', chanceNote('vibration', processing.vibratingChance))
                addProduct(data.physical, 'kubejs:sulfur_powder', chanceNote('centrifuging', processing.centrifugingChance))
            }

            hostRocks.forEach(([rock, chance]) => {
                addProduct(data.physical, global.stoneTypes[rock].items.powder, chanceNote('ore_preparation', chance))
            })

            if (best) {
                addProduct(data.physical, global.stoneTypes[best[0]].items.powder, chanceNote('vibration', best[1] * 0.9))
                addProduct(data.physical, global.stoneTypes[best[0]].items.powder, chanceNote('centrifuging', best[1] * 1.3))
            }

        // Only Show Leach Forms For Minerals With An Active Acid Route
            if (map.leachable) {
                data.forms.push(
                    { item: `kubejs:leach_${ore.id}_residue`, notes: [chanceNote('leaching_powder', 1), chanceNote('leaching_tailings', 1)] },
                    { fluid: `kubejs:leach_${ore.id}_solution`, amount: 100, notes: [{ route: 'leaching_powder', amount: 100 }, { route: 'leaching_tailings', amount: 80 }] },
                    { fluid: `kubejs:purified_${ore.id}_solution`, amount: 90, notes: [{ route: 'purification', amount: 90 }] }
                )

                addProduct(data.chemical, global.materialTypes[map.main].items.powder, chanceNote('acid_fan', 0.32))
                addProduct(data.chemical, global.materialTypes[map.main].items.powder, chanceNote('residue_washing', 0.63))
                addProduct(data.chemical, global.materialTypes[map.main].items.nugget, chanceNote('acid_fan', 0.10))
                addProduct(data.chemical, 'kubejs:silicate_residue', chanceNote('residue_washing', 0.37))
                addProduct(data.chemical, 'kubejs:washing_residue', chanceNote('residue_washing', 0.05))
                addProduct(data.chemical, 'kubejs:washing_residue', chanceNote('purification', 0.05))
                addProduct(data.chemical, `kubejs:${map.main}_crystal`, chanceNote('precipitation', 0.95))

                byproducts.forEach(([material, chance]) => {
                    addProduct(data.chemical, `kubejs:${material}_crystal`, chanceNote('precipitation', chance * 0.9))
                })
            }

        // Furnace Products Follow The Existing Conversion Flags, Including Byproducts
            materials.forEach(material => {
                const concentrate = data.physical.find(entry => entry.item === `kubejs:refined_${material}`)
                if (furnaceMaterials.indexOf(material) >= 0) {
                    addProduct(data.finished, global.materialTypes[material].items.ingot, { key: 'concentrate_furnace' })
                    if (map.leachable) {
                        addProduct(data.finished, global.materialTypes[material].items.ingot, { key: 'crystal_furnace' })
                    }
                } else {
                    concentrate.notes.push({ key: 'no_furnace' })
                }
            })
        } else if (ore.id === 'halite' || ore.id === 'lignite') {
            data.special = ore.id
            data.forms.push(
                { item: `kubejs:${ore.id}_item`, notes: [yieldNote('crushing')] },
                { item: `kubejs:${ore.id}_powder`, notes: [yieldNote('milling'), { key: 'milled_lump' }] }
            )

            specialHosts.forEach(([item, chance]) => addProduct(data.physical, item, chanceNote('ore_preparation', chance)))

            if (ore.id === 'halite') {
                data.chemical.push(
                    { fluid: 'kubejs:raw_brine', amount: 125, notes: [{ route: 'brine_mixing', amount: 125 }] },
                    { item: 'ratatouille:salt', notes: [{ route: 'brine_evaporation', count: 3 }, { route: 'brine_culture', count: 4 }] },
                    { item: 'biomancy:stone_powder', notes: [{ route: 'brine_evaporation', count: 1 }] },
                    { fluid: 'minecraft:water', amount: 500, notes: [{ route: 'brine_culture', amount: 500 }] },
                    { item: 'kubejs:vulcan_thermus', returned: true, notes: [{ key: 'returned_culture' }] }
                )
            } else {
                data.forms[0].notes.push({ key: 'lignite_fuel' })
                data.forms[1].notes.push({ key: 'lignite_powder' })
                data.finished.push(
                    { item: 'kubejs:bituminous_coal', notes: [{ route: 'coal_culture', count: 2, chance: 0.75 }] },
                    { item: 'kubejs:carbofusor_spirillum', returned: true, notes: [{ key: 'returned_culture' }] }
                )
            }
        } else {
        // Sulfur Forms Belong To Separate Sulfur Ores, This Block Has No Processing Recipe
            data.special = 'sulfur'
            data.forms.push(
                { item: 'kubejs:sulfur_item', notes: [{ key: 'separate_sulfur' }] },
                { item: 'kubejs:sulfur_powder', notes: [{ key: 'separate_sulfur' }] }
            )
            data.related = ['kubejs:sulfur_ore', 'kubejs:deepslate_sulfur_ore']
        }

        builder.add(data)
    })
})

JEIAddedEvents.registerCategories(event => {
    const { guiHelper } = event.data.jeiHelpers

    event.custom('kubejs:compound_minerals', category => {
        category.title(Component.translate('cwi.recipe.compound_minerals'))
        category.setWidth(178)
        category.setHeight(198)
        category.background(guiHelper.createBlankDrawable(0, 0))
        category.iconSupplier(() => guiHelper.createDrawableItemStack(Item.of('kubejs:cassiterite')))

        const addNotes = (slot, entry) => {
            slot.addRichTooltipCallback((view, tooltip) => {
                entry.notes.forEach(note => {
                    const route = note.route ? Component.translate(`cwi.jei.mineral.route.${note.route}`) : Component.literal('')
                    let text
                    if (note.key) {
                        text = Component.translate(`cwi.jei.mineral.${note.key}`)
                    } else if (note.count !== undefined && note.chance !== undefined) {
                        text = Component.translate('cwi.jei.mineral.yield', route, note.count, Math.round(note.chance * 100))
                    } else if (note.chance !== undefined) {
                        text = Component.translate('cwi.jei.mineral.chance', route, Number((Math.min(1, note.chance) * 100).toFixed(2)))
                    } else if (note.amount !== undefined) {
                        text = Component.translate('cwi.jei.mineral.fluid_yield', route, note.amount)
                    } else {
                        text = Component.translate('cwi.jei.mineral.item_yield', route, note.count)
                    }
                    tooltip.add(text.withStyle(ChatFormatting.GRAY))
                })
            })
        }

        const addStack = (slot, entry) => {
            if (entry.fluid) {
                slot.setFluidRenderer(entry.amount, false, 16, 16).addFluidStack(entry.fluid, entry.amount)
            } else {
                slot.addItemStack(Item.of(entry.item))
            }
        }

        category.handleLookup((layoutBuilder, recipe, focuses) => {
            const data = recipe.recipeData

        // The Overview Indexes Related Forms Without Presenting A Single Executable Recipe
            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addItemStack(Item.of(data.block))
            layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addItemStack(Item.of(data.deposit))
            layoutBuilder.addSlot($RecipeIngredientRole.RENDER_ONLY, 52, 38)
                .addItemStack(Item.of(data.deposit))
                .addRichTooltipCallback((view, tooltip) => {
                    tooltip.add(Component.translate('cwi.jei.mineral.deposit', Item.of(data.block).getHoverName()).withStyle(ChatFormatting.GRAY))
                })

            data.forms.forEach((entry, index) => {
                const slot = layoutBuilder.addSlot($RecipeIngredientRole.RENDER_ONLY, 6 + index * 22, 73)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                addStack(slot, entry)
                addNotes(slot, entry)
                if (entry.fluid) {
                    layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addFluidStack(entry.fluid, entry.amount)
                    layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT).addFluidStack(entry.fluid, entry.amount)
                } else {
                    layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.INPUT).addItemStack(Item.of(entry.item))
                    if (data.special !== 'sulfur') {
                        layoutBuilder.addInvisibleIngredients($RecipeIngredientRole.OUTPUT).addItemStack(Item.of(entry.item))
                    }
                }
            })

            const outputGroups = [data.physical, data.chemical, data.finished]
            outputGroups.forEach((entries, groupIndex) => {
                entries.forEach((entry, index) => {
                    const slot = layoutBuilder.addSlot(entry.returned ? $RecipeIngredientRole.RENDER_ONLY : $RecipeIngredientRole.OUTPUT, 6 + index * 22, 105 + groupIndex * 32)
                        .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    addStack(slot, entry)
                    addNotes(slot, entry)
                })
            })

            const related = data.related || []
            related.forEach((item, index) => {
                layoutBuilder.addSlot($RecipeIngredientRole.INPUT, 6 + index * 22, 105)
                    .setBackground($CreateRecipeCategory.getRenderedSlot(), -1, -1)
                    .addItemStack(Item.of(item))
                    .addRichTooltipCallback((view, tooltip) => {
                        tooltip.add(Component.translate('cwi.jei.mineral.separate_sulfur').withStyle(ChatFormatting.GRAY))
                    })
            })
        })

        category.setDrawHandler((recipe, recipeSlotsView, graphics, mouseX, mouseY) => {
            const data = recipe.recipeData

            $AllGuiTextures.JEI_SHADOW.render(graphics, 25, 28)
            const pose = graphics.pose()
            pose.pushPose()
            pose.translate(16, 22, 0)
            pose.mulPose($Axis.XP.rotationDegrees(-12.5))
            pose.mulPose($Axis.YP.rotationDegrees(22.5))
            $AnimatedKinetics.defaultBlockElement(Block.getBlock(data.block).defaultBlockState())
                .rotateBlock(0, 180, 0)
                .atLocal(0, 0, 2)
                .scale(24)
                .render(graphics)
            pose.popPose()

            drawWordWrap(graphics, Client.font, Item.of(data.block).getHoverName(), 74, 2, 100, 0xFFFFFF, true)
            if (data.special) {
                drawWordWrap(graphics, Client.font, Component.translate(`cwi.jei.mineral.${data.special}_property`), 74, 34, 100, 0xCCCCCC, false)
            } else {
                drawWordWrap(graphics, Client.font, Component.translate(data.sulfur ? 'cwi.jei.mineral.sulfur_yes' : 'cwi.jei.mineral.sulfur_no'), 74, 34, 100, 0xCCCCCC, false)
                drawWordWrap(graphics, Client.font, Component.translate(data.acid ? 'cwi.jei.mineral.acid_yes' : 'cwi.jei.mineral.acid_no'), 74, 46, 100, 0xCCCCCC, false)
            }

            drawWordWrap(graphics, Client.font, Component.translate(data.special === 'sulfur' ? 'cwi.jei.mineral.related_forms' : 'cwi.jei.mineral.forms'), 4, 60, 170, 0xCCCCCC, false)
            if (data.physical.length > 0 || data.related) {
                drawWordWrap(graphics, Client.font, Component.translate(data.related ? 'cwi.jei.mineral.related_sources' : 'cwi.jei.mineral.physical'), 4, 92, 170, 0xCCCCCC, false)
            }
            if (data.chemical.length > 0) {
                drawWordWrap(graphics, Client.font, Component.translate(data.special === 'halite' ? 'cwi.jei.mineral.brine' : 'cwi.jei.mineral.chemical'), 4, 124, 170, 0xCCCCCC, false)
            }
            if (data.finished.length > 0) {
                drawWordWrap(graphics, Client.font, Component.translate(data.special === 'lignite' ? 'cwi.jei.mineral.coal' : 'cwi.jei.mineral.finished'), 4, 156, 170, 0xCCCCCC, false)
            }
            drawWordWrap(graphics, Client.font, Component.translate('cwi.jei.mineral.overview'), 4, 188, 170, 0x888888, false)
        })
    })
})
