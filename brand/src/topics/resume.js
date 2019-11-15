import React from 'react'

const introduction = (
  <div>
    <h1>Senior Front-End Engineer</h1>
    <h2>Fang Jin</h2>
    <p>
      I develop, deploy and support enterprise web frameworks, with core responsibility of responsiveness, reusability and scalability. I prefer culture diversity, startup efficiency, and leaders with vision.
    </p>
    <p>
      While I'm serving as a developer, my daily responsibility includes working with developers, designers, business analysts and project owners, so that I can lead technical team starting from paper design to production server. 
    </p>
    <blockquote>
      "My latest accomplishment is a web framework supporting dark/light theme of branding components such as header/footer, menu, and forms. These components can be plugged into any fresh application with no more than 10 lines of code."      
    </blockquote>
    <h3>Leadership</h3>
    <ul>
      <li>2 Years tech lead running analysis and sprints</li>
      <li>5 Years lead contractor delivering projects</li>
    </ul>
    <h3>Skills</h3>
    <ul>
      <li>8 Years Prototyping with <i>CSS</i> and <i>Sass</i></li>
      <li>6 Years <i>React</i> and <i>Angular</i></li>
      <li>5 Years <i>Functional Programming</i></li>
    </ul>
    <h3>Background</h3>
    <ul>
      <li>5 Years Java/Oracle enterprise environment</li>
      <li>9 Years Reporting, charting, and visualization: D3.js, HighCharts, Matlab, Maya, Unity</li>
      <li>15 Years Strong analytical skills in math, modeling, calculation and simulation</li>
    </ul>
  </div>
)

const background = (
  <div>
    <h2>Education</h2>
    <h3>Johns Hopkins University</h3>
    <p>
      Sep 2000 - Sep 2006 <br />
      Bio-molecular chemical engineering, M.S and Ph.D.
    </p>
    <h3>East China University of Science and Technology</h3>
    <p>
      Sep 1996 - Sep 2000 <br />
      Department of chemical engineering, Bachelor
    </p>
    <h2>Activity</h2>
    <h3>RecoveryHub</h3>
    <p>
      Sep 2014 - Oct 2014 <br />
      Volunteer for disaster and humanitarian relief      
    </p>
    <h3>University of California Irvine</h3>
    <p>
      Sep 2007 - Dec 2008 <br />
      College math class teacher for two semesters      
    </p>
  </div>
)

const resume = [
  {
    title: 'Introduction',
    text: 'Brief introduction',
    body: introduction
  },
  {
    title: 'Education',
    text: 'Educational background and other activities',
    body: background
  }
]

export default resume