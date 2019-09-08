function solve(input) {

    let arr = input.filter((e, i) => i % 2 === 1)
        .map(e => e * 2)
        .reverse();

    console.log(arr.join(' '));
}

solve([10, 15, 20, 25]);