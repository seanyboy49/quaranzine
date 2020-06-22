import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import { breakpoints, FullWidthContainer } from "../../styles/layout"
import { H2 } from "../../styles/text"
import { findFileByName } from "../../utils"

const InstagramPostMap = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "issue1-images/instagram-post-map" }
        }
      ) {
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
  const mobileImage = findFileByName(data, "mobile")
  const mobileTitleImage = findFileByName(data, "mobile-title")

  if (isPhoneWide) {
    return (
      <FullWidthContainer id="inspirational-instagram-posts">
        <Img fluid={mobileTitleImage.node.childImageSharp.fluid} />
        <H2 center>about the pandemic</H2>
        <Img fluid={mobileImage.node.childImageSharp.fluid} />
      </FullWidthContainer>
    )
  }

  return (
    <FullWidthContainer id="inspirational-instagram-posts">
      <Img fluid={desktopImage.node.childImageSharp.fluid} />
    </FullWidthContainer>
  )
}

export default InstagramPostMap
