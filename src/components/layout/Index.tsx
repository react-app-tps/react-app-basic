import React from 'react'
import styled from 'styled-components'
import { MEDIA_BREAK_POINTS } from 'common/constants'
import Main from './Main'
import Header from './Header'

const Layout: React.FC = () => (
  <LayoutWrapper>
    <HeaderBox>
      <HeaderInner>
        <Header />
      </HeaderInner>
    </HeaderBox>
    <MainBox>
      <MainInner>
        <Main />
      </MainInner>
    </MainBox>
  </LayoutWrapper>
)
export default Layout
const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderBox = styled.div`
  width: 100%;
  background: #99a9bf;
`
const HeaderInner = styled.div`
  width: 100%;
  height: 72px;
  padding: 20px;
  box-sizing: border-box;
  @media (min-width: ${MEDIA_BREAK_POINTS.xxl}px) {
    width: ${MEDIA_BREAK_POINTS.xxl}px;
    margin: 0 auto;
  }
`
const MainBox = styled.div`
  flex: 1;
  width: 100%;
`
const MainInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #d3dce6;
  box-sizing: border-box;
  overflow-y: auto;
  @media (min-width: ${MEDIA_BREAK_POINTS.xxl}px) {
    width: ${MEDIA_BREAK_POINTS.xxl}px;
    margin: 0 auto;
  }
`
