import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import { cover, resume } from './topics'
import Style from './Style'
import Logo from './Logo'

const themes = [
  { title: 'Light', theme: { mode: 'light' } },
]
const layouts = [
  { title: 'Left', direction: 'row' }
]
const title = 'QPLOT' 
const logo = <Logo />
const topics = [
  { title: 'Home', stories: cover, separator: true },
  { title: 'Service', stories: resume },
]

ReactDOM.render(
  <Book
    title={title}
    logo={logo}
    topics={topics}
    themes={themes}
    layouts={layouts}
    Div={Style}
  />, 
  document.getElementById('root')
)