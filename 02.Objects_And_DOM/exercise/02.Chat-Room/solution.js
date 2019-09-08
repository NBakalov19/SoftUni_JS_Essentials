function solve() {
    let myMessagesElement = document.getElementsByClassName('message my-message')[0];
    let btnElement = document.getElementById('send');
    let inputAreaElement = document.getElementById('chat_input');
    let chatMessagesArea = document.getElementById('chat_messages');

    btnElement.addEventListener('click', function () {
        let updatedMyMessagesElement = myMessagesElement.cloneNode(true);
        let inputAreaContent = inputAreaElement.value;

        if (inputAreaContent !== '') {
            updatedMyMessagesElement.textContent = inputAreaContent;
            chatMessagesArea.appendChild(updatedMyMessagesElement);
            inputAreaElement.value = '';
        }
    })
}
