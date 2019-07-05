const fetchModule = require('./breedFetcher')

breed = process.argv[2];

fetchModule.fetchBreedDescription(breed, (error, description) => {
  if (error) {
    console.log('error is ', error);
  } else {
    console.log(description);
  }
});