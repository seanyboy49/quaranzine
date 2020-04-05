import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

import logoSmall from "../../images/logo-small.svg"

const NavBar = styled.nav`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: grey;
  }
`

const Header = () => {
  return (
    <NavBar>
      <img src={logoSmall} alt="small qrzn logo"></img>
      <p>the quaranzine for the quaranzined</p>
      <StyledLink to="/archive/">archive</StyledLink>
    </NavBar>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
