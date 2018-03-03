const express = require('express');
const rp = require('request-promise');
const requestsConfig = require('../requestsConfig');

const router = express.Router();
const postRequestOptions = {
  method: 'POST',
  json: true,
};
const redirectURL = process.env.NODE_ENV === 'development' ? 'https://bb98971f.ngrok.io' : 'https://usbankverified.herokuapp.com';
let licenseID;

router.post('/api/licenseRequest', (req, res) => {
  rp(Object.assign(
    {},
    postRequestOptions,
    { uri: requestsConfig.licenseRequest.url, body: requestsConfig.licenseRequest.body }
  ))
    .then((licenseRequestResponse) => {
      res.status(200).send(licenseRequestResponse);
    }).catch((error) => {
      console.log(error);
    });
});

router.post('/api/licenseNotify', (req, res) => {
  licenseID = req.body.license;
  const respondURL = { url: 'usbankverified://open.my.app?url_launch=' + redirectURL + '/user-verified' };
  res.setHeader('Content-Type', 'application/json');

  console.log(respondURL);

  res.status(200).send(JSON.stringify(respondURL));
});

router.post('/api/get-user', (req, res) => {
  rp(Object.assign(
    {},
    postRequestOptions,
    {
      uri: requestsConfig.useLicenseRequest.url,
      body: { license: licenseID, includeServiceResponces: true }
    }
  ))
    .then((useLicenseResponse) => {
      res.status(200).send(useLicenseResponse.assets[0].data);
    }).catch((error) => {
      console.log(error);
    });
});


module.exports = router;
