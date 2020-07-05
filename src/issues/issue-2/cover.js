import React from "react"
import Img from "gatsby-image"
import { findFileByName } from "../../utils"

const Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "issue2-images" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const CoverImage = findFileByName(data, "issue2-cover")

  return (
    <>
      <Img fluid={CoverImage.node.childImageSharp.fluid} />
    </>
  )
}

export default Cover
