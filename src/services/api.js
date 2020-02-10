import axios from 'axios';
import md5 from 'js-md5';

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

// TODO: use real timestamp and get public and private
// api keys from configurations, in order to use md5

const api = axios.create({
  baseURL: process.env.REACT_APP_MARVEL_URL,
});

api.interceptors.request.use(function(config) {
  const ts = new Date().getTime();

  config.params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey),
  };

  return config;
});
export default api;
