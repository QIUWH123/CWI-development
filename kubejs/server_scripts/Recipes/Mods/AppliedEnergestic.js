ServerEvents.recipes(event => {
    const colors = [
        'white', 'light_gray', 'gray', 'black', 'lime', 'yellow', 'orange', 'brown', 'red', 'pink', 'magenta', 'purple', 'blue', 'light_blue', 'cyan', 'green'
    ];

    const reversablePairs = [
        { a: "smart_cable", b: "smart_dense_cable", sCount: 4, dCount: 1},
        { a: "covered_cable", b: "covered_dense_cable", sCount: 4, dCount: 1}
    ];

    colors.forEach(color => {
        reversablePairs.forEach(pair => {
            event.shapeless(
                `${pair.sCount}x ae2:${color}_${pair.a}`,
                [`${pair.dCount}x ae2:${color}_${pair.b}`]
            );

            event.shapeless(
                `${pair.dCount}x ae2:${color}_${pair.b}`,
                [`${pair.sCount}x ae2:${color}_${pair.a}`]
            );
        });
    });
});