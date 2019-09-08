function solve(budget, needConcrete, discount) {

    //ingredientsPer1cubicMeterConcrete
    const ingredientsInKgFotConcrete = {
        gravel: 1200,
        sand: 750,
        cement: 300,
    };

    const priceForIngredients = {
        gravel: 0.5,
        sand: 0.2,
        cement: 1.1,
    };

    const priceForGravel = (needConcrete * ingredientsInKgFotConcrete.gravel) * priceForIngredients.gravel;
    const priceForSand = (needConcrete * ingredientsInKgFotConcrete.sand) * priceForIngredients.sand;
    const priceForCement = (needConcrete * ingredientsInKgFotConcrete.cement) * priceForIngredients.cement;


    const priceWithoutDiscount = priceForGravel + priceForSand + priceForCement;
    let totalPrice = priceWithoutDiscount;

    if (priceWithoutDiscount > 1000) {
        totalPrice = priceWithoutDiscount - ((discount / 100) * priceWithoutDiscount);
    }

    let diff = budget - totalPrice;
    let output = '';

    if (diff >= 0) {
        if (priceWithoutDiscount > 1000) {
            output += `The price without discount is ${priceWithoutDiscount.toFixed(2)} BGN\n`;
            output += `Gravel: ${priceForGravel.toFixed(2)} BGN\n`;
            output += `Sand: ${priceForSand.toFixed(2)} BGN\n`;
            output += `Cement: ${priceForCement.toFixed(2)} BGN\n`;
            output += `The price with discount is ${totalPrice.toFixed(2)} BGN`;
        } else {
            output += `The price without discount is ${priceWithoutDiscount.toFixed(2)} BGN\n`;
            output += `Gravel: ${priceForGravel.toFixed(2)} BGN\n`;
            output += `Sand: ${priceForSand.toFixed(2)} BGN\n`;
            output += `Cement: ${priceForCement.toFixed(2)} BGN\n`;
        }

    } else {
        diff = Math.abs(diff);
        output = `You can't buy all these things! You need ${diff.toFixed(2)} BGN more`;
    }

    console.log(output);
}

solve(800, 3, 10);