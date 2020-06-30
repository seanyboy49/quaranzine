import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { findFileByName } from "../../utils"

const Paradise = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "issue2-images/gate-of-paradise" } }
      ) {
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

  const park_img = findFileByName(data, "park-edit")
  const sidewalk_img = findFileByName(data, "sidewalk-edit")
  const street_img = findFileByName(data, "street-edit")
  return <></>
}

export default Paradise
