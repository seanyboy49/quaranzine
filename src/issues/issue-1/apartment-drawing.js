import React from "react"
import { useMediaQuery } from "react-responsive"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { findFileByName } from "../../utils"
import { PaddedWidthContainer, breakpoints } from "../../styles/layout"

const ApartmentDrawing = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "apartment" } }) {
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

  const desktopImage = findFileByName(data, "apartment-desktop")
  const mobileImage = findFileByName(data, "apartment-mobile")
  const imageToDisplay = isPhoneWide ? mobileImage : desktopImage

  return (
    <PaddedWidthContainer>
      <Img fluid={imageToDisplay.node.childImageSharp.fluid} />
    </PaddedWidthContainer>
  )
}

export default ApartmentDrawing
