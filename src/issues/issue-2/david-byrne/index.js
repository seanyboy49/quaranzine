import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Background } from "./styled"
import { PaddedWidthContainer, breakpoints } from "../../../styles/layout"

const DavidByrne = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allFile(filter: { relativeDirectory: { eq: "issue-2/david-byrne" } }) {
  //       edges {
  //         node {
  //           id
  //           name
  //         }
  //       }
  //     }
  //   }
  // `)
  const data = useStaticQuery(graphql`
    query {
      mini: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/mini" } }
      ) {
        edges {
          node {
            id
            name
          }
        }
      }
      big: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/big" } }
      ) {
        edges {
          node {
            id
            name
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
