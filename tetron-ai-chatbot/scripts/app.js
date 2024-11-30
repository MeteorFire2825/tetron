// app.js

document.getElementById('sendBtn').addEventListener('click', function() {
    const userMessage = document.getElementById('userInput').value;
    const botResponse = processUserInput(userMessage);

    // Update the chat display
    const chatDisplay = document.getElementById('chat-display');
    chatDisplay.innerHTML += `<div>User: ${userMessage}</div><div>Bot: ${botResponse}</div>`;
    document.getElementById('userInput').value = ''; // Clear input field
    chatDisplay.scrollTop = chatDisplay.scrollHeight; // Auto-scroll
});
