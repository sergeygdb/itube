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

``` bash
git clone https://github.com/sergeygdb/itube.git
cd itube
```
Install dependencies:

``` bash
npm install
```

Create a .env file in the root directory:

``` bash
touch .env
```

Add the following to your .env file:

``` env
OPENAI_API_KEY=your_openai_api_key
YOUTUBE_API_KEY=your_youtube_api_key
```

Replace your_openai_api_key and your_youtube_api_key with your actual keys.

## Usage

To run the app:

``` bash
node index.js
```

You'll see:

``` yaml
Welcome! Type 'exit' at any time to close the application.
Write your YouTube query:
```
Type your search (e.g. cloud computing basics), and after a short delay, a new tab in your default browser will open displaying 5 YouTube results filtered to show only IT-related content.


## Quick Launch via Batch File

To make launching the app easier, you can use a Windows batch file.


### Step 1: Create itube.bat

In the root directory of your project, create a file named itube.bat with the following contents:

``` bat
@echo off
cd /d "C:\your\path"
npm run start
pause
```

Make sure the path in the script matches your actual project folder location.

### Step 2: Add itube.bat to the System PATH

To be able to run itube.bat from anywhere in the command prompt:

Copy itube.bat to a folder you control (e.g., C:\Scripts).

Press Win + R, type sysdm.cpl, and hit Enter.

Go to the Advanced tab and click on Environment Variables.

Under System variables, find the Path variable and click Edit.

Click New, then add the path to the folder containing your itube.bat (e.g., C:\your\path\itube.bat).

Click OK to save and close all dialogs.


**Now, you can open any command prompt and simply type:**

``` bash
itube
```