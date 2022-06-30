import React from 'react'
import { useRoutes } from 'react-router-dom'
import styled from 'styled-components'

const Main: React.FC = () => {
  const isLogin = true
  const permissionRoutes = isLogin
    ? [
        { path: '/profile', element: <div>Profile Page</div> },
        { path: '/settings', element: <div>Settings Page</div> },
      ]
    : []
  const routes = useRoutes([
    { path: '/', element: <div>Home Page</div> },
    { path: '/list', element: <div>List Page</div> },
    { path: '/detail', element: <div>Detail Page</div> },
    ...permissionRoutes,
    { path: '*', element: <div>404</div> },
  ])
  return <MainWrapper>{routes}</MainWrapper>
}
export default Main
const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`
