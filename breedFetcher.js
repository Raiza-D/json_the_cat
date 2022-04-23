const request = require("request");

let userInput = process.argv.slice(2);

let catApiUrl = "https://api.thecatapi.com/v1/breeds/search?q=";

request(`${catApiUrl}${userInput}`, (error, response, body) => {
  // Code for taking care of error if API is not working
  if (error) {
    console.log("There was an error while fetching: ", error);
    return;
  }
  const data = JSON.parse(body);

  // Code to take care of if cat breed provided not found OR if none provided
  if (data[0] === undefined) {
    console.log(`Breed not found: ${data[0]}. Enter a valid breed.`);
    return;
  }

  const catDescription = data[0].description;
  console.log(catDescription);
});
