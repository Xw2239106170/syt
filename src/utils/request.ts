import axios from 'axios'
import router from '@/router'
import { ElNotification } from 'element-plus'
import { useUserStore } from '@/stores'

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 5000,
})

// 响应拦截器
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    // TODO 2. 携带token
    const userStore = useUserStore()
    if (userStore.token) {
      // 配置请求接口头
      config.headers.Authorization = userStore.token
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (res) {
    if (res.data.code === 1) {
      return res
    }
    ElNotification({
      title: '警告',
      message: res.data.msg || '服务器异常',
      type: 'warning'
    })
    return Promise.reject(res.data)
  },
  function (err) {
    if (err.response?.status === 401) {
      router.push('/login')
    }

    ElNotification({
      title: '警告',
      message: err.data.msg || '服务器异常',
      type: 'warning'
    })
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(err)
  }
)
