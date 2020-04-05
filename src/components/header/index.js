import React from "react"

import { NavBar, StyledLink } from "./styled"
import logoSmall from "../../images/logo-small.svg"

const Header = () => {
  return (
    <NavBar>
      <img width={128} src={logoSmall} alt="small qrzn logo"></img>
      <p>the quaranzine for the quaranzined</p>
      <StyledLink to="/archive/">archive</StyledLink>
    </NavBar>
  )
}

export default Header
