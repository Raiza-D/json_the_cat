const { fetchBreedDescription } = require("./breedFetcher");

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log(desc);
  }
});

/* As per mentor:
If you want to use and print the console log messages of within if statements
in the breedFetcher.js file, you'd have to remove the second parameter for
fetchBreedDescription function. This leaves it with only one argument -- the breedName.
How I had it before was not technically wrong. It's just not the right way for
this assignment. Assignment requests to use the callback function of
fetchBreedDescription.
*/