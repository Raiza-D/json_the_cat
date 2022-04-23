const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(URL, (error, response, body) => {
    // // Code for taking care of error if API is not working
    if (error) {
      // console.log("There was an error while fetching: ", error);
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    // Code to take care of if cat breed provided not found OR if none provided
    if (data[0] === undefined) {
      // console.log(`Breed not found: ${data[0]}. Enter a valid breed.`);
      callback(`${error} Breed not found: ${data[0]}. Enter a valid breed.`, null);
      return;
    }

    const catDescription = data[0].description;
    // console.log(catDescription);
    callback(null, catDescription);
  });
};

module.exports = { fetchBreedDescription };


