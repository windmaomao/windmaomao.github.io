import React from 'react'
import styled from 'styled-components'

const LogoDiv = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 18px;
  letter-spacing: 1px;
`

const Logo = ({ text }) => (
  <LogoDiv>
    <img alt="" src={'./logo.png'} width={'24px'} /> &nbsp;
    {text && 'QPLOT'}
  </LogoDiv>
)

export default Logo
