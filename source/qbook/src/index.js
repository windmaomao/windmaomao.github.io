import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import Logo from './Logo'
import blog from './blog'
import widget from './widget'
import themes from './themes'

const allTopics = [
  ...blog.works,
  ...widget,
  ...blog.blogs
]

ReactDOM.render(
  <Book
    logo={<Logo />}
    title={"MyBook"}
    themes={themes}
    topics={allTopics}
  />,
  document.getElementById('root')
)