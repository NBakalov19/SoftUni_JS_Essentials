function solve() {

    let input = document.querySelector('input');
    let list = document.querySelectorAll('li');

    let addButton = document.querySelector('button');
    addButton.addEventListener('click', function () {
        let currentName = input.value.toLowerCase();
        let position = currentName[0].charCodeAt(0) - 97;

        if (list[position].textContent === '') {
            list[position].textContent = capitalize(currentName);
        } else {
            list[position].textContent += `, ${capitalize(currentName)}`;
        }

        input.value = '';
    });

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
}