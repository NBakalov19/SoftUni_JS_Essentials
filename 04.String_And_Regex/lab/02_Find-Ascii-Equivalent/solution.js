function solve() {
    const input = document.getElementById('text').value;
    let result = document.getElementById('result');

    let parts = input.split(/\s+/g)
        .filter(part => part !== '');

    console.log(parts);

    let numbersToChar = '';
    parts.forEach(part => {
        if (Number(part)) {
            const number = Number(part);
            numbersToChar += String.fromCharCode(number);
        } else {
            let charToNum = [];

            for (let i = 0; i < part.length; i++) {
                charToNum.push(part[i].charCodeAt(0));

            }

            let p = document.createElement('p');
            p.innerHTML = charToNum.join(' ');
            result.appendChild(p);
        }
    });

    let p = document.createElement('p');
    p.innerHTML = numbersToChar;
    result.appendChild(p);
}