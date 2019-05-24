const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const URL = 'http://www.vascaaquariumsupply.com/';
const result = [];

request(URL, function(error, response, body) {
  if(error) {
    console.log('Error' , error);
  }
  else {
    //console.log(body);
    const $ = cheerio.load(body);
    $('.menu a').each(function() {
      result.push({
        text: $(this).text(),
        href: $(this).attr('href'),
        title: $(this).attr('title'),
      })
    });
  }
  console.log(result.length);
  fs.writeFileSync('./data/vasca.json', JSON.stringify(result));
});

