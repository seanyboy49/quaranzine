import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PaddedWidthContainer } from "../../styles/layout"
import { H2 } from "../../styles/text"
import { findFileByName } from "../../utils"

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

  const chartsImage = findFileByName(data, "charts")
  const bugsImage = findFileByName(data, "crawling-bugs")

  return (
    <PaddedWidthContainer id="rejecting-materialism">
      <H2 center>
        when rejecting materialism <br /> leads to great profits
      </H2>
      <Img
        style={{ maxWidth: "800px", margin: "auto", marginBottom: "15px" }}
        fluid={chartsImage.node.childImageSharp.fluid}
      />
      <Img
        style={{
          maxWidth: "200px",
        }}
        fluid={bugsImage.node.childImageSharp.fluid}
      />
    </PaddedWidthContainer>
  )
}

export default RejectingMaterialismChart
