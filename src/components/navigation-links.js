import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <span className="navigation-links-text">{props.text}</span>
      <span className="navigation-links-text1">{props.text3}</span>
      <span className="navigation-links-text2">{props.text2}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text: 'About',
  text3: 'Team',
  text2: 'Prices',
  rootClassName: '',
}

NavigationLinks.propTypes = {
  text: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default NavigationLinks
