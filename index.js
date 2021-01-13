
var myArgs = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');

let breedName  = myArgs[0]

fetchBreedDescription(breedName, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });

