import React from 'react'

const renderInfo = (info, render) => {
  return () => render
}

const defaultStyle = `
  padding: 10px;
  h4 {
    font-weight: bold;
    margin: 1.5em 0 0.5em;
  }
  blockquote {
    font-family: monospace;
    margin: 20px 0;
    font-size: 14px;
  }  
`

const background = props => (props.theme.mode === 'dark' ? 'black' : 'white')
const foreground = props => (props.theme.mode === 'dark' ? 'white' : 'black')

const docRender = (name, props) => {
  const str = Object.keys(props).reduce((acc, key) => {
    if (key === 'story') return acc
    if (key === 'children') return acc
    switch (typeof props[key]) {
      case 'string':
        acc.push(`${key}="${props[key]}"`)
        break;
      default:
        acc.push(`${key}`)
    }
    return acc
  }, [])

  if (!props.children) {
    return (
      <blockquote>
        {`<${name} ${str.join(' ')} />`}
      </blockquote>
    )
  }
  return (
    <blockquote>
      {`<${name} ${str.join(' ')}>`}
      {props.children}
      {`</${name}>`}
    </blockquote>
  )
}

export {
  renderInfo, defaultStyle, background, foreground, docRender
}
