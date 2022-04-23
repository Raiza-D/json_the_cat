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

/* As per mentor:
If you want to use and print the console log messages of within if statements
in the breedFetcher.js file, you'd have to remove the second parameter for
fetchBreedDescription function. This leaves it with only one argument -- the breedName.
How I had it before was not technically wrong. It's just not the right way for
this assignment. Assignment requests to use the callback function of
fetchBreedDescription.
*/

