function moneyNeeded(fruit, weight, pricePerKg) {
    weight /= 1000;
    let totalPrice = weight * pricePerKg;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

moneyNeeded('apple', 1563, 2.35);