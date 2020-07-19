import React, { useState } from 'react'
import styled from 'styled-components'
import { InputBase } from 'react-brandnet'
import { defaultStyle, docRender } from './utils'
import { GoHome, GoX, GoCalendar, GoChevronUp, GoInfo } from 'react-icons/go'
// import { Icons } from '../../lib' 

const DemoDiv = styled.div`
  ${defaultStyle}
  span {
    margin: 0 0.5em;
    padding-top: 0.5em;
  }
`

const InputDemo = props => {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div>
      <InputBase
        value={value}
        onChange={onChange}
        {...props}
      />
      {docRender('InputBase', { ...props })}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const Text = ({ t }) => <span>{t}</span>
// // eslint-disable-next-line react/prop-types
const Icon = ({ T, disabled }) => {
  return <T disabled={disabled} />
}

const inputBaseStories = [
  {
    title: 'Default',
    text: (
      <div>
        <b>InputBase</b> serves as the base of other form inputs, such as Select, Calendar and etc.
        It's a controlled form input supporting normal, disabled, and read-only states. 
        It also allows adding text or icon as label and specify width.
      </div>
    ),
    body: (
      <DemoDiv>
        <h4>Normal</h4>
        <InputDemo />
        <h4>Disabled</h4>
        <InputDemo disabled value="" />
        <h4>Read only</h4>
        <InputDemo readOnly value="Value" />
        <h4>Placeholder</h4>
        <InputDemo placeholder="Name" />
      </DemoDiv>
    )
  },
  {
    title: 'Label',
    text: 'Input with before or after element',
    body: (
      <DemoDiv>
        <h4>Normal</h4>
        <InputDemo before={<Icon T={GoHome} />} />
        <InputDemo after={<Text t="kg" />} />
        <InputDemo after={<Icon T={GoX} />} />
        <InputDemo before={<Icon T={GoCalendar} />} />
        <InputDemo after={<Icon T={GoChevronUp} />} />
        <h4>Disabled</h4>
        <InputDemo disabled after={<Text t="kg" />} />
        <InputDemo disabled before={<Icon disabled T={GoInfo} />} />
      </DemoDiv>
    )
  },
  {
    title: 'Width',
    text: 'Input with variable width',
    body: (
      <DemoDiv>
        <h4>Normal</h4>
        <InputDemo />
        <h4>400px</h4>
        <InputDemo width="400px" />
        <InputDemo width="400px" before={<Icon T={GoHome} />} />
        <InputDemo width="400px" after={<Icon T={GoChevronUp} />} />
        <h4>80%</h4>
        <InputDemo width="80%" />
        <InputDemo width="80%" before={<Icon T={GoHome} />} />
        <InputDemo width="80%" after={<Icon T={GoChevronUp} />} />
      </DemoDiv>
    )
  }  
]

export default inputBaseStories
