import { graphql } from "gatsby"

export const fluidImageFragment = graphql`
  fragment FluidImageFragment on FileConnection {
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

export const fixedImageFragment = graphql`
  fragment FixedImageFragment on FileConnection {
    nodes {
      name
      childImageSharp {
        fixed(height: 60) {
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`
