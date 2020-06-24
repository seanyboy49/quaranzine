import React from "react"
import { graphql } from "gatsby"

export const imageFragment = graphql`
  fragment ImageFragment on File {
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
`

export const query = graphql`
  fragment SiteInformation on Site {
    siteMetadata {
      title
      siteDescription
    }
  }
`
