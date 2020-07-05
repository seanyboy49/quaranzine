import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { findFileByName } from "../../utils"
import styled from "styled-components"
import { mediaQueries, breakpoints } from "../../styles/layout"

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

const IssueNum = styled.h3`
  font-size: 3rem;
  color: white;
  margin: 0;
  padding: 0;

  ${mediaQueries.tabletWide} {
    font-size: 2rem;
  }
`

const Cover = () => {
  const coverImage = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/issue2-cover.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  console.log("coverImage", coverImage)

  return (
    <>
      <Img fluid={coverImage.file.childImageSharp.fluid} />
      <IssueWrapper>
        <IssueNum>issue #2: collage</IssueNum>
      </IssueWrapper>
    </>
  )
}

export default Cover
