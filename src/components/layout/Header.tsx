import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {
  const num = 1
  return (
    <HeaderWrapper>
      <HeaderLeft>Logo</HeaderLeft>
      <HeaderRight>Nav</HeaderRight>
    </HeaderWrapper>
  )
}
export default Header
const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderLeft = styled.div`
  display: flex;
`
const HeaderRight = styled.div`
  display: flex;
  justify-content: end;
`
