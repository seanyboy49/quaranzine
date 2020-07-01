import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { findFileByName } from "../../utils"

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

const ParadiseTitle = styled.h2`
  font-size: 15rem;
  white-space: nowrap;
  top: 170px;
  position: absolute;
  z-index: 1;
  left: -55px;
  margin-right: 10px;
  align-text: ;
`
const OverFlowContainer = styled.div`
  overflow: hidden;
  width: 100px;
`
const Title = styled.h2`
  font-size: 15rem;
  padding: 0;
  margin: 0;
  white-space: nowrap;
`
const TextContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-left: -6%;
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
    <>
      <TextContainer>
        <Title>The Gate</Title>
      </TextContainer>
      <ParadiseTitle>of Paradise</ParadiseTitle>
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
    </>
  )
}

export default Paradise
