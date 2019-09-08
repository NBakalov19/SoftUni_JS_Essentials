function solve() {
    const inputArray = document.getElementById('array').value;

    const keyWord = inputArray[0].toLowerCase();
    let text = inputArray[1];
    //const keyWordRegex = new RegExp(/(^|\s)/ + keyWord, 'i');

    const encodedMessageRegexString = `([A-Z!%$#]+){8}[\s\.$]`;
    const encodedMessageRegex = new RegExp(encodedMessageRegexString, 'g');

    let match = encodedMessageRegex.test(text);

    console.log(match);
}
