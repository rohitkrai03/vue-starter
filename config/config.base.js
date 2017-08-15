const API_URL = '//app.example.com/api';
const API_VERSION = '1.0';
const BASE_URL = API_URL + '/' + API_VERSION;
const APP_URL = window.location.origin;

export function getURL(url) {
  return BASE_URL + url;
}

export default {
  appName: 'Default App',
  debug: false,
  sessionName: 'session_id',
  credential: 'same-origin',
};