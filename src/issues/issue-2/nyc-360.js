import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

import { findFileByName } from "../../utils"
import theme from "../../styles/theme"

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

const TitleSection = styled.div`
  margin: 30px;
  padding: 2px 0;
`
const Title = styled.h2`
  color: #ff07a9;
  padding: 0;
  margin: 0;
`
const sideNote = styled.p`
padding: 0
margin: 0
`

const Nyc360 = () => {
  const [isDown, setIsDown] = useState(false)

  let startX
  let scrollLeft

  const handleClick = e => {
    console.log(e)
  }

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
      <TitleSection>
        <Title>The New York City 360º Rooftop Experience</Title>
        <sideNote>click and drag plz</sideNote>
      </TitleSection>
      <ImgWrapper onClick={e => handleClick(e)}>
        <Img fixed={roofTop.node.childImageSharp.fixed} />
      </ImgWrapper>
    </div>
  )
}

export default Nyc360
