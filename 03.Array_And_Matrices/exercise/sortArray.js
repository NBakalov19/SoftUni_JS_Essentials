function solve(input) {

    let sorted = input.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    sorted.forEach(e => console.log(e));
}

solve(['test',
    'Deny',
    'omen',
    'Default']
);