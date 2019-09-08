function solve(input) {

    let biggestNumber = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if (biggestNumber < input[row][col]) {
                biggestNumber = input[row][col];
            }
        }
    }
    console.log(biggestNumber);
}

solve([[20, 50, 10],
    [8, 33, 145]]
);