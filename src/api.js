import { config } from './config.js';
const axios = require('axios').default;

axios.defaults.baseURL = config.apiurl;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

var options = {
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Content-Type': 'application/json',
    'Authorization': '',
  },
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
};

var userId = 0;

export const isUserLogin = userId;

export const getLogin = async (dataTosend) => {
  let responseData = '';

  await axios.post('/users/login', dataTosend.body, options)
  .then(function (response) {
    console.log(response.data);
    responseData = response.data;
    localStorage.setItem('isLogin', true);
    userId = responseData._id;
  })
  .catch(function (error) {
    console.log('axios error', error);
    responseData = error;
  });

  return responseData;
};

export const userSignup = async (dataTosend) => {
  let responseData = '';

  await axios.post('/users/signup', dataTosend.body, options)
  .then(function (response) {
    console.log(response.data);
    responseData = response.data;
  })
  .catch(function (error) {
    console.log('axios error', error);
    responseData = error;
  });

  return responseData;
};

export const getUserData = async (dataTosend) => {
  let responseData = '';

  await axios.post('/users/userdetails', dataTosend, options)
  .then(function (response) {
    console.log(response.data);
    responseData = response.data;
  })
  .catch(function (error) {
    console.log('axios error', error);
    responseData = error;
  });

  return responseData;
};

export const getSocialogin = async (dataTosend) => {
  let responseData = '';

  await axios.post('/users/socialogin', dataTosend.body, options)
  .then(function (response) {
    console.log(response.data);
    responseData = response.data;
  })
  .catch(function (error) {
    console.log('axios error', error);
    responseData = error;
  });

  return responseData;
};




export const cleaarUser = () => {
  userId = 0;
  localStorage.setItem('isLogin', false);
}