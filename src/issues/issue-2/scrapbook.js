import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { mediaQueries } from "../../styles/layout"

const Background = styled.div`
  position: relative;
`

const Credit = styled.div`
  font-family: "HelveticaNeue-Medium", "Helvetica Neue Medium", "Helvetica Neue";
  font-size: 17px;
  position: absolute;
  bottom: 0;
  right: 10px;

  ${mediaQueries.phoneWide} {
    font-size: 15px;
  }
`

const Scrapbook = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/scrapbook.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <Background>
      <Img fluid={data.file.childImageSharp.fluid} />
      <Credit right>collage by Caitlin Hohn @c_hohn </Credit>
    </Background>
  )
}
export default Scrapbook
