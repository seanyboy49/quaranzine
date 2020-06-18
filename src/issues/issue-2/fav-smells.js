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
const TitleStyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  background: #fdffe9;
  align-items: center;
  justify-content: center;
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

const ControlButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  font-size: 5rem;
  font-weight: normal;
  font-family: Georgia, "Times New Roman", serif;
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
  const cinemaImg = data.allFile.edges.find(
    edge => edge.node.name === "cinema-popcorn"
  )
  const coffeeImg = data.allFile.edges.find(
    edge => edge.node.name === "coffee-morning"
  )
  const victoryImg = data.allFile.edges.find(
    edge => edge.node.name === "victory"
  )
  const momImg = data.allFile.edges.find(edge => edge.node.name === "my-mom")
  const chairImg = data.allFile.edges.find(
    edge => edge.node.name === "old-armchair"
  )
  const seaImg = data.allFile.edges.find(edge => edge.node.name === "salty-sea")
  const paulImg = data.allFile.edges.find(
    edge => edge.node.name === "paul-smell"
  )
  const noseImg = data.allFile.edges.find(edge => edge.node.name === "noses")

  const handleArrowNext = (event, props) => {
    console.log(props)
  }

  const renderCustomArrow = (clickHandler, hasNext) => {
    return <ControlButton onClick={clickHandler}>></ControlButton>
  }

  return (
    <Carousel renderArrowNext={renderCustomArrow}>
      <TitleStyledLayout>
        <StyleP degrees={-1.5} fontSize={40}>
          lls favorite smells favorite smell
        </StyleP>
        <SlideContainer color={"#fdffe9"}>
          <TextContainer>
            <StyleP degrees={1}>when I lost my sense of</StyleP>
            <StyleP degrees={2}>smell after contracting</StyleP>
            <StyleP degrees={1}>Covid, my life changed</StyleP>
            <StyleP degrees={0}>abruptly. vinegar,</StyleP>
            <StyleP degrees={1}>pillows, coffee grounds,</StyleP>
            <StyleP degrees={2}>expired chicken, central</StyleP>
            <StyleP degrees={1}>park, it all smelled the</StyleP>
            <StyleP degrees={0}>same. Life became plastic.</StyleP>
          </TextContainer>
          <ResizeImage>
            <Img fluid={noseImg.node.childImageSharp.fluid} />
          </ResizeImage>
          <TextContainer>
            <StyleP degrees={1}>and so, i asked people on</StyleP>
            <StyleP degrees={2}>instagram what they</StyleP>
            <StyleP degrees={1}>favorite smells were, and</StyleP>
            <StyleP degrees={0}>made collages out of my</StyleP>
            <StyleP degrees={1}>favorite responses,</StyleP>
            <StyleP degrees={2}>thinking that by looking at</StyleP>
            <StyleP degrees={1}>them, i could imagine what</StyleP>
            <StyleP degrees={0}>it was to smell again.</StyleP>
          </TextContainer>
        </SlideContainer>
        <button onClick={handleArrowNext}>Arrow</button>
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

      <SlideContainer color={"#edc0c0"}>
        <ResizeImage>
          <Img fluid={cinemaImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={1}>"I love the smell of cinema butter</StyleP>
          <StyleP degrees={-1}>popcorn, as soon as you open</StyleP>
          <StyleP degrees={0.5}>the door. BOOM."</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Nicholas
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fdffe9"}>
        <ResizeImage>
          <Img fluid={coffeeImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.75}>"coffee in the morning"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Lea
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fff1db"}>
        <ResizeImage>
          <Img fluid={victoryImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.75}>"victory"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Bellyn
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#fff4fb"}>
        <ResizeImage>
          <Img fluid={momImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.25}>"my mom"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Morgan
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#dfd9d8"}>
        <ResizeImage>
          <Img fluid={chairImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.5}>"an old armchair"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Jean
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#d4faff"}>
        <ResizeImage>
          <Img fluid={seaImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={0.25}>"the salty sea"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Alice
          </StyleP>
        </TextContainer>
      </SlideContainer>

      <SlideContainer color={"#faf9bc"}>
        <ResizeImage>
          <Img fluid={paulImg.node.childImageSharp.fluid} />
        </ResizeImage>
        <TextContainer>
          <StyleP degrees={-0.25}>"Paul's smell"</StyleP>
          <StyleP fontSize={25} degrees={-0.5} align={"flex-end"}>
            -Camila
          </StyleP>
        </TextContainer>
      </SlideContainer>
    </Carousel>
  )
}

export default FavoriteSmells
