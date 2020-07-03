import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import { useMediaQuery } from "react-responsive"

import Header from "./Header"
import AnimatedWords from "./AnimatedWords"
import Pagination from "./Pagination"

import useMedia from "./useMedia"
import useMeasure from "./useMeasure"
import usePositions from "./usePositions"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums, calculateGridItems } from "./utility"
import { Background, Text, FlexContainer, ImgWrap } from "./styled"
import { mediaQueries, breakpoints } from "../../../styles/layout"

const xOffset = window.innerWidth / 2
const yOffset = window.innerHeight / 2

const DavidByrne = () => {
  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })
  // Query images
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
  // Map images to album data
  const albums = mapImagesToAlbums(albumByYearData, big, mini)

  // Keep track of current album
  const [albumIndex, setAlbumIndex] = useState(0)
  const currentAlbum = albums[albumIndex]
  const words = currentAlbum.words

  // Hook1: Tie media queries to the number of columns
  const numberOfColumns = useMedia(
    ["(min-width: 1440px)", "(min-width: 1000px)"],
    [4, 3],
    2
  )

  // Hook2: Measure the width of the container element
  const [ref, { width: containerWidth }] = useMeasure()

  const half = Math.ceil(words.length / 2)
  const firstHalfWords = words.slice(0, half)
  const secondHalfWords = words.slice(half)

  // Transform items to give them animatable values
  const [leftHeights, leftGridItems] = calculateGridItems({
    numColumns: numberOfColumns,
    items: firstHalfWords,
    width: containerWidth,
  })

  const [rightHeights, rightGridItems] = calculateGridItems({
    numColumns: numberOfColumns,
    items: secondHalfWords,
    width: containerWidth,
  })

  //Hook3: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const renderLeftTransitions = usePositions(leftGridItems, {
    xOffset,
    yOffset,
  })

  const renderRightTransitions = usePositions(rightGridItems, {
    xOffset: -xOffset,
    yOffset,
  })
  console.log("render")

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />

      <FlexContainer>
        <AnimatedWords
          forwardedRef={ref}
          heights={leftHeights}
          renderTransitions={renderLeftTransitions}
        />

        <ImgWrap>
          <Img
            fluid={currentAlbum.bigImg.childImageSharp.fluid}
            style={isPhoneWide ? { maxHeight: "30vh" } : { minWidth: "25vw" }}
            imgStyle={{ objectFit: "contain" }}
          />
        </ImgWrap>

        <AnimatedWords
          forwardedRef={ref}
          heights={rightHeights}
          renderTransitions={renderRightTransitions}
        />
      </FlexContainer>

      <Text bold fontSize={30} color={currentAlbum.textColor}>
        {currentAlbum.title}
      </Text>
      <Pagination
        albums={albums}
        albumIndex={albumIndex}
        onClick={setAlbumIndex}
      />
    </Background>
  )
}

export default DavidByrne
