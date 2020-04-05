import React from "react"

import SEO from "../components/seo"
import { NavBar, StyledLink } from "../styles/navigation"
import Issue1 from "../issues/issue-1"
import logo from "../images/logo.svg"

const Home = () => {
  return (
    <>
      <SEO title="Home" />
      <NavBar>
        <img width={128} src={logo} alt="small qrzn logo"></img>
        <p>the quaranzine for the quaranzined</p>
        <StyledLink to="/archive/">archive</StyledLink>
      </NavBar>

      <Issue1 />
    </>
  )
}

export default Home
