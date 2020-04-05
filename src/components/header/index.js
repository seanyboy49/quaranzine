import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logoSmall from "../images/logo-small.svg"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <img src={logoSmall}></img>
      <p>the quaranzine for the quaranzined</p>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
