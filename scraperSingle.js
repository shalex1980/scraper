const request = require('request');
const cheerio = require('cheerio');
const URL ='http://www.vascaaquariumsupply.com/Algone_Water_Clarifier_Nitrate_Remover_Over_110_p/ag01002.htm';

request(URL, function(err, response, body) {
  if(err) console.log('ERRROR')
  else{
    const $ = cheerio.load(body);
    console.log($('#v65-product-parent font span[itemprop="name"]').text())
    console.log($('#v65-product-parent span.product_code').text())
  }
})