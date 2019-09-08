function solve(a, b, operator) {
    let func;
    switch (operator) {
        case '+':
            func = (x, y) => x + y;
            break;
        case '-':
            func = (x, y) => x - y;
            break;
        case '*':
            func = (x, y) => x * y;
            break;
        case '/':
            func = (x, y) => x / y;
            break;
    }

    console.log(func(a, b));
}

solve(2, 4, '+');