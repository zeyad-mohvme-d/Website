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

    // Send message when button is clicked
    sendButton.addEventListener('click', function () {
        const messageText = messageInput.value.trim();
        if (messageText) {
            addMessage(messageText);
        }
    });

    // Send message when Enter key is pressed
    messageInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            const messageText = messageInput.value.trim();
            if (messageText) {
                addMessage(messageText);
            }
        }
    });

    // Simulate received message after 1-3 seconds
    setInterval(function () {
        const responses = [
            "Hello! How can I help you today?",
            "Could you explain your question in more detail?",
            "I'd be happy to help with that!",
            "Let me check that for you...",
            "That's an interesting question!"
        ];

        if (Math.random() > 0.7 && messageArea.lastElementChild &&
            messageArea.lastElementChild.classList.contains('sent')) {
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            setTimeout(() => addMessage(randomResponse, false), 1000 + Math.random() * 2000);
        }
    }, 1000);
});