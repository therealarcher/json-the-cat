// const breedName = process.argv[2];
const request = require('request');
//let breed;
//console.log(typeof(breed));
const fetchBreedDescription = function(breed, callback) {
  let err = '';
  if (!breed) {
    //throw 'Please enter breed name';
    err = 'Please enter breed name';
    callback(err);
  } else {
    request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for requested homepage.
    //console.log(typeOf(body));
    //console.log(error);
    
      if (error) {
        //typeof(error);
        //throw 'error is: ', error;
        err = (error);
        callback(err, null);
      } else if (body === '[]') {
        //throw 'Breed not found!';
        err = 'Breed not found.';
        callback(err, null);
      } else {
        //console.log(typeof body);
        const data = JSON.parse(body);
        //console.log(data, typeof data);
        //console.log("*******************");
        let description = data[0]['description'].trim();
        //console.log(typeof(description));
        callback(null, description);
        //console.log(description);
      }
    });
  }
};
module.exports = {fetchBreedDescription};

// OG code
// const breed = process.argv[2];
// const request = require('request');

// if (!breed) {
//   throw 'Please enter breed name after breedFetcher.js';
// }

// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//   //console.log('error:', error); // Print the error if one occurred
//   //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for requested homepage.
//   //console.log(typeOf(body));
//   if (error) {
//     typeof(error);
//     throw 'error is: ', error;
//   }
//   else if (body === '[]') {
//     throw 'Breed not found!';
//   } else {
//     //console.log(typeof body);
//     const data = JSON.parse(body);
//     //console.log(data, typeof data);
//     console.log("*******************");
//     description = data[0]['description']
//     console.log(description);
//   }
// });