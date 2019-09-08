function solve(commands) {

    let number = 1;
    let result = [];

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        if (command === 'add') {
            result.push(number);
        } else {
            if (result.length > 0) {
                result.pop();
            }
        }

        number++;
    }
    if (result.length !== 0) {
        for (let element of result) {
            console.log(element);
        }
    } else {
        console.log('Empty');
    }

}

solve(
    ['remove']
);