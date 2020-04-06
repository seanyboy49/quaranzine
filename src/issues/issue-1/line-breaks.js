import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

  const imgSrc = data.allFile.edges.find(edge => edge.node.name === fileName)

  return (
    <Img
      style={{ margin: "0 120px" }}
      fluid={imgSrc.node.childImageSharp.fluid}
    />
  )
}

export default LineBreak
