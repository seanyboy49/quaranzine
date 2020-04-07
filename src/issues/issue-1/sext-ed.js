import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer, Row, Column } from "../../styles/layout"
import { Text, H2, H1 } from "../../styles/text"

const ArtistNameContainer = styled.div`
  position: absolute;
  top: 35px;
  right: 155px;
  width: 100px;
  height: 124px;
`

const ArtistName = styled.p`
  font-size: 23px;
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

  console.log(data)

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

  const phone = data.allFile.edges.find(edge => edge.node.name === "phone")

  const communication = data.allFile.edges.find(
    edge => edge.node.name === "2-good-communication"
  )

  const listen = data.allFile.edges.find(edge => edge.node.name === "listen")

  const dirtyTalk = data.allFile.edges.find(
    edge => edge.node.name === "3-dirty-talk"
  )

  const dirtyTalk2 = data.allFile.edges.find(
    edge => edge.node.name === "dirty-talk-2"
  )

  return (
    <PaddedWidthContainer id="sext-ed">
      <Img fluid={imgTitle.node.childImageSharp.fluid} />
      <div style={{ position: "relative", marginTop: "7%" }}>
        <Img
          style={{ width: "50%", margin: "auto" }}
          fluid={imgFace.node.childImageSharp.fluid}
        />
        <ArtistNameContainer>
          <ArtistName>by Kimberley Chou</ArtistName>
        </ArtistNameContainer>
      </div>
      <Row>
        <Column width="100" align="flex-start" style={{ margin: "0 23%" }}>
          <H1>I love dirty talk. </H1>
          <Text>
            And to be sexting—that is, sending sexually explicit photos, videos
            or text-based messages—or having phone sex during this period of
            self-isolation and quarantine feels especially connective. We’re
            limited but also enabled by our devices. We’re together, apart—and
            you know most of us (all of us?) are already masturbating.
          </Text>
          <Text>
            Staying home is an opportunity to turn inward: To work on ourselves,
            to self pleasure, and to improve specific communication skills to
            share with partners, if we so choose. Think of it as self love and
            collective love in the time of covid-19.
          </Text>
          <Text>
            Tl;dr: Now is a great time to brush up on your sex talk skills!
          </Text>
        </Column>
      </Row>
      <Img
        style={{ width: "85%", margin: "auto" }}
        fluid={guidelines.node.childImageSharp.fluid}
      />
      <Img
        style={{ width: "60%", height: "100px" }}
        fixed={digitalFucking.node.childImageSharp.fixed}
      />
      <Row style={{ marginLeft: "5%" }}>
        <Column width="60">
          <Text>
            Be upfront with your partners, just as you would IRL — and it
            doesn’t have to be corny. I think it’s incredibly sexy for a new
            partner to tell me where they would like to be touched. Or for
            someone to set the vibe by asking to tell me about a specific
            memory.
          </Text>
          <Text>
            Maybe a new partner likes [redacted], but not [redacted] or their
            [redacted] are especially sensitive. Maybe I’m at work right now and
            can’t be distracted by play by play and pictures of your dick. Get
            clear. Listen to each other; this is a dialogue, not a masturbatory
            monologue.
          </Text>
          <Text>
            Check in with partners on communications boundaries. You want to
            know that any images or text messages you send are just for them
            (unless part of y’all’s mutual agreement and interest is that they
            share your sexts with other partners, etc. — and if so, you better
            talk about it.)
          </Text>
        </Column>
        <div style={{ width: "40%" }}>
          <Img
            style={{ width: "100%", margin: "10px" }}
            fluid={phone.node.childImageSharp.fluid}
          />
        </div>
      </Row>
      <Img
        style={{
          width: "60%",
          position: "relative",
          marginLeft: "40%",
          height: "60px",
          marginTop: "70px",
        }}
        fixed={communication.node.childImageSharp.fixed}
      />
      <Row>
        <div style={{ width: "30%", marginLeft: "150px" }}>
          <Img
            style={{ width: "100%" }}
            fluid={listen.node.childImageSharp.fluid}
          />
        </div>
        <Column width="50">
          <Text>
            Tell your partner what you like / are into / want to do / want done
            to you.
          </Text>
          <Text>
            Ask your partner what they like / are into / want to do / want done
            to them.
          </Text>
          <Text>
            Listen to each other, with respect—and then respond. Do you have
            different turn ons? Favorite positions? Do you have the same kink/s?
            Are there new things you’d like to try together? Build excitement by
            talking about them.
          </Text>
        </Column>
      </Row>
      <Img
        style={{ width: "68%", height: "50px", marginBottom: "50px" }}
        fixed={dirtyTalk.node.childImageSharp.fixed}
      />
      <Row style={{ marginLeft: "5%" }}>
        <Column width="60">
          <Text>
            Sometimes a few flirty texts are just…a few flirty texts! Just like
            physical sexual acts don’t always have to end in orgasm—thovugh, we
            love an orgasm—it can be fun to have a little chat to boost
            confidence, calm the nervous system, get the blood flowing; and
            then, put a pin in it for later, or just leave it at that. You don’t
            always have to be actively trying to get off.
          </Text>
        </Column>
        <div style={{ width: "40%" }}>
          <Img
            style={{ width: "60%" }}
            fluid={dirtyTalk2.node.childImageSharp.fluid}
          />
        </div>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Sext
