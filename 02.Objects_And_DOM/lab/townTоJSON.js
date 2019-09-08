function solve(input) {

    let towns = [];
    let regex = /\s*\|\s*/;

    for (let line of input.slice(1)) {

        let tokens = line.split(regex);
        let townObj = {Town: tokens[1], Latitude: Number(tokens[2]), Longitude: Number(tokens[3])};
        towns.push(townObj);
        ``
    }

    console.log(JSON.stringify(towns));
}

solve(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);