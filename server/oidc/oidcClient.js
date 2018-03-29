const { Issuer } = require('openid-client');
const uuidv1 = require('uuid/v1');
const config = require('./config');

class OidcClient {
  constructor() {
    if (!OidcClient.instance) {
      this.client = null;

      OidcClient.instance = this;
    }

    return OidcClient.instance;
  }

  set client(clientObj) {
    this._client = clientObj;
  }

  get client() {
    return this._client;
  }

  createClient() {
    Issuer.defaultHttpOptions = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } };

    const briidgeIssuer = new Issuer({
      issuer: config.client.issuer,
      authorization_endpoint: config.client.endpoints.authorization,
      token_endpoint: config.client.endpoints.token,
      userinfo_endpoint: config.client.endpoints.userinfo,
      jwks_uri: config.client.endpoints.jwks_uri,
    });

    this.client = new briidgeIssuer.Client({
      client_id: config.client.authCredentials.client_id,
      client_secret: config.client.authCredentials.client_secret,
      id_token_signed_response_alg: config.client.authCredentials.id_token_signed_response_alg,
      userinfo_signed_response_alg: config.client.authCredentials.userinfo_signed_response_alg,
    });
  }

  generateAuthorizationUrl() {
    return this.client.authorizationUrl({
      redirect_uri: config.client.redirect_uri,
      scope: config.client.authenticationRequest.scope,
      responce_mode: config.client.authenticationRequest.responce_mode,
      acr_values: config.client.authenticationRequest.acr_values,
      authMode: config.client.authenticationRequest.authMode,
      prompt: config.client.authenticationRequest.prompt,
      state: uuidv1(),
    }).replace(/%2B/g, '+');
  }
}

const instance = new OidcClient();

module.exports = instance;
