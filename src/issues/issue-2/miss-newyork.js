import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled, { css } from "styled-components"

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

const Blurb = styled.div`
  font-family: "Apercu Mono";
  font-size: 17px;
  position: absolute;
  z-index: 100;

  top: ${({ top }) => top && top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  ${mediaQueries.phoneWide} {
    font-size: 15px;
  }

  ${({ flip }) =>
    flip &&
    css`
      transform: rotate(180deg);
    `}
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

      <Blurb top={"5%"} right={0}>
        [*&)))’’”::/{">"}
        {">"}=]\
      </Blurb>
      <Blurb top={"10%"} left={"30%"}>
        Whajt do you miszs the m0st about New YOerk?
      </Blurb>
      <Blurb top={"12%"} left={"20%"}>
        {":;’}"}
      </Blurb>
      <Blurb top={"40%"} left={"5%"}>
        the knicks still succ
      </Blurb>
      <Blurb top={"60%"} right={"5%"}>
        joe's pizza
      </Blurb>
      <Blurb bottom={"17%"} right={"5%"}>
        {",,>’{}-|#€%&’———=-[{"}
      </Blurb>
      <Blurb bottom={"20%"} left={"20%"}>
        p0rtlajnd jsut istn th3 saem
      </Blurb>

      <ImageWrapper>
        <Img fluid={data.file.childImageSharp.fluid} />
        <Text right>collage by Connie Zhou @conniezhoudesign</Text>
      </ImageWrapper>

      <NewYork>New Yokr</NewYork>
    </Background>
  )
}

export default MissNewYork
