var express = require('express');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos/import', function (req, res) {
  acc = '';
  req.on('data', function(chunk) {
    acc += chunk;
  })
  req.on()
  console.log('passed to SERVER: ', acc);
  //req.on('end', res.send(acc));
  res.send(acc);
});

app.get('/repos', function (req, res) {
  console.log('reached server');
  //console.log('request: ', req);
  //console.log('response: ', res);
  res.send('GET req received at server');
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

