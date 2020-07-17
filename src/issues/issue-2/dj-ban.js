import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const DJBan = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/dj-ban.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Img style={{ zIndex: "1000" }} fluid={data.file.childImageSharp.fluid} />
  )
}
export default DJBan
