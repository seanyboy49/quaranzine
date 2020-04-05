import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import SEO from "../components/seo"
import logo from "../images/logo-small.svg"

const ArchiveNavbar = styled.nav`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: flex-start;
`

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &: hover {
    color: grey;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Archive = () => (
  <>
    <SEO title="Archive" />
    <ArchiveNavbar>
      <StyledLink to="/">Home</StyledLink>
    </ArchiveNavbar>
    <LogoContainer>
      <img width="200" src={logo} alt="qrzn logo"></img>
      <p>the quaranzine for the quaranzined</p>
    </LogoContainer>
  </>
)

export default Archive
