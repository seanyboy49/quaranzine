import React, { useEffect, useState } from "react"

import SEO from "../components/seo"
import Issue1 from "../issues/issue-1"

const Home = () => {
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
      <Issue1 />
    </>
  )
}

export default Home
