function solve() {
    const input = document.getElementById('input').value;
    let result = document.getElementById('resultOutput');

    let sumOfDigits = input.split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);

    const weight = sumOfDigits % 9 || 9;
    const filteredInput = input.slice(weight, input.length - weight);
    const segmentLength = 8;

    let segments = [];
    for (let i = 0; i < filteredInput.length; i += segmentLength) {
        segments.push(filteredInput.substr(i, segmentLength));
    }

    let output = '';

    for (let i = 0; i < segments.length; i++) {
        let segment = segments[i];
        let decimalSegment = parseInt(segment, 2);
        let symbol = String.fromCharCode(decimalSegment);

        if (/\w/.test(symbol) || /\s/.test(symbol)) {
            output += symbol
        }
    }
    result.innerHTML = output;
}