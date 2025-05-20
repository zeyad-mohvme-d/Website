document.addEventListener('DOMContentLoaded', function () {
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messageArea = document.getElementById('messageArea');

    // Function to add a new message
    function addMessage(text, isSent = true) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isSent ? 'sent' : 'received');
        messageDiv.textContent = text;
        messageArea.appendChild(messageDiv);

        // Scroll to the bottom of the chat
        messageArea.scrollTop = messageArea.scrollHeight;

        // Clear the input field
        messageInput.value = '';
    }

    // Function to handle sending a message and auto-reply
    function handleSend() {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText); // Add user's message
            setTimeout(() => {
                addMessage("please wait about an hour and your question will be answered", false); // Add default reply
            }, 500); // Short delay for realism
        }
    }

    // Send message when button is clicked
    sendButton.addEventListener('click', handleSend);

    // Send message when Enter key is pressed
    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
});