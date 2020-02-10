import axios from 'axios';
import md5 from 'js-md5';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
});

/**
 * This defines an axios interceptor function for adding
 * api auth information to all requests.
 * @params {Object} config any Object
 * @returns {Object} the changed config
 */
function interceptor(config) {
  const ts = new Date().getTime();

  config.params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey),
  };

  return config;
}

api.interceptors.request.use(interceptor);
export default api;
