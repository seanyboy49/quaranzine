import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { findFileByName } from "../../utils"

const Nyc360 = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "issue2-images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const roofTop = findFileByName(data, "my-rooftop-quarantine")
  return (
    <div>
      <Img fluid={roofTop.node.childImageSharp.fluid} />
    </div>
  )
}

export default Nyc360
