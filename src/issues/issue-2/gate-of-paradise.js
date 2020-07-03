import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { findFileByName } from "../../utils"

const ParadiseWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`

const LeftSection = styled.div`
  margin: 50px 0px;
  margin-right: 7%;
  width: 35%;
`
const RightSection = styled.div`
  width: 35%;
  margin-left: 7%;
`
const PMargin = styled.p`
  margin: ${props => props.margin};
  font-size: 1.25rem;
`
const ComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
const ImageWrapper = styled.div`
    width: 130%
    height: 130%
`
const OverFlowContainer = styled.div`
  overflow: hidden;
  width: 100px;
`
const Title = styled.h2`
  font-size: 15rem;
  padding: 0;
  margin: 0;
  margin-left: -5rem;
  line-height: 12rem;
  font-weight: normal;
`
const ParadiseTitle = styled.h2`
  font-size: 15rem;
  z-index: 2;
  font-weight: normal;
`
const Author = styled.p`
  z-index: 2;

  position: absolute;
  top: 13.5rem;
  left: -9rem;
  font-size: 2rem;
  font-weight: normal;
`
const TextContainer = styled.div`
  position: absolute;
  top: -0.5rem;
  z-index: 1;
  right: -15%;
  padding: 0;
  margin: 0;
`

const Paradise = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "issue2-images/gate-of-paradise-images" }
        }
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

  const park_img = findFileByName(data, "park-edit")
  const sidewalk_img = findFileByName(data, "sidewalk-edit")
  const street_img = findFileByName(data, "street-edit")
  return (
    <ParadiseWrapper>
      <Title>The Gates</Title>
      <TextContainer>
        <Author>by David Byrne</Author>
        <ParadiseTitle>of Paradise</ParadiseTitle>
      </TextContainer>
      <ComponentWrapper>
        <LeftSection>
          <Img fluid={sidewalk_img.node.childImageSharp.fluid} />
          <PMargin margin={"120px 40px"}>
            It's a sin to seek perfection
            <br />
            It's a sin to help the poor
            <br />
            It's a sin to hold convictions
            <br />
            For none of them are true
            <br />
            <br />
            And the laws of men are not the laws of heaven
            <br />
            And angel's breath is like the desert wind
            <br />
            And terrorists are acting out of love, sweet love
            <br />
            To bring us home again
            <br />
            <br />
            Beware of good intentions
            <br />
            And the passion in their eyes
            <br />
            For none of them can open
            <br />
            The gates of paradise
            <br />
          </PMargin>
        </LeftSection>
        <RightSection>
          <Img fluid={street_img.node.childImageSharp.fluid} />
          <PMargin margin={"70px 0px"}>
            I am nothing like my sister
            <br />
            I am nothing like my mom
            <br />
            You can't see me in my father
            <br />
            Wonder where did I come from?
            <br />
            <br />
            And the laws of men are not the laws of heaven
            <br />
            And angel's breath is like the desert wind
            <br />
            And terrorists are acting out of love, sweet love
            <br />
            To bring us home again
            <br />
          </PMargin>
          <Img fluid={park_img.node.childImageSharp.fluid} />
        </RightSection>
      </ComponentWrapper>
    </ParadiseWrapper>
  )
}

export default Paradise
