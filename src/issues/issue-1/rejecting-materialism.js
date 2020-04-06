import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import {
  PaddedWidthContainer,
  Row,
  Column,
  CustomPosition,
} from "../../styles/layout"
import { StyledH2 } from "../../styles/text"

const RejectingMaterialismChart = () => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "rejecting-materialism" } }) {
        edges {
          node {
            name
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const dow = allFile.edges[0]
  const meditation = allFile.edges[1]
  const bugs = allFile.edges[2]

  return (
    <PaddedWidthContainer id="rejecting-materialism">
      <StyledH2 textAlign="center">
        when rejecting materialism <br /> leads to great profits
      </StyledH2>
      <Row>
        <Column>
          <Img fixed={dow.node.childImageSharp.fixed} />
        </Column>
        <Column>
          <Img fixed={meditation.node.childImageSharp.fixed} />
        </Column>
      </Row>
      <Img
        style={{ position: "relative", marginLeft: "90%", marginTop: "15px" }}
        fixed={bugs.node.childImageSharp.fixed}
      />
    </PaddedWidthContainer>
  )
}

export default RejectingMaterialismChart
