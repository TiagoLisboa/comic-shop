import axios from 'axios';

const ts = '1';
const publicKey = '47c0f2baada149f9713fdad25c032d44';
const hash = '41b873d449378a2010af0d816ce84d0c';

// TODO: use real timestamp and get public and private
// api keys from configurations, in order to use md5

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  ts,
});

api.interceptors.request.use(function(config) {
  config.params = {
    ...config.params,
    ts,
    apikey: publicKey,
    hash,
  };

  return config;
});
export default api;
