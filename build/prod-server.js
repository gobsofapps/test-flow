const path = require('path');
const express = require('express');
const request = require('request');
const http = require('http');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const app = express();
const serverURL = 'https://infinite-wave-45756.herokuapp.com';

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.use('/login-qr', function(req, res, next) {
  request({
    url: serverURL + '/v2/login',
    method: "POST",
  }, function(error, response, body) {
    if (body) {
      console.log(body);
      res.status(200).send(body);
    }
    if (error) {
      res.sendStatus(404);
    }
  });
});

app.use('/register-qr', function(req, res, next) {
  request({
    url: serverURL + '/v2/register',
    method: "POST",
  }, function(error, response, body) {
    if (body) {
      console.log(body);
      res.status(200).send(body);
    }
  });
});

app.use('/receiveSignInResponse', function(req, res, next) {
  request({
    url: serverURL + '/v2/poll?state=' + req.body.state,
    method: "POST",
  }, function(error, response, body) {
    if (body) {
      res.status(200).send(body);
    }
    if (error) {
      res.sendStatus(404);
    }
  });
});

app.use('/receiveSignUpResponse', function(req, res, next) {
  request({
    url: serverURL + '/v2/poll?state=' + req.body.state,
    method: "POST",
  }, function(error, response, body) {
    if (body) {
      res.status(200).send(body);
    }
    if (error) {
      res.sendStatus(404);
    }
  });
});

app.use('/get-user', function(req, res, next) {
  request({
    url: serverURL + '/v2/userdata?state=' + req.body.sessionState,
    method: "POST",
  }, function(error, response, body) {
    if (body) {
      res.status(200).send(body);
    }
    if (error) {
      res.sendStatus(404);
    }
  });
});

app.listen(port, function() {
  console.info('Our app is running on http://localhost:' + port);
});

