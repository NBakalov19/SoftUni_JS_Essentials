function solve() {
    const replacement = document.getElementById('word').value;
    const text = JSON.parse(document.getElementById('text').value);
    let result = document.getElementById('result');

    function replaceWord(replacement, text) {
        const wordForReplace = text[0]
            .split(/\s+/)
            .filter(w => w !== '')[2];

        const regex = new RegExp(wordForReplace, 'gi');

        for (let sentence of text) {
            sentence = sentence.replace(regex, replacement);
            let p = document.createElement('p');
            p.innerHTML = sentence;
            result.appendChild(p);
        }
    }

    replaceWord(replacement, text);
}