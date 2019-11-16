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
      I develop, deploy and support enterprise web frameworks, with core responsibility of <b>responsiveness</b>, reusability and scalability. I prefer culture diversity, startup efficiency, and leaders with vision. 
    </p>,
    body: <Cover />
  },
]

export default cover