const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    if (err) {
      return callback(err, null);
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      return callback(new Error("Breed not found"), null);
    }
    if (data[0] !== undefined) {
      return callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };