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

const bulletpointStyle = styled.ul`
  list-style-type: circle;
  font-size: 50%;
  line-height: 2;
  li::before {
    color: red;
  }
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

  const guidelines = data.allFile.edges.find(
    edge => edge.node.name === "guidelines"
  )

  const digitalFucking = data.allFile.edges.find(
    edge => edge.node.name === "1-digital-fucking"
  )

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
      <Img
        style={{ width: "85%", margin: "auto" }}
        fluid={guidelines.node.childImageSharp.fluid}
      />
      <Img
        style={{ width: "60%" }}
        fluid={digitalFucking.node.childImageSharp.fluid}
      />
      <Row>
        <Column>
          <bulletpointStyle>
            <li>
              <p>
                Be upfront with your partners, just as you would IRL — and it
                doesn’t have to be corny. I think it’s incredibly sexy for a new
                partner to tell me where they would like to be touched. Or for
                someone to set the vibe by asking to tell me about a specific
                memory.
              </p>
            </li>
            <li>
              <p>
                Maybe a new partner likes [redacted], but not [redacted] or
                their [redacted] are especially sensitive. Maybe I’m at work
                right now and can’t be distracted by play by play and pictures
                of your dick. Get clear. Listen to each other; this is a
                dialogue, not a masturbatory monologue.
              </p>
            </li>
            <li>
              <p>
                Check in with partners on communications boundaries. You want to
                know that any images or text messages you send are just for them
                (unless part of y’all’s mutual agreement and interest is that
                they share your sexts with other partners, etc. — and if so, you
                better talk about it.)
              </p>
            </li>
          </bulletpointStyle>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Sext
