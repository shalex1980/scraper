//const request = require('request');
const needle = require('needle');
const cheerio = require('cheerio');
const URL = 'https://www.amazon.com/s?k=615650200320&ref=nb_sb_noss';

needle('post',URL)
  .then(response => {
    const $ = cheerio.load(response.body);

    $('.a-section .a-link-normal span').each(function() {
      console.log($(this).text());
    })
  })