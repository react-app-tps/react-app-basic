/*
 * @Author: shixuewen friendlysxw@163.com
 * @Date: 2022-07-01 10:08:56
 * @LastEditors: shixuewen friendlysxw@163.com
 * @LastEditTime: 2022-07-01 13:52:50
 * @FilePath: \react-app-basic\src\mock\index.ts
 * @Description: mock 入口
 */

;(async () => {
  // 如果启动mock
  if (process.env.REACT_APP_MOCK === '1') {
    // 登陆相关接口拦截
    const mockGroup = await import('./mocks')
    const { default: Mock } = await import('mockjs')
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, mocks] of Object.entries(mockGroup)) {
      // eslint-disable-next-line no-restricted-syntax
      for (const mock of mocks as unknown as Array<any>) {
        Mock.mock(mock.url, mock.method, mock.resp)
      }
    }
  }
})()
export {}
