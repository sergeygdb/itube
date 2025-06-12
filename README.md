# YouTube IT Results Filter

This Node.js project uses the **YouTube Search API** and **OpenAI's API** to filter search results, ensuring that **only IT-related content** is returned to the user.

The application fetches YouTube search results for a given query and uses the OpenAI API to analyze and filter the results, displaying only those relevant to **information technology (IT)**.

---

## Features

- Uses YouTube Search API to fetch video results
- Filters content using OpenAI (e.g., GPT-4) to keep only IT-related videos
- Simple command-line or API interface (customizable)

---

## Getting Started

### Prerequisites

- Node.js
- npm
- OpenAI API key
- YouTube Data API key

---

## Installation

Clone the repository:

```bash
git clone https://github.com/sergeygdb/youtube-filter.git
cd youtube-filter
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file in the root directory:

bash
Copy
Edit
touch .env
Add the following to your .env file:

env
Copy
Edit
OPENAI_API_KEY=your_openai_api_key
YOUTUBE_API_KEY=your_youtube_api_key

Replace your_openai_api_key and your_youtube_api_key with your actual keys.

## Usage

To run the app:

bash
Copy
Edit
node index.js
You'll see:

yaml
Copy
Edit
Welcome
Write your YouTube query:
Type your search (e.g. cloud computing basics), and after a short delay, a new tab in your default browser will open displaying 5 YouTube results filtered to show only IT-related content.
