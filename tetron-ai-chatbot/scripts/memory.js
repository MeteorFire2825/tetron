// memory.js

let memory = JSON.parse(localStorage.getItem('chatHistory')) || [];

function updateMemory(intent, message) {
    memory.push({ intent, message });
    localStorage.setItem('chatHistory', JSON.stringify(memory));
}

function getMemory() {
    return memory;
}
