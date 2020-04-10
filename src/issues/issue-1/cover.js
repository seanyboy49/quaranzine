import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { PaddedWidthContainer } from "../../styles/layout"
import { H1 } from "../../styles/text"

const Cover = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "quaranzine-hero.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <>
      <Img fluid={data.file.childImageSharp.fluid} />
      <PaddedWidthContainer id="manifesto">
        <H1 black right>
          issue #1: by hand
        </H1>
        <H1>
          qrzn is the mag for people who are bored out of their minds and want
          to see stuff or read stuff that’s fairly interesting. Mostly it’s a
          way for my friends and i to force each other to design things even
          though we’d much rather sit and watch the world burn around us. Each
          issue is based on a different theme, so we’re reinventing the magazine
          every week. We’ve got contributors from all over the world, like New
          York, Paris, Toronto, Singapore, Lima, New Jersey, etc. If you want to
          be a part of this, dm us your stuff @qrzn_mag
        </H1>
      </PaddedWidthContainer>
    </>
  )
}

export default Cover
