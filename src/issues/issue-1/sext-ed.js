import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer } from "../../styles/layout"

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Sext = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "sext-ed-images" } }) {
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

  const imgTitle = data.allFile.edges.find(
    edge => edge.node.name === "Sext-Ed-101"
  )

  const imgFace = data.allFile.edges.find(edge => edge.node.name === "Face")

  return (
    <PaddedWidthContainer>
      <Img fluid={imgTitle.node.childImageSharp.fluid} />
      <Column>
        <Row>
          <Img fluid={imgFace.node.childImageSharp.fluid} />
        </Row>
      </Column>
    </PaddedWidthContainer>
  )
}

export default Sext
