var express = require('express');
var request = require('request');

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
    request.get('https://api.github.com/', function(error, response, body) {
      console.error(error);


    });
    res.end(acc);
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

};