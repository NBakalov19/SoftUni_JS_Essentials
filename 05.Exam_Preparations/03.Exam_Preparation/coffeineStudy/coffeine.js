function solve(days) {

    //caffeineInMgPer100ml
    const caffeineInDrinks = {
        coffee: 40,
        cocaCola: 8,
        tea: 20,
        energy: 30,
    };

    let totalCaffeine = 0;

    for (let day = 1; day <= days; day++) {

        totalCaffeine += ((3 * 150) / 100) * caffeineInDrinks.coffee;
        totalCaffeine += ((2 * 250) / 100) * caffeineInDrinks.cocaCola;
        totalCaffeine += ((3 * 350) / 100) * caffeineInDrinks.tea;

        if (day % 5 === 0) {
            totalCaffeine += ((3 * 500) / 100) * caffeineInDrinks.energy;
        }

        if (day % 9 === 0) {
            totalCaffeine += ((4 * 250) / 100) * caffeineInDrinks.cocaCola;
            totalCaffeine += ((2 * 500) / 100) * caffeineInDrinks.energy;
        }
    }

    console.log(`${totalCaffeine} milligrams of caffeine were consumed`);
}

solve(9);