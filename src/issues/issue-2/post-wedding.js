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
  padding: 0;
  margin: 3rem;
`
const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: auto;
  flex-grow: 1;
`
const ArticleText = styled.div`
  font-size: 1.25rem;
  margin: 2rem 5rem 2rem 0rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-basis: 50%;
`
const ImageWrapper = styled.div`
  padding: 0;
  margin: 0;
  flex-basis: 30%;
`
const P = styled.p`
  font-size: ${props => props.fontSize}rem;
  margin: 1rem;
  margin-left: ${props => props.marginLeft}rem;
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
  const cheezIt = findFileByName(data, "cheese-it")
  const whiteClaw = findFileByName(data, "white-claw")

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
            <P fontSize={2}>
              1. Wish anyone and everyone <br />
              who was at your wedding a <br />
              happy birthday.
            </P>
            <P fontSize={1.5}>
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
            </P>
          </ArticleText>
          <ImageWrapper>
            <Img fluid={cheezIt.node.childImageSharp.fluid} />
          </ImageWrapper>
        </Row>
        <Row>
          <ImageWrapper>
            <Img fluid={whiteClaw.node.childImageSharp.fluid} />
          </ImageWrapper>
          <ArticleText>
            <P fontSize={2}>
              2. Thank your spouse for being awesome in quarantine.
            </P>
            <P fontSize={1.5}>
              Even if behind the scenes you’re bickering daily about putting
              down the toilet seat, you don’t have to show that on social media!
            </P>
            <P fontSize={2} marginLeft={7}>
              3. Don’t forget, you have multiple anniversaries!
            </P>
            <P fontSize={1.5} marginLeft={7}>
              Your first date anniversary, the day you became
              boyfriend/girlfriend, the anniversary of your engagement, the
              number of weeks, months, then FINALLY: years you’ve been married.
            </P>
          </ArticleText>
        </Row>
      </Article>
    </Wrapper>
  )
}

export default Wedding
