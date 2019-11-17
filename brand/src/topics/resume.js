import React from 'react'
import styled from 'styled-components'

const fontFamily = "Palatino, Times, serif"

const ResumeDiv = styled.div`
  font-family: ${fontFamily};
  h1, h2, h3, h4, h5, p { margin-top: 30px; }
  h1 { font-size: 28px; }
  h2 { font-size: 22px; }
  h3 { font-size: 18px; }
  h4, p, ul { font-size: 16px; }
  img { margin: 10px 0; }
  blockquote { margin: 30px; }
`

const introduction = (
  <ResumeDiv>
    <p>
      My daily responsibility includes working with developers, designers, business analysts and project owners s to lead the technical team starting from paper design to production server. 
    </p>
    <img src="./images/consult.png" height="150px" alt="consult" />
    <h3>Leadership</h3>
    <ul>
      <li>4 Years running <i>Development</i> and <i>Deployment</i></li>
      <li>6 Years working with <i>Owners</i> and <i>BAs</i></li>
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
  </ResumeDiv>
)

const background = (
  <ResumeDiv>
    {/* <h1>Education</h1> */}
    <h4>Johns Hopkins University</h4>
    <p>
      Sep 2000 - Sep 2006 <br />
      Bio-molecular chemical engineering, M.S and Ph.D.
    </p>
    <h4>East China University of Science and Technology</h4>
    <p>
      Sep 1996 - Sep 2000 <br />
      Department of chemical engineering, Bachelor
    </p>
  </ResumeDiv>
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