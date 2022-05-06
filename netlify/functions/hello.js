import fetch from "node-fetch";

exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
