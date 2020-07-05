import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { findFileByName } from "../../utils"

const ImgWrapper = styled.div`
  height: auto;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
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
const SideNote = styled.p`
  padding: 0;
  margin: 0;
`

const Nyc360 = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "issue2-images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed(height: 581, width: 9296) {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const roofTopImg = findFileByName(data, "my-rooftop-quarantine")
  return (
    <div>
      <TitleSection>
        <Title>The New York City 360º Rooftop Experience</Title>
        <SideNote>scroll plz</SideNote>
      </TitleSection>
      <ImgWrapper>
        <Img fixed={roofTopImg.node.childImageSharp.fixed} />
      </ImgWrapper>
    </div>
  )
}

export default Nyc360
