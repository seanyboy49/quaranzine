import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer } from "../../styles/layout"

const Credits = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "credits.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <PaddedWidthContainer id="credits">
      <Img fluid={data.file.childImageSharp.fluid} />
    </PaddedWidthContainer>
  )
}

export default Credits
