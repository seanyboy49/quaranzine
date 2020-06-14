import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"

const ResizeImage = styled.div`
  width: 500px;
  height: 800px;
  margin: 0;
  padding: 0;
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
  return (
    <Carousel autoPlay>
      <div
        style={{
          background: "#d6f2f2",
          width: "100%",
          height: "50%",
          position: "fixed",
          top: "0",
          left: "0",
        }}
      >
        <ResizeImage>
          <Img fluid={afterShowerImg.node.childImageSharp.fluid} />
        </ResizeImage>
      </div>
      <div>
        <Img fluid={boulangerieImg.node.childImageSharp.fluid} />
        <p className="legend">Legend 2</p>
      </div>
    </Carousel>
  )
}

export default FavoriteSmells
