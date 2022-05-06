exports.handler = async function (event, context) {
    let body = "";
    fetch("https://anchor.fm/s/6cb3ad28/podcast/rss")
        .then(res => res.text())
        .then(xml => {
            const parser = new DOMParser();
            return parser.parseFromString(xml, "text/xml");
        })
        .then(doc => {
            const items = doc.querySelectorAll("item");
            const titles = [];
            items.forEach(item => {
                titles.push(item.querySelector("title").textContent);
            })
            body = titles.join("\n");
        });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: body }),
    };
}
