import React, { useEffect, useState } from "react"

import SEO from "../components/seo"
import Issue1 from "../issues/issue-1"
import Nav from "./navBar"

const PublishedIssue1 = () => {
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
      <Nav />

      <Issue1 />
    </>
  )
}

export default PublishedIssue1
