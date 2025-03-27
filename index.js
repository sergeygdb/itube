import readlineSync from 'readline-sync';
import colors from 'colors';
import dotenv from 'dotenv';
import open from 'open';

import {createIndexHTMLFile} from './makeHTML.js'
dotenv.config();


async function main() {
    console.log(colors.bold.green('Welcome'));

    while (true) {
        const userInput = readlineSync.question(colors.yellow('Write your youtube query : '));

        try {
            if (userInput.toLowerCase() === 'exit') {
                return;
            }

            await createIndexHTMLFile(userInput)

            await open('index.html');

        } catch (error) {
            console.error(colors.red(error));
        }
    }
}

main();