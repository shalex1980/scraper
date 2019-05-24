const needle = require('needle');
const cheerio = require('cheerio');
const categories = require('./data/vasca.js');

const underCategories = categories.map(function(obj) {
  const result = []
  needle(obj.href)
    .then(function(response) {
      const $ = cheerio.load(response.body);
      $('a.smalltext').each( function(){
        result.push({
          title: $(this).attr('title'),
          href: $(this).attr('href')
        })
      });
      console.log(result);
      return result
    })
    .catch(function(error){
      console.log('error')
    })
})
console.log(underCategories.length);
console.log(underCategories);