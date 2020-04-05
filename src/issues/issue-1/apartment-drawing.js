import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer } from "../../styles/layout"

const ApartmentDrawing = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "apartment.png" }) {
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

export default ApartmentDrawing
