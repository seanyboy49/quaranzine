import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled, { css } from "styled-components"

import { mediaQueries, breakpoints } from "../../../styles/layout"
import { findFileByName } from "../../../utils"
import "./style.css"

const ResizeImage = styled.div`
  width: 40%;
  margin: 0 0 2rem 0;
  padding: 0;

  ${mediaQueries.tabletWide} {
    width: 85%;
    margin: 0;
  }
`
const TitleStyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdffe9;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
`
const CoverTitle = styled.h1`
  font-size: 6em;
  white-space: nowrap;
  transform: rotate(-1deg);
  margin: auto;

  ${mediaQueries.tabletWide} {
    font-size: 5.5em;
  }
  ${mediaQueries.phoneWide} {
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: -5rem;
  }
`
const CoverDiv = styled.div`
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
`

const SlideContainer = styled.div`
  background: ${props => props.color};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;

  ${mediaQueries.tabletWide} {
    flex-direction: column;
  }
`

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: 0 15px;
  width: 40%;

  ${mediaQueries.tabletWide} {
    width: 100%;
    margin: 0 5px;
  }
`

const StyleP = styled.p`
  transform: ${({ degrees }) => `rotate(${degrees}deg)`};
  font-size: ${props => props.fontSize || 20}px;
  align-self: ${props => props.align || "center"};
  font-family: "Apercu Mono";
  padding: 0rem 1rem;

  ${mediaQueries.tabletWide} {
    font-size: 18px;
  }

  ${mediaQueries.phoneWide} {
    font-size: 15px;
  }
`

const CoverText = styled.p`
  font-size: 20px;
  align-self: center;
  font-family: "Apercu Mono";
  padding: 2rem;
  line-height: 3rem;
  text-align: left;

  ${mediaQueries.tabletWide} {
    font-size: 18px;
    line-height: 1rem;
    padding: 1rem;
  }

  ${mediaQueries.phoneWide} {
    font-size: 15px;
    line-height: 1rem;
    padding: 1.5rem;
  }
`
const Name = styled.p`
  transform: -0.5deg;
  font-size: 30px;
  align-self: flex-end;
  font-family: "Apercu Mono";
  margin: 2rem 2rem 3rem 0rem;

  ${mediaQueries.tabletWide} {
    font-size: 26px;
    margin: 4rem 7rem 5rem 0rem;
  }

  ${mediaQueries.phoneWide} {
    font-size: 22px;
    margin: 2rem 4rem 3rem 0rem;
  }
`

const ControlArrows = styled.button`
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  position: absolute;
  top: 45%;
  right: 0;
  background: transparent;
  padding: 0;
  margin: 2rem;
  ${props =>
    props &&
    props.left &&
    css`
      left: 0;
      right: initial;
      z-index: 10;
    `}
`
const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  cursor: pointer;
  display: inline-block;
  margin: 0 12px;
  border: 1px solid black;
  text-align: center;
  padding: 0;
  background-color: ${props => props.color || "none"};

  ${mediaQueries.phoneWide} {
    width: 7px;
    height: 7px;
    margin: 0 7px;
  }
`

const FavoriteSmells = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "issue2-images/fav-smell-images" } }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fixed {
                ...GatsbyImageSharpFixed_withWebp_tracedSVG
              }
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const afterShowerImg = findFileByName(data, "after-shower")
  const boulangerieImg = findFileByName(data, "boulangerie")
  const gardenImg = findFileByName(data, "earth-after-rain")
  const warmSkinImg = findFileByName(data, "warm-skin")
  const deliciousFoodImg = findFileByName(data, "delicious-food")
  const cinemaImg = findFileByName(data, "cinema-popcorn")
  const coffeeImg = findFileByName(data, "coffee-morning")
  const victoryImg = findFileByName(data, "slide-victory")
  const momImg = findFileByName(data, "my-mom")
  const chairImg = findFileByName(data, "old-armchair")
  const seaImg = findFileByName(data, "salty-sea")
  const paulImg = findFileByName(data, "paul-smell")
  const noseImg = findFileByName(data, "cover-nose")
  const leftArrow = findFileByName(data, "left-arrow")
  const rightArrow = findFileByName(data, "right-arrow")

  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  const tabletWide = useMediaQuery({
    query: breakpoints.tabletWide,
  })

  const renderCustomArrowPrev = (clickHandler, hasPrev) => {
    if (isPhoneWide || tabletWide) {
      return null
    }
    if (hasPrev) {
      return (
        <ControlArrows left onClick={clickHandler}>
          <Img fixed={leftArrow.node.childImageSharp.fixed} />
        </ControlArrows>
      )
    }
  }

  const renderCustomArrowNext = (clickHandler, hasNext) => {
    if (isPhoneWide || tabletWide) {
      return null
    }

    if (hasNext) {
      return (
        <ControlArrows onClick={clickHandler}>
          <Img fixed={rightArrow.node.childImageSharp.fixed} />
        </ControlArrows>
      )
    }
  }

  const dots = (clickHandler, isSelected) => {
    if (isSelected === true) {
      return <Dot color={"black"} onClick={clickHandler} />
    } else {
      return <Dot onClick={clickHandler} />
    }
  }

  return (
    <Carousel
      renderArrowPrev={renderCustomArrowPrev}
      renderArrowNext={renderCustomArrowNext}
      renderIndicator={dots}
      showThumbs={false}
    >
      <TitleStyledLayout>
        <CoverDiv>
          <CoverTitle>lls favorite smells favorite smell</CoverTitle>
        </CoverDiv>
        <SlideContainer color={"#fdffe9"}>
          <TextContainer>
            <CoverText>
              when I lost my sense of smell after contracting Covid, my life
              changed abruptly. vinegar, pillows, coffee grounds, expired
              chicken, central park, it all smelled the same. Life became
              plastic.
            </CoverText>
          </TextContainer>
          <ResizeImage>
            <Img fluid={noseImg.node.childImageSharp.fluid} />
          </ResizeImage>
          <TextContainer>
            <CoverText>
              and so, i asked people on instagram what they favorite smells
              were, and made collages out of my favorite responses, thinking
              that by looking at them, i could imagine what it was to smell
              again.
            </CoverText>
          </TextContainer>
        </SlideContainer>
      </TitleStyledLayout>

      <SlideContainer color={"#d6f2f2"}>
        <ResizeImage>
          <Img fluid={afterShowerImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={1}>"I Love how people smell right after</StyleP>
          <StyleP degrees={2}>they shower and get ready for the</StyleP>
          <StyleP degrees={1}>day. So it's like their own special</StyleP>
          <StyleP degrees={0}>person smell plus good clean soap</StyleP>
          <StyleP degree={1}>plus laundry detergent"</StyleP>
          <Name>-Sanika</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fdffe9"}>
        <ResizeImage>
          <Img fluid={boulangerieImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"boulangerie in the morning"</StyleP>
          <Name>-Sacha</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#deffdc"}>
        <ResizeImage>
          <Img fluid={gardenImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.5}>"a garden after the rain"</StyleP>
          <Name>-Georgia</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fbf8e6"}>
        <ResizeImage>
          <Img fluid={warmSkinImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"warm skin"</StyleP>
          <Name>-Luca</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#ecd6b7"}>
        <ResizeImage>
          <Img fluid={deliciousFoodImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"whatever delicious food is cooking"</StyleP>
          <Name>-Holly</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#edc0c0"}>
        <ResizeImage>
          <Img fluid={cinemaImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={1}>"I love the smell of cinema butter</StyleP>
          <StyleP degrees={-1}>popcorn, as soon as you open</StyleP>
          <StyleP degrees={0.5}>the door. BOOM."</StyleP>
          <Name>-Nicholas</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fdffe9"}>
        <ResizeImage>
          <Img fluid={coffeeImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.75}>"coffee in the morning"</StyleP>
          <Name>-Lea</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fff1db"}>
        <ResizeImage>
          <Img fluid={victoryImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.75}>"victory"</StyleP>
          <Name>-Bellyn</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fff4fb"}>
        <ResizeImage>
          <Img fluid={momImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.25}>"my mom"</StyleP>
          <Name>-Morgan</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#dfd9d8"}>
        <ResizeImage>
          <Img fluid={chairImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.5}>"an old armchair"</StyleP>
          <Name>-Jean</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#d4faff"}>
        <ResizeImage>
          <Img fluid={seaImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.25}>"the salty sea"</StyleP>
          <Name>-Alice</Name>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#faf9bc"}>
        <ResizeImage>
          <Img fluid={paulImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.25}>"Paul's smell"</StyleP>
          <Name>-Camila</Name>
        </TextContainer>
      </SlideContainer>
    </Carousel>
  )
}

export default FavoriteSmells
