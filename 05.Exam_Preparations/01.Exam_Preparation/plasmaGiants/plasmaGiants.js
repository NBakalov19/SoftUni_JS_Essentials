function solve(arr, cutSize) {

    const damageHit = Math.min.apply(null, arr);
    const minHealth = Math.max.apply(null, arr);
    let rounds = 1;

    let [firstArr, secondArr] = [
        arr.slice(0, arr.length / 2),
        arr.slice(arr.length / 2)
    ];

    let [firstGiant, secondGiant] = [0, 0];

    while (firstArr.length > 0 && secondArr) {

        firstGiant += firstArr.splice(0, cutSize).reduce((a, b) => a * b);
        secondGiant += secondArr.splice(-cutSize, cutSize).reduce((a, b) => a * b);
    }

    let output = '';
    if (damageHit !== 0) {
        while (firstGiant > minHealth && secondGiant > minHealth) {
            firstGiant -= damageHit;
            secondGiant -= damageHit;
            rounds++
        }
    }

    if (firstGiant > secondGiant) {
        output = `First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`
    } else if (firstGiant < secondGiant) {
        output = `Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`
    } else {
        output = `Its a draw ${firstGiant} - ${secondGiant}`
    }

    console.log(output);
}

solve([3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 5, 4], 2);