const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const categories = require('./data/vasca.js');
const count = 0;

categories.forEach((item) => {
  request(item.href)
    .then((response) => {
      const $ = cheerio.load(response);
      const result = [];
      const resSet = new Set();
      $('a.smalltext').each(function() {
        resSet.add( $(this).attr('href') );
      });
      resSet.forEach(href => result.push(href));
      fs.appendFile('./data/underSetCategories.json', JSON.stringify(result));
    })
});


