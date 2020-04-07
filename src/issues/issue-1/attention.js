import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { FullWidthContainer } from "../../styles/layout"

const Attention = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "attention.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <FullWidthContainer>
      <Img fluid={data.file.childImageSharp.fluid} />
    </FullWidthContainer>
  )
}

export default Attention
