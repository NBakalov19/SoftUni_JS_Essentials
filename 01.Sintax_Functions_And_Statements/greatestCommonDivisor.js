function getGreatCommonDivisor(firstNumber, secondNumber) {

    let greatDivisor = 1;

    if (firstNumber % secondNumber === 0) {
        greatDivisor = secondNumber;
    }

    let smallerNumber = Math.min(firstNumber, secondNumber);
    let biggerNumber = Math.max(firstNumber, secondNumber);

    for (let i = 2; i < smallerNumber; i++) {

        if (smallerNumber % i === 0 && biggerNumber % i === 0) {
            greatDivisor = i;
        }
    }

    console.log(greatDivisor);

    // firstNumber = Math.abs(firstNumber);
    // secondNumber = Math.abs(secondNumber);
    //
    // while (secondNumber){
    //     let temp = secondNumber;
    //     secondNumber = firstNumber % secondNumber;
    //     firstNumber = temp;
    // }
    //
    // console.log(firstNumber);
}

getGreatCommonDivisor(2154, 458);