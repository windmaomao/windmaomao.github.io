import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'

const themes = [
  { title: 'Light', theme: { mode: 'light' } },
  { title: 'Dark', theme: { mode: 'dark' } }
]
const layouts = [
  { title: 'Top', direction: 'column' },
  { title: 'Left', direction: 'row' }
]
const topics = [{ title: 'Home', stories: [] }]
const title = 'QPLOT'
const logo = <img alt="" src={'./logo.png'} width={'24px'} />

ReactDOM.render(
  <Book
    title={title}
    logo={logo}
    topics={topics}
    themes={themes}
    layouts={layouts}
  />, 
  document.getElementById('root')
)