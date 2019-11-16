import React from 'react'
import styled from 'styled-components'

const DefaultDiv = styled.div`
  margin-top: 10%;
  padding: 40px;
  max-width: 400px;
`

const SinglePage = ({ story: { title, text, next, onNextClick } }) => (
  <DefaultDiv>
    <img alt="" src={'./logo.png'} width={'48px'} />
    <br />
    {title}
    {text}
    <p>
      <button onClick={onNextClick}>
        {next || 'Continue'} &nbsp;
      </button>
    </p>
  </DefaultDiv>
)

export default SinglePage