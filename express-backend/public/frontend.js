const sendButton = document.getElementById('send-button')

sendButton.addEventListener('click', async (event) => {
    event.preventDefault()
    const message = document.getElementById('user-input').value.trim();
    if (message === '') return;
    displayMessage('user', message);
    document.getElementById('user-input').value = '';

    const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    })
    const data = await response.json()
    displayMessage('ai', data.response)

})


function displayMessage(sender, message) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = message;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

