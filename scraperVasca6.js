const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'http://www.vascaaquariumsupply.com/Algone_Water_Clarifier_Nitrate_Remover_Over_110_p/ag01002.htm';
const result = [];//new Map();

request(URL, function(error, response, body){
  if(error){
    console.log('Error' , error);
  }
  else {
    const $ = cheerio.load(body);
    $('a.smalltext').each(function() {
      //console.log($(this).attr('title'), $(this).attr('href'));
      result.push({
        title : $(this).attr('title'), 
        href: $(this).attr('href')
      });
      //result.set($(this).attr('title'),$(this).attr('href'));
    })
  }
  console.log(result.length);
  fs.writeFileSync('./data/underCategory.json',JSON.stringify(result));
});



