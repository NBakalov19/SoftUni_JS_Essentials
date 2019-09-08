function magicMatrix(matrix) {
    let isMagical = true;
    let sum = matrix[0].reduce((a, b) => a + b);
    for (let row = 1; row < matrix.length; row++) {
        let currSum = matrix[row].reduce((total, element) => total + element);

        if (currSum !== sum) {
            isMagical = false;
        }
    }

    if (!isMagical) {
        console.log(isMagical);
        return;
    }
    for (let col = 0; col < matrix[0].length; col++) {
        let currSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currSum += matrix[row][col];
        }

        if (currSum !== sum) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrix([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
);