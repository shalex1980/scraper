const request = require('request');
const option = {
  url: 'https://www.amazon.com/s?k=615650200320&ref=nb_sb_noss',
  encoding: 'utf8'
}

request(option, function(err, response, body) {
  if(err) console.log('ERRR');
  else {
    console.log(body);
  }
})