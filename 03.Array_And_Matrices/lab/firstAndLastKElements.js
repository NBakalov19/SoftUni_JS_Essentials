function solve(input) {

    let k = input[0];
    let firstKElement = [];
    let lastKElement = [];
    for (let i = 0; i < k; i++) {
        firstKElement.push(input[i + 1]);
        lastKElement.push(input[input.length - 1 - i]);
    }

    console.log(firstKElement.join(' '));
    console.log(lastKElement.reverse().join(' '));
}

solve([3,
    6, 7, 8, 9]
);