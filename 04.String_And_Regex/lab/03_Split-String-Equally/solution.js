function solve() {
    let text = document.getElementById('text').value;
    const lengthOfParts = Number(document.getElementById('number').value);

    if (text.length % lengthOfParts > 0) {
        const remain = text.length % lengthOfParts;
        const charsToFill = lengthOfParts - remain;

        text = text + text.substr(0, charsToFill);
    }

    const result = [];

    for (let i = 0; i < text.length; i += lengthOfParts) {
        result.push(text.substr(i, lengthOfParts))
    }

    document.getElementById('result').innerHTML = result.join(' ');
}