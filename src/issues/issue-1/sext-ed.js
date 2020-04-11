import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import {
  PaddedWidthContainer,
  Row,
  Column,
  breakpoints,
} from "../../styles/layout"
import { Text, H1 } from "../../styles/text"
import { findFileByName } from "../../utils"

const FluidImageContainer = styled.div`
  width: 70%;
  margin: auto;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`

const Sext = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "sext-ed" } }) {
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

  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })

  const sexted101img = findFileByName(data, "sexted-101")

  const imgFace = findFileByName(data, "face")

  const guidelineHeaderImage = findFileByName(data, "guidelines")

  const digitalFuckingDesktop = findFileByName(data, "1-digital-fucking")
  const digitalFuckingMobile = findFileByName(data, "1-digital-fucking-mobile")
  const guideline1Image = isPhoneWide
    ? digitalFuckingMobile
    : digitalFuckingDesktop
  const phoneImage = findFileByName(data, "phone")

  const communicationDesktop = findFileByName(data, "2-good-communication")
  const communicationMobile = findFileByName(
    data,
    "2-good-communication-mobile"
  )
  const guideline2Image = isPhoneWide
    ? communicationMobile
    : communicationDesktop
  const listenImage = findFileByName(data, "listen")

  const dirtyTalkDesktop = findFileByName(data, "3-dirty-talk")
  const dirtyTalkMobile = findFileByName(data, "3-dirty-talk-mobile")
  const guideline3Image = isPhoneWide ? dirtyTalkMobile : dirtyTalkDesktop
  const dirtyTalkImage = findFileByName(data, "dirty-talk-2")

  const sexShakespeareDeskTop = findFileByName(data, "4-sex-shakespeare")
  const sexShakespeareMobile = findFileByName(data, "4-sex-shakespeare-mobile")
  const guideline4Image = isPhoneWide
    ? sexShakespeareMobile
    : sexShakespeareDeskTop
  const shakespeareImage = findFileByName(data, "shakespeare")

  const feelYourselfDesktop = findFileByName(data, "5-feel-yourself")
  const feelYourselfMobile = findFileByName(data, "5-feel-yourself-mobile")
  const guideline5Image = isPhoneWide ? feelYourselfMobile : feelYourselfDesktop
  const bathtubImage = findFileByName(data, "bathtub")

  const haveFunDesktop = findFileByName(data, "6-have-fun-and-keep-going")
  const haveFunMobile = findFileByName(data, "6-have-fun-and-keep-going-mobile")
  const guideline6Image = isPhoneWide ? haveFunMobile : haveFunDesktop
  const zoomImage = findFileByName(data, "zoom")

  const madLibsDesktop = findFileByName(data, "7-fucking-mad-libs")
  const madLibsMobile = findFileByName(data, "madlib")
  const displayMadlibImage = isPhoneWide ? madLibsMobile : madLibsDesktop

  const cloudDesktop = findFileByName(data, "cloud")
  const cloudMobile = findFileByName(data, "cloud-mobile")
  const displayCloudImage = isPhoneWide ? cloudMobile : cloudDesktop

  const aboutKimImage = findFileByName(data, "about-kim")

  return (
    <PaddedWidthContainer id="sext-ed">
      <Img
        style={{ marginBottom: "50px" }}
        fluid={sexted101img.node.childImageSharp.fluid}
      />

      <FluidImageContainer>
        <Img fluid={imgFace.node.childImageSharp.fluid} />
      </FluidImageContainer>
      <Row>
        <Column style={{ margin: "auto" }}>
          <H1 style={{ width: "100%" }}>I love dirty talk. </H1>
          <Text>
            And to be sexting—that is, sending sexually explicit photos, videos
            or text-based messages—or having phone sex during this period of
            self-isolation and quarantine feels especially connective. We’re
            limited but also enabled by our devices. We’re together, apart—and
            you know most of us (all of us?) are already masturbating.
          </Text>
          <Text>
            Staying home is an opportunity to turn inward: To work on ourselves,
            to self pleasure, and to improve specific communication skills to
            share with partners, if we so choose. Think of it as self love and
            collective love in the time of covid-19.
          </Text>
          <Text>
            Tl;dr: Now is a great time to brush up on your sex talk skills!
          </Text>
        </Column>
      </Row>
      <Img
        style={{ margin: "auto" }}
        fluid={guidelineHeaderImage.node.childImageSharp.fluid}
      />

      <Row style={{ justifyContent: "flex-start", margin: "0" }}>
        <Column width={60}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline1Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row style={{ marginLeft: "5%" }} reverseColumn>
        <Column width="60">
          <Text>
            Be upfront with your partners, just as you would IRL — and it
            doesn’t have to be corny. I think it’s incredibly sexy for a new
            partner to tell me where they would like to be touched. Or for
            someone to set the vibe by asking to tell me about a specific
            memory.
          </Text>
          <Text>
            Maybe a new partner likes [redacted], but not [redacted] or their
            [redacted] are especially sensitive. Maybe I’m at work right now and
            can’t be distracted by play by play and pictures of your dick. Get
            clear. Listen to each other; this is a dialogue, not a masturbatory
            monologue.
          </Text>
          <Text>
            Check in with partners on communications boundaries. You want to
            know that any images or text messages you send are just for them
            (unless part of y’all’s mutual agreement and interest is that they
            share your sexts with other partners, etc. — and if so, you better
            talk about it.)
          </Text>
        </Column>
        <Column width={40}>
          <div style={{ width: "85%", marginBottom: "20px" }}>
            <Img fluid={phoneImage.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-end", margin: "0" }}>
        <Column width={70}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline2Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row>
        <Column width={30}>
          <div style={{ width: "100%" }}>
            <Img fluid={listenImage.node.childImageSharp.fluid} />
          </div>
        </Column>
        <Column width={60}>
          <Text>
            Tell your partner what you like / are into / want to do / want done
            to you.
          </Text>
          <Text>
            Ask your partner what they like / are into / want to do / want done
            to them.
          </Text>
          <Text>
            Listen to each other, with respect—and then respond. Do you have
            different turn ons? Favorite positions? Do you have the same kink/s?
            Are there new things you’d like to try together? Build excitement by
            talking about them.
          </Text>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-start", margin: "0" }}>
        <Column width={75}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline3Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row style={{ marginLeft: "5%" }} reverseColumn>
        <Column width={45} style={{ marginTop: "30px" }}>
          <Text>
            Sometimes a few flirty texts are just…a few flirty texts! Just like
            physical sexual acts don’t always have to end in orgasm—thovugh, we
            love an orgasm—it can be fun to have a little chat to boost
            confidence, calm the nervous system, get the blood flowing; and
            then, put a pin in it for later, or just leave it at that. You don’t
            always have to be actively trying to get off.
          </Text>
        </Column>
        <Column width={45}>
          <div style={{ width: "100%" }}>
            <Img
              style={{ width: "70%" }}
              fluid={dirtyTalkImage.node.childImageSharp.fluid}
            />
          </div>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-end", margin: "0" }}>
        <Column width={70}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline4Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row>
        <Column>
          <div style={{ width: "100%", marginLeft: "20%" }}>
            <Img
              style={{ width: "80%", marginTop: "-25px" }}
              fluid={shakespeareImage.node.childImageSharp.fluid}
            />
          </div>
        </Column>
        <Column
          width={33}
          style={{ alignSelf: "flex-start", marginRight: "70px" }}
        >
          <Text>
            And we don’t have to be. Phone flirtation doesn’t have to be the
            most dirrty (Christina Aguilera voice)—or even that well written.
            Ask yourself what you want, what brings you pleasure, and express it
            in words that feel true to you—then move from that place.
          </Text>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-start", margin: "0" }}>
        <Column width={80}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline5Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row style={{ marginLeft: "5%" }} reverseColumn>
        <Column>
          <Text>
            Set the mood if you can: Think of whatever makes you feel sexy. Take
            a shower, scrub, and moisturize. Shave. Light some candles, if
            you’re into that. Put on underthings that make you feel fly. Have a
            glass of wine. Roll a joint.
          </Text>
          <Text>
            Then go ahead: Describe where you are, the scent of the candles
            you’re burning, the slip of the sheets on the bed, what you’re
            wearing. Ask your partner to do the same. Not only does painting
            this picture help close the distance, you’re hyping yourself up —
            how hot do you sound right now? You, yes you; you’re that hot bitch.
          </Text>
        </Column>
        <Column>
          <div style={{ width: "100%" }}>
            <Img
              style={{ width: "75%", marginLeft: "60px", marginTop: "-5px" }}
              fluid={bathtubImage.node.childImageSharp.fluid}
            />
          </div>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-end", margin: "0" }}>
        <Column width={55}>
          <div style={{ width: "100%" }}>
            <Img fluid={guideline6Image.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row>
        <Column width={50}>
          <div style={{ width: "100%", marginLeft: "30%" }}>
            <Img
              style={{ width: "80%", marginTop: "-25px" }}
              fluid={zoomImage.node.childImageSharp.fluid}
            />
          </div>
        </Column>
        <Column width={35}>
          <Text>
            Sex can be awkward and embarassing! Even (especially) in person. But
            this should be fun. Be gentle with yourself, especially if you’re
            new to this. Don’t be afraid to say things you haven’t said before —
            and don’t forget to laugh a little when something funny comes up,
            like a WiFi delay or your partner’s quarantine housemate walks into
            the Zoom frame.
          </Text>
          <Text>
            Like most things in life, dirty talk gets easier with practice.
          </Text>
        </Column>
      </Row>

      <Row style={{ justifyContent: "flex-start", margin: "0" }}>
        <Column width={80}>
          <div style={{ width: "100%" }}>
            <Img fluid={displayCloudImage.node.childImageSharp.fluid} />
          </div>
        </Column>
        <Column width={20}>
          <div style={{ width: "100%", marginTop: "20%" }}>
            <Img fluid={displayMadlibImage.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
      <Row style={{ justifyContent: "flex-end" }}>
        <Column width={50}>
          <div style={{ width: "100%" }}>
            <Img fluid={aboutKimImage.node.childImageSharp.fluid} />
          </div>
        </Column>
      </Row>
    </PaddedWidthContainer>
  )
}

export default Sext
