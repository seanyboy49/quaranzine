import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import { Text } from "../../styles/text"

const Background = styled.div`
  position: relative;
`

const Credit = styled(Text)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px;
`

const Esperas = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "issue2-images/esperas.jpg" }) {
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
      <Credit white>collage by Diego Carbajal @clickclackonthestairs</Credit>
    </Background>
  )
}

export default Esperas
