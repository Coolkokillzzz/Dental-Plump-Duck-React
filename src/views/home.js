import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard1 from '../components/feature-card1'
import FeatureCard2 from '../components/feature-card2'
import FeatureCard3 from '../components/feature-card3'
import FeatureCard4 from '../components/feature-card4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dental Plump Duck</title>
        <meta property="og:title" content="Dental Plump Duck" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-container1">
          <img
            alt="logo"
            src="/playground_assets/xion-name-logo-1400w.png"
            className="home-image"
          />
          <span className="home-text">From local to worldwide, in a snap!</span>
        </div>
      </header>
      <div className="home-features">
        <h1 className="home-text1">
          <span>Explore our page</span>
          <br></br>
        </h1>
        <div className="home-container2">
          <FeatureCard1></FeatureCard1>
          <FeatureCard2></FeatureCard2>
          <FeatureCard3 rootClassName="rootClassName5"></FeatureCard3>
          <FeatureCard4></FeatureCard4>
        </div>
      </div>
    </div>
  )
}

export default Home
