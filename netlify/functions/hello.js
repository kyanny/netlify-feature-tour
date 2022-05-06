import fetch from "node-fetch";

exports.handler = async function (event, context) {
    let body = "";
    fetch("https://anchor.fm/s/6cb3ad28/podcast/rss")
        .then(res => res.text())
        .then(xml => {
            body = xml;
            const parser = new DOMParser();
            return parser.parseFromString(xml, "text/xml");
        });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" + body }),
  };
}
