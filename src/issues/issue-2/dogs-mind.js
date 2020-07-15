import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { useMediaQuery } from "react-responsive"

import { Text } from "../../styles/text"
import { mediaQueries, breakpoints } from "../../styles/layout"

const Background = styled.div`
  background: #3ec98e;
`

const TitleWrap = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  ${mediaQueries.phoneWide} {
    line-height: 100px;
  }
`
const Title = styled.h1`
  font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue";
  font-size: 19vw;
  margin: 0 0 0 -1vw;
`

const ByLine = styled.h3`
  font-family: "HelveticaNeue-Bold", "Helvetica Neue Bold", "Helvetica Neue";
  font-size: 3vw;
  position: absolute;
  right: 20.5vw;
  bottom: -30px;

  ${mediaQueries.phoneWide} {
    right: 8vw;
    bottom: -55px;
    font-size: 15px;
  }
`

const ContentWrapper = styled.div`
  padding: 5vw;
  display: flex;
  justify-content: space-between;

  ${mediaQueries.phoneWide} {
    flex-direction: column;
  }

  > div {
    width: 100%;
  }
`

const TextContainer = styled.div`
  width: 50%;
`
const ImageWrapper = styled.div`
  width: 40%;

  ${mediaQueries.phoneWide} {
    margin: 3vh 0;
  }
`

const TextFirstHalf = () => (
  <>
    <Text>
      The judge was all hungover
      <br />
      When the president took the stand
      <br />
      So he didn't really notice
      <br />
      When things got out of hand
    </Text>
    <Text>
      Then the press boys thank the president
      <br />
      And he tells them what to say
      <br />
      There's a photo opportunity <br />
      And then they're sent away
    </Text>
    <Text>
      To a place where nothing matters
      <br />
      Where the wheels of progress turn
      <br />
      Where reality is fiction
      <br />
      But the dogs show no concern
    </Text>
  </>
)
const TextSeconHalf = () => (
  <>
    <Text>
      Now the clerks look out the windows
      <br />
      At those dogs down in the park
      <br />
      Every window holds a staring face
      <br />
      Every desk stands piled with work
    </Text>
    <Text>
      Now a dog cannot imagine
      <br />
      What it is to drive a car
      <br />
      And we in turn are limited
      <br />
      By what it is we are
    </Text>
    <Text>
      We are dogs in our own paradise
      <br />
      In a theme park of our own
      <br />
      Doggy dancers doing doody
      <br />
      Doggy dreaming all day long
    </Text>
    <Text>
      Dreaming all day long
      <br />
      Happy all day long
      <br />
      Dreaming all day long
      <br />
      In a paradise of our own
    </Text>
    <Text>
      We are dogs in our own paradise
      <br />
      In a theme park of our own
      <br />
      Doggy dancers doing doody
      <br />
      Doggy dreaming all day long
    </Text>
  </>
)

const DogsMind = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/dogs-mind.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  return (
    <Background>
      <TitleWrap>
        <Title>Dog's Mind</Title>
        <ByLine>by David Byrne</ByLine>
      </TitleWrap>

      <ContentWrapper>
        {isPhoneWide ? (
          <>
            <TextFirstHalf />
            <ImageWrapper>
              <Img fluid={data.file.childImageSharp.fluid} />
              <Text center>collage by Dustin Willoughby @chilloughby</Text>
            </ImageWrapper>
            <TextSeconHalf />
          </>
        ) : (
          <>
            <TextContainer>
              <TextFirstHalf />
              <TextSeconHalf />
            </TextContainer>
            <ImageWrapper>
              <Img
                fluid={data.file.childImageSharp.fluid}
                style={{ maxHeight: "70%" }}
                imgStyle={{ objectFit: "contain" }}
              />
              <Text center>collage by Dustin Willoughby @chilloughby</Text>
            </ImageWrapper>
          </>
        )}
      </ContentWrapper>
    </Background>
  )
}

export default DogsMind
