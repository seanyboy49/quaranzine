import React from "react"
import { NavBar, StyledLink } from "../styles/navigation"
import { breakpoints } from "../styles/layout"
import { Text } from "../styles/text"
import logo from "../images/logo.svg"
import { useMediaQuery } from "react-responsive"

const Nav = () => {
  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })
  return (
    <NavBar>
      <img
        width={isPhoneWide ? 75 : 128}
        src={logo}
        alt="small qrzn logo"
      ></img>
      {!isPhoneWide && <Text center>the quaranzine for the quaranzined</Text>}
      <StyledLink to="/archive/">archive</StyledLink>
    </NavBar>
  )
}
export default Nav
