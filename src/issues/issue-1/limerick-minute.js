import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { PaddedWidthContainer, Column } from "../../styles/layout"
import { H2, Text } from "../../styles/text"

export const NonBreakingRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

const TitleBylineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

  return (
    <PaddedWidthContainer id="limerick-minute">
      <NonBreakingRow>
        <Column>
          <TitleBylineContainer>
            <H2>
              The
              <br />
              Limerick
              <br />
              Minute
            </H2>
            <Text style={{ width: "initial", marginTop: "0" }}>
              with
              <br />
              Pierre
              <br />
              Chazot
            </Text>
          </TitleBylineContainer>
        </Column>
        <Column>
          <FluidImageContainer>
            <Img fluid={data.file.childImageSharp.fluid} />
          </FluidImageContainer>
        </Column>
      </NonBreakingRow>
    </PaddedWidthContainer>
  )
}

export default LimerickMinute
