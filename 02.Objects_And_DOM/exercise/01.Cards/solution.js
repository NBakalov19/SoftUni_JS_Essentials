function solve() {
    let cards = document.getElementsByTagName('img');
    let result = document.getElementById('result');
    let history = document.getElementById('history');

    let firstPlayerCard = 0;
    let secondPlayerCard = 0;
    let indexOfFirstPlayerCard = 0;
    let indexOfSecondPlayerCard = 0;

    let chosenCardFromFirstPlayer = false;
    let chosenCardFromSecondPlayer = false;


    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', function () {
            let chosenCard = cards[i];
            chosenCard.src = 'images/whiteCard.jpg';

            if (i < 8) {
                result.children[0].textContent = chosenCard.getAttribute('name');
                firstPlayerCard = Number(chosenCard.getAttribute('name'));
                indexOfFirstPlayerCard = i;
                chosenCardFromFirstPlayer = true;
            } else {
                result.children[2].textContent = chosenCard.getAttribute('name');
                secondPlayerCard = Number(chosenCard.getAttribute('name'));
                indexOfSecondPlayerCard = i;
                chosenCardFromSecondPlayer = true;
            }

            if (chosenCardFromFirstPlayer && chosenCardFromSecondPlayer) {
                if (firstPlayerCard > secondPlayerCard) {
                    cards[indexOfFirstPlayerCard].style.border = '2px solid green';
                    cards[indexOfSecondPlayerCard].style.border = '2px solid red';
                } else {
                    cards[indexOfSecondPlayerCard].style.border = '2px solid green';
                    cards[indexOfFirstPlayerCard].style.border = '2px solid red';
                }

                chosenCardFromFirstPlayer = false;
                chosenCardFromSecondPlayer = false;

                history.textContent += (`[${firstPlayerCard} vs ${secondPlayerCard}] `);
                result.children[0].textContent = '';
                result.children[2].textContent = '';
            }
        })
    }
}