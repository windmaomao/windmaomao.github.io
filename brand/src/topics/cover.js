import React from 'react'
import styled from 'styled-components'

const SplashDiv = styled.div`
  margin-top: 10%;
  padding: 40px;
  max-width: 400px;
`

const Cover = ({ story: { title, text, next, onNextClick } }) => (
  <SplashDiv>
    <img alt="" src={'./logo.png'} width={'48px'} /> 
    <br />
    {title}
    {text}
    <p>
      <button onClick={onNextClick}>
        {next || 'Continue'} &nbsp;
      </button>
    </p>
  </SplashDiv>
)

const cover = [
  {
    title: '',
    text: <p>
      I develop and support enterprise web frameworks, with core responsibility of <b>responsiveness</b>, <b>reusability</b> and <b>scalability</b>.  
    </p>,
    body: <Cover />
  },
]

export default cover