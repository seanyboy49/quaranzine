import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import {
  PaddedWidthContainer,
  FluidImageContainer,
  Row,
  Column,
} from "../../styles/layout"
import theme from "../../styles/theme"
import { Text } from "../../styles/text"
import { findFileByName } from "../../utils"

const Pink = styled.span`
  color: ${theme.pink};
`

const DescentIntoMadness = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "issue1-images/descent-into-madness" }
        }
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

  const titleImage = findFileByName(data, "title")
  const chairImage = findFileByName(data, "chair")
  const manSmokingImage = findFileByName(data, "man-smoking")
  const highScoreImage = findFileByName(data, "high-score")
  const musketeerImage = findFileByName(data, "musketeer")
  const noseImage = findFileByName(data, "nose")
  const chezEricImage = findFileByName(data, "chez-eric")
  const lampImage = findFileByName(data, "lamp")
  const cookieImage = findFileByName(data, "cookie")

  return (
    <PaddedWidthContainer id="descent-into-madness">
      <Img
        style={{ maxWidth: "700px" }}
        fluid={titleImage.node.childImageSharp.fluid}
      />
      <Row>
        <Column width={70} center>
          <Text>
            Four <Pink>mauve</Pink> walls, one polypropylene chair. I looked it
            up.
            <br />
            Hats off to the person who <Pink>invented</Pink> rugs. They’re
            surprisingly comfortable.
            <br />
            <Pink>Wondering</Pink> if grey hairs are a symptom.
            <br />
            Raymond Chandler’s detective is <Pink>prancing</Pink> around LA.
            Lucky him.
          </Text>
        </Column>
        <Column width={30} center>
          <FluidImageContainer mobile={80}>
            <Img fluid={chairImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>

      <Row center reverseColumn>
        <Column width={30} center>
          <FluidImageContainer desktop={40} mobile={40}>
            <Img fluid={manSmokingImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
        <Column width={60} center>
          <Text>
            People on TV have always been <Pink>extremely</Pink> clumsy.
            <br />
            So what if he’s a scientist, has four PhDs and a cute puppy?
            <br />
            That doesn’t <Pink>make</Pink> him right.
            <br />
            We should have been better prepared. People are missing vital
            machines as well as the point.
            <br />
            This game is way too easy. Why did I <Pink>download</Pink> this app?
            <br /> Dead <Pink>petals</Pink> on the counter. It’s not summer yet.
          </Text>
        </Column>
      </Row>

      <Row start>
        <Column center>
          <Text>
            <Pink>Love is real.</Pink> I think.
            <br />
            Why are people never at their <Pink>balcony?</Pink> Fear of seeing
            or fear of being seen?
            <br />
            <Pink>Hell, even our street ghost is</Pink> reappearing. It's been a
            while.
          </Text>
        </Column>
        <Column width={30} center>
          <FluidImageContainer desktop={60} mobile={80}>
            <Img fluid={highScoreImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>

      <Row>
        <Column width={20} center>
          <FluidImageContainer desktop={80} mobile={80}>
            <Img fluid={musketeerImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
        <Column center>
          <Text>
            I wonder what anticipation smells like… I look forward to finding
            out. Oh, here it is! <Pink>Onions.</Pink>
            <br />
            Today, <Pink>lonesome.</Pink> Tomorrow, lonely. The real difference
            is that some is <Pink>more</Pink> than only.
          </Text>
        </Column>
        <Column width={20} center>
          <FluidImageContainer desktop={80} mobile={80}>
            <Img fluid={noseImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>

      <Row center>
        <Column center width={30}>
          <Text>
            <Pink>Forgot</Pink> the name of the boulangerie. Ten kilos more or{" "}
            <Pink>ten</Pink> kilos less. It’s all the same to the mirror.
            <br />
            <Pink>See those black tiles?</Pink>
            <br />
            They’re mourning the rooftops.
          </Text>
        </Column>
        <Column center width={30}>
          <FluidImageContainer desktop={80} mobile={80}>
            <Img fluid={chezEricImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>

      <Row center reverseColumn>
        <Column center width={30}>
          <FluidImageContainer desktop={80} mobile={80}>
            <Img fluid={lampImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
        <Column center>
          <Text>
            How can you tell a lamp to <Pink>shut up?</Pink>
            <br />
            <Pink>Metal</Pink> against metal. Ding dong!
            <br />
            Open my enemies. Let the treadmill be solemn.
            <br />
            The king needs his <Pink>grapes.</Pink>
            <br />
            Flip the mattress. Make it edible.
          </Text>
        </Column>
      </Row>

      <Row center>
        <Column>
          <Text>
            Bonding with the <Pink>lamp.</Pink>
            <br />
            Read your own flesh. Stop looking at mine.
            <br />
            <Pink>Ride me like a funicular.</Pink>
            <br />
            It’s crisp. Time is crisp.
            <br />
            We’re losing zeros.
            <br />
            It’s the <Pink>eucalyptus.</Pink>
          </Text>
          <FluidImageContainer
            desktop={40}
            style={{ position: "relative", top: "-20%", left: "-10%" }}
          >
            <Img fluid={cookieImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default DescentIntoMadness
