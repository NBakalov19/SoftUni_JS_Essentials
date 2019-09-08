function solve(input) {

    let param = typeof input;
    let result;

    if (param === 'number') {
        result = (Math.pow(input, 2) * Math.PI).toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${param}.`
    }
    console.log(result);
}

solve(5);