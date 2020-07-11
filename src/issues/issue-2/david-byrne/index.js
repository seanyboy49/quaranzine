import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useMediaQuery } from "react-responsive"

import Header from "./Header"
import AnimatedWords from "./AnimatedWords"
import Pagination from "./Pagination"

import useMedia from "./useMedia"
import useMeasure from "./useMeasure"
import usePositions from "./usePositions"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums, calculateGridItems } from "./utility"
import {
  Background,
  Text,
  FlexContainer,
  ImgWrap,
  WordCountContainer,
} from "./styled"
import { breakpoints } from "../../../styles/layout"

let xOffset
try {
  xOffset = window.innerWidth / 2
} catch (e) {
  console.log(e)
}

const DavidByrne = () => {
  const isPhoneWide = useMediaQuery({
    query: breakpoints.phoneWide,
  })
  // Query images
  const { mini, big } = useStaticQuery(graphql`
    query {
      mini: allFile(
        filter: { relativeDirectory: { eq: "issue2-images/david-byrne/mini" } }
      ) {
        ...ImageFragment
      }
      big: allFile(
        filter: { relativeDirectory: { eq: "issue2-images/david-byrne/big" } }
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

  // Hook1: Tie media queries to the number of columns and height offset
  const { col, heightOffset } = useMedia({
    queries: [
      "(min-width: 1440px)",
      "(min-width: 1024px)",
      "(max-width: 600px)",
    ],
    values: [
      { col: 4, heightOffset: 85 },
      { col: 3, heightOffset: 65 },
      { col: 4, heightOffset: 40 },
    ],
    defaultValue: { col: 2, heightOffset: 55 },
  })

  // Hook2: Measure the width of the container element
  const [ref, { width: containerWidth }] = useMeasure()

  const half = Math.ceil(words.length / 2)
  const firstHalfWords = words.slice(0, half)
  const secondHalfWords = words.slice(half)

  // Transform items to give them animatable values
  const [leftHeights, leftGridItems] = calculateGridItems({
    numColumns: col,
    items: firstHalfWords,
    width: containerWidth,
    heightOffset,
  })

  const [rightHeights, rightGridItems] = calculateGridItems({
    numColumns: col,
    items: secondHalfWords,
    width: containerWidth,
    heightOffset,
  })

  //Hook3: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const renderLeftTransitions = usePositions(leftGridItems, {
    xOffset,
  })

  const renderRightTransitions = usePositions(rightGridItems, {
    xOffset: -xOffset,
  })

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />

      <FlexContainer>
        <AnimatedWords
          forwardedRef={ref}
          heights={leftHeights}
          renderTransitions={renderLeftTransitions}
        />

        {isPhoneWide ? (
          <Pagination
            albums={albums}
            albumIndex={albumIndex}
            onClick={setAlbumIndex}
          />
        ) : (
          <ImgWrap>
            <Img
              fluid={currentAlbum.bigImg.childImageSharp.fluid}
              style={isPhoneWide ? { maxHeight: "20vh" } : { maxWidth: "15vw" }}
              imgStyle={{ objectFit: "contain" }}
            />
          </ImgWrap>
        )}

        <AnimatedWords
          forwardedRef={ref}
          heights={rightHeights}
          renderTransitions={renderRightTransitions}
        />
      </FlexContainer>

      <FlexContainer>
        <Text
          style={{ margin: "4vh auto" }}
          bold
          large
          color={currentAlbum.textColor}
        >
          {currentAlbum.title}
        </Text>

        <WordCountContainer color={currentAlbum.textColor}>
          <Text bold color={currentAlbum.textColor}>
            Word Count
          </Text>
          <Text bold color={currentAlbum.textColor}>
            {currentAlbum.wordCount}
          </Text>
        </WordCountContainer>
      </FlexContainer>

      {!isPhoneWide && (
        <Pagination
          albums={albums}
          albumIndex={albumIndex}
          onClick={setAlbumIndex}
        />
      )}
    </Background>
  )
}

export default DavidByrne
