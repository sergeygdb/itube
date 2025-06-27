import axios from 'axios';
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();


const API_KEY = process.env.YOUTUBE_API_KEY;

async function searchYouTube(query) {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                q: query,
                type: 'video', 
                key: API_KEY,
                maxResults: 5, 
            },
        });

        const videoResults = response.data.items.map(item => ({
            title: item.snippet.title,
            videoID: item.id.videoId,
            publishDate: item.snippet.publishedAt,
        }));
        return videoResults;

    } catch (error) {
        console.error(colors.red('Error fetching data from YouTube API'));
        return [];
    }
}



export { searchYouTube }; 