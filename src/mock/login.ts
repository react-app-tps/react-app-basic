import Mock from 'mockjs'

export default () => {
  // 登入
  Mock.mock(/^\/auth\/oauth\/token(\\?.*|)$/, 'post', {
    access_token: 'f134a5f7-c5cb-438f-859a-623f6d96dd1a',
    token_type: 'bearer',
    refresh_token: '8c068ba2-eb9f-4513-9ac3-37c87dec55e7',
    user_info: {
      password: null,
      username: 'admin',
      id: 1,
      phone: '13800138000',
    },
  })

  // 登出
  Mock.mock(/^\/auth\/token\/logout(\\?.*|)$/, 'delete', {
    code: 0,
    msg: null,
    data: null,
  })
}
