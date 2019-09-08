function solve() {
    let furnitureListContent = document.getElementsByTagName('textarea')[0];
    let generateButtonElement = document.getElementsByTagName('button')[0];
    let buyButtonElement = document.getElementsByTagName('button')[1];

    generateButtonElement.addEventListener('click', generate);
    buyButtonElement.addEventListener('click', buy);

    function generate() {
        let furnitures = JSON.parse(furnitureListContent.value);
        furnitures.forEach(furniture => furnitureGenerator(furniture));
    }

    function furnitureGenerator(furniture) {
        let image = furniture['img'];
        let name = furniture['name'];
        let price = furniture['price'];
        let decFactor = furniture['decFactor'];

        let table = document.getElementsByClassName('table')[0];
        let row = table.insertRow();
        let cell = row.insertCell();

        let imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.innerHTML = 'img src="' + furniture['img'] + '">';
        cell.appendChild(imgElement);

        cell = row.insertCell();

        let nameElement = document.createElement('p');
        nameElement.textContent = name;
        cell.appendChild(nameElement);

        cell = row.insertCell();

        let priceElement = document.createElement('p');
        priceElement.textContent = price;
        cell.appendChild(priceElement);

        cell = row.insertCell();

        let decFactorElement = document.createElement('p');
        decFactorElement.textContent = decFactor;
        cell.appendChild(decFactorElement);

        cell = row.insertCell();

        let checkboxElement = document.createElement('input');
        checkboxElement.setAttribute('type', 'checkbox');
        cell.appendChild(checkboxElement);
    }

    function buy() {
        let boughtFurniture = [];
        let totalPrice = 0;
        let averageDecFactor = 0;
        let count = 0;

        let selectedFurnitures = Array.from(document.getElementsByTagName('tr'));

        for (let i = 2; i < selectedFurnitures.length; i++) {

            if (selectedFurnitures[i].children[4].children[0].checked) {
                count++;
                boughtFurniture.push(selectedFurnitures[i].children[1].textContent);
                totalPrice += Number(selectedFurnitures[i].children[2].textContent);
                averageDecFactor += Number(selectedFurnitures[i].children[3].textContent);
            }
        }

        averageDecFactor /= count;

        let output = document.getElementsByTagName('textarea')[1];

        output.value = `Bought furniture: ${boughtFurniture.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${averageDecFactor}`;
    }
}