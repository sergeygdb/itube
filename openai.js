import { searchYouTube } from './youtube.js'; 
import OpenAI from "openai";
import colors from 'colors';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getYoutubeVideoTitles(objectVideos) {
    if (objectVideos.length > 0) {
        return objectVideos.map(item => item.title);
    } else {
        console.log(colors.red('No results found.'));
        return []; 
    }
}

async function callOpenAI(youtubeSearch) {

    const all = await searchYouTube(youtubeSearch);

    const titles = await getYoutubeVideoTitles(all);

    const messages = [
        { role: 'system', content: "I’ll send you a list of 5 YouTube video titles delimited by ||. For each title, return true if it’s in the IT, and false if it’s not. If unsure, return false. Example response: [true, false, true, false, true]"},
        { role: 'user', content: titles.join('||') }
    ];

    const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: messages,
    });

    const completionText = completion.choices[0].message.content;

    return {all, completionText};
}


async function filterYoutubeSearchWithApiCall(youtubeSearch){
    const data = await callOpenAI(youtubeSearch);
    return data.all.filter((_, index) => JSON.parse(data.completionText)[index]);
}


export {filterYoutubeSearchWithApiCall};



