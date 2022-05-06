import fetch from "node-fetch";
import { DOMParser } from "xmldom";
import lcs from "node-lcs";

exports.handler = async function (event, context) {
    const podcastsRss = {
        "Middle Aged Developers": "https://anchor.fm/s/6cb3ad28/podcast/rss",
        "プログラム雑談": "https://anchor.fm/s/68ce140/podcast/rss",
    };

    const episodeUrl = event.queryStringParameters.episodeUrl;
    const episodeTitle = await fetch(episodeUrl)
          .then(res => res.text())
          .then(html => {
              const doc = new DOMParser().parseFromString(html, "text/html");
              return doc.getElementsByTagName("title")[0].textContent;
          })
    const podcast = Object.keys(podcastsRss).find(key => {
        const result = lcs(key, episodeTitle);
        if (result.sequence === key || result.sequence === episodeTitle) {
            return true;
        } else {
            return false;
        }
    });
    const doc = await fetch(podcastsRss[podcast])
          .then(res => res.text())
          .then(xml => {
              const doc = new DOMParser().parseFromString(xml, "text/xml");
              return doc;
          });
    const items = doc.getElementsByTagName("item");
    const item = Array.prototype.find.call(items, (item) => {
        const title = item.getElementsByTagName("title")[0].textContent;
        const result = lcs(episodeTitle, title);
        if (result.sequence === title || result.sequence === episodeTitle) {
            return true;
        } else {
            return false;
        }
    });
    const link = item.getElementsByTagName("link")[0].textContent;
    return {
        statusCode: 200,
        body: link,
        // body: JSON.stringify({ message: "Hello World" + title + " | " + link }),
    };
}
