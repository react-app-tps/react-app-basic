import login from './login'

// 如果开发时使用开发环境，启动mockjs模拟数据
if (process.env.NODE_ENV === 'development') {
  login() // 登陆相关接口拦截
}
