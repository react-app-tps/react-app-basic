/*
 * @Author: friendlysxw
 * @Date: 2021-03-26 11:46:28
 * @LastEditTime: 2022-07-01 02:22:40
 * @LastEditors: shixuewen friendlysxw@163.com
 * @Description: 登陆相关接口
 * @FilePath: \tp-vue2\src\api\login.js
 */

import qs from 'qs'
import request from 'request/axios'

export function login(params: any) {
  const dataObj = qs.stringify(params)
  return request({
    url: '/auth/oauth/token',
    method: 'post',
    headers: {
      isToken: false,
      'TENANT-ID': 1,
      Authorization: 'Basic cGlnOnBpZw==',
    },
    data: dataObj,
  })
}
export const logout = () =>
  request({
    url: '/auth/token/logout',
    method: 'delete',
  })
