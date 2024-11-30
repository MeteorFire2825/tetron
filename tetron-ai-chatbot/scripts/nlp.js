// nlp.js

function detectIntent(message) {
    // Simple intent detection logic
    const greetings = ['hello', 'hi', 'hey'];
    const farewells = ['bye', 'goodbye', 'see you'];
    const imageRequests = ['show me a picture', 'generate an image', 'create a picture'];

    if (greetings.some(greeting => message.includes(greeting))) {
        return 'greeting';
    } else if (farewells.some(farewell => message.includes(farewell))) {
        return 'farewell';
    } else if (imageRequests.some(request => message.includes(request))) {
        return 'image_request';
    } else {
        return 'general_query';
    }
}

function analyzeSentiment(message) {
    // Simple sentiment analysis (mocked)
    if (message.includes("happy") || message.includes("great")) {
        return "positive";
    } else if (message.includes("sad") || message.includes("angry")) {
        return "negative";
    }
    return "neutral";
}
