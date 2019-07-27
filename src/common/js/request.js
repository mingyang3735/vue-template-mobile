import axios from 'axios'
import { Toast } from 'vant'
import { sessionStorage } from './storage'
import router from '../../router'

let request = axios.create({
  baseURL: '/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
request.interceptors.request.use(config => {
  let token = null
  try {
    token = sessionStorage.getItem('userInfo').token
  } catch (error) {
    console.log(error)
  }
  config.headers.Authorization = token
  // loading
  return config
}, error => {
  return Promise.reject(error)
})
request.interceptors.response.use(data => {
  if (+data.data.status === 201) {
    sessionStorage.removeItem('userInfo')
    router.push('/login')
  } else if (+data.data.status !== 1) {
    Toast(data.data.message)
  }
  return data.data
}, error => {
  Toast('请求错误')
  return Promise.reject(error)
})

export default {
  post (url, data) {
    return request.post(url, data)
  },
  put (url, data) {
    return request.put(url, data)
  },
  delete (url, data) {
    return request.delete(url, {
      params: data
    })
  },
  get (url, data) {
    return request.get(url, {
      params: data
    })
  }
}
