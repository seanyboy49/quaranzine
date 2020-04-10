import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import {
  PaddedWidthContainer,
  FluidImageContainer,
  FullWidthContainer,
  breakpoints,
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
      allFile(filter: { relativeDirectory: { eq: "descent-into-madness" } }) {
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

  return (
    <PaddedWidthContainer>
      <Img
        style={{ maxWidth: "700px", marginBottom: "10%" }}
        fluid={titleImage.node.childImageSharp.fluid}
      />
      <Row>
        <Column width={70} style={{ justifyContent: "center" }}>
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
        <Column width={30} style={{ justifyContent: "center" }}>
          <FluidImageContainer mobile={80}>
            <Img fluid={chairImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>

      <Row center reverseColumn>
        <Column width={30} style={{ justifyContent: "center" }}>
          <FluidImageContainer desktop={40} mobile={40}>
            <Img fluid={manSmokingImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
        <Column width={60} style={{ justifyContent: "center" }}>
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
        <Column>
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
        <Column width={30} style={{ justifyContent: "center" }}>
          <FluidImageContainer desktop={40} mobile={40}>
            <Img fluid={highScoreImage.node.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default DescentIntoMadness
