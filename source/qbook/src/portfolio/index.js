import React from 'react'
import { RemoteBlog } from '../components'

const gh = `https://raw.githubusercontent.com/windmaomao/windmaomao.github.io/master/kb`
const projects = [
  { title: 'Project Summary', url: '2020-Summary' },
  { title: 'Credit Suisse', url: '2019-CreditSuisse' },
  { title: 'Mercury Gate', url: '2018-MercuryGate' },
  { title: 'Deutsche Bank', url: '2015-DeutscheBank' },
  // { title: 'RxAnte', url: '2014-RxAnte' },
  { title: 'People Designs', url: '2014-PeopleDesigns' },
  { title: 'Qplot Corp', url: '2009-QplotCorp' },
  { title: 'Academic Research', url: '2000-University' },
]
const stories = [
  { title: 'Portfolio', separator: true },
  {
    title: 'Frontend', stories: [{
      title: 'Frontend Engineer',
      body: <RemoteBlog url={`${gh}/resume/resumes/resume.md`} />
    }]
  },
  {
    title: 'Projects',
    stories: projects.map(item => ({
      title: item.title,
      body: <RemoteBlog url={`${gh}/resume/projects/${item.url}.md`} />
    }))
  },
]

export default stories
