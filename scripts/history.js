// history.js

function logConversationHistory(userMessage, botResponse) {
    let history = getMemory();
    history.push({ userMessage, botResponse });
    localStorage.setItem('chatHistory', JSON.stringify(history));
}
