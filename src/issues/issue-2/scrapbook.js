import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Scrapbook = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/scrapbook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fluid={data.file.childImageSharp.fluid} />
}
export default Scrapbook
