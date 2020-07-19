import React from 'react'
import ReactMarkdown from 'react-markdown'
import Style from './BlogStyle'

const Blog = ({ src }) => (
  <Style>
    <ReactMarkdown source={src} />
  </Style>
)

export default Blog