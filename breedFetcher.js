const request = require('request');

'https://api.thecatapi.com/v1/breeds/search?q=sib'

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (err, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
});
