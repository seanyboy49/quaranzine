import React, { useEffect, useState } from "react"

import SEO from "../components/seo"
import Nav from "./navBar"
import Issue2 from "../issues/issue-2"

const PublishedIssue2 = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return null
  }

  return (
    <>
      <SEO title="Home" />
      {/* <Nav /> */}
      <Issue2 />
    </>
  )
}

export default PublishedIssue2
