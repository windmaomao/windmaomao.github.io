import React from 'react'
import { DefaultDiv } from './utils'

const Home = ({ story: { title, text, next, onNextClick } }) => (
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

const home = [
  {
    title: '',
    text: <p>
      I develop and support enterprise web frameworks, with core responsibility of <b>responsiveness</b>, <b>reusability</b> and <b>scalability</b>.
    </p>,
    body: <Home />
  },
]

export default home