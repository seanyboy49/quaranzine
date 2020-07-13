import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import {
  Background,
  TitleWrapper,
  Title,
  Authors,
  Cover,
  Article,
  Row,
  ArticleText,
  ImageWrapper,
  P,
} from "./styled"
import { findFileByName } from "../../../utils"

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
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const weddingCoverImg = findFileByName(data, "wedding-cover")
  const cheezItImg = findFileByName(data, "cheese-it")
  const whiteClawImg = findFileByName(data, "white-claw")
  const honestImg = findFileByName(data, "honest")
  const pringlesImg = findFileByName(data, "pringles")
  const benJerryImg = findFileByName(data, "ben-jerry")

  return (
    <Background>
      <TitleWrapper>
        <Title>
          10 Ways To Keep Posting About Your Wedding Long After It’s Over.
        </Title>
        <Authors>
          words by Liann Kaye
          <br />
          collage by Charlene Kaye
        </Authors>
      </TitleWrapper>
      <Cover>
        <Img fluid={weddingCoverImg.node.childImageSharp.fluid} />
      </Cover>
      <Article>
        <Row>
          <ArticleText marginTop={5}>
            <P fontSize={2}>
              1. Wish anyone and everyone who was at your wedding a happy
              birthday.
            </P>
            <P fontSize={1.25}>
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
            <Img fluid={cheezItImg.node.childImageSharp.fluid} />
          </ImageWrapper>
        </Row>
        <Row direction={"column-reverse"}>
          <ImageWrapper>
            <Img fluid={whiteClawImg.node.childImageSharp.fluid} />
          </ImageWrapper>
          <ArticleText>
            <P fontSize={2}>
              2. Thank your spouse for being awesome in quarantine.
            </P>
            <P fontSize={1.25}>
              Even if behind the scenes you’re bickering daily about putting
              down the toilet seat, you don’t have to show that on social media!
            </P>
            <P fontSize={2} marginLeft={7}>
              3. Don’t forget, you have multiple anniversaries!
            </P>
            <P fontSize={1.25} marginLeft={7}>
              Your first date anniversary, the day you became
              boyfriend/girlfriend, the anniversary of your engagement, the
              number of weeks, months, then FINALLY: years you’ve been married.
            </P>
          </ArticleText>
        </Row>
        <Row>
          <ArticleText>
            <P fontSize={2} marginLeft={2}>
              4. The classic #TBT
            </P>
            <P fontSize={1.25} marginLeft={2}>
              #TBT to better times!!! What better times have you had than your
              wedding? IT WAS THE HAPPIEST DAY OF YOUR LIFE!
            </P>
            <P fontSize={2} marginLeft={7}>
              5. Post your manicure! Or your drink!
            </P>
            <P fontSize={1.25} marginLeft={7}>
              “I can’t go to the nail salon, so I gave myself a manicure!” aka
              “LOOK AT MY ROCK.” “I’m drinking tea” (here’s my rock) “Margarita
              night” (LOOK. AT. MY. ROCK.)
            </P>
            <P fontSize={2}>6. Don’t forget about your parents!</P>
            <P fontSize={1.25}>
              Mother’s Day, Father’s Day, your mother’s birthday, your father’s
              birthday, your parents’ anniversary, your parents’ first date.
              It’s endless!
            </P>
          </ArticleText>
          <ImageWrapper>
            <Img fluid={honestImg.node.childImageSharp.fluid} />
          </ImageWrapper>
        </Row>
        <Row direction={"column-reverse"}>
          <ImageWrapper>
            <Img fluid={pringlesImg.node.childImageSharp.fluid} />
          </ImageWrapper>
          <ArticleText>
            <P fontSize={2}>7. And your siblings!</P>
            <P fontSize={1.25}>
              Did they graduate college? Did they get a new job? Write them a
              heartfelt, 5 paragraph post and include a photo of them, next to
              you in your wedding dress.
            </P>
            <P fontSize={2} marginLeft={7}>
              8. Prioritize Fitness.
            </P>
            <P fontSize={1.25} marginLeft={7}>
              But more importantly, posting about fitness in quarantine. Here’s
              your caption: “I tried on my wedding dress from 5 years ago and it
              STILL fits! #goalsandgains
            </P>
            <P fontSize={2} marginLeft={3}>
              9. Play celebrity look-alike.
            </P>
            <P fontSize={1.25} marginLeft={3}>
              Just make sure that when you post the comparison photo, it’s a
              picture of you in your wedding dress!
            </P>
          </ArticleText>
        </Row>
        <Row>
          <ArticleText marginTop={7}>
            <P fontSize={2}>10. Just be shameless.</P>
            <P fontSize={1.25}>
              There’s nothing more honest than just a simple “I love this
              picture” or “thinking about my wedding day.” We all know you are,
              because you post about it so goddamn much, there’s no need for a
              reason at this point!
            </P>
          </ArticleText>
          <ImageWrapper>
            <Img fluid={benJerryImg.node.childImageSharp.fluid} />
          </ImageWrapper>
        </Row>
      </Article>
    </Background>
  )
}

export default Wedding
