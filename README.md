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

## Enabling API Keys

### 1. OpenAI API Key

To use the OpenAI API, you must create an API key and ensure billing is enabled:

Go to https://platform.openai.com/account/api-keys.

Log in or sign up for an OpenAI account.

Navigate to https://platform.openai.com/account/billing.

Add a payment method and deposit at least $5 to activate API access (this is required for all new accounts).

Once billing is set up, return to the API Keys page and click Create new secret key.

Copy the key and paste it into your .env file

### 2. YouTube Data API Key

To get a YouTube API key:

Go to the Google Cloud Console : https://console.cloud.google.com/

Navigate to APIs & Services > Library.

Search for YouTube Data API v3 and click Enable.

Go to Credentials.

Click Create Credentials > API key.

Copy the generated key and add it to your .env file

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

## Demo

A quick Demo of the app can be found on my linkedin profile : 

https://www.linkedin.com/posts/sergey-popov-ab0258201_just-finished-the-first-version-of-itube-activity-7344518662235516928-4Cp0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADN4-SQB6RO6nOaLfHa15shySFrD6qhfyg4


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