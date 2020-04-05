import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "quaranzine-hero.png" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
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

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Home
