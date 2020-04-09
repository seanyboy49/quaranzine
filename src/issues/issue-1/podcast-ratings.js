import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { PaddedWidthContainer, Row, Column } from "../../styles/layout"
import { H2 } from "../../styles/text"
import { findFileByName } from "../../utils"

const PodcastRatings = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "podcast-ratings" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
              fixed {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const roachIpodImage = findFileByName(data, "roach-ipod")
  const firstColumnImage = findFileByName(data, "1-3")
  const secondColumnImage = findFileByName(data, "4-6")

  return (
    <PaddedWidthContainer>
      <Row start>
        <H2>
          Quaranzine Staff
          <br />
          Podcast Rankings
        </H2>
        <Img
          fixed={roachIpodImage.node.childImageSharp.fixed}
          style={{ margin: "0 5%" }}
        />
      </Row>
      <Row>
        <Column>
          <div style={{ width: "60%" }}>
            <Img fluid={firstColumnImage.node.childImageSharp.fluid} />
          </div>
        </Column>
        <Column>
          <div style={{ width: "60%" }}>
            <Img fluid={secondColumnImage.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default PodcastRatings