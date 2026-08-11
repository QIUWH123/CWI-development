ServerEvents.recipes(event => {
    function getItemId(matId, type) {
        const mat = global.materialTypes.find(m => m.id === matId)
        return mat ? mat.items[type] : null
    }

    function getPowderFromRock(rockId) {
        const stone = global.stoneTypes.find(s => s.id === rockId)
        return stone ? stone.types[3] : 'kubejs:stone_powder'
    }

    global.compoundOreTypes.forEach(ore => {
        if (ore.process !== 'true') return
        const id = ore.id
        const map = ore.productionMap || (global.productionMaps ? global.productionMaps[id] : null)
        if (!map) return

        const main = map.main
        const by = map.by || []
        const sulfur = map.sulfur
        const canLeach = map.leachable
        const hostRocks = map.hostRocks || []

        const oreBlock = `${ore.mod}:${ore.realId}`
        const crushed = `kubejs:crushed_${id}`
        const powder = `kubejs:${id}_powder`
        const tailings = `kubejs:${id}_tailings`
        const stubborn = `kubejs:stubborn_${id}_tailings`
        const leachRes = `kubejs:leach_${id}_residue`
        const leachSol = `kubejs:leach_${id}_solution`
        const purifiedSol = `kubejs:purified_${id}_solution`
        const refinedMain = `kubejs:refined_${main}`

        const mainPowder = getItemId(main, 'powder') || `kubejs:${main}_powder`
        const mainNugget = getItemId(main, 'nugget') || `kubejs:${main}_nugget`
        const mainCrystal = `kubejs:${main}_crystal`

        // 1. 粗碎
        let crushOut = [
            Item.of(crushed, 2),
            Item.of(crushed, 1).withChance(0.75),
            Item.of('kubejs:stone_dust', 2),
            Item.of('kubejs:stone_dust', 1).withChance(0.50)
        ]
        hostRocks.forEach(([rock, chance]) => crushOut.push(Item.of(getPowderFromRock(rock)).withChance(chance)))
        event.recipes.create.crushing(crushOut, oreBlock)

        // 2. 研磨 (原矿 → 矿粉)
        let millOutOre = [
            Item.of(powder, 2),
            Item.of(powder, 1).withChance(0.75),
            Item.of('kubejs:stone_dust', 2),
            Item.of('kubejs:stone_dust', 1).withChance(0.50)
        ]
        hostRocks.forEach(([rock, chance]) => millOutOre.push(Item.of(getPowderFromRock(rock)).withChance(chance)))
        event.recipes.create.milling(millOutOre, oreBlock)

        // 2.5 粉碎矿 → 矿粉
        event.recipes.create.milling(
            [Item.of(powder, 1)],
            crushed
        ).processingTime(80)

        // 3. 高级粉碎机 (占位)
        // TODO

        // 4. 再磨 (顽固尾矿 → 矿粉)
        event.recipes.create.milling(
            [Item.of(powder).withChance(0.3)],
            stubborn
        ).processingTime(200)

        // 5. 震动重选
        let vibOut = [
            AddItem(refinedMain, 0.32),
            AddItem(tailings, 1.0)
        ]
        if (sulfur) vibOut.push(AddItem('tfmg:sulfur_dust', 0.32))
        by.forEach(([metal, chance]) => vibOut.push(AddItem(`kubejs:refined_${metal}`, chance)))
        if (hostRocks.length > 0) {
            let [rock, chance] = hostRocks[0]
            vibOut.push(AddItem(getPowderFromRock(rock), chance * 0.9))
        }
        vibrating(event, AddItem(powder), vibOut, 120)

        // 6. 高级离心
        let centOut = [
            AddItem(refinedMain, 0.42),
            AddItem(tailings, 1.0)
        ]
        if (sulfur) centOut.push(AddItem('tfmg:sulfur_dust', 0.42))
        by.forEach(([metal, chance]) => centOut.push(AddItem(`kubejs:refined_${metal}`, chance * 1.4)))
        if (hostRocks.length > 0) {
            let [rock, chance] = hostRocks[0]
            centOut.push(AddItem(getPowderFromRock(rock), chance * 1.3))
        }
        centrifuging(event, [AddItem(powder)], centOut, 100)

        // 7. 浮选
        let flotationOut = [
            AddItem(refinedMain, 0.37),
            AddItem(stubborn, 1.0)
        ]
        by.forEach(([metal, chance]) => flotationOut.push(AddItem(`kubejs:refined_${metal}`, chance * 1.0)))
        vatRecipe(event, null, ['tfmg:mixing'], ['tfmg:steel_vat'], 1,
            [
                AddItem(tailings),
                AddFluid('250 #cwi:water'),
                AddItem('kubejs:flotation_reagent')
            ],
            flotationOut,
            150
        )

        if (!canLeach) return

        // 8. 简易鼓风浸出
        event.recipes.cwi.corroding(
            [
                Item.of(mainPowder).withChance(0.32),
                Item.of(mainNugget).withChance(0.10)
            ],
            [powder, 'kubejs:sulfuric_acid_bucket']
        )

        // 9. 正式浸出 (矿粉)
        vatRecipe(event, 'heated', ['tfmg:mixing'], ['tfmg:steel_vat'], 1,
            [AddItem(powder), AddFluid('250 kubejs:sulfuric_acid')],
            [AddFluid(`100 ${leachSol}`), AddItem(leachRes, 1.0)],
            200
        )

        // 顽固尾矿浸出：酸量↑，时间↑，浸出液↓
        vatRecipe(event, 'heated', ['tfmg:mixing'], ['tfmg:steel_vat'], 1,
            [AddItem(stubborn), AddFluid('300 kubejs:sulfuric_acid')],
            [AddFluid(`80 ${leachSol}`), AddItem(leachRes, 1.0)],
            300
        )

        // 10. 浸出渣洗涤
        event.recipes.create.splashing(
            [
                Item.of('kubejs:silicate_residue').withChance(0.37),
                Item.of(mainPowder).withChance(0.63),
                Item.of('kubejs:washing_residue').withChance(0.05)
            ],
            leachRes
        )

        // 11. 溶液净化
        vatRecipe(event, null, [], ['tfmg:steel_vat'], 1,
            [AddFluid(`100 ${leachSol}`), AddFluid('50 #cwi:water')],
            [
                AddFluid(`90 ${purifiedSol}`),
                AddItem('kubejs:washing_residue', 0.05)
            ],
            120
        )

        // 12. 结晶 (主副产物合并)
        let crystalOut = [
            AddItem(mainCrystal, 0.95),
            AddFluid('10 kubejs:mother_liquor')
        ]
        by.forEach(([metal, chance]) => {
            crystalOut.push(AddItem(`kubejs:${metal}_crystal`, chance * 0.9))
        })
        vatRecipe(event, null, [], ['tfmg:steel_vat'], 1,
            [AddFluid(`90 ${purifiedSol}`), AddItem('kubejs:precipitant')],
            crystalOut,
            160
        )

        // 13. 电解精炼 (占位)
        // TODO
    })
})