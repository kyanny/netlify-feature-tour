import fetch from "node-fetch";
import { JSDOM } from "jsdom";

fetch("https://anchor.fm/s/6cb3ad28/podcast/rss")
    .then(res => res.text())
    .then(xml => {
        const jsdom = new JSDOM();
        const parser = new jsdom.window.DOMParser();
        const dom = parser.parseFromString(xml, "text/xml");
        const items = dom.querySelectorAll("item");
        items.forEach(item => {
            console.log(item.querySelector("title").textContent);
            console.log(item.querySelector("link").textContent);
        })
    });
