import { writeFile } from 'fs/promises';


async function createIndexHTMLFile(data) {
    const filePath = "index.html";
    const contentBegin = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>YouTube Video Player</title><style>body, html {margin: 0; padding: 0; height: 100%;} iframe {border: none; width: 100%; height: 100%;}</style></head><body>'

    const publishDateList = data.map(item => item.publishDate);
    const videoIDList = data.map(item => item.videoID);


    const iframes = publishDateList.map((item, index) => {
        return '<p>' + item.substring(0, 10) + '</p><iframe width="560" height="315" src="https://www.youtube.com/embed/' + videoIDList[index] + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
    })


    const iframesJoined = iframes.join(' ');

    const contentEnd = '</body></html>'

    const contentFull = contentBegin + iframesJoined + contentEnd;
    try {
        await writeFile(filePath, contentFull, "utf8"); // Overwrites by default
    } catch (error) {
        console.error("Error writing file:", error);
    }
}

export {createIndexHTMLFile};