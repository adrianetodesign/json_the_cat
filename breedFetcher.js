let input = process.argv[2];

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (err, response, body) => {
  if (err) {
    console.log(`Error: `);
    console.log(err);
  }
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log("I'm sorry, that breed is not found.");
  }
  if (data[0] !== undefined) {
    console.log(data[0].description);
  }
});
