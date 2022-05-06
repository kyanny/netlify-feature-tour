import fetch from "node-fetch";
import { DOMParser } from "xmldom";
import lcs from "node-lcs";

const episodeTitle = await fetch("https://open.spotify.com/episode/0LlLUPkyPE78mRppvLn3oM?si=Yok3ZjgCTVGdhJrNotl5tg")
      .then(res => res.text())
      .then(html => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const title = doc.getElementsByTagName("title")[0].textContent;
          return title;
      })
console.log(episodeTitle);

fetch("https://anchor.fm/s/6cb3ad28/podcast/rss")
    .then(res => res.text())
    .then(xml => {
        const doc = new DOMParser().parseFromString(xml, "text/xml");
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
        const title = item.getElementsByTagName("title")[0].textContent;
        const link = item.getElementsByTagName("link")[0].textContent;
        console.log([title, link]);
    });
