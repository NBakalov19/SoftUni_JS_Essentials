function areSameNumbers(number) {
    number = number.toString();
    let sum = +number[0];
    let areSame = true;
    for (let i = number.length - 1; i > 0; i--) {
        if (number[i] !== number[i - 1]) {
            areSame = false;
        }
        sum += +number[i];
    }

    console.log(areSame);
    console.log(sum);
}

areSameNumbers(2222);