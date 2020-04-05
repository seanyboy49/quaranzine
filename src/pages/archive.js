import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import logo from "../images/logo.svg"
import { NavBar, StyledLink, LogoContainer } from "../styles/navigation"

const Archive = () => (
  <>
    <SEO title="Archive" />
    <NavBar justify={"flex-start"}>
      <StyledLink to="/">Home</StyledLink>
    </NavBar>
    <LogoContainer>
      <img width="200" src={logo} alt="qrzn logo"></img>
      <p>the quaranzine for the quaranzined</p>
    </LogoContainer>
  </>
)

export default Archive
