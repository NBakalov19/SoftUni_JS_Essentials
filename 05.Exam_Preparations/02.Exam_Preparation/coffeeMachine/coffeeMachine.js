function areEnoughMoney(input) {


    let totalIncome = 0;

    for (let element of input) {
        let order = element.split(', ');
        let price = 0.8;
        let insertedMoney = Number(order[0]);
        const typeOfDrink = order[1];
        const isDecaf = typeOfDrink === 'coffee' && order[2] === 'decaf';
        const gotMilk = order[order.length - 2] === 'milk';
        const sugarQuantity = Number(order[order.length - 1].charAt(0));
        price += isDecaf ? 0.1 : 0;
        price += gotMilk ? 0.1 : 0;
        price += sugarQuantity > 0 ? 0.1 : 0;

        let diff = Math.abs(insertedMoney - price);

        if (insertedMoney >= price) {
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${diff.toFixed(2)}$`);
            totalIncome += price
        } else {
            console.log(`Not enough money for ${typeOfDrink}. Need ${diff.toFixed(2)}$ more`);
        }
    }
    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

areEnoughMoney(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2',
    '1.00, coffee, decaf, 0']
);