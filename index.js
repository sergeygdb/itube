import readlineSync from 'readline-sync';
import colors from 'colors';
import dotenv from 'dotenv';
import open from 'open';

import { createIndexHTMLFile } from './makeHTML.js';
import { filterYoutubeSearchWithApiCall } from './openai.js'
import { searchYouTube } from './youtube.js'

dotenv.config();


async function main() {
    console.log(colors.bold.green("Welcome! Type 'exit' at any time to close the application."));

    while (true) {
        const userInput = readlineSync.question(colors.yellow('Write your youtube query : '));

        try {
            if (userInput.toLowerCase() === 'exit') {
                return;
            }

            let youtubeSearch = await searchYouTube(userInput);


            // condition on the youtube search for later 
            if (youtubeSearch.length > 1) {
                youtubeSearch = await searchYouTube(userInput);
            }

            const data = await filterYoutubeSearchWithApiCall(youtubeSearch);


            if (data.length < 2) {
                console.log(colors.red("Search is not IT related."));
            } else {
                await createIndexHTMLFile(data);
                await open('index.html');
            }


        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();