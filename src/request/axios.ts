import { store } from 'store/store'
import axios from 'axios'
import qs from 'qs'

// 请求超时的毫秒数(0 表示无超时时间)
axios.defaults.timeout = 30000

// 定义一个自定义HTTP状态码的错误范围，返回 `true`，promise 将被 resolve; 否则，promise 将被 rejecte
axios.defaults.validateStatus = (status) => status >= 200 && status <= 500 // 默认的

// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 凭证相关
    const isNotToken = (config.headers || {}).isToken === false // 当前请求是否不需要token
    const isConfigToken = (config.headers || {}).Authorization // 当前请求是否已配置了token
    if (!isNotToken && !isConfigToken) {
      const { token } = store.getState().account // token从store中获取
      if (!config.headers) config.headers = {}
      config.headers.Authorization = token
    }
    // get请求时params参数开启序列化
    if (config.method === 'get') {
      config.paramsSerializer = (params) => qs.stringify(params, { arrayFormat: 'repeat' })
    }
    return config
  },
  (error) =>
    // 对请求错误做些什么
    Promise.reject(error),
)

// 添加响应拦截器
axios.interceptors.response.use(
  (response) =>
    // 对响应数据做点什么
    response,
  (error) =>
    // 对响应错误做点什么
    Promise.reject(error),
)

export default axios
