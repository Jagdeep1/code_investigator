import axios from 'axios';
import config from './config';

// TODO: construct this based on environment
const BASE_URL = 'http://10.30.72.252:1337/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Parse-Application-Id': config.parseAppId
  }
});

export const signup = (username, password) => instance.post('api/users', {
  username,
  password
});

export const login = (username, password) => instance.get('api/login', {
  params: {
    username,
    password
  }
});

export const upload = (files) => {
  var data = new FormData();
      data.append('foo', 'bar');
      data.append('src', files[0]);
 return instance.post('/upload',data);
}

export default {
  signup,
  login,
  upload
}
