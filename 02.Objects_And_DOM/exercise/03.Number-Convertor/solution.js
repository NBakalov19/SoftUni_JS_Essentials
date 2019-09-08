function solve() {
    let menuTo = document.getElementById('selectMenuTo');

    let binaryMenu = menuTo.getElementsByTagName('option')[0];
    let secondMenu = binaryMenu.cloneNode(false);
    menuTo.appendChild(secondMenu);
    binaryMenu.value = 'binary';
    binaryMenu.textContent = 'Binary';

    let hexadecimalMenu = menuTo.getElementsByTagName('option')[1];
    let thirdMenu = hexadecimalMenu.cloneNode(false);
    menuTo.appendChild(thirdMenu);

    hexadecimalMenu.value = 'hexadecimal';
    hexadecimalMenu.textContent = 'Hexadecimal';

    let buttonElement = document.getElementsByTagName('button')[0];
    buttonElement.addEventListener('click', convert);

    function convert() {
        let value = menuTo.options[menuTo.selectedIndex].value;
        let number = Number(document.getElementById('input').value);
        let result = '';

        if (value === 'binary') {
            result = number.toString(2);
        } else {
            result = number.toString(16);
        }

        document.getElementById('result').value = result.toUpperCase();
    }
}