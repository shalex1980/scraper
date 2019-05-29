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
      const resMap = new Map();
      //===============
      /*if($('#v65-product-parent')) {
        console.log(results);
        results.push({
          name: $('.productnamecolorLarge span').text(),
          product_code: $('.product_code').text(),
        })
      }*/
      //=================
      $('a.smalltext').each(function() {
        resMap.set({
          [$(this).attr('title')] :
          $(this).attr('href')
        });
      });
      for(let entity of resMap) result.push(entity);
      fs.appendFile('./data/underCateg.json', JSON.stringify(result), function(err){
        console.log('!!!!', result.length);
        //count =+ count;
       // console.log('&', count);
      })
    })
});


