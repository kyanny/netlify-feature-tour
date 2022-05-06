import fetch from "node-fetch";
console.log(1);

exports.handler = async function (event, context) {
    console.log(2);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
}
