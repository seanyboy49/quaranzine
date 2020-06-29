import React, { useState } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useTransition } from "react-spring"

import Header from "./Header"
import Pagination from "./Pagination"

import useMedia from "./useMedia"
import useMeasure from "./useMeasure"
import albumByYearData from "./albumsByYear.js"
import { mapImagesToAlbums } from "./utility"
import {
  Background,
  Text,
  FlexContainer,
  ImgWrap,
  AnimatedWordContainer,
  AnimatedTextWrap,
  TextBox,
} from "./styled"

const DavidByrne = () => {
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

  // Form a grid of stacked items using width & columns
  // Column heights are initiliazed to zero
  // because we'll add to them every time we place a new tile
  let leftHeights = new Array(numberOfColumns).fill(0)

  const CARD_HEIGHT = 85

  // select the first half of the list
  // const half = Math.ceil(words.length / 2)
  // const firstHalfWords = words.slice(0, half)
  // const secondHalfWords = words.slice(half)

  let leftGridItems = words.map(word => {
    // We want to fill the smallest column with a tile
    // before adding tiles to other columns

    const columnIndex = leftHeights.indexOf(Math.min(...leftHeights))
    // X = Width of container divided by number of columns and multipled by column index. This calculates how much to translate x
    // Y = The height of the column
    const xy = [
      (containerWidth / numberOfColumns) * columnIndex,
      leftHeights[columnIndex],
    ]

    // Increase the column height by the card height
    leftHeights[columnIndex] += CARD_HEIGHT

    return {
      word,
      xy,
      width: containerWidth / numberOfColumns, // card width is calculated to match the column width
      height: CARD_HEIGHT,
    }
  })

  // console.log("leftGridItems", leftGridItems)

  //Hook5: Turn the static grid values into animated transitions, any addition, removal or change will be animated
  const xOffset = window.innerWidth / 2
  const yOffset = 212

  let leftTransitions = useTransition(leftGridItems, item => item.word, {
    from: ({ xy, width, height }) => {
      return {
        xy: [xOffset, yOffset],
        width,
        height,
        opacity: 0,
      }
    },
    enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: ({ xy, width, height }) => {
      return {
        xy: [xOffset, yOffset],
        opacity: 0,
      }
    },
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  })

  console.log("render")

  return (
    <Background backgroundColor={currentAlbum.backgroundColor}>
      <Header currentAlbum={currentAlbum} />

      <FlexContainer>
        <AnimatedWordContainer
          {...ref}
          style={{ height: Math.max(...leftHeights) }}
        >
          {leftTransitions.map(
            ({ item, props: { xy, height, ...rest }, key }) => {
              // const [xSkew, ySkew] = getRandomDegrees();
              return (
                <AnimatedTextWrap
                  key={key}
                  style={{
                    transform: xy.interpolate(
                      (x, y) => `translate3d(${x}px,${y}px,0)`
                    ),
                    ...rest,
                  }}
                >
                  <TextBox>{item.word}</TextBox>
                </AnimatedTextWrap>
              )
            }
          )}
        </AnimatedWordContainer>

        <ImgWrap>
          <Img fluid={currentAlbum.bigImg.childImageSharp.fluid} />
        </ImgWrap>

        <AnimatedWordContainer></AnimatedWordContainer>
      </FlexContainer>

      <Text>{currentAlbum.title}</Text>
      <Pagination
        albums={albums}
        albumIndex={albumIndex}
        onClick={setAlbumIndex}
      />
    </Background>
  )
}

export default DavidByrne
