function sumFirstAndLast(input) {
    let arr = input.map(n => Number(n));

    console.log(arr[0] + arr[arr.length - 1]);
}

sumFirstAndLast(['20', '30', '40']);