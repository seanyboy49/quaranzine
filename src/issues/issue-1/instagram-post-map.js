import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer } from "../../styles/layout"

const InstagramPostMap = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "instagram-post-map.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <PaddedWidthContainer>
      <Img fluid={data.file.childImageSharp.fluid} />
    </PaddedWidthContainer>
  )
}

export default InstagramPostMap
