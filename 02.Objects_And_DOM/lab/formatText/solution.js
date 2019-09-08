function solve() {
    let inputElement = document.getElementById('input');
    let content = inputElement.innerText;

    let sentences = content.split('.').filter(s => s !== '');

    let outputElement = document.getElementById('output');
    let paragraph = document.createElement('p');
    let counter = 0;

    for (let i = 0; i < sentences.length; i++) {
        paragraph.append(sentences[i] + '. ');
        counter++;
        if (counter === 3) {
            outputElement.appendChild(paragraph);
            paragraph = document.createElement('p');
            paragraph.innerText = '';
            counter = 0;
        }
    }

    if (paragraph.innerText !== '') {
        outputElement.appendChild(paragraph);
    }
}