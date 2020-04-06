import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer, Row, Column } from "../../styles/layout"

const ArtistNameContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 155px;
  width: 100px;
  height: 124px;
`

const ArtistName = styled.p`
  font-size: 30px;
`

const Sext = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "sext-ed-images" } }) {
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

  const imgTitle = data.allFile.edges.find(
    edge => edge.node.name === "Sext-Ed-101"
  )

  const imgFace = data.allFile.edges.find(edge => edge.node.name === "Face")
  console.log(imgFace)

  return (
    <PaddedWidthContainer id="sext-ed">
      <Img fluid={imgTitle.node.childImageSharp.fluid} />
      <div style={{ position: "relative", marginTop: "10%" }}>
        <Img
          style={{ width: "60%", margin: "auto" }}
          fluid={imgFace.node.childImageSharp.fluid}
        />
        <ArtistNameContainer>
          <ArtistName>by Kimberley Chou</ArtistName>
        </ArtistNameContainer>
      </div>
      <Row>
        <Column width="100" align="flex-start" style={{ margin: "0 17%" }}>
          <h2>I love dirty talk. </h2>
          <p>
            And to be sexting—that is, sending sexually explicit photos, videos
            or text-based messages—or having phone sex during this period of
            self-isolation and quarantine feels especially connective. We’re
            limited but also enabled by our devices. We’re together, apart—and
            you know most of us (all of us?) are already masturbating.
          </p>
          <p>
            Staying home is an opportunity to turn inward: To work on ourselves,
            to self pleasure, and to improve specific communication skills to
            share with partners, if we so choose. Think of it as self love and
            collective love in the time of covid-19.
          </p>
          <p>Tl;dr: Now is a great time to brush up on your sex talk skills!</p>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Sext
