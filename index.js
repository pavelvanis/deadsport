
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://v3.football.api-sports.io/leagues',
  headers: {
    'x-rapidapi-key': '05479a07b0b89da61371fd98f7d2050f',
    'x-rapidapi-host': 'v3.football.api-sports.io'
  }
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (error) {
  console.log(error);
});