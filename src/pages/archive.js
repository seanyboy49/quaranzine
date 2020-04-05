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

const Archive = () => (
  <>
    <SEO title="Archive" />
    <ArchiveNavbar>
      <StyledLink>Home</StyledLink>
    </ArchiveNavbar>
    <div>
      <img width="200" src={logo} alt="qrzn logo"></img>
      <h3>the quaranzine for the quaranzined</h3>
    </div>
  </>
)

export default Archive
