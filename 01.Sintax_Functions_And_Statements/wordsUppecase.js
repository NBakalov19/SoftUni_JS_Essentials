function wordUppercase(str) {
    let wordUpper = str.toUpperCase();

    function extractWords() {
        return wordUpper.split(/\W+/);
    }

    let words = extractWords();
    words = words.filter(w => w !== '');

    console.log(words.join(', '));
}

wordUppercase('Hi, how are you?');