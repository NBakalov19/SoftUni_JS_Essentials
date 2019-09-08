function solve() {
    const keyWord = document.getElementById('string').value;
    const text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let latitude = '';
    let longitude = '';

    const messageRegexString = `${keyWord}(.*)${keyWord}`;
    const messageRegex = new RegExp(messageRegexString, 'g');
    const messageMatch = messageRegex.exec(text);
    let message = messageMatch[1];

    const locationRegex = /(north|east).*?(\d{2})[^.]*?,[^,]*?(\d{6})/gmi;

    let locationMatch = locationRegex.exec(text);

    while (locationMatch !== null) {
        if (locationMatch[1].toLowerCase() === 'north') {
            latitude = locationMatch;
        } else {
            longitude = locationMatch;
        }

        locationMatch = locationRegex.exec(text);
    }

    let p1 = document.createElement('p');
    p1.innerHTML = `${latitude[2]}.${latitude[3]} N`;
    result.appendChild(p1);

    let p2 = document.createElement('p');
    p2.innerHTML = `${longitude[2]}.${longitude[3]} E`;
    result.appendChild(p2);

    let p3 = document.createElement('p');
    p3.innerHTML = `Message: ${message}`;
    result.appendChild(p3);
}