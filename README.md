# Tetron
**My Personal AI Chatbot**

Tetron is a **powerful AI chatbot** designed to assist users in a variety of ways. It can engage in casual conversations, detect sentiment in user input, respond to greetings, answer questions, generate images based on user requests, and even learn from previous interactions. Tetron is designed to work entirely in the **browser**, with all functionalities running in **HTML**, **CSS**, and **JavaScript** without the need for a backend server.

## Features:
- **Sentiment Analysis**: Detects whether the tone of the user's message is positive, negative, or neutral.
- **Intent Detection**: Recognizes common intents such as greetings, farewells, questions, gratitude, and image requests.
- **Emotion Responses**: Responds to users based on the emotional tone of their input.
- **Image Generation**: Simulated image generation using placeholders or text-based images.
- **Memory**: Stores user interactions using `localStorage` and learns from previous inputs.
- **Customizable**: Easy to modify and extend for new features and use cases.

## How to Use:
1. Clone or download the project files.
2. Open `index.html` in a web browser (preferably Chrome).
3. Type a message in the input box and click the "Send" button to start chatting with Tetron.
4. Enjoy personalized conversations with Tetron!

## External Data Access:
- Currently, Tetron uses **JavaScript** to handle inputs and generate responses.
- **Web scraping** directly from the browser is not possible due to **CORS** restrictions. However, external data can be accessed via **APIs** (e.g., weather, news, or other information).

## Future Improvements:
- **Image generation** using real-time APIs such as **DALL·E** or **Stable Diffusion**.
- **Machine Learning**: Integrate machine learning models for more advanced conversational capabilities.
- **Backend support**: Add server-side support to allow for real-time data fetching and scraping.
- **Multi-language support**: Expand Tetron's capabilities to converse in different languages.

## License:
MIT License
