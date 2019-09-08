function rotate(input) {
    let rotations = Number(input[input.length - 1]) % (input.length - 1);
    input.pop();

    for (let i = 0; i < rotations; i++) {
        let lastElement = input[input.length - 1];
        input.pop();
        input.unshift(lastElement);
    }

    console.log(input.join(' '));
}

rotate(['1',
    '2',
    '3',
    '4',
    '2']
);