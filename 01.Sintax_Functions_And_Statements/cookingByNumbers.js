function cooking(input) {
    let number = +input[0];

    for (let i = 1; i < input.length; i++) {
        let command = input[i];

        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number += 1;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number = number - (0.2 * number);
                break;
        }
        console.log(number);
    }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);