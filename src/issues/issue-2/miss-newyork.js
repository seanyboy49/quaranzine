import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Text } from "../../styles/text"
import { mediaQueries, breakpoints } from "../../styles/layout"

const Background = styled.div`
  background: #e960ff;
  display: flex;
  position: relative;
`

const ImageWrapper = styled.div`
  width: 60%;
  margin: 10% auto 12% auto;

  ${mediaQueries.phoneWide} {
    width: 100%;
    margin: 30% 0;
  }
`

const Title = styled.h1`
  font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue";
  font-size: 15vw;
  position: absolute;
  z-index: 100;
  margin: 0;

  ${mediaQueries.phoneWide} {
    font-size: 22vw;
  }
`

const IMiss = styled(Title)`
  right: 0;
  top: -20%;

  ${mediaQueries.phoneWide} {
    right: unset;
    top: unset;
  }
`

const NewYork = styled(Title)`
  left: 0;
  bottom: -100px;

  ${mediaQueries.phoneWide} {
    bottom: 0;
  }
`

const MissNewYork = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/miss-newyork.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Background>
      <IMiss>I miss</IMiss>
      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
      </ImageWrapper>
      <NewYork>New Yokr</NewYork>
    </Background>
  )
}

export default MissNewYork
