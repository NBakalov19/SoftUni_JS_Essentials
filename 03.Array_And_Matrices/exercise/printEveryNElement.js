function solve(input) {
    let step = Number(input[input.length - 1]);
    input.pop();

    for (let i = 0; i < input.length; i += step) {
        console.log(input[i]);
    }
}

solve(['dsa',
    'asd',
    'test',
    'tset',
    '2']
);