import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Text } from "../../styles/text"
import { mediaQueries, breakpoints } from "../../styles/layout"

const Background = styled.div`
  background: #e960ff;
  height: 100vh;
  display: flex;
  position: relative;
`

const ImageWrapper = styled.div`
  margin: auto;
  width: 50%;
`

const Title = styled.h1`
  font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue";
  font-size: 200px;
  position: absolute;
  z-index: 100;
  margin: 0;
`

const IMiss = styled(Title)`
  right: 0;
  top: -120px;
`

const NewYork = styled(Title)`
  left: 0;
  bottom: -100px;
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
