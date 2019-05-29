const tress = require('tress');
const needle = require('needle');
const cheerio = require('cheerio');
const fs = require('fs');

const URL = 'http://www.vascaaquariumsupply.com/';

const q = tress(function(url, callback) {
  needle.get(url, function(err, res){
    if(err) throw err;

    const $ = cheerio.load(res.body);

    //product page

    if($('#v65-product-parent')) {
      //console.log(res.body);
       const $ = cheerio.load(res.body);
       const obj = {
          name: $('#v65-product-parent font span[itemprop="name"]').text(),
          product_code: $('#v65-product-parent span.product_code').text(),
        }
        fs.appendFile('./data/Merch.json', JSON.stringify(obj), function(err){
              console.log('!!!!', obj);
        })
    }
    $('.menu a').each(function() {
      q.push($(this).attr('href'))
    })
    $('a.smalltext').each(function() {
      q.push($(this).attr('href'))
    })
    $('.v65-productDisplay a.productnamecolor').each(function() {
      q.push($(this).attr('href'))
    })

    callback();
  })
}, 10);

q.push(URL);

