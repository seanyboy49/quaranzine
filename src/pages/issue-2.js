import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SEO from "../components/seo"
import { NavBar, StyledLink } from "../styles/navigation"
import { Text } from "../styles/text"
import { breakpoints } from "../styles/layout"
import logo from "../images/logo.svg"

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
      <Issue2 />
    </>
  )
}

export default PublishedIssue2
