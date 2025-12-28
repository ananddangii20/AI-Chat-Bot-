This is a simple AI-powered chat bot built using Node.js, Express, MongoDB, and the OpenAI API.
The application allows users to send messages and receive AI-generated responses in real time using a clean EJS-based UI.

Features

AI chat using OpenAI API

Real-time message handling

Simple chat UI using EJS, HTML, and CSS

Express backend

MongoDB for storing chat messages (optional / if used)

Environment variables for API key security

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Frontend: EJS, HTML, CSS
AI: OpenAI API
Environment variables: dotenv

Project Structure

project-folder
models
routes
views
public
.env
server.js
package.json

Installation and Setup



Navigate to the project folder
cd ai-chatbot-nodejs

Install dependencies
npm install

Create a .env file and add the following

PORT=8000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

Start the server
npm start

Open the app in your browser
http://localhost:8000

Environment Variables

PORT – Server port number
MONGO_URI – MongoDB connection string
OPENAI_API_KEY – OpenAI API key

Future Improvements

User authentication

Chat history per user

Streaming responses

UI improvements

License
This project is licensed under the MIT License.
