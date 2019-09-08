function solve(input) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        leftDiagonal += input[i][i];
    }
    for (let i = input.length - 1; i >= 0; i--) {
        rightDiagonal += input[i][input.length - 1 - i];
    }

    console.log(`${leftDiagonal} ${rightDiagonal}`);
}

solve([[20, 40], [10, 60]]);