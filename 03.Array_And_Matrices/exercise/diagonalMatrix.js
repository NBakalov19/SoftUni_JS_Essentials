function diagonalMatrix(input) {

    let matrix = input.map(e => {
        return e.split(' ')
    });

    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].map(Number);
    }

    let sumMainDiagonal = 0;
    let sumOptionalDiagonal = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumMainDiagonal += matrix[i][i];
        sumOptionalDiagonal += matrix[i][matrix.length - 1 - i];
    }

    if (sumMainDiagonal === sumOptionalDiagonal) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row !== col && (row + col) !== matrix.length - 1) {
                    matrix[row][col] = sumMainDiagonal;
                }
            }
        }

        matrix.forEach(e => console.log(e.join(' ')));
    } else {
        matrix.forEach(e => console.log(e.join(' ')));
    }
}

diagonalMatrix(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);