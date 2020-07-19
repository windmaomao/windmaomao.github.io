import React from 'react'
import Blog from './Blog'
import resume from './md/resume'

const works = [
  { title: 'Job', separator: true },
  {
    title: 'Resume', stories: [
      'Cover Letter', 'Credit Suisse',
      'MercuryGate International',
      'Deutsche Bank', 'People Designs',
      'Past Experience'
    ].map((title, i) => ({
      title,
      text: 'Please click tab above for each past experience.',
      body: <Blog src={resume[i]} />
    }))
  },
]

export default works