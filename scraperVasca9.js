const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const URL = 'http://www.vascaaquariumsupply.com/';


request(URL).
  then(response => {

    const $ = cheerio.load(response);
    const result = new Map();

     if($('#v65-product-parent')) {
        result.set(
          $('.productnamecolorLarge span').text(),
          $('.product_code').text()
          )
      }

  })

  function Request( href) {
    request(href)
      .then(response => {
        const $ = cheerio.load(response);
        const obj = {}
        if($('#v65-product-parent')) {
          obj.name: $('.productnamecolorLarge span').text();
          obj.product_code: $('.product_code').text();
          fs.appendFile('./data/Merch.json', JSON.stringify(obj), function(err){
            console.log('!!!!', obj);
        }
        else {

        }

      })
  }
