--Sports News Search Application--
This application allows users to search through sports news articles using TensorFlow.js and Universal Sentence Encoder for semantic search capabilities.

--Prerequisites--
- Node.js
- npm 
- Modern web browser (Chrome, Firefox, Safari, or Edge)

--Setup--
1. Create a project directory and copy the files:
- mkdir sports-news-search
- cd sports-news-search

2. Create a folder named public and place your index.html file inside it.

3. Create a data folder inside the public directory:
- mkdir public/data

4. Place your news dataset (in JSON format) in the public/data folder as allnews.json

5. Create an Express server (server.js) in your root directory:
const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

6. Initialise npm and install dependencies:
- npm init -y
- npm install express

--Running the Application--
1. Start the server:
- node server.js

2. Open your web browser and navigate to:
- http://localhost:3000

--Features--
- Semantic search using TensorFlow.js
- Date range filtering
- Dark/Light mode toggle
- Pagination of results
- Expandable article descriptions
- Results caching using IndexedDB
- Score-based result ranking
- Responsive design

--Usage--
- Wait for the initial data loading (embeddings will be cached)
- Enter your search query in the search box
- Optionally set a date range using the date filters
- Click "Search" or press Enter
- Use pagination controls to navigate through results
- Click "Show More" on any result to expand its description
- Use the dark mode toggle in the top right to change theme
