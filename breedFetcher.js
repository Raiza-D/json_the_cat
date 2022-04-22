const request = require("request");

let userInput = process.argv.slice(2);
// console.log(userInput);

request(
  "https://api.thecatapi.com/v1/breeds/search?q=" + userInput,
  (error, response, body) => {
    if (error) {
      console.log("There was an error while fetching: ", error);
      return;
    }
    const data = JSON.parse(body);
    // console.log(data);
    const catDescription = data[0].description;
    console.log(catDescription);
  }
);
