import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Background } from "./styled"

import { PaddedWidthContainer, breakpoints } from "../../../styles/layout"

const DavidByrne = () => {
  const data = useStaticQuery(graphql`
    query {
      mini: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/mini" } }
      ) {
        ...ImageFragment
      }
      big: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/big" } }
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
  console.log("data", data)
  return (
    <Background backgroundColor="blue">
      <h1>David Byrne</h1>
    </Background>
  )
}

export default DavidByrne
