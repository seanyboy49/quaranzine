import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled, { css } from "styled-components"

const ResizeImage = styled.div`
  width: 40%;
  margin: 0;
  padding: 0;
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
`

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 0 5%;
`

const StyleP = styled.p`
  transform: ${({ degrees }) => `rotate(${degrees}deg)`};
  font-size: ${props => props.fontSize || 20}px;
  align-self: ${props => props.align || "center"};
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
  const afterShowerImg = data.allFile.edges.find(
    edge => edge.node.name === "after-shower"
  )
  const boulangerieImg = data.allFile.edges.find(
    edge => edge.node.name === "boulangerie"
  )
  const gardenImg = data.allFile.edges.find(
    edge => edge.node.name === "earth-after-rain"
  )
  const warmSkinImg = data.allFile.edges.find(
    edge => edge.node.name === "warm-skin"
  )
  const deliciousFoodImg = data.allFile.edges.find(
    edge => edge.node.name === "delicious-food"
  )

  return (
    <Carousel>
      <SlideContainer color={"#d6f2f2"}>
        <ResizeImage>
          <Img fluid={afterShowerImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={1}>"I Love how people smell right after</StyleP>
          <StyleP degrees={2}>they shower and get ready for the</StyleP>
          <StyleP degrees={1}>day. So it's like their own special</StyleP>
          <StyleP degrees={0}>person smell plus good clean soap</StyleP>
          <StyleP degree={1} align={"flex-start"}>
            plus laundry detergent"
          </StyleP>
          <StyleP fontSize={25} align={"flex-end"}>
            -Sanika
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fdffe9"}>
        <ResizeImage>
          <Img fluid={boulangerieImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"boulangerie in the morning"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Sacha
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#deffdc"}>
        <ResizeImage>
          <Img fluid={gardenImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.5}>"a garden after the rain"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Georgia
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fbf8e6"}>
        <ResizeImage>
          <Img fluid={warmSkinImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"warm skin"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Luca
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#ecd6b7"}>
        <ResizeImage>
          <Img fluid={deliciousFoodImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.5}>"whatever delicious food is cooking"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Holly
          </StyleP>
        </TextContainer>
      </SlideContainer>
    </Carousel>
  )
}

export default FavoriteSmells
