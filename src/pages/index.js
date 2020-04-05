import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "quaranzine-hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  console.log("data", data)
  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default Home
