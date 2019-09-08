function solve() {
    const text = document.getElementById('text').value;
    const currentCase = document.getElementById('naming-convention').value;

    function pascalOrCamelCase(text, currentCase) {
        let words = text.toLowerCase()
            .split(' ')
            .filter(w => w !== ' ');

        let output = '';

        if (currentCase === 'Pascal Case' || 'Camel Case') {
            words.forEach(word => {
                output += word[0].toUpperCase() + word.substr(1).toLowerCase();
            });
        } else {
            output = 'Error!';
        }

        if (currentCase === 'Camel Case') {
            output = output[0].toLowerCase() + output.substr(1);
        }
        document.getElementById('result').innerHTML = output;
    }

    pascalOrCamelCase(text, currentCase);
}