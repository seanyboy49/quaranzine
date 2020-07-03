import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SEO from "../components/seo"
import { NavBar, StyledLink } from "../styles/navigation"
import { Text } from "../styles/text"
import { breakpoints } from "../styles/layout"
import logo from "../images/logo.svg"

import DavidByrne from "../issues/issue-2/david-byrne"
import Issue2 from "../issues/issue-2"

const PublishedIssue2 = () => {
  const [isLoading, setIsLoading] = useState(true)
  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <>
      <SEO title="Home" />
      <NavBar>
        <img
          width={isPhoneWide ? 75 : 128}
          src={logo}
          alt="small qrzn logo"
        ></img>
        {!isPhoneWide && <Text center>the quaranzine for the quaranzined</Text>}
        <StyledLink to="/archive/">archive</StyledLink>
      </NavBar>
      <DavidByrne />
      <Issue2 />
    </>
  )
}

export default PublishedIssue2
