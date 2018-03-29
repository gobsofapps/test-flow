module.exports = {
  client: {
    issuer: 'https://usex1fed1.securekey.com/federation',
    endpoints: {
      authorization: 'https://usex1fed1.securekey.com/federation/oidc/authorization',
      token: 'https://usex1fed1.securekey.com/federation/oidc/token',
      userinfo: 'https://usex1fed1.securekey.com/federation/oidc/userinfo',
      jwks_uri: 'https://usex1fed1.securekey.com/federation/oidc/jwks',
    },
    redirect_uri: process.env.NODE_ENV === 'development'
      ? 'https://eugenedev.ngrok.io/oidc-response'
      : 'https://usbankverified.herokuapp.com/oidc-response',
    authCredentials: {
      client_id: 'demo_rp',
      client_secret: 'IB36b2fOCu3Et8gJriTGtP68NRQc0Y5d',
      id_token_signed_response_alg: 'RS512',
      userinfo_signed_response_alg: 'RS512',
    },
    authenticationRequest: {
      scope: 'openid+foundation_identity',
      responce_mode: 'query',
      acr_values: 'loa1+',
      authMode: 'classic',
      prompt: 'select_account',
    },
    tokensRequest: {
      grant_type: 'authorization_code',
    },
  },
};
