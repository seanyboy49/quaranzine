import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { FullWidthContainer } from "../../styles/layout"

const PointingFingers = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pointing-fingers.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <FullWidthContainer id="pointing-fingers">
      <Img fluid={data.file.childImageSharp.fluid} />
    </FullWidthContainer>
  )
}

export default PointingFingers
