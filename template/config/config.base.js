const API_URL = '//app.example.com/api';
const API_VERSION = '1.0';
const BASE_URL = `${API_URL}/${API_VERSION}`;

exports.getURL = url => BASE_URL + url;

module.exports = {
  appName: 'Default App',
  debug: false,
  sessionName: 'session_id',
  credential: 'same-origin',
  exampleAPI: exports.getURL('/thing/')
};
