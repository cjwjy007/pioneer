import axios from 'axios';
import store from '../store';


const baseURL = 'http://118.31.248.122/mockjsdata/2';

// 创建axios实例
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// request拦截器
service.interceptors.request.use(config => {
  // Do something before request is sent

  // if (store.state.auth.token) {
  //   service.defaults.headers.auth = store.state.auth.token;
  // }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  return Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log(res);
    return response;
  },
  error => {
    console.log('err' + error);// for debug
    return Promise.reject(error);
  }
)

export default service;
