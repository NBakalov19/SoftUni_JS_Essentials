function solve(input) {

    let arr = [];

    for (let i = 0; i < input.length; i++) {
        const currElement = input[i];

        if (currElement < 0) {
            arr.unshift(currElement);
        } else {
            arr.push(currElement);
        }
    }

    arr.forEach(n => console.log(n));
}

solve([7, -2, 8, 9]);