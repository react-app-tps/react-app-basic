/*
 * @Author: shixuewen friendlysxw@163.com
 * @Date: 2022-07-01 10:08:56
 * @LastEditors: shixuewen friendlysxw@163.com
 * @LastEditTime: 2022-07-01 12:03:25
 * @FilePath: \react-app-basic\src\mock\mocks\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default [
  {
    url: /^\/auth\/token\/logout(\\?.*|)$/,
    method: 'delete',
    resp: {
      access_token: 'f134a5f7-c5cb-438f-859a-623f6d96dd1a',
      token_type: 'bearer',
      refresh_token: '8c068ba2-eb9f-4513-9ac3-37c87dec55e7',
      user_info: {
        password: null,
        username: 'admin',
        id: 1,
        phone: '13800138000',
      },
    },
  },
  {
    url: /^\/auth\/oauth\/token(\\?.*|)$/,
    method: 'post',
    resp: {
      code: 0,
      msg: null,
      data: null,
    },
  },
]
