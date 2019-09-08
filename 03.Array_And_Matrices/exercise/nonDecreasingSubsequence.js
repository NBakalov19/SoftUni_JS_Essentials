function solve(input) {
    let result = [input[0]];

    for (let i = 1; i < input.length; i++) {
        let currentElement = input[i];
        let lastElementFromResult = result[result.length - 1];

        if (currentElement >= lastElementFromResult) {
            result.push(currentElement);
        }
    }

    for (let resultElement of result) {
        console.log(resultElement);
    }
}

solve([20,
    3,
    2,
    15,
    6,
    1]
);

