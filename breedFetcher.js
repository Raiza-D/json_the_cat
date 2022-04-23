const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  request(URL, (error, response, body) => {
    // // Code for taking care of error if API is not working
    if (error) {
      // Invoke callback. 'desc' argument is null
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);

    // Code to take care of if cat breed provided not found OR if none provided
    if (data[0] === undefined) {
      // Invoke callback. 'desc' argument is null
      callback("Breed not found. Enter a valid breed.", null);
      return;
    }

    const catDescription = data[0].description;
    // Invoke callback. 'error' argument is null. 'desc' argument is breed's descripton
    // from CatAPI
    callback(null, catDescription);
  });
};

module.exports = { fetchBreedDescription };
