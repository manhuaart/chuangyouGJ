
import axios from 'axios'

import {
  Message,
} from 'element-ui'
const ConfigBaseURL = 'http://192.168.1.110' //默认路径，这里也可以使用env来判断环境

//使用create方法创建axios实例
export const Service = axios.create({
  timeout: 5000, // 请求超时时间
  baseURL: ConfigBaseURL,
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'token': ''
  }
})
// 添加请求拦截器
Service.interceptors.request.use(config => {
  
  // console.log(config)
  if (localStorage.token) {
    config.headers['token'] = localStorage.token
  }
  return config
})
// 添加响应拦截器
Service.interceptors.response.use(response => {
  console.log(response)
  if (response.status == 200) {
    return response.data
  } else {
    this.$router.push('/pages/login')
  }
 

}, error => {
  console.log('error', error)
  const msg = error.Message !== undefined ? error.Message : ''
  Message({
    message: '网络错误' + msg,
    type: 'error',
    duration: 3 * 1000
  })

  return Promise.reject(error)
})
