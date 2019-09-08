function neighbors(input) {

    let counter = 0;

    for (let row = 0; row < input.length - 1; row++) {
        for (let col = 0; col < input[row].length; col++) {
            let currElement = input[row][col];

            if (currElement === input[row][col + 1]) {
                counter++;
            }

            if ((row !== input.length - 1 && currElement === input[row + 1][col])) {
                counter++;
            }

            if (row === input.length - 2 && input[row + 1][col] === input[row + 1][col + 1]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

neighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
);
