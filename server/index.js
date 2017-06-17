var express = require('express');
var request = require('request');
var githubToken = require('../github-config').githubToken;
var username = require('../github-config').username;

var options = {
  method: 'GET',
  headers: {
    Authorization: `token ${githubToken}`,
    'User-Agent': username
  }
};

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res, next) {
  let userInput = '';
  req.on('error', function(err) {
    console.error(err);
  }).on('data', function(chunk) {
    userInput += chunk;
  }).on('end', function() {
    userInput = userInput.toString();
    console.log('userInput after req.on end: ', userInput);
    options.url = `https://api.github.com/users/${userInput}/repos`;
      // request(options, `https://api.github.com/?access_token=${githubToken}`,
    console.log('options: ', options);
    request(options, function(error, response, body) {
      if (error) { console.error('error: ', error); }
      body = JSON.parse(body);
      for (key of body) {
        console.log('key: ', key);
      }
      
      // console.log('body', body);
    });
    res.send(userInput);
  });


  // request.on('error', function(err) {
  //   console.error(err);
  // }).on('data', function(chunk) {
  //   body.push(chunk);
  // }).on('end', function() {
  //   body = Buffer.concat(body).toString();

  // console.log('acc after req.on(end): ', acc);
  //res.send(acc);
  // .then(function() {
  // });
  //   next(acc);
  // },
  // function(req, res, next) {
});

app.get('/repos', function (req, res) {
  console.log('reached server');
  res.send('GET req received at server');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


//GITHUB API HELPER FUNCTIONS
//send request to github api for username and possibly other data

const getUserReposFromGitHub = function(username) {
  request.get('https://api')
};