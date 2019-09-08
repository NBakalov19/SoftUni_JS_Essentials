function solve(input) {
    let arr = [];

    for (let i = 0; i < input.length; i++) {
        let currElement = input[i];

        if (i % 2 === 0) {
            arr.push(currElement);
        }
    }

    console.log(arr.join(' '));
}

solve(['20', '30', '40']);