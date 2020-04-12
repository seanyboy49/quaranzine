import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled, { css } from "styled-components"

import {
  PaddedWidthContainer,
  Row,
  Column,
  breakpoints,
  mediaQueries,
} from "../../styles/layout"
import { H2, Text } from "../../styles/text"

const TitleBylineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${mediaQueries.phoneWide} {
    align-items: center;
  }
`

export const FluidImageContainer = styled.div`
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

const LimerickMinute = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "limerick.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  const title = isPhoneWide ? (
    <H2>The Limerick Minute</H2>
  ) : (
    <H2>
      The
      <br />
      Limerick
      <br />
      Minute
    </H2>
  )

  const byLine = isPhoneWide ? (
    <Text center style={{ width: "initial", marginTop: "0" }}>
      with Pierre Chazot
    </Text>
  ) : (
    <Text style={{ width: "initial", marginTop: "0" }}>
      with
      <br />
      Pierre
      <br />
      Chazot
    </Text>
  )
  return (
    <PaddedWidthContainer id="limerick-minute">
      <Row>
        <Column>
          <TitleBylineContainer>
            {title}
            {byLine}
          </TitleBylineContainer>
        </Column>
        <Column>
          <FluidImageContainer>
            <Img fluid={data.file.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default LimerickMinute
