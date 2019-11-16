import React from 'react'
import SinglePage from './SinglePage'

const home = [
  {
    title: 'QPLOT Web Design',
    text: (
      <div>
        <p>
          Welcome to our web design center located at North Carolina, <b>Research Triangle Area</b>. We provide web project consultation, development, deployment and maintanence for local small business owners.
        </p>
      </div>
    ),
    next: 'View Our Projects',
    body: <SinglePage />
  },
]

export default home