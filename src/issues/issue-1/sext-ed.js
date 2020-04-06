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

  return (
    <PaddedWidthContainer>
      <Img fluid={data.file.childImageSharp.fluid} />
      <Column>
        <Row></Row>
      </Column>
    </PaddedWidthContainer>
  )
}

export default Sext
