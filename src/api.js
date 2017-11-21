import axios from 'axios';
import config from './config';

// TODO: construct this based on environment
const BASE_URL = 'http://127.0.0.1:1337/';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Parse-Application-Id': config.parseAppId
  }
});

export const signup = (username, password) => instance.post('parse/users', {
  username,
  password
});

export const login = (username, password) => instance.get('parse/login', {
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

export const getTsLintSummary = (projectName) => instance.get('parse/classes/tsLintSummary', {
  params: {
    where: {
      projectName
    }
  }
});
export default {
  signup,
  login,
  upload,
  getTsLintSummary
}
