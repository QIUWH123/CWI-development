ServerEvents.recipes(event => {
    // ----- 辅助函数 -----
    function getItemId(matId, type) {
        const mat = global.materialTypes.find(m => m.id === matId)
        return mat ? mat.items[type] : null
    }

    function getPowderFromRock(rockId) {
        const stone = global.stoneTypes.find(s => s.id === rockId)
        return stone ? stone.types[3] : null
    }

    // ----- 遍历全部矿石 -----
    global.compoundOreTypes.forEach(ore => {
        if (ore.process !== 'true') return
        const id = ore.id
        if (!global.productionMaps || !global.productionMaps[id]) return
        const map = global.productionMaps[id]

        const main = map.main
        const by = map.by || []
        const sulfur = map.sulfur
        const canLeach = map.leachable
        const hostRocks = map.hostRocks || []

        // 基础 ID
        const oreBlock = `${ore.mod}:${ore.realId}`
        const crushed = `kubejs:crushed_${id}`
        const powder = `kubejs:${id}_powder`
        const tailings = `kubejs:${id}_tailings`
        const stubborn = `kubejs:stubborn_${id}_tailings`
        const leachRes = `kubejs:leach_${id}_residue`
        const leachSol = `kubejs:leach_${id}_solution`
        const purifiedSol = `kubejs:purified_${id}_solution`
        const refinedMain = `kubejs:refined_${main}`

        // 从 materialTypes 获取金属粉末、粒 ID
        const mainPowder = getItemId(main, 'powder') || `kubejs:${main}_powder`
        const mainNugget = getItemId(main, 'nugget') || `kubejs:${main}_nugget`
        const mainCrystal = `kubejs:${main}_crystal`

        // ================= 1. 粗碎 =================
        let crushOut = [
            Item.of(crushed, 2),
            Item.of(crushed, 1).withChance(0.75)
        ]
        hostRocks.forEach(([rock, chance]) => {
            let rockPowder = getPowderFromRock(rock)
            if (rockPowder) crushOut.push(Item.of(rockPowder).withChance(chance))
        })
        event.recipes.create.crushing(crushOut, oreBlock)

        // ================= 2. 研磨 (原矿 → 矿粉) =================
        let millOutOre = [
            Item.of(powder, 2),
            Item.of(powder, 1).withChance(0.75)
        ]
        hostRocks.forEach(([rock, chance]) => {
            let rockPowder = getPowderFromRock(rock)
            if (rockPowder) millOutOre.push(Item.of(rockPowder).withChance(chance))
        })
        event.recipes.create.milling(millOutOre, oreBlock)

        // ================= 2.5 粉碎矿 → 矿粉 =================
        event.recipes.create.milling(
            [Item.of(powder, 1)],
            crushed
        ).processingTime(80)

        // ================= 3. 高级粉碎机 (占位) =================
        // TODO

        // ================= 4. 再磨 (顽固尾矿 → 矿粉) =================
        event.recipes.create.milling(
            [Item.of(powder).withChance(0.3)],
            stubborn
        ).processingTime(200)

        // ================= 5. 震动重选 (只产概率最高的岩粉) =================
        let vibOut = [
            AddItem(refinedMain, 0.32),
            AddItem(tailings, 1.0)
        ]
        if (sulfur) vibOut.push(AddItem('tfmg:sulfur_dust', 0.32))
        by.forEach(([metal, chance]) => vibOut.push(AddItem(`kubejs:refined_${metal}`, chance)))

        // 选出调整后概率最高的岩粉
        if (hostRocks.length > 0) {
            let best = hostRocks.reduce((prev, curr) => {
                let prevChance = prev[1] * 0.9
                let currChance = curr[1] * 0.9
                return currChance > prevChance ? curr : prev
            })
            let rockPowder = getPowderFromRock(best[0])
            if (rockPowder) vibOut.push(AddItem(rockPowder, best[1] * 0.9))
        }
        vibrating(event, AddItem(powder), vibOut, 120)

        // ================= 6. 高级离心 (只产概率最高的岩粉) =================
        let centOut = [
            AddItem(refinedMain, 0.42),
            AddItem(tailings, 1.0)
        ]
        if (sulfur) centOut.push(AddItem('tfmg:sulfur_dust', 0.42))
        by.forEach(([metal, chance]) => centOut.push(AddItem(`kubejs:refined_${metal}`, chance * 1.4)))

        if (hostRocks.length > 0) {
            let best = hostRocks.reduce((prev, curr) => {
                let prevChance = prev[1] * 1.3
                let currChance = curr[1] * 1.3
                return currChance > prevChance ? curr : prev
            })
            let rockPowder = getPowderFromRock(best[0])
            if (rockPowder) centOut.push(AddItem(rockPowder, best[1] * 1.3))
        }
        centrifuging(event, [AddItem(powder)], centOut, 100)

        // ================= 7. 浮选 =================
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

        // ================= 8. 简易鼓风浸出 =================
        event.recipes.cwi.corroding(
            [
                Item.of(mainPowder).withChance(0.32),
                Item.of(mainNugget).withChance(0.10)
            ],
            [powder, 'kubejs:sulfuric_acid_bucket']
        )

        // ================= 9. 正式浸出 =================
        // 矿粉浸出
        vatRecipe(event, 'heated', ['tfmg:mixing'], ['tfmg:steel_vat'], 1,
            [AddItem(powder), AddFluid('250 kubejs:sulfuric_acid')],
            [AddFluid(`100 ${leachSol}`), AddItem(leachRes, 1.0)],
            200
        )
        // 顽固尾矿浸出 (更难)
        vatRecipe(event, 'heated', ['tfmg:mixing'], ['tfmg:steel_vat'], 1,
            [AddItem(stubborn), AddFluid('300 kubejs:sulfuric_acid')],
            [AddFluid(`80 ${leachSol}`), AddItem(leachRes, 1.0)],
            300
        )

        // ================= 10. 浸出渣洗涤 =================
        event.recipes.create.splashing(
            [
                Item.of('kubejs:silicate_residue').withChance(0.37),
                Item.of(mainPowder).withChance(0.63),
                Item.of('kubejs:washing_residue').withChance(0.05)
            ],
            leachRes
        )

        // ================= 11. 溶液净化 =================
        vatRecipe(event, null, [], ['tfmg:steel_vat'], 1,
            [AddFluid(`100 ${leachSol}`), AddFluid('50 #cwi:water')],
            [
                AddFluid(`90 ${purifiedSol}`),
                AddItem('kubejs:washing_residue', 0.05)
            ],
            120
        )

        // ================= 12. 结晶 (主/副合并) =================
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

        // ================= 13. 电解精炼 (占位) =================
        // TODO
    })
})

ServerEvents.recipes(event => {
    event.recipes.create.crushing(['2x kubejs:lignite_item', Item.of('kubejs:lignite_item').withChance(0.75), Item.of('kubejs:claystone_powder').withChance(0.63), Item.of('kubejs:shale_powder').withChance(0.37)], 'tfmg:lignite')
    event.recipes.create.milling(['2x kubejs:lignite_powder', Item.of('kubejs:lignite_powder').withChance(0.75), Item.of('kubejs:claystone_powder').withChance(0.63), Item.of('kubejs:shale_powder').withChance(0.37)], 'tfmg:lignite')
    event.recipes.create.crushing(['2x kubejs:halite_item', Item.of('kubejs:halite_item').withChance(0.75), Item.of('kubejs:calcite_powder').withChance(0.73), Item.of('kubejs:shale_powder').withChance(0.27)], 'kubejs:halite')
    event.recipes.create.milling(['2x kubejs:halite_powder', Item.of('kubejs:halite_powder').withChance(0.75), Item.of('kubejs:calcite_powder').withChance(0.73), Item.of('kubejs:shale_powder').withChance(0.27)], 'kubejs:halite')
})