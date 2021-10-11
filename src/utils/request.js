import axios from 'axios';
import { getToken } from "./auth";

const instance = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' }
})

// 全局请求拦截，发送请求之前执行
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['authorization'] = 'Bearer' + getToken();
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 请求返回之后执行
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


/**
 * get请求
 * @param url 请求地址
 * @param params 查询条件，url参数
 * @returns {Promise<AxiosResponse<never>>}
 */
export function get(url, params) {
  return instance.get(url, {
    params
  })
}

/**
 * post请求
 * @param url 请求地址
 * @param data 数据
 * @returns {Promise<AxiosResponse<*>>}
 */
export function post(url, data) {
  return instance.post(url, data)
}

/**
 * put请求
 * @param url 请求地址
 * @param data 数据
 * @returns {Promise<AxiosResponse<*>>}
 */
export function put(url, data) {
  return instance.put(url, data)
}

/**
 * delete请求
 * @param url 请求地址
 * @returns {Promise<AxiosResponse<never>>}
 */
export function del(url) {
  return instance.delete(url)
}