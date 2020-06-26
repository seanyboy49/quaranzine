import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Background } from "./styled"
import { PaddedWidthContainer, breakpoints } from "../../../styles/layout"
import slides from "./slides"

const DavidByrne = () => {
  const { mini, big } = useStaticQuery(graphql`
    query {
      mini: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/mini" } }
      ) {
        ...ImageFragment
      }
      big: allFile(
        filter: { relativeDirectory: { eq: "issue-2/david-byrne/big" } }
      ) {
        ...ImageFragment
      }
    }
  `)

  const slidesWithImages = slides.map(slide => {
    const bigImg = big.nodes.find(node => node.name === slide.year)
    const miniImg = mini.nodes.find(node => node.name === slide.year)

    return {
      ...slide,
      bigImg,
      miniImg,
    }
  })

  console.log("slidesWithImages", slidesWithImages)

  return (
    <Background backgroundColor="blue">
      <h1>David Byrne</h1>
    </Background>
  )
}

export default DavidByrne
