const API_URL = '//app.example.com/api';
const API_VERSION = '2.0';
const BASE_URL = `${API_URL}/${API_VERSION}`;

exports.getURL = url => BASE_URL + url;

module.exports = {
  appName: 'Some App Specific Mode',
  otherAPI: exports.getURL('/something/')
};
