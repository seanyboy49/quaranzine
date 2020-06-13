import React, { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"

import SEO from "../components/seo"
import { NavBar, StyledLink } from "../styles/navigation"
import { Text } from "../styles/text"
import { breakpoints } from "../styles/layout"
import Issue1 from "../issues/issue-1"
import logo from "../images/logo.svg"

const PublishedIssue1 = () => {
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
      <SEO title="Archive" />

      <Issue1 />
    </>
  )
}

export default PublishedIssue1
