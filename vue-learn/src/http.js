/*
* @Author: dothin
* @Date:   2017-05-12 23:38:35
* @Last Modified by:   dothin
* @Last Modified time: 2017-05-18 22:28:58
*/

import axios from 'axios'

// axios 配置
axios.defaults.baseURL = 'http://rapapi.org/mockjsdata/2535';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
          console.log(err)
         //return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {

        }
        console.log(error);//console : Error: Request failed with status code 402
        //return Promise.reject(error.response.data)
    });

export default axios;
