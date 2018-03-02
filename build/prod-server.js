const path = require('path');
const express = require('express');
const request = require('request');
const http = require('http');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');
const app = express();
const api = require('../api');

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(api);


app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, function() {
  console.info('Our app is running on http://localhost:' + port);
});

