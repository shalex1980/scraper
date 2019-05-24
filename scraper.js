const request = require('request');
const cheerio = require('cheerio');

const URL = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=" + 02888;

request(URL, function(error, response, body){
  if(!error) {
    const $ = cheerio.load(body),
      temperature = $("[data-variable='temperature'] .wx-value").html();
      console.log("Температура " + temperature + " градусов по Фаренгейту.");
  } else {
    console.log("Произошла ошибка: " + error);
  }
})