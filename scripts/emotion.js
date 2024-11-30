// emotion.js

function getEmotionResponse(sentiment) {
    if (sentiment === "positive") {
        return "I'm so glad you're feeling good!";
    } else if (sentiment === "negative") {
        return "Oh no, I'm sorry you're feeling that way.";
    } else {
        return "Got it! How can I assist you today?";
    }
}
