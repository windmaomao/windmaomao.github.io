import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from './logo.png'

const spin = keyframes`
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
`

const LogoDiv = styled.img`
  width: 24px;
  margin-right: 5px;
  animation: ${spin} infinite 20s linear
`

const Logo = () => (
  <LogoDiv src={img} alt="" />
)

export default Logo