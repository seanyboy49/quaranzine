import React, { useEffect, useState } from "react"

import SEO from "../components/seo"
import Issue2 from "../issues/issue-2"

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
      <Issue2 />
    </>
  )
}

export default Home
