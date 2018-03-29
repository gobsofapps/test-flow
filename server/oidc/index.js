const express = require('express');
const oidcClient = require('./oidcClient');
const config = require('./config');

const oidcRouter = express.Router();

function getUserInfo(tokenSet) {
  return oidcClient.client.userinfo(tokenSet.access_token, { verb: 'post' });
}

function getTokens(authCode) {
  return oidcClient.client.grant({
    grant_type: config.client.tokensRequest.grant_type,
    code: authCode,
    redirect_uri: config.client.redirect_uri,
    username: config.client.authCredentials.client_id,
    password: config.client.authCredentials.client_secret,
  });
}

oidcRouter.post('/oidc/authorize', (req, res) => {
  const authorizeURL = oidcClient.generateAuthorizationUrl();

  res.status(200).send(authorizeURL);
});

oidcRouter.post('/oidc/get-user', (req, res) => {
  getTokens(req.body.code)
    .then(tokensResponse => getUserInfo(tokensResponse))
    .then(userInfo => res.status(200).send(userInfo))
    .catch(error => console.log(error));
});

module.exports = oidcRouter;
