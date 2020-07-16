import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { mediaQueries } from "../../styles/layout"
import Nav from "../../components/navBar"
import grit from "./david-byrne/grit"

const Background = styled.div`
  background-color: #ecdb3f;
  background-image: url(${grit});
`

const IssueWrapper = styled.div`
  background-color: #ff7b4d;
  margin: 0;
  padding: 2rem;
  display: flex;
  justify-content: flex-end;

  ${mediaQueries.tabletWide} {
    padding: 1rem;
  }
`

const IssueNum = styled.h1`
  font-size: 3rem;
  color: white;
  margin: 0;
  padding: 0;

  ${mediaQueries.tabletWide} {
    font-size: 2rem;
  }
  ${mediaQueries.phoneWide} {
    font-size: 1.25rem;
  }
`
const About = styled.div`
  background-color: #7fdc99;
  margin: 0;
  padding: 5rem;

  ${mediaQueries.phoneWide} {
    padding: 2rem;
  }
`
const H1 = styled.h1`
  font-size: 2rem;
  padding: 0;
  margin: 0;

  ${mediaQueries.phoneWide} {
    font-size: 1.25rem;
  }
`

const Cover = () => {
  const coverImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/issue-2-cover.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Background>
      <Nav title={"for the bored by the bored"} />
      <Img fluid={coverImage.file.childImageSharp.fluid} />
      <IssueWrapper>
        <IssueNum>issue #2: collage</IssueNum>
      </IssueWrapper>
      <About>
        <H1>
          qrzn is the mag for people who are bored out of their minds and want
          to see stuff or read stuff that’s fairly interesting. Mostly it’s a
          way for us to design stuff so that we can keep our minds off of the
          end of the world. Each issue is based on a different theme, so we’re
          reinventing the magazine every time. We’ve got contributors from all
          over the world, like New York, Paris, Toronto, Singapore, Lima, New
          Jersey, etc. If you want to be a part of this, dm us your stuff
          @qrzn_mag
        </H1>
      </About>
    </Background>
  )
}

export default Cover
