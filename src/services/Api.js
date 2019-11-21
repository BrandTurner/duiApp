// TODO Abstract/refine into a yarn/npm package by extending this service into a
// full blown axios wrapper
// Resources
// -- https://github.com/zackexplosion/axios-rest-wrapper/blob/master/index.js
// -- https://github.com/infinitered/apisauce
// -- https://github.com/eldomagan/axios-rest
// -- caching: https://github.com/AlbinoDrought/cachios
// https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb
import axios from 'axios';

const API_ROOT = process.emitWarning.URL || 'http://localhost:3000';
const TIMEOUT = 30000;

// TODO This should be defualt but allow option to pass content-type as parameter
const HEADERS = {
  'Content-Type': 'application/json',
  Accept        : 'application/json'
};

//

// TODO dummy, it's alredy using es6 syntax for defaults
class ApiService {
  constructor({ baseURL=API_ROOT, timeout=TIMEOUT, headers=HEADERS, auth }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);

    this.client = client;
  }

  handleSuccess(response) {
    if (process.env.NODE_ENV !== 'production') {
      console.debug('Request Successful!', response);
    }
    return response;
  }

  handleError(error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error('Axios request failed ):', error.config)

      if (error.response) {
        console.error('Status: ', error.response.status)
        console.error('Data: ', error.response.data)
        console.error('Headers: ', error.response.headers)
      } else {
        console.error('Error Message: ', error.message);
      }
    }
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then(response => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then(response => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then(response => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then(response => response.data);
  }

  delete(path) {
    return this.client.delete(path).then(response => response.data);
  }
}

export default ApiService;
