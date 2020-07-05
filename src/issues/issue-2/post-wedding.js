import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mediaQueries } from "../../styles/layout"

import { findFileByName } from "../../utils"

const Wrapper = styled.div`
  background-color: #f8a9a4;
  padding: 0;
  margin: 0;
`
const TitleWrapper = styled.div`
  position: relative;
`
const Title = styled.h1`
  padding: 2rem 3rem;
  margin: 0;
  font-size: 6rem;
`
const Authors = styled.h3`
  position: absolute;
  right: 10%;
  top: 70%;
  text-align: right;
  font-size: 1.5rem;
`
const Cover = styled.div`
  padding: 0;
  margin: 0;
`
const Article = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem;
  height: auto;
`
const ArticleText = styled.div`
  flex: 2 1 30rem;
  font-size: 1.5rem;
  margin: 1rem;
`
const ImageWrapper = styled.div`
  padding: 0;
  margin: 0;
  width: 25%;
`

const Wedding = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { relativeDirectory: { eq: "issue2-images/wedding-images" } }
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

  const weddingCover = findFileByName(data, "wedding-cover")
  const CheezIt = findFileByName(data, "cheese-it")
  console.log(weddingCover)

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          10 Ways To Keep Posting About Your Wedding Long After It’s Over.
        </Title>
        <Authors>
          words by Liann KayeM
          <br />
          collage by Charlene Kaye
        </Authors>
      </TitleWrapper>
      <Cover>
        <Img fluid={weddingCover.node.childImageSharp.fluid} />
      </Cover>
      <Article>
        <Row>
          <ArticleText>
            <p>
              1. Wish anyone and everyone who was at your wedding a happy
              birthday.{" "}
            </p>
            <p>
              If you were smart, you made every single guest at the wedding pose
              next to you, so you could supply your poor, plebeian friends
              Instagram photographs of you in a wedding gown until everyone you
              know drops dead. It’s genius, really! If you have at least 60
              family members, friends or acquaintances, a birthday should come
              up at least twice a month. That’s one photo of you in a wedding
              dress (THE HAPPIEST DAY OF YOUR LIFE) next to whomever, for the
              rest of your lives! It doesn’t matter who they are! As long as you
              are front and center, and they are off to the side, adjusting your
              veil.
            </p>
          </ArticleText>
          <ImageWrapper>
            <Img fluid={CheezIt.node.childImageSharp.fluid} />
          </ImageWrapper>
        </Row>
      </Article>
    </Wrapper>
  )
}

export default Wedding
