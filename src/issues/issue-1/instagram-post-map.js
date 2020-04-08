import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import { PaddedWidthContainer, breakpoints } from "../../styles/layout"
import { findFileByName } from "../../utils"

const InstagramPostMap = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "instagram-post-map" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  const desktopImage = findFileByName(data, "desktop")
  const mobile = findFileByName(data, "mobile")

  return (
    <PaddedWidthContainer>
      <Img fluid={desktopImage.node.childImageSharp.fluid} />
    </PaddedWidthContainer>
  )
}

export default InstagramPostMap
