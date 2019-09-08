function sum(firstParam, secondParam) {

    let firstNumber = Number(firstParam);
    let secondNumber = Number(secondParam);

    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum += i;
    }

    console.log(sum);
}

sum('1', '5');