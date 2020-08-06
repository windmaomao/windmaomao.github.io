import React from 'react'
import ReactMarkdown from 'react-markdown'
import Style from './BlogStyle'

var frontmatter = require('remark-frontmatter')

const Blog = ({ src }) => (
  <Style>
    <ReactMarkdown source={src} plugins={[frontmatter]} />
  </Style>
)

export default Blog
