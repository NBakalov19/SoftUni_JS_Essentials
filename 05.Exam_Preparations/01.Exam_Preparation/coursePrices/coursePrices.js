function calculatePrice(firstCourse, secondCourse, thirdCourse, educationForm) {

    const jsAdvancedPrice = 180;
    const jsAdvancedFinalPrice = (firstCourse && secondCourse ? 0.9 * jsAdvancedPrice : jsAdvancedPrice);

    const module = {
        'JS Fundamentals': (firstCourse ? 170 : 0),
        'JS Advanced': (secondCourse ? jsAdvancedFinalPrice : 0),
        'JS Applications': (thirdCourse ? 190 : 0)
    };

    let price = 0;

    for (let index in module) {
        if (educationForm === 'online') {
            price += (module[index] * 0.94);
        } else {
            price += module[index];
        }
    }

    if (firstCourse && secondCourse && thirdCourse) {
        price *= 0.94;
    }

    console.log(Math.round(price));
}

calculatePrice(true, true, true, "onsite");