function smallestTwoNumber(input) {
    let arr = input.sort((f, s) => {
        return f - s;
    }).slice(0, 2);

    console.log(arr.join(' '));
}

solve([30, 15, 50, 5]);