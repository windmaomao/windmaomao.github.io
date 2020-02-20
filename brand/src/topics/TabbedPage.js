import React from 'react'
import styled from 'styled-components'

const fontFamily = "Palatino, Times, serif"
const DefaultDiv = styled.div`
  font-family: ${fontFamily};
  h1, h2, h3, h4, h5, p { margin-top: 30px; }
  h1 { font-size: 28px; }
  h2 { font-size: 22px; }
  h3 { font-size: 18px; }
  h4, p, ul { font-size: 16px; }
  img { margin: 10px 0; }
  blockquote { margin: 30px; }
`

const TabbedPage = ({ story: { title, text, next, onNextClick } }) => (
  <DefaultDiv>
    <div className="page-title">
      {title}
    </div>
    <div className="page-text">
      {text}
    </div>
    <div className="page-nav">
      <button onClick={onNextClick}>
        {next || 'Continue'} &nbsp;
      </button>
    </div>
  </DefaultDiv>
)

export default TabbedPage