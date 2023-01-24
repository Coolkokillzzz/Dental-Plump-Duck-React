import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Dental Plump Duck</title>
        <meta property="og:title" content="About - Dental Plump Duck" />
      </Helmet>
    </div>
  )
}

export default About
