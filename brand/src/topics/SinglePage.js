import React from 'react'
import styled from 'styled-components'

const DefaultDiv = styled.div`
  padding: 40px;
  max-width: 400px;
  .page-title {
    margin-top: 40px;
    font-size: 30px;
    letter-spacing: -0.2px;
  }
  .page-text {
    margin-top: 40px;
    font-size: 16px;
    line-height: 25px;
    color: #363636;
  }
  .page-nav {
    margin-top: 40px;
    button {
      background: #f5f5f5;
      border: none;
      padding: 15px 25px; 
      font-size: 16px;
      color: #363636;
      cursor: pointer;
    }
  }
`

const SinglePage = ({ story: { title, text, next, onNextClick } }) => (
  <DefaultDiv>
    <div className="page-logo">
      <img alt="" src={'./logo.png'} width={'48px'} />
    </div>
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

export default SinglePage