function solve(firstNumber, secondNumber, thirdNumber) {

    let result;

    if (firstNumber > secondNumber && firstNumber > thirdNumber) {
        result = firstNumber;
    } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        result = secondNumber;
    } else if (thirdNumber > secondNumber && thirdNumber > firstNumber) {
        result = thirdNumber;
    }
    console.log(`The largest number is ${result}`);
}

solve(2, 5, 89);