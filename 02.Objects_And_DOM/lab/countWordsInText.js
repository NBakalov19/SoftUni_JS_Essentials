function countWords([input]) {
    let text = input.split(/\W+/).filter(w => w !== '');
    let textObj = {};

    for (let i = 0; i < text.length; i++) {
        if (!textObj[text[i]] && text[i] !== '') {
            textObj[text[i]] = 0;
        }
        textObj[text[i]]++;
    }

    console.log(JSON.stringify(textObj));
}

//countWords("Far too slow, you're far too slow.");
countWords(["JS devs use Node.js for server-side JS.-- JS for devs"]);