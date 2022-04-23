const request = require("request");

let userInput = process.argv.slice(2);
// console.log(userInput);

// let catApiUrl = "https://api.thecatapi.com/v1/breeds/search?q=";

const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + userInput;
// this works -- request("https://api.thecatapi.com/v1/breeds/search?q=" + userInput, (error));

// `${catApiUrl}${userInput}`

request(URL, (error, response, body) => {
    if (error) {
      console.log("There was an error while fetching: ", error);
      return;
    }
    // if (!URL) {
    //   console.log("Breed name not found. Enter another one.");
    //   return;
    // }
    const data = JSON.parse(body);

    if (data[0] === undefined) {
      console.log("Error found");
      return;
    }
    // console.log(data);
    const catDescription = data[0].description;
    console.log(catDescription);
  }
);
