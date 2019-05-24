//import categories from './data/vasca.js';

const categories = require('./data/vasca.js');
const request = require('request');
const needle = require('needle');
const cheerio = require('cheerio');
const fs = require('fs');

const underCategory = categories.map(function (obj) {
  let url = obj["href"];
  console.log(url)
  request(url, function(error, res, body) {
    if(error) {
      return {"error": error}
    }
    else {
      const $ = cheerio.load(body);
      //console.log(body)
      const result = []
      $('a.smalltext').each(function() {
        //console.log($(this).attr('title'));
        result.push({
          title: $(this).attr('title'),
          href: $(this).attr('href')
        })
      })
      return result;
    }
  })
})

fs.writeFileSync('./data/underCategory.json', JSON.stringify(underCategory));

console.log(underCategory.length);