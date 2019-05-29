const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const URL = 'http://www.vascaaquariumsupply.com/Aquarium_Additives_s/115.htm';
const result = [];
request(URL)
  .then(function(response) {
    const $ = cheerio.load(response);
    $('a.smalltext').each(function() {
      console.log($(this).attr('title'), $(this).attr('href'));
      result.push({
        title : $(this).attr('title'), 
        href: $(this).attr('href')
      });
      //result.set($(this).attr('title'),$(this).attr('href'));
      //return result
   })
  })
  .then(function(resp) {
    console.log(resp);
  })
  .catch(function(err){
    console.log(err);
  })
//console.log(result);