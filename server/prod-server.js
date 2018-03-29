const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const history = require('connect-history-api-fallback');

const app = express();
const verifiedMeAPI = require('./api');
const oidcAPI = require('./oidc');
const oidcClient = require('./oidc/oidcClient');

// create OIDC Client
oidcClient.createClient();

app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(verifiedMeAPI);
app.use(oidcAPI);

app.use(express.static('dist'));

const port = process.env.PORT || 3000;

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(port, () => {
  console.info(`Our app is running on http://localhost: ${port}`);
});

