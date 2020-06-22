import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import {
  PaddedWidthContainer,
  FullWidthContainer,
  breakpoints,
} from "../../styles/layout"
import { findFileByName } from "../../utils"

const SpringPoem = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "issue1-images/spring-poem" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 100) {
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
  const mobileImage = findFileByName(data, "mobile")

  const imageToDisplay = isPhoneWide ? mobileImage : desktopImage

  if (isPhoneWide) {
    return (
      <FullWidthContainer id="inspirational-instagram-posts">
        <Img fluid={imageToDisplay.node.childImageSharp.fluid} />
      </FullWidthContainer>
    )
  }
  return (
    <PaddedWidthContainer id="inspirational-instagram-posts">
      <Img fluid={imageToDisplay.node.childImageSharp.fluid} />
    </PaddedWidthContainer>
  )
}

export default SpringPoem
