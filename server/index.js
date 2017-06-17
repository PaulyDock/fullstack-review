var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var Repo = require('../database/index');
// var MongoClient = require('mongodb').MongoClient;
var githubToken = require('../github-config').githubToken;
var username = require('../github-config').username;

var options = {
  method: 'GET',
  headers: {
    Authorization: `token ${githubToken}`,
    'User-Agent': username
  }
};

var uri = "mongodb://127.0.0.1:27017"

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
    options.url = `https://api.github.com/users/${userInput}/repos`;

    //var db = mongoose.connection;
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //   console.log('connected to db!!');
    // });


    request(options, function(error, response, body) {
      if (error) { console.error('error: ', error); }
      body = JSON.parse(body);
      var curRepo;
      for (repo of body) {
        curRepo = new Repo(repo);
        curRepo.save(function (err, repository) {
          if (err) return console.error(err);
          console.log('curRepo.name: ', repository.name, ', owner: ', repository.owner.login);
        });
      }
    });
    res.send(userInput);
  });

});

app.get('/repos', function (req, res) {
  Repo.find(function (err, repos) {
    if (err) return console.error(err);
    res.send(repos);
  });
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