function solve() {

    let siteElements = document.getElementsByClassName('link-1');

    for (const siteElement of siteElements) {

        siteElement.addEventListener('click', (evt => {
            let currentTarget = evt.currentTarget;
            let paragraphElement = currentTarget.getElementsByTagName('p')[0];

            let text = paragraphElement.textContent;
            let textParts = text.split(' ');
            let clicks = Number(textParts[1]);
            clicks++;
            textParts[1] = clicks.toString();

            paragraphElement.textContent = textParts.join(' ');
        }))
    }
}