require('./check-versions')();

const config = require('../config');

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const opn = require('opn');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const history = require('connect-history-api-fallback');
const webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf');
const serverURL = 'https://infinite-wave-45756.herokuapp.com';


// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);
app.use(history());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

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

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000,
});

app.use(hotMiddleware);
app.use(devMiddleware);

// proxy api requests
Object.keys(proxyTable).forEach((context) => {
  let options = proxyTable[context];
  if (typeof options === 'string') {
    options = { target: options };
  }
  app.use(proxyMiddleware(options.filter || context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

let _resolve;
let _reject;
const readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve;
  _reject = reject;
});

let server;
const portfinder = require('portfinder');

portfinder.basePort = port;

console.info('> Starting dev server...');
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err);
    }
    process.env.PORT = port;
    const uri = `http://localhost:${port}`;
    console.info(`> Listening at ${uri}\n`);
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri);
    }
    server = app.listen(port);
    _resolve();
  });
});

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close();
  },
};
