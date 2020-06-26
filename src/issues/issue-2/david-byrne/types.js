import React from "react"
import { graphql } from "gatsby"

export const imageFragment = graphql`
  fragment ImageFragment on FileConnection {
    nodes {
      name
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
