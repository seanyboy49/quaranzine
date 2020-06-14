import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { FullWidthContainer } from "../../styles/layout"

const Attention = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue1-images/attention.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <FullWidthContainer id="attention">
      <Img fluid={data.file.childImageSharp.fluid} />
    </FullWidthContainer>
  )
}

export default Attention
