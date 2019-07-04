const breed = process.argv[2];
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for requested homepage.
  //console.log(typeOf(body));
  if (error) {
    typeof(error);
    throw 'error is: ', error;
  }
  if (!breed) {
    throw 'Please enter breed name after breedFetcher.js';
  }
  if (body === '[]') {
    throw 'Breed not found!';
  }
  //console.log(typeof body);
  const data = JSON.parse(body);
  //console.log(data, typeof data);
  console.log("*******************");
  console.log(data[0]['description']);
});