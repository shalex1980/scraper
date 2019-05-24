const request = require('request');
const cheerio = require('cheerio');
const URL = "http://www.vascaaquariumsupply.com/Aquarium_Additives_s/115.htm";
/*
request(URL, function(err, res, body) {
  if(err) {
    console.log('Error',err);
  }
  else {
    console.log(body)
  }
})
*/
request
  .get(URL)
  .on('response', function(response) {
    console.log(response.body);
  })