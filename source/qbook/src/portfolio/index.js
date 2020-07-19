import React from 'react'
import RemoteBlog from './RemoteBlog'

const gh = `https://raw.githubusercontent.com/windmaomao/windmaomao.github.io/master/kb`
const stories = [
  { title: 'Portfolio', separator: true },
  {
    title: 'Frontend', stories: [{
      title: 'Frontend Engineer',
      body: <RemoteBlog url={`${gh}/resume/frontend.md`} />
    }]
  },
]

export default stories
