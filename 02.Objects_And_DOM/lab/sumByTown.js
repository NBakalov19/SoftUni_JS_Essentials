function solve(input) {

    let townObj = {};

    for (let i = 0; i < input.length; i += 2) {

        if (!townObj[input[i]]) {
            townObj[input[i]] = 0;
        }
        townObj[input[i]] += Number(input[i + 1]);
    }

    console.log(JSON.stringify(townObj));
}

solve(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);