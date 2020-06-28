import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import { findFileByName } from "../../utils"

const ImgWrapper = styled.div`
  height: auto;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s;
  transform: scale(0.98);
  will-change: transform;
  position: relative;
  border: none;
  padding: 0px;
  margin: 0px;
`

const Nyc360 = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "issue2-images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 700, width: 11200) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
      <div>
        <h2>The New York City 360º Rooftop Experience</h2>
        <p>clickand drag plz</p>
      </div>
      <ImgWrapper>
        <Img fixed={roofTop.node.childImageSharp.fixed} />
      </ImgWrapper>
    </div>
  )
}

export default Nyc360
