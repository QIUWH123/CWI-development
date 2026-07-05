// priority: -100

// 遍历所有 create:mixing 配方，完整提取信息（支持 chance）
ServerEvents.recipes(event => {
    event.findRecipes({ type: 'create:mixing' }).forEach(recipe => {
        let id = recipe.getId();
        let json = recipe.json;

        console.info(`=== 配方 ID: ${id} ===`);

        // ---- 热需求 ----
        if (json.has('heatRequirement')) {
            console.info(`🔥 热需求: ${json.get('heatRequirement').getAsString()}`);
        } else {
            console.info('🔥 热需求: 无（普通混合）');
        }

        // ---- 输入 ----
        let ingredients = json.get('ingredients').getAsJsonArray();
        console.info('📥 输入:');
        ingredients.forEach(ing => {
            let obj = ing.getAsJsonObject();
            let line = '  ';

            if (obj.has('item')) {
                let item = obj.get('item').getAsString();
                let count = obj.has('count') ? obj.get('count').getAsInt() : 1;
                line += `物品: ${item} x${count}`;
                // 输入也可能有 chance（极少见，但兼容）
                if (obj.has('chance')) {
                    let chance = obj.get('chance').getAsDouble();
                    line += ` (几率: ${(chance * 100).toFixed(0)}%)`;
                }
            } else if (obj.has('tag')) {
                line += `标签: #${obj.get('tag').getAsString()}`;
            } else if (obj.has('fluid')) {
                let fluid = obj.get('fluid').getAsString();
                let amount = obj.get('amount').getAsInt();
                line += `流体: ${fluid}, 量: ${amount}mB`;
                if (obj.has('nbt')) line += `, NBT: ${obj.get('nbt')}`;
                if (obj.has('chance')) {
                    let chance = obj.get('chance').getAsDouble();
                    line += ` (几率: ${(chance * 100).toFixed(0)}%)`;
                }
            } else if (obj.has('fluidTag')) {
                let tag = obj.get('fluidTag').getAsString();
                let amount = obj.get('amount').getAsInt();
                line += `流体标签: #${tag}, 量: ${amount}mB`;
                // 流体标签极少有 chance，但保留
                if (obj.has('chance')) {
                    let chance = obj.get('chance').getAsDouble();
                    line += ` (几率: ${(chance * 100).toFixed(0)}%)`;
                }
            } else {
                line += `未知输入: ${obj}`;
            }
            console.info(line);
        });

        // ---- 输出 ----
        let results = json.get('results').getAsJsonArray();
        console.info('📤 输出:');
        results.forEach(res => {
            let obj = res.getAsJsonObject();
            let line = '  ';

            if (obj.has('item')) {
                let item = obj.get('item').getAsString();
                let count = obj.has('count') ? obj.get('count').getAsInt() : 1;
                line += `物品: ${item} x${count}`;
                // 提取几率
                if (obj.has('chance')) {
                    let chance = obj.get('chance').getAsDouble();
                    line += ` (几率: ${(chance * 100).toFixed(0)}%)`;
                }
            } else if (obj.has('fluid')) {
                let fluid = obj.get('fluid').getAsString();
                let amount = obj.get('amount').getAsInt();
                line += `流体: ${fluid}, 量: ${amount}mB`;
                if (obj.has('nbt')) line += `, NBT: ${obj.get('nbt')}`;
                if (obj.has('chance')) {
                    let chance = obj.get('chance').getAsDouble();
                    line += ` (几率: ${(chance * 100).toFixed(0)}%)`;
                }
            } else {
                line += `未知输出: ${obj}`;
            }
            console.info(line);
        });

        console.info('=== 结束 ===\n');
    });
});