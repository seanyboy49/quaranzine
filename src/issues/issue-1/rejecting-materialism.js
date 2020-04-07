import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PaddedWidthContainer, Row, Column } from "../../styles/layout"
import { H2 } from "../../styles/text"

const RejectingMaterialismChart = () => {
  const data = useStaticQuery(graphql`
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

  const dowImage = data.findFileByName("dow-jones")
  const meditationImage = data.findFileByName("meditation")
  const bugsImage = data.findFileByName("crawling-bugs")

  return (
    <PaddedWidthContainer id="rejecting-materialism">
      <H2 center>
        when rejecting materialism <br /> leads to great profits
      </H2>
      <Row>
        <Column>
          <Img fixed={dowImage.node.childImageSharp.fixed} />
        </Column>
        <Column>
          <Img fixed={meditationImage.node.childImageSharp.fixed} />
        </Column>
      </Row>
      <Img
        style={{ position: "relative", marginLeft: "90%", marginTop: "15px" }}
        fixed={bugsImage.node.childImageSharp.fixed}
      />
    </PaddedWidthContainer>
  )
}

export default RejectingMaterialismChart
