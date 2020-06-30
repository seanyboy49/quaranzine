import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { findFileByName } from "../../utils"

const Paradise = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "issue2-images/gate-of-paradise-images" }
        }
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
  return (
    <>
      <div>
        <Img fixed={sidewalk_img.node.childImageSharp.fixed} />
        <p>
          It's a sin to seek perfection
          <br />
          It's a sin to help the poor
          <br />
          It's a sin to hold convictions
          <br />
          For none of them are true
          <br />
          <br />
          And the laws of men are not the laws of heaven
          <br />
          And angel's breath is like the desert wind
          <br />
          And terrorists are acting out of love, sweet love
          <br />
          To bring us home again
          <br />
          <br />
          Beware of good intentions
          <br />
          And the passion in their eyes
          <br />
          For none of them can open
          <br />
          The gates of paradise
          <br />
        </p>
      </div>

      {/* <Img fixed={park_img.node.childImageSharp.fixed} /> */}
      {/* <Img fixed={street_img.node.childImageSharp.fixed} /> */}
    </>
  )
}

export default Paradise
