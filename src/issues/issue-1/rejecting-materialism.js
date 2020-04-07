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
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const chartsImage = data.findFileByName("charts")
  const bugsImage = data.findFileByName("crawling-bugs")

  return (
    <PaddedWidthContainer id="rejecting-materialism">
      <H2 center>
        when rejecting materialism <br /> leads to great profits
      </H2>

      <Img
        style={{ maxWidth: "800px", margin: "auto" }}
        fluid={chartsImage.node.childImageSharp.fluid}
      />

      <Img
        style={{
          width: "200px",
          position: "relative",
          marginLeft: "90%",
          marginTop: "15px",
        }}
        fluid={bugsImage.node.childImageSharp.fluid}
      />
    </PaddedWidthContainer>
  )
}

export default RejectingMaterialismChart
