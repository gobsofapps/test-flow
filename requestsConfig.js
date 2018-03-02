module.exports = {
  licenseRequest: {
    url: 'https://ca-dac-levio.demo.verified.me/dac/licenseRequest',
    body: {
      queryExpression: {
        type: 'and',
        expressions: [
          {
            type: 'select',
            name: 'bankInfo',
            fields: [
              'given_name',
              'family_name',
              'phone_number',
              'address',
              'birthdate',
              'email',
            ],
            fromDAType: [
              {
                name: 'vme://assets/foundationalIdentity',
                type: 'da',
              },
            ],
          },
        ],
      },
      displayText: {
        en: 'Please share your information with U.S. Bank',
        fr: 'French Display Text',
      },
      defaultLang: 'en',
      licenseNotificationUrl: 'https://usbankverified.herokuapp.com/api/licenseNotify',
      state: 'opaque state data',
    },
  },
  useLicenseRequest: {
    url: 'https://ca-dac-levio.demo.verified.me/dac/useLicense',
  },
};
