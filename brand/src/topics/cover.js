import React from 'react'
import styled from 'styled-components'
import { foreground, background } from './utils'

const SplashDiv = styled.div`
  position: fixed;
  background-color: ${background};
  width: 100vw;
  height: 100vh;
  .splash-content {
    color: ${foreground};
    position: relative;
    top: 10%;
    left: 10%;
    max-width: 400px;
    h1 {
      font-family: 'CS-Headline';
      font-size: 40px;
      margin-top: 40px;
      font-weight: normal;
      letter-spacing: -0.8px;
    }
    p {
      font-family: 'CS-Light';
      font-size: 16px; 
      line-height: 24px;
      margin-top: 30px;
    }
  }
`

const Cover = ({ story: { title, text, next, onNextClick } }) => (
  <SplashDiv>
    <div className="splash-content">
      <img alt="" src={'./logo.png'} width={'48px'} /> 
      <br />
      {title}
      {text}
      <p>
        <button onClick={onNextClick}>
          {next || 'Continue'} &nbsp;
        </button>
      </p>
    </div>
  </SplashDiv>
)

const cover = [
  {
    title: 'QPLOT',
    text: <p>
      A personal website with my background, experiences, and best practice in <b>UI/UX design</b>
    </p>,
    body: <Cover />
  },
]

export default cover