import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useMediaQuery } from "react-responsive"

import { breakpoints } from "../../styles/layout"

const LineBreak = ({ fileName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "line-breaks" } }) {
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

  const isTableWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  const imgSrc = data.allFile.edges.find(edge => edge.node.name === fileName)

  const marginStyle = isTableWide ? { margin: "0 15px" } : { margin: "0 120px" }

  return <Img style={marginStyle} fluid={imgSrc.node.childImageSharp.fluid} />
}

export default LineBreak
