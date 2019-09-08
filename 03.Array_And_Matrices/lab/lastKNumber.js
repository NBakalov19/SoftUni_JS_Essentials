function solve(sequenceLength, countOfElements) {

    let arr = [1];

    for (let i = 1; i < sequenceLength; i++) {
        let sum = 0;
        for (let j = i - countOfElements; j <= i - 1; j++) {
            if (j >= 0) {
                sum += arr[j];
            }
        }
        arr.push(sum);
    }

    console.log(arr.join(' '));
}

solve(8, 2);